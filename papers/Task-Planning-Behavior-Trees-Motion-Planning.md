---
title: Task Planning with Belief Behavior Trees
date: '2020-08-21'
description: 부분 관측 환경에서 불확실성을 고려한 Belief Behavior Tree를 통해 로봇 태스크 계획을 자동화하는 방법을 제안하는 논문
tags: [JIK Reference, Behavior Tree, Robotics, Task Planning, Motion Planning]
authors:
- name: Evgenii Safronov
- name: Michele Colledanchise
- name: Lorenzo Natale
---

## 논문 정보

- **제목**: Task Planning with Belief Behavior Trees
- **저자**: Evgenii Safronov (Istituto Italiano di Tecnologia / Università di Genova), Michele Colledanchise (Istituto Italiano di Tecnologia), Lorenzo Natale (Istituto Italiano di Tecnologia)
- **학회/저널**: IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2020)
- **발행일**: 2020-08-21
- **DOI**: [arXiv:2008.09393](https://arxiv.org/abs/2008.09393)
- **주요 연구 내용**: 전통적 행동 트리를 확장한 Belief Behavior Tree(BBT)를 제안하여, 부분 관측 환경에서 불확실성을 고려한 자동 정책 생성을 수행
- **주요 결과 및 결론**: 실제 로봇 실험과 시뮬레이션을 통해 비결정적 행동 결과를 갖는 환경에서의 태스크 계획 유효성 검증
- **기여점**: BT의 조건 노드와 액션 노드 모두에 불확실성을 반영하여 부분 관측 환경에 적합한 태스크 계획 프레임워크 제시
<!--truncate-->

## 요약

### 초록
본 논문은 기존 행동 트리(Behavior Tree)를 확장한 Belief Behavior Tree(BBT)를 제안하여, 부분 관측 환경에서 동작하는 로봇을 위한 자동 정책 생성을 가능하게 한다. 이 확장은 조건 노드와 액션 노드 모두에서 불확실성을 고려하며, 반복적 목표 선택과 행동 탐색을 통해 트리를 합성한다. 액션의 전제조건이 초기에 충족되지 않는 상황과 비결정적 행동 결과를 처리하는 메커니즘을 포함한다.

### 서론
실제 로봇 환경에서는 센서 노이즈, 불완전한 정보, 환경의 동적 변화 등으로 인해 완전한 관측이 불가능한 경우가 많다. 기존 BT는 결정적(deterministic) 환경을 가정하여 이러한 불확실성을 처리하기 어렵다. BBT는 BT의 모듈적이고 반응적인 구조를 유지하면서도 불확실성을 명시적으로 모델링하여, 부분 관측 환경에서도 효과적인 태스크 계획을 수행한다. 또한 BT가 고수준 태스크 로직을 담당하고 모션 플래너가 저수준 경로 생성을 담당하는 계층적 구조를 지원한다.

### 모델 아키텍처 / 방법론
BBT의 핵심 구성요소와 합성 알고리즘은 다음과 같다:

1. **Belief 확장**: BT의 조건 노드와 액션 노드에 확률적 모델을 도입하여 불확실성을 표현한다. 각 노드의 성공/실패 결과가 확률적으로 결정되며, 환경의 부분 관측 특성을 반영한다.
2. **반복적 트리 합성**: 목표 집합에서 반복적으로 목표를 선택하고, 각 목표를 만족시키는 액션 또는 서브트리를 탐색하여 BBT를 자동으로 합성한다. 이 과정에서 불확실성 감소 액션(예: 조명 개선)도 포함된다.
3. **비결정적 결과 처리**: 액션의 결과가 비결정적(non-deterministic)인 상황을 처리하는 메커니즘을 포함한다. 실패 시 대안 경로를 통해 태스크를 계속 수행한다.
4. **BT-모션 플래너 통합**: BT가 고수준의 태스크 로직(무엇을 할 것인가)을 담당하고, 모션 플래너(RRT, A* 등)가 저수준의 경로 생성(어떻게 이동할 것인가)을 담당하는 계층적 구조를 지원한다. BT 액션 노드가 모션 플래너를 호출하여 충돌 없는 경로를 계산하고, 결과를 BT 상태(Success/Failure)로 반환한다.
5. **재계획 메커니즘**: 실행 중 환경이 변화했을 때(갑작스러운 장애물 등장, 조건 변화 등) BT가 반응적으로 대응하여 새로운 경로를 동적으로 재계산한다.

### 실험 및 결과
실제 로봇 실험과 시뮬레이션 시나리오 모두에서 BBT의 유효성을 검증하였다. 비결정적 행동 결과를 갖는 환경에서 BBT가 자동으로 정책을 생성하고 태스크를 성공적으로 수행함을 보였다. 불확실성 감소 액션을 통해 관측 불확실성이 높은 상황에서도 태스크 성공률을 향상시킬 수 있음을 확인하였다.

### 결론
BBT는 전통적 BT를 부분 관측 환경으로 확장한 프레임워크로, 불확실성을 명시적으로 모델링하면서도 BT의 모듈성과 반응성을 유지한다. 공저자 Colledanchise는 BT 분야의 핵심 연구자(Behavior Trees in Robotics and AI 교과서 저자)이며, Safronov는 IIT와 제노바 대학에 동시 소속되어 있다. IROS 2020에서 발표되었으며, BT 기반 자율주행 에이전트의 동적 환경 대응 및 재계획 메커니즘 설계에 직접적인 통찰을 제공한다.
