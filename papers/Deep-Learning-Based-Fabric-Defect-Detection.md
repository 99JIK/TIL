---
title: "Deep Learning Based Fabric Defect Detection"
date: "2024-03-05"
description: "딥러닝 모델인 ResNet과 VGG-16을 사용하여 직물 결함을 자동으로 감지하고 분류하는 연구"
keywords:
  [
    "Deep Learning",
    "Computer Vision",
    "ResNet",
    "VGG-16",
    "Fabric Defect Detection",
    "Machine Learning",
    "Transfer Learning",
    "Quality Control",
    "Automation",
    "Image Classification",
    "DYETEC PROJ 2",
  ]
tags:
  [
    "Deep Learning",
    "Computer Vision",
    "ResNet",
    "VGG-16",
    "Fabric Defect Detection",
    "Machine Learning",
    "Transfer Learning",
    "Quality Control",
    "Automation",
    "Image Classification",
    "DYETEC PROJ 2",
  ]
authors: ["syeda_rabia_arshad", "muhammad_khuram_shahzad"]
---

# 딥러닝 기반 직물 결함 검출

## 논문 정보

- **제목 (Title)**: 딥러닝 기반 직물 결함 검출 (Deep Learning Based Fabric Defect Detection)
- **저자 (Authors) 및 소속 (Affiliations)**:
  - Syeda Rabia Arshad (National University of Sciences and Technology, Islamabad, Pakistan)
  - Muhammad Khuram Shahzad (National University of Sciences and Technology, Islamabad, Pakistan)
- **학회 또는 저널명 (Conference or Journal Name)**: Research Reports on Computer Science
- **제출일 또는 발행일 (Submission or Publication Date)**: 2024년 3월 5일 (Accepted)

<!-- truncate -->

- **초록 (Abstract)**:
  섬유 산업에서 품질 표준을 보장하는 것은 매우 중요한 단계이다. 결함이 있는 직물이 시장에 공급되는 것을 방지하기 위해 직물 제조 공정 중 결함을 자동으로 분류하는 것은 필수적이다. 기존의 수동 검사는 인적 오류와 시간 소모가 큰 문제를 안고 있다. 본 연구에서는 ResNet 및 VGG-16과 같은 고성능 딥러닝 모델을 적용하여 직물 결함 검출 문제를 해결하고자 했다. 패턴, 질감, 평직 등 다양한 이미지를 조합하여 어떤 직물에서든 결함을 더 잘 인식할 수 있도록 했다. 실험 결과, VGG-16 알고리즘은 73.91%의 정확도를, ResNet 알고리즘은 67.59%의 정확도를 보였다.
- **주요 연구 내용 (Main Research Content/Methodology)**:
  - **데이터셋 구성**: 3개의 공개 데이터셋(One-Shot Dataset, Kaggle, Tilda)에서 평직, 패턴, 질감 이미지를 결합하여 총 3630개의 이미지로 구성된 데이터셋을 구축했다.
  - **데이터 전처리**: 모든 이미지는 그레이스케일로 변환되고 $224\times224$ 픽셀로 크기가 조정되었다. 이는 계산량을 줄이고 모델 학습을 효율화하기 위함이다.
  - **결함 유형 분류**: 직물 결함을 수직 결함(vertical defects), 수평 결함(horizontal defects), 구멍(holes)의 세 가지 주요 유형으로 분류하여 모델을 학습시켰다.
  - **딥러닝 모델 적용**: 사전 훈련된(pre-trained) ResNet과 VGG-16 모델을 직물 결함 검출 문제에 적용하고 미세 조정(fine-tuning)하여 성능을 평가했다.
  - **성능 비교 평가**: 두 모델의 성능을 정확도(Accuracy), 정밀도(Precision), 재현율(Recall), F1 점수(F1 Score) 지표를 사용하여 비교 분석했다.
- **주요 결과 및 결론 (Key Findings and Conclusion)**:
  - **VGG-16의 우수성**: VGG-16 모델이 73.91%의 정확도를 달성하여 ResNet 모델(67.59%)보다 더 높은 성능을 기록했다.
  - **전이 학습의 효과**: VGG-16은 전이 학습(transfer learning)을 통해 사전 훈련된 가중치를 효과적으로 재사용하여 더 적은 파라미터를 학습하면서도 높은 정확도를 달성할 수 있었다.
  - **자동화 시스템의 가능성**: 딥러닝 기반의 자동화된 결함 검출 시스템은 기존 수동 검사의 인적 오류와 비효율성을 극복할 수 있는 효과적인 대안임을 입증했다.
  - **모델의 일반화**: 다양한 종류(평직, 패턴, 질감)의 직물 이미지로 학습하여 특정 유형의 직물에 국한되지 않는 일반화된 결함 검출 능력을 확보했다.
- **기여점 (Contributions)**:
  - ResNet과 VGG-16이라는 두 고성능 딥러닝 모델을 직물 결함 검출 분야에 적용하고 성능을 직접적으로 비교 분석했다.
  - 다양한 소스의 데이터셋을 통합하여 모델이 특정 패턴이나 질감에 과적합되지 않고, 다양한 직물에 대해 강건한(robust) 성능을 보이도록 했다.
  - 단순 결함 유무 판별을 넘어 결함을 수직, 수평, 구멍의 세 가지 유형으로 구체적으로 분류하는 시스템을 제안하여 품질 관리의 실용성을 높였다.
- **DOI (Digital Object Identifier)**: https://doi.org/10.37256/rrcs.3120244156
- **기타 식별 가능한 정보**:
  - **연구 분야**: 컴퓨터 비전, 딥러닝, 자동화된 품질 관리
  - **대상**: 직물 결함 (수직, 수평, 구멍)
  - **데이터셋**: One-Shot Dataset for Fabric Detection, Kaggle Fabric Defect Detection dataset, Tilda Textile Texture Database

## 요약

### 서론 (Introduction)

섬유 산업에서 품질 관리는 제품의 가치를 결정하는 핵심 요소이다. 기존의 직물 결함 검사는 작업자가 육안으로 수행하여 인적 오류가 발생하기 쉽고 시간이 많이 소요되는 단점이 있었다. 이러한 문제를 해결하기 위해, 이 연구는 딥러닝 기술을 활용하여 직물 결함을 자동으로 감지하고 분류하는 시스템을 제안했다. 특히, 고성능 이미지 분류 모델로 알려진 ResNet과 VGG-16을 사용하여 결함을 '수직 결함', '수평 결함', '구멍'의 세 가지 유형으로 분류하는 것을 목표로 했다.

### 본론 (Main Content)

연구를 위해 평직, 패턴, 질감 등 다양한 종류의 직물 이미지를 포함하는 3개의 공개 데이터셋에서 총 3630개의 이미지를 수집했다. 모든 이미지는 계산 효율성을 위해 $224\times224$ 픽셀 크기의 그레이스케일로 변환하는 전처리 과정을 거쳤다.

두 가지 딥러닝 모델을 사용하여 실험을 진행했다.

1. **ResNet**: 잔차 연결(residual connection) 구조를 통해 깊은 네트워크에서도 안정적인 학습이 가능한 모델이다. 사전 훈련된 ResNet 모델을 사용하여 결함 분류를 수행했다.

2. **VGG-16**: $3\times3$ 크기의 작은 컨볼루션 필터를 반복적으로 쌓아 깊은 네트워크를 구성한 모델이다. 이 연구에서는 전이 학습(transfer learning) 기법을 적용하여, 대규모 이미지 데이터셋으로 미리 학습된 VGG-16의 가중치를 가져와 직물 결함 데이터에 맞게 미세 조정했다.

실험 결과, VGG-16 모델이 73.91%의 정확도를 달성하여 67.59%의 정확도를 보인 ResNet 모델보다 우수한 성능을 나타냈다. 정밀도(Precision), 재현율(Recall), F1 점수(F1 Score)와 같은 다른 평가 지표에서도 VGG-16이 월등히 높은 점수를 기록했다. 이는 전이 학습을 통해 VGG-16이 더 효율적으로 이미지의 특징을 학습하고, 적은 수의 파라미터만으로도 효과적인 분류가 가능했기 때문으로 분석되었다.

### 결론 (Conclusion)

본 연구는 딥러닝 모델, 특히 VGG-16이 직물 결함을 자동으로 감지하고 분류하는 작업에 매우 효과적임을 성공적으로 입증했다. 이 시스템은 섬유 산업의 품질 관리 공정을 자동화하여 생산성과 정확성을 높이는 데 기여할 수 있다. 연구팀은 향후 과제로 실시간 동영상 데이터를 이용한 결함 검출 시스템을 개발하고, 하나의 이미지에서 여러 유형의 결함을 동시에 탐지하는 방향으로 연구를 확장할 계획이라고 밝혔다.

---

**📝 안내**: 이 문서는 DYETEC Project 2를 기획하기 위해 읽은 논문입니다.