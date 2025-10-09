---
title: "Comparative Analysis of Explainable AI Methods for Manufacturing Defect Prediction: A Mathematical Perspective"
date: "2025-07-29"
description: "기계 학습, 클러스터링, 설명가능 AI(XAI)를 통합하여 제조 결함을 분석하고 예측함으로써 생산 동역학에 대한 투명하고 데이터 기반의 이해를 제공하는 프레임워크를 제안한 논문"
keywords:
  [
    "Explainable Artificial Intelligence (XAI)",
    "defect prediction",
    "manufacturing quality control",
    "mathematical evaluation XAI",
    "ISO 9001 compliance",
  ]
tags:
  [
    "Explainable Artificial Intelligence",
    "Defect Prediction",
    "Manufacturing Quality Control",
    "Machine Learning",
    "Clustering",
  ]
authors: ["Gabriel Marín Díaz"]
---

## 논문 정보

- **제목**: Comparative Analysis of Explainable AI Methods for Manufacturing Defect Prediction: A Mathematical Perspective
- **저자**: Gabriel Marín Díaz (Faculty of Statistics, Complutense University & Science and Aerospace Department, Universidad Europea de Madrid)
- **학회/저널**: Mathematics
- **발행일**: 2025-07-29
- **DOI**: [10.3390/math13152436](https://doi.org/10.3390/math13152436)
- **주요 연구 내용**: 기계 학습(XGBoost), 비지도 클러스터링(Fuzzy C-Means, K-means), 설명가능 AI(XAI)를 통합하여 제조 공정의 결함을 예측하고 분석하는 통합 프레임워크를 제안함. 지도 학습 모델로 결함 발생 가능성이 높은 시나리오를 분류하고, 비지도 학습으로 생산 데이터를 잠재적 운영 프로파일로 군집화하여 각 접근법을 XAI로 해석함.
- **주요 결과 및 결론**: XGBoost 모델은 95.37%의 높은 정확도로 결함을 예측했으며, SHAP, LIME 등의 XAI 기법은 'MaintenanceHours', 'DefectRate', 'QualityScore'를 핵심 영향 변수로 일관되게 식별함. K-means 클러스터링은 '고효율/고품질', '고위험/자원집약적', '균형/지속가능'의 세 가지 의미 있는 운영 프로파일을 성공적으로 분리했으나, Fuzzy C-Means는 명확한 군집 분리에 한계를 보임.
- **기여점**: 지도 학습, 비지도 클러스터링, XAI를 제조 결함 분석을 위한 단일 프레임워크로 통합한 최초의 연구임. 예측 모델링과 구조적 데이터 분석 모두에 XAI를 적용하여, 제조 공정의 동적 관계에 대한 투명하고 데이터 기반의 이해를 가능하게 하는 이중 해석 가능성 접근법을 제시함.
<!--truncate-->

## 요약

### 초록

제조 공정의 복잡성이 증가함에 따라 정확한 결함 예측과 원인에 대한 해석 가능한 통찰력이 중요해졌다. 이 연구는 기계 학습, 클러스터링, 설명가능 AI(XAI)를 통합하여 산업 환경의 결함 분석 및 품질 관리를 지원하는 방법론을 제안한다. 실제 산업 분포 기반 데이터셋을 사용하여 XGBoost 모델로 고/저 결함 시나리오를 분류하고, 5가지 XAI 기법(SHAP, LIME, ELI5, PDP, ICE)으로 결함과 관련된 주요 변수를 식별한다. 동시에 Fuzzy C-Means와 K-means로 생산 데이터를 잠재적 운영 프로파일로 군집화하고, 이 또한 XAI로 해석하여 공정 수준의 패턴을 발견한다. 이 접근법은 예측적 관점과 구조적 관점 모두에서 일관된 변수를 드러내며 전역적, 지역적 해석 가능성을 모두 제공한다.

### 서론

산업 생산 공정에서 품질 관리는 제품 안전, 고객 만족, 규제 준수를 위해 필수적이다. 최근 머신러닝 모델이 품질 관리 시스템에 도입되었으나, '블랙박스' 모델의 불투명성은 신뢰와 실제 적용에 걸림돌이 된다. 이 연구는 XAI 기술을 통해 모델을 투명하게 만들고, 지도 학습(결함 예측)과 비지도 학습(프로파일링)을 결합한 통합 프레임워크를 통해 제조 공정의 품질 관리를 위한 일관되고 해석 가능한 방법론을 제공하고자 한다.

### 배경

이 연구는 네 가지 핵심 영역을 기반으로 한다: 1) 제조 결함 탐지를 위한 딥러닝, 2) 산업 응용 분야에서의 XAI 통합, 3) 생산 프로파일링을 위한 퍼지 클러스터링, 4) 이러한 기술들을 결합한 통합 프레임워크의 부재. 문헌 검토 결과, 지도 학습, 비지도 클러스터링, XAI를 단일 파이프라인으로 명시적으로 결합한 연구는 없었으며, 이는 본 연구의 독창성을 강조한다.

### 모델 아키텍처 / 방법론

- **핵심 구조/방법**: 데이터 전처리, 이중 모델링 프레임워크(지도/비지도), 설명가능성 계층, 일관성 분석의 4단계로 구성된다. 지도 학습에서는 XGBoost를 사용하여 결함을 예측하고, 비지도 학습에서는 Fuzzy C-Means(FCM)와 K-means를 사용하여 생산 프로파일을 군집화한다. 이후 SHAP, LIME, ELI5, PDP, ICE와 같은 5가지 XAI 기법을 두 경로 모두에 적용하여 결과를 해석한다.
- **주요 구성 요소**:
  - **XGBoost (지도 예측)**: 결함 예측 확률을 출력하는 분류 트리 앙상블 모델.
  - **Fuzzy C-Means (비지도 군집화)**: 각 데이터가 여러 클러스터에 속할 수 있는 '소프트' 군집화 방법.
  - **K-means (비지도 군집화)**: 각 데이터를 가장 가까운 클러스터에 할당하는 '하드' 군집화 방법.
  - **XAI 기법 (해석)**: SHAP(게임 이론 기반 기여도), LIME(지역적 대리 모델), ELI5(의사결정 경로 추적), PDP(평균 예측 시각화), ICE(개별 예측 시각화)를 사용한다.
- **수식**:
  - XGBoost 예측: $\hat{y}_i = \sigma(\sum_{k} f_k(x_i))$, 여기서 $f_k$는 분류 트리.
  - FCM 목적 함수: $J_m = \sum_{i=1}^{N}\sum_{j=1}^{C}u_{ij}^{m}\|x_i - c_j\|^2$, 여기서 $u_{ij}$는 멤버십 정도.
  - SHAP 값: $\phi_j = \sum_{S \subseteq N \setminus \{j\}} \frac{|S|!(|N|-|S|-1)!}{|N|!} [f(S \cup \{j\}) - f(S)]$

### 실험 결과

- **주요 데이터셋**: 3240개의 관측치와 16개 특성으로 구성된 공개 제조 결함 데이터셋("manufacturing_defect_dataset.csv")을 사용했다.
- **핵심 성능 지표**: XGBoost 결함 예측 모델은 테스트 데이터에서 95.37%의 정확도, 0.8826의 AUC, 0.9927의 재현율을 달성했다. 혼동 행렬 분석 결과, 모델은 결함 샘플(True Positive: 678)을 매우 잘 탐지하며, 이는 품질 관리에서 중요한 강점이다.
- **비교 결과**:
  - **XAI 분석**: SHAP, LIME, ELI5는 공통적으로 'MaintenanceHours', 'DefectRate', 'QualityScore'를 결함 예측의 가장 중요한 변수로 지목했다. PDP 및 ICE 플롯은 'MaintenanceHours' 값이 약 0.4를 초과할 때 결함 확률이 급격히 증가하는 비선형 관계를 시각적으로 보여준다.
  - **클러스터링 분석**: Fuzzy C-Means는 클러스터 간 뚜렷한 차이를 보이지 못했다. 반면 K-means는 '고효율/고품질'(Cluster 0), '고위험/자원집약적'(Cluster 1), '균형/지속가능'(Cluster 2)이라는 세 가지 의미 있는 운영 프로파일로 데이터를 성공적으로 분할했다. 클러스터 멤버십을 예측하는 XGBoost 모델은 92.90%의 높은 정확도를 보여 K-means 클러스터링의 타당성을 뒷받침했다.

### 결론

지도 학습, 비지도 클러스터링, XAI를 결합한 이중 모델링 프레임워크는 제조 공정 분석을 위한 강력하고 해석 가능한 방법론임을 입증했다. XGBoost는 결함 예측에 높은 성능을 보였고, XAI 기법들은 모델의 결정 과정을 투명하게 만들어 신뢰성을 높였다. K-means 클러스터링은 감독되지 않은 데이터에서 의미 있는 운영 프로파일을 발견했으며, 이는 결함 예측에서 관찰된 패턴과 일관성을 보였다. 이 통합 접근법은 Industry 4.0 원칙에 부합하는 지능적이고 투명한 시스템 개발에 기여한다.
