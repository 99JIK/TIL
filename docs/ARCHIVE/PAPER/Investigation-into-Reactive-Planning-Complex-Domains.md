---
title: An Investigation into Reactive Planning in Complex Domains
date: '1987-07-01'
description: 복잡한 동적 환경에서 실시간 반응적 행동 계획을 위한 RAP(Reactive Action Package) 시스템을 제안한 선구적 연구
tags: [JIK Reference, Behavior Tree, Robotics, Reactive Planning, Artificial Intelligence, Task Planning]
authors:
- name: R. James Firby
---

## 논문 정보

- **제목**: An Investigation into Reactive Planning in Complex Domains
- **저자**: R. James Firby (Yale University)
- **학회/저널**: Proceedings of the AAAI Conference on Artificial Intelligence (AAAI-87)
- **발행일**: 1987-07-01
- **DOI**: [AAAI87-036](https://cdn.aaai.org/AAAI/1987/AAAI87-036.pdf)
- **주요 연구 내용**: 복잡하고 동적인 도메인에서 로봇이 실시간으로 행동을 계획하고 실행할 수 있도록 하는 리액티브 플래닝 모델 제안. RAP(Reactive Action Package)라는 조건부 행동 패키지 개념을 도입하여 실행 시간에 경쟁적으로 선택되는 시스템을 설계함
- **주요 결과 및 결론**: RAP 시스템은 사전 계획과 실시간 반응을 결합하여 예측 불가능한 환경 변화에 유연하게 대응할 수 있으며, 실행 모니터링과 재계획 문제를 단일하고 균일한 표현 및 제어 구조로 해결함
- **기여점**: 이후 행동 트리(Behavior Tree), PRS(Procedural Reasoning System), BDI 아키텍처 등 현대 로봇 행동 제어 프레임워크의 이론적 기반을 제공
<!--truncate-->

## 요약

### 초록
본 논문은 복잡한 도메인에서의 순수 리액티브 플래닝 모델을 제안한다. 리액티브 액션 패키지(RAP)라는 개념을 기반으로 하며, 각 RAP는 실행 시간에 여러 다른 RAP들과 경쟁하면서 특정 목표를 추구하는 독립적 개체로 볼 수 있다. RAP 처리 알고리즘은 불확실한 도메인에서의 실행 모니터링과 재계획 문제를 단일하고 균일한 표현 및 제어 구조로 해결한다.

### 서론
전통적인 AI 계획 시스템은 세계의 완전한 모델을 가정하고 행동 시퀀스를 미리 계산하는 심볼릭 플래닝 방식을 취했다. 그러나 실제 로봇이 동작하는 복잡한 환경에서는 예측 불가능한 사건이 빈번하게 발생하며, 상태 공간이 매우 넓어 사전에 모든 상황을 계획하는 것이 불가능하다. Firby는 이러한 한계를 극복하기 위해 환경의 현재 상태를 기반으로 즉각적으로 행동을 선택하는 리액티브 플래닝 접근법을 제안했다. 이 연구는 사전 계획(deliberative planning)과 실시간 반응(reactive execution)을 통합하는 하이브리드 아키텍처의 필요성을 주장한다.

### 모델 아키텍처 / 방법론
RAP 시스템의 핵심 구성요소와 동작 방식은 다음과 같다:

1. **RAP (Reactive Action Package)**: 특정 목표를 달성하기 위한 조건부 행동 패키지로, 각 RAP는 활성화 조건, 실행 절차, 성공/실패 판단 기준을 포함한다. 여러 RAP가 동일 목표에 대해 경쟁적으로 존재할 수 있다.

2. **실행 시간 선택(Execution-time Selection)**: 실행 시점에 환경의 현재 상태를 센싱하여 여러 가능한 행동 중 가장 적합한 것을 동적으로 선택하는 메커니즘이다. 센싱(모니터링)이 행동의 내재적 부분으로 포함된다.

3. **계층적 구조**: RAP들은 계층적으로 조직되어 상위 목표가 하위 목표들로 분해되며, 각 수준에서 독립적인 반응적 선택이 이루어진다.

4. **목표 만족 검증**: 목표 달성을 항상 검증하며, 하나의 목표를 달성하기 위한 여러 대안적 방법이 존재하여 실패 시 자동으로 대안으로 전환한다.

### 실험 및 결과
Firby는 RAP 시스템을 복잡한 동적 환경 시뮬레이션에서 평가했다. RAP 기반의 리액티브 플래너는 기존의 순수 심볼릭 플래너에 비해 예측 불가능한 환경 변화에 훨씬 유연하게 대응할 수 있음을 보였다. 특히 실행 중 환경 상태가 변화하는 상황에서 RAP 시스템은 즉각적으로 대안적 행동을 선택하여 목표를 달성할 수 있었다. 이 연구는 이후 1989년 Yale University에서의 박사 논문 "Adaptive Execution in Complex Dynamic Worlds"로 확장되었다.

### 결론
RAP 시스템은 복잡한 동적 도메인에서 로봇 행동 제어를 위한 효과적인 프레임워크를 제공한다. 사전 계획의 체계성과 실시간 반응의 유연성을 결합함으로써, 실세계 환경에서 발생하는 불확실성에 강건하게 대응할 수 있다. 이 연구는 이후 PRS(Georgeff & Lansky, 1987), BDI 아키텍처, 그리고 현대의 행동 트리(Behavior Tree) 등으로 발전하는 이론적 기초를 마련한 것으로 평가된다. 특히 행동 트리의 계층적 조건부 행동 구조는 RAP의 직접적인 계승자로 볼 수 있다.
