---
title: "Fault Localization with Code Coverage Representation Learning"
date: "2021-02-27"
description: "결함 위치 추정(Fault Localization)을 이미지 패턴 인식 문제로 정의하고, 테스트 케이스 정렬 및 데이터 의존성 표현 학습을 결합한 CNN 기반 모델 DEEPRL4FL 제안"
keywords: [Fault Localization, Deep Learning, Code Coverage, CNN, Representation Learning]
tags: ["Fault Localization", "Deep Learning", "Software Engineering", "Convolutional Neural Networks", "Representation Learning"]
authors: ["Yi Li", "Shaohua Wang", "Tien N. Nguyen"]
---

## 논문 정보
- **제목**: Fault Localization with Code Coverage Representation Learning
- **저자**: Yi Li, Shaohua Wang, Tien N. Nguyen (New Jersey Institute of Technology, The University of Texas at Dallas)
- **학회/저널**: arXiv:2103.00270v1 (ICSE 2021 등재 연구 기반)
- **발행일**: 2021-02-27
- **주요 연구 내용**: 결함 위치 추정(FL)을 이미지 패턴 인식 문제로 접근하여, 코드 커버리지 행렬(Code Coverage Matrix)의 테스트 케이스를 시각적 패턴이 드러나도록 재정렬하고, 문장 간 데이터 의존성을 학습하여 CNN으로 결함을 탐지하는 DEEPRL4FL 모델을 제안함.
- **주요 결과 및 결론**: Defects4J 벤치마크에서 기존 최고 성능의 Statement-level FL 모델 대비 Top-1 정확도를 173.1%에서 491.7%까지 향상시켰으며, Method-level에서도 기존 기법들을 크게 상회하는 성능을 입증함.
- **기여점**: 단순한 통계적 점수 계산을 넘어 코드 커버리지 행렬의 전체 정보를 활용하는 새로운 표현 학습(Representation Learning) 방식을 제시하고, 테스트 케이스 정렬 알고리즘과 데이터 의존성 통합을 통해 딥러닝 모델의 FL 성능을 극대화함.
<!--truncate-->
## 요약

### 초록
본 논문은 결함 위치 추정(FL)을 이미지 패턴 인식 문제로 취급하여 소스 코드의 문장(Statement) 및 메서드(Method) 수준에서 버그를 식별하는 딥러닝 접근법인 DEEPRL4FL을 제안한다. 이 모델은 코드 커버리지 행렬의 동적 정보에 대한 새로운 표현 학습(RL)과 프로그램 문장에 대한 데이터 의존성 RL을 수행한다. 이러한 동적 정보 학습은 정적 코드 표현 학습과 결합된다. 이는 범죄 수사 기법에서 영감을 받은 것으로, 범죄 현장(실패한 테스트 케이스), 관련 인물(의존성이 있는 문장), 용의자(과거의 유사한 버그 코드)를 분석하는 것과 유사하다. DEEPRL4FL은 CNN 모델이 결함 패턴을 잘 인식할 수 있도록 테스트 케이스를 정렬하고 오류 발생 문장을 표시한다. 실험 결과, 기존 최신 기법 대비 Statement-level 및 Method-level 결함 탐지 성능이 획기적으로 향상됨을 확인했다.

### 서론
소프트웨어 결함을 찾아 수정하는 것은 고품질 소프트웨어를 보장하는 중요한 과정이다. 기존의 스펙트럼 기반 결함 위치 추정(SBFL)이나 변이 기반 결함 위치 추정(MBFL)은 코드 커버리지 정보를 통계적 수식으로 요약하여 의심 점수(Suspiciousness Score)를 계산한다. 그러나 이러한 방식은 실패한 테스트와 성공한 테스트에서 동일하게 실행된 문장들을 구별하지 못하는 한계가 있다. 최근 딥러닝 기반의 DeepFL 같은 접근법이 등장했으나, 여전히 다양한 수식으로 계산된 점수만을 대리 지표로 사용하여 코드 커버리지의 전체 정보를 충분히 활용하지 못하고 있다.

본 연구는 이러한 문제를 해결하기 위해 CNN의 이미지 분류 및 패턴 인식 능력을 활용하는 DEEPRL4FL을 제안한다. 핵심 아이디어는 코드 커버리지 행렬을 이미지처럼 취급하되, CNN이 특징을 잘 학습할 수 있도록 행렬을 재구성하는 것이다.

### 배경
- **범죄 수사 비유**: 본 연구는 FL을 범죄 수사에 비유한다.
    1.  **범죄 현장 (Code Coverage Matrix)**: 실패한 테스트 케이스와 실행된 문장들.
    2.  **관련 인물 (Data Dependencies)**: 버그 문장과 데이터 의존성이 있는 다른 문장들.
    3.  **상습 용의자 (Source Code Rep)**: 훈련 데이터에서 학습된 유사한 버그 코드 패턴.
- **기존 문제점 (Observation 1)**: 기존 기법들은 행/열을 하나의 점수로 요약하여 정보 손실이 발생한다.
- **기존 문제점 (Observation 2)**: 오류가 발현된 위치(Error-exhibiting line)와 실제 버그 위치가 다를 수 있으므로, 데이터 의존성을 고려해야 한다.
![Figure 5](img/Pasted%20image%2020251124143640.png)
### 모델 아키텍처 / 방법론
DEEPRL4FL은 크게 세 가지 표현 학습 과정으로 구성된다. (논문의 Figure 5 참조)

**1. 코드 커버리지 표현 학습 (Code Coverage Representation Learning)**
- **테스트 케이스 정렬 (Algorithm 1)**: 무작위로 배치된 테스트 케이스(행렬의 열)를 재정렬하여, 실행 패턴(값이 1인 셀)들이 인접하도록 만든다. 이는 CNN의 필터가 국소적인 특징을 잘 포착하게 돕는다. 실패한 테스트 케이스를 우선 배치하고, 유사한 실행 경로를 가진 테스트 케이스들을 묶는다.
- **오류 발현 라인 식별**: 테스트 실패 로그나 스택 트레이스를 분석하여 실제 오류가 관측된 라인(Error-Exhibiting line)을 식별하고 행렬에 표시(-1 값 할당)한다.
- **행렬 구성**: 스펙트럼 기반 행렬(SBM)과 변이 기반 행렬(MBM)을 모두 생성하여 활용한다.


**2. 문장 의존성 표현 학습 (Statement-Dependency Representation Learning)**
- **실행 순서**: 테스트 케이스의 실행 경로(Execution Path)에 Word2Vec을 적용하여 문장 간의 순차적 관계를 학습한다.
- **데이터 의존성**: 제어 흐름 그래프(CFG)와 데이터 흐름 그래프(DFG)를 구축하고, Node2Vec을 적용하여 실행 순서상 멀리 떨어져 있어도 데이터 의존성이 있는 문장들의 관계를 벡터화한다.
- **결합**: 위 두 정보를 결합하여 각 문장에 대한 의존성 벡터를 생성하고, 이를 코드 커버리지 행렬 값과 곱하여 정보를 강화한다.

**3. 소스 코드 표현 학습 (Source Code Representation Learning)**
- **정적 분석**: AST(Abstract Syntax Tree) 경로를 추출하여 Code2Vec, ASTNN 등의 기법으로 소스 코드 자체의 구조적 특징을 벡터화한다.

**4. 결함 위치 추정 (Fault Localization with CNN)**
- 위 세 가지 과정에서 얻은 벡터/행렬들을 Hadamard Product로 결합한다.
- 결합된 데이터를 CNN 모델에 입력하여 해당 문장이나 메서드가 결함인지 아닌지(Faulty or Non-faulty)를 이진 분류한다.

### 실험 결과
**주요 데이터셋 및 설정**
- **데이터셋**: Defects4J V1.2.0 (Java, 395개 버그), ManyBugs (C, 185개 버그).
- **설정**: Leave-one-out 교차 검증, Within-project 및 Cross-project 설정 모두 평가.

**핵심 성능 지표 (Statement-level)**
- **Top-1 Recall**: DEEPRL4FL은 71개의 버그를 Top-1에서 정확히 탐지했다. 이는 기존 최고 성능 모델 대비 82.1%~491.7% 향상된 수치이다.
- **비교**: Ochiai(17개), Dstar(19개), DeepFL(39개)에 비해 월등히 높은 성능을 보였다.

**핵심 성능 지표 (Method-level)**
- **Top-1 Recall**: 245개의 버그를 탐지하여 DeepFL(213개) 및 기타 Learning-to-Rank 기법들을 상회했다.
- **효과 분석**: 테스트 케이스 정렬(Ordering)과 의존성(Dependency) 추가가 성능 향상에 결정적인 역할을 함을 확인했다. 정렬 없이는 CNN이 특징을 제대로 학습하지 못함을 Feature Map 시각화를 통해 증명했다.


**언어 확장성**
- C 언어 프로젝트인 ManyBugs에서도 Java와 일관된 성능 향상을 보여, 언어에 구애받지 않는 범용성을 입증했다.

### 결론
본 연구는 결함 위치 추정을 이미지 인식 문제로 재정의하고, 이를 효과적으로 풀기 위한 데이터 전처리(테스트 케이스 정렬)와 표현 학습(의존성 및 코드 구조) 기법을 통합한 DEEPRL4FL을 제안했다. 특히 코드 커버리지 행렬의 시각적 패턴을 강화하는 정렬 알고리즘과 복잡한 버그를 추적하기 위한 데이터 의존성 학습이 CNN의 성능을 극대화하는 핵심 요소임을 실험적으로 증명했다. 이는 향후 딥러닝 기반 소프트웨어 분석 도구의 새로운 방향성을 제시한다.