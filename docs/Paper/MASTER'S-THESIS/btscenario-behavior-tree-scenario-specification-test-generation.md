---
title: "BTScenario: A Behavior Tree Based Scenario Specification and Test Case Generation Framework for Autonomous Driving Simulation"
tags: [JIK_REFERENCE, behavior-tree, autonomous-driving, simulation, scenario, testing, SITL]
---

# BTScenario: A Behavior Tree Based Scenario Specification and Test Case Generation Framework for Autonomous Driving Simulation

## 서지 정보
- **저자**: Y. Zhang, H. Wei, J. Cao
- **출판**: Proceedings of IEEE ICITES (International Conference on Information Technology and Engineering Simulation)
- **연도**: 2022
- **DOI/arXiv**: doi: 10.1109/ICITES56274.2022.9943753

## 핵심 요약
자율주행 시뮬레이션에서 행동 트리(BT)를 활용하여 테스트 시나리오를 명세하고 테스트 케이스를 자동으로 생성하는 프레임워크 BTScenario를 제안한다. OpenSCENARIO와 같은 기존 시나리오 명세 언어의 한계를 보완하여, BT의 계층적 구조를 활용해 복잡한 교통 시나리오의 논리적 흐름을 직관적으로 표현한다. BT 노드를 조건(Condition)과 행동(Action)으로 구성하여 차량의 주행 제어 입력(종방향·횡방향 제어기)을 직접 지정할 수 있으며, 다양한 테스트 시나리오 변형(variation)을 자동으로 생성하는 테스트 케이스 생성기를 포함한다.

## 주요 기여
1. BT 기반의 자율주행 시뮬레이션 테스트 시나리오 명세 언어 및 도구 제안
2. BT 구조를 활용한 복잡한 교통 시나리오의 계층적·직관적 표현 방법 제시
3. 시나리오 변형(variation) 자동 생성을 통한 체계적 테스트 케이스 생성 파이프라인 구현

## 핵심 개념
- **Scenario Specification**: 자율주행 테스트에서 교통 참여자의 행동과 초기 조건을 형식적으로 기술하는 방법
- **Test Case Generation**: 단일 시나리오 명세에서 파라미터 변형을 통해 다수의 테스트 케이스를 자동으로 파생시키는 기법
- **BT-based Control**: 행동 트리 노드를 통해 차량의 종방향·횡방향 제어기 입력을 직접 지정하는 방식
- **Simulation Fidelity**: 시뮬레이션 환경이 실제 물리 환경과 얼마나 유사한지를 나타내는 지표

## 석사논문과의 연관성
BTScenario는 석사논문 주제와 가장 직접적으로 관련된 선행 연구 중 하나다. BT를 사용하여 자율주행 시뮬레이션의 에이전트 행동을 명세하고 자동으로 테스트 케이스를 생성한다는 아이디어는 석사논문의 핵심 아이디어와 일치한다. 차이점은 석사논문에서 LLM이 자연어 맥락(Context)을 이해하여 BT를 **자동 생성**하는 반면, BTScenario는 사용자가 BT를 수동으로 설계한다는 점이다. 또한 석사논문은 SITL 환경에서의 Cross-Domain 에이전트 모델링이라는 더 넓은 문제를 다루며, BTScenario의 시나리오 명세 개념을 LLM 기반 자동화로 확장한다.

## 메모
- BT 기반 자율주행 시나리오 명세의 선구적 연구로, 관련 분야 논문에서 자주 인용됨
- CARLA Scenario Runner와의 통합 가능성 논의
- 논문에서는 주로 차량 행동(종방향/횡방향 제어)에 집중하나, NPC 에이전트의 복잡한 사회적 행동 모델링으로 확장 가능
