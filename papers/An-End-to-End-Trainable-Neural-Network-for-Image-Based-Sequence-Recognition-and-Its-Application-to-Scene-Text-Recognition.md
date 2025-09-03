---
title: "An End-to-End Trainable Neural OCR: Text Recognition and Information Extraction"
date: "2015-07-21"
description: "CNN과 RNN을 결합한 CRNN 아키텍처를 제안하여 이미지 기반 시퀀스 인식, 특히 장면 텍스트 인식 문제를 해결하는 논문"
keywords:
  [
    "Scene Text Recognition",
    "Image Based Sequence Recognition",
    "Convolutional Recurrent Neural Network",
    "CRNN",
    "End To End Training",
    "Deep Learning",
    "Computer Vision",
    "OCR",
    "Machine Learning",
    "Sequence Modeling",
    "Text Recognition",
    "Neural Networks",
    "DYETEC PROJ 2",
  ]
tags:
  [
    "Scene Text Recognition",
    "Image Based Sequence Recognition",
    "Convolutional Recurrent Neural Network",
    "CRNN",
    "End To End Training",
    "Deep Learning",
    "Computer Vision",
    "OCR",
    "Machine Learning",
    "Sequence Modeling",
    "Text Recognition",
    "Neural Networks",
    "DYETEC PROJ 2",
  ]
authors: ["baoguang_shi", "xiang_bai", "cong_yao"]
---

# 이미지 기반 시퀀스 인식을 위한 종단간 학습 가능 신경망과 장면 텍스트 인식에의 적용

## 논문 정보

- **제목 (Title)**: 이미지 기반 시퀀스 인식을 위한 종단간 학습 가능 신경망과 장면 텍스트 인식에의 적용 (An End-to-End Trainable Neural Network for Image-based Sequence Recognition and Its Application to Scene Text Recognition)
- **저자 (Authors) 및 소속 (Affiliations)**:
  - Baoguang Shi (Huazhong University of Science and Technology, Wuhan, China)
  - Xiang Bai (Huazhong University of Science and Technology, Wuhan, China)
  - Cong Yao (Huazhong University of Science and Technology, Wuhan, China)
- **학회 또는 저널명 (Conference or Journal Name)**: arXiv
- **제출일 또는 발행일 (Submission or Publication Date)**: 2015년 7월 21일

<!-- truncate -->

- **초록 (Abstract)**:
  이미지 기반 시퀀스 인식은 컴퓨터 비전 분야의 오랜 연구 주제이다. 본 논문에서는 그중에서도 가장 중요하고 도전적인 과제인 장면 텍스트 인식 문제를 다룬다. 특징 추출, 시퀀스 모델링, 전사(transcription)를 하나의 통일된 프레임워크로 통합한 새로운 신경망 아키텍처를 제안한다. 이 아키텍처는 기존 시스템과 비교하여 네 가지 독특한 속성을 가진다: (1) 구성 요소가 개별적으로 학습 및 조정되는 기존 알고리즘과 달리 종단간(end-to-end) 학습이 가능하다. (2) 문자 분할이나 수평 스케일 정규화 없이 임의 길이의 시퀀스를 자연스럽게 처리한다. (3) 사전(lexicon)에 국한되지 않으며, 사전 기반 및 비사전 기반 장면 텍스트 인식 작업 모두에서 뛰어난 성능을 보인다. (4) 실제 적용에 더 실용적인, 효과적이면서도 훨씬 작은 모델을 생성한다. IIIT-5K, Street View Text, ICDAR 등 표준 벤치마크에서의 실험을 통해 제안된 알고리즘의 우수성을 입증했으며, 이미지 기반 악보 인식 작업에서도 좋은 성능을 보여 그 일반성을 확인했다.

- **주요 연구 내용 (Main Research Content/Methodology)**:
  - **CRNN 아키텍처 제안**: 합성곱 신경망(CNN)과 순환 신경망(RNN)을 결합한 새로운 모델인 합성곱 순환 신경망(Convolutional Recurrent Neural Network, CRNN)을 제안했다.
  - **통합된 3단계 구조**: 아키텍처는 (1) CNN을 이용한 특징 추출, (2) 양방향 LSTM(Bidirectional LSTM)을 이용한 시퀀스 모델링, (3) CTC(Connectionist Temporal Classification) 손실을 이용한 전사(Transcription)의 세 부분으로 구성된다.
  - **종단간 학습**: 개별 컴포넌트를 따로 학습할 필요 없이, 단일 손실 함수를 사용하여 전체 네트워크를 이미지와 해당 시퀀스 레이블만으로 종단간 학습할 수 있다.
  - **임의 길이 시퀀스 처리**: 입력 이미지의 너비에 관계없이 특징 시퀀스를 생성하고, RNN과 CTC를 통해 가변 길이의 텍스트 시퀀스를 예측할 수 있어 문자 단위 분할이 필요 없다.
  - **사전 제약 없는 인식**: CTC 레이어를 통해 사전(lexicon)에 의존하지 않고 텍스트를 인식할 수 있으며, 동시에 사전 기반 검색을 통해 성능을 향상시키는 것도 가능하다.

- **주요 결과 및 결론 (Key Findings and Conclusion)**:
  - **높은 인식 정확도 달성**: IIIT-5K, SVT, ICDAR 등 주요 장면 텍스트 인식 벤치마크에서 기존 최고 성능(state-of-the-art) 모델들과 대등하거나 더 우수한 성능을 보였다.
  - **모델의 효율성 입증**: 기존 딥러닝 모델들(예: 490M, 304M 파라미터)에 비해 훨씬 적은 8.3M의 파라미터를 사용하여 작고 효율적인 모델을 구현했다.
  - **일반성 검증**: 장면 텍스트 인식뿐만 아니라 이미지 기반 악보 인식 문제에도 성공적으로 적용하여, 상용 OMR(Optical Music Recognition) 시스템보다 월등히 높은 성능을 기록하며 모델의 일반성을 입증했다.
  - **합성 데이터의 유효성**: 실제 이미지를 사용하지 않고 오직 합성 텍스트 데이터만으로 모델을 학습했음에도 불구하고, 실제 환경에서 촬영된 이미지에 대해 높은 인식 성능을 보여주었다.
  - **종단간 학습의 장점**: 문자 단위의 위치 정보(bounding box) 없이 단어 수준의 레이블만으로 학습이 가능하여, 데이터 준비 과정을 크게 간소화했다.

- **기여점 (Contributions)**:
  - **최초의 통합 프레임워크 제시**: 특징 추출, 시퀀스 모델링, 전사를 하나의 네트워크에서 종단간 학습할 수 있는 CRNN 프레임워크를 제안하여 이미지 기반 시퀀스 인식의 새로운 패러다임을 제시했다.
  - **훈련 과정의 간소화**: 문자 단위의 정밀한 레이블링 없이 단어 수준의 레이블만으로 학습이 가능하게 하여, 데이터셋 구축 비용과 노력을 획기적으로 줄였다.
  - **실용적인 모델 구현**: 기존 모델 대비 파라미터 수를 크게 줄여(8.3M) 저장 공간을 적게 차지하고(33MB), 모바일 기기에도 쉽게 이식할 수 있는 실용적인 모델을 개발했다.
  - **다양한 분야로의 확장성**: 장면 텍스트 인식 외에 악보 인식 등 다양한 이미지 기반 시퀀스 인식 문제에 적용될 수 있는 일반적인 프레임워크임을 입증했다.

- **DOI (Digital Object Identifier)**: arXiv:1507.05717v1

- **기타 식별 가능한 정보**:
  - **연구 분야**: 컴퓨터 비전, 딥러닝, 장면 텍스트 인식, 광학 문자 인식(OCR)
  - **대상**: 이미지 속의 시퀀스 형태 객체 (장면 텍스트, 악보 등)
  - **데이터셋**:
    - **학습**: Synth (합성 텍스트 데이터셋)
    - **평가**: ICDAR 2003, ICDAR 2013, IIIT 5k-word, Street View Text (SVT)

## 요약

### 서론 (Introduction)

이미지 기반 시퀀스 인식은 장면 텍스트, 필기체, 악보와 같이 연속적인 객체를 인식하는 컴퓨터 비전의 중요한 문제이다. 기존의 심층 합성곱 신경망(DCNN)은 고정된 크기의 입출력을 다루기 때문에, 길이가 다양한 시퀀스 객체에 직접 적용하기 어렵다. 이를 해결하기 위해 개별 문자를 검출하고 인식하거나, 단어 전체를 하나의 클래스로 분류하는 접근법이 있었지만, 이는 각각 강력한 문자 탐지기를 요구하거나 방대한 수의 클래스를 다루어야 하는 한계가 있었다. 반면, 순환 신경망(RNN)은 시퀀스 처리에 적합하지만, 보통 이미지에서 특징을 추출하는 전처리 단계가 별도로 필요해 종단간 학습이 어려웠다. 이 논문은 이러한 한계를 극복하기 위해 DCNN의 강력한 특징 추출 능력과 RNN의 시퀀스 모델링 능력을 결합한 새로운 아키텍처인 **합성곱 순환 신경망(CRNN)**을 제안한다. CRNN은 별도의 전처리나 문자 단위의 레이블링 없이, 이미지로부터 직접 가변 길이의 문자 시퀀스를 인식할 수 있는 종단간 학습 모델이다.

### 본론 (Main Content)

#### CRNN 네트워크 아키텍처

CRNN은 아래의 세 가지 주요 구성 요소로 이루어져 있다.

1. **합성곱 계층 (Convolutional Layers)**
   VGGNet과 유사한 구조의 CNN을 사용하여 입력 이미지로부터 특징 맵(feature map)을 추출한다. 입력 이미지는 모두 동일한 높이로 조절된다. CNN의 완전 연결 계층을 제거하고, 추출된 특징 맵을 세로로 스캔하여 각 열(column)을 하나의 프레임으로 하는 특징 시퀀스를 생성한다. 이 방식은 이미지의 너비가 변하더라도 유연하게 특징 시퀀스를 생성할 수 있게 한다.

2. **순환 계층 (Recurrent Layers)**
   합성곱 계층에서 추출된 특징 시퀀스는 깊은 양방향 LSTM(Deep Bidirectional LSTM)으로 구성된 순환 계층에 입력된다. 양방향 LSTM은 순방향과 역방향 두 개의 LSTM을 사용하여 시퀀스의 과거와 미래 문맥 정보를 모두 활용한다. 이를 통해 각 프레임(특징 벡터)에 대한 예측의 정확도를 높인다. 예를 들어, 'il'과 같은 모호한 문자를 주변 문맥을 통해 더 명확하게 구분할 수 있다. 순환 계층은 전체 네트워크가 종단간으로 학습될 수 있도록 오류를 합성곱 계층으로 역전파하는 역할을 한다.

3. **전사 계층 (Transcription Layer)**
   순환 계층이 출력한 프레임별 예측 결과를 최종 레이블 시퀀스로 변환하는 단계이다. 이 논문에서는 CTC(Connectionist Temporal Classification) 손실 함수를 사용한다. CTC는 입력 시퀀스와 출력 시퀀스 간의 정렬(alignment)을 학습할 필요 없이, 반복되는 문자나 '공백(blank)' 레이블을 제거하여 최종 시퀀스를 생성한다. 이 덕분에 학습 데이터에 문자별 위치 정보가 없어도 단어 수준의 레이블만으로 전체 모델을 종단간으로 학습시킬 수 있다. 인식은 사전에 제약받지 않는 방식(lexicon-free)과 특정 사전 내에서 가장 확률이 높은 단어를 찾는 방식(lexicon-based) 모두 가능하다.

#### 학습 및 실험

모델은 ADADELTA 옵티마이저를 사용한 확률적 경사 하강법(SGD)으로 학습되었다. 학습 데이터로는 8백만 개의 합성 텍스트 이미지를 사용했으며, 별도의 미세 조정 없이 실제 이미지로 구성된 벤치마크 데이터셋에서 평가를 진행했다. 실험 결과, CRNN은 IIIT-5K, SVT, ICDAR 등 주요 벤치마크에서 기존 최고 수준의 모델들과 대등하거나 더 높은 성능을 보였다. 특히, 기존 딥러닝 모델들이 수억 개의 파라미터를 가진 것에 비해 CRNN은 830만 개의 파라미터만으로 작고 효율적인 모델을 구현했다. 또한, 동일한 CRNN 구조를 악보 인식 문제에 적용하여 상용 소프트웨어를 크게 능가하는 성능을 보임으로써 모델의 높은 일반성을 증명했다.

### 결론 (Conclusion)

본 논문은 CNN과 RNN의 장점을 결합한 새로운 신경망 아키텍처인 CRNN을 제안했다. CRNN은 가변적인 크기의 이미지로부터 임의 길이의 시퀀스를 예측할 수 있는 종단간 학습 모델이다. 문자 단위의 세부적인 주석 없이 단어 수준의 레이블만으로 학습이 가능하며, 완전 연결 계층을 제거하여 작고 효율적인 모델을 구현했다. 장면 텍스트 인식과 악보 인식 실험을 통해 CRNN이 기존 방법들보다 우수하거나 경쟁력 있는 성능을 보이며, 다양한 이미지 기반 시퀀스 인식 문제에 적용될 수 있는 일반적인 프레임워크임을 입증했다. 이는 CRNN이 실제 애플리케이션에 매우 적합한 접근법임을 시사한다.

---

**📝 안내**: 이 문서는 DYETEC Project 2를 기획하기 위해 읽은 논문입니다.