---
title: Refresh Storm 방지 — 동시 Auto-Refresh 상한
description: 토큰 자동 갱신 폭주를 세마포·singleflight로 막는 패턴.
tags: [concurrency, auth, patterns, go]
sidebar_position: 2
last_update:
  date: 2026-02-27
---

# Refresh Storm 방지 — 동시 Auto-Refresh 상한

## 개요

인증 토큰을 자동 갱신하는 시스템에서 토큰 만료 직전 다수의 요청이 동시에 들어오면 각 요청이 독립적으로 refresh를 시도해 **refresh storm**이 발생한다. 동시 실행 상한(semaphore) 또는 singleflight 패턴으로 이를 막는다.

## 왜 문제인가

- 만료 직전 N개의 API 요청 → N개의 refresh 호출
- 인증 서버에 수십~수백 개의 refresh가 한꺼번에 쏟아짐
- Rate limit 초과, 불필요한 토큰 재발급, 레이스 컨디션

## 방법 1 — Semaphore로 동시 실행 수 제한

```go
const maxConcurrentRefresh = 16

var sem = make(chan struct{}, maxConcurrentRefresh)

func refreshToken(ctx context.Context) error {
    select {
    case sem <- struct{}{}:
        defer func() { <-sem }()
    case <-ctx.Done():
        return ctx.Err()
    }
    return doRefresh(ctx)
}
```

버퍼드 채널을 세마포로 활용해 최대 16개까지만 동시 refresh. 상한값은 인증 서버의 rate limit을 보고 결정.

## 방법 2 — singleflight로 중복 완전 제거

```go
import "golang.org/x/sync/singleflight"

var group singleflight.Group

func refreshToken(ctx context.Context) (string, error) {
    v, err, _ := group.Do("refresh", func() (any, error) {
        return doRefresh(ctx)
    })
    if err != nil {
        return "", err
    }
    return v.(string), nil
}
```

동일 키에 대해 **진행 중인 호출이 있으면 새 호출자는 결과를 공유**한다. 중복 refresh 0건 보장.

## 선택 기준

| 상황 | 선택 |
|---|---|
| 동시 실행을 "적당히" 제한하고 싶다 | Semaphore |
| 같은 토큰에 대한 중복 refresh를 완전히 제거 | singleflight |
| 실패 시 재시도 타이밍을 분산 | Exponential Backoff + Jitter (보완) |

## Related

- [`golang.org/x/sync/singleflight`](https://pkg.go.dev/golang.org/x/sync/singleflight)
- [매니저/폴백 시나리오 테스트 패턴](./auth-fallback-test-pattern.md)
