---
description: LLM API 변환 레이어에서 tool_result 이미지를 올바르게 전달하는 방법과, primary model 목록을 유지하면서 빈 auth를 백필하는 패턴을 정리한다.
---

# CLIProxyAPI — tool_result 이미지 변환 & primary model 목록 유지 패턴

## 배경

오픈소스 프로젝트 CLIProxyAPI에서 오늘 머지된 PR 두 건을 리뷰하면서 다중 LLM API 변환 레이어의 두 가지 핵심 패턴을 학습했다.

---

## 1. tool_result 이미지 → Gemini `functionResponse.parts` 변환 (`PR #1682`)

### 문제

Claude의 `tool_result` 블록 안에 이미지(base64 또는 URL)가 포함될 수 있다.  
이를 Gemini API 형식으로 변환할 때 이미지를 어디에 넣어야 하는지가 불분명했다.

잘못된 위치에 넣으면 Gemini가 이미지를 무시하거나 요청 자체를 거부한다.

### 해결 패턴

Gemini에서 도구 결과는 `functionResponse` 형식으로 전달된다.  
이미지 등 추가 콘텐츠는 `functionResponse.parts` 배열에 별도 파트로 삽입해야 한다.

```json
{
  "role": "tool",
  "parts": [
    {
      "functionResponse": {
        "name": "tool_name",
        "response": { "result": "텍스트 결과" }
      }
    },
    {
      "inlineData": {
        "mimeType": "image/png",
        "data": "<base64>"
      }
    }
  ]
}
```

### mimeType 통일

Claude 측에서 mimeType이 `image/jpg`로 올 수도 있는데,  
Gemini는 `image/jpeg`만 허용한다.  
변환 레이어에서 `image/jpg` → `image/jpeg` 정규화를 반드시 적용해야 한다.

```go
if mimeType == "image/jpg" {
    mimeType = "image/jpeg"
}
```

### 핵심

- 다중 모달 tool_result는 `parts` 배열 구조를 활용한다.
- mimeType은 수신 측 API 사양에 맞게 정규화해야 한다 — 보내는 쪽이 맞더라도 받는 쪽이 거부할 수 있다.

---

## 2. Primary model 목록 유지 + 빈 auth 백필 패턴 (`PR #1699`)

### 문제

`antigravity` 모드(부하 분산/폴백 실행기)에서 primary model 목록이 특정 조건에서 덮어써지는 버그가 있었다.  
또한 auth 정보가 비어 있는 항목이 폴백 체인에 끼어들어 실패를 유발했다.

### 해결 패턴

**Primary model 목록 보호:**  
초기화 시 primary 목록을 별도로 스냅샷해두고, 이후 재계산 시에도 이 원본을 기준으로 사용한다.

```go
// 초기화 시 primary 목록 저장
executor.primaryModels = copySlice(models)

// 재계산 시 primary를 기준으로 구성
current := buildFromPrimary(executor.primaryModels, ...)
```

**빈 auth 백필:**  
auth가 비어 있는 항목은 폴백 체인에서 제외하거나, 공유 기본 auth로 채워준다.

```go
for i, entry := range entries {
    if entry.Auth == "" {
        entries[i].Auth = defaultAuth
    }
}
```

### 핵심

- 부하 분산/폴백 구조에서 **원본 목록(primary)** 과 **현재 상태(active)** 를 명확히 분리해야 한다.
- 빈 필드 백필은 요청 실행 직전이 아니라 **초기화 시점** 에 하는 것이 안전하다.

---

## 참고

- CLIProxyAPI PR #1682: `fix(antigravity): place tool_result images in functionResponse.parts and unify mimeType`
- CLIProxyAPI PR #1699: `fix(antigravity): keep primary model list and backfill empty auths`
