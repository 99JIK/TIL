---
title: "The emergent role of explainable artificial intelligence in the materials sciences"
date: "2023-10-18"
description: "재료 과학 분야에서 머신러닝 모델의 예측을 이해하고 신뢰성을 높이기 위한 설명가능 인공지능(XAI)의 역할과 주요 방법론을 소개하는 논문"
keywords:
  [
    "Explainable Artificial Intelligence",
    "XAI",
    "Materials Informatics",
    "Machine Learning",
    "Materials Science",
    "Shapley Values",
  ]
tags:
  [
    "Explainable Artificial Intelligence",
    "XAI",
    "Materials Informatics",
    "Machine Learning",
    "Materials Science",
    "Shapley Values",
  ]
authors: ["tommy_liu", "amanda_s_barnard"]
---

# The emergent role of explainable artificial intelligence in the materials sciences

## 논문 정보

- **제목 (Title)**: The emergent role of explainable artificial intelligence in the materials sciences
- **저자 (Authors) 및 소속 (Affiliations)**:
  - Tommy Liu (School of Computing, Australian National University)
  - Amanda S. Barnard (School of Computing, Australian National University)
- **학회 또는 저널명 (Conference or Journal Name)**: Cell Reports Physical Science
- **제출일 또는 발행일 (Submission or Publication Date)**: 2023-10-18
- **키워드 (Keywords)**: 설명가능 인공지능, XAI, 재료 정보학, 머신러닝, 재료 과학, 섀플리 값
- **초록 (Abstract)**: 재료 정보학(Materials Informatics)은 합리적인 머신러닝과 창의적인 재료 과학을 결합하여 새로운 재료를 발견, 설계, 스크리닝하는 강력한 방법입니다. 그러나 유망한 예측을 실용적인 전략으로 전환하려면, 머신러닝 방법이 어떻게 구조적 특징을 사용하여 목표 속성을 예측하는지 이해하는 것이 중요해졌습니다. 설명가능 인공지능(XAI)은 재료 정보학 워크플로우를 강화할 수 있는 컴퓨터 과학의 신흥 분야입니다. XAI는 데이터, 모델, 애플리케이션 결정의 결과를 이해하기 위한 분석 도구로 사용되거나, 중요하지 않은 변수로부터 중요한 특징을 구별하는 모델 개선 방법으로 활용될 수 있습니다. 본 논문은 XAI의 최신 기술을 개괄하고 물리 과학에 가장 유용한 방법들을 조명합니다.
- **주요 연구 내용 (Main Research Content/Methodology)**:
  - **XAI의 핵심 개념 정의**: 통계학적 추론과 머신러닝의 예측 사이의 간극을 메우는 XAI의 역할을 설명하고, '해석가능성(Interpretability)'과 '설명가능성(Explainability)'의 개념적 차이를 정의합니다. 해석가능성은 모델 자체의 내재적 측면을, 설명가능성은 모델의 출력이 어떻게 도출되었는지에 대한 통찰을 제공하는 것을 의미합니다.
  - **XAI 방법론 분류**: XAI 기술을 내재적(intrinsic) 방법과 사후(post-hoc) 방법으로 크게 분류합니다. 내재적 방법은 그 자체로 이해하기 쉬운 모델(선형 회귀, 결정 트리 등)을 사용하는 것이고, 사후 방법은 이미 훈련된 복잡한 '블랙박스' 모델의 예측을 외부에서 분석하는 기법입니다.
  - **주요 XAI 기법 소개**: 표를 통해 재료 과학에 유용한 주요 XAI 기법들을 소개합니다. 순열 중요도(Permutation Importance), 전역/지역 대리 모델(Global/Local Surrogates), 반사실적 설명(Counterfactual Explanations), 그리고 섀플리 값(Shapley Values) 등이 포함됩니다.
  - **섀플리 값(SHAP) 분석 집중 조명**: 협력 게임 이론에서 비롯된 섀플리 값을 XAI의 핵심 기법으로 상세히 설명합니다. SHAP 프레임워크를 통해 각 특성(feature)이 모델의 최종 예측에 얼마나 기여했는지를 국소적(local) 및 전역적(global) 수준에서 정량화하고 시각화할 수 있습니다.
- **주요 결과 및 결론 (Key Findings and Conclusion)**:
  - **재료 정보학에서 XAI의 필요성**: 머신러닝 모델의 신뢰성, 인과관계 추론, 다른 상황에 대한 적용 가능성(transferability)을 확보하기 위해 XAI가 필수적이라고 주장합니다.
  - **SHAP의 높은 활용성**: SHAP 분석은 복잡한 모델의 예측 결과를 명확하고 이해하기 쉬운 방식으로 설명할 수 있어, 제약 연구부터 페로브스카이트 태양전지 최적화에 이르기까지 다양한 재료 과학 분야에서 이미 널리 활용되고 있습니다.
  - **XAI의 미래 기회**: XAI는 데이터 획득 비용이 높은 재료 과학의 한계를 극복하는 데 기여할 수 있습니다. 예를 들어, 중요하지 않은 데이터를 자동으로 제거하여 모델을 개선하거나, 어떤 데이터를 추가로 수집해야 할지 결정하는 등 실험 설계를 효율적으로 안내할 수 있습니다.
  - **XMI(Explainable Materials Informatics)의 대두**: 저자들은 XAI와 재료 정보학이 결합된 'XMI'라는 새로운 하위 분야의 등장을 예측하며, 이는 재료 과학의 발전을 더욱 가속화할 것이라고 전망합니다.
- **기여점 (Contributions)**:
  - **실용적 가이드 제공**: 재료 과학 연구자들을 위해 XAI의 개념, 주요 방법론, 실제 적용 사례를 체계적으로 정리하여 실용적인 가이드를 제공합니다.
  - **핵심 기술 강조**: 재료 과학의 구조-속성 관계를 이해하는 데 특히 유용한 SHAP과 같은 핵심 XAI 기술의 중요성과 활용 방안을 강조합니다.
  - **미래 비전 제시**: 재료 과학 분야에서 XAI의 역할을 조명하고, 향후 'XMI'라는 융합 분야로 발전할 가능성을 제시하여 미래 연구 방향을 제안합니다.
- **DOI (Digital Object Identifier)**: [https://doi.org/10.1016/j.xcrp.2023.101630](https://www.google.com/search?q=https://doi.org/10.1016/j.xcrp.2023.101630)
- **기타 식별 가능한 정보**:
  - **연구 분야**: 재료 정보학, 설명가능 인공지능
  - **대상**: 재료 과학 분야의 머신러닝 모델
  - **데이터셋**: 특정 데이터셋을 사용하지 않고 방법론을 설명하는 관점(Perspective) 논문

## 요약

### 서론 (Introduction)

최근 몇 년간 재료 과학(Materials Science) 분야에서는 머신러닝(ML) 기술의 도입이 폭발적으로 증가하며, 이를 통해 새로운 재료를 효율적으로 발견하고 설계하는 '재료 정보학(Materials Informatics, MI)'이라는 새로운 학문 분야가 부상했습니다. ML 모델은 방대한 데이터로부터 복잡한 패턴을 학습하여 재료의 물성을 예측하는 데 강력한 성능을 보입니다.

그러나 심층 신경망(Deep Neural Networks)과 같은 많은 고성능 ML 모델들은 내부 작동 방식을 이해하기 어려운 '블랙박스(black boxes)'와 같다는 근본적인 한계를 가집니다. 모델이 어떤 근거로 특정 예측을 했는지 알 수 없으면, 연구자들은 그 결과를 신뢰하기 어렵고 실제 실험이나 산업 공정에 적용하기를 주저하게 됩니다. 이러한 문제를 해결하기 위해 등장한 것이 바로 **설명가능 인공지능(Explainable Artificial Intelligence, XAI)** 입니다. 이 논문은 재료 과학 연구자들을 위해 XAI의 핵심 개념과 방법론을 소개하고, MI 분야에서 XAI가 어떻게 기여할 수 있는지에 대한 실용적인 가이드를 제공합니다.

### 본론 (Main Content)

#### XAI의 핵심 개념과 목표

XAI는 단순히 모델의 예측 결과를 넘어서, 그 결정 과정에 대한 인간 중심의 통찰을 제공하는 것을 목표로 합니다. 이는 다음과 같은 핵심 요소들을 보장하기 위함입니다.

- **신뢰성 (Trustworthiness)**: 모델이 올바른 이유로 정확한 결과를 내고 있는지 신뢰할 수 있게 합니다.
- **인과성 (Causality)**: 입력된 재료의 특성(feature)이 결과(물성)에 정말로 영향을 미치는지, 그 인과 관계를 파악하는 데 도움을 줍니다.
- **전이성 (Transferability)**: 모델이 학습한 지식이 다른 유사한 재료나 조건에도 적용될 수 있는지 판단하는 근거를 제공합니다.

저자들은 '해석가능성(Interpretability)'과 '설명가능성(Explainability)'을 구분합니다. **해석가능성**은 선형 회귀처럼 모델 구조 자체가 단순하여 이해하기 쉬운 내재적(intrinsic) 속성을 의미하는 반면, **설명가능성**은 이미 훈련된 복잡한 모델의 출력 결과를 사후(post-hoc)에 분석하여 통찰을 얻는 것을 의미합니다.

#### XAI 방법론의 분류

XAI 기법은 크게 두 가지 기준으로 나눌 수 있습니다.

1. **내재적(Intrinsic) vs. 사후(Post-hoc)**: **내재적 방법**은 모델 자체가 투명한 결정 트리나 선형 모델을 사용하는 것입니다. 반면 **사후 방법**은 모델의 종류와 상관없이(model-agnostic) 훈련된 모델에 적용하여 예측의 근거를 설명하는 기법으로, 활용도가 매우 높습니다.
2. **전역적(Global) vs. 국소적(Local)**: **전역적 설명**은 데이터셋 전체에 걸쳐 모델이 어떤 특성을 중요하게 생각하는지 등 전반적인 경향을 설명합니다. **국소적 설명**은 특정 데이터 샘플 하나에 대한 예측이 왜 그렇게 나왔는지를 개별적으로 설명합니다.

#### 핵심 XAI 기법: SHAP 분석

본 논문에서 가장 중요하게 다루는 사후 분석 기법은 **섀플리 값(Shapley Values)**, 특히 이를 구현한 **SHAP(Shapley Additive exPlanations)** 프레임워크입니다. 섀플리 값은 협력 게임 이론에서 비롯된 개념으로, 여러 명의 플레이어(특성)가 협력하여 얻은 최종 보상(예측값)을 각 플레이어의 기여도에 따라 공정하게 분배하는 방법을 제시합니다.

SHAP은 특정 예측값에 대해 각 재료 특성(원자 반경, 밴드갭 등)이 예측을 높이는 방향(긍정적 기여)으로 작용했는지, 낮추는 방향(부정적 기여)으로 작용했는지를 수치적으로 보여줍니다. 이를 통해 국소적 수준에서는 단일 재료의 예측 근거를, 전역적 수준에서는 모델 전체가 어떤 특성을 중요하게 여기는지를 명확하게 파악할 수 있습니다.

#### 재료 과학 분야 적용 사례

SHAP을 비롯한 XAI 기법들은 이미 다양한 재료 과학 연구에 성공적으로 적용되고 있습니다.

- **신약 개발**: 화합물의 활성을 예측하는 모델에서 어떤 분자 구조가 활성에 긍정적 또는 부정적 영향을 미치는지 설명하여 구조-활성 관계(SAR)를 분석합니다.
- **다공성 재료**: 다공성 탄소 소재의 수소 저장량을 예측하는 모델을 분석하여, 어떤 물리화학적 특성이 수소 흡착에 가장 중요한지를 밝혀냈습니다.
- **페로브스카이트 태양전지**: 재료 특성과 공정 변수를 기반으로 전력 변환 효율(PCE)을 예측하는 모델을 XAI로 분석하여, 양이온/음이온 비율과 열처리 온도가 PCE에 가장 큰 영향을 미치는 요소임을 확인하고 소자 설계를 최적화했습니다.

### 결론 (Conclusion)

설명가능 인공지능(XAI)은 아직 초기 단계에 있는 분야이지만, 재료 과학의 미래에 필수적인 역할을 할 것입니다. 특히 재료 과학 연구는 실험이나 시뮬레이션 비용이 매우 높아 데이터 확보가 어려운 경우가 많습니다. XAI는 이러한 상황에서 중요한 특성을 식별하고 불필요한 데이터를 제거하여 모델을 개선하며, 향후 어떤 데이터를 수집해야 할지 방향을 제시함으로써 연구 개발의 효율성을 크게 높일 수 있습니다.

저자들은 앞으로 XAI와 재료 정보학이 결합된 **XMI(Explainable Materials Informatics)**라는 새로운 융합 분야가 부상하여, 머신러닝이 가져온 혁신을 넘어 과학적 발견을 더욱 가속화할 것이라고 전망합니다. XAI는 ML 예측을 단순한 숫자가 아닌, 신뢰할 수 있는 과학적 통찰로 전환하는 핵심 다리가 될 것입니다.
