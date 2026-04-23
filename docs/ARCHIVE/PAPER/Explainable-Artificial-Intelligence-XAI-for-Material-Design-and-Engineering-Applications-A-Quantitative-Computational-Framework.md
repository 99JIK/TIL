---
title: 'Explainable Artificial Intelligence (XAI) for Material Design and Engineering Applications: A Quantitative Computational Framework'
date: '2025-03-27'
description: 기계학습(ML) 모델과 설명가능 인공지능(XAI)을 통합하여 재료 특성 예측의 정확성과 해석 가능성을 모두 높이는 정량적 계산 프레임워크를 제안
tags: [Explainable Artificial Intelligence, High-Performance Concrete, Material Informatics, Predictive Modeling, Science Cloud Deployment, FOR_KSC]
authors:
- name: Bokai Liu
- name: Pengju Liu
- name: Weizhuo Lu
- name: Thomas Olofsson
---

## 논문 정보

- **제목**: Explainable Artificial Intelligence (XAI) for Material Design and Engineering Applications: A Quantitative Computational Framework
- **저자**: Bokai Liu (Umeå University), Pengju Liu (Umeå University), Weizhuo Lu (Umeå University), Thomas Olofsson (Umeå University)
- **학회/저널**: International Journal of Mechanical System Dynamics, Volume 5, Issue 2, pp. 236-265
- **발행일**: 2025-03-27
- **DOI**: [10.1002/msd2.70017](https://doi.org/10.1002/msd2.70017)
- **주요 연구 내용**: 데이터 처리, 특징 선택, 모델 학습, 성능 평가, 설명가능성 분석, 클라우드 배포를 포함하는 체계적 ML-XAI 통합 파이프라인 제안
- **주요 결과 및 결론**: 고성능 콘크리트(HPC) 압축 강도 예측에서 XGBoost 모델이 R²=0.918로 최고 예측 성능을 달성하였으며, SHAP과 LIME을 통해 특징 중요도 및 재료 상호작용에 대한 상세한 해석 제공
- **기여점**: 재료 설계 및 엔지니어링 응용을 위한 정량적 XAI 계산 프레임워크를 제시하고, 클라우드 기반 API 배포까지 포함하는 완전한 워크플로우 구축
<!--truncate-->

## 요약

### 초록
재료 정보학에서 머신러닝(ML) 기반 예측 모델의 해석 가능성 부족은 실용적 채택에 큰 장벽이 된다. 본 연구는 ML 모델과 설명가능 인공지능(XAI) 기법을 통합하여 재료 특성 예측의 정확성과 해석 가능성을 동시에 향상시키는 새로운 정량적 계산 프레임워크를 제안한다. 이 프레임워크는 데이터 처리, 특징 선택, 모델 학습, 성능 평가, 설명가능성 분석, 실세계 배포를 포함하는 체계적 파이프라인을 구성한다.

### 서론
재료과학에서 ML 모델의 활용이 증가하고 있으나, 대부분의 고성능 모델은 블랙박스 특성을 가지고 있어 예측 결과에 대한 신뢰성과 물리적 의미의 해석이 어렵다. 이는 재료 설계 및 엔지니어링 실무에서 ML 모델의 채택을 저해하는 주요 요인이다. 본 연구는 XAI를 체계적으로 통합한 정량적 프레임워크를 제시하여 이 문제를 해결하고자 한다.

### 모델 아키텍처 / 방법론
본 프레임워크는 다음의 주요 구성 요소를 포함한다:

1. **데이터 전처리 및 특징 분석**:
   - Sobol 민감도 분석을 통한 특징 의존성 정량화
   - 주성분 분석(PCA)을 이용한 고차원 재료 데이터의 차원 축소
   - 상관 분석 및 통계적 특징 선택

2. **ML 모델 비교 분석**:
   - Random Forest (RF): 앙상블 기반 배깅 방법
   - XGBoost: 그래디언트 부스팅 기반 앙상블
   - Support Vector Regression (SVR): 커널 기반 회귀
   - Deep Neural Networks (DNNs): 다층 신경망
   - 정확도, 해석 가능성, 계산 효율성 간의 트레이드오프 분석

3. **XAI 기법**:
   - SHAP(Shapley Additive Explanations): 글로벌 및 로컬 수준의 특징 중요도 분석
   - LIME(Local Interpretable Model-agnostic Explanations): 개별 예측에 대한 로컬 해석

4. **클라우드 배포**: 학습된 모델을 클라우드 기반 API로 배포하여 실세계 활용 가능성 확보

### 실험 및 결과
고성능 콘크리트(HPC) 압축 강도 예측을 대표적 사례 연구로 검증하였다:

- **XGBoost**: R²=0.918로 최고 예측 성능 달성
- **Random Forest**: 안정적인 성능과 높은 해석 가능성 제공
- **SVR**: 중간 수준의 예측 성능
- **DNN**: 높은 예측 성능이나 해석 가능성이 상대적으로 낮음

SHAP 분석을 통해 시멘트 함량, 물-시멘트 비, 양생 기간 등이 압축 강도 예측에 가장 큰 영향을 미치는 특징임을 확인하였다. LIME 분석은 개별 예측에 대한 상세한 로컬 수준의 해석을 제공하여, 재료 과학자들이 특정 배합에서의 성분 간 상호작용을 이해할 수 있도록 하였다.

### 결론
본 연구는 재료 설계 및 엔지니어링 응용을 위한 체계적인 ML-XAI 통합 프레임워크를 제시하였다. XGBoost 모델의 우수한 예측 성능과 SHAP, LIME을 통한 풍부한 해석 가능성을 입증하였으며, 클라우드 배포를 통한 실세계 활용 가능성을 확인하였다. 이 프레임워크는 재료 정보학에서 ML 모델의 실용적 채택을 촉진하고, 데이터 기반 재료 설계의 신뢰성을 높이는 데 기여할 수 있다.
