---
title: dSPACE SIL Introduction
date: '2024-01-01'
description: dSPACE의 Software-in-the-Loop(SIL) 테스팅 솔루션과 VEOS 플랫폼을 소개하는 기술 문서
tags: [JIK Reference, Software Testing, Artificial Intelligence]
authors: []
---

## 논문 정보

- **제목**: Automotive SIL Testing: How do I do it right?
- **저자**: dSPACE GmbH (기업 기술 문서)
- **학회/저널**: dSPACE Engineers' Insights (기술 문서)
- **발행일**: N/A
- **DOI**: [dSPACE 공식 문서](https://www.dspace.com/en/pub/home/news/engineers-insights/sil-introduction.cfm)
- **주요 연구 내용**: Software-in-the-Loop(SIL) 테스팅의 개념, 구성 요소, dSPACE VEOS 플랫폼을 활용한 자동차 소프트웨어 검증 방법론 소개
- **주요 결과 및 결론**: SIL 테스팅은 실제 하드웨어 없이 소프트웨어를 검증하여 개발 초기 단계에서 빠르고 비용 효율적인 테스팅을 가능하게 함
- **기여점**: MIL-SIL-HIL-Vehicle로 이어지는 V-모델 검증 워크플로우에서 SIL의 역할과 VEOS 플랫폼의 기능을 체계적으로 설명
<!--truncate-->

## 요약

### 초록
dSPACE의 SIL(Software-in-the-Loop) 소개 문서는 자동차 소프트웨어 개발에서 SIL 테스팅의 개념, 구성 요소, 그리고 올바른 수행 방법을 설명한다. SIL 테스팅은 소프트웨어를 시뮬레이션 환경에서 실행하여 기능을 검증하는 방법론으로, 실제 ECU(Electronic Control Unit) 하드웨어 없이 PC 환경에서 테스트를 수행할 수 있다. 이 문서는 SIL 환경의 네 가지 필수 구성 요소, Virtual ECU(V-ECU)의 추상화 수준, dSPACE VEOS 플랫폼의 기능 등을 체계적으로 소개한다.

### 서론
자동차 산업에서 소프트웨어의 중요성이 급격히 증가하면서, 효율적인 소프트웨어 검증 방법의 필요성도 커지고 있다. 특히 자율주행 및 ADAS(Advanced Driver Assistance Systems) 시스템은 방대한 양의 소프트웨어를 포함하며, 실도로 테스트만으로는 충분한 검증이 불가능하다(Kalra & Paddock, 2016). SIL 테스팅은 V-모델 개발 프로세스에서 MIL(Model-in-the-Loop) 이후, HIL(Hardware-in-the-Loop) 이전 단계에 위치하며, 개발 초기 단계에서 빠르고 반복적인 검증을 가능하게 한다.

### 모델 아키텍처 / 방법론
SIL 테스팅 환경은 다음 네 가지 필수 구성 요소로 이루어진다:

1. **테스트 대상 시스템(System Under Test)**: 검증할 소프트웨어. Virtual ECU(V-ECU) 형태로 실행됨
   - **V-ECU 추상화 수준(Level 0-4)**:
     - Level 0: MATLAB/Simulink 기반 기능 모델
     - Level 1: C 코드 기반 기능 소프트웨어
     - Level 2: AUTOSAR 기반 소프트웨어 컴포넌트
     - Level 3: AUTOSAR 기반 완전한 ECU 소프트웨어
     - Level 4: 하드웨어 의존적 명령어 집합 시뮬레이션
2. **환경 시뮬레이션 모델**: 센서, 액추에이터, 차량 동역학, 교통 시나리오 등을 시뮬레이션하는 모델. CARLA, SUMO 등의 외부 시뮬레이터와도 연동 가능
3. **시뮬레이션 및 통합 플랫폼**: 다양한 시뮬레이션 컴포넌트를 통합하고 시간 동기화를 관리하는 중앙 플랫폼. dSPACE VEOS가 이 역할을 수행
4. **검증 환경**: 테스트 시나리오 관리, 테스트 실행 제어, 결과 평가를 위한 환경

**dSPACE VEOS 플랫폼의 주요 기능**:
- 비실시간(non-real-time) 시뮬레이션으로 실시간보다 빠른 테스트 실행 가능
- 결정론적(deterministic) 및 재현 가능한(reproducible) 테스트 보장
- 데스크톱 PC에서 클라우드까지 확장 가능한 스케일러빌리티
- AUTOSAR Classic 및 Adaptive 지원
- FMU(Functional Mock-up Unit), V-ECU, 차량 모델 등 다양한 시뮬레이션 컴포넌트 통합
- ISO 26262:2018 기준 모든 ASIL(Automotive Safety Integrity Level)에 대한 안전 관련 개발 프로젝트에 사용 가능

### 실험 및 결과
SIL 테스팅의 주요 이점은 다음과 같다:

- **비용 절감**: 실제 하드웨어 없이 소프트웨어를 반복 테스트할 수 있어 하드웨어 비용과 물리적 테스트 비용 절감
- **시간 단축**: 비실시간 시뮬레이션을 통해 실시간보다 빠른 속도로 테스트를 수행하여 개발 주기 단축
- **CI/CD 통합**: 지속적 통합/배포 파이프라인에 SIL 테스트를 자동화하여 포함 가능
- **24/7 자동 테스팅**: 분산 환경에서 24시간 자동 테스트 실행 가능
- **HIL로의 원활한 전환**: SIL에서 사용한 컴포넌트와 실험을 HIL 단계에서 재사용 가능
- **클라우드 확장성**: 대규모 병렬 테스트를 클라우드 환경에서 실행하여 테스트 커버리지 극대화

### 결론
SIL 테스팅은 자율주행 소프트웨어의 안전 검증 워크플로우에서 핵심적인 단계이다. 수억 마일의 실도로 테스트가 현실적으로 불가능한 상황에서, 시뮬레이션 기반 SIL 테스팅은 소프트웨어 품질을 보장하기 위한 현실적 대안으로 주목받고 있다. dSPACE VEOS 플랫폼은 V-ECU 기반 SIL 환경을 제공하며, AUTOSAR 지원, 클라우드 확장성, 결정론적 재현성 등의 기능을 통해 자동차 소프트웨어 개발의 효율성과 안전성을 동시에 향상시킨다.
