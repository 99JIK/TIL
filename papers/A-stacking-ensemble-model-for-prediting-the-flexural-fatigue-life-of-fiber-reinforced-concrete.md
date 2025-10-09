---
title: "A stacking ensemble model for predicting the flexural fatigue life of fiber-reinforced concrete"
date: "2024-09-12"
description: "섬유 보강 콘크리트(FRC)의 휨 피로 수명을 정확하게 예측하기 위해 Deep Autoencoder, XGBoost, Random Forest, GWO로 최적화된 DNN을 결합한 스태킹 앙상블 모델을 제안함"
keywords:
  [
    "Fiber-reinforced Concrete",
    "Flexural Fatigue Life",
    "Prediction",
    "Stacking Ensemble Model",
    "Machine Learning",
    "Fatigue",
  ]
tags:
  [
    "Fiber-reinforced Concrete",
    "Flexural Fatigue Life",
    "Prediction",
    "Stacking Ensemble Model",
    "Machine Learning",
    "Fatigue",
  ]
authors:
  [
    "Wan-lin Min",
    "Wei-liang Jin",
    "Yen-yi Hoo",
    "Hailong Wang",
    "Xiaoyu He",
    "Yongke Wei",
    "Jin Xia",
  ]
---

## 논문 정보

- **제목**: A stacking ensemble model for predicting the flexural fatigue life of fiber-reinforced concrete
- **저자**: Wan-lin Min 외 (Zhejiang University)
- **학회/저널**: International Journal of Fatigue
- **발행일**: 2024-09-12
- **DOI**: [10.1016/j.ijfatigue.2024.108599](https://doi.org/10.1016/j.ijfatigue.2024.108599)
- **주요 연구 내용**: 섬유 보강 콘크리트(FRC)의 휨 피로 수명을 예측하기 위해 스태킹 앙상블 기법에 기반한 새로운 모델(Stacking-SXDG)을 제안함. 이 모델은 Deep Autoencoder Network, XGBoost, Random Forest를 기본 학습기로 사용하고, Grey Wolf Optimizer(GWO) 알고리즘으로 최적화된 Deep Neural Network(DNN)를 메타 학습기로 활용하여 예측 정확도를 극대화함.
- **주요 결과 및 결론**: 제안된 Stacking-SXDG 모델은 테스트 데이터셋에서 $R^{2}$ 값 0.938을 달성하여 다른 단일 머신러닝 모델들보다 월등한 예측 성능을 보임. SHAP 분석을 통해 응력 수준(stress level), 신뢰도(reliability), 섬유 종류 및 길이가 FRC의 피로 수명에 가장 큰 영향을 미치는 주요 인자임을 확인함.
- **기여점**: FRC의 휨 피로 수명 예측을 위해 머신러닝을 적용한 최초의 연구로, 단일 모델의 한계를 극복하는 강력한 스태킹 앙상블 프레임워크를 제시함. 또한, SHAP을 활용하여 모델의 예측 결과를 해석하고 각 입력 변수의 중요도를 정량적으로 분석하여 FRC 재료의 이해와 실제 적용 가능성을 높임.
<!--truncate-->

## 요약

### 초록

섬유를 콘크리트에 혼입하면 피로 저항성이 향상되지만 휨 피로 수명의 변동성도 커지므로, 정교한 예측 모델 개발이 필요하다. 이 연구는 섬유 보강 콘크리트(FRC)의 휨 피로 수명을 정확하게 예측하기 위해 스태킹 앙상블 예측 모델을 개발했다. 이 모델은 Deep Autoencoder Network, XGBoost, Random Forest, 그리고 Grey Wolf Optimizer 알고리즘으로 최적화된 Deep Neural Network를 통합한다. FRC 휨 피로에 대한 데이터셋을 구축하고 모델을 평가한 결과, FRC의 피로 수명을 효과적으로 예측함을 입증했다. 또한, SHAP 분석을 통해 입력 특성과 FRC 피로 수명 간의 관계를 해석했다. 본 연구는 FRC의 피로 수명에 대한 포괄적이고 유연한 예측 프레임워크를 제공하여 재료에 대한 이해와 실제 활용도를 높였다.

### 서론

콘크리트는 토목 공학에서 핵심적인 건설 재료이지만, 반복 하중 하에서 피로 균열 및 파괴에 취약하다. 이를 해결하기 위해 고인장강도 섬유를 혼입한 섬유 보강 콘크리트(FRC)가 개발되었다. 섬유는 균열 발생 후 하중을 지지하고 응력을 분산시켜 피로 수명을 연장하지만, 동시에 피로 수명의 변동성을 증가시킨다. 기존의 피로 수명 예측 방법인 S-N 곡선이나 역학 기반 모델들은 데이터의 제한, 계산 비용 등의 한계를 가진다. 최근 머신러닝 기술이 재료의 피로 수명 예측에 널리 활용되고 있으나, FRC의 피로 수명 예측을 위한 머신러닝 모델은 아직 개발된 바 없다. 본 연구는 이러한 공백을 메우기 위해 스태킹 앙상블 학습에 기반한 새로운 예측 모델을 제안한다.

### 모델 아키텍처 / 방법론

- **핵심 구조/방법**: 본 연구에서 제안하는 Stacking-SXDG 모델은 스태킹 앙상블 학습 프레임워크를 기반으로 한다. 1단계에서는 기본 모델(base models)들이 입력 데이터로부터 예측값을 생성하고, 2단계에서는 메타 모델(meta-model)이 이 예측값들을 입력받아 최종 피로 수명을 예측한다. 이 구조는 여러 모델의 장점을 결합하여 단일 모델의 한계를 극복하고 예측 성능을 극대화한다.

- **주요 구성 요소**:

  - **기본 모델 (Base Models)**:
    - **Deep Autoencoder Network (DAN)**: 비선형 데이터의 특징 추출 및 차원 축소에 강점을 가진다.
    - **XGBoost**: 그래디언트 부스팅 알고리즘으로, 대규모 데이터셋에서 특징 추출 능력이 뛰어나다.
    - **Random Forest (RF)**: 다수의 의사결정 트리를 결합하여 예측 안정성과 정확도를 높인다.
  - **메타 모델 (Meta-Model)**:
    - **GWO-optimized DNN**: 다층 구조를 통해 복잡한 데이터 패턴을 학습하는 Deep Neural Network(DNN)를 메타 모델로 사용한다. Grey Wolf Optimizer(GWO) 알고리즘을 이용해 DNN의 하이퍼파라미터(학습률, 가중치 감소, 배치 크기 등)를 최적화하여 최상의 예측 성능을 달성한다.

- **수식**: GWO 알고리즘은 늑대 무리의 사냥 전략을 모방하여 최적의 해를 탐색한다. 늑대의 위치는 다음 수식들을 통해 반복적으로 갱신된다. 여기서 $\vec{X}$는 늑대의 위치, $\vec{X}_{p}$는 먹이의 위치를 나타낸다.
  $$ \vec{D}=|\vec{C}\cdot\vec{X}_{p}(t)-\vec{X}(t)| $$
$$ \vec{X}(t+1)=\vec{X}_{p}(t)-\vec{A}\cdot\vec{D} $$
최종적으로 상위 3마리 늑대(알파, 베타, 델타)의 위치를 평균하여 다음 세대의 위치를 결정한다.
$$ \vec{X}(t+1)=\frac{\vec{X}_{1}+\vec{X}_{2}+\vec{X}_{3}}{3} $$
데이터 전처리 과정에서는 2-모수 Weibull 분포를 사용하여 피로 수명 데이터의 신뢰도를 추정했다.
$$ ln(ln(\frac{1}{1-P_{fs}}))=alnN-alnN\_{a} $$

- **알고리즘**: Stacking-SXDG 모델의 학습 과정은 다음과 같다. 먼저, 전체 훈련 데이터를 사용하여 DAN, XGBoost, RF와 같은 기본 모델들을 각각 학습시킨다. 그 다음, 학습된 기본 모델들을 사용하여 훈련 데이터에 대한 예측값을 생성한다. 이 예측값들을 새로운 특성(feature)으로 사용하여 메타 모델인 GWO-DNN을 학습시키고, 이를 통해 최종 예측을 수행한다.

### 실험 결과

- **주요 데이터셋**: 기존 연구들로부터 총 982개의 FRC 휨 피로 수명 데이터를 수집하여 데이터셋을 구축했다. 입력 변수는 섬유 특성(종류, 길이, 직경, 인장강도, 함량), 콘크리트 배합비($W/C$, $S/C$, $A/C$), 시편 크기, 응력 수준, 응력비, 신뢰도 등 총 14개이며, 출력 변수는 피로 수명이다. 데이터의 변동성을 고려하기 위해 2-모수 Weibull 분포를 적용하여 신뢰도(R)를 계산하고 입력 변수로 포함했다.

- **핵심 성능 지표**: 제안된 Stacking-SXDG 모델의 예측 성능을 평가하기 위해 $R^{2}$(결정계수), MAE(평균 절대 오차), RMSE(평균 제곱근 오차)를 사용했다. 훈련된 모델을 테스트셋으로 평가한 결과, 예측값과 실제값이 매우 근접하게 분포했으며, $R^{2}$는 0.938, MAE는 26207, RMSE는 66831로 높은 예측 정확도를 보였다. 예측값의 79.60%가 3배 분산대 내에, 87.25%가 5배 분산대 내에 위치했다.

- **비교 결과**: DNN, BPNN, CatBoost, XGBoost, SVR, RF, DT 등 7개의 다른 머신러닝 모델과 성능을 비교했다. Stacking-SXDG 모델은 모든 평가지표($R^{2}$, MAE, RMSE)에서 1위를 차지하여 다른 모델들보다 월등한 성능을 입증했다. 이는 스태킹 앙상블 기법이 데이터의 숨겨진 정보를 효과적으로 추출하고 특징 통합 및 예측 정확도를 향상시키는 데 우수함을 보여준다.

### 결론

본 연구는 FRC의 휨 피로 수명을 정확하게 예측하기 위한 Stacking-SXDG 모델을 성공적으로 개발했다. 이 모델은 여러 알고리즘의 장점을 결합하여 기존 단일 모델들의 예측 한계를 극복하고 뛰어난 성능을 보였다. SHAP 분석 결과, 응력 수준과 신뢰도가 피로 수명에 가장 결정적인 영향을 미쳤으며, 섬유의 길이와 함량이 특정 임계값을 넘을 때 긍정적인 상관관계를 보였다. 향후 연구에서는 더 많은 데이터를 확보하여 모델의 예측 정확도와 일반화 성능을 더욱 향상시킬 필요가 있다.
