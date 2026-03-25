---
title: "GitHub Actions concurrency group으로 중복 배포 방지"
sidebar_label: "GitHub Actions Concurrency Group"
tags: [github-actions, ci-cd, devops]
date: 2026-02-27
---

# GitHub Actions concurrency group으로 중복 배포 방지

## 배운 것

GitHub Actions에서 배포 워크플로우가 짧은 시간에 여러 번 트리거될 경우, 이전 실행이 끝나기 전에 새 실행이 시작되어 **동시 배포 충돌**이 발생할 수 있다.  
`concurrency` 키를 사용하면 같은 그룹 내에서 하나의 실행만 허용할 수 있다.

## 설정 방법

```yaml
name: Deploy to NAS

on:
  push:
    branches: [main]

concurrency:
  group: deploy-nas-${{ github.ref }}
  cancel-in-progress: false  # 진행 중인 배포는 취소하지 않고 대기
```

### 옵션 비교

| `cancel-in-progress` | 동작 |
|----------------------|------|
| `true`               | 새 실행이 오면 진행 중인 이전 실행을 **취소** |
| `false`              | 새 실행은 이전 실행이 **완료될 때까지 대기** |

## 배포 시나리오별 권장 설정

- **NAS/서버 배포** (`cancel-in-progress: false`): 배포 도중 취소되면 서비스가 불안정한 상태로 남을 수 있으므로, 이전 배포가 완료된 후 순차적으로 실행
- **Preview 배포** (`cancel-in-progress: true`): 최신 커밋의 결과만 필요하므로 이전 실행 취소가 합리적

## 주의 사항

- `group` 이름에 `github.ref`를 포함하면 브랜치별로 독립적인 concurrency 관리 가능
- `group` 이름이 동일하면 **저장소 전체**에서 하나의 실행만 허용됨
- 매트릭스 빌드와 함께 쓸 때는 그룹 이름에 `matrix` 값도 포함할 것

## 참고

- site repo CI: NAS 배포 워크플로우에 concurrency group 추가 (`ci` 커밋)
- [GitHub Docs — Using concurrency](https://docs.github.com/en/actions/using-jobs/using-concurrency)
