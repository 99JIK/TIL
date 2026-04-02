---
title: 'Alternative Methods to SHAP Derived from Properties of Kernels: A Note on Theoretical Analysis'
date: '2024-12-15'
description: LIME의 커널을 이용해 AFA(Additive Feature Attribution)의 일반적인 분석식을 유도하고, 이를 기반으로 SHAP을 대체할 새로운 AFA 방법론들을 제안한다.
tags: [Shapley Additive Explanations, Local Interpretable Model-Agnostic Explanation, Kernel, Explainable Artificial Intelligence, Additive Feature Attribution, Cooperative Game Theory]
authors:
- name: Kazuhiro Hiraki
- name: Shinichi Ishihara
- name: Junnosuke Shino
---

## 논문 정보

- **제목**: Alternative Methods to SHAP Derived from Properties of Kernels: A Note on Theoretical Analysis
- **저자**: Kazuhiro Hiraki (International Monetary Fund), Shinichi Ishihara (Independent Researcher), Junnosuke Shino (Waseda University)
- **학회/저널**: 2024 IEEE International Conference on Big Data (Big Data)
- **발행일**: 2024-12-15 (추정)
- **DOI**: [10.1109/BigData62323.2024.10825215](https://doi.org/10.1109/BigData62323.2024.10825215)
- **주요 연구 내용**: 본 연구는 LIME(Local Interpretable Model-agnostic Explanations)의 커널을 이용하여 AFA(Additive Feature Attribution)의 일반적인 분석식을 유도함. 커널에 대칭성 조건을 부과하여, 특정 커널로부터 AFA 값을 분석적으로 계산할 수 있는 일반적인 프레임워크를 제시함.
- **주요 결과 및 결론**: 이 프레임워크를 통해 기존의 AFA 방법론인 SHAP, ES, FESP를 커널 기반으로 재해석하고, LS prenucleolus 개념과 일치하거나 LIME의 커널 속성과 부합하는 새로운 AFA 방법론 4가지를 제안함. 이를 통해 SHAP의 대안이 될 수 있는 설명가능 AI 방법론의 이론적 기반을 확장함.
- **기여점**: LIME의 커널 관점에서 AFA 방법론들을 통합적으로 분석하고 생성할 수 있는 일반화된 분석식을 최초로 유도함. 이를 통해 SHAP, ES 등 기존 방법론들을 커널 기반으로 재정의하고, LIME의 철학에 더 부합하는 새로운 AFA 대안들을 제시하여 설명가능 AI 분야의 이론적 토대를 넓힘.
<!--truncate-->

## 요약

### 초록

본 연구는 모델의 출력을 각 피처의 기여도로 분해하는 AFA(Additive Feature Attribution) 방법론을 LIME의 커널 관점에서 분석한다. 먼저, AFA와 커널의 관계를 설명하는 일반적인 분석식을 유도한다. 이를 바탕으로, LIME의 철학에 부합하는 바람직한 속성을 가진 커널이나 협력 게임 이론의 LS prenucleolus와 일치하는 새로운 AFA 방법들을 제안한다. 또한, SHAP과 같은 기존 AFA 방법들을 재검토하고 그 커널의 속성을 다시 분석한다.

### 서론

머신러닝 분야에서 XAI(설명가능 인공지능)는 모델의 예측을 이해하기 쉽게 만드는 중요한 기술이다. 그중 AFA는 모델 예측값을 각 피처의 기여도로 분해하는 방법으로, SHAP이 대표적이다. 하지만 SHAP의 커널은 설명 대상 인스턴스에 가까울수록 높은 가중치를 부여하는 LIME의 기본 가정과 다른 특성을 보인다. 이 연구는 AFA와 LIME 커널의 관계를 분석하는 일반적인 프레임워크를 제공하고, 이를 통해 SHAP을 대체할 수 있는 새로운 AFA를 제안하고자 한다.

### 배경

AFA를 이해하기 위해 협력 게임 이론의 개념이 사용된다. 모델 예측 과정은 플레이어(피처)들이 연합(coalition, $S$)을 형성하여 특정 값(예측 결과, $v_{\tau}(S)$)을 얻는 게임으로 볼 수 있다. 여기서 $v_{\tau}(S)$는 특정 인스턴스 $\tau$에 대해 피처 집합 $S$의 값만 알고 나머지는 모를 때의 평균 예측값을 의미한다. AFA는 모든 피처를 사용했을 때의 예측값과 아무 피처도 사용하지 않았을 때의 예측값 차이, 즉 $v_{\tau}(N) - v_{\tau}(\emptyset)$를 각 피처 $j$의 기여도 $\Psi_{\tau,j}$로 분배하는 방법이다.

### 모델 아키텍처 / 방법론

- **핵심 구조/방법**: 이 연구는 LIME의 손실 함수 최적화 문제에서 AFA의 일반해를 도출하는 분석적 프레임워크를 제안한다. 핵심 아이디어는 커널 $\pi_{x_{\tau}}(S)$에 대해 '동일한 크기의 피처 집합에는 동일한 가중치를 부여한다'는 대칭성 조건($|S|=|T|$이면 $\pi_{x_{\tau}}(S)=\pi_{x_{\tau}}(T)$)을 가정하는 것이다.
- **주요 구성 요소**: 이 프레임워크는 커널 함수($\pi_{x_{\tau}}(S)$)를 입력으로 받아, 각 피처의 기여도($\Psi_{\tau,j}^{AFA}$)를 출력하는 일반화된 공식을 제공한다.
- **수식**: 대칭성 조건 하에서 효율성 제약($\sum_{j\in N}\phi_{j}=v_{\tau}(N)-v_{\tau}(\emptyset)$)을 만족하는 AFA의 일반해는 다음과 같이 유도된다.
  $$ \Psi*{\tau,j}^{AFA} = \sum*{S:j\in S}\pi*{x*{r}}(S)\cdot v*{\tau}(S) + \frac{v*{\tau}(N)-v*{\tau}(\emptyset)-\sum*{i\in N}\{\sum*{S:i\in S}\pi*{x*{\tau}}(S)\cdot v*{\tau}(S)\}}{n} $$
- **알고리즘**: 특정 알고리즘 대신, 위 수식에 다양한 형태의 커널 함수를 대입하여 새로운 AFA를 생성하는 방법을 제시한다. SHAP의 커널을 재정의하고, ES, FESP에 해당하는 커널을 유도했다. 또한, LIME의 철학에 부합하도록 피처 수가 많아질수록 가중치가 커지는 선형(LnK), 지수(ExK), 오목(Concave) 커널과, LS Prenucleolus와 동일한 결과를 내는 균일 커널(PNucl) 기반의 AFA들을 새롭게 제안했다.

### 실험 결과

본 논문은 이론적 분석에 중점을 두어 실제 데이터셋을 사용한 실험 결과는 제시하지 않는다. 대신, 제안된 프레임워크의 타당성을 부록에서 이론적으로 증명한다.

- **핵심 성능 지표**: 만약 예측 모델이 피처에 대해 덧셈적(additive)이라면, 커널의 형태와 상관없이 모든 AFA 방법론(SHAP, LnK, ExK 등)은 완전히 동일한 결과를 도출한다. 즉, 제안된 방법들의 차이는 비선형적이고 상호작용이 있는 모델에서만 나타난다.
- **비교 결과**: 선형 회귀 모델의 경우, 본 연구에서 다루는 모든 AFA는 회귀 계수를 기반으로 계산된 기여도와 정확히 일치함을 보였다. 이는 제안된 AFA 프레임워크의 타당성을 뒷받침한다.

### 결론

본 연구는 AFA를 LIME의 커널 관점에서 통합적으로 설명하는 일반화된 분석식을 성공적으로 유도했다. 이를 통해 SHAP, ES, FESP 등 기존 방법론들을 커널 기반으로 재해석했으며, LIME의 원래 아이디어에 더 부합하는 새로운 AFA 대안들을 제안했다. 향후 연구로는 제안된 AFA들을 실제 데이터에 적용하여 분해 패턴의 차이를 실험적으로 검증하고, 협력 게임 이론 관점에서 새로운 방법들을 공리적으로 특성화하는 과제가 남아있다.
