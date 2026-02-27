---
title: "동시 Auto-Refresh 제한으로 Refresh Storm 방지"
sidebar_label: "Refresh Storm 방지 패턴"
tags: [auth, concurrency, golang, api]
date: 2026-02-27
---

# 동시 Auto-Refresh 제한으로 Refresh Storm 방지

## 배운 것

인증 토큰을 자동 갱신(auto-refresh)하는 시스템에서, 동시에 여러 요청이 몰릴 때 모두가 갱신을 시도하면 **refresh storm**이 발생할 수 있다.  
이를 막기 위해 **동시 실행 수에 상한(max concurrency)**을 두는 것이 효과적이다.

## 왜 문제인가

- 토큰 만료 직전 다수의 API 요청이 동시에 들어오면, 각 요청이 독립적으로 refresh를 시도
- 인증 서버에 수십~수백 개의 refresh 요청이 한꺼번에 쏟아짐
- Rate limit 초과, 불필요한 토큰 발급, 레이스 컨디션 등의 문제로 이어짐

## 해결 방법 (Go 예시)

```go
const maxConcurrentRefresh = 16

// semaphore 역할을 하는 채널로 동시 실행 수 제한
sem := make(chan struct{}, maxConcurrentRefresh)

func refreshToken(ctx context.Context) error {
    select {
    case sem <- struct{}{}:
        defer func() { <-sem }()
    case <-ctx.Done():
        return ctx.Err()
    }
    // 실제 refresh 로직
    return doRefresh(ctx)
}
```

- 채널을 semaphore로 활용해 최대 16개까지만 동시 refresh 허용
- 나머지는 대기(또는 이미 갱신된 토큰 재활용)

## 핵심 포인트

| 상황 | 방법 |
|------|------|
| 동시 refresh 폭주 방지 | semaphore 또는 `sync.Mutex` + singleflight 패턴 사용 |
| 이미 갱신 중일 때 | `golang.org/x/sync/singleflight`로 하나만 실행하고 결과 공유 |
| 상한값 선택 | 인증 서버의 rate limit에 맞게 조정 (예: 16) |

## 관련 패턴

- **singleflight**: 동일한 키에 대해 하나의 요청만 실행하고 결과를 공유 → 중복 refresh 완전 제거
- **Exponential Backoff + Jitter**: 실패 시 재시도 타이밍을 분산시켜 storm 완화

## 참고

- CLIProxyAPI PR #1686: `fix(auth)` auto-refresh 동시 실행 수 최대 16으로 제한
- [`golang.org/x/sync/singleflight`](https://pkg.go.dev/golang.org/x/sync/singleflight)
