---
title: "PAFOT: A Position-Based Approach for Finding Optimal Tests of Autonomous Vehicles"
description: 자율주행 차량의 안전성 검증을 위해 주변 차량의 위치를 격자 기반으로 제어하여 효율적으로 충돌 시나리오를 생성하는 유전 알고리즘 기반 테스팅 프레임워크
authors:
  - name: Victor Crespo-Rodriguez
  - name: Neelofar
  - name: Aldeida Aleti
year: 2024
venue: 5th ACM/IEEE International Conference on Automation of Software Test (AST 2024)
tags:
  - autonomous-vehicle
  - automated-driving-system
  - search-based-software-testing
  - genetic-algorithm
  - fuzz-testing
  - collision-avoidance
relevance: high
reading_reason: 자율주행 차량 도메인 연구 방향 확인
date: 2026-06-29
sidebar_label: PAFOT
---

# PAFOT: A Position-Based Approach for Finding Optimal Tests of Autonomous Vehicles

> **저자** Victor Crespo-Rodriguez, Neelofar, Aldeida Aleti · **연도** 2024 · **학회/저널** 5th ACM/IEEE International Conference on Automation of Software Test (AST 2024)

> 관련도: 상 · 읽은 이유: 자율주행 차량 도메인 연구 방향 확인

:::tip Intuition
주변 차량을 Ego 차량 주위의 9개 칸 바둑판 위에서만 움직이도록 제한하여, 멀리 있는 차를 가까이 데려오는 데 소모되는 불필요한 탐색 시간을 줄이고 충돌 위험 상황을 빠르게 유도한다.
:::

{/* truncate */}

## One-liner

Ego 차량 주변에 가상의 9개 위치 격자를 설정하고 Non-Playable Character 차량의 이동을 제어함으로써 자율주행 시스템의 안전 위반 시나리오를 신속하게 찾아내는 유전 알고리즘 기반의 위치 중심적 테스팅 프레임워크이다.

## Problem

기존의 검색 기반 자율주행 테스팅 기법은 주변 차량(NPC)의 기동을 최적화하여 위험 상황을 탐색한다. 그러나 대부분의 안전 임계 상황은 Ego 차량 근처에서 발생함에도 불구하고, 기존 기법은 차량을 Ego 차량 근처로 유도하는 과정 자체에 너무 많은 최적화 연산 시간을 낭비하여 탐색 효율성이 떨어진다.

## Core Idea

Ego 차량을 중심으로 종방향 길이와 차선 폭에 맞춘 가상의 9개 위치 격자(9-position grid)를 정의하고, NPC 차량이 이 격자 내에서만 인접 이동하도록 제한하는 방식을 제안한다. 이를 통해 불필요한 원거리 탐색 공간을 배제하고 충돌 상황을 더 빠르게 생성한다.

## Method


* **Grid Modeling** (격자 모델링): Ego 차량을 중심으로 주변 8개의 인접 구역을 나누어 총 9개의 격자를 구성한다. 각 격자의 크기는 Ego 차량의 종방향 길이 $L_{\text{lon}}$과 주행 차선의 폭 $L_{\text{lat}}$을 반영한 $L_{\text{lon}} \times L_{\text{lat}}$ 크기를 가진다.
* **Position-Instruction** (위치 지시어): NPC의 행동을 목표 격자 위치 $P_j$와 목표 속도 $V_j$의 튜플로 정의하며, 이를 유전 알고리즘의 유전자(gene)로 인코딩한다. CARLA 시뮬레이터가 지원하지 않는 격자 간 이동을 구현하기 위해 PID 제어기 기반 서브루틴을 연동한다.
* **Validity Check Mechanism** (유효성 검사 메커니즘): 비현실적인 순간 이동이나 비자연스러운 기동을 방지하기 위해 다음 목표 격자가 현재 격자와 인접해 있는지 실시간 검증한다. 격자가 유효하지 않거나 차선이 없는 경우 50%의 확률로 인접 격자 중 하나로 변경하여 시나리오의 자연스러움을 유지한다.
* **Fitness Function** (적합도 함수): 최소 예상 충돌 시간(METTC), 최소 거리(MD), 안전 거리(SD), 실행 시간(ET)을 선형 조합하여 최소화하는 것을 목표로 설정한다. 안전 거리 $SD$는 다음과 같은 물리 공식을 기반으로 산출하며 3초의 여유 시간을 반영한다.

$$
SD = (v_1 - v_2)t + \frac{1}{2}(a_1 - a_2)t^2
$$

* **Local Fuzzer & Random Restart** (지역 퍼저 및 무작위 재시작): 높은 적합도를 가진 위험 시나리오가 식별되면 유전 알고리즘을 일시 정지하고 변이율을 높인 변이 기반 퍼징을 수행하여 국소 최적해 영역을 집중 탐색한다. 탐색이 정체될 경우 무작위 재시작 메커니즘을 적용해 국소 최적해 수렴을 방지한다.

## Results

CARLA 시뮬레이터의 Town 06 맵에서 테스트를 진행하여 오픈소스 검색 기반 기법인 AV-Fuzzer 및 무작위 무작작위 방식(Random)과 비교 검증을 수행했다.

| 평가 지표 | PAFOT | AV-Fuzzer | Random |
| :--- | :--- | :--- | :--- |
| 총 생성 시나리오 수 | 4945 | 4327 | 4000 |
| 발견된 충돌 시나리오 수 | 3981 | 2438 | 997 |
| 충돌 발생까지의 평균 시간 | 20.65초 | 34.32초 | 37.63초 |
| 전체 실험 소요 시간 (10회 실행) | 38.68시간 | 54.73시간 | 60.47시간 |

PAFOT은 다른 기법에 비해 유의미하게 많은 충돌 시나리오를 발견했으며, 충돌 유도 속도 역시 가장 빨랐다. 결과적으로 전체 시뮬레이션 테스트 시간을 AV-Fuzzer 대비 16.05시간, Random 대비 21.79시간 단축하는 고효율을 보였다.

## Key Figures
![Figure 2](img/Pasted%20image%2020260629130243.png)
* **Fig. 2**: Ego 차량을 중심에 두고 주변에 유기적으로 설정된 가상의 9개 위치 격자 구조를 시각화한 그림이다.
![Figure 13](img/Pasted%20image%2020260629130323.png)
* **Fig. 13**: 시나리오 시작 후 충돌이 발생한 시점을 10초 단위 간격으로 분석한 그래프로, PAFOT이 초반 10~20초 구간에 대다수의 충돌을 집중적으로 유도함을 증명한다.

## Contribution vs Limitation

**저자 주장**
* Ego 차량의 물리적 크기와 도로 정보를 반영한 상대적 위치 격자 모델을 최초로 적용하여 고효율 테스팅 환경을 구축했다.
* 시뮬레이션 연산 낭비를 최소화하여 기존 최신 검색 기반 기법보다 더 적은 시간 안에 다수의 안전 위반 사례를 적출했다.

**저자가 밝힌 한계**
* 현재 프레임워크는 CARLA 시뮬레이터 및 내장 트래픽 매니저 제어 시스템 하에서만 검증되었다.
* 단일 목적 함수를 활용하고 있어 시나리오 자체의 기하학적·상황적 다양성을 완벽히 확보하지 못했다.

:::note 실제로 보이는 것
격자를 기반으로 한 탐색 공간 축소는 기동의 효율성을 매우 높이지만, 교차로나 곡잡한 도심 환경에서 NPC가 도로의 실제 형상이나 신호를 무시하고 Ego 차량의 상대 격자로 무리하게 진입을 시도하여 비현실적인 주행(예: 차선 역주행 등)을 과도하게 유발할 가능성이 존재할 것으로 추정된다.
:::

## Quotes

* "Considering that most safety-critical scenarios where other traffic actors are involved occur when they are located in close proximity to the EV, these techniques expend a significant portion of the optimisation process finding the driving patterns that will bring the traffic actors closer to the EV." (p.1)
* "PAFOT draws a virtual 9-position grid with the Ego Vehicle in the center. The remaining eight positions are defined as target positions, identified by numbers 1 to 8." (p.2)
* "PAFOT introduces a mechanism to ensure that the sequences of PIs are physically possible ... and naturalistic" (p.3)
* "PAFOT requires 16.05 fewer hours in total simulation time than AV-Fuzzer, and 21.79 hours less than Random." (p.8)

## Idea Seeds

* **Multi-Agent Strategic Coordination**: 격자 내 복수의 NPC 차량이 개별적으로 행동하는 대신, Ego 차량을 협공하거나 사각지대를 동시 차단하는 형태로 합동 전술(Coordination)을 펼치도록 유전 알고리즘을 확장하는 방안.
* **Scenario Realism Filtering**: 격자 진입 시 교통 법규 위반 정도를 적합도 감점 요인(Penalty)으로 부여하여, 완전히 불법적이지 않으면서도 자율주행 센서 오작동을 유발하는 '현실적이고 위협적인' 시나리오 생성 기법으로의 고도화.

## For My Writing

검색 기반 소프트웨어 테스팅(SBST)을 고차원 물리 시뮬레이션에 적용할 때 발생하는 탐색 공간 폭발 문제를 해소하기 위한 방법론으로 본 논문의 '상대적 공간 추상화(Relative Spatial Abstraction)' 개념을 인용할 수 있다. 특히 시뮬레이션 연산 비용이 높은 도메인에서 탐색 반경을 타겟 중심 격자로 한정 짓는 설계 전략이 정량적으로 얼마나 큰 시간 절감 효과를 가져다주는지 보여주는 근거 자료로 적합하다.

## Open Questions

**이해하지 못한 것**
* 격자 간 이동을 위해 구현된 PID 제어기 서브루틴이 급격한 타겟 변경 시 발생하는 차량의 물리적 관성 및 조향 한계를 어떻게 시뮬레이션 내부에서 매끄럽게 흡수하는지에 대한 구체적 처리가 명시되지 않았다.

**저자가 다루지 않은 것**
* 고속도로 및 도심 환경 외에 기상 악화(예: 안개, 폭우로 인한 센서 노이즈) 상황에서 격자 모델의 크기와 안전 여유 거리를 동적으로 조정하는 적응형 격자 매커니즘은 다루지 않았다.

## Links

* **선행 연구**: AV-Fuzzer (Li et al., 2020) - 본 연구의 직접적인 비교 대상이자 베이스라인이 되는 유전 알고리즘 기반 테스팅 프레임워크이다.
* **관련 주제**: Search-Based Software Testing (SBST), Autonomous Driving Systems (ADS) Simulation Testing.

## References

* **arXiv**: [2405.03326](https://arxiv.org/abs/2405.03326)
* **Code**: [github.com/pafotpafot/pafot](https://github.com/pafotpafot/pafot)
* **BibTeX key**: `crespo2024pafot`

```bibtex
@inproceedings{crespo2024pafot,
  title     = {PAFOT: A Position-Based Approach for Finding Optimal Tests of Autonomous Vehicles},
  author    = {Crespo-Rodriguez, Victor and Neelofar and Aleti, Aldeida},
  booktitle = {Proceedings of the 5th ACM/IEEE International Conference on Automation of Software Test (AST 2024)},
  year      = {2024},
  pages     = {1--12}
}
```