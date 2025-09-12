---
title: "Polymer design via SHAP and Bayesian machine learning optimizes pDNA and CRISPR ribonucleoprotein delivery"
date: "2024-04-22"
description: "SHAP 및 베이지안 머신러닝을 통해 pDNA 및 CRISPR 리보핵단백질(RNP) 전달을 최적화하는 고분자 설계에 대한 논문"
keywords:
  [
    "Machine Learning",
    "Polymer Design",
    "pDNA Delivery",
    "CRISPR RNP Delivery",
    "SHAP Analysis",
    "Bayesian Optimization",
    "Structure-Property Relationships",
  ]
tags:
  [
    "Machine Learning",
    "Polymer Design",
    "pDNA Delivery",
    "CRISPR RNP Delivery",
    "SHAP Analysis",
    "Bayesian Optimization",
    "Structure-Property Relationships",
  ]
authors:
  ["rishad_j_dalal", "felipe_oviedo", "michael_c_leyden", "theresa_m_reineke"]
---

# Polymer design via SHAP and Bayesian machine learning optimizes pDNA and CRISPR ribonucleoprotein delivery

## 논문 정보

- **제목 (Title)**: Polymer design via SHAP and Bayesian machine learning optimizes pDNA and CRISPR ribonucleoprotein delivery
- **저자 (Authors) 및 소속 (Affiliations)**:      - Rishad J. Dalal (University of Minnesota)
  - Felipe Oviedo (Nanite Inc., University of Minnesota)
  - Michael C. Leyden (University of Minnesota)
  - Theresa M. Reineke (University of Minnesota)
- **학회 또는 저널명 (Conference or Journal Name)**: Chemical Science
- **제출일 또는 발행일 (Submission or Publication Date)**: 2024-04-22
- **키워드 (Keywords)**: 고분자 설계, 머신러닝, SHAP 분석, 베이지안 최적화, pDNA 전달, CRISPR RNP 전달, 구조-활성 관계
- **초록 (Abstract)**:     본 연구는 길이, 이원 조성, pK_av, 소수성(clog P)을 체계적으로 변화시킨 클릭 가능한 고분자 라이브러리의 손쉬운 합성을 제시하여 세포 내 pDNA 및 CRISPR-Cas9 리보핵단백질(RNP) 전달 성능을 최적화한다. 물리화학적 특성 분석과 머신러닝을 결합하여 조합 설계 공간 내에서 정량적 구조-특성 관계를 해석한다. 설명 가능한 머신러닝을 432개 제형에 적용하여, 낮은 고분자 pK_a와 높은 벤즈이미다졸 에탄싸이올(BET) 비율이 pDNA 전달을 향상시키는 반면, 고분자 길이와 캡타민(captamine) 양이온 정체성은 RNP 전달을 개선한다는 예상치 못한 핵산 전달체의 상이한 설계 파라미터를 최초로 밝혀냈다. 552개 제형 비율에 대한 폐쇄 루프 베이지안 최적화는 시험관 내 성능을 더욱 향상시켰다. 상위 3개 고분자는 생체 내에서 20일 이상 더 높은 신호와 안정적인 유전자 발현을 보였으며, 대조군보다 1.7배 향상된 성능을 나타냈다. 합성, 특성 분석, 머신러닝 분석의 결합은 차세대 핵산 의약품 전달체 개발을 가속화하는 강력한 도구를 제공한다.
- **주요 연구 내용 (Main Research Content/Methodology)**:     -
  **클릭 화학 기반 고분자 라이브러리 합성**: RAFT 중합과 티올-엔(thiol-ene) 클릭 화학을 이용해 길이(3종), 양이온(4종), 조성비가 체계적으로 조절된 36종의 양이온성 고분자 라이브러리를 합성하여 다양한 pK_a 및 소수성(clogP)을 구현했다.
  - **SHAP(SHapley Additive exPlanations) 분석**: 머신러닝 기법인 SHAP 분석을 사용하여 고분자의 물리화학적 특성(길이, 양이온 종류, 소수성, pK_a 등)이 pDNA 및 CRISPR RNP 전달 효율과 세포 생존율에 미치는 영향을 정량적으로 분석하고 핵심적인 구조-활성 관계를 규명했다.
  - **베이지안 최적화(Bayesian Optimization, BO)**: 5,790가지가 넘는 방대한 제형 조합 공간을 효율적으로 탐색하기 위해 베이지안 최적화 모델을 사용했다. 3라운드에 걸친 반복 실험을 통해 최소한의 샘플링으로 pDNA와 RNP 전달을 위한 최적의 고분자 및 제형 비율(N/P ratio)을 예측하고 식별했다.
  - **생체 내(In vivo) 전달 성능 평가**: 머신러닝 모델을 통해 예측된 상위 3개 고분자 제형을 생쥐 모델에 정맥 주사하여 pDNA 전달 후 20일간 유전자 발현의 효율성과 지속성을 평가했다.
- **주요 결과 및 결론 (Key Findings and Conclusion)**:     -
  **핵산 종류에 따른 상이한 최적 설계 변수 발견**: pDNA와 RNP 전달에 효과적인 고분자의 화학적 특성이 다르다는 것을 최초로 규명했다.
  - **pDNA 전달 최적화 요인**: 낮은 고분자 pK_a와 높은 소수성 작용기(BET) 함량이 pDNA 전달 효율을 높이는 핵심 요인으로 작용했다. 이는 완충 능력(buffering capacity)을 높여 엔도좀 탈출을 촉진하기 때문으로 분석된다.
  - **RNP 전달 최적화 요인**: 긴 고분자 사슬(Lg)과 특정 양이온(Captamine, Cap)의 존재가 RNP 전달에 더 큰 영향을 미쳤으며, pDNA와 달리 BET 함량과는 음의 상관관계를 보였다.
  - **생체 내(In vivo) 효능 입증**: 베이지안 최적화를 통해 선별된 상위 고분자들은 대조군(JetPEI) 및 pDNA 단독 투여군에 비해 유의미하게 더 높고 안정적인 유전자 발현을 20일 이상 유지했으며, 최대 1.7배 향상된 발현 지속성을 보였다.
- **기여점 (Contributions)**:     -
  **데이터 기반 고분자 설계 플랫폼 제시**: 신속한 고분자 합성과 머신러닝(SHAP, BO) 분석을 결합하여, 방대한 화학적 공간에서 특정 핵산 약물에 최적화된 전달체를 효율적으로 설계하고 예측하는 데이터 기반 플랫폼을 구축했다.
  - **설명 가능한 AI를 통한 통찰력 제공**: SHAP 분석을 통해 복잡한 다변수 시스템에서 어떤 물리화학적 특성이 핵산 전달 성능에 결정적인 영향을 미치는지 정량적으로 설명함으로써, 합리적인 분자 설계에 대한 깊은 통찰력을 제공했다.
  - **차세대 핵산 치료제 개발 가속화**: 본 연구의 접근법은 전임상 단계에서 수많은 후보 물질을 스크리닝하는 시간과 비용을 크게 절감시켜, 차세대 핵산 치료제 전달 시스템의 개발을 가속화할 수 있는 강력한 방법론을 제시했다.
- **DOI (Digital Object Identifier)**: 10.1039/d3sc06920f
- **기타 식별 가능한 정보**:     - **연구 분야**: 재료 과학, 약물 전달 시스템, 머신러닝     - **대상**: pDNA 및 CRISPR RNP 전달용 양이온성 고분자     -
  **데이터셋**: 36종의 고분자를 기반으로 한 552개의 제형에 대한 실험 데이터

## 요약

### 서론 (Introduction)

핵산은 중요한 치료제이지만, 임상 적용에 있어 효율적인 전달이 여전히 큰 장벽으로 남아있다. 바이러스성 전달체는 제한된 탑재 용량, 높은 생산 비용, 면역원성 등의 문제를 가지고 있다. 이에 대한 대안으로, 비바이러스성 전달체, 특히 고분자는 화학적 변형이 쉽고 저비용으로 대량 생산이 가능하다는 장점 덕분에 무한한 잠재력을 지닌다.

하지만 고분자 설계에 있어 탐색해야 할 화학적 공간이 매우 방대하여 최적의 구조를 경험적으로 찾는 것은 비효율적이다. 이러한 한계를 극복하기 위해 최근 머신러닝 기법이 데이터 분석과 예측에 활용되고 있다. 이 연구는 신속한 고분자 합성법과 머신러닝 워크플로우를 결합하여, 플라스미드 DNA(pDNA)와 CRISPR-Cas9 리보핵단백질(RNP)이라는 각기 다른 핵산 탑재체에 최적화된 전달체를 설계하는 것을 목표로 한다. 구체적으로, SHAP(SHapley Additive exPlanations) 분석을 통해 구조-활성 관계를 규명하고, 베이지안 최적화(Bayesian Optimization)를 통해 최적의 제형을 예측하고자 한다.

### 본론 (Main Content)

#### 고분자 라이브러리 합성 및 특성 분석

연구팀은 RAFT 중합과 티올-엔(thiol-ene) 클릭 화학을 이용하여 체계적인 라이브러리를 구축했다. 세 가지 다른 길이(Short, Medium, Long)의 고분자 골격을 기반으로, 소수성을 부여하는 벤즈이미다졸 에탄싸이올(BET)과 추가적인 양이온(Cys, Cap, DiE)의 조성비를 조절하여 총 36종의 고분자를 합성했다. 이 라이브러리는 넓은 범위의

pK_a(산 해리 상수)와 clog P(소수성 지표) 값을 포괄하도록 설계되어, 물리화학적 특성이 핵산 전달에 미치는 영향을 체계적으로 분석할 수 있는 기반을 마련했다.

#### SHAP 분석을 통한 구조-활성 관계 규명

수집된 실험 데이터를 기반으로 SHAP 머신러닝 분석을 수행하여, 각 고분자의 특성이 pDNA와 RNP 전달 효율에 미치는 영향을 정량화했다. 분석 결과, 두 핵산에 대한 최적의 설계 전략이 현저히 다르다는 점이 밝혀졌다.

**pDNA 전달**의 경우, 고분자의 **낮은 pK_a**와 **높은 BET(소수성) 함량**이 유전자 발현을 촉진하는 가장 중요한 요인이었다. 이는 고분자가 엔도좀 내에서 양성자화되어 '양성자 스펀지 효과'를 통해 엔도좀 탈출을 돕기 때문으로 해석된다.

반면,

**RNP 전달**에서는 **긴 고분자 길이(Lg)**와 **캡타민(Cap) 양이온**의 존재가 더 긍정적인 영향을 미쳤다. 흥미롭게도, pDNA와 달리 BET 함량 증가는 RNP 전달 효율과 음의 상관관계를 보였는데, 이는 BET가 DNA와는 달리 RNP와는 효과적으로 상호작용하지 않음을 시사한다. 이처럼 설명 가능한 AI는 복잡한 생물학적 성능에 대한 핵심 구동 요인을 명확히 밝혀주었다.

#### 베이지안 최적화를 통한 제형 최적화

연구팀은 5,790개가 넘는 방대한 제형(고분자 종류 및 N/P 비율) 조합 공간을 효율적으로 탐색하기 위해 베이지안 최적화(BO)를 사용했다. BO 모델은 초기 스크리닝 데이터를 학습하여 다음 라운드에서 실험할 가장 유망한 제형 후보군을 예측한다. 단 3번의 최적화 라운드를 통해 전체 설계 공간의 10% 미만을 샘플링하면서도 pDNA와 RNP 각각에 대해 최상의 성능을 보이는 제형을 성공적으로 식별했다. 이 과정은 실험에 드는 시간과 비용을 크게 줄이면서도 데이터 기반의 합리적인 의사결정을 가능하게 했다.

#### In Vivo pDNA 전달 성능 검증

머신러닝 모델이 예측한 pDNA 전달 상위 3개 고분자(Sh_DiE_40, Sh_Cap_40, Md_Cys_40)를 대상으로 생쥐 모델에서 성능을 검증했다. 하이드로다이나믹 정맥 주사를 통해 고분자-pDNA 복합체를 투여한 결과, 세 가지 고분자 모두 상용 대조군인 JetPEI보다 월등히 뛰어나고 안정적인 유전자 발현을 보였다. 특히 최우수 성능을 보인

**Sh_DiE_40**은 20일 이상 높은 발현 수준을 유지했으며, 발현 감소율 또한 대조군보다 1.6배 낮아 장기적인 효능을 입증했다. 모든 실험군에서 안정적인 체중이 유지되어 제형의 높은 생체 적합성을 확인했다.

### 결론 (Conclusion)

본 연구는 신속하고 체계적인 고분자 합성과 SHAP 분석 및 베이지안 최적화와 같은 머신러닝 도구를 성공적으로 결합한 데이터 기반 재료 발견 플랫폼을 제시했다. 이 접근법을 통해 pDNA와 CRISPR RNP라는 서로 다른 핵산 탑재체의 효율적인 전달을 위해서는 각각 다른 고분자 설계 전략이 필요하다는 중요한 과학적 통찰을 얻었다. 구체적으로 pDNA는 낮은

pK_a와 높은 소수성이, RNP는 긴 사슬 길이와 특정 양이온이 핵심적인 역할을 했다.

머신러닝을 통해 최적화된 고분자는 생체 내 실험에서도 뛰어난 성능을 입증하여, 본 연구에서 제시한 워크플로우의 실효성을 증명했다. 이러한 데이터 기반의 합리적인 설계 및 최적화 방법론은 방대한 후보 물질 탐색 과정을 가속화하여, 차세대 핵산 치료제 개발을 위한 강력하고 효율적인 도구가 될 것이다.
