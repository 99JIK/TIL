---
title: A machine learning-integrated framework for mechanical property prediction of FDM-printed PLA
date: '2025-08-08'
description: 기계 학습, 실험 검증, 유한 요소 해석을 통합하여 FDM 방식 3D 프린팅 PLA 부품의 인장 강도를 예측하고 설명하는 확장 가능한 프레임워크를 제시한다.
tags: [Fused Deposition Modeling, Machine Learning, Tensile Strength Prediction, Polylactic Acid]
authors:
- name: Yassmin Seid Ahmed
- name: Hany Hassanin
- name: Aamer Nazir
- name: Sikandar Khan
---

## 논문 정보

- **제목**: A machine learning-integrated framework for mechanical property prediction of FDM-printed PLA
- **저자**: Yassmin Seid Ahmed (King Fahd University of Petroleum & Minerals), Hany Hassanin (University of Birmingham), Aamer Nazir (King Fahd University of Petroleum & Minerals), Sikandar Khan (King Fahd University of Petroleum & Minerals)
- **학회/저널**: The International Journal of Advanced Manufacturing Technology
- **발행일**: 2025-08-08
- **DOI**: [10.1007/s00170-025-16232-0](https://doi.org/10.1007/s00170-025-16232-0)
- **주요 연구 내용**: FDM(Fused Deposition Modeling)으로 제작된 PLA 부품의 극한 인장 강도(UTS)를 예측하기 위해 기계 학습(ML), 실험적 검증, 유한 요소 해석(FEA)을 통합한 프레임워크를 제안한다. 14개의 기존 연구에서 422개 샘플 데이터를 수집하여 10개의 ML 알고리즘을 평가하고, 예측 성능 향상을 위해 앙상블 모델을 개발했다.
- **주요 결과 및 결론**: 개별 ML 모델 중에서는 TabNet이 가장 높은 예측 정확도를 보였으며, 여러 모델을 결합한 앙상블 전략은 결정 계수($R^2$) 99.09%라는 월등한 성능을 달성했다. 309개의 외부 독립 샘플을 통한 검증에서 10% 미만의 예측 오차를 보여 모델의 일반화 능력을 확인했으며, 래스터 각도와 내부 채움 밀도가 인장 강도에 가장 큰 영향을 미치는 공정 변수임을 밝혔다.
- **기여점**: 대규모 데이터셋(422개 샘플)과 10개의 다양한 ML 알고리즘, 앙상블 모델링을 적용하고, 외부 데이터셋, 실제 인장 실험, 물리 기반 FEA 시뮬레이션을 포함하는 다단계 검증 체계를 통해 기존 연구들의 한계를 극복했다. 이를 통해 적층 제조 부품의 기계적 물성을 예측하는 검증되고 확장 가능한 통합 솔루션을 제공한다.
<!--truncate-->

## 요약

### 초록

이 연구는 기계 학습, 실험적 검증, 유한 요소 해석을 결합한 통합 프레임워크를 제시하여 FDM 방식으로 프린팅된 PLA 부품의 인장 거동을 예측하고 설명한다. 422개 샘플의 표준화된 데이터셋을 구축하여 10개의 ML 모델을 평가했으며, TabNet이 개별 모델 중 가장 높은 정확도를 보였다. 여러 모델을 결합한 앙상블 전략은 성능을 더욱 향상시켜 결정 계수($R^2$) 99.09%를 달성했다. 309개의 독립적인 외부 샘플을 이용한 검증에서도 모델의 일반화 능력이 확인되었으며, 예측 오차는 10% 미만으로 유지되었다. FEA 시뮬레이션은 인장 시험을 모사하여 응력 경로를 시각화하고 프린트 방향에 따른 파단 모드를 정확하게 예측했다. 이 연구는 적층 제조를 위한 예측 모델링을 발전시켜 항공 우주, 생의학, 자동차 응용 분야에서 재료 성능을 최적화하고 효율적인 설계를 지원하는 검증된 접근법을 제공한다.

### 서론

적층 제조(AM), 특히 PLA를 사용하는 FDM 방식은 복잡한 형상을 최소한의 재료 낭비로 제작할 수 있어 널리 사용된다. 그러나 산업적 적용성을 확대하기 위해서는 극한 인장 강도(UTS)와 같은 기계적 특성을 정확하게 예측하는 것이 매우 중요하다. 기존 연구들은 작은 데이터셋, 제한된 수의 ML 알고리즘 사용, 외부 데이터나 실험을 통한 검증 부족 등의 한계를 가지고 있었다. 이 연구는 이러한 한계를 극복하기 위해 대규모 데이터셋, 다양한 ML 모델, 그리고 실험 및 FEA를 포함하는 다단계 검증을 통합한 포괄적인 예측 프레임워크를 제안한다.

### 모델 아키텍처 / 방법론

- **핵심 구조/방법**: 연구의 전체적인 흐름은 데이터 수집, ML 모델 개발, 앙상블 생성, 외부 검증, 실험 및 FEA, 최종 비교 분석의 단계로 구성된다. 422개의 샘플 데이터셋을 70%의 훈련용과 30%의 테스트용으로 분할하여 사용했다.
- **주요 구성 요소**:
  - **데이터**: 14개의 연구에서 6가지 주요 공정 변수(내부 채움 비율, 래스터 각도, 레이어 높이, 압출 온도, 프린트 속도, 노즐 직경)를 포함하는 422개 샘플 데이터를 수집했다.
  - **ML 모델**: AdaBoost, Bayesian Ridge, CatBoost, Decision Tree, Elastic Net, k-Nearest Neighbors, Linear Regression, Random Forest, Support Vector Regression, 그리고 TabNet까지 총 10개의 알고리즘을 평가했다.
  - **FEA 시뮬레이션**: ANSYS Explicit Dynamics를 사용하여 ASTM D638 Type I 시편의 인장 거동을 시뮬레이션했다. 재료의 손상 시작과 진행을 모사하기 위해 인장-분리 법칙(traction-separation law)을 적용했다.
  - **실험**: 4가지 다른 공정 조건으로 PLA 인장 시편을 제작하고, Instron 인장 시험기를 사용하여 UTS를 측정했다.
- **수식**:
  - **Elastic Net 손실 함수**: L1과 L2 정규화를 결합하여 모델의 복잡성을 제어한다.
    $$min\frac{1}{2m}\sum_{i=1}^{m}(y_i-X_i^{T}\beta)^{2}+\lambda_1\sum_{j=1}^{n}|\beta_j|+\lambda_2\sum_{j=1}^{n}\beta_j^{2}$$
  - **TabNet 특징 선택 마스크**: 각 결정 단계에서 가장 관련성 높은 특징을 선택한다.
    $$M_{t}=Sparsemax(f_{att}(A_{t},X))$$
  - **성능 평가 지표**: 모델 성능은 결정 계수($R^2$), 평균 절대 오차(MAE), 평균 제곱근 오차(RMSE)로 평가했다.
    $$R²(y, \hat{y}) = 1 - \frac{\sum_{i=0}^{n-1}(y_i - \hat{y}_i)^2}{\sum_{i=0}^{n-1}(y_i - \bar{y})^2}$$

### 실험 결과

- **주요 데이터셋**: 14개의 문헌에서 수집한 422개의 FDM-PLA 샘플 데이터와, 검증을 위해 추가로 수집한 309개의 외부 데이터셋을 사용했다.
- **핵심 성능 지표**:
  - 상관관계 분석 결과, 래스터 각도(상관계수 -0.73)와 내부 채움 밀도(상관계수 0.58)가 UTS에 가장 큰 영향을 미치는 요소로 나타났다.
  - 개별 모델 중 TabNet이 테스트 데이터셋에서 가장 높은 성능($R^2=95.73\%$)을 보였다.
  - 앙상블 모델은 성능을 더욱 향상시켰으며, 특히 Ensemble 8 모델은 테스트 데이터셋에서 $R^2$ 99.09%라는 매우 높은 정확도를 달성했다.
- **비교 결과**:
  - FEA 시뮬레이션 결과는 실험에서 관찰된 파단 패턴과 높은 일치도를 보였다. 래스터 각도에 따라 파단 모드가 달라지며, $0^{\circ}$ 래스터에서는 재료 자체의 파괴가, 높은 각도에서는 층간 분리가 주된 파괴 원인이었다.
  - 자체 실험 및 외부 데이터셋을 이용한 TabNet 모델 검증 결과, 대부분의 예측 오차가 10% 이내로 나타나 모델의 높은 일반화 성능을 입증했다.

### 결론

이 연구는 기계 학습, FEA, 실험적 검증을 성공적으로 통합하여 FDM으로 제작된 PLA 부품의 인장 강도를 정확하게 예측하는 프레임워크를 제시했다. 앙상블 ML 모델이 $R^2$ 99.09%의 높은 예측 정확도를 달성했으며, 래스터 각도와 내부 채움 밀도가 강도를 결정하는 핵심 인자임을 확인했다. 이 검증되고 확장 가능한 하이브리드 예측 프레임워크는 적층 제조 부품의 지능형 설계, 최적화 및 신뢰성 평가를 발전시키는 데 기여한다.
