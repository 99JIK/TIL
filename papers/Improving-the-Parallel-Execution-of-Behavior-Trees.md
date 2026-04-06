---
title: Improving the Parallel Execution of Behavior Trees
date: '2018-10-01'
description: Behavior Tree의 병렬 실행 문제를 분석하고 진행도와 자원 사용 개념을 도입한 Concurrent BT를 제안한 논문
tags: [Behavior Tree, Artificial Intelligence, Software Testing]
authors:
- name: Michele Colledanchise
- name: Lorenzo Natale
---

## 논문 정보

- **제목**: Improving the Parallel Execution of Behavior Trees
- **저자**: Michele Colledanchise (Istituto Italiano di Tecnologia), Lorenzo Natale (Istituto Italiano di Tecnologia)
- **학회/저널**: 2018 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)
- **발행일**: 2018-10-01
- **DOI**: [10.1109/IROS.2018.8593504](https://doi.org/10.1109/IROS.2018.8593504)
- **주요 연구 내용**: Behavior Tree의 병렬 노드(Parallel Node) 실행 시 발생하는 동시성 문제를 분석하고, 진행도(progress)와 자원 사용(resource usage) 개념을 도입한 Concurrent BT(CBT) 제안
- **주요 결과 및 결론**: CBT를 통해 안전한 동시 액션 실행을 보장하며, 수학적 분석과 로봇 실험으로 유효성을 검증
- **기여점**: BT의 병렬 실행에 대한 형식적 기반을 마련하여, 자율주행 및 로봇 제어에서 복수 행동 동시 수행의 신뢰성 향상에 기여
<!--truncate-->

## 요약

### 초록
Behavior Tree(BT)는 게임과 로봇 공학에서 자율 에이전트를 위한 인기 있는 제어 프레임워크이다. 그러나 병렬 연산자(Parallel operator)는 Finite State Machine 같은 다른 제어 아키텍처에 비해 강력한 잠재력을 가짐에도 불구하고 거의 사용되지 않고 있다. 이는 동시 액션 실행 시 동시 프로그래밍에서 경험하는 것과 유사한 예상치 못한 문제가 발생할 수 있기 때문이다. 본 논문은 진행도(progress)와 자원 사용(resource usage)의 개념을 도입한 BT의 일반화인 Concurrent BT(CBT)를 제안하며, CBT가 안전한 동시 액션 실행을 가능하게 함을 수학적으로 분석하고 실제 로봇 구현 예제로 뒷받침한다.

### 서론
BT에서 병렬 노드는 여러 자식 노드를 동시에 실행할 수 있는 강력한 기능을 제공한다. 그러나 실제로는 동기화 없는 병렬 실행으로 인해 경쟁 조건(race condition), 자원 충돌, 예측 불가능한 동작 등의 문제가 발생한다. 예를 들어 로봇이 동시에 두 물체를 잡으려 할 때 한 팔의 동작이 다른 팔의 동작과 충돌할 수 있다. 이러한 문제로 인해 BT의 병렬 노드는 이론적 잠재력에 비해 실무에서 제한적으로만 사용되어 왔다.

### 모델 아키텍처 / 방법론
저자들은 다음과 같은 접근으로 Concurrent BT(CBT)를 제안하였다:

1. **기존 병렬 노드 문제 분석**: 동기화 없는 병렬 실행에서 발생하는 경쟁 조건과 자원 충돌을 형식적으로 규명
2. **진행도(Progress) 개념 도입**: 각 액션의 실행 진행 상태를 추적하여, 병렬 실행 중인 액션들 간의 상호 영향을 모니터링할 수 있는 메커니즘 정의
3. **자원 사용(Resource Usage) 개념 도입**: 각 액션이 필요로 하는 자원(로봇 팔, 센서, 통신 채널 등)을 명시적으로 선언하여, 자원 충돌을 사전에 감지하고 방지
4. **개선된 실행 의미론**: 병렬 노드의 성공/실패 조건을 명확히 정의하고, 결정론적(deterministic) 실행을 보장하는 새로운 규칙 도입
5. **형식적 증명**: 개선된 CBT의 안전성(safety) 및 반응성(reactivity) 속성을 수학적으로 증명

### 실험 및 결과
로봇 시뮬레이션 및 실제 로봇 환경에서 CBT의 효과를 검증하였다:

- **안전한 병렬 실행**: 자원 사용 선언을 통해 충돌 가능한 액션이 동시에 실행되지 않도록 자동으로 스케줄링됨을 확인
- **결정론적 동작**: 동일한 초기 조건에서 항상 동일한 실행 결과를 보장함을 검증
- **성능 향상**: 안전성을 유지하면서도 가능한 한 많은 액션을 병렬로 실행하여 태스크 완료 시간 단축
- **기존 BT 대비 개선**: 기존 병렬 노드에서 발생하던 예측 불가능한 동작이 CBT에서는 해소됨을 실증

### 결론
본 논문은 BT의 병렬 실행에 대한 근본적 문제를 분석하고, 진행도와 자원 사용 개념을 도입한 CBT를 통해 이를 해결하였다. CBT는 안전한 동시 액션 실행을 수학적으로 보장하며, 실제 로봇 시스템에서의 유효성이 검증되었다. BT의 병렬 실행은 자율주행 및 로봇 제어에서 복수 행동을 동시에 수행할 때 필수적이며, 이 논문은 병렬 BT의 신뢰성을 높이는 기초 연구로서 중요한 의의를 가진다.
