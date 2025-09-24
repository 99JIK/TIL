---
title: "Fabric Defect Classification Using Combination of Deep Learning and Machine Learning"
date: "2021-08-12"
description: "딥러닝 모델의 특징 추출 기능과 SVM 분류기의 빠른 속도를 결합하여 원단 불량 분류의 정확도와 시간 효율성을 비교 분석한 논문"
keywords:
  [
    "Fabric Defect",
    "Deep Learning",
    "Machine Learning",
    "Support Vector Machine",
    "Convolutional Neural Networks",
  ]
tags:
  [
    "Fabric Defect",
    "Deep Learning",
    "Machine Learning",
    "Support Vector Machine",
    "Convolutional Neural Networks",
  ]
authors: ["Semih UTKU", "Hakan ÖZDEMİR"]
---

## 논문 정보

- **제목**: Fabric Defect Classification Using Combination of Deep Learning and Machine Learning
- **저자**: Fatma Günseli YAŞAR ÇIKLAÇANDIR (İzmir Katip Çelebi University), Semih UTKU (Dokuz Eylul University), Hakan ÖZDEMİR (Dokuz Eylul University)
- **학회/저널**: Journal of Artificial Intelligence and Data Science (JAIDA)
- **발행일**: 2021-08-12
- **DOI**: 제공되지 않음
- **주요 연구 내용**: 딥러닝 모델(ResNet18, GoogLeNet)을 이용한 원단 불량 분류와, 이 모델들에서 특징만 추출하고 분류는 SVM(Support Vector Machines)으로 수행하는 하이브리드 방식의 성능을 비교 분석함. 딥러닝의 단점인 긴 처리 시간을 개선하는 것을 목표로 함.
- **주요 결과 및 결론**: 순수 ResNet18 모델이 가장 높은 분류 정확도(최대 87.5%)를 보였으나, ResNet18로 특징을 추출하고 SVM으로 분류하는 하이브리드 모델은 정확도 저하가 크지 않으면서도 분류 시간을 약 60배 단축시키는 결과를 보임.
- **기여점**: 딥러닝의 높은 특징 추출 능력과 머신러닝 분류기의 속도 이점을 결합하여, 원단 불량 검출 시스템에서 시간 효율성과 정확성 간의 균형을 맞춘 실용적인 접근법을 제시함. 이를 통해 속도가 중요한 실제 생산 환경에 적용 가능한 지능형 시스템의 가능성을 보임.
<!--truncate-->

## 요약

### 초록

본 연구는 공장 생산 단계 등 다양한 분야에서 활용되는 자동화 시스템의 일환으로, 원단에서 발생하는 결함을 자동으로 탐지하고 분류하는 지능형 시스템 개발을 목표로 한다. 딥러닝은 다층 구조로 인해 처리 시간이 길다는 단점이 있는데, 이를 해결하기 위해 딥러닝(CNN)을 특징 추출에만 사용하고 분류는 SVM(Support Vector Machine)으로 수행하는 결합 모델을 제안한다. 이 시스템의 성능을 다른 딥러닝 알고리즘과 시간 및 정확도 측면에서 비교하여 효율성을 입증했다.

### 서론

섬유 산업에서 원단의 품질은 고객 만족도와 직결되며, 이는 곧 기업의 수익성에 영향을 미친다. 원단 결함은 생산 과정에서 원자재, 기계, 또는 인적 요인으로 인해 발생하며, 원인 파악과 재발 방지가 중요하다. 기존에는 사람이 직접 원단 결함을 검사했으나, 이를 자동화하기 위한 많은 연구가 진행되었다. 본 연구는 결함을 단순히 탐지하는 것을 넘어, 그 종류까지 분류하여 문제 해결에 직접적인 도움을 주는 것을 목표로 한다.

### 모델 아키텍처 / 방법론

- **핵심 구조/방법**: 본 연구는 4가지 접근법의 성능을 비교했다.

  1.  ResNet18 딥러닝 모델 단독 사용
  2.  GoogLeNet 딥러닝 모델 단독 사용
  3.  ResNet18 특징 추출 + SVM 분류
  4.  GoogLeNet 특징 추출 + SVM 분류
      핵심 아이디어는 CNN 모델의 마지막 분류 계층을 제거하고, 그 이전 계층에서 추출된 특징 벡터를 SVM 분류기의 입력으로 사용하는 것이다.
      
![Figure 1](img/Pasted%20image%2020250924140341.png)
![Figure 2](img/Pasted%20image%2020250924140408.png)
- **데이터 전처리**: 연구에 사용된 Tilda 데이터셋의 이미지는 $768 \times 512$ 크기의 1채널(그레이스케일) 이미지이다(논문의 Figure 1 참조). 이를 딥러닝 모델의 입력 형식인 $224 \times 224 \times 3$ 크기의 3채널(RGB) 이미지로 변환해야 했다. 이를 위해 이미지를 리사이즈하고, HSV 및 회색(gray) 컬러맵을 적용하여 인위적으로 3채널로 변환했다(논문의 Figure 2 참조).

### 실험 결과

- **주요 데이터셋**: Tilda 데이터셋의 공개된 8개 그룹을 사용했다. 이 중 4개 그룹은 무늬가 없는 원단이고, 4개 그룹은 무늬가 있는 원단이다.
- **핵심 성능 지표**:
  - **정확도**: 전반적으로 ResNet18 모델이 가장 높은 정확도를 기록함 (HSV 컬러맵 기준 평균 76.98%), 그 뒤를 이어 `SVM & ResNet18` 조합이 준수한 성능을 보였다(평균 71.46%). 모든 모델은 무늬가 없는 원단(평균 75.29%)에서 무늬가 있는 원단(평균 64.19%)보다 높은 성능을 보였다.
  - **처리 시간**: 순수 딥러닝 모델(ResNet18, GoogLeNet)은 분류에 평균 27-29분이 소요된 반면, CNN+SVM 조합 모델은 약 30초 내외로 결과를 도출했다. 이는 약 60배 빠른 속도로, 시간 효율성을 극적으로 개선했음을 의미한다.

- **비교 결과**: `SVM & ResNet18` 조합은 순수 ResNet18에 비해 정확도가 약간 감소하나, 처리 시간을 압도적으로 단축시켜 속도와 성능 간의 현실적인 트레이드오프를 제공한다.

### 결론

본 연구는 딥러닝의 특징 추출 능력과 SVM의 빠른 분류 속도를 결합하여 원단 불량 검출의 시간적 비효율성을 성공적으로 개선했다. 순수 ResNet18이 가장 정확했지만, `SVM & ResNet18` 조합은 실시간 처리가 요구되는 산업 현장에 더 적합한 대안이 될 수 있음을 보였다. 특히 무늬가 있는 원단에서 성능이 저하되는 공통적인 문제가 발견되어, 향후에는 복잡한 패턴의 원단을 위한 특화된 전처리 과정의 연구가 필요함을 시사한다.
