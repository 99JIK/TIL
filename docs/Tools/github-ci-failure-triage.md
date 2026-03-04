---
title: "GitHub Actions CI 장기 실패 — 감지, 분류, 대응 전략"
sidebar_label: "CI 장기 실패 Triage 전략"
tags: [devops, github-actions, ci-cd, debugging]
date: 2026-03-04
---

# GitHub Actions CI 장기 실패 — 감지, 분류, 대응 전략

## 배운 것

CI가 며칠씩 실패 상태로 방치되는 경우, 단순히 "고쳐야 한다"는 인식만으로는 부족하다.  
실패의 **종류를 분류(triage)** 하고, 각 유형에 맞는 대응 전략을 미리 정해두면 방치 기간을 줄일 수 있다.

## CI 실패 유형 분류

| 유형 | 예시 | 권장 대응 |
|------|------|-----------|
| **배포 실패 (인프라)** | concurrency group 충돌, NAS 연결 실패 | 워크플로우 로직 수정 |
| **테스트 실패 (코드)** | 유닛 테스트 실패, 린트 오류 | 코드 수정 또는 테스트 업데이트 |
| **방치형 실패** | 더 이상 사용 안 하는 레포의 워크플로우 | 워크플로우 비활성화 (`on: []`) |
| **외부 의존성 실패** | 외부 API, Docker Hub rate limit | 재시도 로직 또는 미러 사용 |

## 장기 방치 방지 체크리스트

```
D+1  → 실패 확인, 로그 열람 (5분)
D+3  → 원인 파악 및 유형 분류
D+7  → 수정 또는 워크플로우 비활성화 결정
D+14 → 여전히 미해결 시 이슈 생성 또는 레포 아카이브 검토
```

## 워크플로우 임시 비활성화 패턴

더 이상 유지보수가 안 되는 레포라면 실패를 계속 두는 것보다 명시적으로 비활성화:

```yaml
# .github/workflows/deploy.yml

# 비활성화: 레포 유지보수 중단으로 워크플로우 정지
on: []

# 기존 트리거 (주석 처리)
# on:
#   push:
#     branches: [main]
```

## 배포 CI와 concurrency group

```yaml
concurrency:
  group: deploy-${{ github.ref }}
  cancel-in-progress: false  # 배포는 취소하지 않고 대기
```

- `cancel-in-progress: true` → 최신 것만 실행 (테스트 CI에 적합)
- `cancel-in-progress: false` → 이전 배포 완료 후 다음 실행 (배포 CI에 적합)
- NAS/로컬 서버 배포 시 병렬 실행이 파일 충돌을 일으킬 수 있으므로 `false`가 안전

## 오늘의 관찰

- **99JIK/haeun**: 2026-02-23부터 CI failure 지속 (D+9). 방치형 실패 → 워크플로우 비활성화 검토 필요
- **knu-eselab/site**: 2026-02-27 배포 CI failure. concurrency group 추가 이후에도 실패 지속 → 로그 심층 분석 필요

## 핵심 교훈

> "CI 실패는 방치할수록 컨텍스트를 잃어버린다. 3일 안에 triage하는 것이 원칙."

- 실패 유형을 먼저 분류해야 올바른 대응을 선택할 수 있다
- 사용하지 않는 레포의 CI는 빠르게 비활성화하는 것이 기술 부채를 줄이는 방법
- concurrency group 설정은 CI 종류(테스트 vs. 배포)에 따라 전략이 달라진다
