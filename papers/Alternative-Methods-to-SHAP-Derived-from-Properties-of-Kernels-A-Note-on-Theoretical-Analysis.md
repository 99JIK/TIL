---
title: "Alternative Methods to SHAP Derived from Properties of Kernels: A Note on Theoretical Analysis"
date: "2024-07-20"
description: "LIME의 커널 속성을 활용하여 SHAP을 대체할 수 있는 새로운 가법적 특징 기여도(AFA) 방법을 제안하고 이론적으로 분석한 논문"
keywords:
  [
    "SHAP",
    "LIME",
    "Kernel",
    "ES",
    "FESP",
    "LS prenucleolus",
    "XAI",
    "Additive Feature Attribution",
  ]
tags:
  [
    "SHAP",
    "LIME",
    "Kernel",
    "ES",
    "FESP",
    "LS prenucleolus",
    "XAI",
    "Additive Feature Attribution",
  ]
authors: ["kazuhiro_hiraki", "shinichi_ishihara", "junnosuke_shino"]
---

# Alternative Methods to SHAP Derived from Properties of Kernels: A Note on Theoretical Analysis

## 논문 정보

- **제목 (Title)**: Alternative Methods to SHAP Derived from Properties of Kernels: A Note on Theoretical Analysis
- **저자 (Authors) 및 소속 (Affiliations)**:
  - Kazuhiro Hiraki
  - Shinichi Ishihara
  - Junnosuke Shino (Waseda University)
- **학회 또는 저널명 (Conference or Journal Name)**: arXiv
- **제출일 또는 발행일 (Submission or Publication Date)**: 2024-07-20
- **키워드 (Keywords)**: SHAP, LIME, 커널, ES, FESP, LS 프레뉴클레오루스, 설명가능 인공지능(XAI), SHAP 대체 방법
- **초록 (Abstract)**: 본 연구는 먼저 LIME(Local Interpretable Model-agnostic Explanations)의 커널을 이용하여 가법적 특징 기여도(AFA, Additive Feature Attribution)에 대한 일반적이고 분석적인 표현을 도출한다. 그 다음, 적절한 커널 속성을 가지거나 협력 게임 이론의 LS 프레뉴클레오루스와 일치하는 새로운 AFA들을 제안한다. 또한, SHAP(SHapley Additive exPlanations)과 같은 기존의 AFA들을 재검토하고 그 커널의 속성을 다시 분석한다.
- **주요 연구 내용 (Main Research Content/Methodology)**:
  - **AFA와 LIME 커널의 일반화된 관계식 도출**: LIME의 최적화 문제에 대칭성 조건을 적용하여, 주어진 커널 함수로부터 AFA를 직접 계산할 수 있는 일반적인 분석적 해(Analytical Solution)를 도출한다.
  - **기존 AFA 방법들의 커널 분석**: SHAP, ES(Equal Surplus), FESP(Fair Efficient Symmetric Perturbation)와 같은 기존 AFA 방법들이 특정 형태의 커널 함수로부터 유도될 수 있음을 보인다.
  - **새로운 SHAP 대체 AFA 제안**: LIME의 기본 아이디어(설명하고자 하는 인스턴스에 가까울수록 높은 가중치를 부여)와 일치하는 합리적인 커널(선형 증가, 지수적 증가, 오목 함수 형태)을 설계하고, 이를 통해 새로운 AFA 방법들을 제안한다. 또한 협력 게임 이론의 LS 프레뉴클레오루스와 동일한 결과를 내는 AFA를 제안한다.
- **주요 결과 및 결론 (Key Findings and Conclusion)**:
  - **AFA-커널 일반 공식 유도**: 특정 AFA(Psi_tauAFA)가 커널 함수(pi_x_tau(S))에 의해 어떻게 결정되는지를 보여주는 일반화된 분석 공식(수식 11)을 성공적으로 도출했다.
  - **기존 및 신규 AFA와 커널의 관계 규명**: SHAP, ES, FESP가 특정 커널의 결과물임을 보였고, 더 나아가 평평한(flat), 선형 증가, 지수적 증가, 오목(concave) 형태의 커널에 기반한 4가지 새로운 AFA(Psi_tauPNucl, Psi_tauLnK, Psi_tauExK, Psi_tauCncav)를 제안했다.
  - **모델의 가법성(Additivity)에 따른 AFA 동일성 입증**: 예측 모델이 특징들에 대해 가법적(additive)일 경우(예: 선형 회귀), 본 연구에서 다룬 모든 AFA(SHAP 및 신규 제안 포함)는 커널의 형태와 무관하게 모두 동일한 결과를 산출함을 증명했다.
- **기여점 (Contributions)**:
  - **통합된 이론적 프레임워크 제공**: LIME의 커널 개념을 통해 다양한 AFA 방법들을 통합적으로 설명하고 생성할 수 있는 일반화된 이론적 프레임워크를 제시했다.
  - **새로운 SHAP 대체 방법론 제시**: LIME의 직관(근접성 가중)에 더 부합하는 커널들을 기반으로 이론적으로 타당한 SHAP의 대안들을 새롭게 제안했다.
  - **기존 방법론에 대한 심층적 이해**: SHAP과 같은 기존 방법들의 기저에 있는 커널 속성을 명확히 함으로써, LIME의 원래 의도와는 다른 방식으로 가중치를 부여하고 있음을 이론적으로 규명했다.
- **DOI (Digital Object Identifier)**: arXiv:2406.00371v3
- **기타 식별 가능한 정보**:
  - **연구 분야**: Explainable Artificial Intelligence (XAI), Machine Learning
  - **대상**: Additive Feature Attribution (AFA) methods
  - **데이터셋**: 이론적 분석으로, 특정 데이터셋을 사용하지 않음

## 요약

### 서론 (Introduction)

설명가능 인공지능(XAI) 분야에서 모델의 예측을 개별 특징들의 기여도로 분해하는 가법적 특징 기여도(AFA, Additive Feature Attribution) 방법은 매우 중요하다. 그중에서도 협력 게임 이론의 Shapley Value에 기반한 SHAP은 가장 널리 사용되는 방법론이다.

한편, 또 다른 유명한 XAI 기법인 LIME은 예측 모델 주변의 데이터를 샘플링하고, 설명하고자 하는 원본 인스턴스와의 거리에 따라 커널(kernel)로 가중치를 부여하여 지역적인 선형 모델을 학습시킨다. 기존 연구에서는 SHAP이 특정 커널을 사용하는 LIME의 특별한 경우(Kernel SHAP)로 표현될 수 있음을 보였다.

그러나 본 논문은 여기서 한 가지 중요한 이론적 불일치를 지적한다. LIME의 기본 아이디어는 원본 인스턴스와 가까운 샘플에 높은 가중치를 부여하는 것이지만, SHAP의 커널은 정반대로 원본과 가장 멀거나(특징이 없거나) 가장 가까운(모든 특징을 다 갖춘) 샘플에 가장 높은 가중치를 부여하는 오목한(concave) 형태를 띤다. 이러한 문제의식에서 출발하여, 본 연구는 LIME의 커널과 AFA 사이의 관계를 일반화하는 분석적 표현을 도출하고, 이를 바탕으로 LIME의 철학에 더 부합하는 새로운 SHAP 대체 AFA들을 제안하고자 한다.

### 본론 (Main Content)

#### AFA와 LIME 커널의 일반화된 관계식 도출

연구의 핵심은 LIME의 최적화 문제(가중 손실 함수 최소화)에 커널이 대칭적이라는 조건을 부여하여 일반적인 분석적 해를 도출한 것이다. 이 결과로 얻어진 **수식 (11)**은 어떠한 대칭적 커널 함수(

pi_x_tau(S))가 주어지더라도 그에 해당하는 AFA(Psi_tau,jAFA)를 직접 계산할 수 있는 강력한 공식을 제공한다. 이 공식은 특정 커널이 어떤 특징 기여도 계산법으로 이어지는지를 명확히 보여주는 다리 역할을 한다.

#### 기존 AFA 방법들의 커널 재검토

저자들은 유도한 일반 공식을 사용하여 기존 AFA 방법들을 커널 관점에서 재해석했다.

- **SHAP**: 널리 알려진 SHAP의 공식이 특정 커널(수식 13)을 일반 공식에 대입했을 때 정확히 유도됨을 보였다. 이를 통해 SHAP 커널이 LIME의 직관과 달리 샘플 공간의 양극단에 높은 가중치를 주는 특성을 다시 한번 확인했다.
- **ES 및 FESP**: SHAP의 대안으로 제시된 ES와 FESP 역시, 각각 특정 크기의 특징 조합에만 가중치를 부여하는 매우 단순한 형태의 커널로부터 생성될 수 있음을 증명했다.

#### 새로운 SHAP 대체 AFA 제안

본 연구의 핵심 기여는 일반 공식을 활용하여 '합리적인' 커널을 가진 새로운 AFA들을 제안한 것이다. 여기서 '합리적'이란, LIME의 원래 아이디어처럼 설명 대상 인스턴스에 가까워질수록 (즉, 더 많은 특징을 공유할수록) 가중치가 증가하는 형태를 의미한다.

- **LS 프레뉴클레오루스 (Psi_tauPNucl)**: 모든 특징 조합에 동일한 가중치를 주는 평평한(flat) 커널을 적용한 결과, 협력 게임 이론의 LS 프레뉴클레오루스와 동일한 해를 얻었다.
- **선형 증가 커널 AFA (Psi_tauLnK)**: 특징의 개수(∣S∣)에 따라 가중치가 선형적으로 증가하는 커널을 사용하여 LIME의 아이디어를 가장 직접적으로 구현한 AFA를 제안했다.
- **지수적 증가 커널 AFA (Psi_tauExK)**: 원본 LIME 논문에서 사용된 가우시안 커널을 본 연구의 프레임워크에 맞게 변형하여, 특징 개수에 따라 가중치가 지수적으로 증가하는 AFA를 제안했다.
- **오목 증가 커널 AFA (Psi_tauCncav)**: 가중치가 증가하긴 하지만, 그 증가율이 점차 감소하는 오목(concave) 함수 형태의 커널을 사용한 AFA도 제안했다.

#### 부가적인 속성 분석

논문의 부록에서는 중요한 이론적 속성을 증명한다. 만약 예측 모델이 선형 회귀처럼 각 특징의 영향이 독립적으로 더해지는

**가법적(additive) 모델**이라면, 위에서 언급된 모든 AFA(SHAP, ES, FESP 및 새로 제안된 4가지 AFA)는 커널의 모양과 관계없이 **모두 정확히 동일한 결과**를 산출한다. 즉, 이들 AFA 방법론 간의 차이는 모델이 비선형적이거나 특징 간 상호작용이 있을 때만 의미를 가진다.

### 결론 (Conclusion)

본 연구는 LIME의 커널과 AFA 방법론들을 연결하는 일반화된 분석 공식을 성공적으로 유도했다. 이 이론적 프레임워크를 통해 SHAP, ES, FESP와 같은 기존 방법들을 커널 관점에서 재해석했으며, 더 중요하게는 LIME의 철학에 더 부합하는 커널(선형 증가, 지수적 증가 등)을 기반으로 한 여러 새로운 SHAP 대체재를 제안했다.

향후 과제로는, 새롭게 제안된 AFA들이 실제 데이터와 모델에 적용되었을 때 기존 SHAP과 어떻게 다른 해석을 제공하는지를 실험적으로 검증하는 것이 남아있다. 또한, 이 새로운 방법들을 협력 게임 이론의 관점에서 공리적으로 특성화하는 것 역시 중요한 후속 연구가 될 것이다.
