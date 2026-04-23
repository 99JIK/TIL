---
title: 'Explainable AI for Material Property Prediction Based on Energy Cloud: A Shapley-Driven Approach'
date: '2023-11-24'
description: 설명가능 AI(XAI) 기법인 SHAP을 적용한 TabNet 딥러닝 모델을 사용하여 PZT 세라믹 소재의 유전율을 예측하고, 각 입력 변수의 영향을 분석한 연구
tags: [Ceramic, TabNet, Machine Learning, Deep Learning, Explainable Artificial Intelligence, SHAP, FOR_KSC]
authors:
- name: Faiza Qayyum
- name: Murad Ali Khan
- name: Do-Hyeun Kim
- name: Hyunseok Ko
- name: Ga-Ae Ryu
---

## 논문 정보

- **제목**: Explainable AI for Material Property Prediction Based on Energy Cloud: A Shapley-Driven Approach
- **저자**: Faiza Qayyum (Jeju National University), Murad Ali Khan (Jeju National University), Do-Hyeun Kim (Jeju National University), Hyunseok Ko (Korea Institute of Ceramic Engineering and Technology), Ga-Ae Ryu (Korea Institute of Ceramic Engineering and Technology)
- **학회/저널**: Materials, Volume 16, Issue 23, Article 7322
- **발행일**: 2023-11-24
- **DOI**: [10.3390/ma16237322](https://doi.org/10.3390/ma16237322)
- **주요 연구 내용**: TabNet 딥러닝 프레임워크와 SHAP 기법을 결합하여 PZT(납 지르코늄 티타네이트) 세라믹의 유전율을 예측하고 해석하는 연구
- **주요 결과 및 결론**: TabNet 모델이 MSE 0.047, MAE 0.042로 기존 머신러닝 모델 대비 우수한 예측 성능을 달성하였으며, SHAP 분석을 통해 d33(압전 전하 계수)가 유전율 예측에 가장 큰 영향을 미치는 변수임을 확인
- **기여점**: 재료 특성 예측에서 딥러닝의 정확도와 XAI의 해석 가능성을 동시에 달성하는 방법론을 제시
<!--truncate-->

## 요약

### 초록
본 연구는 머신러닝의 "블랙박스" 문제를 해결하기 위해 TabNet 딥러닝 프레임워크에 SHAP(Shapley Additive Explanations) 해석 기법을 적용하여 세라믹 소재의 특성을 예측하고 해석하는 방법을 제안한다. 구체적으로, PZT(납 지르코늄 티타네이트) 세라믹의 유전율(dielectric constant)을 성분 및 공정 파라미터로부터 예측하며, SHAP을 통해 각 입력 변수의 예측에 대한 기여도를 정량적으로 분석한다.

### 서론
세라믹 소재, 특히 PZT는 압전 센서, 액추에이터, 에너지 하베스팅 등 다양한 분야에서 핵심적인 역할을 한다. 유전율은 PZT 세라믹의 성능을 결정하는 주요 물성 중 하나이나, 그 예측은 복잡한 조성-공정-물성 관계로 인해 어려운 과제이다. 기존의 머신러닝 모델은 높은 예측 정확도를 달성할 수 있으나, 예측 결과의 해석이 어려워 재료 과학자들의 실질적인 활용이 제한적이었다.

### 모델 아키텍처 / 방법론

1. **데이터셋**: 재료 디지털화 센터에서 제공한 약 5,000개의 PZT 소재 인스턴스를 사용
   - **입력 변수**: 첨가제(additive), 합금화(alloying), 화학식(chemical formula), 공정 시간(process time), d33(압전 전하 계수), 밀도(density), 탄젠트 손실(tangent loss)
   - **목표 변수**: 유전율(dielectric constant)

2. **데이터 전처리**:
   - 레이블 인코딩: 범주형 변수를 수치형으로 변환
   - KNN 대체(imputation): K-최근접 이웃 알고리즘으로 결측치 처리
   - 최소-최대 정규화: 데이터를 0-1 범위로 스케일링

3. **모델 구조 - TabNet**:
   - 특징 변환 레이어(Feature Transformer Layer)
   - 주의 메커니즘 기반 특징 선택(Attentive Transformer)
   - 각 결정 단계에서의 특징 마스킹(Feature Masking)
   - 테이블 형태 데이터에 특화된 딥러닝 아키텍처

4. **비교 모델**: Bi-Layered ANN, XGBoost

5. **SHAP 분석**:
   - 평균 SHAP 값 시각화
   - Beeswarm 플롯을 통한 값 분포 분석
   - Force 플롯을 통한 개별 특징 기여도 표시
   - Waterfall 플롯을 통한 누적 특징 영향 분석

6. **검증**: 5-겹 교차 검증(80% 학습, 20% 테스트)

### 실험 및 결과

**모델 성능 비교**: TabNet이 기존 모델 대비 우수한 성능을 달성
- TabNet: MSE=0.047, MAE=0.042
- KNN 대체 적용 시 학습 MAE 0.0320, 검증 MAE 0.04177로 미적용 대비(학습 0.0382, 검증 0.04570) 성능 향상

**SHAP 기반 특징 중요도 분석** (유전율 예측에 대한 영향력 순):
1. **d33**: 가장 높은 양의 영향 (압전 전하 계수)
2. **공정 시간**: 상당한 음의 영향
3. **화학식**: 큰 양의 기여
4. **합금화**: 중간 수준의 양의 효과
5. **첨가제**: 미미한 음의 영향
6. **밀도**: 최소한의 기여
7. **탄젠트 손실**: 한계적 영향

상관 분석 대비 SHAP 분석은 비선형 관계를 효과적으로 포착하여, 상관계수가 낮은 공정 시간이 실제로는 예측에 큰 음의 영향을 미침을 밝혀냈다.

### 결론
본 연구는 TabNet-SHAP 결합 접근법을 통해 PZT 세라믹 유전율 예측에서 딥러닝의 정확도와 XAI의 해석 가능성을 동시에 달성하였다. TabNet은 기존 ML 모델 대비 우수한 예측 성능을 보였으며, SHAP 통합을 통해 d33, 탄젠트 손실, 화학식 등이 핵심 예측 요인임을 규명하였다. 이 프레임워크는 재료 과학자들이 PZT 세라믹의 조성-공정 최적화를 수행하는 데 실용적으로 활용될 수 있으며, 재료 발견 시스템의 발전에 기여할 수 있다.
