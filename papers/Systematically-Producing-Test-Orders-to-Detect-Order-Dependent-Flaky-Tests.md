---
title: "Systematically Producing Test Orders to Detect Order-Dependent Flaky Tests"
date: "2023-05-03"
description: "Tuscan squares를 기반으로 테스트 순서 쌍(pair)을 체계적으로 커버하여 순서 의존적(Order-Dependent) Flaky Test를 효율적으로 탐지하는 세 가지 새로운 기법 제안"
keywords: ["flaky test detection", "order-dependent flaky test"]
tags: ["Flaky Test Detection", "Order-Dependent Flaky Test", "Software Testing", "Tuscan Squares"]
authors: ["Chengpeng Li", "M. Mahdi Khosravi", "Wing Lam", "August Shi"]
---

## 논문 정보
- **제목**: Systematically Producing Test Orders to Detect Order-Dependent Flaky Tests
- **저자**: Chengpeng Li (The University of Texas at Austin), M. Mahdi Khosravi (Middle East Technical University), Wing Lam (George Mason University), August Shi (The University of Texas at Austin)
- **학회/저널**: Proceedings of the 32nd ACM SIGSOFT International Symposium on Software Testing and Analysis (ISSTA '23)
- **발행일**: 2023-05-03 (Accepted date)
- **DOI**: https://doi.org/10.1145/3597926.3598083
- **주요 연구 내용**: 기존의 무작위 순서 변경이나 테스트 '클래스' 단위 페어링의 한계를 극복하기 위해, Tuscan squares를 활용하여 테스트 '메서드' 단위의 페어를 체계적으로 생성하는 세 가지 기법 (Tuscan Intra-Class, Tuscan Inter-Class, Target Pairs)을 제안함. 이 기법들은 테스트 클래스 내 페어(intra-class)와 클래스 간 페어(cross-class)를 커버함.
- **주요 결과 및 결론**: 47개 프로젝트의 289개 OD 테스트 평가 결과, 'Tuscan Intra-Class' 기법이 평균 104.7개의 테스트 순서로 97.2%의 OD 테스트를 탐지하여, 기존 기법(36.0% 탐지) 대비 비용 대비 효율성이 가장 높았음. 'Tuscan Inter-Class'는 100% 탐지하지만 비용이 매우 높았음.
- **기여점**: (1) 테스트 페어를 체계적으로 커버하는 세 가지 새로운 OD 테스트 탐지 기법 제안. (2) 289개 OD 테스트에 대한 평가를 통해 'Tuscan Intra-Class'가 가장 비용 효율적임을 입증. (3) 실제 OD 탐지에 필요한 최소 순서 집합이 매우 작음을 보여(평균 < 4), 향후 테스트 순서 우선순위화 연구의 필요성을 제시함.
<!--truncate-->
## 요약
### 초록
소프트웨어 테스팅은 동일한 코드 버전에서도 통과와 실패를 반복하는 'Flaky Test'로 인해 어려움을 겪는다. '순서 의존적 테스트'(OD test)는 실행 순서에 따라 결과가 달라지는 Flaky Test의 한 유형이다. 기존 연구는 무작위 순서 변경에 의존하거나(탐지 보장 없음), 테스트 클래스 간의 관계만 고려하는 체계적 접근법을 사용했다(모든 테스트 관계 포착 실패). 본 연구는 Tuscan squares에 기반하여 테스트 순서를 더 체계적으로 생성하는 세 가지 새로운 기법을 제안한다. 이 기법들은 테스트 클래스 제약 조건을 준수하면서 최소한의 테스트 순서로 테스트 페어(pair)를 커버한다. 또한, 공유 상태(예: static 필드)를 갖는 특정 테스트 페어만 커버하는 'Target Pairs' 기법도 개발했다. 47개 오픈소스 프로젝트의 289개 OD 테스트 평가 결과, 가장 비용 효율적인 기법(Tuscan Intra-Class)은 평균 104.7개의 테스트 순서로 97.2%의 OD 테스트를 탐지했다.

### 서론
Flaky Test는 개발자에게 혼란을 주며, 이 중 '순서 의존적 테스트'(OD test)가 상당 부분을 차지한다. OD test는 이전 테스트가 공유 상태(shared state)를 수정한 후 초기화하지 않아, 다음 테스트가 예기치 않은 상태에서 실행되어 실패하는 경우 발생한다. 기존의 무작위 순서(random order) 생성 방식은 모든 OD test 탐지를 보장하지 못한다. Wei et al.이 제안한 Tuscan squares 기반의 체계적 접근법(본 논문에서 'Tuscan Class-Only'로 명명)은 테스트 '클래스' 단위의 페어만 커버하여, 클래스 내부의 테스트 페어(intra-class)나 다른 클래스의 특정 테스트 간 페어(cross-class)를 놓치는 한계가 있었다.

### 배경
- **OD Test 유형**: OD test는 'Victim'(오염원(Polluter) 테스트가 먼저 실행되면 실패)과 'Brittle'(상태 설정자(State Setter) 테스트가 먼저 실행되어야만 통과)로 나뉜다. 'Cleaner' 테스트는 오염원과 Victim 사이에 실행되어 오염된 상태를 정리, Victim이 통과하게 만들 수 있다.
- **Tuscan Squares**: N개의 항목에 대해, 모든 순서쌍 (a, b)가 연속적으로 나타나도록 하는 N (또는 N+1)개의 순열 집합.
- **Tuscan Class-Only (기존 연구)**: Tuscan squares를 테스트 '클래스'에 적용. 클래스 A와 B가 있다면, A->B 순서와 B->A 순서를 생성. (논문의 Figure 2 참고)
- **한계**: (1) Polluter와 Victim이 동일 클래스 내부에 있으면(intra-class) 탐지 불가. (2) 클래스 간 의존성(cross-class)이 있어도, Cleaner가 사이에 끼어 있으면(예: Polluter(A), Cleaner(B), Victim(B)) 탐지 불가.

### 모델 아키텍처 / 방법론
본 논문은 기존 'Tuscan Class-Only'를 확장한 세 가지 기법을 제안한다.

- **1. Tuscan Intra-Class**:
    - **핵심 구조**: Tuscan squares를 (1) 테스트 클래스 간 순서와 (2) 각 클래스 *내부*의 테스트 순서 모두에 적용.
    - **목표**: 모든 '테스트 클래스 페어'와 모든 '클래스 내부 테스트 페어(intra-class test pairs)'를 커버.
    - **장점**: 기존 방식이 놓치던 동일 클래스 내의 Polluter/Victim 관계(예: Figure 3의 t2->t1)를 탐지 가능.
    - **한계**: 여전히 복잡한 cross-class 의존성(Cleaner가 포함된 경우, 예: Figure 3의 t6)은 탐지 보장 못 함.

- **2. Tuscan Inter-Class**:
    - **핵심 구조**: 'Tuscan Intra-Class'를 확장하여, '클래스 간 테스트 페어(cross-class test pairs)'까지 *모두* 커버.
    - **작동**: 인접한 두 클래스(A, B)의 *모든* 테스트 순열 조합을 탐색. (예: A의 마지막 테스트와 B의 첫 테스트가 페어를 이루도록 함. Figure 4 참고)
    - **장점**: 모든 테스트가 다른 모든 테스트 직전/직후에 실행되는 순서를 생성하므로, Cleaner를 포함한 *모든* 유형의 OD test(단일 의존성) 탐지를 이론적으로 보장.
    - **단점**: 생성해야 하는 테스트 순서의 수가 기하급수적으로 증가함 (평균 76만 개, 최대 2,400만 개).

- **3. Target Pairs**:
    - **핵심 구조**: 모든 페어를 커버하는 대신, '공유 상태'를 갖는 페어만 타겟팅하여 커버하는 그리디(greedy) 알고리즘. (Figure 5 알고리즘 참고)
    - **대상 선정**: `getstatic`/`putstatic` 바이트코드 분석을 통해, 동일한 'static 필드'에 접근하는 테스트들을 페어로 구성.
    - **알고리즘**:
        1. 커버되지 않은 cross-class 페어에 가장 많이 포함된 테스트를 선택.
        2. 해당 테스트를 클래스의 경계(처음/마지막)에 배치.
        3. 다른 cross-class 페어를 커버하도록 좌/우로 테스트 클래스를 확장.
        4. 클래스 내부 테스트는 intra-class 페어를 커버하도록 배치.
        5. 모든 타겟 페어가 커버될 때까지 반복.
    - **목표**: 'Tuscan Inter-Class'의 비용 문제를 해결하면서 높은 탐지율 유지.

### 실험 결과
- **주요 데이터셋**: 47개 Java Maven 모듈의 289개 알려진 OD 테스트.
- **핵심 성능 지표**:
    - **RQ1 (테스트 순서 수)**:
        - Tuscan Class-Only (Baseline): 평균 94.0개
        - **Tuscan Intra-Class**: 평균 104.7개 (Baseline과 유사)
        - Target Pairs: 평균 4,167.3개
        - Tuscan Inter-Class: 평균 769,148.3개 (비용 매우 높음)
    - **RQ2 (OD 테스트 탐지율)**:
        - Tuscan Class-Only (Baseline): 36.0%
        - **Tuscan Intra-Class**: 97.2%
        - Target Pairs: 89.8% (Static 필드 외의 공유 상태를 놓침)
        - Tuscan Inter-Class: 100.0%
    - **RQ3 (비용 효율성 - 탐지 시간/OD test)**:
        - **Tuscan Intra-Class**: 2,398초 (가장 효율적)
        - Tuscan Class-Only: 4,634초
        - Target Pairs: 177,518초
        - Tuscan Inter-Class: 16,112,163초 (가장 비효율적)
- **비교 결과 (RQ4)**:
    - 모든 기법에서, 알려진 OD 테스트를 모두 탐지하는 데 필요한 '최소 테스트 순서'의 수는 평균 4개 미만으로 매우 적었음 (Table 2의 'min.' 컬럼 참고).
    - 이는 'Tuscan Inter-Class'가 생성한 76만 개의 순서 중 대부분이 실제 탐지에는 불필요했음을 의미함.

### 결론
본 연구는 OD 테스트 탐지를 위해 기존의 '클래스 단위' 페어링을 넘어 '메서드 단위' 페어링(intra-class, cross-class)을 체계적으로 커버하는 세 가지 기법을 제안했다.

실험 결과, **'Tuscan Intra-Class'** 기법이 기존 기법(Tuscan Class-Only)과 거의 동일한 비용(약 105개 순서)으로 탐지율을 36.0%에서 **97.2%**로 극적으로 향상시켜, 가장 실용적이고 비용 효율적인 접근법임을 입증했다. 'Target Pairs'는 static 필드에 의존하지 않는 OD test를 놓쳤으며, 'Tuscan Inter-Class'는 100% 탐지를 보장하지만 비현실적인 비용이 발생했다.

또한, 실제 탐지에 필요한 최소 순서 집합(평균 < 4)이 매우 작다는 발견은, 향후 비효율적인 전체 순서 실행 대신 '탐지 가능성이 높은 테스트 순서를 우선순위화(prioritization)'하는 연구가 중요함을 시사한다.