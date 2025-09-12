---
title: "Explainable AI for Material Property Prediction Based on Energy Cloud: A Shapley-Driven Approach"
date: "2023-11-24"
description: "PZT 세라믹의 유전율 예측을 위해 TabNet 딥러닝 모델을 사용하고, SHAP 분석을 통해 모델의 투명성과 해석 가능성을 확보하여 재료 과학 분야의 블랙박스 문제를 해결하려는 논문"
keywords:
  [
    "Material",
    "Ceramic",
    "TabNet",
    "Machine Learning",
    "Deep Learning",
    "Explainable Artificial Intelligence",
    "Shapley",
  ]
tags:
  [
    "Material",
    "Ceramic",
    "TabNet",
    "Machine Learning",
    "Deep Learning",
    "Explainable Artificial Intelligence",
    "Shapley",
  ]
authors:
  ["faiza_qayyum", "murad_ali_khan", "do_hyeun_kim", "hyunseok_ko", "ga_ae_ryu"]
---

# Explainable AI for Material Property Prediction Based on Energy Cloud: A Shapley-Driven Approach

## 논문 정보

- **제목 (Title)**: Explainable AI for Material Property Prediction Based on Energy Cloud: A Shapley-Driven Approach
- **저자 (Authors) 및 소속 (Affiliations)**:
  - Faiza Qayyum (Jeju National University)
  - Murad Ali Khan (Jeju National University)
  - Do-Hyeun Kim (Jeju National University)
  - Hyunseok Ko (Korea Institute of Ceramic Engineering and Technology)
  - Ga-Ae Ryu (Korea Institute of Ceramic Engineering and Technology)
- **학회 또는 저널명 (Conference or Journal Name)**: Materials
- **제출일 또는 발행일 (Submission or Publication Date)**: 2023-11-24
- **키워드 (Keywords)**: 재료, 세라믹, TabNet, 머신러닝, 딥러닝, 설명 가능한 인공지능, SHAP
- **초록 (Abstract)**: 재료 과학 분야를 포함한 다양한 영역에서 사용되는 머신러닝 모델의 투명성과 해석 가능성에 대한 우려가 커지고 있다. 이러한 모델들은 복잡성 때문에 '블랙박스'로 취급되어 명확하고 이해하기 쉬운 결과를 도출하는 데 어려움이 있다. 본 연구는 TabNet이라는 딥러닝 프레임워크를 사용하여 PZT(lead zirconate titanate) 세라믹의 유전율 특성을 예측하는 것을 목표로 한다. 모델 결과에 대한 이해를 높이고 입력 변수와 모델 간의 관계를 파악하기 위해 SHAP(Shapley additive explanations) 분석을 수행했다. 연구 결과, TabNet 모델은 PZT 구성 요소의 세라믹 특성 예측에서 기존 머신러닝 모델보다 훨씬 뛰어난 성능을 보였으며, 평균 제곱 오차(MSE) 0.047, 평균 절대 오차(MAE) 0.042를 달성했다. SHAP 분석을 통해 d33, tangent loss, 화학식이 예측에 중요한 기여 요인임을 확인했다.
- **주요 연구 내용 (Main Research Content/Methodology)**:
  - **TabNet 기반 딥러닝 모델 활용**: 표 형식 데이터(tabular data)에 적합하고 해석 가능성이 높은 TabNet 모델을 사용하여 PZT 세라믹의 구성 요소와 공정 데이터를 기반으로 유전율 특성을 예측한다.
  - **SHAP을 통한 모델 해석**: 예측 결과의 투명성을 확보하기 위해 SHAP(Shapley additive explanations)를 적용하여 각 입력 변수가 모델 예측에 미치는 영향을 정량적으로 분석하고 시각화한다.
  - **데이터 전처리 및 교차 검증**: 데이터의 품질을 높이기 위해 레이블 인코딩, KNN(K-Nearest Neighbors)을 이용한 결측치 대체, Min-Max 정규화를 수행하고, 모델의 일반화 성능과 신뢰성을 확보하기 위해 5-겹 교차 검증을 사용한다.
  - **기존 모델과의 성능 비교**: 제안된 TabNet 모델의 우수성을 입증하기 위해 Bi-Layered ANN 및 XGBoost와 같은 전통적인 머신러닝 모델과 성능(MSE, MAE)을 비교 평가한다.
- **주요 결과 및 결론 (Key Findings and Conclusion)**:
  - **TabNet 모델의 우수성 입증**: TabNet 모델은 Bi-Layered ANN 및 XGBoost 모델에 비해 유전율 예측에서 지속적으로 낮은 MSE와 MAE를 기록하며 가장 뛰어난 예측 정확도와 신뢰성을 보였다.
  - **주요 영향 요인 식별**: SHAP 분석 결과, d33(압전 계수), tangent loss, 화학식이 유전율 예측에 가장 긍정적인 영향을 미치는 주요 요인으로 확인되었다. 반면, 공정 시간은 상대적으로 영향력이 적었다.
  - **데이터 결측치 처리의 효과**: KNN 결측치 대체를 적용한 데이터셋으로 훈련한 모델이 결측치를 단순히 제거한 데이터셋으로 훈련한 모델보다 더 낮은 손실과 오차를 보여, 적절한 데이터 전처리의 중요성을 입증했다.
- **기여점 (Contributions)**:
  - **PZT 특성 예측을 위한 새로운 TabNet 프레임워크 개발**: PZT 세라믹 특성 예측에 특화된 새로운 TabNet 기반 딥러닝 프레임워크를 개발하여 높은 예측 정확도를 달성했다.
  - **모델 해석 가능성 증대**: SHAP 분석을 통해 모델과 예측 변수 간의 복잡한 관계를 규명하고, 각 예측에 대한 개별적인 설명을 제공함으로써 재료 과학 분야 AI 모델의 '블랙박스' 문제를 해결하고 해석 가능성을 크게 향상시켰다.
  - **압전 재료 생산 공정 최적화에 기여**: 중요한 특성을 정확하게 예측하는 방법론을 제시함으로써 재료 과학자들이 압전 재료의 생산 공정을 최적화하고 제품 성능과 효율성을 향상시키는 데 실질적인 도움을 줄 수 있다.
- **DOI (Digital Object Identifier)**: 10.3390/ma16237322
- **기타 식별 가능한 정보**:
  - **연구 분야**: 재료 과학, 설명 가능한 인공지능(XAI)
  - **대상**: PZT (Lead Zirconate Titanate) 세라믹
  - **데이터셋**: Korea Institute of Ceramic Engineering and Technology에서 제공한 약 5000개의 PZT 재료 데이터 인스턴스

## 요약

### 서론 (Introduction)

재료 과학 분야에서 세라믹 재료의 특성을 정확하게 예측하는 것은 신소재 탐색 및 설계 방법론의 발전에 있어 매우 중요하다. 최근 인공지능(AI)과 머신러닝(ML) 기술이 재료 특성 예측에 활발히 도입되고 있지만, 대부분의 고성능 모델은 내부 동작 원리를 이해하기 어려운 '블랙박스'라는 한계를 가지고 있다. 이러한 투명성 및 해석 가능성의 부재는 모델의 신뢰도를 저하시키고, 예측 결과를 실제 연구개발에 적용하는 데 큰 걸림돌이 된다.

본 연구는 이러한 문제를 해결하기 위해 PZT(lead zirconate titanate) 세라믹의 핵심 특성인 유전율을 예측하는 것을 목표로 한다. 이를 위해 표 형식 데이터 처리에 강점을 가진 딥러닝 모델인 TabNet을 사용하였다. 더 나아가, 게임 이론에 기반한 SHAP(Shapley additive explanations) 분석 기법을 적용하여 모델의 예측 결과를 해석하고, 어떤 입력 변수가 유전율 예측에 중요한 영향을 미치는지 규명함으로써 모델의 투명성을 확보하고자 하였다.

### 본론 (Main Content)

#### 데이터 및 전처리

본 연구에서는 한국세라믹기술원(KICET)에서 제공한 약 5,000개의 PZT 재료 데이터를 사용했다. 데이터셋은 첨가제, 합금 정보, 화학식과 같은 **구성 요소** 정보와 공정 시간과 같은 **프로세스** 정보, 그리고 d33(압전 계수), 유전율, 밀도 등 **물성** 정보로 구성되었다. 모델의 성능을 최적화하기 위해 데이터 전처리 과정을 수행했다. 먼저, 범주형 데이터를 수치형으로 변환하기 위해 레이블 인코딩을 적용했으며, 데이터셋에 존재하는 결측치는 KNN(K-Nearest Neighbors) 대체 기법을 사용하여 채웠다. 마지막으로, 모든 특성들이 동일한 스케일을 갖도록 Min-Max 정규화를 적용하여 데이터의 품질을 향상시켰다.

#### TabNet 모델 아키텍처 및 학습

PZT 재료 데이터와 같은 표 형식의 데이터를 효과적으로 학습하기 위해 TabNet 모델을 채택했다. TabNet은 의사결정 과정의 각 단계에서 가장 유용한 특징을 선택적으로 집중하는 순차적 어텐션(sequential attention) 메커니즘을 사용한다. 이는 모델이 더 중요한 특징에 집중하여 학습 효율성과 예측 성능을 높이고, 동시에 어떤 특징이 의사결정에 사용되었는지 추적할 수 있게 하여 모델의 해석 가능성을 제공한다. 모델의 신뢰성과 일반화 성능을 확보하기 위해 전체 데이터셋을 5개의 폴드로 나누어 훈련과 검증을 반복하는 5-겹 교차 검증 방식으로 모델을 학습시켰다.

#### 성능 평가 및 비교

제안된 TabNet 모델의 성능을 평가하기 위해 평균 제곱 오차(MSE)와 평균 절대 오차(MAE)를 평가 지표로 사용했다. 또한, 모델의 우수성을 입증하기 위해 전통적인 머신러닝 모델인 XGBoost와 Bi-Layered ANN(인공신경망)과 성능을 비교했다. 실험 결과, TabNet 모델은 5개의 모든 검증 폴드에서 다른 모델들보다 일관되게 낮은 MSE와 MAE를 기록하며 가장 뛰어난 예측 성능을 보였다. 또한, KNN을 통해 결측치를 처리한 데이터로 학습한 모델이 결측치를 제거한 데이터로 학습한 모델보다 더 우수한 성능을 보여, 적절한 데이터 전처리 과정이 모델의 정확도 향상에 중요함을 확인했다.

#### SHAP을 통한 모델 해석

TabNet 모델의 예측 결과를 해석하고 '블랙박스' 문제를 해결하기 위해 SHAP 분석을 수행했다. SHAP은 각 특성이 특정 예측 값에 기여한 정도를 시각적으로 보여준다. 분석 결과, **d33(압전 계수)** 값이 유전율 예측에 가장 큰 긍정적 영향을 미치는 핵심 요인으로 나타났다. 또한 **tangent loss**와 **화학식**도 중요한 긍정적 기여를 하는 것으로 확인되었다. 반면, **공정 시간**이나 **밀도**, **첨가제** 등은 상대적으로 예측에 미치는 영향이 적었다. 이러한 분석을 통해 단순히 높은 예측 정확도를 넘어, 모델이 왜 그러한 예측을 했는지에 대한 구체적인 근거를 파악할 수 있었다.

### 결론 (Conclusion)

본 연구는 PZT 세라믹의 유전율을 예측하기 위해 TabNet 딥러닝 모델과 SHAP 설명 기법을 성공적으로 결합했다. 제안된 TabNet 모델은 기존의 머신러닝 모델보다 월등한 예측 성능(MSE 0.047, MAE 0.042)을 보였으며, PZT 재료의 특성을 정확하게 예측할 수 있는 잠재력을 입증했다.

가장 중요한 기여점은 SHAP 분석을 통해 모델의 예측 과정을 투명하게 해석하고, d33, tangent loss, 화학식과 같은 핵심 영향 요인을 식별했다는 것이다. 이는 재료 과학 분야에서 AI 모델의 '블랙박스' 문제를 해결하고, 연구자들이 모델의 예측 결과를 신뢰하고 활용할 수 있는 기반을 마련했다. 본 연구에서 제시한 설명 가능한 AI 프레임워크는 신소재 발견을 가속화하고, 특정 용도에 맞는 PZT 세라믹의 생산 공정을 최적화하는 데 실질적으로 기여할 것으로 기대된다.
