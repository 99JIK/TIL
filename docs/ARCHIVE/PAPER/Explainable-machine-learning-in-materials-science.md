---
title: Explainable machine learning in materials science
date: '2022-09-22'
description: 재료과학 분야의 머신러닝 모델에서 설명 가능 인공지능(XAI)의 개념, 기술, 도전과제를 포괄적으로 검토한 리뷰 논문
tags: [Review, Explainable Artificial Intelligence, Machine Learning, FOR_KSC]
authors:
- name: Xiaoting Zhong
- name: Brian Gallagher
- name: Shusen Liu
- name: Bhavya Kailkhura
- name: Anna Hiszpanski
- name: T. Yong-Jin Han
---

## 논문 정보

- **제목**: Explainable machine learning in materials science
- **저자**: Xiaoting Zhong (Lawrence Livermore National Laboratory), Brian Gallagher (LLNL), Shusen Liu (LLNL), Bhavya Kailkhura (LLNL), Anna Hiszpanski (LLNL), T. Yong-Jin Han (LLNL)
- **학회/저널**: npj Computational Materials, Volume 8, Article 204
- **발행일**: 2022-09-22
- **DOI**: [10.1038/s41524-022-00884-7](https://doi.org/10.1038/s41524-022-00884-7)
- **주요 연구 내용**: 재료과학에서 설명가능 머신러닝(XAI)의 개념 정의, 기존 연구 사례 분석, 도전 과제 및 기회 탐색
- **주요 결과 및 결론**: XAI가 재료과학의 과학적 발견에 기여할 수 있는 세 가지 차원(투명성, 공정성, 인과성)을 체계적으로 정리하고, 재료과학 고유의 도전과제를 제시
- **기여점**: 재료과학 연구자를 위한 XAI의 진입점을 제공하고, "설명"의 의미를 재료과학 맥락에서 명확히 정의
<!--truncate-->

## 요약

### 초록
머신러닝 모델은 뛰어난 정확도로 인해 재료 연구에서 점점 더 많이 사용되고 있지만, 가장 정확한 모델은 대체로 설명하기 어렵다. 이 문제에 대한 해결책은 복잡한 머신러닝 모델(예: 딥 뉴럴 네트워크)의 설명 가능성을 다루는 신흥 연구 분야인 설명가능 인공지능(XAI)에 있다. 본 논문은 재료과학자를 위한 XAI 진입점을 제공하고자 하며, 재료과학 맥락에서 "설명"의 의미를 명확히 정의하고, XAI가 재료과학 연구에 기여하는 사례를 검토하며, 도전과제와 기회를 논의한다.

### 서론
최근 몇 년간 머신러닝은 재료과학에서 혁신적인 도구로 자리잡았다. 재료 특성 예측, 합성 조건 최적화, 미세구조 분석 등 다양한 분야에서 ML 모델이 활용되고 있다. 그러나 높은 예측 정확도를 가진 복잡한 모델(DNN, 앙상블 모델 등)은 내부 동작 메커니즘을 이해하기 어려운 "블랙박스" 문제를 가지고 있다. 재료과학에서는 단순한 예측 정확도를 넘어서, 물리적 통찰과 과학적 발견이 중요하기 때문에 모델의 설명 가능성이 특히 중요하다.

### 방법론
본 리뷰는 XAI를 재료과학의 관점에서 체계적으로 분류하고 분석한다:

1. **"설명"의 정의**: 재료과학에서 설명이란 다음 세 가지 차원을 포함한다:
   - **투명성(Transparency)**: 모델이 어떤 특징을 중요하게 여기는지 이해
   - **공정성(Fairness)**: 모델이 편향되지 않았는지 검증
   - **인과성(Causality)**: 상관관계를 넘어 인과적 관계를 도출

2. **XAI 기법 분류**:
   - **본질적 해석 가능 모델(Intrinsically Interpretable Models)**: 선형 회귀, 의사결정 트리 등
   - **사후 설명 기법(Post-hoc Explanation Methods)**:
     - 특징 중요도 기법: SHAP, LIME, Permutation Importance
     - 주의 메커니즘(Attention Mechanism): 딥러닝 모델의 주의 가중치 분석
     - 그래디언트 기반 방법: Saliency Map, Grad-CAM 등
   - **모델 특화 vs 모델 비의존적(Model-specific vs Model-agnostic) 기법**

3. **재료과학 응용 사례 검토**:
   - 구조-특성 관계 해석
   - 미세구조 분석에서의 XAI
   - 분자 및 결정 구조 설계
   - 합성 조건 최적화

### 실험 및 결과
리뷰 논문으로서 직접적인 실험이 아닌, 기존 문헌의 체계적 분석을 수행한다. 재료과학에서 XAI가 성공적으로 적용된 대표 사례를 다음과 같이 검토한다:

- **특성 예측**: 재료 조성과 구조로부터 기계적, 전기적, 열적 특성을 예측하는 모델에서 SHAP 등을 활용하여 핵심 특징을 식별
- **미세구조 분석**: CNN 기반 미세구조 분류에서 Grad-CAM 등을 통해 모델이 주목하는 영역을 시각화
- **재료 발견**: 고처리량 스크리닝에서 XAI를 통해 유망 후보 재료의 선정 근거를 제시

### 결론
재료과학에서 XAI의 활용은 아직 초기 단계이나, 상당한 잠재력을 가지고 있다. 주요 도전과제로는 (1) 재료과학 데이터의 소규모 특성, (2) 다중 스케일 특성, (3) 실험 재현성 문제, (4) 도메인 지식과의 통합 필요성 등이 있다. 향후 XAI는 단순한 모델 해석 도구를 넘어서, 과학적 발견을 가속화하는 핵심 도구로 발전할 수 있으며, 재료 설계의 패러다임을 변화시킬 잠재력을 가지고 있다.
