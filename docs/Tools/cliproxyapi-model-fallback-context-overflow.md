---
description: LLM API 프록시에서 모델 오류 발생 시 자동 fallback을 구현하는 패턴과, context overflow 시 빈 응답 대신 명시적 오류를 반환해야 하는 이유를 정리한다.
---

# CLIProxyAPI — 모델 자동 Fallback & Context Overflow 오류 처리 패턴

## 배경

CLIProxyAPI 오픈소스 프로젝트의 PR 리뷰 중 두 가지 실용적인 패턴을 학습했다.  
둘 다 LLM API를 래핑하는 프록시 레이어에서 자주 마주치는 문제다.

---

## 1. 모델 오류 자동 Fallback 메커니즘 (`feat(model-fallback)`)

### 문제

특정 모델이 일시적으로 사용 불가(rate limit, capacity 초과, 서비스 점검 등)일 때  
클라이언트에게 그대로 오류를 반환하면 사용자 경험이 떨어진다.

### Fallback 패턴

```
요청 → 주 모델 호출 → 오류(5xx / rate_limit) 발생
                              ↓
                     fallback 모델 목록 순회
                              ↓
                     첫 번째 성공 응답 반환
```

```ts
// 개념 코드
async function callWithFallback(models: string[], request: Request) {
  for (const model of models) {
    try {
      return await callModel(model, request);
    } catch (err) {
      if (isFatalError(err)) throw err;   // 재시도 불가 오류는 즉시 throw
      // transient 오류면 다음 모델로
    }
  }
  throw new Error('All models failed');
}
```

### 핵심 고려사항

- **fallback 대상 오류를 명확히 정의**해야 한다. 인증 오류(`401`), 잘못된 요청(`400`) 등은 다른 모델로 바꿔도 해결되지 않으므로 fallback 제외.
- fallback이 일어난 사실을 응답 헤더나 로그에 남겨두면 운영 시 디버깅에 유리하다.
- 모델 간 응답 형식 차이(context window 크기, 지원 파라미터 등)를 정규화하는 레이어가 필요하다.

---

## 2. Context Overflow 시 빈 응답 금지 패턴 (`fix(codex)`)

### 문제

입력 토큰이 모델의 context window를 초과했을 때 일부 구현에서는 빈 문자열(`""`)이나  
불완전한 응답을 마치 정상 응답처럼 반환하는 경우가 있다.

```json
// 잘못된 처리: 오류 대신 빈 응답 반환
{ "choices": [{ "message": { "content": "" } }] }
```

클라이언트는 이것이 "빈 정상 응답"인지 "context overflow로 인한 실패"인지 구분할 수 없다.

### 올바른 처리

```ts
if (isContextOverflow(error)) {
  // 빈 응답이 아닌 명시적 오류 반환
  throw new ContextLengthExceededError(
    `Input exceeds context window: ${tokenCount} > ${maxTokens}`
  );
}
```

응답 형식:
```json
{
  "error": {
    "type": "context_length_exceeded",
    "message": "Input tokens (32768) exceed model context window (16384)"
  }
}
```

### 핵심

- **실패는 명시적으로 표현**해야 한다. 빈 응답과 의도적 빈 응답은 구분 불가능하다.
- 클라이언트가 context overflow를 감지해 입력을 줄이거나 분할하는 전략을 취할 수 있도록 오류 타입을 구체적으로 전달해야 한다.
- "침묵하는 실패(silent failure)"는 디버깅을 매우 어렵게 만든다.

---

## 참고

- CLIProxyAPI PR #1785: `feat(model-fallback): 모델 오류 자동 fallback 메커니즘 도입`
- CLIProxyAPI PR #1786: `fix(codex): context overflow 시 빈 응답 대신 오류 반환`
