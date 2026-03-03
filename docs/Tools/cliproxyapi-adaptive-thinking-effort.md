---
title: "Claude Adaptive Thinking — output_config.effort 기반 사고 모드 설계"
sidebar_label: "Adaptive Thinking 설계 패턴"
tags: [ai, claude, thinking, proxy, golang]
date: 2026-03-03
---

# Claude Adaptive Thinking — output_config.effort 기반 사고 모드 설계

## 배운 것

Claude 모델의 Thinking 기능을 프록시 레이어에서 지원할 때, 단순 on/off 플래그보다  
**`output_config.effort` 레벨 기반의 adaptive 모드**로 설계하면 더 유연하게 사고 깊이를 제어할 수 있다.

## 왜 중요한가

- Claude의 Extended Thinking은 토큰 비용이 높으므로 요청 성격에 맞게 조절이 필요
- "항상 최대 사고"보다 **요청 복잡도에 따라 자동 조정(adaptive)** 하는 것이 효율적
- 프록시 레이어에서 이를 통일된 인터페이스로 추상화하면 클라이언트는 간단한 설정만으로 제어 가능

## 핵심 설계

```
output_config.effort 레벨:
  - "low"    → thinking 비활성화 (빠른 응답)
  - "medium" → 기본 thinking (중간 복잡도)
  - "high"   → extended thinking 활성화
  - "max"    → 최대 budget_tokens 할당 (신설)

모드:
  - "auto"     → 모델이 스스로 사고 여부 결정
  - "adaptive" → effort 레벨에 따라 프록시가 thinking 파라미터 자동 조정
```

## 구현 포인트 (Go)

```go
// effort 레벨 → thinking 파라미터 매핑
func resolveThinkingConfig(effort string) ThinkingConfig {
    switch effort {
    case "max":
        return ThinkingConfig{Type: "enabled", BudgetTokens: maxBudget}
    case "high":
        return ThinkingConfig{Type: "enabled", BudgetTokens: highBudget}
    case "medium":
        return ThinkingConfig{Type: "enabled", BudgetTokens: medBudget}
    default: // "low" or unset
        return ThinkingConfig{Type: "disabled"}
    }
}
```

- `internal/thinking/` 패키지에 전용 로직 분리
- `internal/translator/` 에서 요청 변환 시 위 설정 주입
- 각 executor가 공통 인터페이스를 통해 thinking 설정 수신

## 배운 점

- 기능 온/오프를 boolean 하나로 설계하면 나중에 확장이 어렵다
- 처음부터 **레벨(level) 또는 enum 기반** 설계가 유지보수에 유리
- 프록시 레이어에서 AI 파라미터를 추상화할 때, 내부 패키지(`/internal/thinking`)로 분리하면 번역 로직과 비즈니스 로직이 섞이지 않는다

## 참고

- CLIProxyAPI commit `c447937` — feat(thinking): add adaptive thinking support for Claude models
- 변경 파일 13개, +309 -47 라인
