---
title: "Explainable AI for Material Property Prediction Based on Energy Cloud: A Shapley-Driven Approach"
date: "2023-11-24"
description: "설명가능 AI(XAI) 기법인 SHAP을 적용한 TabNet 딥러닝 모델을 사용하여 PZT 세라믹 소재의 유전율을 예측하고, 각 입력 변수의 영향을 분석한 연구"
keywords:
  [
    "Material",
    "Ceramic",
    "TabNet",
    "Machine Learning",
    "Deep Learning",
    "Explainable Artificial Intelligence",
    "SHAP",
  ]
tags:
  [
    "Material",
    "Ceramic",
    "TabNet",
    "Machine Learning",
    "Deep Learning",
    "Explainable Artificial Intelligence",
    "SHAP",
  ]
authors: [Faiza Qayyum, Murad Ali Khan, Do-Hyeun Kim, Hyunseok Ko, Ga-Ae Ryu]
---

## 논문 정보

- **제목**: Explainable AI for Material Property Prediction Based on Energy Cloud: A Shapley-Driven Approach
- **저자**: Faiza Qayyum (Jeju National University), Murad Ali Khan (Jeju National University), Do-Hyeun Kim (Jeju National University), Hyunseok Ko (Korea Institute of Ceramic Engineering and Technology), Ga-Ae Ryu (Korea Institute of Ceramic Engineering and Technology)
- **학회/저널**: Materials
- **발행일**: 2023-11-24
- **DOI**: [10.3390/ma16237322](https://doi.org/10.3390/ma16237322)
- **주요 연구 내용**: TabNet 딥러닝 프레임워크를 활용하여 PZT(납 지르콘산 티탄산염) 세라믹의 조성 및 공정 데이터를 기반으로 유전율 특성을 예측하는 모델을 개발함. 모델의 예측 결과를 해석하고 입력 변수와 예측 사이의 관계를 이해하기 위해 설명가능 AI(XAI) 기법인 SHAP(Shapley additive explanations) 분석을 수행함.
- **주요 결과 및 결론**: 제안된 TabNet 모델은 기존 머신러닝 모델(XGBoost, Bi-Layered ANN)보다 우수한 성능을 보였으며, 평균 제곱 오차(MSE) 0.047, 평균 절대 오차(MAE) 0.042를 달성함. SHAP 분석을 통해 압전상수(d33), 유전 손실(tangent loss), 화학식이 유전율 예측에 중요한 기여를 하는 반면, 공정 시간은 상대적으로 영향이 적음을 확인함.
- **기여점**: PZT 세라믹 특성 예측을 위해 특화된 새로운 TabNet 기반 딥러닝 프레임워크를 개발함. SHAP 분석을 통해 모델의 예측에 대한 해석 가능성을 높이고, 다양한 입력 파라미터가 예측에 미치는 영향을 심층적으로 분석하여 압전 재료 특성 예측 분야의 신뢰성을 향상시킴.
<!--truncate-->

## 요약

### 초록

소재 과학 분야에서 머신러닝 모델의 투명성과 해석 가능성에 대한 우려가 커지고 있음. 복잡한 모델은 종종 "블랙박스"로 취급되어 결과를 이해하기 어려운 문제가 있음. 이 연구는 PZT 세라믹의 조성 및 공정 데이터를 사용하여 유전율을 예측하기 위해 TabNet이라는 딥러닝 프레임워크를 활용함. SHAP(Shapley additive explanations) 분석을 통해 모델이 생성한 결과의 이해도를 높이고, 입력 변수와 모델 간의 관계에 대한 통찰력을 얻고자 함. TabNet 모델은 기존 머신러닝 모델보다 월등한 성능(MSE 0.047, MAE 0.042)을 보였으며, SHAP 분석 결과 d33, 유전 손실, 화학식 등이 예측에 중요한 요소임을 확인함.

### 서론

소재 과학 분야에서 세라믹 재료의 특성을 정확하게 예측하는 것은 신소재 탐색 및 설계 방법론의 발전에 매우 중요함. 최근 AI 기술의 통합이 활발하지만, 대부분의 모델이 "블랙박스"처럼 작동하여 예측의 근거를 이해하기 어렵다는 한계가 있음. 특히 PZT 세라믹 소재의 유전율 예측과 같이 정밀한 제어가 필요한 분야에서는 모델의 높은 정확도와 함께 결과에 대한 해석 가능성이 필수적임. 이 연구는 TabNet과 SHAP을 결합하여 PZT 세라믹 유전율 예측 모델의 성능과 해석 가능성을 동시에 확보하는 것을 목표로 함.

### 모델 아키텍처 / 방법론

- **핵심 구조/방법**: 본 연구의 프레임워크는 데이터 전처리, TabNet 모델 학습, SHAP을 이용한 결과 해석의 세 단계로 구성됨. 논문의 Figure 1에서 전체적인 아키텍처를 확인할 수 있음.
  1.  **데이터 전처리**: 범주형 데이터를 수치로 변환하기 위해 레이블 인코딩을 적용하고, 결측치는 KNN(K-Nearest Neighbors) Imputation으로 처리함. 이후 모든 피처의 스케일을 통일하기 위해 Min-Max 정규화를 수행함.
  2.  **모델 학습**: 표(tabular) 형식의 데이터에 강점을 가진 TabNet 딥러닝 모델을 사용하여 PZT 유전율을 예측함. 모델의 일반화 성능을 높이기 위해 5-겹 교차 검증(5-fold cross-validation)을 사용함.
  3.  **해석 가능성 분석**: 학습된 TabNet 모델의 예측 결과를 해석하기 위해 SHAP 기법을 적용함. 각 입력 피처가 최종 예측에 얼마나 기여했는지를 정량적으로 분석하여 모델의 투명성을 확보함.
- **주요 구성 요소**: TabNet 모델은 각 결정 단계(decision step)에서 특징을 선택하고 처리하는 과정이 순차적으로 이루어짐.
  - **Feature Transformer**: 입력된 특징을 처리하고 변환하는 블록.
  - **Attentive Transformer**: 이전 단계의 정보를 바탕으로 현재 단계에서 어떤 특징에 주목할지 결정하는 어텐션 메커니즘. (논문의 Figure 5 참조)
  - **Feature Masking**: Attentive Transformer에 의해 선택된 특징만 다음 단계로 전달하고, 나머지는 마스킹하여 효율적인 학습을 유도함.
- **수식**: 데이터 정규화에 사용된 Min-Max 스케일링 공식은 다음과 같음.
  $$
  X_{normalized} = \frac{X - X_{min}}{X_{max} - X_{min}}
  $$
- **알고리즘**: 제안된 방법론은 전처리된 데이터를 사용하여 TabNet 모델을 학습시키고, SHAP Explainer를 통해 각 예측 인스턴스에 대한 피처별 기여도(SHAP 값)를 계산하여 모델의 예측 근거를 시각화하고 분석함.

### 실험 결과

- **주요 데이터셋**: 한국세라믹기술원(KICET)에서 제공한 약 5,000개의 PZT 소재 데이터셋을 사용함. 데이터셋은 첨가제(additive), 합금(alloying), 화학식(chemical formula)과 같은 조성 정보와 공정 시간(process time) 및 압전상수(d33), 유전 손실(tangent loss), 밀도(density) 등의 물성 정보를 포함함. 목표 변수는 유전율(dielectric constant)임.
- **핵심 성능 지표**: KNN 결측치 보간을 적용했을 때 TabNet 모델의 성능이 가장 우수했음. 5-겹 교차 검증 결과, 평균 검증 MAE는 0.04177, 평균 검증 MSE는 0.04744를 기록함.
- **비교 결과**: 논문의 Figure 15에서 볼 수 있듯이, TabNet 모델은 모든 교차 검증 폴드에서 XGBoost와 Bi-Layered ANN 모델보다 낮은 MAE와 MSE를 보여 월등한 예측 정확도를 입증함.
- **SHAP 분석 결과**: 논문의 Figure 16에 제시된 평균 SHAP 값 분석 결과, 압전상수(`d33`)가 유전율 예측에 가장 큰 긍정적 영향을 미치는 피처로 나타남. 그 뒤를 이어 `process_time`, `chemical_formula`, `alloying` 순으로 영향력이 높았음. 반면, Figure 22에서는 `process_time`이 일부 경우에 부정적인 영향을 미치는 것으로 분석되어, 피처의 영향이 복합적임을 시사함.

### 결론

이 연구는 PZT 세라믹의 유전율을 정확하게 예측하기 위해 TabNet 딥러닝 모델과 SHAP 분석을 성공적으로 결합함. 제안된 모델은 기존 머신러닝 기법보다 뛰어난 예측 성능을 보였으며, SHAP을 통해 각 입력 변수가 예측에 미치는 영향을 명확히 설명할 수 있었음. 이는 '블랙박스' 모델의 한계를 극복하고, 소재 과학자들이 특정 응용 분야에 맞게 PZT 세라믹을 최적화하는 데 유용한 통찰력을 제공함. 본 연구 결과는 설명가능 AI가 신소재 발견 및 특성 예측의 복잡성을 해결하는 데 중요한 역할을 할 수 있음을 보여줌.
