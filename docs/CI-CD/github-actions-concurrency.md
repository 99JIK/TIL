---
title: GitHub Actions concurrency group으로 중복 배포 방지
description: 배포 워크플로우 중복 실행 방지. cancel-in-progress 옵션 선택 기준.
tags: [github-actions, ci-cd, deployment]
sidebar_position: 1
last_update:
  date: 2026-02-27
---

# GitHub Actions concurrency group으로 중복 배포 방지

## Context

배포 워크플로우가 짧은 시간에 여러 번 트리거되면 이전 실행이 끝나기 전에 새 실행이 시작돼 동시 배포 충돌이 난다. `concurrency` 키로 같은 그룹 내 하나의 실행만 허용하게 잠금을 걸 수 있다.

## Steps

### 1. 워크플로우에 concurrency 키 추가

```yaml
name: Deploy to NAS

on:
  push:
    branches: [main]

concurrency:
  group: deploy-nas-${{ github.ref }}
  cancel-in-progress: false
```

### 2. `cancel-in-progress` 선택

| 값 | 동작 | 적합한 용도 |
|---|---|---|
| `true` | 새 실행이 오면 진행 중인 이전 실행을 **취소** | 테스트·Preview 빌드 |
| `false` | 새 실행은 이전 실행이 **완료될 때까지 대기** | 실제 배포·상태 변경 |

배포 중간에 끊기면 서비스가 불안정해질 수 있는 NAS/서버 배포는 `false`가 안전.

### 3. group 키에 컨텍스트 포함

- `github.ref` 포함 → 브랜치별 독립 잠금
- matrix 빌드 → matrix 값도 포함

```yaml
group: deploy-${{ github.ref }}-${{ matrix.os }}
```

## Verification

같은 브랜치로 연속 커밋을 푸시했을 때 Actions 목록에서 뒤 실행이 "queued" 상태로 대기하면 정상.

## Why this approach

`cancel-in-progress`는 단순해 보이지만 용도에 따라 정답이 갈린다. "최신 것만 중요"하면 `true`, "진행 중인 작업이 끝까지 가야 안전"하면 `false`. 이 결정을 워크플로우 저자가 의식적으로 해두면 된다.

## Related

- [GitHub Docs — Using concurrency](https://docs.github.com/en/actions/using-jobs/using-concurrency)
- [CI 장기 실패 triage 전략](./ci-failure-triage.md)
