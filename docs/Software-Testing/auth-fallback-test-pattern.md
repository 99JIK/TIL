---
title: 매니저/폴백 시나리오 테스트 패턴
description: 인증 로직처럼 primary/fallback 분기가 있는 코드에서 폴백 경로를 별도 시나리오로 테스트하는 패턴.
tags: [testing, patterns, go]
sidebar_position: 1
last_update:
  date: 2026-03-03
---

# 매니저/폴백 시나리오 테스트 패턴

## 개요

인증 토큰 삭제처럼 **primary 매니저 + fallback 경로** 구조를 가진 코드는, 버그가 보통 "정상 경로"가 아니라 **폴백이 동작할 때** 발생한다. 두 경로를 각각 독립 시나리오로 테스트하는 것이 핵심.

## 왜 필요한가

- primary 매니저가 존재할 때는 정상 동작 — 테스트 통과
- 매니저가 nil이거나 실패했을 때의 폴백 분기 — 테스트 커버리지 밖인 경우가 많음
- 폴백에서 잘못된 경로 참조·nil 역참조 같은 버그가 남아있어도 기존 테스트는 이를 못 잡는다

## 예시 (Go)

### 수정 전 — nil에 대한 방어 없음

```go
func deleteAuthFile(mgr *Manager) error {
    return mgr.Delete() // mgr이 nil이면 패닉
}
```

### 수정 후 — nil 체크 + 폴백 분기 명시

```go
func deleteAuthFile(mgr *Manager, fallbackPath string) error {
    if mgr != nil {
        return mgr.Delete()
    }
    return os.Remove(fallbackPath)
}
```

### 테스트 — 시나리오 분리

```go
func TestDeleteAuthFile(t *testing.T) {
    t.Run("with manager", func(t *testing.T) {
        mgr := newMockManager(t)
        err := deleteAuthFile(mgr, "")
        assert.NoError(t, err)
        mgr.AssertDeleted(t)
    })

    t.Run("fallback without manager", func(t *testing.T) {
        tmpFile := createTempAuthFile(t)
        err := deleteAuthFile(nil, tmpFile)
        assert.NoError(t, err)
        assert.NoFileExists(t, tmpFile)
    })

    t.Run("fallback file missing", func(t *testing.T) {
        err := deleteAuthFile(nil, "/nonexistent/path")
        assert.ErrorIs(t, err, os.ErrNotExist)
    })
}
```

## 핵심 원칙

1. **폴백 경로는 항상 별도 테스트 케이스로 분리**한다.
2. 의존성(매니저·클라이언트)이 nil일 때 어떻게 동작하는지 명시적으로 검증한다.
3. 외부 상태(파일 존재 여부 등)가 달라지는 케이스도 각각 커버한다.
4. 버그 수정 후에는 해당 버그를 재현하는 **회귀 테스트**를 같이 커밋한다.

## Related

- [Refresh Storm 방지 패턴](./refresh-storm-prevention.md)
