---
title: Behavior-Tree Based Scenario Specification and Test Case Generation for Autonomous Driving Simulation
date: '2022-11-04'
description: 행동 트리 기반 시나리오 명세 언어 BTScenario를 제안하여 자율주행 시뮬레이션 테스트 케이스를 자동 생성하는 방법론
tags: [JIK Reference, Behavior Tree, Test Generation, Software Testing, Artificial Intelligence]
authors:
- name: Yunjun Yao
- name: Zijun Shi
- name: Lihua Fu
- name: Li Li
---

## 논문 정보

- **제목**: Behavior-Tree Based Scenario Specification and Test Case Generation for Autonomous Driving Simulation
- **저자**: Yunjun Yao, Zijun Shi, Lihua Fu, Li Li
- **학회/저널**: ICITES 2022 (2nd International Conference on Intelligent Technology and Embedded Systems)
- **발행일**: 2022-11-04
- **DOI**: [10.1109/ICITES56274.2022.9943753](https://doi.org/10.1109/ICITES56274.2022.9943753)
- **주요 연구 내용**: 행동 트리(BT) 기반 시나리오 기술 언어 BTScenario를 설계하고, 이를 활용하여 자율주행 시뮬레이션 테스트 케이스를 자동으로 생성하는 방법론 제안
- **주요 결과 및 결론**: BTScenario를 통해 맵 객체의 공간 배치와 행위자의 시간적 행동을 모두 기술할 수 있으며, PyTrees 라이브러리를 활용한 자동 테스트 케이스 생성으로 수동 설계 대비 더 넓은 엣지 케이스 커버리지를 달성
- **기여점**: BT를 로봇 제어뿐 아니라 시나리오 명세 언어로 활용하는 새로운 방향을 제시하고, 자율주행 SIL 테스팅에서 BT의 역할을 확장
<!--truncate-->

## 요약

### 초록
자율주행 시스템은 복잡하고 동적인 환경(시나리오)으로 인해 안전성 확보가 어렵다. 시뮬레이션은 대규모 구체적 시나리오를 통해 미발견 안전 버그를 찾고 자율주행 알고리즘을 비교하는 효과적인 방법이다. 본 논문은 행동 트리(BT)를 기반으로 한 시나리오 기술 언어 BTScenario를 제안하며, 이를 통해 도로·교차로 등 맵 객체의 공간적 배치와 차량·보행자 등 행위자의 시간적 행동을 모두 기술할 수 있다. BTScenario 프로그램은 오픈소스 BT 라이브러리 PyTrees를 활용하여 테스트 케이스를 자동 생성한다.

### 서론
자율주행 시스템의 안전성 검증을 위해 시뮬레이션 기반 테스팅이 널리 활용되고 있으나, 테스트 시나리오의 수동 설계는 비효율적이며 엣지 케이스 커버리지에 한계가 있다. 기존 시나리오 기술 표준인 OpenSCENARIO 등은 복잡한 시나리오 기술에 한계가 있으며, 시나리오 재사용성이 부족하다. 본 연구는 BT의 계층적이고 모듈적인 구조를 활용하여 이러한 문제를 해결하고자 한다.

### 모델 아키텍처 / 방법론
BTScenario는 두 가지 수준의 기술을 지원한다:
1. **공간적 기술(Spatial Specification)**: 도로, 교차로 등 맵 객체의 고수준 공간 배치 정의
2. **시간적 기술(Temporal Specification)**: 차량, 보행자 등 행위자의 BT 기반 시간적 행동 명세

BT 노드 조합을 통해 다양한 테스트 케이스를 자동으로 생성하는 알고리즘을 제안하며, 생성된 테스트 케이스는 자율주행 시뮬레이터에서 직접 실행 가능하다. 구현은 오픈소스 행동 트리 라이브러리인 PyTrees를 기반으로 한다.

### 실험 및 결과
제안된 BTScenario를 자율주행 시뮬레이션 환경에서 적용하여 검증하였다. BT 노드의 조합적 탐색을 통해 다양한 교통 시나리오를 자동 생성하였으며, 수동 시나리오 설계 대비 더 광범위한 엣지 케이스 커버리지를 달성하였다. BT의 계층적 구조 덕분에 시나리오 컴포넌트의 재사용이 용이하고, 새로운 시나리오 확장이 간편하였다.

### 결론
본 연구는 BT를 단순한 로봇 제어 구조가 아닌 시나리오 명세 언어로 활용하는 새로운 방향을 제시한다. BTScenario는 BT의 계층적·모듈적 특성을 활용하여 복잡한 교통 시나리오를 재사용 가능한 형태로 기술하고, 자동 테스트 케이스 생성을 통해 자율주행 시뮬레이션 테스팅의 효율성을 크게 향상시킨다. 자율주행 SIL(Software-in-the-Loop) 테스팅에서 BT의 역할을 확장하는 의미 있는 연구이다.
