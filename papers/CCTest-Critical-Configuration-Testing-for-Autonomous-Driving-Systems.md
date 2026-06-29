---
title: "CCTest: Critical Configuration Testing for Autonomous Driving Systems"
description: "자율주행 시스템의 실제 결함을 검증하기 위해 이론상 안전 주행 경로가 존재하는 비판적 초기 설정을 계산하여 복잡한 시나리오를 효과적으로 테스트하는 프레임워크"
authors:
  - name: Changwen Li
  - name: Joseph Sifakis
  - name: Rongjie Yan
  - name: Jian Zhang
year: 2025
venue: "33rd ACM International Conference on the Foundations of Software Engineering (FSE Companion '25)"
tags: [autonomous-driving, simulation-based-testing, software-verification, test-data-generation]
relevance: high
reading_reason: "자율주행 시나리오 생성 테스트에서 위양성을 줄이고 시스템의 실제 거동 결함을 정밀하게 식별하는 방법론을 파악하기 위함"
date: 2026-06-29
sidebar_label: "CCTest"
---

# CCTest: Critical Configuration Testing for Autonomous Driving Systems

> **Changwen Li, Joseph Sifakis, Rongjie Yan, Jian Zhang** · **2025** · **33rd ACM International Conference on the Foundations of Software Engineering (FSE Companion '25)**

> 관련도: 상 · 읽은 이유: 자율주행 시나리오 생성 테스트에서 위양성을 줄이고 시스템의 실제 거동 결함을 정밀하게 식별하는 방법론을 파악하기 위함

:::tip Intuition
피할 수 없는 극단적인 사고 상황을 주입하여 자율주행 시스템을 무작위로 몰아세우는 대신, "이론적으로는 충돌을 완벽히 피할 수 있는 가장 아슬아슬한 경계 상황"을 수학적으로 설계하여 자율주행차가 이를 제어하지 못했을 때 명백한 시스템 결함임을 입증한다.
:::

{/* truncate */}

## One-liner

자율주행차의 물리적 역량을 기반으로 이론상 안전 주행이 가능한 한계 상태인 비판적 초기 설정을 계산하여 시뮬레이션함으로써, 불가피한 사고 상황을 배제하고 오토파일럿의 실제 제어 결함만을 정밀하게 적발하는 테스트 프레임워크이다.

## Problem

기존의 시뮬레이션 기반 자율주행 검증 도구들은 주로 검색 기반 알고리즘이나 퍼징을 활용해 무작위로 위험 시나리오를 생성한다. 이 과정에서 타 차량이 교통 법규를 무시하고 갑자기 돌진하는 등 자율주행 시스템의 제어 능력을 벗어난 불가피한 사고 시나리오가 대거 포함된다. 이는 자율주행 시스템 자체의 결함이 아님에도 결함으로 오탐하는 위양성을 유발하여 결과 분석의 신뢰성과 효율성을 저하시킨다.

## Core Idea

CCTest는 복잡한 도로 상황을 국소적 지식과 권리 기반 책임 등 단순한 구성 원리로 분해하고, 차량의 실제 종방향 가감속 성능을 바탕으로 안전 제어 경로가 논리적으로 상존하는 최악의 조건인 **Critical Configuration** (비판적 설정)을 도출한다. 이를 통해 생성된 시나리오에서 발생하는 모든 안전 규정 위반은 타 차량의 오작동이 아닌 피시험 자율주행 소프트웨어의 명백한 결함임을 보장한다.

## Method

차량의 동역학적 특성을 정의하기 위해 제동 거리 함수 $B(v)$, 가속 시간 함수 $AT(v,x)$, 가속 속도 함수 $AV(v,x)$를 기반으로 제약 조건을 연산한다. 자율주행 차량의 주행 국면을 장애물에 접근하며 대기하는 **Caution phase** (주의 단계)와 장애물을 통과하는 **Progress phase** (진행 단계)로 이분화한다. 

예를 들어, 우선순위가 보호되는 교차 경로 상황에서 자율주행 차량이 주의 단계를 채택하여 위험 구역 진입 전 안전하게 정지하기 위한 제약식은 다음과 같다.

$$
B(v_e) \le x_e
$$

반면 차량이 정지하지 않고 가속하여 통과를 시도하는 진행 단계를 선택할 경우, 최악의 조건(전방 차량 정지 등)에서도 충돌을 예방하며 안전하게 제어권을 확보할 수 있도록 보장하는 임계 거리는 다음과 같은 제약식으로 연산된다.

$$
B(AV(v_e, x_e + cd)) \le x_f
$$

이러한 수학적 경계를 기준으로 Test Data Generator가 테스트 데이터를 적응적으로 탐색 및 정제하며, 동기식 시뮬레이션 제어를 지원하는 Bridge 장치를 매개로 CyberRT나 ROS 2 기반의 산업용 오토파일럿 엔진을 테스트 환경에 통합한다.

## Results

Apollo 8.0, Autoware Universe 1.0, Carla 및 LGSVL의 내장 오토파일럿을 대상으로 총 14,506개의 테스트 시나리오를 구동하여 27.31%에 달하는 3,962개의 시나리오에서 실제 안전 결함(14개 유형)을 적발했다. DoppelTest 및 DriveFuzz와의 6시간 비교 실험에서 CCTest는 오탐(비현실적 위반) 없이 명백한 결함만을 효율적으로 다수 탐지해 냈다.

| 테스트 오토파일럿      | 검증 도구             | 총 생성 시나리오 | 실제 사고 (RV) | 소프트웨어 오류 (RV) | 신호등 위반 (RV) | 표지판 위반 (RV) | 경로 차단 (RV) |
| -------------- | ----------------- | --------- | ---------- | ------------- | ----------- | ----------- | ---------- |
| Apollo 8.0     | DoppelTest        | 330       | 1          | 4             | 5           | 0           | 0          |
| Apollo 8.0     | Proposed (CCTest) | 694       | 19         | 124           | 144         | 26          | 2          |
| Behavior Agent | DriveFuzz         | 273       | 3          | 0             | 1           | 0           | 0          |
| Behavior Agent | Proposed (CCTest) | 2110      | 627        | 0             | 2           | 155         | 0          |

## Key Figures
![Figure 1](img/Pasted%20image%2020260629130710.png)
- **Fig. 1**: 우선순위 보호 경로 교차 상황에서 자율주행 차량, 전방 차량, 진입 차량 간의 기하학적 파라미터와 물리 변수 관계를 보여주는 모델 도식
![Figure 3](img/Pasted%20image%2020260629130733.png)
- **Fig. 3**: Test Data Generator, Oracle, 그리고 시뮬레이션 환경 내의 Adapter 및 Bridge 모듈이 상호작용하는 CCTest의 전체 시스템 아키텍처
![Table 1](img/Pasted%20image%2020260629130757.png)
- **Table. 1**: 기존 검증 도구인 DoppelTest, DriveFuzz와 비교하여 CCTest가 허위 오탐(UV)을 제거하고 실제 유효한 시스템 결함(RV)만을 정밀하게 찾아낸 정량적 비교 통계

## Contribution vs Limitation

**저자 주장**
- 타 차량의 무리한 거동으로 인한 테스트 오탐을 구조적으로 배제하는 Potentially Safe 시나리오의 자동 생성 수학 모델 정립
- 동동한 하이웨어 미들웨어(CyberRT, ROS 2) 환경을 동기식으로 연결해 주는 범용 Bridge 구조 설계를 통해 상용급 오토파일럿들의 성공적인 검증 완수
- 기존의 무작위 탐색 및 퍼징 기반 테스트 도구 대비 유효 결함 발견 스케줄링의 효율성 극대화

**저자가 밝힌 한계**
- 현재 정립된 한계 거리를 유도하는 방정식 세트는 합류, 차선 변경, 양보 표지판 교차로, 신호등 제어 교차로 등 4가지 범용 정형 시나리오 도메인에 국한되어 있음

:::note 실제로 보이는 것
본 논문에서 상정한 제동 및 가속 제약 수식은 건조하고 일정한 노면 상태를 전제로 계산된 것으로 추정된다. 실제 환경에서 발생할 수 있는 노면 마찰력 변화(우천, 빙판길)나 센서 인지 지연(Perception Delay) 변수 등이 복잡하게 작용할 경우 계산된 경계 조건에 오차가 발생하여 오탐이 일부 유발될 여지가 있으므로 가변 마찰 계수 등을 반영한 고도화 연구가 이어져야 할 것이다.
:::

## Quotes

- "CCTest ensures that any safety violation observed indicates a defect in the tested autopilot by creating situations where each vehicle is controlled by the autopilot under test and has a feasible safety policy." (p.1)
- "It is easy to create safety violations that are unavoidable and do not reflect defects in the tested autopilot" (p.1)
- "The microscopic graph illustrates the speed policy applied by the tested autopilot alongside the theoretically feasible policies, enabling the identification of failure causes." (p.4)

## Idea Seeds

- 기후 및 노면 상태(강우량, 적설 상태)에 따른 동적 마찰 계수 변수 $\mu$를 물리 제약식에 실시간으로 매핑하여 Critical Configuration을 보정하는 환경 가변형 시나리오 확장 기법
- Oracle이 적발한 가감속 프로파일 오류 및 신호 위반 패턴을 역추적하여 오토파일럿 내부 제어 알고리즘의 플래닝 매개변수를 자동 최적화하는 그레이박스(Gray-box) 형태의 피드백 튜너 개발

## For My Writing

자율주행 제어 로직 검증 및 시뮬레이션 기반 퍼징 논문을 작성할 때, "기존 퍼징 기술이 직면한 불가피한 충돌 시나리오 주입으로 인한 오탐 및 분석 리소스 낭비 문제"를 지적하기 위한 핵심 선행 연구로 본 논문을 인용한다. 특히 시나리오 자체의 잠재적 안전성(Potential Safety)을 동역학적 제약식으로 사전 보장하는 아이디어의 유효성을 지지하는 논거로 배치하기 적합하다.

## Open Questions

**이해하지 못한 것**
- 제조사마다 상이하고 비공개된 오토파일럿의 세부 가감속 매커니즘 스펙이 부재할 때, 본문에서 언급한 '실험적 추정(Empirically estimated)'을 통해 어떻게 모델 오차 없이 신뢰성 높은 임계 함수 곡선을 뽑아내는지에 대한 상세 샘플링 프로세스

**저자가 다루지 않은 것**
- 카메라나 라이다 센서 인지 단계의 노이즈(Perception failure)로 인한 오동작과 차량 제어/계획 알고리즘(Planning/Control) 자체의 순수 결함을 분리하여 교정 힌트를 제공하는 근본 원인 분석 기능

## Links

- **선행 연구**: Doppelgänger test generation (DoppelTest, ICSE 2023), DriveFuzz (CCS 2022)
- **관련 주제**: Simulation-based testing for ADS, Critical scenario generation, Autonomous vehicle safety verification

## References

- **DOI**: [10.1145/3696630.3728610](https://doi.org/10.1145/3696630.3728610)
- **arXiv**: [2405.16914](https://arxiv.org/abs/2405.16914)
- **Code**: [github.com/liihwf/cctest.io](https://liihwf.github.io/cctest.io/)
- **BibTeX key**: `li2025cctest`

```bibtex
@inproceedings{li2025cctest,
  title     = {CCTest: Critical Configuration Testing for Autonomous Driving Systems},
  author    = {Li, Changwen and Sifakis, Joseph and Yan, Rongjie and Zhang, Jian},
  booktitle = {In Proceedings of the 33rd ACM International Conference on the Foundations of Software Engineering (FSE Companion '25)},
  year      = {2025},
  pages     = {1203--1207},
  doi       = {10.1145/3696630.3728610}
}
```