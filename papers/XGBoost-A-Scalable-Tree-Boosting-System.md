---
title: "XGBoost: A Scalable Tree Boosting System"
date: "2016-06-10"
description: "확장 가능한 종단간 트리 부스팅 시스템인 XGBoost에 대한 제안"
keywords:
  [
    "XGBoost",
    "Tree Boosting",
    "Gradient Boosting",
    "Scalable Machine Learning",
    "Parallel Computing",
    "Distributed Computing",
    "Out Of Core",
    "Sparsity Aware",
    "Machine Learning",
    "Data Mining",
    "Ensemble Methods",
    "Optimization",
    "DYETEC PROJ 2",
  ]
tags:
  [
    "XGBoost",
    "Tree Boosting",
    "Gradient Boosting",
    "Scalable Machine Learning",
    "Parallel Computing",
    "Distributed Computing",
    "Out Of Core",
    "Sparsity Aware",
    "Machine Learning",
    "Data Mining",
    "Ensemble Methods",
    "Optimization",
    "DYETEC PROJ 2",
  ]
authors: ["tianqi_chen", "carlos_guestrin"]
---

# XGBoost: 확장 가능한 트리 부스팅 시스템

## 논문 정보

- **제목 (Title)**: XGBoost: 확장 가능한 트리 부스팅 시스템 (XGBoost: A Scalable Tree Boosting System)
- **저자 (Authors) 및 소속 (Affiliations)**:
  - Tianqi Chen (University of Washington)
  - Carlos Guestrin (University of Washington)
- **학회 또는 저널명 (Conference or Journal Name)**: KDD '16: Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining
- **제출일 또는 발행일 (Submission or Publication Date)**: 2016년 6월 10일

<!-- truncate -->

- **초록 (Abstract)**:
  트리 부스팅은 매우 효과적이고 널리 사용되는 머신러닝 방법이다. 본 논문에서는 데이터 과학자들이 많은 머신러닝 챌린지에서 최고 수준의 결과를 달성하기 위해 널리 사용하는 확장 가능한 종단간 트리 부스팅 시스템인 XGBoost를 설명한다. 우리는 희소 데이터를 위한 새로운 희소성 인식 알고리즘과 근사 트리 학습을 위한 가중 분위수 스케치(weighted quantile sketch)를 제안한다. 더 중요하게는, 캐시 접근 패턴, 데이터 압축 및 샤딩에 대한 통찰력을 제공하여 확장 가능한 트리 부스팅 시스템을 구축한다. 이러한 통찰력을 결합함으로써 XGBoost는 기존 시스템보다 훨씬 적은 리소스를 사용하여 수십억 개의 예제를 넘어 확장된다. 
- **주요 연구 내용 (Main Research Content/Methodology)**:
  - **정규화된 학습 목적 함수 (Regularized Learning Objective)**: 손실 함수와 모델의 복잡도를 제어하는 정규화 항을 결합한 목적 함수를 제안하여 과적합을 방지한다.
  - **분할 탐색 알고리즘 (Split Finding Algorithms)**: 최적의 분할 지점을 찾기 위해 모든 후보를 탐색하는 Exact Greedy Algorithm과 데이터의 분위수를 기반으로 후보를 제안하는 Approximate Algorithm을 사용한다.
  - **희소성 인식 분할 탐색 (Sparsity-aware Split Finding)**: 데이터의 희소성을 처리하기 위해 각 트리 노드에 기본 분기 방향(default direction)을 도입하여 결측치나 0값을 효율적으로 처리하고 계산 복잡도를 낮춘다.
  - **확장성을 위한 시스템 설계 (System Design for Scalability)**: 병렬 학습을 위한 Column Block 구조, CPU 캐시 효율을 높이는 Cache-aware Access, 그리고 메모리 부족 문제를 해결하기 위한 Out-of-core Computation (블록 압축 및 샤딩 포함) 등 시스템 최적화를 적용한다. 
- **주요 결과 및 결론 (Key Findings and Conclusion)**
  - **높은 확장성 및 속도**: XGBoost는 단일 머신에서 기존 솔루션보다 10배 이상 빠르며, 분산 및 메모리 제한 환경에서도 수십억 개의 예제를 처리할 수 있는 확장성을 보인다. 
  - **희소성 인식 알고리즘의 효율성**: 희소 데이터(예: 원-핫 인코딩된 데이터)에서 희소성 인식 알고리즘은 일반 구현보다 50배 이상 빠른 성능을 보여준다. 
  - **시스템 최적화의 효과**: Cache-aware prefetching은 대용량 데이터셋에서 성능을 2배 향상시키며, Out-of-core 계산을 위한 블록 압축 및 디스크 샤딩은 I/O 오버헤드를 크게 줄인다. 
  - **최고 수준의 성능**: XGBoost는 분류, 랭킹 등 다양한 머신러닝 문제에서 최고 수준의 성능을 달성했으며, Kaggle과 같은 데이터 분석 대회에서 다수의 우승 솔루션으로 채택되었다. 
- **기여점 (Contributions)**
  - 확장성이 뛰어난 종단간(end-to-end) 트리 부스팅 시스템(XGBoost)을 설계하고 구축했다.
  - 효율적인 후보 분할 지점 계산을 위해 이론적으로 정당화된 Weighted Quantile Sketch와 병렬 트리 학습을 위한 새로운 Sparsity-aware 알고리즘을 도입했다.
  - Out-of-core 트리 학습을 위해 효율적인 Cache-aware 블록 구조를 제안했다. 
- **DOI (Digital Object Identifier)**: 10.1145/2939672.2939785
- **기타 식별 가능한 정보**
  - **연구 분야**: 대규모 머신러닝 (Large-scale Machine Learning), 그래디언트 부스팅 (Gradient Boosting)
  - **대상**: 확장 가능하고 효율적인 트리 부스팅 시스템
  - **데이터셋**: Allstate Insurance Claim, Higgs Boson, Yahoo! LTRC, Criteo Terabyte Click Log 

### **요약**

#### 서론 (Introduction)

머신러닝의 중요성이 커지면서 복잡한 데이터를 효과적으로 모델링하고 대용량 데이터셋을 처리할 수 있는 확장 가능한 시스템이 필요해졌다. 트리 부스팅은 다양한 분야에서 최고 수준의 성능을 보이는 매우 효과적인 기계 학습 방법이다. 이 논문은 확장 가능한 트리 부스팅 시스템인 XGBoost를 제안한다. XGBoost는 다양한 데이터 마이닝 대회에서 널리 사용되며 그 성능을 입증했다. XGBoost의 성공 비결은 모든 시나리오에서의 확장성으로, 이는 희소 데이터를 위한 새로운 트리 학습 알고리즘, 가중치를 고려한 분위수 스케치(weighted quantile sketch), 그리고 캐시 인식 접근, 데이터 압축 등 시스템 및 알고리즘 최적화를 통해 달성되었다. 

#### 본론 (Main Content)

##### **정규화된 학습 목적 함수 및 트리 부스팅 (Regularized Learning & Boosting)**
XGBoost는 전통적인 그래디언트 부스팅 모델에 정규화 항을 추가하여 모델의 복잡도를 제어하고 과적합을 방지한다. 목적 함수는 예측값과 실제값의 차이를 측정하는 손실 함수와, 트리의 리프 개수 및 리프 가중치의 L2 노름으로 구성된 정규화 항의 합으로 정의된다. 모델은 이 목적 함수를 최소화하는 방향으로 반복적으로 트리를 추가(additive manner)하며 학습된다. 각 단계에서는 2차 근사(second-order approximation)를 통해 목적 함수를 빠르게 최적화할 수 있는 함수($f_t$)를 탐욕적으로(greedily) 찾는다. 

##### **분할 탐색 알고리즘 (Split Finding Algorithms)**
트리 학습의 핵심은 최적의 분할 지점을 찾는 것이다. XGBoost는 이를 위해 두 가지 주요 알고리즘을 제공한다.
- **Exact Greedy Algorithm**: 연속형 특성에 대해 모든 가능한 분할 지점을 열거하여 최적의 분할을 찾는다. 이를 효율적으로 수행하기 위해 데이터를 특성 값에 따라 정렬한 후, 정렬된 순서대로 스캔하며 그래디언트 통계치를 누적 계산하여 분할 점수를 평가한다. 
- **Approximate Algorithm**: 데이터가 메모리에 모두 들어가지 않는 대용량 데이터셋이나 분산 환경을 위해 사용된다. 특성 분포의 백분위수(percentile)를 기반으로 후보 분할 지점을 제안하고, 이 후보 지점들을 기준으로 데이터를 버킷(bucket)으로 나누어 통계치를 집계한 후 최적의 분할을 찾는다. 이 논문에서는 가중치가 있는 데이터를 처리하기 위한 새로운 'Weighted Quantile Sketch' 알고리즘을 제안하여, 이론적 보장 하에 후보 지점을 효과적으로 제안한다. 

##### **희소성 인식 분할 탐색 (Sparsity-aware Split Finding)**
실제 데이터는 결측치, 많은 0값, 원-핫 인코딩 등으로 인해 희소(sparse)한 경우가 많다. XGBoost는 이를 효율적으로 처리하기 위해 각 트리 노드에 '기본 방향(default direction)'을 추가한다. 특성 값이 누락된 경우, 데이터는 학습을 통해 결정된 최적의 기본 방향으로 분류된다. 이 방법은 희소한 데이터 패턴을 통합적으로 처리하며, 데이터에 존재하는 0이 아닌 항목 수에 비례하는 계산 복잡도를 가져 매우 빠른 연산이 가능하다. 

##### **확장성을 위한 시스템 설계 (System Design for Scalability)**
- **Column Block for Parallel Learning**: 데이터 정렬 비용을 줄이기 위해 데이터를 인메모리 유닛인 '블록(block)'에 저장한다. 각 블록 내 데이터는 특성(column)별로 정렬된 압축된 형태로 저장된다. 이 구조는 한 번만 계산하면 여러 반복에서 재사용할 수 있으며, 병렬 처리를 통해 분할 탐색 속도를 높인다. 
- **Cache-aware Access**: 블록 구조는 데이터 접근 시 비연속적인 메모리 접근을 유발하여 CPU 캐시 미스(cache miss)를 일으킬 수 있다. 이를 완화하기 위해 각 스레드에 내부 버퍼를 할당하고 그래디언트 통계치를 미리 가져오는(prefetching) 캐시 인식 알고리즘을 사용한다. 이를 통해 대용량 데이터셋에서 성능을 크게 향상시킨다. 
- **Out-of-core Computation**: 데이터가 메인 메모리보다 클 경우를 대비해 디스크 공간을 활용한다. 데이터를 여러 블록으로 나누어 디스크에 저장하고, 독립적인 스레드가 블록을 메모리 버퍼로 미리 가져오는 방식을 사용한다. 추가적으로, 블록 압축(Block Compression)을 통해 디스크 I/O 비용을 줄이고, 데이터를 여러 디스크에 분산 저장하는 블록 샤딩(Block Sharding)을 통해 디스크 읽기 처리량을 높인다. 

#### 결론 (Conclusion)

이 논문은 데이터 과학자들이 널리 사용하는 확장 가능한 트리 부스팅 시스템인 XGBoost를 구축하며 얻은 교훈을 공유했다. 희소 데이터를 처리하기 위한 새로운 희소성 인식 알고리즘과 근사 학습을 위한 이론적으로 정당화된 가중 분위수 스케치를 제안했다. 또한 캐시 접근 패턴, 데이터 압축, 샤딩과 같은 시스템 최적화가 확장 가능한 종단간 시스템을 구축하는 데 필수적임을 보였다. 이러한 통찰들을 결합함으로써 XGBoost는 최소한의 자원으로 실제 대규모 문제를 해결할 수 있게 되었다.

---

**📝 안내**: 이 문서는 DYETEC Project 2를 기획하기 위해 읽은 논문입니다.