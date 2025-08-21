---
title: "WHAT DOES IT MEAN TO BE A TRANSFORMER? INSIGHTS FROM A THEORETICAL HESSIAN ANALYSIS"
date: "2024-01-01"
description: "Transformer 모델의 헤시안 분석을 통해 모델의 동작 원리와 특성을 이론적으로 분석한 연구"
keywords:
  [
    "Transformer",
    "Hessian Analysis",
    "Theoretical Analysis",
    "Deep Learning",
    "Neural Networks",
    "Attention Mechanism",
    "Machine Learning",
    "Mathematical Analysis",
  ]
tags:
  [
    "Transformer",
    "Hessian Analysis",
    "Theoretical Analysis",
    "Deep Learning",
    "Neural Networks",
    "Attention Mechanism",
    "Machine Learning",
    "Mathematical Analysis",
  ]
authors: ["woojin_lee"]
---

# WHAT DOES IT MEAN TO BE A TRANSFORMER? INSIGHTS FROM A THEORETICAL HESSIAN ANALYSIS

## 논문 정보

- **제목 (Title)**: WHAT DOES IT MEAN TO BE A TRANSFORMER? INSIGHTS FROM A THEORETICAL HESSIAN ANALYSIS
- **저자 (Authors) 및 소속 (Affiliations)**:
  - Weronika Ormaniec (ETH Zürich)
  - Felix Dangel (Vector Institute)
  - Sidak Pal Singh (ETH Zürich)
- **학회 또는 저널명 (Conference or Journal Name)**: International Conference on Learning Representations (ICLR) 2025
- **제출일 또는 발행일 (Submission or Publication Date)**: 2025년 3월 17일 (v2 기준)
- **키워드 (Keywords)**: Transformer, Hessian matrix, self-attention, optimization landscape, deep learning
- **DOI (Digital Object Identifier)**: 제공되지 않음.
- **기타 식별 가능한 정보**: - 연구 분야: 딥러닝 이론, 최적화 - arXiv ID: arXiv:2410.10986v2 [cs.LG]
<!-- truncate -->
- **초록 (Abstract)**: [트랜스포머 아키텍처](/papers/Attention-Is-All-You-Need)는 딥러닝 분야에 혁명을 일으켰으나, 기존의 MLP나 CNN과 구별되는 근본적인 메커니즘은 잘 알려지지 않았다. 본 연구는 손실 함수(loss function)의 헤시안(Hessian) 행렬에 대한 이론적 비교를 통해 트랜스포머가 다른 아키텍처와 구별되는 지점에 대한 근본적인 이해를 제공하고자 한다. 단일 셀프 어텐션 레이어에 대해 (a) 트랜스포머의 헤시안을 완전히 유도하고 행렬 미분으로 표현하며, (b) 데이터, 가중치, 어텐션 모멘트(attention moment)에 대한 의존성 관점에서 그 특성을 분석하고, (c) 기존 네트워크의 헤시안과의 중요한 구조적 차이점을 강조한다. 연구 결과는 트랜스포머에서 흔히 사용되는 아키텍처 및 최적화 기법들이 파라미터에 따라 이질적으로 변하는 데이터 및 가중치 행렬에 대한 고도의 비선형적 의존성에 기인할 수 있음을 시사한다. 궁극적으로 본 연구는 트랜스포머의 독특한 최적화 환경과 그로 인한 과제에 대한 더 깊은 이해를 제공한다.
- **주요 연구 내용 (Main Research Content/Methodology)**:
  - 단일 셀프 어텐션 레이어와 제곱 손실(square loss)을 사용하는 모델을 대상으로 이론적 분석을 수행한다.
  - 가우스-뉴턴 분해(Gauss-Newton decomposition)를 사용하여 헤시안을 F-outer-product 헤시안($H_o$)과 F-functional 헤시안($H_f$) 두 부분으로 나누어 분석한다.
  - 행렬 미분(matrix calculus)을 이용해 쿼리($W_Q$), 키($W_K$), 밸류($W_V$) 가중치 행렬에 대한 헤시안의 각 블록을 정확하게 유도한다.
  - 헤시안의 구조를 데이터(X), 가중치 행렬(W), 그리고 어텐션 모멘트($M_1, M_2, M_3$)의 네 가지 구성 요소로 나누어 의존성을 분석한다.
  - 소프트맥스(softmax) 활성화 함수와 쿼리-키 파라미터화($W_Q W_K^\top$) 같은 트랜스포머의 핵심 설계 요소들의 영향을 파악하기 위해, 이를 제거한 변형 모델(예: 선형 셀프 어텐션)의 헤시안과 비교 분석한다.
- **주요 결과 및 결론 (Key Findings and Conclusion)**:
  - 트랜스포머의 헤시안은 파라미터 그룹(쿼리, 키, 밸류)에 따라 구조가 매우 다른 **블록 이질성(block heterogeneity)**을 보인다.
  - 데이터 의존성이 매우 비선형적이고 이질적이다. 예를 들어, $H_o$에서 쿼리/키 블록은 데이터에 $O(X^6)$까지 의존하는 반면, 밸류 블록은 $O(X^2)$에 의존하여 MLP와 큰 대조를 보인다.
  - **소프트맥스 활성화 함수**는 헤시안의 비선형성과 이질성을 유발하는 주요 원인이다. 소프트맥스를 제거한 선형 어텐션의 헤시안은 블록 간 의존성이 더 균일하며, 대각 블록이 양의 준정부호(positive-semidefinite)가 된다.
  - **쿼리-키 파라미터화**는 헤시안에 추가적인 구조적 복잡성을 야기하여 최적화 환경을 더 복잡하게 만든다.
  - 이러한 헤시안의 구조적 특성은 트랜스포머 학습 시 Layer Normalization, 적응형 옵티마이저(예: Adam)와 같은 특정 최적화 기법이 왜 효과적인지에 대한 이론적 근거를 제공한다.
- **기여점 (Contributions)**:
  - 단일 셀프 어텐션 레이어의 전체 헤시안 구조를 행렬 미분 형태로 최초로 완벽하게 유도했다(Theorems 3.1, 3.2).
  - 헤시안의 복잡한 의존성(데이터, 가중치, 어텐션 모멘트)을 명확히 규명하고, 블록별 이질성을 정량적으로 분석했다.
  - 소프트맥스, 쿼리-키 파라미터화 등 트랜스포머의 핵심 설계 요소가 최적화 환경에 미치는 영향을 헤시안 구조를 통해 이론적으로 설명하여, 트랜스포머의 학습 어려움에 대한 근본적인 이해를 제공했다.

## 요약

### 1. 서론 (Introduction)

트랜스포머 아키텍처는 자연어 처리와 비전 등 다양한 분야에서 큰 성공을 거두었지만, 왜 기존의 MLP나 CNN과 다른 방식으로 학습되어야 하는지에 대한 이론적 이해는 부족했다. 트랜스포머는 데이터가 셀프 어텐션을 통해 여러 번 입력되고, 내부적으로 소프트맥스 비선형성을 사용하며, 쿼리-키 가중치 행렬의 곱셈이 포함되는 등 독특한 구조를 가진다. 이로 인해 실제 학습 시에는 적응형 옵티마이저(Adam), Layer Normalization, 학습률 워밍업 등 특별한 기법들이 동반되는 경우가 많다. 본 연구는 이러한 현상들의 근본 원인을 파악하기 위해, 손실 함수의 2차 미분인 헤시안 행렬의 구조를 이론적으로 분석하여 트랜스포머의 최적화 환경(optimization landscape)을 규명하는 것을 목표로 한다.

### 2. 연구 배경 및 설정 (Setup and Background)

분석을 위해 단일 헤드의 셀프 어텐션 레이어와 평균 제곱 오차(MSE) 손실 함수를 사용하는 간단한 모델을 가정한다. 헤시안 행렬 $H$는 가우스-뉴턴 분해를 통해 두 개의 항으로 나뉜다. 첫 번째는 F-outer-product 헤시안 $H_o$로, 손실 함수의 2차 미분과 관련이 있으며 항상 양의 준정부호(positive-semidefinite)이다. 두 번째는 F-functional 헤시안 $H_f$로, 네트워크 함수 자체의 2차 미분과 관련이 있으며 양수 또는 음수 부호를 가질 수 있다. 이 분해는 헤시안의 구조를 체계적으로 분석하는 핵심 도구로 사용된다. 분석 결과는 비교를 위해 MLP/CNN의 헤시안 구조와 대조된다.

### 3. Self-Attention 헤시안의 정확한 구조 (Exact Structure of the Self-Attention Hessian)

본 연구는 셀프 어텐션의 쿼리($W_Q$), 키($W_K$), 밸류($W_V$) 가중치에 대한 $H_o$와 $H_f$의 모든 블록에 대한 정확한 행렬 표현을 유도한다(Theorem 3.1 & 3.2). 분석 결과, 헤시안의 구조는 다음과 같은 주요 특징을 보인다.

- **데이터 의존성(Data Dependence)**: 헤시안 블록들은 입력 데이터 $X$에 대해 매우 비선형적이고 이질적인 의존성을 가집니다. $H_o$의 밸류($W_V$) 블록은 데이터에 대해 $O(X^2)$의 의존성을 보이는 반면, 쿼리($W_Q$)와 키($W_K$) 블록은 $O(X^6)$에 이르는 훨씬 높은 차수의 의존성을 보입니다. 이러한 높은 차수의 비선형성은 MLP의 헤시안과 구별되는 뚜렷한 특징입니다.
- **어텐션 모멘트 의존성(Attention Moments Dependence)**: 헤시안의 데이터 관련 항들은 어텐션 분포의 1차, 2차, 3차 중심 모멘트(central attention moments) 행렬 $M_1, M_2, M_3$로 표현될 수 있습니다. 이는 어텐션 가중치가 토큰들 사이에 얼마나 분산되어 있는지가 헤시안 구조에 직접적인 영향을 미침을 의미합니다. 예를 들어, 어텐션이 특정 토큰에 집중(one-hot)되면 2차, 3차 모멘트가 0이 되어 쿼리/키 헤시안 블록의 기여도가 감소합니다.
- **가중치 의존성(Weight Dependence)**: 헤시안의 각 블록은 가중치 행렬에 대해서도 복잡하고 다양한 의존성을 보입니다. 예를 들어, $H_f$의 밸류 대각 블록은 0이지만($H_f(W_V, W_V)=0$), 쿼리 대각 블록은 $W_K$와 $W_V$에 의존합니다.

### 4. 트랜스포머 설계 요소가 헤시안에 미치는 영향 (Impact of Transformer Design Components on the Hessian)

- **소프트맥스 활성화 함수(Softmax Activation)**: 소프트맥스는 헤시안의 이질성과 비선형성의 핵심 원인이다. 소프트맥스를 제거한 선형(linear) 셀프 어텐션의 경우, 헤시안 블록들의 데이터 의존성이 $\Sigma_{XX}$ (데이터 공분산)에 대해 $O(\Sigma_{XX}^3)$으로 더 균일해진다. 또한, 선형 어텐션의 $H_f$는 대각 블록이 0인 block-hollow 구조를 가져 헤시안의 대각 블록이 양의 준정부호가 된다. 이는 소프트맥스가 헤시안을 더 indefinite하게 만들어(즉, 음의 고유값을 갖게 하여) 최적화 환경을 더 비볼록(non-convex)하게 만든다는 것을 시사한다.
- **쿼리-키 파라미터화(Query-Key Parameterization)**: 어텐션 유사도를 단일 행렬 $W_{QK}$가 아닌 두 행렬의 곱 $W_Q W_K^\top$으로 파라미터화하는 것은 손실 함수의 환경을 더 복잡하게 만든다. 이 이중 행렬 구조는 헤시안 내에 추가적인 분해(T-functional Hessian)를 유도하여, 단일 행렬 파라미터화에 비해 더 복잡한 구조를 만든다.
- **기타 설계 요소**: 온도(temperature) 스케일링은 $H_o$와 $H_f$ 간의 균형을 조절하며, Layer Normalization은 깊이가 깊어짐에 따라 폭발적으로 증가할 수 있는 헤시안의 데이터 의존성 문제를 완화하여 블록 간 이질성을 줄이는 역할을 한다. 이는 Layer Normalization이 트랜스포머 학습에 필수적인 이유를 설명한다.

### 5. 결론 (Conclusion)

본 연구는 트랜스포머의 헤시안 행렬에 대한 최초의 완전한 이론적 분석을 제공함으로써, 트랜스포머의 독특한 최적화 특성이 어디에서 비롯되는지를 밝혔다. 헤시안의 높은 비선형성, 블록 간 이질성, 그리고 indefinite한 특성은 소프트맥스 함수와 쿼리-키 파라미터화 같은 핵심 설계 요소에서 기인함을 보였다. 이러한 발견은 트랜스포머 학습에 왜 적응형 옵티마이저나 Layer Normalization과 같은 특정 기법들이 필요한지에 대한 근본적인 이해를 제공하며, 향후 더 효율적인 트랜스포머 아키텍처 및 최적화 알고리즘 개발에 기여할 수 있다.

본 논문은 GRAD0732 Final Report를 준비하며 정진영님이 Sub paper로 준비한 논문의 내용을 숙지하기 위해 정리했다.
