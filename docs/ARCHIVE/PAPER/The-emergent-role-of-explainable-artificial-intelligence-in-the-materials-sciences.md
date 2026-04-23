---
title: The emergent role of explainable artificial intelligence in the materials sciences
date: '2023-10-18'
description: 설명가능 인공지능(XAI)을 재료 정보학의 핵심 도구로 소개하고, 재료 발견 및 설계에서 복잡한 머신러닝 모델을 해석하기 위한 방법론과 중요성을 제시하는 가이드
tags: [Explainable Artificial Intelligence, Materials Science, Machine Learning, Review, FOR_KSC]
authors:
- name: Tommy Liu
- name: Amanda S. Barnard
---

## 논문 정보

- **제목**: The emergent role of explainable artificial intelligence in the materials sciences
- **저자**: Tommy Liu (Australian National University), Amanda S. Barnard (Australian National University)
- **학회/저널**: Cell Reports Physical Science, Volume 4, Issue 10, Article 101630
- **발행일**: 2023-10-18
- **DOI**: [10.1016/j.xcrp.2023.101630](https://doi.org/10.1016/j.xcrp.2023.101630)
- **주요 연구 내용**: 재료 정보학(Materials Informatics)에서 설명가능 인공지능(XAI)의 역할과 활용 방법론을 체계적으로 정리한 실용적 가이드
- **주요 결과 및 결론**: XAI가 데이터, 모델, 응용 결정의 결과를 이해하는 포렌식 분석 도구 또는 중요 특징을 구별하는 모델 정제 도구로 활용될 수 있음을 제시
- **기여점**: 물리과학 분야에 가장 유용한 XAI 방법론을 체계적으로 정리하고, 딥러닝 및 대규모 언어 모델 시대에서의 XAI의 중요성을 강조
<!--truncate-->

## 요약

### 초록
합리적인 머신러닝과 창의적인 재료과학의 결합은 새로운 재료를 발견, 설계, 스크리닝하는 강력한 방법인 재료 정보학을 가능하게 한다. 그러나 유망한 예측에서 실용적인 전략으로 전환하기 위해서는 머신러닝 방법이 구조적 특징을 사용하여 목표 특성을 예측하는 방식을 이해해야 한다. 설명가능 인공지능(XAI)은 통계학에 기반한 컴퓨터 과학의 신흥 분야로, 재료 정보학 워크플로우를 강화할 수 있다. XAI는 데이터, 모델, 응용 결정의 결과를 이해하는 포렌식 분석 도구로 사용되거나, 중요한 특징과 잡음 변수를 구별하는 모델 정제 방법으로 활용될 수 있다.

### 서론
재료 정보학은 머신러닝을 활용하여 새로운 재료의 발견과 설계를 가속화하는 분야이다. 그러나 복잡한 머신러닝 모델의 블랙박스 특성으로 인해 예측 결과의 신뢰성과 해석 가능성에 한계가 존재한다. 이러한 문제를 해결하기 위해 XAI가 재료과학 분야에서 점점 더 중요한 역할을 하고 있다. 특히 연구자들이 더 깊은 신경망과 대규모 언어 모델(LLM)을 사용하기 시작하면서 XAI의 필요성이 더욱 부각되고 있다.

### 방법론
본 논문은 XAI의 최신 기술 동향을 체계적으로 정리한 리뷰 논문으로, 주요 XAI 방법론을 다음과 같이 분류하여 소개한다:

1. **포렌식 분석(Forensic Analysis)**: 데이터, 모델, 응용 결정의 결과를 이해하기 위한 사후적 분석 도구
2. **모델 정제(Model Refinement)**: 중요한 특징(feature)과 잡음 변수(nuisance variable)를 구별하는 방법
3. **특징 중요도 기법**: SHAP(Shapley Additive Explanations), LIME(Local Interpretable Model-agnostic Explanations) 등의 방법론
4. **모델 투명성 기법**: 의사결정 트리, 규칙 기반 모델 등 본질적으로 해석 가능한 모델

각 방법론의 재료 정보학에서의 적용 가능성과 장단점을 비교 분석한다.

### 실험 및 결과
리뷰 논문으로서 직접적인 실험보다는 기존 문헌의 사례 분석을 통해 XAI의 유용성을 입증한다. 재료과학에서 XAI가 성공적으로 적용된 사례들을 검토하며, 특히 재료 특성 예측, 구조-특성 관계 해석, 신소재 탐색 과정에서의 XAI 활용 사례를 제시한다. 또한 물리과학 분야의 데이터 특성(고차원, 소규모, 불균형 등)에 적합한 XAI 방법론을 분석한다.

### 결론
XAI는 재료과학 분야에서 단순한 부가 도구가 아닌, 재료 정보학 워크플로우의 핵심 구성 요소로 자리잡고 있다. 특히 딥 뉴럴 네트워크와 대규모 언어 모델의 사용이 확대됨에 따라, XAI의 역할은 더욱 중요해질 것이다. 본 논문은 재료과학 연구자들이 자신의 연구에 적합한 XAI 방법론을 선택하고 적용할 수 있도록 실용적인 가이드를 제공한다.
