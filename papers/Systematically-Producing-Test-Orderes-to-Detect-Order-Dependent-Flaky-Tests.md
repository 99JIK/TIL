---
title: "Systematically Producing Test Orders to Detect Order-Dependent Flaky Tests"
date: "2025-11-22"
description: "순서 의존적 불규칙 테스트(OD tests)를 탐지하기 위해 Tuscan squares를 활용한 체계적인 테스트 순서 생성 기법 3가지를 제안하고 그 효과를 검증한 연구"
keywords: ["Software Testing", "Flaky Tests", "Order-Dependent Tests", "Test Ordering", "Tuscan Squares"]
tags: ["Software Engineering", "Software Testing", "Flaky Test Detection"]
authors: ["Chengpeng Li", "M. Mahdi Khosravi", "Wing Lam", "August Shi"]
---

## 논문 정보
- [cite_start]**제목**: Systematically Producing Test Orders to Detect Order-Dependent Flaky Tests [cite: 3, 4]
- [cite_start]**저자**: Chengpeng Li (University of Texas at Austin), M. Mahdi Khosravi (Middle East Technical University), Wing Lam (George Mason University), August Shi (University of Texas at Austin) [cite: 5, 8, 29, 31]
- [cite_start]**학회/저널**: ISSTA '23 (International Symposium on Software Testing and Analysis) [cite: 25]
- [cite_start]**발행일**: 2023-07-17 [cite: 25]
- [cite_start]**DOI**: https://doi.org/10.1145/3597926.3598083 [cite: 28]
- [cite_start]**주요 연구 내용**: 기존의 무작위 테스트 순서 변경 방식의 한계를 극복하기 위해, Tuscan squares 이론을 기반으로 테스트 순서를 체계적으로 생성하여 순서 의존적(Order-Dependent) 불규칙 테스트를 효율적으로 탐지하는 세 가지 새로운 기법(Tuscan Intra-Class, Tuscan Inter-Class, Target Pairs)을 제안한다. [cite: 15, 16, 17]
- [cite_start]**주요 결과 및 결론**: 47개 오픈 소스 프로젝트의 289개 OD 테스트를 대상으로 평가한 결과, 제안된 'Tuscan Intra-Class' 기법이 평균 104.7개의 테스트 순서만으로 97.2%의 OD 테스트를 탐지하여 비용 대비 효과가 가장 뛰어남을 확인했다. [cite: 18, 77]
- [cite_start]**기여점**: 무작위가 아닌 체계적인 접근법으로 OD 테스트 탐지 보장성을 높였으며, 특히 테스트 클래스 내부 및 클래스 간의 관계를 고려한 새로운 순서 생성 알고리즘을 제시하고, 효율적인 탐지를 위한 최소 테스트 순서의 존재를 입증하여 향후 연구 방향을 제시했다. [cite: 79, 81, 83]
<!--truncate-->
## 요약

### 초록
[cite_start]소프트웨어 테스트는 코드 변경 없이도 결과가 달라지는 불규칙 테스트(Flaky tests)로 인해 어려움을 겪으며, 그중 실행 순서에 따라 결과가 달라지는 순서 의존적 테스트(OD tests)가 주요 원인 중 하나다. [cite: 10, 11] [cite_start]기존 연구들은 무작위로 순서를 섞거나 테스트 클래스 단위로만 순서를 체계화하여 모든 OD 테스트를 탐지하지 못하는 한계가 있었다. [cite: 13, 14] [cite_start]본 논문에서는 Tuscan squares를 활용하여 최소한의 테스트 순서로 테스트 쌍(test pairs)을 커버하는 세 가지 새로운 기법을 제안한다. [cite: 15, 16] [cite_start]평가 결과, 가장 비용 효율적인 기법은 97.2%의 탐지율을 보였으며, 향후 테스트 순서 우선순위화 연구의 가능성을 열어주었다. [cite: 18, 19]

### 서론
[cite_start]OD 테스트는 특정 테스트가 먼저 실행되어 공유 상태(shared state)를 변경(pollute)했을 때 후속 테스트가 실패(victim)하거나, 반대로 특정 설정(state setter)이 선행되어야 성공(brittle)하는 경우 발생한다. [cite: 46, 96, 102] [cite_start]이를 탐지하기 위해 무작위 셔플링(Random shuffling)이 사용되었으나 보장성이 부족하고, Wei et al.이 제안한 체계적 접근(Tuscan Class-Only)은 테스트 클래스 간의 순서만 고려하고 클래스 내부의 테스트 순서는 고려하지 않는 한계가 있었다. [cite: 52, 60] [cite_start]이에 본 연구는 클래스 내부(Intra-Class)와 클래스 간(Inter-Class)의 모든 테스트 쌍을 커버하거나, 정적 분석을 통해 의심되는 쌍(Target Pairs)만 커버하는 심화된 기법들을 제안한다. [cite: 61, 62, 64, 66]

### 배경
#### Order-Dependent (OD) Tests
[cite_start]OD 테스트는 결정론적으로(deterministically) 특정 순서에서는 성공하고 다른 순서에서는 실패한다. [cite: 90]
- [cite_start]**Victim & Polluter**: Victim은 혼자 실행하면 성공하지만, Polluter가 먼저 실행되어 공유 상태를 오염시키면 실패한다. [cite: 101, 102]
- [cite_start]**Cleaner**: Polluter와 Victim 사이에 실행되어 오염된 상태를 초기화해 Victim이 성공하게 만드는 테스트다. [cite: 105, 106]
- [cite_start]**Brittle & State Setter**: Brittle은 혼자 실행하면 실패하지만, State Setter가 먼저 실행되어 필요한 상태를 설정해주면 성공한다. [cite: 96, 97]

#### Tuscan Squares
자연수 $N$에 대해 Tuscan square는 $N$개의 행을 가지며, 각 행은 $1$부터 $N$까지의 순열로 이루어진다. [cite_start]모든 서로 다른 숫자 쌍 $(a, b)$에 대해 $a$가 $b$ 바로 앞에 오는 행이 적어도 하나 존재한다는 특성이 있다. [cite: 136] [cite_start]이를 테스트 순서에 적용하면, $N$개의 테스트에 대해 $N$ (또는 $N+1$)개의 순서를 생성하여 모든 인접한 테스트 쌍을 실행해 볼 수 있다. [cite: 137, 139]

### 모델 아키텍처 / 방법론

#### 1. Tuscan Intra-Class
[cite_start]기존의 Tuscan Class-Only 방식이 테스트 클래스 간의 순서만 바꿨다면, 이 기법은 클래스 내부의 테스트 순서도 체계적으로 변경한다. [cite: 62]
- **방법**: 먼저 Tuscan squares를 이용해 테스트 클래스들의 순열을 생성한다. [cite_start]그 후, 각 테스트 클래스 내부에서도 Tuscan squares를 적용해 테스트 메소드들의 순열을 생성한다. [cite: 241, 242]
- [cite_start]**장점**: 같은 클래스 내부에 있는 Polluter/Victim 관계를 탐지할 수 있다. [cite: 254]

#### 2. Tuscan Inter-Class
[cite_start]모든 테스트(다른 클래스에 속한 테스트 포함)가 서로 바로 다음에 실행되는 경우(Cross-class test pairs)를 커버한다. [cite: 64, 326]
- **방법**: JUnit 등의 제약으로 인해 다른 클래스의 테스트를 섞어서 실행할 수는 없다. [cite_start]따라서 테스트 클래스 $A$와 $B$가 인접했을 때, $A$의 마지막 테스트와 $B$의 첫 번째 테스트가 되는 모든 조합을 시도한다. [cite: 327, 330]
- [cite_start]**특징**: 이론적으로 모든 OD 테스트를 탐지할 수 있지만, 생성되는 테스트 순서의 수가 매우 많다(수십만~수백만 개). [cite: 75, 537]

#### 3. Target Pairs
[cite_start]모든 쌍을 다 해보는 대신, 공유 상태(주로 static 필드)를 건드리는 테스트 쌍만 선별하여 커버한다. [cite: 66, 69]
- [cite_start]**정적 분석**: 바이트코드에서 `getstatic`이나 `putstatic`을 사용하는 테스트를 분석하여 공통된 static 필드를 접근하는 테스트 쌍을 식별한다. [cite: 361, 365]
- [cite_start]**알고리즘**: 식별된 "Target Pairs"를 커버하기 위해 탐욕적(Greedy) 알고리즘을 사용하여 테스트 순서를 생성한다. [cite: 372]

### 실험 결과

#### 주요 데이터셋 및 설정
- **데이터셋**: 47개 오픈 소스 Java 프로젝트 모듈에서 수집된 289개의 알려진 OD 테스트. 
- **비교 대상**: 기존 기법(Tuscan Class-Only) 및 제안된 3가지 기법. 

#### 핵심 성능 지표 (Table 2 요약)
- [cite_start]**Tuscan Class-Only (Baseline)**: 평균 94.0개의 순서 생성, OD 테스트의 36.0% 탐지. 
- **Tuscan Intra-Class**: 평균 104.7개의 순서 생성, OD 테스트의 **97.2% 탐지**. 가장 효율적임. 
- **Tuscan Inter-Class**: 평균 769,148.3개의 순서 생성, OD 테스트의 **100% 탐지**. 비용이 매우 높음.
- **Target Pairs**: 평균 4,167.3개의 순서 생성, OD 테스트의 89.8% 탐지. [cite_start]예상보다 효율이 낮음. [cite: 588, 602]

#### 분석 결과
- **비용 효율성**: Tuscan Intra-Class가 탐지 시간 대비 효율이 가장 좋았다. (평균 2,398초 당 1개 탐지) [cite_start][cite: 619]
- [cite_start]**Target Pairs의 한계**: 모든 OD 테스트가 static 필드만을 통해 공유 상태를 가지는 것은 아니며, static 필드를 공유한다고 해서 반드시 OD 관계인 것은 아니기 때문에 효율이 떨어졌다. [cite: 76, 603]
- **최소 순서(Minimal Orders)**: 실제로는 각 기법이 생성한 수많은 순서 중 평균 3.3개 내외의 특정 순서만 실행해도 모든 OD 테스트를 찾을 수 있었다. [cite_start]이는 순서 우선순위화(Prioritization)의 중요성을 시사한다. [cite: 633]

### 결론
본 연구는 OD 테스트 탐지를 위해 Tuscan squares 기반의 체계적인 테스트 순서 생성 기법을 제안했다. [cite_start]실험 결과 **Tuscan Intra-Class** 기법이 적은 수의 테스트 순서(약 105개)로 대부분의 OD 테스트(97.2%)를 탐지하여 가장 실용적인 것으로 나타났다. [cite: 77] [cite_start]또한, 모든 OD 테스트를 탐지하기 위해 필요한 최소한의 순서는 매우 적다는 것을 발견하여, 향후 효율적인 테스트 순서 선택 및 우선순위화 연구가 필요함을 보였다. [cite: 637, 691]