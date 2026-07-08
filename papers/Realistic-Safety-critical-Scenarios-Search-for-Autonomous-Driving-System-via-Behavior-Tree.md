---
title: Realistic Safety-critical Scenarios Search for Autonomous Driving System via Behavior Tree
description: 행동 트리를 기반으로 실제 도로 주행 분포를 반영하여 자율주행 시스템의 현실적인 안전 필수 시나리오를 효율적으로 생성하는 Matrix-Fuzzer 프레임워크 제안
authors:
  - name: Ping Zhang
  - name: Lingfeng Ming
  - name: Tingyi Yuan
  - name: Cong Qiu
  - name: Yang Li
  - name: Xinhua Hui
  - name: Zhiquan Zhang
  - name: Chao Huang
year: 2023
venue: arXiv (venue unspecified)
tags:
  - autonomous-driving-system
  - behavior-tree
  - safety-critical-scenario
  - search-based-software-engineering
  - fuzz-testing
relevance: high
date: 2026-05-11
sidebar_label: Matrix-Fuzzer
---
# Realistic Safety-critical Scenarios Search for Autonomous Driving System via Behavior Tree

> **Ping Zhang, Lingfeng Ming, Tingyi Yuan, Cong Qiu, Yang Li, Xinhua Hui, Zhiquan Zhang, Chao Huang** · **2023** · **arXiv (venue unspecified)**

> 관련도: 상

:::tip Intuition
자율주행 테스트 시나리오를 무작위로 생성하는 대신, 실제 운전 로그에서 추출한 고수준 행동 트리의 매개변수를 현실적인 확률 분포 내에서 최적화하여 주변 차량의 억지스러운 돌발 행동이 아닌 실제 발생 가능한 에고 차량의 결함 시나리오를 콕 집어 찾아낸다.
:::

{/* truncate */}

## One-liner

행동 트리 기반 테스트 프레임워크인 Matrix-Fuzzer를 통해 실제 주행 데이터 분포를 반영한 안전 필수 시나리오를 최소한의 테스트 횟수로 자동 탐색 및 생성한다.

## Problem

기존의 자율주행 시스템테스트 시나리오 생성 기법은 전문가 지식에 지나치게 의존하여 실제 주행 환경과 괴리가 크다. 또한 시간 단계별로 참가 차량의 상태를 제어하는 방식은 차원의 저주 문제를 유발하여 드문 안전 필수 케이스를 찾기 어렵게 만든다. 단순한 시간-충돌 평가지표만을 사용할 경우 주변 차량이 상식 밖의 난폭한 행동을 하여 발생하는 비현실적이고 무효한 충돌 시나리오가 대량 양산되는 한계가 존재한다.

## Core Idea

실제 차량 주행 궤적 로그 데이터로부터 고수준 행동 시퀀스를 추상화하여 행동 트리 기반의 논리적 시나리오를 자동으로 구축하는 log2BT 기술을 제안한다. 이를 바탕으로 가상 환경 내 에이전트의 합리성과 에고 차량의 위험도를 동시에 반영하는 평가 엔진과 탐색 공간의 차원에 맞게 유연하게 전환되는 적응형 최적화 알고리즘을 결합하여 유효한 안전 필수 시나리오 탐색의 정확도와 효율성을 동시에 극대화한다.

## Method

시나리오 생성 시 발생하는 고차원 문제를 해결하기 위해 고수준 행동 트리를 활용하며, 현실성 확보와 탐색 효율성을 위해 다음과 같은 핵심 요소를 결합한다.

### 1. log2BT 기술
실제 자연스러운 주행 환경의 궤적 데이터를 행동 트리 구조로 변환하는 기술이다.
- **Trajectory Partition** (궤적 분할): Frenet 좌표계 기반의 근사 궤적 분할 알고리즘을 사용하며, 최소 기술 길이 원리를 결합하여 차량의 속도 및 가속도 변화를 반영한 특성 상태를 기준으로 궤적을 분할한다.
- **Behavior Tree Generation** (행동 트리 생성): 분할된 세그먼트를 규칙 기반 패턴 식별 시스템을 통해 차선 변경, 크루즈 등의 의미론적 행동 시퀀스로 분류하여 행동 트리를 자동 빌드한다. 변수의 탐색 범위는 실제 주행 데이터의 통계적 확률 분포를 따른다.

### 2. 탐색 및 평가 엔진
- **Adaptive Optimization** (적응형 최적화): 탐색 공간의 변수 개수 $n$이 10개 미만일 때는 지역적 탐색 능력이 우수한 베이지안 최적화를 적용하고, 10개 이상일 때는 고차원 탐색에 유리한 유전 알고리즘을 선택하는 적응형 구조를 취한다.
- **Evaluation Engine** (평가 엔진): 주변 참가 차량의 난폭 운전으로 인해 발생하는 불가피한 충돌을 유효하지 않은 시나리오로 걸러내기 위해, 에고 차량과 참가 차량의 합리성을 동시에 측정하는 복합 적합도 함수를 사용한다.

결정적인 시나리오 적합도 점수 $Score$ 수식은 다음과 같다.

$$
Score = \alpha_1 Score_{ego} + \alpha_2 Score_{agent} + \alpha_3 Score_{dist}
$$

여기서 $Score_{ego}$는 에고 차량의 테스트 요구사항 실패 상태에 따른 가중 점수이고, $Score_{agent}$는 주변 에이전트의 불합리한 행동 발생 시 감점되는 항목이며, $Score_{dist}$는 에고와 주변 차량 간의 최소 거리를 반영한다. 가중치는 $\alpha_1 > 0$, $\alpha_2 < 0$, $\alpha_3 > 0$으로 설정되어 정상적인 교통 흐름 속에서 에고 차량의 결함을 유도하도록 설계된다.

## Results

- **log2BT 재구성 정확도**: 실제 운전 데이터셋(NGSIM 및 자체 데이터)을 기반으로 검증한 결과 종방향 오차 0.7m 미만, 횡방향 오차 0.3m 미만의 만족스러운 궤적 재구성 성능을 보여 유효성을 입증하였다.
- **시나리오 탐색 효율성**: 기존 유전 알고리즘 기반 기법(AV-Fuzzer)과 비교했을 때 총 시나리오 생성 횟수를 약 30% 수준으로 줄이면서도 가장 다양한 유형의 안전 위반 케이스를 검출하였다.

| 평가 지표 | 비교 대상 방법론 | 개선 효과 |
|---|---|---|
| **Critical Scenario Ratio** (치명적 시나리오 비율) | AV-Fuzzer | 기준 테스트 대비 최소 10배 이상 향상 |
| **Violation Type Ratio** (위반 유형 비율) | AV-Fuzzer | 기준 테스트 대비 최소 5배 이상 향상 |
| **Invalid Scenario Ratio** (무효 시나리오 비율) | AV-Fuzzer | 불합리한 충돌 시나리오 발생률 최소 58% 이상 감소 |

## Key Figures
![Figure 2](img/Pasted%20image%2020260708110401.png)
- **Fig. 2**: 논리적 시나리오 구축, 훼징 엔진, 매트릭스 시뮬레이터 및 에고·에이전트 다각도 평가 엔진의 유기적 루프로 구성된 Matrix-Fuzzer 전체 프레임워크 아키텍처
![Figure 4](img/Pasted%20image%2020260708110440.png)
- **Fig. 4**: 원시 주행 데이터 로그의 궤적을 분할하고 의미론적 행동 노드로 변환한 후 통계적 변수 범위를 지정하는 log2BT 기술의 구체적 워크플로우

## Contribution vs Limitation

**저자 주장**
- 고수준 행동 트리를 통해 시나리오 기술 방식을 단순화하고 탐색 변수 공간의 차원을 효과적으로 축소한 프레임워크 제안
- 원시 주행 로그 데이터를 효율적인 디지털 시나리오 자산으로 변환해 주는 자동화된 log2BT 파이프라인 개발
- 에고 차량과 타 에이전트 차량의 합리성을 동시에 상호 검증하여 가상 환경 테스트의 비현실적 무효 충돌 건수를 획기적으로 차단

**저자가 밝힌 한계**
- 다양한 참가 에이전트 차량의 행동 변수 간 존재하는 고유한 상호 연관성이나 조건부 의존성 관계까지는 완전하게 모델링하지 못함

:::note 실제로 보이는 것
실제 주행 로그 데이터에 기반하여 시나리오 매개변수 범위를 자동화한 점은 실효성이 매우 높으나, 궤적 분할과 행동 분류 단계에서 사용되는 주요 하이퍼파라미터 임계값($\epsilon_{lat}, \epsilon_{vel}$)들의 설정 상태에 따라 의미론적 행동 트리 변환 품질이 크게 좌우될 여지가 있음. 또한 자체 개발한 테스트용 Matrix Simulator 환경에 종속적인 구조를 가지고 있어 상용 외부 시뮬레이터와의 범용적 플러그인 호환성 검증이 요구됨.
:::

## Quotes

> "Everything is a variable in autonomous driving, only safety is constant." (p.3)
> "The storage overhead is reduced by at least 100x after converting the raw log to a BT, and the potential test value for ADS is huge to construct an LS via log2BT." (p.5)

## Idea Seeds

- **동적 의존성 결합 모델링**: 행동 트리 매개변수들 사이의 시공간적 의존성 및 주변 교통 흐름의 상관관계를 그래프 신경망 구조로 학습하여, 단순 개별 확률 샘플링을 넘어 주변 차량들이 상호 유기적으로 결합되어 에고 차량을 압박하는 복합 협력형 저격 시나리오 생성 기술로 확장

## For My Writing

자율주행 시스템의 가상 시뮬레이션 기반 테스트 환경을 구축할 때 무작위 매개변수 샘플링이나 단순 안전거리 기반 지표가 유발하는 '비현실적인 주변 차량의 유도 충돌' 한계점을 지적하는 논리적 근거 문서로 활용하기 적합하다. 본 논문의 합리성 기반 평가 함수 설계를 인용하여 타당한 위반 시나리오 정의의 중요성을 강조하는 장치로 활용할 수 있다.

## Open Questions

**이해하지 못한 것**
- Frenet 좌표계 상에서 근사 궤적 분할을 수행할 때 최소 기술 길이 원리가 어떤 수학적 목적 함수와 가중치를 통해 최적의 분할점인 특성 상태를 계산해 내는지에 대한 명확한 연산 디테일

**저자가 다루지 않은 것**
- 일반 승용차 이외에 도로 위에 공존하는 보행자, 이륜차 등 이종 교통 참가자의 상이한 주행 특성이 결합된 고복잡도 도심 교차로 시나리오 환경으로의 확장 가능성 및 탐색 연산 효율성 유지 여부

## Links

- **선행 연구**: CRISCO (NDE 로그 기반 영향력 있는 행동 패턴 추출 기법), AV-Fuzzer (유전 알고리즘 기반 자율주행 안전성 위반 탐색 연구)
- **관련 주제**: 시나리오 기반 자율주행 테스트 기술, 행동 트리 기반 에이전트 리액티브 제어

## References

- **arXiv**: [2305.06603](https://arxiv.org/abs/2305.06603)
- **BibTeX key**: `zhang2023realistic`

```bibtex
@article{zhang2023realistic,
  title     = {Realistic Safety-critical Scenarios Search for Autonomous Driving System via Behavior Tree},
  author    = {Zhang, Ping and Ming, Lingfeng and Yuan, Tingyi and Qiu, Cong Brill and Li, Yang and Hui, Xinhua and Zhang, Zhiquan and Huang, Chao},
  journal   = {arXiv preprint arXiv:2305.06603},
  year      = {2023}
}
```