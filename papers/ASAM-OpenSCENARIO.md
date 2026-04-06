---
title: ASAM OpenSCENARIO
date: '2020-03-01'
description: 자율주행 시뮬레이션의 동적 시나리오를 표준화된 형식으로 기술하기 위한 ASAM 국제 표준
tags: [JIK Reference, Software Testing, Test Generation, Artificial Intelligence, Automatic Generation]
authors: []
---

## 논문 정보

- **제목**: ASAM OpenSCENARIO
- **저자**: ASAM (Association for Standardisation of Automation and Measuring Systems)
- **학회/저널**: ASAM 국제 표준 (산업 표준 규격)
- **발행일**: 2020-03 (V1.0), 지속 업데이트
- **DOI**: 해당 없음 (산업 표준)
- **주요 연구 내용**: 자율주행 및 ADAS 시스템의 개발·테스팅·검증을 위한 동적 시나리오 기술 표준으로, 차량·보행자·교통 참여자의 복잡하고 동기화된 기동을 정의
- **주요 결과 및 결론**: XML 기반(V1.x) 및 DSL 기반(V2.0) 두 가지 형식으로 추상·논리·구체 시나리오의 계층적 기술을 지원하며, 주요 시뮬레이션 도구와 호환
- **기여점**: 시뮬레이션 도구 간 시나리오 이식성을 확보하고, 시나리오 기반 검증(Scenario-Based Testing)의 핵심 인프라로 자리매김
<!--truncate-->

## 요약

### 초록
ASAM OpenSCENARIO는 자율주행 및 ADAS(Advanced Driver-Assistance Systems) 기능의 개발, 테스팅, 검증을 위해 설계된 시나리오 기술 표준이다. 주행 및 교통 시뮬레이터에서 사용되는 예측 가능하고 고정밀한 시나리오를 기술하기 위한 데이터 모델과 파일 형식을 정의한다. 주요 활용 목적은 차량, 보행자 등 다수 엔티티의 복잡하고 동기화된 기동(maneuver)을 기술하는 것이며, 대규모 검증 및 유효성 확인(V&V)에 활용된다.

### 서론
자율주행 시스템의 안전성 검증에는 방대한 수의 테스트 시나리오가 필요하며, 서로 다른 시뮬레이션 도구 간의 시나리오 호환성이 필수적이다. ASAM(자동화 및 측정 시스템 표준화 협회)은 이러한 필요에 대응하여 OpenSCENARIO 표준을 제정하였다. 이 표준은 시뮬레이션 도구에 종속되지 않는 범용적 시나리오 기술을 가능하게 한다.

### 표준 구조 및 버전

#### OpenSCENARIO XML (V1.x)
- 2020년 3월 V1.0으로 최초 공개
- XML 기반 형식으로 구체적(concrete) 시나리오를 기술
- 파일 확장자: `.xosc`
- **주요 구성 요소**:
  - **Storyboard**: Init → Story → Act → Event → Action의 계층 구조
  - **Entity**: 차량, 보행자, 장애물 등 교통 참여자
  - **Condition**: 환경·거리·시간 기반 트리거 조건

#### OpenSCENARIO DSL (V2.0)
- 도메인 특화 언어(DSL) 기반의 인간 판독 가능한 시나리오 정의 언어
- 확률적 시나리오 기술 지원
- 추상(abstract), 논리(logical), 구체(concrete) 세 가지 추상화 수준의 시나리오 기술 가능
- 위치 특정적 시나리오와 맵/ODD 비종속적 시나리오 모두 지원

### 추상화 수준
시나리오는 세 가지 범주로 구분된다:
1. **추상 시나리오(Abstract)**: 잠재적 주행 상황의 광범위한 기술
2. **논리 시나리오(Logical)**: 상황 내 파라미터의 상세 정의
3. **구체 시나리오(Concrete)**: 정밀하고 실행 가능한 테스트 시나리오

### 연동 지원
CARLA ScenarioRunner, dSPACE, IPG CarMaker, esmini 등 주요 시뮬레이션 도구와 호환된다.

### 결론
ASAM OpenSCENARIO는 자율주행 테스트 시나리오의 표준화 언어로서, 시나리오 기반 검증(Scenario-Based Testing)의 핵심 인프라이다. BT 기반 시나리오 생성 연구들이 이 표준을 출력 포맷으로 활용하며, 자율주행 생태계 전반에서 시나리오 이식성과 재현 가능성을 보장하는 중추적 역할을 한다.
