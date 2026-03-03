---
title: "Auth 파일 삭제 버그 수정 — 매니저/폴백 시나리오 테스트 패턴"
sidebar_label: "Auth 매니저 폴백 테스트 패턴"
tags: [auth, testing, golang, bug-fix, fallback]
date: 2026-03-03
---

# Auth 파일 삭제 버그 수정 — 매니저/폴백 시나리오 테스트 패턴

## 배운 것

인증(auth) 파일 삭제 로직의 버그를 수정할 때, **매니저(primary)와 폴백(fallback) 경로를 각각 독립 시나리오로 테스트**하는 것이 중요하다.  
버그는 종종 "정상 경로"가 아닌 **폴백이 동작할 때** 발생한다.

## 버그 상황

- auth 파일이 삭제될 때, primary 매니저에서 처리하면 정상 동작
- **폴백 경로**(매니저가 없거나 실패할 때)에서 파일 삭제를 시도하면 잘못된 경로 참조 또는 nil 역참조 발생
- 기존 테스트가 정상 경로만 커버 → 폴백 버그 미검출

## 수정 방향

```go
// 수정 전 (버그): 매니저 존재 가정
func deleteAuthFile(mgr *Manager) error {
    return mgr.Delete() // mgr이 nil이면 패닉
}

// 수정 후: nil 체크 + 폴백 분기 명시
func deleteAuthFile(mgr *Manager, fallbackPath string) error {
    if mgr != nil {
        return mgr.Delete()
    }
    // 폴백: 직접 파일 삭제
    return os.Remove(fallbackPath)
}
```

## 테스트 패턴 — 시나리오 분리

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

## 핵심 교훈

1. **폴백 경로는 항상 별도 테스트 케이스로 분리**한다
2. 매니저/의존성이 nil일 때 어떻게 동작하는지 명시적으로 검증한다
3. 파일 존재 여부가 달라지는 시나리오(삭제 전/후, 파일 없음)도 각각 커버한다
4. 버그 수정 후에는 **회귀 테스트**를 반드시 추가해 같은 버그가 재발하지 않도록 한다

## 참고

- CLIProxyAPI commit `f9b005f` — Fixed: #1799 (auth 파일 삭제 로직 버그 수정)
- 변경 파일 2개, +189 -24 라인 (테스트 코드 비중 높음)
