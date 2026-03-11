---
title: "dSPACE SIL Introduction"
authors: []
tags: [JIK_REFERENCE, Software Testing, Artificial Intelligence]
---

# dSPACE SIL Introduction

dSPACE의 Software-in-the-Loop(SIL) 테스팅 솔루션 소개 문서. 실제 하드웨어 없이 소프트웨어 모델만으로 자율주행·ADAS 시스템을 검증하는 방법론을 설명한다.

<!-- truncate -->

## 핵심 내용

- **SIL의 정의**: 제어 소프트웨어를 실제 ECU 없이 PC 환경에서 실행하여 기능을 검증하는 테스팅 방법론
- **MIL → SIL → HIL → Vehicle 검증 단계**에서 SIL은 개발 초기 단계의 빠른 검증에 활용
- **dSPACE VEOS**: dSPACE의 SIL 플랫폼으로, AUTOSAR 기반 소프트웨어를 PC에서 실행
- **주요 장점**:
  - 하드웨어 없이 반복 테스트 가능 → 비용·시간 절감
  - CI/CD 파이프라인에 통합 가능
  - CARLA, SUMO 등 시뮬레이터와 연동하여 가상 환경 테스트

## 의의

자율주행 소프트웨어의 안전 검증 워크플로우에서 SIL은 핵심 단계다. 수억 마일 실도로 테스트의 현실적 대안으로 시뮬레이션 기반 SIL 테스팅이 주목받고 있다.

Source: [dSPACE 공식 문서](https://www.dspace.com/en/pub/home/news/engineers-insights/sil-introduction.cfm)
