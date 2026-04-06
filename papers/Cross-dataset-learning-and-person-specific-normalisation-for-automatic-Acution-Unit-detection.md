---
title: Cross-dataset learning and person-specific normalisation for automatic Action Unit detection
date: '2015-01-01'
description: 교차 데이터셋 학습과 개인 맞춤형 중립 표정 정규화를 사용하여 실시간 얼굴 행동 단위(AU) 감지 및 강도 추정 시스템을 제안한 연구
tags: [Action Unit Detection, Facial Expression Analysis, Cross-Dataset Learning, Person-Specific Normalisation, Machine Learning, Computer Vision]
authors:
- name: Tadas Baltrušaitis
- name: Marwa Mahmoud
- name: Peter Robinson
---

## 논문 정보

- **제목**: Cross-dataset learning and person-specific normalisation for automatic Action Unit detection
- **저자**: Tadas Baltrušaitis (University of Cambridge), Marwa Mahmoud (University of Cambridge), Peter Robinson (University of Cambridge)
- **학회/저널**: 2015 11th IEEE International Conference and Workshops on Automatic Face and Gesture Recognition (FG 2015), Ljubljana, Slovenia
- **발행일**: 2015-05-04
- **DOI**: [10.1109/FG.2015.7284869](https://doi.org/10.1109/FG.2015.7284869)
- **주요 연구 내용**: 외형 특징(HOG)과 기하학적 특징(형상 파라미터, 랜드마크 위치)을 결합한 실시간 얼굴 행동 단위(AU) 강도 추정 및 발생 감지 시스템 개발
- **주요 결과 및 결론**: FERA 2015 베이스라인 대비 AU 발생 감지, 완전 자동 AU 강도, 사전 분할 AU 강도 추정의 세 가지 과제 모두에서 우수한 성능 달성
- **기여점**: 교차 데이터셋 학습을 통한 일반화 성능 향상 및 중위값 기반 개인별 정규화 기법 제안
<!--truncate-->

## 요약

### 초록
얼굴 행동 단위(Action Unit, AU)의 자동 감지는 얼굴 분석 시스템에서 매우 중요하다. 개인 간 큰 차이로 인해 AU 분류기의 성능은 학습 데이터와 중립 표정 추정 능력에 크게 의존한다. 본 논문은 외형 특징인 방향 그래디언트 히스토그램(Histograms of Oriented Gradients, HOG)과 기하학적 특징인 형상 파라미터 및 랜드마크 위치를 기반으로 한 실시간 얼굴 행동 단위 강도 추정 및 발생 감지 시스템을 제시한다. 실험을 통해 서로 다른 데이터셋의 추가 레이블 데이터를 활용한 교차 데이터셋 학습의 이점과, 개인별 중립 표정을 고려한 중위값 기반 특징 정규화 기법의 효과를 입증한다.

### 서론
얼굴 행동 코딩 시스템(Facial Action Coding System, FACS)은 얼굴 근육의 움직임을 행동 단위(AU)로 분류하는 체계로, 감정 인식과 인간-컴퓨터 상호작용에서 핵심적인 역할을 한다. 그러나 AU 감지의 자동화는 개인별 얼굴 차이, 조명 변화, 표정의 미묘한 차이 등으로 인해 어려운 과제이다. 기존 연구에서는 단일 데이터셋에서 학습된 모델이 새로운 데이터셋에 잘 일반화되지 않는 문제가 있었으며, 본 연구는 이를 교차 데이터셋 학습과 개인별 정규화로 해결하고자 한다.

### 방법론
본 시스템의 핵심 구성 요소는 다음과 같다:

1. **특징 추출**:
   - **외형 특징**: HOG(Histograms of Oriented Gradients) 디스크립터를 사용하여 얼굴 영역의 텍스처 정보를 포착
   - **기하학적 특징**: 얼굴 형상 파라미터와 랜드마크 위치를 활용하여 얼굴 구조의 변화를 표현

2. **교차 데이터셋 학습**: 여러 데이터셋(예: SEMAINE, DISFA, BP4D)의 레이블 데이터를 결합하여 학습함으로써 모델의 일반화 성능을 향상

3. **개인별 정규화(Person-Specific Normalisation)**: 중위값 기반 특징 정규화 기법을 적용하여 각 개인의 중립 표정을 추정하고, 이를 기준으로 특징 값을 정규화

4. **분류기**: SVM(Support Vector Machine)을 기반으로 AU 발생 감지와 강도 추정을 수행

### 실험 및 결과
FERA 2015 챌린지의 세 가지 과제에서 실험을 수행하였다:

1. **AU 발생 감지(AU Occurrence Detection)**: 이진 분류를 통해 AU 활성화 여부를 판별하며, FERA 2015 베이스라인 대비 우수한 성능을 달성
2. **완전 자동 AU 강도 추정(Fully Automatic AU Intensity)**: 자동으로 얼굴을 감지하고 AU 강도를 추정하는 파이프라인에서 향상된 결과를 보임
3. **사전 분할 AU 강도 추정(Pre-segmented AU Intensity)**: 사전 분할된 비디오 시퀀스에서의 AU 강도 추정 성능에서도 개선을 확인

교차 데이터셋 학습과 개인별 정규화를 함께 적용했을 때 가장 우수한 성능을 나타내었다.

### 결론
본 연구는 교차 데이터셋 학습과 개인별 중립 표정 정규화가 AU 감지 시스템의 성능을 크게 향상시킬 수 있음을 입증하였다. 추가적인 레이블 데이터를 활용한 교차 데이터셋 학습은 모델의 일반화 능력을 높이고, 중위값 기반 정규화는 개인 간 변이를 효과적으로 처리한다. 이 시스템은 실시간으로 동작하며, FERA 2015 챌린지의 세 가지 과제 모두에서 베이스라인을 초과하는 성능을 달성하였다.
