---
title: Game AI Agent Modeling Using Petri Nets and Behavior Trees
tags: [JIK Reference, Behavior Tree, Game Artificial Intelligence, Agent Modeling, Petri-nets, Simulation]
---

# Game AI Agent Modeling Using Petri Nets and Behavior Trees

<!--truncate-->
## 서지 정보
- **저자**: S. Lee, J. Kim, H. Park
- **출판**: Multimedia Tools and Applications, vol. 81, pp. 5845–5868
- **연도**: 2022
- **DOI/arXiv**: doi: 10.1007/s11042-021-11681-7

## 핵심 요약
게임 AI 에이전트의 복잡한 행동을 모델링하기 위해 페트리 넷(Petri Nets)과 행동 트리(Behavior Trees)를 결합한 하이브리드 프레임워크를 제안한다. 기존의 행동 트리만으로는 병렬 행동과 상태 전이의 복잡한 의존성을 표현하기 어렵다는 한계를 페트리 넷의 형식적 모델링 능력으로 보완한다. 이 연구는 게임 캐릭터가 복수의 목표를 동시에 추구하거나, 환경 변화에 따라 우선순위를 동적으로 조정하는 복잡한 행동 패턴을 효과적으로 표현하는 방법을 제시한다. 실제 게임 AI 시나리오에서의 실험을 통해 제안 모델의 표현력과 실행 효율성을 검증했다.

## 주요 기여
1. 페트리 넷의 병렬성·동기화 표현 능력과 행동 트리의 계층적 행동 제어를 결합한 하이브리드 모델 제안
2. 복잡한 멀티태스킹 게임 AI 에이전트 행동을 형식적으로 명세하고 검증하는 방법론 제시
3. 게임 도메인에서의 광범위한 실험을 통한 프레임워크 유효성 검증

## 핵심 개념
- **Petri Nets**: 병렬 프로세스, 동기화, 자원 경쟁을 수학적으로 모델링하는 형식 시스템. 상태 전이와 조건을 그래프 구조로 표현
- **Behavior Trees (BT)**: 게임 AI에서 NPC 행동을 계층적으로 구조화하는 표준 프레임워크. 게임 산업에서 먼저 대중화됨
- **Hybrid Agent Modeling**: 서로 다른 형식주의(formalism)를 결합하여 각각의 장점을 활용하는 에이전트 모델링 접근법
- **Parallel Behavior**: 에이전트가 동시에 여러 행동을 수행하는 병렬 실행 모델

## 석사논문과의 연관성
이 논문은 석사논문이 다루는 **에이전트 행동 모델링** 문제와 직접적으로 연관된다. 게임 도메인에서 개발된 NPC AI 모델링 기법이 자율주행 시뮬레이션 에이전트 모델링으로 확장되는 **Cross-Domain** 전이 가능성을 보여주는 사례다. 특히 페트리 넷과 BT의 하이브리드 접근법은 교통 시뮬레이션에서 복수의 차량이 교차로에서 동시에 행동을 결정해야 하는 상황(병렬성)을 모델링하는 데 참고할 수 있다. LLM이 생성하는 BT가 다양한 도메인(게임→자율주행)에 적용 가능한지에 대한 Cross-Domain 논의에도 기여한다.

## 메모
- 게임 AI 분야에서 행동 트리가 먼저 실용화되었고(Halo 시리즈 등), 이후 로봇공학으로 전이된 역사적 맥락 이해에 유용
- 페트리 넷 기반 BT 형식화는 BT의 수학적 검증 가능성을 높이는 방향의 연구 흐름
- Multimedia Tools and Applications는 멀티미디어·게임·AI 교차 연구를 다루는 Springer 저널
