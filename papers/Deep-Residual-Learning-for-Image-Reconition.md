---
title: "Deep Residual Learning for Image Recognition"
date: "2015-12-10"
description: "신경망의 깊이가 깊어질수록 훈련이 어려워지는 degradation 문제를 해결하기 위해 잔차 학습(residual learning) 프레임워크를 제안한 논문"
keywords:
  [
    "Deep Learning",
    "Residual Learning",
    "Image Recognition",
    "Image Classification",
    "Object Detection",
    "Convolutional Neural Networks",
    "CNN",
    "ResNet",
    "Shortcut Connections",
    "Degradation Problem",
    "Machine Learning",
    "ImageNet",
    "COCO",
    "Computer Vision",
    "DYETEC PROJ 2",
    "Neural Networks",
  ]
tags:
  [
    "Deep Learning",
    "Residual Learning",
    "Image Recognition",
    "Image Classification",
    "Object Detection",
    "Convolutional Neural Networks",
    "CNN",
    "ResNet",
    "Shortcut Connections",
    "Degradation Problem",
    "Machine Learning",
    "ImageNet",
    "COCO",
    "DYETEC PROJ 2",
    "Computer Vision",
    "Neural Networks",
  ]
authors: ["kaiming_he", "xiangyu_zhang", "shaoqing_ren", "jian_sun"]
---

# 이미지 인식을 위한 심층 잔차 학습

## 논문 정보

- **제목 (Title)**: 이미지 인식을 위한 심층 잔차 학습 (Deep Residual Learning for Image Recognition)
- **저자 (Authors) 및 소속 (Affiliations)**:
  - Kaiming He (Microsoft Research)
  - Xiangyu Zhang (Microsoft Research)
  - Shaoqing Ren (Microsoft Research)
  - Jian Sun (Microsoft Research)
- **학회 또는 저널명 (Conference or Journal Name)**: arXiv (ILSVRC & COCO 2015 Competitions 제출)
- **제출일 또는 발행일 (Submission or Publication Date)**: 2015년 12월 10일

<!-- truncate -->

- **초록 (Abstract)**:
  더 깊은 신경망은 훈련하기가 더 어렵다. 본 논문에서는 이전에 사용되었던 것보다 훨씬 더 깊은 네트워크의 훈련을 용이하게 하는 잔차 학습 프레임워크(residual learning framework)를 제시한다. 우리는 계층을 참조되지 않은 함수를 학습하는 대신, 계층 입력에 대한 참조를 통해 잔차 함수를 학습하도록 명시적으로 재구성한다. 이러한 잔차 네트워크가 최적화하기 더 쉬우며, 깊이가 상당히 증가함에 따라 정확도를 얻을 수 있다는 포괄적인 경험적 증거를 제공한다. ImageNet 데이터셋에서 VGG 넷보다 8배 더 깊지만 복잡도는 더 낮은 최대 152개 계층의 깊이를 가진 잔차 네트워크를 평가했다. 이 잔차 넷의 앙상블은 ImageNet 테스트 세트에서 3.57%의 오류율을 달성하여 ILSVRC 2015 분류 과제에서 1위를 차지했다. 또한 100개 및 1000개 계층을 가진 CIFAR-10 데이터셋에 대한 분석도 제시한다. 표현의 깊이는 많은 시각 인식 작업에 있어 중심적인 중요성을 가진다. 우리의 극도로 깊은 표현 덕분에 COCO 객체 탐지 데이터셋에서 28%의 상대적 개선을 얻었다. 심층 잔차 넷은 ILSVRC & COCO 2015 대회의 제출 기반이 되었으며, ImageNet 탐지, ImageNet 지역화, COCO 탐지 및 COCO 분할 과제에서도 1위를 차지했다.
- **주요 연구 내용 (Main Research Content/Methodology)**:
  - **Degradation 문제 정의**: 네트워크의 깊이가 깊어질수록 과적합(overfitting) 때문이 아니라, 오히려 훈련 오류(training error) 자체가 높아져 정확도가 포화되고 급격히 저하되는 'degradation' 문제를 확인했다.
  - **잔차 학습(Residual Learning) 제안**: 네트워크 계층이 기본 매핑 `H(x)`를 직접 근사하는 대신, 잔차 함수 `F(x) := H(x) - x`를 학습하도록 재구성했다. 원래의 매핑은 `F(x) + x` 형태로 변환되어 최적화가 더 쉬워진다.
  - **Shortcut Connection을 통한 구현**: 잔차 학습을 피드포워드 신경망에서 'shortcut connection'을 통해 구현했다. 이 연결은 하나 이상의 계층을 건너뛰어 입력을 출력에 바로 더하는 항등 매핑(identity mapping) 역할을 한다.
  - **매우 깊은 네트워크 아키텍처(ResNet)**: VGGNet에 영감을 받아 34, 50, 101, 152 계층의 매우 깊은 잔차 네트워크(ResNet)를 설계했다. 특히 깊은 모델에서는 연산량을 줄이기 위해 `1x1`, `3x3`, `1x1` 컨볼루션으로 구성된 'bottleneck' 구조를 사용했다.
  - **대규모 데이터셋 검증**: ImageNet, CIFAR-10, COCO, PASCAL VOC와 같은 대규모 데이터셋을 사용하여 제안된 ResNet의 성능을 검증하고, 기존의 plain network와 비교하여 우수성을 입증했다.
- **주요 결과 및 결론 (Key Findings and Conclusion)**:
  - **Degradation 문제 해결**: ResNet은 plain network에서 발생하던 degradation 문제를 성공적으로 해결했다. 네트워크 깊이가 증가할수록 훈련 오류가 감소하고 검증 정확도가 향상되는 것을 확인했다.
  - **ImageNet 1위 달성**: 152계층 ResNet 앙상블 모델이 ImageNet 2015(ILSVRC 2015) 대회 분류 과제에서 3.57%의 top-5 오류율을 기록하며 1위를 차지했다.
  - **극단적인 깊이의 네트워크 훈련 성공**: 1000개가 넘는 계층(1202-layer)을 가진 네트워크를 성공적으로 훈련시켜, 잔차 학습이 극단적인 깊이에서도 최적화 문제를 해결할 수 있음을 보였다.
  - **뛰어난 일반화 성능**: ResNet의 학습된 표현(representation)은 다른 컴퓨터 비전 과제에서도 뛰어난 일반화 성능을 보였다. COCO 객체 탐지에서 VGG-16 기반 모델 대비 28%의 상대적 성능 향상을 달성했으며, ILSVRC & COCO 2015의 객체 탐지, 지역화, 분할 등 여러 분야에서 1위를 차지했다.
- **기여점 (Contributions)**:
  - **Degradation 문제 규명**: 매우 깊은 네트워크의 훈련을 방해하는 근본적인 문제로 'degradation'을 명확히 식별하고 실험적으로 증명했다.
  - **심층 잔차 학습 프레임워크 제안**: Shortcut connection을 이용한 잔차 학습(ResNet)을 제안하여, 이전에는 훈련이 불가능했던 수백, 수천 계층의 매우 깊은 신경망을 효과적으로 훈련할 수 있는 길을 열었다.
  - **컴퓨터 비전 분야의 새로운 표준 제시**: ImageNet 및 COCO와 같은 주요 벤치마크에서 SOTA(State-of-the-art)를 달성하며 ResNet을 컴퓨터 비전 분야의 기본 아키텍처 중 하나로 확립시켰다.
- **DOI (Digital Object Identifier)**: `https://doi.org/10.48550/arXiv.1512.03385` (arXiv:1512.03385)
- **기타 식별 가능한 정보**:
  - **연구 분야**: 컴퓨터 비전, 딥러닝
  - **대상**: 이미지 인식, 객체 탐지, 이미지 분할, 이미지 지역화
  - **데이터셋**: ImageNet, CIFAR-10, PASCAL VOC, MS COCO

## 요약

### 서론 (Introduction)

심층 컨볼루션 신경망(Deep Convolutional Neural Networks)은 이미지 분류 분야에서 큰 성공을 거두었으며, 네트워크의 '깊이'가 성능에 매우 중요한 요소임이 입증되었다. 이에 따라 "네트워크를 단순히 더 깊게 쌓으면 성능이 계속 좋아질까?"라는 질문이 제기되었다. 하지만 네트워크가 깊어질수록 기울기 소실/폭주(vanishing/exploding gradients) 문제와 함께, 훈련 정확도가 포화 상태를 지나 오히려 감소하는 **degradation**이라는 심각한 문제가 발생한다. 이 문제는 과적합(overfitting) 때문이 아니며, 더 깊은 모델이 얕은 모델보다 더 높은 훈련 오류를 보이는 현상이다.

이론적으로, 더 깊은 모델은 얕은 모델의 성능보다 나빠서는 안 된다. 추가된 계층들이 항등 함수(identity mapping) 역할을 하도록 학습하면 되기 때문이다. 그러나 실제로는 최적화기(solver)가 이러한 해결책을 찾지 못하는 어려움이 있다. 이 논문은 이러한 degradation 문제를 해결하기 위해 **심층 잔차 학습(Deep Residual Learning) 프레임워크**를 제안한다.

### 본론 (Main Content)

#### 1. 잔차 학습 (Residual Learning)

본 논문의 핵심 아이디어는 네트워크가 목표 함수 `H(x)`를 직접 학습하는 대신, 잔차 함수(residual function) `F(x) = H(x) - x`를 학습하도록 구조를 변경하는 것이다. 이렇게 되면 원래의 목표 함수는 `H(x) = F(x) + x`로 재구성된다. 저자들은 기존의 복잡한 함수를 처음부터 학습하는 것보다, 입력을 기준으로 변화해야 할 잔차를 학습하는 것이 더 쉽다고 가정했다. 만약 최적의 함수가 항등 함수라면, 비선형 계층들을 쌓아 항등 함수를 근사하는 것보다 잔차 `F(x)`를 0으로 만드는 것이 훨씬 쉽다.

이러한 잔차 학습은 **Shortcut Connection** (또는 Skip Connection)을 통해 구현된다. Shortcut Connection은 입력 `x`를 몇 개의 계층을 건너뛰어 바로 출력에 더해주는 구조이다. 이 연결은 추가적인 파라미터나 계산 복잡성을 거의 유발하지 않으면서, 네트워크가 잔차를 효과적으로 학습하도록 돕는다.

#### 2. 네트워크 아키텍처 (ResNet)

저자들은 VGGNet을 기반으로 한 34계층의 'plain' 네트워크와, 여기에 shortcut connection을 추가한 'residual' 네트워크(ResNet)를 설계하여 비교했다. 또한, 연산 효율성을 높이기 위해 50계층 이상의 깊은 모델에서는 `1x1`, `3x3`, `1x1` 컨볼루션 계층으로 구성된 **bottleneck** 디자인을 도입했다. `1x1` 컨볼루션이 채널 수를 줄였다가 다시 복원함으로써 `3x3` 컨볼루션의 연산량을 줄이는 방식이다.

#### 3. 실험 결과

##### ImageNet 분류

- **Degradation 문제 해결**: 18계층과 34계층의 plain network를 비교했을 때, 더 깊은 34계층 모델의 훈련 오류와 검증 오류가 모두 더 높게 나타나 degradation 현상을 재확인했다. 반면, ResNet에서는 34계층 모델이 18계층 모델보다 훨씬 낮은 오류율을 보이며, 깊이가 깊어짐에 따라 성능이 향상되는 것을 명확히 보여주었다. 이는 잔차 학습이 최적화 문제를 효과적으로 해결했음을 의미한다.

- **SOTA 달성**: 50, 101, 152계층으로 깊이를 늘려감에 따라 ResNet의 성능은 꾸준히 향상되었다. 최종적으로 152계층 ResNet을 포함한 앙상블 모델은 ImageNet 테스트셋에서 3.57%의 top-5 오류율을 기록하여 ILSVRC 2015 대회에서 1위를 차지했다.

##### CIFAR-10 분석 및 극단적인 깊이

- CIFAR-10 데이터셋에서도 ImageNet과 유사한 경향이 나타났다. Plain network는 깊이가 깊어질수록 오류가 증가했지만, ResNet은 110계층까지 꾸준히 성능이 향상되었다.

- 더 나아가 **1202계층**의 매우 깊은 모델을 훈련시키는 데 성공했다. 이 모델은 훈련 오류를 0.1% 미만으로 낮추며 최적화에 문제가 없음을 보였으나, 작은 데이터셋으로 인한 과적합으로 110계층 모델보다는 테스트 성능이 낮았다.

##### 객체 탐지 및 기타 과제

- ResNet을 Faster R-CNN의 백본 네트워크로 사용하여 VGG-16을 대체했을 때, COCO 객체 탐지 벤치마크에서 mAP가 28% 상대적으로 개선되는 등 다른 비전 과제에서도 뛰어난 일반화 성능을 입증했다. 이를 바탕으로 ILSVRC & COCO 2015 대회의 탐지, 지역화, 분할 과제에서도 모두 1위를 차지했다.

### 결론 (Conclusion)

본 논문은 매우 깊은 신경망을 훈련시킬 때 발생하는 degradation 문제를 해결하기 위해 **심층 잔차 학습 프레임워크(ResNet)**를 제안했다. 입력과 출력의 차이인 '잔차'를 학습하는 간단하면서도 강력한 아이디어를 통해, 이전에는 불가능했던 수백, 수천 계층의 네트워크를 성공적으로 훈련할 수 있음을 보였다. ResNet은 ImageNet, COCO 등 주요 벤치마크에서 최고 성능을 기록하며 컴퓨터 비전 분야의 새로운 패러다임을 제시했고, 이후 수많은 딥러닝 아키텍처의 기반이 되는 중요한 연구로 자리매김했다.

---

**📝 안내**: 이 문서는 DYETEC Project 2를 기획하기 위해 읽은 논문입니다.