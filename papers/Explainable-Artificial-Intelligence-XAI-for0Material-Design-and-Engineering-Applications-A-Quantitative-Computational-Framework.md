---
title: "Explainable Artificial Intelligence (XAI) for Material Design and Engineering Applications: A Quantitative Computational Framework"
date: 2025-03-27
description: 기계학습(ML) 모델과 설명가능 인공지능(XAI)을 통합하여 재료 특성 예측의 정확성과 해석 가능성을 모두 높이는 정량적 계산 프레임워크를 제안
keywords:
  - Explainable Artificial Intelligence
  - High-Performance Concrete
  - Material Informatics
  - Predictive Modeling
  - Science Cloud Deployment
tags:
  - Explainable Artificial Intelligence
  - High-Performance Concrete
  - Material Informatics
  - Predictive Modeling
  - Science Cloud Deployment
  - FOR_KSC
authors:
  - Bokai Liu
  - Pengju Liu
  - Weizhuo Lu
  - Thomas Olofsson
---

## 논문 정보

- **제목**: Explainable Artificial Intelligence (XAI) for Material Design and Engineering Applications: A Quantitative Computational Framework
- **저자**: Bokai Liu, Pengju Liu, Weizhuo Lu, Thomas Olofsson (Department of Applied Physics and Electronics, Umeå University, Umeå, Sweden)
- **학회/저널**: International Journal of Mechanical System Dynamics
- **발행일**: 2025-03-27 (Accepted)
- **DOI**: [https://doi.org/10.1002/msd2.70017](https://doi.org/10.1002/msd2.70017)
- **주요 연구 내용**: 본 연구는 재료 설계 및 엔지니어링 응용을 위해 기계학습(ML)과 설명가능 인공지능(XAI)을 통합한 새로운 정량적 계산 프레임워크를 제안함. 이 프레임워크는 데이터 처리, 특징 선택, 모델 훈련, 성능 평가, 설명가능성 분석 및 실제 클라우드 배포를 포함하는 체계적인 파이프라인으로 구성됨.
- **주요 결과 및 결론**: 고성능 콘크리트(HPC)의 압축 강도 예측 사례 연구를 통해 프레임워크를 검증했으며, XGBoost 모델이 $R^{2}=0.918$로 가장 높은 예측 성능을 달성함. SHAP과 LIME은 특징 중요도와 재료 간 상호작용에 대한 상세한 통찰력을 제공했으며, 훈련된 모델은 클라우드 기반 API로 배포되어 확장성과 접근성을 확보함.
- **기여점**: 기존 ML 접근법의 '블랙박스' 한계를 극복하기 위해 고급 설명가능성 기술을 통합하고, 비선형적 특징 상호작용을 체계적으로 다루며, 확장 가능한 배포 전략을 제공함. 이를 통해 데이터 기반 예측과 근본적인 재료 과학 원리 사이의 간극을 좁히는 해석 가능하고 배포 가능한 AI 기반 재료 정보학 솔루션을 제시함.

## 요약

### 초록

재료 설계 분야에서 인공지능(AI)의 발전은 재료 특성 예측 모델링을 크게 향상시켰으나, 기계학습(ML) 기반 재료 정보학의 해석 가능성 부족은 실용적인 도입에 주요 장벽이 된다. 이 연구는 ML 모델과 설명가능 인공지능(XAI) 기술을 통합하여 예측 정확도와 해석 가능성을 모두 향상시키는 새로운 정량적 계산 프레임워크를 제안한다. 이 프레임워크는 데이터 처리부터 모델 훈련, 성능 평가, 설명가능성 분석, 그리고 실제 클라우드 배포까지 체계적인 파이프라인을 포함한다. 고성능 콘크리트(HPC) 압축 강도 예측 사례 연구를 통해 검증되었으며, XGBoost가 가장 높은 예측 성능($R^{2}=0.918$)을 보였고 SHAP과 LIME은 특징 중요도와 재료 상호작용에 대한 상세한 통찰을 제공한다. 또한, 훈련된 모델을 클라우드 기반 API로 배포하여 산업 및 연구 응용을 위한 확장성과 접근성을 확보한다.

### 서론

재료 개발은 전통적으로 실험적 시행착오와 도메인 전문 지식에 의존해왔으며, 이는 높은 비용과 시간이 소요되는 단점이 있었다. AI와 ML의 발전은 재료 과학 분야에 혁신을 가져왔지만, 대부분의 고성능 모델(예: DNN, XGBoost)은 블랙박스처럼 작동하여 예측의 근거를 이해하기 어려웠다. 이러한 해석 가능성의 부재는 모델의 신뢰도를 낮추고 실제 현장 적용을 저해하는 요인이 된다. 본 연구는 XAI 기술(SHAP, LIME)을 ML 파이프라인에 체계적으로 통합하여, 예측의 정확성을 유지하면서도 재료의 물리적, 화학적 원리와 부합하는 설명을 제공하는 프레임워크를 개발하여 이 문제를 해결하고자 하였다.

### 모델 아키텍처 / 방법론

![Figure 1](img/Pasted%20image%2020250924155342.png)

- **핵심 구조/방법**: 논문의 Figure 1에서 제시된 프레임워크는 데이터 처리, 특징 선택, 다중 모델 훈련, 평가, 설명가능성 분석, 그리고 배포 및 최적화의 순차적 단계로 구성되었다.
- **주요 구성 요소**:
  - **데이터 처리**: 여러 출처의 실험 데이터를 수집, 정제하고 정규화하여 모델의 강건성을 확보한다.
  - **특징 선택**: 상관관계 분석(Pearson, Spearman, Kendall), Sobol 민감도 분석, 주성분 분석(PCA)을 통해 특징 간의 종속성을 파악하고 데이터 차원을 축소한다.
  - **모델 훈련**: Random Forest(RF), XGBoost, Support Vector Regression(SVR), Deep Neural Networks(DNNs) 등 다양한 ML 모델을 훈련하고 하이퍼파라미터 튜닝을 수행한다.
  - **설명가능성 분석**: SHAP을 사용하여 전역적 특징 중요도와 상호작용을 분석하고, LIME을 통해 개별 예측에 대한 지역적 설명을 생성한다.
  - **배포**: 최종 모델을 Flask와 Gunicorn을 사용해 클라우드 기반 REST API로 배포하여 실시간 추론이 가능하도록 한다.
- **수식**:
  - XGBoost 목적 함수: $\mathcal{L}^{(t)}=\sum_{i=1}^{N}l(y_{i},\hat{y}_{i}^{(t-1)}+f_{t}(x_{i}))+\Omega(f_{t})$
  - SVR 목적 함수: $min\frac{1}{2}||w||^{2}+C\sum_{i=1}^{N}(\xi_{i}+\xi_{i}^{*})$
  - SHAP 값: $\phi_{i}=\sum_{S\subseteq N\backslash\{i\}}\frac{|S|!(|N|-|S|-1)!}{|N|!}[f(S\cup\{i\})-f(S)]$
  - 성능 평가 지표 (RMSE, R²): $RMSE=\sqrt{\frac{1}{n}\sum_{i=1}^{n}(y_{i}-\hat{y}_{i})^{2}}$, $R^{2}=1-\frac{\sum_{i=1}^{n}(y_{i}-\hat{y_{i}})^{2}}{\sum_{i=1}^{n}(y_{i}-\bar{y})^{2}}$
- **알고리즘**: 각 ML 모델(RF, XGBoost, SVR, DNN)은 고유의 알고리즘에 따라 훈련되며, 이후 SHAP과 LIME 알고리즘이 모델 예측 결과를 해석하는 데 사용된다. SHAP은 모든 특징 조합의 기여도를 계산하여 전역적인 중요도를 측정하고, LIME은 특정 데이터 포인트 주변을 샘플링하여 간단한 선형 모델로 근사함으로써 지역적인 설명을 제공한다.

### 실험 결과

- **주요 데이터셋**: 17개의 다른 출처에서 수집한 727개의 고성능 콘크리트(HPC) 샘플 데이터셋을 사용한다. 8개의 입력 특징(시멘트, 플라이애시, 슬래그, 물, 고성능감수제, 굵은골재, 잔골재, 양생기간)으로 압축 강도를 예측한다.
  ![Table 3](img/Pasted%20image%2020250924155640.png)
- **핵심 성능 지표**: 모델 성능 비교 결과(Table 3), XGBoost가 가장 우수한 성능을 보인다($R^{2}=0.918$, MAE=3.192, RMSE=4.603). RF($R^{2}=0.881$)는 XGBoost보다 성능은 약간 낮았지만 훈련 시간이 가장 빨랐다.
  ![Figure 10](img/Pasted%20image%2020250924155857.png)
  ![Figure 11](img/Pasted%20image%2020250924155731.png)
  ![Figure 12](img/Pasted%20image%2020250924155750.png)
  ![Figure 13](img/Pasted%20image%2020250924155818.png)
  ![Figure 19](img/Pasted%20image%2020250924155939.png)
- **비교 결과**: XAI 분석 결과(Figure 11, 13), **양생 기간(age)**과 **시멘트(cement)** 함량이 압축 강도에 가장 큰 영향을 미치는 특징으로 나타났으며, 이는 기존 재료 공학 지식과 일치한다. SHAP 상호작용 값(Figure 12)은 시멘트와 양생 기간, 물과 고성능감수제 간의 강한 상호작용을 시각적으로 보여준다. LIME 분석(Figure 19)을 통해 특정 샘플의 예측 결과에 각 특징이 어떻게 기여했는지 국소적으로 설명할 수 있었다.
- **모델 구조도 또는 실험 결과 이미지 삽입 안내**: 논문의 Figure 10은 4가지 ML 모델의 예측값과 실제값의 산점도를 비교하여 XGBoost의 우수한 성능을 시각적으로 보여준다. Figure 11은 SHAP 분석을 통해 계산된 각 특징의 평균 절대값으로, 모델의 전역적인 특징 중요도를 나타낸다.

### 결론

본 연구는 ML과 XAI를 결합한 정량적 계산 프레임워크를 성공적으로 개발하고 검증한다. 제안된 프레임워크는 높은 예측 정확도를 달성하면서도, SHAP과 LIME을 통해 모델의 예측 근거를 투명하게 설명함으로써 AI 기반 재료 설계의 신뢰도를 높혔다. 특히 고성능 콘크리트 압축 강도 예측 사례는 이 프레임워크의 실용적 가치를 입증했으며, 클라우드 API 배포를 통해 실제 산업 현장에서 활용될 수 있는 확장성을 확보하였다. 이는 데이터 과학과 재료 공학을 잇는 중요한 다리 역할을 할 수 있다.
