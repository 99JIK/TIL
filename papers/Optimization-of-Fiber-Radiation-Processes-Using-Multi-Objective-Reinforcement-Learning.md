---
title: "Optimization of Fiber Radiation Processes Using Multi-Objective Reinforcement Learning"
date: "2024-07-26"
description: "비디지털화된 섬유 방사 공정에서 생산 품질과 수율(생산성)이라는 두 가지 상충하는 목표를 최적화하기 위해 다중 목표 강화 학습을 적용한 연구"
keywords:
  [
    Digital transformation,
    Fiber radiation industry,
    Optimization,
    AI learning,
    Reinforcement learning,
  ]
tags:
  [
    Multi-objective Reinforcement Learning,
    Smart Manufacturing,
    Digital Transformation,
    Textile Industry,
    Process Optimization,
  ]
authors:
  [
    Hye Kyung Choi,
    Whan Lee,
    Seyed Mohammad Mehdi Sajadieh,
    Seung Bum Sim,
    Wu chang Jung,
    Jeong Ho Jeong,
    Sang Do Noh,
  ]
---

## 논문 정보

- **제목**: Optimization of Fiber Radiation Processes Using Multi-Objective Reinforcement Learning
- **저자**: Hye Kyung Choi (Sungkyunkwan University), Whan Lee (Sungkyunkwan University), Seyed Mohammad Mehdi Sajadieh (Sungkyunkwan University), Seung Bum Sim (Korea Textile Development Institute), Wu chang Jung (Korea Textile Development Institute), Jeong Ho Jeong (Korea Textile Development Institute), Sang Do Noh (Sungkyunkwan University)
- **학회/저널**: International Journal of Precision Engineering and Manufacturing-Green Technology
- **발행일**: 2024-07-26
- **DOI**: [10.1007/s40684-024-00644-6](https://doi.org/10.1007/s40684-024-00644-6)
- **주요 연구 내용**: 본 연구는 전통적인 섬유 방사 공정의 디지털 전환을 위해 다중 목표 강화 학습(MORL) 프레임워크를 제안한다. 공정 데이터로부터 유의미한 변수를 추출하고, LSTM 기반의 예측 모델로 섬유의 강도와 신도를 예측한 후, Q-러닝 알고리즘을 사용하여 품질과 생산성을 동시에 최적화하는 공정 파라미터 레시피를 추천한다.
- **주요 결과 및 결론**: 제안된 LSTM 예측 모델은 섬유 강도 예측에서 85.24%, 신도 예측에서 87.02%의 높은 정확도($r^2$-score)를 달성했다. 다중 목표 최적화를 통해 기존 공정 대비 평균 7.25%의 생산성 향상을 이루었으며, 작업자의 노하우나 시행착오에 대한 의존도를 크게 낮추었다.
- **기여점**: 전통적인 제조업에 데이터 기반 AI 기술을 적용하여 디지털 전환을 이룰 수 있는 실질적인 방법론을 제시했다. 특히 품질과 생산성이라는 상충 관계에 있는 두 목표 사이의 최적 균형점을 찾는 강화 학습 모델을 통해, 복잡한 공정 의사결정을 자동화하고 효율화하는 방안을 구체화했다.
<!--truncate-->

## 요약

### 초록

기술 발전에 따라 스마트 제조 산업에서 인공지능(AI)을 활용하는 새로운 패러다임이 부상하고 있다. 본 연구는 비디지털화된 제조 공정에서 생산 품질과 수율(생산성)이라는 두 가지 목표를 최적화하기 위해 다중 목표 강화 학습을 사용하는 새로운 접근법을 탐구한다. AI와 데이터를 활용하여 비디지털 산업의 생산 공정을 디지털화하고 최적화하는 방법을 조사하며, 이를 통해 제조 산업의 복잡한 문제를 해결하고 생산 품질과 수율 사이의 최적 균형을 찾을 수 있음을 강조한다. 연구 결과, 섬유 강도 예측 정확도 85.24%, 섬유 신도 예측 정확도 87.02%를 달성했으며 생산성은 7.25% 향상되었다.

### 서론

전통적인 섬유 방사 공정은 작업자의 경험과 노하우에 크게 의존하여 비효율과 비용 문제를 야기한다. 특히, 고객이 요구하는 물성(강도, 신도 등)을 맞추기 위한 테스트 생산 과정에서 많은 원자재와 시간이 낭비된다. 이 연구는 이러한 문제를 해결하기 위해 데이터와 AI 학습에 기반한 공정 최적화 프레임워크를 제안한다. 궁극적인 목표는 품질과 생산성이라는 상충하는 두 목표를 동시에 최적화하여, 유연하고 효율적인 생산 시스템을 구축하는 것이다.

### 배경

제조업에서 AI, 특히 강화 학습은 공정 최적화를 위한 강력한 도구로 주목받고 있다. 기존의 선형 계획법이나 유전 알고리즘 같은 단일 목표 최적화 방법들은 품질과 수율처럼 복잡한 상충 관계를 다루기 어렵다. 다중 목표 강화 학습(MORL)은 이러한 여러 상충하는 목표를 동시에 고려하여 최적의 의사결정을 내리는 데 효과적이며, 본 연구는 이를 섬유 산업에 적용하여 실용적인 해법을 모색한다.

### 모델 아키텍처 / 방법론

본 연구에서 제안하는 스마트 팩토리 시스템 아키텍처(논문의 Figure 2 참조)는 데이터 처리, 예측, 최적화 모듈로 구성된다.

- **핵심 구조/방법**:

  1.  **데이터 처리**: 현장 원시 데이터에서 분산 분석(ANOVA)을 사용하여 섬유 강도와 신도에 영향을 미치는 주요 공정 변수 7개를 추출한다. 또한, 불량을 유발하는 데이터는 XGBoost와 Random Forest 분류 모델을 통해 제거하여 학습 데이터의 품질을 높인다.
  2.  **물성 예측**: 정제된 데이터를 사용하여 LSTM(Long Short-Term Memory) 회귀 모델을 학습시킨다. 이 모델은 특정 공정 파라미터 조합에 따른 섬유의 강도와 신도를 예측하는 역할을 한다.
  3.  **공정 최적화**: 다중 목표 Q-러닝 알고리즘을 사용하여 최적의 공정 레시피를 탐색한다. 에이전트는 공정 파라미터를 변경(Action)하고, LSTM 예측 모델을 통해 얻은 품질 및 생산성 점수를 보상(Reward)으로 받아 최적의 정책(Policy)을 학습한다.

- **주요 구성 요소**:

  - **데이터 처리 모듈**: 원시 데이터 정규화, 표준화, 이상치 제거 및 유의 변수 분석(ANOVA) 수행.
  - **예측 모듈**: LSTM 기반의 강도 및 신도 예측 모델.
  - **최적화 모듈**: 품질과 생산성을 동시에 고려하는 다중 목표 Q-러닝 알고리즘.
  - **데이터 저장소 및 의사결정 지원 모듈**: 최적화된 레시피들을 저장하고 사용자의 요구에 맞춰 상위 10개의 추천 레시피를 제공.

- **수식**:
  - 다중 목표 최적화 함수: $F(P) = (f_{1}(P), f_{2}(P), ..., f_{k}(P))$
  - LSTM 네트워크의 핵심 수식 (논문의 Figure 4 참조):
    - Forget Gate: $f_{t} = \sigma(W_{xf}h_{t-1} + W_{xf}x_{t})$
    - Input Gate: $i_{t} = \sigma(W_{hi}h_{t-1} + W_{xi}x_{t})$ - Cell State Update: $C_{t} = c_{tf} \oplus i_{t} \otimes \hat{c}_{t}$
    - Q-러닝 업데이트 규칙: $Q(s_{t},a_{t}) = \underline{Q}(s_{t},a_{t}) + \alpha(R + \gamma \max_{a}\underline{Q}(s_{t+1},a) - \underline{Q}(s_{t},a_{t}))$
    - **알고리즘**: Q-러닝 알고리즘은 상태(State, 현재 공정 변수 설정), 행동(Action, 변수 값 조정), 보상(Reward, 예측된 품질과 생산성 점수)을 정의한다. 에이전트는 $\epsilon$-greedy 정책에 따라 행동을 선택하며 Q-테이블을 업데이트하여 각 상태에서 최적의 행동을 학습한다. 이 과정에서 LSTM 예측 모델이 보상 계산에 활용된다.

### 실험 결과

- **주요 데이터셋**: 고강도 폴리락타이드(PLA) 섬유를 생산하는 공장의 실제 데이터 1,525건과, 주요 변수들을 기반으로 그리드 서치를 통해 생성된 시뮬레이션 데이터 238,140건을 사용했다.
- **핵심 성능 지표**:
  - **예측 정확도**: LSTM 모델은 강도 예측에서 $r^2$-score 0.8524, 신도 예측에서 $r^2$-score 0.8702를 기록했다(논문의 Figure 7 참조).
  - **생산성 향상**: 제안된 시스템을 통해 추천된 레시피는 기존 방식 대비 실 생산 속도를 평균 7.25% 향상시켰다.
- **비교 결과**: 이 연구는 기존의 작업자 경험에 의존하는 방식과 데이터 기반 AI 접근법을 비교한다. 제안된 시스템은 시행착오로 인한 비용과 시간을 줄이고, 이전에 생산 경험이 없는 새로운 물성의 섬유 생산에도 빠르고 정확하게 최적의 공정 조건을 도출할 수 있음을 22개의 레시피에 대한 실제 테스트 생산을 통해 검증했다.

### 결론

본 연구는 다중 목표 강화 학습을 통해 전통적인 섬유 방사 공정을 최적화하고 디지털 전환을 가속화할 수 있는 포괄적인 프레임워크를 성공적으로 제시했다. 제안된 시스템은 데이터 기반 의사결정을 통해 품질과 생산성을 동시에 향상시키고, 제조 공정의 예측 가능성과 반복성을 높인다. 향후 연구로는 실시간 데이터를 최적화 프레임워크에 통합하고, 자동차, 전자 등 다른 제조 산업으로 이 방법론을 확장하는 것이 제안되었다.
