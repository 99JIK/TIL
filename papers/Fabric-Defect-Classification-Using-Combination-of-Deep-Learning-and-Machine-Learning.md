---
title: "Fabric Defect Classification Using Combination of Deep Learning and Machine Learning"
date: "2021-08-12"
description: "딥러닝의 특징 추출과 SVM의 빠른 분류 속도를 결합하여 직물 결함 분류 시스템의 효율성을 높이는 연구"
keywords:
  [
    "Fabric Defect",
    "Defect Classification",
    "Deep Learning",
    "Machine Learning",
    "Convolutional Neural Network",
    "Support Vector Machine",
    "ResNet",
    "GoogLeNet",
    "Image Processing",
    "Hybrid Model",
    "Feature Extraction",
    "Computer Vision",
    "DYETEC PROJ 2",
  ]
tags:
  [
    "Fabric Defect",
    "Defect Classification",
    "Deep Learning",
    "Machine Learning",
    "Convolutional Neural Network",
    "Support Vector Machine",
    "ResNet",
    "GoogLeNet",
    "Image Processing",
    "Hybrid Model",
    "Feature Extraction",
    "Computer Vision",
    "DYETEC PROJ 2",
  ]
authors: ["fatma_gunseli_yasar_cikla", "semih_utku", "hakan_ozdemir"]
---

# 딥러닝과 머신러닝의 조합을 이용한 직물 결함 분류

## 논문 정보

- **제목 (Title)**: 딥러닝과 머신러닝의 조합을 이용한 직물 결함 분류 (Fabric Defect Classification Using Combination of Deep Learning and Machine Learning)
- **저자 (Authors) 및 소속 (Affiliations)**:
  - Fatma Günseli YAŞAR ÇIKLAÇANDIR (İzmir Katip Çelebi University, Turkey)
  - Semih UTKU (Dokuz Eylul University, Turkey)
  - Hakan ÖZDEMİR (Dokuz Eylul University, Turkey)
- **학회 또는 저널명 (Conference or Journal Name)**: Journal of Artificial Intelligence and Data Science (JAIDA)
- **제출일 또는 발행일 (Submission or Publication Date)**: 2021-08-12 (Accepted)

<!-- truncate -->

- **초록 (Abstract)**:
  본 연구는 직물의 결함을 자동으로 탐지하고 분류하는 지능형 시스템 개발을 목표로 한다. 딥러닝 방법은 다중 계층 구조로 인해 처리 시간이 길다는 단점이 있다. 이러한 문제를 해결하기 위해, 본 연구에서는 딥러닝(특징 추출)과 서포트 벡터 머신(SVM, 분류)을 결합한 새로운 접근법을 제안했다. 제안된 시스템의 성능을 정확도와 처리 시간 측면에서 다른 순수 딥러닝 알고리즘과 비교하여 효율성을 입증하고자 한다.
- **주요 연구 내용 (Main Research Content/Methodology)**:
  - **데이터셋 활용**: 공개적으로 접근 가능한 TILDA 데이터셋의 8개 그룹(패턴 및 비패턴 직물 이미지 포함)을 실험에 사용했다.
  - **이미지 전처리**: 딥러닝 모델(ResNet, GoogLeNet)의 입력 형식($224\times224\times3$)에 맞추기 위해, 원본 흑백 이미지를 리사이징하고 HSV 및 회색(gray) 컬러맵을 적용하여 3차원 RGB 이미지로 변환했다.
  - **하이브리드 모델 설계**: 특징 추출기로는 사전 훈련된 CNN 모델인 ResNet18과 GoogLeNet을 사용하고, 추출된 특징 벡터를 입력으로 받아 최종 분류는 SVM(Support Vector Machine) 분류기를 통해 수행하는 하이브리드 모델을 설계했다.
  - **성능 비교 평가**: 제안하는 하이브리드 모델(CNN+SVM)과 순수 딥러닝 모델(ResNet18, GoogLeNet)의 성능을 '정확도(accuracy)'와 '실행 시간(execution time)' 두 가지 지표를 기준으로 비교 분석했다.
- **주요 결과 및 결론 (Key Findings and Conclusion)**:
  - **정확도 성능**: 순수 ResNet18 모델이 가장 높은 분류 정확도(최대 87.5%)를 기록했으며, SVM과 결합된 ResNet18 모델(SVM & ResNet18)이 그 뒤를 이었다.
  - **속도 효율성**: CNN-SVM 결합 모델은 순수 딥러닝 모델보다 약 60배 빠른 처리 속도를 보여, 시간 효율성을 크게 개선했다.
  - **패턴의 영향**: 모든 모델은 패턴이 없는 직물(평균 정확도 75.29%)에서 패턴이 있는 직물(평균 64.19%)보다 더 높은 분류 성능을 보였다.
  - **결론**: 제안된 CNN-SVM 하이브리드 모델은 정확도에서 약간의 손실이 있지만 처리 시간을 획기적으로 단축시켜, 속도가 중요한 실제 산업 환경에서 딥러닝의 단점을 보완할 수 있는 효과적인 대안임을 확인했다.
- **기여점 (Contributions)**:
  - 딥러닝의 단점인 긴 처리 시간을 해결하기 위해 CNN(특징 추출)과 SVM(분류)을 결합한 하이브리드 접근법을 제안했다.
  - ResNet18, GoogLeNet 기반의 순수 딥러닝 모델과 CNN-SVM 하이브리드 모델의 성능을 동일한 데이터셋에서 정확도와 속도 측면으로 종합 비교 분석했다.
  - 패턴 유무에 따른 직물 결함 분류 성능 차이를 정량적으로 제시하여, 패턴 직물에 대한 별도의 전처리 과정의 필요성을 입증했다.
- **DOI (Digital Object Identifier)**: N/A
- **기타 식별 가능한 정보**:
  - **연구 분야**: 컴퓨터 비전, 딥러닝, 머신러닝
  - **연구 대상**: 직물 결함 자동 분류 시스템
  - **데이터셋**: TILDA Fabric Defects Dataset

## 요약

### 서론 (Introduction)

직물은 인간의 기본 필수품 중 하나이며, 온라인 쇼핑의 활성화로 섬유 산업은 계속해서 성장하고 있다. 높은 고객 만족도는 제품 판매와 직결되며, 이를 위해서는 직물의 품질 관리가 매우 중요하다. 직물 결함은 원자재, 기계, 또는 인적 요인 등 다양한 원인으로 발생하며, 재발 방지를 위해 원인을 식별하고 수정하는 것이 필수적이다.

전통적으로 사람에 의해 수행되던 직물 검사를 자동화하기 위한 많은 연구가 진행되었다. 본 연구는 딥러닝 기술을 활용하여 직물 결함을 자동으로 분류하는 시스템을 제안한다. 하지만 딥러닝은 많은 계층으로 인해 처리 시간이 길다는 단점이 존재한다. 이 문제를 해결하기 위해, 본 연구에서는 딥러닝의 강력한 특징 추출 능력과 서포트 벡터 머신(SVM)의 빠른 분류 속도를 결합한 하이브리드 모델을 개발하여 시간 효율성을 높이고자 했다.

### 본론 (Main Content)

#### 연구 방법론

본 연구는 딥러닝 모델을 특징 추출기로 사용하고, 머신러닝 분류기인 SVM을 결합하여 직물 결함을 분류했다.

1. **데이터셋 및 전처리**: 실험에는 TILDA 데이터셋의 공개된 8개 그룹을 사용했다. 이 데이터셋의 이미지는 $768\times512$ 크기의 흑백(1차원) 이미지다. 연구에 사용된 ResNet, GoogLeNet 모델은 $224\times224\times3$ 크기의 컬러(3차원) 이미지를 입력으로 요구하기 때문에, 모든 이미지를 해당 크기로 조정하고 HSV 및 회색 컬러맵을 적용하여 3차원 데이터로 변환했다.

2. **특징 추출 및 분류**: 사전 훈련된 CNN 모델인 ResNet18과 GoogLeNet을 특징 추출기로 활용했다. 이 모델들에서 추출된 특징 벡터를 SVM 분류기에 입력하여 최종적으로 직물의 결함 유무와 유형을 분류했다.

#### 실험 결과

성능 평가는 정확도와 실행 시간 두 가지 측면에서 이루어졌다.

- **정확도**: 전반적으로 순수 ResNet18 모델이 가장 높은 분류 정확도(HSV 맵 기준 평균 76.98%)를 보였다. SVM과 결합한 ResNet18 모델은 71.46%로 그 뒤를 이었다.

- **실행 시간**: 순수 딥러닝 모델(ResNet18, GoogLeNet)은 분류 작업을 완료하는 데 평균 약 28-29분이 소요된 반면, SVM과 결합한 하이브리드 모델은 약 30초 내외로 결과를 도출했다. 이는 제안 모델이 약 60배 빠른 처리 속도를 가짐을 의미한다.

- **패턴 유무에 따른 성능**: 모든 모델은 패턴이 없는 직물(평균 정확도 75.29%)에서 패턴이 있는 직물(평균 64.19%)보다 높은 성능을 보였다. 이는 복잡한 패턴이 결함 분류를 더 어렵게 만든다는 것을 시사하며, 특히 혼합 패턴을 가진 그룹(c4-r1, c4-r3)에서 성능 저하가 두드러졌다.

### 결론 (Conclusion)

본 연구는 CNN의 특징 추출 능력과 SVM의 빠른 분류 속도를 결합하여, 딥러닝 기반 직물 결함 분류 시스템의 고질적인 문제인 긴 처리 시간을 해결하고자 했다. 실험 결과, 제안된 하이브리드 모델은 순수 딥러닝 모델에 비해 정확도는 소폭 하락했지만, 실행 시간을 약 60배 단축시키는 뛰어난 효율성을 보였다. 이는 속도가 중요한 실제 산업 현장에서 딥러닝 기술의 적용 가능성을 높이는 의미 있는 결과이다.

다만, 1차원 흑백 이미지를 3차원으로 변환하는 과정에서 발생한 정보 손실로 인해 문헌의 다른 연구들보다 전반적인 정확도가 낮게 나타나는 한계가 있었다. 향후 연구에서는 전처리 단계를 개선하여 정보 손실을 최소화하고, 특히 패턴 직물에 대한 분류 성능을 높이기 위한 추가적인 기법을 적용할 필요가 있다.

---

**📝 안내**: 이 문서는 DYETEC Project 2를 기획하기 위해 읽은 논문입니다.