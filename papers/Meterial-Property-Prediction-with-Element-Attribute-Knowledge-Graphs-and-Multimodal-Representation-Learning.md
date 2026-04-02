---
title: Material Property Prediction with Element Attribute Knowledge Graphs and Multimodal Representation Learning
date: '2024-11-13'
description: 원소 속성 지식 그래프와 결정 구조 특징을 통합하는 멀티모달 프레임워크 ESNet을 제안하여 결정질 재료의 물성 예측 정확도를 향상시킨 논문
tags: [Property Prediction, Knowledge Graph, Element Properties, Multimodal Representation, Machine Learning]
authors:
- name: Chao Huang
- name: Chunyan Chen
- name: Ling Shil
- name: Chen Chen
---

## 논문 정보

- **제목**: Material Property Prediction with Element Attribute Knowledge Graphs and Multimodal Representation Learning
- **저자**: Chao Huang (Institute of Computing Technology, Chinese Academy of Science; Ningbo Institute of Information Technology Application, Chinese Academy of Sciences), Chunyan Chen (Institute of Computing Technology, Chinese Academy of Science), Ling Shil (Institute of Computing Technology, Chinese Academy of Science), Chen Chen (Ningbo Institute of Information Technology Application, Chinese Academy of Sciences)
- **학회/저널**: arXiv
- **발행일**: 2024-11-13
- **DOI**: 제공되지 않음
- **주요 연구 내용**: 기존 결정질 재료 물성 예측 모델들이 원소의 화학적, 물리적 특성을 간과하는 한계를 해결하고자 함. 원소의 속성(원자 반경, 전기음성도 등)을 체계화한 지식 그래프를 구축하고, 이를 임베딩하여 원소 속성 특징을 추출함. 이 특징을 결정 구조 그래프에서 추출한 특징과 결합하는 멀티모달 융합 프레임워크 'ESNet'을 제안함.
- **주요 결과 및 결론**: Materials Project 벤치마크 데이터셋을 이용한 실험에서, ESNet은 밴드갭 예측에서 기존 SOTA 모델들을 능가하는 성능(MAE 0.177 eV)을 달성했으며, 형성 에너지 예측에서는 대등한 결과를 보임. 이를 통해 구조적 정보에 화학적 사전 지식(원소 속성)을 통합하는 것이 물성 예측 정확도를 크게 향상시킬 수 있음을 입증함.
- **기여점**: 첫째, 재료 과학 분야에 활용 가능한 원소 속성 지식 그래프를 구축함. 둘째, 원소 속성 특징과 결정 구조 특징을 통합하는 새로운 멀티모달 융합 프레임워크 ESNet을 제안함. 셋째, 화학적 사전 지식의 통합이 재료 물성 예측, 특히 밴드갭 예측의 정확도를 크게 향상시킬 수 있음을 실험적으로 증명함.

<!--truncate-->

## 요약

### 초록

결정질 재료의 물성 예측에서 머신러닝은 중요한 도구가 되었지만, 기존 방법들은 주로 결정 구조의 기하학적 정보에만 의존하고 원소 고유의 화학적, 물리적 특성을 간과하는 경향이 있다. 이 한계를 극복하기 위해, 본 연구에서는 먼저 원소 속성 지식 그래프를 구축하고 임베딩 모델을 사용해 원소 속성을 인코딩한다. 그리고 원소 속성 특징과 결정 구조 특징을 통합하여 공동의 멀티모달 표현을 생성하는 융합 프레임워크 'ESNet'을 제안한다. 이를 통해 모델은 재료의 미세 구조와 화학적 특성을 모두 고려하여 더 포괄적인 관점에서 물성을 예측할 수 있다. Materials Project 데이터셋 실험 결과, 밴드갭 예측에서 SOTA 성능을, 형성 에너지 예측에서 기존 모델과 대등한 성능을 달성했다.

### 서론

재료 물성 예측은 신소재 발견과 안정성 평가에 필수적이지만, DFT와 같은 양자역학 기반 계산은 비용과 시간이 많이 소요된다. 이 때문에 머신러닝, 특히 GNN을 활용한 연구가 활발히 진행되어 왔으나, 대부분의 모델은 결정의 기하학적 구조에만 초점을 맞췄다. 이러한 데이터 기반 접근법은 화학적 사전 지식이 부족하여, 다양한 원소로 구성된 복잡한 재료 시스템에서 예측 정확도가 떨어지는 한계가 있다. 본 연구는 원소 속성과 결정 구조를 함께 학습하는 멀티모달 프레임워크 ESNet을 제안하여 이 문제를 해결하고자 한다.

### 배경

- **결정 구조**: 재료의 결정 구조는 특정 격자 행렬에 따라 3차원 공간에서 주기적으로 반복되는 단위 셀과 그 안의 원자들로 구성된다. 이 주기성과 원자 간 상호작용이 재료의 물리적, 화학적 특성을 결정한다. 수학적으로는 $M=(A, P, L)$로 표현되며, 여기서 A는 원자, P는 원자의 3차원 좌표, L은 격자 행렬을 의미한다.
- **지식 그래프**: 지식 그래프는 현실 세계의 개체(entity)와 그 관계를 노드와 엣지로 표현하는 의미론적 네트워크이다. 재료 과학 분야에서는 아직 초기 단계이지만, MatKG, NanoMine 등 특정 도메인의 지식 그래프 구축 연구가 진행되고 있다. 원소 수준의 지식 그래프를 활용하면 원자 간의 미시적 연관성을 탐색하는 데 중요한 역할을 할 수 있다.

### 모델 아키텍처 / 방법론
![Figure 1](img/Pasted%20image%2020250923154234.png)
- **핵심 구조/방법**: ESNet은 논문의 Figure 1에 제시된 바와 같이 세 가지 주요 모듈로 구성된다.
  1.  **원소 KG 인코더 ($M(E)$)**: 원소 속성 특징($H_e$)을 추출한다.
  2.  **결정 그래프 인코더 ($M(G)$)**: 결정 구조 특징($H_g$)을 추출한다.
  3.  **멀티모달 융합 인코더 ($M(F)$)**: 두 특징을 결합하여 최종 예측을 위한 표현($H_f$)을 생성한다.
![Figure 3](img/Pasted%20image%2020250923154306.png)
![Figure 4](img/Pasted%20image%2020250923154328.png)
- **주요 구성 요소**:
  - **원소 지식 그래프 인코더**: 주기율표 데이터를 기반으로 (원소, 속성, 값) 형태의 삼중항(triple)을 만들어 원소 지식 그래프(ElementKG)를 구축한다(논문 Figure 3 참고). 연속적인 속성 값은 구간별로 나누어 이산화한다. OWL2Vec 기반의 임베딩 방식을 사용해 각 원소의 특징 벡터를 추출하고, 결정 구조 내 원소 비율에 따라 가중합하여 해당 결정의 최종 원소 임베딩 $H_e$를 생성한다.
  - **결정 그래프 인코더**: ComFormer 기반의 iComFormer를 사용하여 결정 구조로부터 노드와 엣지 특징을 추출한다(논문 Figure 4 참고). 기존 CGCNN의 92차원 원자 특징 벡터 인코딩 방식에 오류와 모호함이 있음을 발견하고, Mendeleev 라이브러리를 통해 검증된 속성만을 사용하여 70차원의 새로운 원자 특징 벡터를 설계한다. 이 수정된 벡터는 실험 결과 더 나은 예측 성능을 보인다.
  - **멀티모달 융합 인코더**: n개의 Transformer 레이어로 구성되며, 원소 속성 특징 $H_e$와 결정 구조 특징 $H_g$를 결합하여 최종적인 통합 표현 $H_f$를 생성한다.
- **수식**:
  - 두 특징 벡터의 융합은 가중치 계수 $\alpha$와 $\beta$를 사용하여 다음과 같이 표현된다:
    $$H_{f}=\alpha H_{e}+\beta H_{g}$$
- **알고리즘**: 입력된 지식 그래프와 결정 구조는 각각의 인코더를 통해 임베딩된다. 이 두 임베딩은 융합 인코더에서 결합된 후, 최종적으로 Feed Forward 네트워크를 거쳐 재료의 물성을 예측한다.

### 실험 결과
![Table 2](img/Pasted%20image%2020250923154558.png)
![Table 4](img/Pasted%20image%2020250923154620.png)

- **주요 데이터셋**: Materials Project (MP) 벤치마크 데이터셋을 사용했으며, 학습, 검증, 테스트를 위해 각각 60000, 5000, 4239개의 결정 데이터를 활용했다.
- **핵심 성능 지표**: 평가 지표로 평균 절대 오차(MAE)를 사용했다.
  - **밴드갭(Band Gap)**: **0.177 eV**의 MAE를 기록하여, iComFormer(0.193 eV), PotNet(0.204 eV) 등 기존 모델들보다 뛰어난 성능을 보였다.
  - **형성 에너지(Formation Energy)**: **20.05 meV/atom**의 MAE를 기록하여, iComFormer(18.26 meV/atom)와 유사한 수준의 성능을 달성했다.
- **비교 결과**: 논문의 Table 2에서 다른 모델과의 성능 비교를 확인할 수 있다. 특히 밴드갭 예측에서 ESNet의 성능 향상이 두드러졌다. 또한, Ablation 연구(Table 4)를 통해 원소 지식 그래프 인코더를 제거했을 때 밴드갭 예측 MAE가 0.177에서 0.182로 증가하는 것을 보여, 해당 모듈의 중요성을 입증했다.

### 결론

본 연구는 지식 그래프 기술과 머신러닝 모델을 통합하여 재료 물성을 예측하는 혁신적인 프레임워크 ESNet을 제안했다. ESNet은 구조적 정보와 화학적 정보를 동시에 활용하여 기존 데이터 기반 모델의 한계를 극복했으며, 특히 밴드갭 예측에서 정확도를 크게 향상시킴을 입증했다. 향후 연구로는 다양한 데이터셋에 대한 교차 검증을 통해 모델의 일반화 성능을 평가하고, 전단 계수 및 부피 계수와 같은 다른 물성 예측으로 확장할 계획이라고 한다.
