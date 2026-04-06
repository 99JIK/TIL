---
title: Microscopic Traffic Simulation using SUMO
date: '2018-11-04'
description: 독일항공우주센터(DLR)에서 개발한 오픈소스 미시교통 시뮬레이터 SUMO의 최신 개발 현황과 인터모달 교통 시뮬레이션 기능을 소개하는 논문
tags: [JIK Reference, Artificial Intelligence, Scalability, Real-Time]
authors:
- name: Pablo Alvarez Lopez
- name: Michael Behrisch
- name: Laura Bieker-Walz
- name: Jakob Erdmann
- name: Yun-Pang Flötteröd
- name: Robert Hilbrich
- name: Leonhard Lücken
- name: Johannes Rummel
- name: Peter Wagner
- name: Evamarie Wießner
---

## 논문 정보

- **제목**: Microscopic Traffic Simulation using SUMO
- **저자**: Pablo Alvarez Lopez, Michael Behrisch, Laura Bieker-Walz, Jakob Erdmann, Yun-Pang Flötteröd, Robert Hilbrich, Leonhard Lücken, Johannes Rummel, Peter Wagner, Evamarie Wießner (German Aerospace Center, DLR)
- **학회/저널**: 2018 21st International Conference on Intelligent Transportation Systems (ITSC)
- **발행일**: 2018-11-04
- **DOI**: [10.1109/ITSC.2018.8569938](https://doi.org/10.1109/ITSC.2018.8569938)
- **주요 연구 내용**: SUMO(Simulation of Urban MObility) 오픈소스 미시교통 시뮬레이터의 최신 개발 현황을 인터모달 교통 솔루션, 시뮬레이터 커플링, 모델 개발 및 검증 관점에서 소개
- **주요 결과 및 결론**: SUMO는 개별 차량 단위의 미시적 시뮬레이션부터 도시 규모의 대규모 네트워크까지 지원하며, 다양한 교통수단의 인터모달 시뮬레이션과 외부 시뮬레이터와의 연동이 가능함을 입증
- **기여점**: 교통 시뮬레이션 분야의 사실상 표준 오픈소스 도구로서 SUMO의 공식 레퍼런스 논문을 제공하며, 학술 연구 및 산업 응용의 기반을 확립
<!--truncate-->

## 요약

### 초록
본 논문은 오픈소스 교통 시뮬레이터 SUMO(Simulation of Urban MObility)의 최신 개발 현황을 소개한다. 특히 인터모달 교통 솔루션, 시뮬레이터 커플링, 그리고 모델 개발 및 검증에 초점을 맞추어 SUMO의 기능과 활용 사례를 설명한다. SUMO는 독일항공우주센터(DLR)에서 2001년부터 개발해 온 미시적(microscopic) 도로 교통 시뮬레이션 패키지로, EPL-2.0 오픈소스 라이선스로 제공된다.

### 서론
도시화의 진행과 환경 문제에 대한 관심 증가로 인터모달 교통의 중요성이 높아지고 있다. 이러한 추세에 대응하여 SUMO는 자동차뿐만 아니라 대중교통, 자전거, 보행자 등 다양한 교통수단을 통합적으로 시뮬레이션할 수 있도록 확장되었다. SUMO는 전체 시뮬레이션 제품군으로서 도로 네트워크 가져오기, 다양한 소스로부터의 경로 생성, 명령줄 기반 시뮬레이션 및 GUI 포함 시뮬레이션 등의 도구를 포함한다.

### 모델 아키텍처 / 방법론
SUMO의 핵심 기술 요소는 다음과 같다:

1. **미시적 차량 추종 모델(Car-Following Model)**: S. Krauß가 개발한 공간 연속(space-continuous), 시간 이산(time-discrete) 차량 추종 모델을 기반으로 개별 차량의 속도, 가속도를 시뮬레이션한다. 또한 IDM(Intelligent Driver Model) 등 다양한 대안 모델도 지원한다.

2. **차로 변경 모델(Lane-Changing Model)**: SUMO 자체 개발된 차로 변경 모델을 통해 차량의 횡방향 이동을 시뮬레이션하며, 양방향(bilateral) 차량 추종 모델과 결합하여 사실적인 교통 흐름을 재현한다.

3. **인터모달 교통 지원**: 자동차, 버스, 자전거, 보행자, 열차 등 다양한 교통수단을 동시에 시뮬레이션할 수 있는 멀티모달 기능을 제공한다.

4. **TraCI(Traffic Control Interface)**: TCP 기반 클라이언트/서버 아키텍처를 사용하여 실행 중인 시뮬레이션에 외부 프로그램(Python, MATLAB 등)이 접근할 수 있는 인터페이스이다. 시뮬레이션 객체의 값을 실시간으로 조회하고 동작을 조작할 수 있다.

5. **시뮬레이터 커플링**: CARLA 등 외부 시뮬레이터와의 공동 시뮬레이션(co-simulation)을 지원하여 자율주행 시스템 개발 및 테스트에 활용할 수 있다.

| 항목 | 내용 |
|------|------|
| 개발 언어 | C++, Python |
| 인터페이스 | TraCI, libsumo |
| 라이선스 | EPL-2.0 (오픈소스) |
| 개발 기관 | DLR (독일항공우주센터) |

### 실험 및 결과
SUMO는 대규모 도로 네트워크에서의 성능을 입증하였다. 수백만 대의 차량과 수천 km에 달하는 도로망을 실시간으로 시뮬레이션할 수 있으며, 다양한 교통 시나리오에 대한 모델 검증 결과를 제시한다. 또한 인터모달 교통 시뮬레이션의 정확성과 시뮬레이터 간 커플링의 안정성을 검증하였다. SUMO는 학술 연구뿐만 아니라 교통 계획, 신호 최적화, 자율주행 시스템 개발 등 다양한 실제 응용 분야에서 활용되고 있다.

### 결론
SUMO는 미시적 교통 시뮬레이션 분야에서 가장 널리 사용되는 오픈소스 도구로 자리잡았다. 인터모달 교통 시뮬레이션 기능의 확장, TraCI를 통한 유연한 외부 연동, 그리고 CARLA 등과의 시뮬레이터 커플링 지원을 통해 교통 연구 및 자율주행 시스템 개발에 필수적인 인프라를 제공한다. 지속적인 오픈소스 커뮤니티의 기여와 DLR의 지원을 통해 SUMO는 계속 발전하고 있다.
