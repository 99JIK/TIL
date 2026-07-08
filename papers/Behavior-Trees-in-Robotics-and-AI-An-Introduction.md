---
title: "Behavior Trees in Robotics and AI: An Introduction"
description: 로봇공학과 인공지능 분야에서 사용되는 행동 트리(Behavior Tree)의 개념, 고전적 공식화, 설계 원칙, 공식적 분석 기법 및 계획·학습과의 연계 방안을 종합적으로 소개하는 입문서이다.
authors:
  - name: Michele Colledanchise
  - name: Petter Ögren
year: 2022
venue: arXiv (venue unspecified)
tags:
  - behavior-tree
  - robotics
  - artificial-intelligence
  - finite-state-machine
  - automated-planning
  - machine-learning
  - stochastic-process
relevance: high
date: 2026-05-27
slug: colledanchise-2022-behavior-trees
sidebar_label: Behavior Trees Introduction
---

# Behavior Trees in Robotics and AI: An Introduction

> **Michele Colledanchise, Petter Ögren** · **2022** · **arXiv** (venue unspecified)

> 관련도: 상 · 읽은 이유: 행동 트리의 기본 개념부터 상태 공간 및 확률론적 분석, 계획 및 학습 알고리즘과의 융합까지 체계적으로 이해하기 위함이다.

:::tip Intuition
행동 트리는 기존 유한 상태 기계(FSM)의 'Goto' 방식의 일방향 제어 흐름을 현대 프로그래밍 언어의 '함수 호출'과 유사한 구조로 전환함으로써, 시스템의 반응성(Reactivity)을 높이면서도 모듈성(Modularity)을 완벽하게 보존하는 제어 아키텍처이다.
:::

{/* truncate */}
## One-liner

로봇공학과 AI 자율 에이전트의 제어 구조를 모듈식이고 반응적으로 구현하기 위한 행동 트리의 고전적 정의, 타 아키텍처와의 관계, 상태 공간 기반의 수학적 분석, 계획 및 학습 확장안을 총망라한 논문이다.

## Problem

자율 에이전트의 제어 전환 구조 설계 시 기존의 유한 상태 기계(FSM)가 표준적으로 사용되었으나, 시스템 복잡도가 커질수록 상태 간 전이(Transition) 수가 기하급수적으로 증가하여 유지보수성, 확장성, 재사용성이 심각하게 저하된다. FSM에서 반응성을 높이기 위해 전이를 늘리면 전체 구조가 복잡하게 얽히는 일방향 제어 전이(One-way control transfer)의 고유한 트레이드오프가 존재한다.

## Core Idea

행동 트리는 트리 구조의 내부 노드(제어 흐름 노드)가 자식 노드에게 주기적으로 신호(Tick)를 보내고 수행 상태(Running, Success, Failure)를 반환받는 양방향 제어 전이(Two-way control transfer)를 사용한다. 이를 통해 각 서브트리는 상위 문맥과 완전히 분리된 독립적인 모듈로 기능하면서도 환경 변화에 동적으로 반응할 수 있다.

## Method

행동 트리는 제어 흐름 노드인 Sequence, Fallback, Parallel, Decorator와 실행 노드인 Action, Condition으로 구성된다. 논문은 이를 수학적으로 분석하기 위해 다음과 같은 상태 공간 공식화를 제안한다. 행동 트리 $\mathfrak{P}_i$는 다음과 같이 정의된다.

$$
\mathfrak{P}_i = \{f_i, r_i, \Delta t\}
$$

여기서 $f_i: \mathbb{R}^n \rightarrow \mathbb{R}^n$는 이산 시간 시스템의 동역학을 나타내는 상태 전이 함수이고, $r_i: \mathbb{R}^n \rightarrow \{R, S, F\}$는 상태 $x_k$에 따라 Running, Success, Failure 상태 중 하나를 반환하는 함수이며, $\Delta t$는 타임 스텝이다. 시스템의 상태는 다음과 같이 진화한다.

$$
x_{k+1} = f_i(x_k)
$$

이를 바탕으로 유한 시간 내 성공(Finite Time Successful) 조건, 안정성(Safety), 유인 영역(Region of Attraction)을 활용한 강인성(Robustness)을 엄밀하게 정의하고, 서브트리 결합 시 이러한 특성들이 어떻게 보존되는지 정형적으로 증명한다.

## Results

- 행동 트리가 유한 상태 기계(FSM), 계층적 유한 상태 기계(HFSM), 포섭 아키텍처(Subsumption Architecture), 텔레오-반응적 프로그램(Teleo-Reactive Program), 결정 트리(Decision Tree)를 수학적으로 일반화함을 증명함.
- 후방 연쇄(Backchaining) 방식의 계획 알고리즘(PA-BT)을 통해 동적 환경에서 재계획(Replanning) 없이도 그리퍼에서 물체가 미끄러지는 등의 외란에 반응하여 작업을 완수함을 V-REP 시뮬레이션(KUKA Youbot, ABB Yumi)으로 검증함.
- 유전 프로그래밍(GP-BT) 기반 학습 모델이 기존 FSM 기반 알고리즘 대비 에피소드 진행에 따른 노드 수 증가를 억제하면서 목표 달성도를 달성함을 Super Mario Bros 벤치마크로 입증함.

| 제어 아키텍처 | 모듈성 (Modularity) | 반응성 (Reactivity) | 실패 처리 가독성 | 자동 합성 적합성 |
|---|---|---|---|---|
| **FSM** | 낮음 | 높음 (전이 다수 필요시 모듈성 저하) | 낮음 | 낮음 (전이 연산 비용 높음) |
| **HFSM** | 중간 | 중간 | 낮음 | 낮음 |
| **Behavior Tree** | 높음 | 높음 | 높음 (명시적 상태 반환) | 높음 (서브트리 단위 조작 가능) |

## Key Figures
![Figure 1.1](img/Pasted%20image%2020260527112744.png)
- **Fig. 1.1**: 볼을 찾아 집어서 배치하는 고수준 작업 트리와 이를 서브트리로 확장하는 계층적 전개 과정을 시각화하여 BT의 점진적 설계 가능성을 제시함.
![Figure 2.3](img/스크린샷%202026-05-27%20112902.png)
![Figure 2.4](img/스크린샷%202026-05-27%20113014.png)
- **Fig. 2.3 & Fig. 2.4**: 휴머노이드 로봇의 복잡한 행동 제어를 HFSM으로 구현할 때 발생하는 고밀도 전이 그래프와 이를 완벽하게 대체하는 간결한 BT 구조를 비교하여 모듈성 차이를 명확히 드러냄.
![Figure 5.17](img/Pasted%20image%2020260527113120.png)
- **Fig. 5.17**: 상태 공간 공식화를 기반으로 Sequence 결합을 적용했을 때 배터리 충전 임계값에 따라 안전 영역(Safety Region) 밖으로 나가지 않고 도달 가능한 유인 영역이 형성됨을 보여주는 위상 초상(Phase Portrait).

## Contribution vs Limitation

**저자 주장**
- 행동 트리가 기존 복잡한 로봇 제어 아키텍처들을 통합 및 일반화할 수 있는 강력한 수학적/실용적 프레임워크임을 입증함.
- 자율 에이전트 제어 구조 설계에 필요한 반응성과 모듈성을 동시에 확보하는 구체적인 디자인 패턴(명시적 성공 조건, 암묵적 시퀀스 등)을 정립함.
- 계획(PA-BT) 및 학습(GP-BT, RL-BT)과 행동 트리를 결합하는 표준적인 절차를 제공함.

**저자가 밝힌 한계**
- 지속적으로 환경 상태와 조건을 확인(Tick)해야 하므로 센싱 연산 비용이 과도하게 발생할 수 있음.
- 피드포워드(Feed-forward) 실행으로 충분한 정형적이고 정적인 환경에서는 단순 아키텍처 대비 이점이 없으며 구현 복잡도만 증가함.
- 행동 트리 엔진 구현 시 동기화 및 멀티스레딩 처리가 단일 스레드 순차 프로그래밍보다 복잡함.

:::note 실제로 보이는 것
본 논문은 행동 트리의 장점을 입증하기 위해 다소 정형적이고 이상적인 작업 템플릿(STRIPS 방식의 프리컨디션/포스트컨디션 쌍)에 의존하고 있다. 실제 비정형 환경에서 연속적이고 고차원적인 센서 입력을 조건 노드로 매핑하는 과정에서 발생하는 노이즈 처리나 상태 추정 오차의 전파 문제는 추후 구현 스택의 몫으로 남겨져 있다.
:::

## Quotes

- "The Goto statement as it stands is just too primitive; it is too much an invitation to make a mess of one's program." (p. 5)
- "Unlike FSMs and HFSMs, where the outgoing transitions require knowledge about the next state, in BTs leaf nodes are developed disregarding which node is going to be executed next." (p. 38)
- "The execution of BTs is not focused on states but on conditions and the switching is not event driven but tick driven." (p. 43)

## Idea Seeds

- 대규모 언어 모델(LLM)의 에이전트 도구 사용(Tool Use) 플래닝 과정에서 프롬프트 기반 가이드라인 대신, LLM이 PA-BT 알고리즘을 활용해 문법적으로 안전하고 실행 도중 에러가 나도 반응적으로 복구 가능한 행동 트리를 동적 생성하도록 유도하는 프레임워크 구축.

## For My Writing

로봇 제어 아키텍처 연구의 서론에서 기존 FSM이 갖는 한계(스케일링에 따른 전이 폭발 문제)를 지적하고 모듈성 확보의 필요성을 기술할 때, Colledanchise와 Ögren(2022)의 양방향 제어 전이(Two-way control transfer) 개념을 인용하여 본 연구에서 제안하는 하이브리드 제어 프레임워크의 당위성을 뒷받침하는 근거로 활용한다.

## Open Questions

**이해하지 못한 것**
- 하이브리드 행동 트리 정의(Definition 9.9)에서 결정론적 성공 시간과 지수 분포 기반의 실패 시간 확률밀도함수(PDF)가 결합될 때 발생하는 불연속성을 카라테오도리(Carathéodory) 의미의 고유 해로 취급하는 상세한 수학적 전개 과정.

**저자가 다루지 않은 것**
- 분산 제어 환경이나 다중 로봇 시스템(Multi-Robot Systems)에서 여러 에이전트가 개별 행동 트리를 실행할 때 트리의 상태 공유 및 상호 충돌을 동적으로 억제하는 상위 조율 메커니즘.

## Links

- **선행 연구**: Burridge et al. (1999) - 순차적 행동 구성(Sequential Behavior Compositions) 기법의 모태 제공
- **선행 연구**: Nilsson (1994) - 텔레오-반응적 프로그램(Teleo-Reactive Program) 설계 개념 제시
- **관련 주제**: 하이브리드 제어 시스템, 유전 프로그래밍 기반 제어 합성

## References

- **arXiv**: [1709.00084](https://arxiv.org/abs/1709.00084)
- **arXiv (free preprint)**: [1709.00084](https://arxiv.org/abs/1709.00084)
- **DOI (published book)**: [10.1201/9780429489105](https://doi.org/10.1201/9780429489105)
- **BibTeX key**: `colledanchise2018behavior`

```bibtex
@book{colledanchise2018behavior,
  title     = {Behavior Trees in Robotics and AI: An Introduction},
  author    = {Colledanchise, Michele and {\"O}gren, Petter},
  year      = {2018},
  publisher = {CRC Press},
  series    = {Chapman \& Hall/CRC Artificial Intelligence and Robotics Series},
  isbn      = {9781138593732},
  doi       = {10.1201/9780429489105}
}
```