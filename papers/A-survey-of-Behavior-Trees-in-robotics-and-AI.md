---
title: "A survey of Behavior Trees in robotics and AI"
description: "Behavior Trees (BTs)를 로봇공학 및 인공지능 애플리케이션에 적용한 연구들을 분류하고 핵심 이론, 설계 방식, 라이브러리를 종합적으로 정리한 설문 논문이다."
authors:
  - name: Matteo Iovino
  - name: Edvards Scukins
  - name: Jonathan Styrud
  - name: Petter Ögren
  - name: Christian Smith
year: 2022
venue: "Robotics and Autonomous Systems"
tags: [behavior-trees, robotics, artificial-intelligence, reinforcement-learning, learning-from-demonstration, hierarchical-task-network]
relevance: high
reading_reason: "로봇 공학 및 인공지능 분야에서 행위 트리의 전반적인 연구 흐름과 한계를 파악하기 위함"
date: 2026-05-27
sidebar_label: "BT Survey"
---

# A survey of Behavior Trees in robotics and AI

> **Matteo Iovino, Edvards Scukins, Jonathan Styrud, Petter Ögren, Christian Smith** · **2022** · **Robotics and Autonomous Systems**

> 관련도: 상 · 읽은 이유: 로봇 공학 및 인공지능 분야에서 행위 트리의 전반적인 연구 흐름과 한계를 파악하기 위함

:::tip Intuition
유한 상태 기계(FSM)가 유기적인 함수 호출 대신 복잡한 GOTO 문처럼 스파게티 로직을 양산할 때, 행위 트리(BT)는 균일한 인터페이스(Success/Failure/Running)를 기반으로 상태 전이 로직을 계층화하여 모듈성과 반응성을 동시에 확보하는 해결책이 된다.
:::

{/* truncate */}

## One-liner

컴퓨터 게임 AI에서 유래하여 최근 10년간 로봇공학으로 확장된 행위 트리(BT) 기술의 핵심 수학적·구조적 이론을 정립하고, 수동 설계 및 자동 생성(기계학습, 플래닝) 방법론과 오픈소스 라이브러리 생태계를 최초로 종합 분류한 서베이 논문이다.

## Problem

인공지능 및 로봇 에이전트의 복잡도가 증가함에 따라 기존에 널리 쓰이던 유한 상태 기계(FSM)는 스케일링 측면에서 심각한 한계를 드러냈다. 상태 전이 로직이 각 개별 상태 내부에 흩어져 있어 시스템이 커질수록 재사용성과 확장이 불가능한 모놀리식 구조가 되기 때문이다. 이로 인해 분석과 합성이 모두 어려워지는 공백이 발생했다.

## Core Idea

행위 트리(BT)는 상태 전이 로직을 개별 상태에 분산시키지 않고 하이러키 구조의 트리로 조직한다. 트리의 비단말 노드는 제어 흐름을 관리하고 단말 노드는 실제 실행을 담당하며, 모든 노드가 수신하는 **Tick** (신호)과 반환하는 균일한 인터페이스를 공유함으로써 모듈성을 극대화한다.


## Method

BT는 루트 노드에서 주기적으로 발생시키는 제어 신호인 Tick을 하향 전파하며 구동된다. 각 하위 노드는 실행 완료 여부에 따라 세 가지 상태 중 하나를 즉시 parent 노드에 반환한다.
- `Success`: 목표를 달성함
- `Failure`: 목표 달성에 실패함
- `Running`: 액션이 현재 진행 중임

### 주요 제어 흐름 노드 종류

- **Sequence** (순차 노드, 기호: `→`): 자식 노드들을 왼쪽부터 차례로 Tick을 보내며, 자식이 성공을 반환해야 다음 자식으로 넘어간다. 자식 중 하나라도 실패나 Running을 반환하면 즉시 그 상태를 parent에 반환하고 실행을 중단한다.
- **Fallback** (선택 노드, 기호: `?`): 자식 노드 중 하나라도 성공이나 Running을 반환하면 즉시 그 상태를 parent에 반환하고 나머지 자식의 실행을 건너뛴다. 모든 자식이 실패해야 최종 실패를 반환한다.
- **Parallel** (병렬 노드, 기호: `⇒`): 모든 자식 노드를 동시에 실행한다. $N$개의 자식 중 정의된 임계값 $M$개 이상의 자식이 성공을 반환하면 성공한다.

Parallel 노드의 성공 조건 수식은 아래와 같다.

$$
\sum_{i: \text{childStatus}(i) = \text{success}} 1 \ge M
$$

만약 실패한 자식의 수가 $N - M$을 초과하여 성공 가능성이 사라지면 즉시 실패를 반환하며, 두 조건에 모두 해당하지 않으면 Running을 반환한다.

## Results

본 논문은 서베이 연구이므로 단일 실험 벤치마크 점수 대신 도메인 및 방법론별 연구 성과를 정성적으로 비교·분석한다.

- **게임 AI 및 챗봇**: Halo 2, StarCraft(ABL 기반 계획), Pac-Man(몬테카를로 트리 탐색 적용), 대화형 인터랙션 등 다양한 장르에서 정착 완료되었다.
- **로봇공학**: 매니퓰레이터(ABB YuMi, UR5, KUKA 로봇 등), 이동 로봇(iRobot, TIAGO), 드론(UAV) window 통과 미션 등에서 유용성을 증명했다. 특히 PDDL 플래닝 및 확장형 행위 트리(eBT)를 접목했을 때 순차 실행 대비 실행 시간을 **20%** 단축하는 최적화 효과를 거두었다.
- **오픈소스 라이브러리 검토**: 2019년 말 기준 GitHub 데이터 기반으로 주요 오픈소스 구현체(py_trees, BehaviorTree.CPP 등)를 전수 조사하여 언어, ROS 연동성, 관리 상태를 매핑했다.

## Key Figures
![Figure 1](img/Pasted%20image%2020260527143947.png)
- **Fig. 1**: 본 서베이에서 분류한 BT 관련 연구 영역(도메인: 게임 AI/로봇 AI, 설계 방법: RL/GP/Manual/Planning)의 분류 체계 개요도.
![Figure 2](img/Pasted%20image%2020260527144014.png)
- **Fig. 2**: First Person Shooter (FPS) 게임에서 순차 및 선택 노드가 조건부 평가 노드와 결합되어 순발력 있는 전투·도피·방황 행위를 유도하는 표준 예시 트리.

|Name|Language|GUI|ROS|Open source|Forks|Stars|Last commit|
|---|---|:-:|:-:|:-:|--:|--:|---|
|[py_trees](https://github.com/splintered-reality/py_trees)|Python||✓|✓|36|87|up to date|
|[Owyl](https://github.com/eykd/owyl)|Python|||✓|13|60|Nov. 29, 2014|
|[Playful](https://playful.is.tuebingen.mpg.de/)|Python||✓|✓|0|3|Nov. 1, 2019|
|[behave](https://github.com/fuchen/behave)|Python|||✓|9|45|May 11, 2015|
|[task_behavior_engine](https://github.com/ToyotaResearchInstitute/task_behavior_engine)|Python||✓|✓|9|27|Aug 3, 2018|
|[gdxAI](https://github.com/libgdx/gdx-ai)|Java|||✓|189|758|Jul. 26, 2019|
|[bte2](https://github.com/piotr-j/bte2)|Java||✓|✓|5|27|Aug 6, 2018|
|[Behavior3](https://github.com/behavior3)|JavaScript|✓||✓|135|335|Oct. 21, 2018|
|[BehaviorTree.js](https://github.com/Calamari/BehaviorTree.js)|JavaScript|||✓|29|207|May 3, 2019|
|[NPBehave](https://github.com/meniku/NPBehave)|Unity3D/C#|✓||✓|52|306|Oct. 24, 2019|
|[BT-Framework](https://github.com/f15gdsy/BT-Framework)|Unity3D/C#|||✓|66|163|Mar 2, 2015|
|[fluid-behavior-tree](https://github.com/ashblue/fluid-behavior-tree)|Unity3D/C#|||✓|15|107|Jun 13, 2019|
|[hivemind](https://github.com/rev087/hivemind)|Unity3D/C#|✓||✓|13|47|May 14, 2015|
|[BehaviorTree.CPP](https://github.com/BehaviorTree/BehaviorTree.CPP)|C++|✓|✓|✓|77|306|up to date|
|[ROS-Behavior-Tree](https://github.com/miccol/ROS-Behavior-Tree)|C++|✓|✓|✓|48|154|Oct. 22, 2018|
|[Behavior Tree Starter Kit](https://github.com/aigamedev/btsk)|C++|||✓|103|297|Jun 24, 2014|
|[BrainTree](https://github.com/arvidsson/BrainTree)|C++|||✓|27|121|Aug 23, 2018|
|[Behavior-Tree](https://github.com/miccol/Behavior-Tree)|C++|✓||✓|33|116|Oct 17, 2018|
- **Table. 11**: py_trees(Python), BehaviorTree.CPP(C++) 등 현존하는 주요 BT 프레임워크의 오픈소스 활성도 및 스타 수 비교 테이블.

## Contribution vs Limitation

**저자 주장**
- BT의 이론적 배경과 변형(우선순위 가변 Utility BT, 확률적 stochastic BT)을 일관된 수학적 표기법으로 정리했다.
- 20년 4월 24일 기준 총 166개의 문헌을 체계적인 택소노미(Taxonomy)로 분류하여 연구 공백을 드러냈다.

**저자가 밝힌 한계**
- Parallel 노드 사용 시 멀티프로세싱 컴퓨팅 환경의 프로세스 동기화(Race condition) 및 자원 접근 제어 제약 문제가 발생한다.
- 노드 간 데이터를 공유하는 Blackboard 시스템은 강력하지만 도메인 종속성을 유발하여 모듈성을 일부 저해한다.

:::note 실제로 보이는 것
자동 트리 합성(강화학습 또는 자동 계획) 분야 연구가 다수 진행되었으나 실질적인 안정성 보장 문제로 인해, 복잡도가 낮거나 중간 규모인 산업용 제어 시스템에서는 여전히 엔지니어가 직접 코딩하는 수동 설계(Manual Design)에 대한 의존도가 압도적으로 높음을 간접적으로 보여준다.
:::

## Quotes

> "In BTs, the state transition logic is not dispersed across the individual states, but organized in a hierarchical tree structure, with the states as leaves." (p.1)

> "The child immediately returns Running to the parent, if its execution is under way, Success if it has achieved its goal, or Failure otherwise." (p.2)

> "A BT can be seen as a FSM with special structure, as noted in \[5\]." (p.3)

> "the methods for synthesizing BTs automatically using learning and planning are not yet mature enough to compete with the ease of manual design" (p.11)

## Open Questions

**저자가 다루지 않은 것**
- 자율주행 차량(Autonomous Driving) 의사결정 영역에서 FSM이나 POMDP 대비 BT가 가질 수 있는 도시적·돌발적 환경에서의 실증 데이터와 엣지 케이스 분석이 부족하다.
- 실시간 자원 분배를 완벽하게 보장하는 병렬 구조 스케줄러의 기하학적·수학적 보장 기법이 누락되어 있다.

## Links

- **선행 연구**: Michael Mateas and Andrew Stern (2002) - A behavior language for story-based believable agents, Damian Isla (2005) - Handling complexity in the halo 2 AI.
- **관련 주제**: Finite State Machines (FSM), Hierarchical Task Networks (HTN), Explainable Artificial Intelligence (XAI).

## References

- **DOI**: [10.1016/j.robot.2022.104096](https://doi.org/10.1016/j.robot.2022.104096)
- **BibTeX key**: `iovino2022survey`

```bibtex
@article{iovino2022survey,
  title     = {A survey of Behavior Trees in robotics and AI},
  author    = {Iovino, Matteo and Scukins, Edvards  and Styrud, Jonathan and {\"O}gren, Petter and Smith, Christian},
  journal   = {Robotics and Autonomous Systems},
  volume    = {154},
  pages     = {104096},
  year      = {2022},
  publisher = {Elsevier}
}
```