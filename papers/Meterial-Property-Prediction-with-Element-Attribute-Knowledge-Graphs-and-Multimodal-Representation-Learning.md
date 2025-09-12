---
title: "Material Property Prediction with Element Attribute Knowledge Graphs and Multimodal Representation Learning"
date: "2024-11-13"
description: "원소 속성 지식 그래프와 결정 구조의 멀티모달 표현 학습을 결합하여 결정질 재료의 특성을 예측하는 ESNet 프레임워크에 대한 논문"
keywords:
  [
    "property prediction",
    "Knowledge graph",
    "element properties",
    "multimodal representation",
    "machine learning",
  ]
tags:
  [
    "property prediction",
    "Knowledge graph",
    "element properties",
    "multimodal representation",
    "machine learning",
  ]
authors: ["chao_huang", "chunyan_chen", "ling_shil", "chen_chen"]
---

# Material Property Prediction with Element Attribute Knowledge Graphs and Multimodal Representation Learning

## 논문 정보

- **제목 (Title)**: Material Property Prediction with Element Attribute Knowledge Graphs and Multimodal Representation Learning
- **저자 (Authors) 및 소속 (Affiliations)**:
  - Chao Huang (Institute of Computing Technology, Chinese Academy of Science, Beijing, China; Ningbo Institute of Information Technology Application, Chinese Academy of Sciences (CAS), Ningbo, China)
  - Chunyan Chen (Institute of Computing Technology, Chinese Academy of Science, Beijing, China; Ningbo Institute of Information Technology Application, Chinese Academy of Sciences (CAS), Ningbo, China)
  - Ling Shil (Institute of Computing Technology, Chinese Academy of Science, Beijing, China; Ningbo Institute of Information Technology Application, Chinese Academy of Sciences (CAS), Ningbo, China)
  - Chen Chen (Ningbo Institute of Information Technology Application, Chinese Academy of Sciences (CAS), Ningbo, China)
- **학회 또는 저널명 (Conference or Journal Name)**: arXiv
- **제출일 또는 발행일 (Submission or Publication Date)**: 2024-11-13
- **키워드 (Keywords)**: 특성 예측, 지식 그래프, 원소 속성, 다중모드 표현, 머신러닝
- **초록 (Abstract)**: 결정질 재료의 특성을 예측하는 데 머신러닝은 중요한 도구가 되었다. 그러나 기존 방법들은 주로 결정 구조의 다중 엣지 그래프를 구성하여 재료 정보를 표현하며, 원자 반경, 전기음성도, 녹는점 등 재료 성능에 큰 영향을 미치는 원소의 화학적, 물리적 특성을 간과하는 경우가 많다. 이 한계를 해결하기 위해, 본 연구에서는 먼저 원소 속성 지식 그래프를 구축하고 임베딩 모델을 사용하여 지식 그래프 내의 원소 속성을 인코딩했다. 나아가, 원소 속성 특징과 결정 구조 특징을 통합하여 공동의 다중모드 표현을 생성하는 멀티모달 융합 프레임워크인 ESNet을 제안한다. 이를 통해 모델이 재료의 미세 구조적 구성과 화학적 특성을 모두 고려할 수 있게 하여 결정질 재료의 성능을 예측하는 데 더 포괄적인 관점을 제공한다. Materials Project 벤치마크 데이터셋에서 수행된 실험 결과, 밴드갭 예측 과제에서 선도적인 성능을 보였으며, 형성 에너지 예측 과제에서는 기존 벤치마크와 동등한 결과를 달성했다.
- **주요 연구 내용 (Main Research Content/Methodology)**:
  - **원소 속성 지식 그래프 구축 및 인코딩**: 원소의 화학적, 물리적 속성(전기음성도, 원자 에너지 등)을 체계적으로 포착하는 지식 그래프를 구축하고, 임베딩 모델(OWL2Vec)을 통해 원소 특징을 인코딩한다.
  - **멀티모달 융합 프레임워크 'ESNet' 제안**: 원소 속성 지식 그래프 인코더, 결정 그래프 인코더, 그리고 두 특징을 결합하는 융합 인코더로 구성된 멀티모달 프레임워크를 제안한다.
  - **결정 구조 특징 추출**: 결정 구조 특징을 추출하기 위해 ComFormer 기반의 iComFormer를 그래프 인코더로 사용한다.
  - **원자 특징 벡터 재설계**: 기존 CGCNN의 92차원 원자 특징 벡터 인코딩 방식의 오류와 모호성을 해결하기 위해, Mendeleev 라이브러리를 통해 통계 분석을 거쳐 정보를 보완하고 70차원으로 재설계하여 예측 성능을 향상시켰다.
- **주요 결과 및 결론 (Key Findings and Conclusion)**:
  - **밴드갭 예측 성능 우수**: Materials Project 데이터셋에서 밴드갭 예측 과제의 평균 절대 오차(MAE)가 0.177 eV로, 기존 SOTA 모델(iComFormer, 0.193 eV)보다 뛰어난 성능을 보였다.
  - **형성 에너지 예측 성능**: 형성 에너지 예측 과제에서는 기존 벤치마크와 대등한 수준의 성능을 달성했다.
  - **원소 지식 그래프의 중요성 입증**: 원소 지식 그래프 인코더를 제거하는 Ablation study를 통해, 해당 모듈이 없을 때 밴드갭 예측 MAE가 0.177에서 0.182로 증가하여 모델 성능에 핵심적인 역할을 함을 확인했다.
- **기여점 (Contributions)**:
  - **화학적 사전 지식 통합**: 순수 데이터 기반 모델의 한계를 극복하기 위해, 원소의 물리적/화학적 속성이라는 화학적 사전 지식을 지식 그래프 형태로 모델에 통합하는 새로운 접근 방식을 제시했다.
  - **ESNet 프레임워크 개발**: 원소 속성과 결정 구조 정보를 효과적으로 융합하는 새로운 멀티모달 프레임워크 'ESNet'을 개발하여 재료 특성 예측의 정확도를 크게 향상시켰다.
  - **예측 정확도 향상**: 특히 밴드갭 예측에서 기존 모델들을 능가하는 성능을 보여줌으로써 제안된 방법론의 실효성을 입증했다.
- **DOI (Digital Object Identifier)**: N/A (arXiv preprint)
- **기타 식별 가능한 정보**:
  - **연구 분야**: 재료 과학, 머신러닝
  - **대상**: 결정질 재료
  - **데이터셋**: Materials Project

## 요약

### 서론 (Introduction)

재료의 특성을 정확하게 예측하는 것은 신소재 발견과 같은 재료 공학 응용 분야에서 매우 중요하다. 양자역학 기반의 계산 방법(예: DFT)은 정확하지만 계산 비용이 높고 시간이 오래 걸려 대규모 재료 시스템에 적용하기 어렵다. 이에 대한 대안으로 머신러닝 방법이 주목받고 있으며, 특히 결정 구조를 그래프 신경망(GNN)으로 모델링하여 재료 특성을 예측하는 연구가 활발히 진행되고 있다.

그러나 기존의 머신러닝 모델들은 대부분 데이터 기반으로 결정 구조의 기하학적, 위상적 정보에만 초점을 맞추고, 재료 성능에 큰 영향을 미치는 원소 고유의 화학적, 물리적 속성(예: 전기음성도, 원자 반경 등)이라는 중요한 사전 지식을 간과하는 한계가 있었다. 이러한 화학적 지식의 부재는 복잡한 재료 시스템에서 예측 정확도를 저하시키는 원인이 된다. 본 연구에서는 이러한 한계를 극복하고자 원소 속성 지식 그래프와 결정 구조 특징을 통합하는 멀티모달 융합 프레임워크 'ESNet'을 제안한다.

### 본론 (Main Content)

#### ESNet 프레임워크 개요

ESNet은 세 가지 주요 모듈로 구성된다: (1) 원소 속성 특징을 추출하는 **원소 지식 그래프(KG) 인코더**, (2) 결정 구조의 기하학적 특징을 추출하는 **결정 그래프 인코더**, 그리고 (3) 두 가지 특징을 결합하여 최종 예측을 위한 통합 표현을 생성하는 **융합 인코더**. 이 구조를 통해 모델은 재료의 미세 구조와 화학적 특성을 종합적으로 학습할 수 있다.

#### 원소 지식 그래프 인코더

주기율표에서 얻은 원소들의 속성(예: 밀도, 녹는점 등)을 기반으로 "`(엔티티, 관계, 엔티티)`" 형태의 삼중항(triplet)을 구성하여 원소 지식 그래프를 구축한다. 연속적인 속성 값들은 구간별로 나누어 이산적인 레이블로 변환된다. 그 후, OWL 온톨로지 임베딩에 특화된 OWL2Vec 프레임워크를 사용하여 지식 그래프의 구조적, 논리적 관계를 벡터로 인코딩한다. 특정 결정 구조에 대한 최종 원소 임베딩은 해당 구조를 구성하는 각 원소의 임베딩 벡터를 구조 내 원자 비율에 따라 가중 합하여 생성된다.

#### 결정 그래프 인코더

결정 구조의 특징을 추출하기 위해 iComFormer 모델을 사용한다. 이 과정에서 기존 연구(CGCNN)에서 사용하던 92차원의 원자 특징 벡터 인코딩 방식에 일부 원자 번호에 대한 인코딩 오류 및 특정 속성값의 불일치(예: 수소 원자의 전기음성도)와 같은 문제가 있음을 발견했다. 이 문제를 해결하기 위해, Mendeleev 라이브러리를 사용하여 Materials Project 데이터셋의 원자 정보를 통계적으로 분석하고, 정보가 완전한 속성들만 선택하여 70차원의 새로운 원자 특징 벡터를 설계했다. 실험 결과, 이 70차원 특징 벡터는 기존 92차원 벡터보다 더 나은 예측 성능을 보였다.

#### 다중 특징 융합 및 실험 결과

원소 KG 인코더에서 얻은 원소 속성 특징(H_e)과 결정 그래프 인코더에서 얻은 구조 특징(H_g)은 융합 인코더에서 가중 합(H_f=alphaH_e+betaH_g)을 통해 결합된다. 이 결합된 표현은 여러 개의 Transformer 레이어를 통과하며 최종적으로 재료의 특성을 예측하는 데 사용된다.

Materials Project 벤치마크 데이터셋을 이용한 실험에서 ESNet은 밴드갭 예측 과제에서 평균 절대 오차(MAE) 0.177 eV를 기록하여, iComFormer(0.193 eV), CrysMMNet(0.197 eV) 등 기존 최고 성능 모델들을 능가하는 우수한 결과를 보였다. 형성 에너지 예측에서는 벤치마크와 동등한 수준의 성능을 달성했다. 또한, 원소 KG 인코더를 제외하고 실험했을 때 밴드갭 예측 오차가 증가하는 것을 통해, 제안된 지식 그래프 기반 특징 추출의 중요성을 입증했다.

### 결론 (Conclusion)

본 연구는 지식 그래프 기술과 머신러닝 모델을 결합하여 재료 특성을 예측하는 혁신적인 ESNet 프레임워크를 제안했다. ESNet은 원소의 화학적 사전 지식과 결정 구조 정보를 동시에 활용함으로써, 기존 데이터 기반 모델들의 한계를 극복하고 특히 밴드갭 예측에서 정확도를 크게 향상시켰다. 이는 재료의 구조적 정보와 화학적 정보를 융합하는 하이브리드 접근 방식의 유효성을 입증한 것이다.

향후 연구로는 다양한 데이터셋에 대한 교차 검증을 통해 ESNet 모델의 일반화 성능과 강건성을 평가하고, 전단 탄성 계수 및 부피 탄성 계수와 같은 다른 재료 특성 예측으로 모델을 확장할 계획이다. 이 연구는 지식 그래프와 머신러닝을 성공적으로 통합하여 재료 과학자 및 엔지니어에게 유망하고 강력한 도구를 제공하는 중요한 돌파구를 마련했다.
