---
title: "Towards a Unified Behavior Trees Framework for Robot Control"
description: "로봇 제어를 위한 수학적으로 엄밀한 행동 트리 프레임워크를 제안하고, 이를 제어 하이브리드 동적 시스템(CHDS)과 수학적으로 등가임을 증명함과 동시에 오픈소스 ROS 라이브러리로 구현하여 실로봇 검증을 완료했다."
authors:
  - name: Alejandro Marzinotto
  - name: Michele Colledanchise
  - name: Christian Smith
  - name: Petter Ögren
year: 2014
venue: "IEEE International Conference on Robotics and Automation (ICRA)"
tags: [behavior-tree, robot-control, hybrid-dynamical-system, robot-operating-system, multi-agent-system]
relevance: high
reading_reason: "행동 트리를 단순한 게임 AI 도구를 넘어 수학적 제어 이론과 결합하여 로봇 아키텍처의 중위 레이어로 정립하는 방법론과 등가성 증명 과정을 분석하기 위함이다."
date: 2026-05-27
sidebar_label: "Unified BT Framework"
---

# Towards a Unified Behavior Trees Framework for Robot Control

> **Alejandro Marzinotto, Michele Colledanchise, Christian Smith, Petter Ögren** · **2014** · **IEEE International Conference on Robotics and Automation (ICRA)**

> 관련도: 상 · 읽은 이유: 행동 트리를 단순한 게임 AI 도구를 넘어 수학적 제어 이론과 결합하여 로봇 아키텍처의 중위 레이어로 정립하는 방법론과 등가성 증명 과정을 분석하기 위함이다.

:::tip Intuition
게임 개발에서 유래한 유연한 계획 표현 도구인 행동 트리에 제어 이론의 수학적 엄밀함을 부여하여, 하이브리드 동적 시스템과 상호 변환 가능한 로봇 제어 프레임워크를 구축한다.
:::

{/* truncate */}

## One-liner

로봇 제어를 위해 행동 트리를 수학적으로 공식화하고, 제어 하이브리드 동적 시스템과의 등가성을 증명하여 실로봇 제어용 오픈소스 ROS 라이브러리로 구현한다.

## Problem

기존 행동 트리 연구는 대부분 비디오 게임의 NPC 제어에 초점이 맞추어져 있어 로봇 및 제어 응용에 필수적인 연속 시간 역학과의 결합이나 수학적 엄밀함이 부족하다. 또한 전통적인 행동 트리 노드는 과거의 실행 상태를 기억하지 못하고 메모리 없이 작동하며, 노드들이 상호 독립적으로만 실행되어 복잡한 협업 작업이나 복수 로봇 간의 동기화 제어가 어렵다.

## Core Idea

상태 공간을 성공, 실패, 실행 서브셋으로 분할하는 엄밀한 수학적 정의를 도입하고, 과거 실행 노드를 기억하는 확장 노드(Sequence\*, Selector\*) 및 다중 로봇 동기화를 위한 데코레이터 노드를 제안하여 제어 하이브리드 동적 시스템과의 수학적 등가성을 정립한다.

## Method

- **Action Subsets** (액션 서브셋): 액션 노드의 상태 공간 $\mathcal{X}_n$을 성공 $S_n$, 실패 $F_n$, 실행 $R_n$ 서브셋으로 명확히 파티셔닝한다. 이 서브셋들이 서로 교집합을 가질 수 있도록 허용하여, 제어 전환 시 발생할 수 있는 불필요한 채터링을 방지하는 히스테리시스(hysteresis) 특성을 표현할 수 있도록 설계한다.
- **Node Extensions** (노드 확장): 매번 처음부터 다시 트리를 탐색하는 단점을 해결하기 위해 가장 최근에 실행 중(Running) 상태를 반환했던 자식 노드를 가리키는 `run-index` 변수를 유지하는 메모리 기반의 Sequence\* 및 Selector\* 노드를 정의한다. 이 변수는 터미널 상태(Success/Failure)를 반환할 때 초기화된다.
- **Decorator Extensions** (데코레이터 확장): 다중 로봇 간 협업을 동기화하기 위해 필요한 최소 로봇 수 $n_{req}$가 확보될 때까지 하위 트리의 틱 전파를 차단하는 통신 기반 동기화 데코레이터 노드를 설계한다.
- **Equivalence Model** (등가성 모델): 무한한 틱 주기를 가정한 연속 시간 행동 트리가 순차 우선순위 전환 정책을 가진 제어 하이브리드 동적 시스템(CHDS)과 완전히 동일한 상태 궤적을 생성함을 증명한다. 역으로 루트, 셀렉터, 시퀀스, 액션, 컨디션 노드로만 구성된 행동 트리는 항상 등가인 CHDS 구조로 매핑될 수 있음을 보장한다.

$$
S_n \cup F_n \cup R_n \supseteq \mathcal{X}_n
$$

## Results

제안된 프레임워크를 ROS 기반의 C++ 라이브러리로 구현하여 오픈소스로 공개했다. 알데바란 로보틱스의 NAO 휴머노이드 로봇을 활용한 객체 파지 미션에서 모터 과열 감지, 로봇 낙하 등 실시간 예외 상황 처리(Fallback)와 서브셋 기반 제어가 유연하고 안정적으로 오동작 없이 실행됨을 입증했다.

| 평가 항목 | 전통적 행동 트리 | 제안된 행동 트리 프레임워크 | 비고 |
|---|---|---|---|
| **Mathematical Rigor** | 낮음 | 높음 | 서브셋 기반 상태 공간 정의 도입 |
| **Memory Feature** | 지원 안 함 | 지원함 | Sequence\*, Selector\* 노드로 탐색 효율성 제고 |
| **Multi-agent Sync** | 불가능 | 가능 | 동기화 데코레이터 노드 및 ROS 통신 연동 |
| **CHDS Equivalence** | 불분명 | 등가성 증명 완료 | 연속 시간 및 이산 시간 샘플링 하에서의 일치성 확인 |

## Key Figures
![Figure 1](img/Pasted%20image%2020260527114609.png)
- **Fig. 1**: 로봇 제어 아키텍처를 상위(자동 계획 생성), 중위(행동 트리 및 하이브리드 시스템 스위칭), 하위(하드웨어 제어기) 레이어로 구분하여 행동 트리의 역할을 명시한 구조도
![Figure 3](img/Pasted%20image%2020260527114649.png)
- **Fig. 3**: 자율주행 시나리오(Emergency, Normal, Cruise)의 상태 공간 내에서 성공(S), 실패(F), 실행(R) 서브셋 간의 전이 궤적을 보여주는 위상도
![Figure 11](img/Pasted%20image%2020260527114719.png)
- **Fig. 11**: NAO 로봇 파지 미션에 적용된 예외 처리 및 유연한 노드 확장이 가능한 실제 행동 트리 토폴로지 구조

## Contribution vs Limitation

**저자 주장**
- 로봇 공학 및 제어 응용에 적합한 수학적 정밀성과 컴팩트함을 갖춘 행동 트리 아키텍처 수립
- 제어 이론의 상태 공간 분할 메커니즘을 연계한 액션 및 컨디션 서브셋 개념 정립
- 행동 트리와 제어 하이브리드 동적 시스템(CHDS) 간의 상호 변환 가능성 및 수학적 등가성 최초 규명

**저자가 밝힌 한계**
- 행동 트리의 속성상 자식 노드를 재귀적으로 호출하므로 매우 큰 대규모 트리를 구동할 때 스택 오버플로우가 발생할 위험성이 상존함
- 매 틱 주기마다 상태 공간 서브셋에 대한 검사를 반복적으로 수행해야 하므로 대형 시스템에서 연산 부하가 증가함 (비동기 처리로 일부 완화)
- 본 논문의 실험적 시연은 오픈루프 액션 스케줄링에 국한되어 있으며 클로즈드루프 제어 루프와의 완벽한 통합은 향후 과제로 남겨둠

:::note 실제로 보이는 것
로봇 소프트웨어의 모듈성과 유연성을 유지하면서 하이브리드 제어 시스템의 안정성을 이론적으로 담보하려 시도했다는 점이 강점이다. 다만 특정 순차 우선순위 점프 정책을 가진 CHDS 계열에 대해서만 등가성이 명확히 성립하므로, 보다 복잡하거나 비결정론적인 동적 시스템 전반으로 완전하게 일반화하기에는 변환 규칙에 제약이 따를 것으로 추정된다.
:::

## Quotes

- "The available literature lacks the consistency and mathematical rigor required for robotic and control applications." (p.1)
- "In pursuit of the accuracy, we formulated the Action and Condition subsets which remove the ambiguities that could arise when referring to the node Success, Running, or Failure." (p.1)
- "A BT is modular if its control-flow nodes and the subsets are laid out in such a way that the goal represented succeeds or fails in finite time, and its Root receives Running for all intermediate states." (p.8)

## Idea Seeds

- 행동 트리의 태생적 한계인 재귀 호출 스택 오버플로우를 원천 차단하기 위해, 트리를 평탄화(Flattening)한 후 이산 이벤트 오토마타나 레지스터 기반 virtual machine 형태로 컴파일하여 실행 효율을 극대화하는 실행 엔진 설계
- 액션 서브셋 경계면의 히스테리시스 파라미터를 고정값으로 두지 않고, 환경의 불확실성에 따라 강화학습을 통해 실시간으로 조절하여 로봇 제어의 불필요한 스위칭(Chattering) 현상을 제어하는 최적화 기법

## For My Writing

이 논문은 로봇 소프트웨어 구조를 설계할 때 유연한 미션 레벨 스케줄링(행동 트리)과 엄밀한 하부 제어 루프(하이브리드 시스템)를 어떻게 이론적으로 결합할 수 있는지 보여주는 핵심 근거로 사용될 수 있다. 특히 아키텍처 논문의 관련 연구 섹션에서 행동 트리가 단순한 엔지니어링 꼼수(ad-hoc solution)가 아니라 제어 이론적으로 정당화될 수 있음을 증명하는 선행 연구로 마진오토의 등가성 정리 내용을 인용하기에 적합하다.

## Open Questions

**이해하지 못한 것**
- 연속 시간 행동 트리 이론에서 틱 주기가 0에 도달한다고 가정할 때, 실제 이산형 분산 미들웨어(ROS)의 통신 지연 및 패킷 손실이 이론적 등가성에 미치는 영향과 이를 보상하는 수학적 마진의 계산 방식

**저자가 다루지 않은 것**
- 다중 로봇 동기화 데코레이터 노드 실행 시 발생할 수 있는 교착 상태(Deadlock)나 라이브락(Livelock) 현상을 트리의 정적 구조 분석을 통해 사전에 검증하고 예방하는 기법

## Links

- **선행 연구**: [13] P. Ögren, "Increasing Modularity of UAV Control Systems using Computer Game Behavior Trees," 2012. (행동 트리를 UAV 제어 모듈화에 도입한 모태 연구)
- **관련 주제**: 하이브리드 제어 아키텍처(Hybrid Control Architecture), 로봇 제어 미들웨어(Robot Middleware)

## References

- **DOI**: [10.1109/ICRA.2014.6907656](https://doi.org/10.1109/ICRA.2014.6907656)
- **Code**: [github.com/almc/behavior_trees](https://github.com/almc/behavior_trees) (paper unspecified subdirectory)
- **BibTeX key**: `marzinotto2014unified`

```bibtex
@inproceedings{marzinotto2014unified,
  title     = {Towards a unified behavior trees framework for robot control},
  author    = {Marzinotto, Alejandro and Colledanchise, Michele and Smith, Christian and {\"O}gren, Petter},
  booktitle = {2014 IEEE International Conference on Robotics and Automation (ICRA)},
  pages     = {5420--5427},
  year      = {2014},
  organization = {IEEE}
}
```