---
description: SSE 스트리밍에서 오류 청크를 올바르게 처리하는 방법과, OAuth refresh_token_reused 오류 시 재시도를 하지 않아야 하는 이유를 정리한다.
---

# CLIProxyAPI — SSE 스트림 오류 청크 처리 & OAuth no-retry 패턴

## 배경

오픈소스 프로젝트 CLIProxyAPI에서 오늘 머지된 PR들을 리뷰하면서 두 가지 패턴을 학습했다.

---

## 1. SSE 스트리밍에서 오류 청크 처리 (`fix(responses): stream error chunks`)

### 문제

`text/event-stream` 응답 스트림 도중 서버가 오류를 담은 청크를 보내는 경우가 있다.  
이를 무시하거나 파싱 없이 그대로 흘리면 클라이언트에서 예외가 발생하거나 잘못된 부분 응답이 완성된 것처럼 처리된다.

```
data: {"error": {"type": "overloaded_error", "message": "Overloaded"}}
```

### 해결 패턴

스트림 파이프라인에서 각 청크를 파싱한 뒤 `error` 키가 존재하면 즉시 스트림을 종료하고 적절한 HTTP 상태코드를 클라이언트에 전달한다.

```ts
// 개념 코드
for await (const chunk of stream) {
  const parsed = tryParseJSON(chunk);
  if (parsed?.error) {
    throw new APIError(parsed.error);
  }
  yield chunk;
}
```

### 핵심

- 스트리밍 중간에도 오류 청크가 올 수 있다 — 스트림 시작이 성공했다고 끝까지 정상인 게 아니다.
- `data: [DONE]` 이전에 오류가 오면 반드시 핸들링해야 한다.

---

## 2. OAuth `refresh_token_reused` 오류 시 재시도 금지 패턴

### 문제

OAuth 토큰 갱신 중 `refresh_token_reused` 오류가 발생했을 때 재시도(retry)를 하면 안 된다.  
이 오류는 이미 사용된 리프레시 토큰을 재사용했다는 의미로, 보안 정책상 해당 리프레시 토큰 계열 전체가 무효화된다.

### 왜 재시도하면 안 되는가?

- 재시도할 토큰이 이미 무효화됐으므로 성공할 수 없다.
- 일부 Authorization Server는 반복 시도를 탐지해 계정을 잠글 수 있다.
- 지수 백오프(exponential backoff)를 적용해도 근본 문제가 해결되지 않는다.

### 올바른 처리

```ts
if (error.code === 'refresh_token_reused') {
  // 재시도 없이 즉시 재인증 요구
  clearStoredTokens();
  redirectToLogin();
  return; // do NOT retry
}
```

### 핵심

- **재시도 가능한 오류(transient)** 와 **재시도 불가 오류(fatal/security)** 를 구분해야 한다.
- `refresh_token_reused`는 후자에 해당하며, 유일한 해결책은 사용자에게 재인증을 요청하는 것이다.

---

## 참고

- CLIProxyAPI PR #1680: `fix(responses): stream error chunks` — by canxin121
- CLIProxyAPI PR #1687: `fix(codex): refresh_token_reused no-retry` — by lyd123qw2008
- [OAuth 2.0 Refresh Token 보안 고려사항 (RFC 6749 §10.4)](https://datatracker.ietf.org/doc/html/rfc6749#section-10.4)
