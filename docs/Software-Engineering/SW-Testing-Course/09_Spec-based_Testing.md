# 소프트웨어 테스팅 및 검증 — Week 9: 명세 기반 테스팅 (Specification-based Testing)

> **과목명:** 소프트웨어 테스팅 및 검증  
> **담당교수:** 이우진 (경북대학교 IT대학 컴퓨터학부, SW Testing 연구실)  
> **강의자료:** 2026_SWTesting9SpecbasedTesting

---

## 1. 테스트 케이스 생성 전략 (Test Case Generation Strategy)

### 1.1 Black-Box Testing vs White-Box Testing

|구분|Black-Box Testing|White-Box Testing|
|---|---|---|
|**별칭**|Functional Testing, Spec-based Testing|Structural Testing|
|**관점**|프로그램을 **블랙박스**로 간주|모듈 내부의 **실제 코드**를 들여다봄|
|**기반**|**시스템 명세(specification)**에 기반한 테스트 케이스|**프로그램 구조**에 따른 테스트 케이스 도출|
|**목표**|유닛이 명세에 명시된 요구사항을 충족하는지 확인|모든 문장, 모든 조건, 모든 결정을 실행 (모든 경로 조합은 아님)|
|**시작 시점**|소프트웨어 프로세스 **초기**부터 테스트 계획 가능|코드 완성 후|

### 1.2 Equivalence Partitioning 개념

- 입력 데이터와 출력 결과는 관련된 멤버들의 그룹인 **동치 클래스(equivalence class)**로 분류됨
- 같은 클래스에 속한 멤버에 대해 프로그램은 **동일한 방식으로 동작**
- 테스트 케이스는 **각 파티션에서** 선택해야 함
- 입력: Valid inputs + Invalid inputs → System → Outputs

### 1.3 Binary Search 예제

프로그램 흐름 그래프(Program Flow Graph)에서 **독립 경로(Independent Paths)**를 식별하여 테스트 케이스를 도출한다.

---

## 2. Specification과 Program, Test Case의 관계

Specification(기대)과 Program(구현)은 정확히 일치하지 않는다. 이를 벤 다이어그램으로 표현하면:

|Scope|설명|
|:-:|---|
|**1**|기대됨 + 프로그래밍됨 + 테스트됨 (이상적)|
|**2, 5**|기대되었으나 테스트되지 않음|
|**6**|프로그래밍되었으나 기대되지 않았고 테스트되지 않음|
|**4**|기대됨 + 테스트됨이나 프로그래밍되지 않음|
|**3**|프로그래밍됨 + 테스트됨이나 기대되지 않음|
|**7**|테스트되었으나 기대도 프로그래밍도 아님|
|**8**|어디에도 해당하지 않음|

---

## 3. IEEE 표준 결함 유형 (IEEE Std. Fault Types)

### 3.1 Input/Output Faults & Logic Faults

**Input 결함:** 올바른 입력 거부, 잘못된 입력 수용, 설명/매개변수 누락·오류

**Output 결함:** 잘못된 형식/결과, 시점 오류(too early/late), 불완전·누락·가짜 결과, 맞춤법·외형 문제

**Logic 결함:** 누락·중복 케이스, 극단 조건 무시, 잘못된 해석·조건, 잘못된 변수 테스트, 잘못된 루프 반복, 잘못된 연산자

### 3.2 Computation Faults & Interface Faults & Data Faults

**Computation:** 잘못된 알고리즘/연산/피연산자, 괄호 오류, 정밀도 부족, 잘못된 내장 함수

**Interface:** 잘못된 인터럽트 처리, I/O 타이밍, 잘못된 프로시저 호출, 매개변수 불일치, 타입 비호환

**Data:** 잘못된 초기화/저장/접근, 잘못된 플래그/인덱스/변수/참조, 스케일링/단위 오류, Off-by-one, 일관성 없는 데이터

---

## 4. 명세 기반 테스팅 (Specification-based Testing)

Black-box Testing, Functional Testing이라고도 불린다.

**3가지 접근법:**

1. Boundary Value Testing (경계값 테스팅)
2. Equivalence Class Testing (동치 클래스 테스팅)
3. Decision Table-based Testing (결정 테이블 기반 테스팅)

**장점:**

- 구현이 변경되어도 **Test Case는 변경되지 않음**
- 프로그램 구현과 **동시에** Test Case 개발 가능

---

## 5. Boundary Value Testing (경계값 테스팅)

### 5.1 Normal Boundary Value Testing

입력값의 **경계값**을 중심으로 테스트를 수행한다. 입력 도메인의 경계값에서 오류가 많이 발생하기 때문이다.

**테스트 값:** Xmin, Xmin+1, Xnom, Xmax-1, Xmax

- 입력 변수들을 **독립적으로** 다룸 (Independent, bounded physical quantities)
- 한 변수만 경계값을 취하고 나머지는 공칭값(nominal)
- 변수 n개일 때 테스트 케이스 수: **4n + 1**

### 5.2 Robust Boundary Value Testing

Normal BVT에 **유효 범위 바깥 값**을 추가한다.

**테스트 값:** Xmin-1, Xmin, Xmin+1, Xnom, Xmax-1, Xmax, Xmax+1

- 변수 n개일 때 테스트 케이스 수: **6n + 1**

### 5.3 Worst-Case Testing

입력 도메인의 변수들 간의 **의존성을 고려**한다.

|유형|설명|테스트 케이스 수 (변수 n개)|
|---|---|:-:|
|**Worst-case**|모든 변수의 경계값 조합 (유효 범위만)|**5^n**|
|**Robust worst-case**|모든 변수의 경계값 조합 (유효+무효 범위)|**7^n**|

---

## 6. Equivalence Class Testing (동치 클래스 테스팅)

### 6.1 동기

- **완전한 테스팅**의 감각을 얻기 위함
- **중복을 회피**하기 위함
- 동치 클래스: ∪b = D (전체 도메인), bi ∩ bj = Φ (클래스 간 겹침 없음)
- 같은 동치 클래스의 입력 원소들은 동일 기능을 수행하므로 **대표값만 테스트**

### 6.2 Traditional Equivalence Class Testing

유효(valid)와 무효(invalid) 값으로 동치 클래스를 분류한다.

예: x1 = [a, b], x2 = [c, d]일 때 Valid values / Invalid values 영역을 구분하여 각 영역에서 대표 테스트 포인트 선택

### 6.3 Weak/Strong Normal Equivalence

|유형|특징|변수 간 관계|
|---|---|---|
|**Weak Normal**|각 동치 클래스에서 **하나의 값**만 선택|변수 **독립** 가정|
|**Strong Normal**|동치 클래스의 **모든 조합** (Cartesian product)|변수 간 **의존성** 고려|

- Weak: 테스트 케이스 수 = max(각 변수의 클래스 수)
- Strong: 테스트 케이스 수 = 각 변수 클래스 수의 곱

### 6.4 Weak/Strong Robust Equivalence

유효 입력과 **무효 입력** 모두를 고려한다.

|유형|특징|
|---|---|
|**Weak Robust**|독립 변수(weak) + 유효·무효 값 모두 고려|
|**Strong Robust**|의존 변수(strong) + 유효·무효 값 모두 고려|

---

## 7. Decision Table-based Testing (결정 테이블 기반 테스팅)

### 7.1 개요

**조건(Conditions)**과 **행동(Actions)**의 조합을 테이블로 정리하고, 각 수행 조건별로 Test Case를 생성한다.

### 7.2 삼각형 문제 예제

**조건:** c1(a < b + c?), c2(b < a + c?), c3(c < a + b?), c4(a = b?), c5(a = c?), c6(b = c?)

**행동:** a1(Not a triangle), a2(Scalene), a3(Isosceles), a4(Equilateral), a5(Impossible)

결정 테이블의 각 열(rule)이 하나의 Test Case에 대응하며, 조건의 T/F 조합에 따라 수행할 행동이 결정된다. 삼각형 문제에서는 11개의 Test Case(DT1~DT11)가 도출된다.

---

## 8. Testing Effort 비교

Triangle Problem과 NextDate Problem에서 각 기법별 테스트 케이스 수를 비교하면:

- **Robust Worst-case**와 **Worst-case**는 테스트 케이스 수가 매우 많음 (7^n, 5^n)
- **BVA**와 **Equivalence Class**는 상대적으로 적음
- **Decision Table**은 가장 적은 수의 테스트 케이스로 논리적 커버리지 제공

---

## 9. 명세 기반 테스팅 기법 선택 가이드라인

기법 선택을 위한 4가지 질문:

|기준|질문|
|---|---|
|**c1**|변수가 물리적(physical/analog)인가 논리적(logical)인가?|
|**c2**|변수들이 독립적인가?|
|**c3**|단일 결함 가정(single-fault assumption)인가?|
|**c4**|예외 처리 상황을 고려하는가?|

|c1|c2|c3|c4|적합한 기법|
|:-:|:-:|:-:|:-:|---|
|P|Y|Y|Y|Robustness testing|
|P|Y|Y|N|Boundary value analysis|
|P|Y|N|—|Worst-case testing / Robust worst case|
|P|N|Y/N|Y/N|Weak/Strong robust equivalence class|
|L|Y|Y|Y/N|Weak normal/robust equivalence class|
|L|Y|N|—|Strong normal equivalence class|
|L|N|—|—|Decision table|

---

## 핵심 키워드 정리

`Black-Box Testing` `White-Box Testing` `Equivalence Partitioning` `Boundary Value Testing` `Normal BVT` `Robust BVT` `Worst-Case Testing` `Equivalence Class Testing` `Weak/Strong Normal` `Weak/Strong Robust` `Decision Table Testing` `IEEE Fault Types` `Input/Output Faults` `Logic Faults` `Computation Faults` `Interface Faults` `Data Faults` `Test Case 선택 가이드라인`