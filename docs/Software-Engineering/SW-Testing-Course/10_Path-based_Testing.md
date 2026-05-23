# 소프트웨어 테스팅 및 검증 — Week 10: 구조적 테스팅 (Path-based & Dataflow Testing)

> **과목명:** 소프트웨어 테스팅 및 검증  
> **담당교수:** 이우진 (경북대학교 IT대학 컴퓨터학부, SW Testing 연구실)  
> **강의자료:** 2026_SWTesting10PathbasedTesting  
> **참고문헌:** Ammann & Offutt, _Introduction to Software Testing_, Ch. 2

---

## Part A. 경로 기반 테스팅 (Path-based Testing)

---

## 1. Path-based Testing 개요

**프로세스:** Program Unit → Draw a **Control Flow Graph (CFG)** → Path Selection Criteria에 따라 **Select Paths** → **Generate Test Input Data** → 선택된 경로가 실현 가능(feasible)한지 확인 → (No → 경로 재선택) → (Yes) → **Test Input Data** 출력

---

## 2. 구조적 프로그래밍 기법

구조적 프로그래밍은 **단순성**을 지향하며, Bohm and Jacopini에 따르면 3가지 구조만으로 모든 프로그램을 생성할 수 있다:

- **순차 (Sequence)**
- **선택 (Selection)** — if, if-else, switch
- **반복 (Repetition)** — while, do-while, for

**구조적 프로그램 생성 규칙:**

1. 가장 단순한 activity diagram에서 시작
2. **Stacking rule:** 하나의 action state를 두 개의 순차 action state로 대체
3. **Nesting rule:** 하나의 action state를 제어문(if, if-else, switch, while, do-while, for)으로 대체
4. Rule 2, 3을 원하는 만큼, 원하는 순서로 적용 가능

---

## 3. 제어 흐름 그래프 (Control Flow Graph, CFG)

### 3.1 정의

CFG는 제어 구조를 기술하여 메서드의 **모든 실행 경로**를 모델링한다.

|요소|설명|
|---|---|
|**Node**|문장 또는 문장의 시퀀스 (Basic Block)|
|**Edge**|제어의 전이 (Transfer of control)|
|**Basic Block**|첫 번째 문장이 실행되면 모든 문장이 실행되는 시퀀스 (분기 없음)|

CFG에 추가 정보를 주석으로 달 수 있다: Branch Predicates, Defs/Uses

### 3.2 주요 제어 구조의 CFG 표현

|구조|특징|
|---|---|
|**if**|2개 분기 (true/false)|
|**if-else**|2개 분기 + 합류|
|**if-return**|return 노드는 별도로 구분, 이후 노드와 edge 없음|
|**while / for**|루프백 edge 존재|
|**switch**|다중 분기|
|**try-catch**|예외 발생 시 catch 블록으로 분기|

---

## 4. 커버리지 기준 (Coverage Criteria)

### 4.1 그래프 기반 커버리지

|커버리지|요구사항|설명|
|---|---|---|
|**Node Coverage** (Statement)|모든 **노드**를 최소 1회 방문|문장 커버리지와 동일|
|**Edge Coverage** (Branch/Decision)|모든 **엣지**를 최소 1회 순회|분기 커버리지와 동일, Node Coverage를 포함(subsume)|
|**Edge-Pair Coverage**|모든 **길이 2의 엣지 쌍**을 최소 1회 순회|Edge Coverage를 포함|
|**Complete Path Coverage**|**모든 경로**를 순회|루프 존재 시 경로 수가 무한 → 비현실적|

**포함 관계 (Subsumption):** Complete Path Coverage ⊃ Edge-Pair Coverage ⊃ Edge Coverage ⊃ Node Coverage

### 4.2 Test Requirements (TR)와 Test Paths

- **TR:** 커버리지 기준을 만족시키기 위해 순회해야 하는 그래프 요소 집합
- **Test Path:** 시작 노드에서 종료 노드까지의 경로
- 하나의 Test Path가 여러 TR을 **tour** 할 수 있음

### 4.3 논리 기반 커버리지

|커버리지|설명|
|---|---|
|**Decision Coverage**|모든 결정(decision)의 T/F 결과를 각각 최소 1회 실행|
|**Condition Coverage**|결정 내 각 개별 조건(condition)의 T/F를 각각 최소 1회 실행|
|**C/DC (Condition/Decision Coverage)**|Decision Coverage + Condition Coverage 동시 만족|
|**MC/DC (Modified Condition/Decision Coverage)**|각 조건이 결정 결과에 **독립적으로 영향**을 미침을 보여줌|

### 4.4 MC/DC 상세

MC/DC는 다음을 모두 만족해야 한다:

- 프로그램의 모든 진입/출구 지점을 최소 1회 호출
- 결정 내 모든 조건이 가능한 모든 결과를 최소 1회 취함
- 각 조건이 결정 출력에 **독립적으로 영향**을 미침을 보여줌
- 한 조건만 변경하고 다른 모든 조건을 고정했을 때 결정 결과가 변경됨을 보여줌

**MC/DC 예제 — A && B:**

|Index|A|B|A && B|A 변경 쌍|B 변경 쌍|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|T|T|T|3|2|
|2|T|F|F|—|1|
|3|F|T|F|1|—|
|4|F|F|F|—|—|

(T,T)은 unique T이므로 반드시 포함 → 최소 테스트 셋: {1, 2, 3}

**MC/DC 예제 — A || B:**

|Index|A|B|A \| B|A 변경 쌍|B 변경 쌍|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|T|T|T|—|—|
|2|T|F|T|4|—|
|3|F|T|T|—|4|
|4|F|F|F|2|3|

(F,F)은 unique F이므로 반드시 포함 → 최소 테스트 셋: {2, 3, 4}

### 4.5 윤년 계산 함수 실습 예제

`isLeap(int year)` 함수에서 `(year%4 == 0 && year%100 != 0) || (year%400 == 0)` 조건에 대해 CFG를 그리고 Decision Coverage, C/DC Coverage, MC/DC Coverage의 Test Path를 각각 생성하는 실습

---

## Part B. 데이터 흐름 테스팅 (Dataflow Testing)

---

## 5. Data Flow Coverage

### 5.1 def와 use

|개념|정의|예시|
|---|---|---|
|**def**|변수에 값이 **저장(store)**되는 위치|대입문 좌변, 입력 매개변수, 형식 매개변수|
|**use**|변수의 값이 **접근(access)**되는 위치|대입문 우변, 조건식, 실제 매개변수, 반환문|

### 5.2 DU Pair와 DU Path

- **DU Pair:** 변수 v에 대해 (def 노드, use 노드)의 쌍
- **DU Path:** def 노드에서 use 노드까지의 **def-clear** 경로 (중간에 같은 변수의 재정의 없음)
- **def-clear path:** 경로 상에서 해당 변수가 다시 정의되지 않는 경로

### 5.3 데이터 흐름 커버리지 기준

|커버리지|요구사항|
|---|---|
|**All-Defs Coverage**|모든 변수의 모든 def에 대해, 최소 하나의 use까지의 DU Path를 포함|
|**All-Uses Coverage**|모든 변수의 모든 DU Pair에 대해, 최소 하나의 DU Path를 포함|
|**All-DU-Paths Coverage**|모든 변수의 모든 DU Pair에 대해, **모든** def-clear DU Path를 포함|

**포함 관계:** All-DU-Paths ⊃ All-Uses ⊃ All-Defs

### 5.4 computeStats() 예제

Stats 프로그램의 CFG(8개 노드)에 대해 각 노드별 def/use를 식별하고, 변수별 DU Pair와 DU Path를 도출하여 테스트 경로를 생성한다. 이 과정에서 length가 0인 배열을 사용한 DU Path가 index out of bounds 오류를 발견하여 **실제 결함이 발견**되는 사례를 보여준다.

---

## 6. 프로그램 슬라이싱 (Program Slicing)

### 6.1 정의

프로그램 슬라이스(program slice)란 특정 관심 지점(slice criterion)에서의 값에 영향을 미칠 수 있는 **프로그램 문장들의 집합**을 계산하는 것이다.

### 6.2 응용 분야

- **디버깅:** 오류 소스를 더 쉽게 찾기
- **소프트웨어 유지보수:** 변경 영향 분석
- **최적화:** 불필요 코드 제거
- **프로그램 분석:** 프로그램 이해
- **정보 흐름 제어:** 보안 분석

### 6.3 Slice 표기법

**S(V, n)** — 문장 n에서 변수 집합 V에 대한 **정적 역방향 슬라이스(static backward slice)**

P 내의 모든 문장 조각 중에서 노드 n에서 V의 값에 기여하는 것들의 집합이다.

예: locks 변수에 대한 슬라이스

- S(locks, 13) = {13} — 13번 문장만 locks에 영향
- S(locks, 14) = {13, 14, 19, 20} — 14번 문장의 locks 값에 13, 19번의 입력과 20번의 루프가 영향
- S(locks, 16) = {13, 14, 15, 16, 19, 20} — totalLocks 계산에 locks 입력과 루프 전체가 영향

### 6.4 Slice-Based Testing

슬라이스를 활용하면 전체 프로그램이 아닌 관심 변수에 영향을 미치는 **문장 부분집합만** 대상으로 테스트할 수 있어 효율적이다.

---

# \[부록\]데이터 흐름 테스팅 실습 — 평균 구하기 예제

## A. 핵심 개념 정리

데이터 흐름 테스팅은 "변수가 **정의(저장)** 된 값이 **사용(읽기)** 되는 지점까지 올바르게 흘러가는가"를 검사하는 기법이다.

### A-1. Def와 Use

|용어|의미|예시|
|---|---|---|
|**Def** (Definition, 정의)|변수에 값이 **저장**되는 지점|`total = 0`, `scanf(&data)`, `count++`|
|**Use** (Use, 사용)|변수 값을 **읽는** 지점|`total += data`, `if(count != 0)`, `printf(total)`|

### A-2. Use의 두 종류 (표기법이 다름)

|종류|의미|발생 위치|표기|
|---|---|---|---|
|**c-use** (computation use)|계산·대입·출력 등에서 사용|**노드** 내부|노드 번호로 표기 → `(def, use노드)`|
|**p-use** (predicate use)|`if` / `while` **조건식**에서 사용|**분기 엣지**|갈라지는 **양쪽 엣지**에 표기 → `(def, (n,m))`|

> p-use는 조건의 참/거짓 양쪽 결과가 모두 영향을 받으므로, **두 출력 엣지 모두**에 대해 DU Pair를 만든다.

### A-3. DU Pair

- **정의:** `(def 위치, use 위치)` 쌍.
- **성립 조건:** 둘 사이에 **def-clear path** — 같은 변수가 **중간에서 다시 정의되지 않는 경로** — 가 적어도 하나 존재해야 한다. (중간에 재정의되면 값이 "덮어쓰기"되어 데이터가 흐르지 않음)

### A-4. 같은 노드에 Def와 Use가 함께 있을 때 (이 예제의 핵심 규칙)

강의 슬라이드 "Definition of Def-Use Pair" 기준:

| 상황                                   | DU Pair 성립 여부           |
| ------------------------------------ | ----------------------- |
| use가 def보다 **먼저** 나온다 + 그것이 **루프 안** | 성립 (다음 반복에서 def→use 도달) |
| def가 use보다 **먼저** 나온다 (같은 노드)        | 같은 노드 안에서는 pair 아님      |
| 경로가 def-clear가 아님 (중간 재정의)           | 성립 안 함                  |

> 본 예제의 `total += data`(total 읽고 → 다시 저장), `count++`(count 읽고 → 다시 저장)이 정확히 "use 먼저 + 루프 안" 경우다.

### A-5. DU Path

특정 DU Pair를 실제로 잇는 **def-clear simple 경로**. 하나의 DU Pair에 대해 DU Path가 **여러 개** 있을 수 있다.

---

## B. 대상 코드와 CFG

```c
void main() {
    int data, total, count;
    double avg;

    total = 0;                          // (1)
    count = 0;                          // (1)
    while(1) {                          // (2)
        scanf("%d", &data);             // (2)
        if ( data == -1 ) break;        // (3)
        total += data;                  // (4)
        count++;                        // (4)
    }
    if ( count != 0 )                   // (5)
        avg = (double) total / count;   // (6)
    else
        avg = 0;                        // (7)

    printf("%d %lf\n", total, avg);     // (8)
}
```

### B-1. 노드 매핑 (강의 CFG 기준, 노드 8개)

|노드|문장|비고|
|---|---|---|
|1|`total = 0; count = 0;`|초기화|
|2|`while(1)` → `scanf("%d", &data);`|루프 진입 + 입력|
|3|`if (data == -1)`|조건 (break 분기)|
|4|`total += data; count++;`|누적 (루프 본체)|
|5|`if (count != 0)`|조건 (0 나눗셈 방지)|
|6|`avg = (double) total / count;`|평균 계산|
|7|`avg = 0;`|예외 처리|
|8|`printf(... total, avg);`|출력|

### B-2. 엣지 (제어 흐름)

```
1 → 2
2 → 3
3 → 4   (data != -1, 루프 계속)
3 → 5   (data == -1, break)
4 → 2   (백 엣지: 루프 복귀)
5 → 6   (count != 0)
5 → 7   (count == 0)
6 → 8
7 → 8
```

> `int data, total, count; double avg;`는 **선언만** 하므로 def가 아니다. data의 첫 def는 노드 2(scanf), avg의 첫 def는 노드 6 또는 7이다. (avg를 `0.0`으로, data를 `0`으로 초기화하는 **Version 2**는 §F 참고.)

---

## C. 노드별 Def / Use 표

|노드|def|c-use (노드)|p-use (엣지)|
|---|---|---|---|
|1|total, count|–|–|
|2|data|–|–|
|3|–|–|**data** → (3,4), (3,5)|
|4|total, count|total, data, count|–|
|5|–|–|**count** → (5,6), (5,7)|
|6|avg|total, count|–|
|7|avg|–|–|
|8|–|total, avg|–|

**해설 포인트**

- **노드 4:** `total += data`와 `count++`는 변수를 **읽은 뒤 다시 저장**한다 → use(total, count, data)와 def(total, count)가 같은 노드에 공존.
- **노드 3, 5:** 조건문이므로 use가 노드가 아닌 **양쪽 엣지(p-use)** 에 붙는다.
- **노드 2:** `while(1)`은 항상 참이라 조건에 변수가 없다 → p-use 없음. 실제 루프 탈출은 노드 3의 `break`로 일어난다.

---

## D. 변수별 DU Pair

### D-1. data — def {2}

|DU Pair|종류|근거|
|---|---|---|
|(2, 4)|c-use|노드2 def → 노드4 `total += data`에서 읽음. 경로 2→3→4 def-clear|
|(2, (3,4))|p-use|노드3 조건의 참 분기|
|(2, (3,5))|p-use|노드3 조건의 거짓 분기|

### D-2. total — def {1, 4}

|DU Pair|근거|
|---|---|
|(1, 4)|첫 반복: 노드1 값을 노드4가 읽음|
|(1, 6)|루프를 한 번도 안 돌고(3→5→6) 노드1 값이 노드6 도달|
|(1, 8)|노드1 값이 출력 노드8 도달|
|(4, 4)|**루프**: 노드4 def → 백엣지 → 다음 반복 노드4 use (def가 use 뒤에 위치)|
|(4, 6)|노드4 def → 루프 탈출 후 노드6 use|
|(4, 8)|노드4 def → 노드8 use|

### D-3. count — def {1, 4}

|DU Pair|종류|근거|
|---|---|---|
|(1, 4)|c-use|첫 반복 `count++`가 노드1 값 사용|
|(1, 6)|c-use|노드1 값이 노드6 `total/count`에서 사용|
|(1, (5,6))|p-use|노드5 조건의 참 분기|
|(1, (5,7))|p-use|노드5 조건의 거짓 분기|
|(4, 4)|c-use|**루프**: 노드4 def → 다음 반복 노드4 use|
|(4, 6)|c-use|노드4 def → 노드6 use|
|(4, (5,6))|p-use|노드4 def → 노드5 조건|
|(4, (5,7))|p-use|노드4 def → 노드5 조건|

### D-4. avg — def {6, 7}

|DU Pair|근거|
|---|---|
|(6, 8)|노드6 def → 노드8 use|
|(7, 8)|노드7 def → 노드8 use|

> 노드 6과 7은 서로 **배타적 분기**이므로 각각 자기 경로로만 노드8에 도달한다.

---

## E. DU Pair별 DU Path

|변수|DU Pair|DU Path|
|---|---|---|
|**data**|(2, 4)|[2, 3, 4]|
||(2, (3,4))|[2, 3, 4]|
||(2, (3,5))|[2, 3, 5]|
|**total**|(1, 4)|[1, 2, 3, 4]|
||(1, 6)|[1, 2, 3, 5, 6]|
||(1, 8)|[1, 2, 3, 5, 6, 8] / [1, 2, 3, 5, 7, 8]|
||(4, 4)|[4, 2, 3, 4]|
||(4, 6)|[4, 2, 3, 5, 6]|
||(4, 8)|[4, 2, 3, 5, 6, 8] / [4, 2, 3, 5, 7, 8]|
|**count**|(1, 4)|[1, 2, 3, 4]|
||(1, 6)|[1, 2, 3, 5, 6]|
||(1, (5,6))|[1, 2, 3, 5, 6]|
||(1, (5,7))|[1, 2, 3, 5, 7]|
||(4, 4)|[4, 2, 3, 4]|
||(4, 6)|[4, 2, 3, 5, 6]|
||(4, (5,6))|[4, 2, 3, 5, 6]|
||(4, (5,7))|[4, 2, 3, 5, 7]|
|**avg**|(6, 8)|[6, 8]|
||(7, 8)|[7, 8]|

**경로 읽는 요령**

- `(4,4) → [4,2,3,4]` 처럼 **시작=끝**인 경로는 루프를 한 바퀴 도는 것: 노드4 def → 백엣지 4→2 → 다음 반복 노드4 use.
- total의 `(1,8)`, `(4,8)`은 도착지 노드8이 노드5에서 6/7로 갈라지므로 **def-clear 경로가 2개**다 (노드 6·7 모두 total을 재정의하지 않으므로 둘 다 유효).

---

## F. Version 2와의 비교

**Version 2**는 노드 1에서 `data = 0;`과 `avg = 0.0;`을 **추가로 초기화**한다.

|노드 1|Version 1|Version 2|
|---|---|---|
|def|total, count|total, count, **data, avg**|

겉보기엔 DU Pair가 늘어날 것 같지만, 실제로는 **DU Pair 집합이 동일**하다. 이유:

|추가 def|결과|까닭|
|---|---|---|
|data @ 노드1|DU Pair **없음** (dead)|노드2 `scanf`가 use 전에 data를 재정의 → def-clear path 없음|
|avg @ 노드1|DU Pair **없음** (dead)|노드8 가는 모든 경로가 노드6 또는 7을 거쳐 avg를 재정의 → def-clear path 없음|

> **교훈:** 어떤 def가 use에 도달하기 전에 항상 재정의된다면, 그 정의는 데이터 흐름상 **죽은 정의(dead definition)** 이며 DU Pair를 만들지 않는다. 초기화를 추가해도 데이터 흐름 커버리지 관점에서는 의미가 없을 수 있다.

---

## G. DU-Path 커버리지 기준 (Rapps–Weyuker 계층)

위에서 구한 DU Pair/Path는 아래 커버리지 기준을 적용하는 토대가 된다. 위로 갈수록 강한(엄격한) 기준이다.

```
All-Paths
   ⊇ All-DU-Paths
        ⊇ All-Uses
             ⊇ { All-C-Uses/Some-P-Uses , All-P-Uses/Some-C-Uses }
                  ⊇ All-Defs / All-P-Uses
                       ⊇ All-Edges
                            ⊇ All-Nodes
```

|기준|요구 사항|
|---|---|
|**All-Defs**|각 def가 **어떤 use 하나**에 도달하는 경로를 최소 1개 커버|
|**All-Uses**|각 def에서 **도달 가능한 모든 use**까지의 경로를 커버|
|**All-DU-Paths**|각 DU Pair의 **모든 (simple) DU Path**를 커버 (가장 강함)|
|(참고) **C-use / P-use**|계산 사용 / 조건 사용 구분에 따른 부분 기준|

---

## H. 키워드 요약

- **Def / Use** — 변수 값의 저장 지점 / 읽기 지점
- **c-use / p-use** — 계산 사용(노드) / 조건 사용(엣지, 양쪽)
- **def-clear path** — 중간에 같은 변수의 재정의가 없는 경로 (DU Pair 성립의 필수 조건)
- **DU Pair** — (def, use) 쌍; def-clear path 존재 시 성립
- **DU Path** — DU Pair를 잇는 def-clear simple 경로 (한 Pair에 여러 개 가능)
- **루프 내 def-after-use** — `total += data`, `count++` → 같은 노드 (4,4) 형태 Pair 발생
- **dead definition** — use 전에 항상 재정의되어 DU Pair를 못 만드는 정의 (Version 2의 data/avg @노드1)
- **Rapps–Weyuker 계층** — All-Paths ⊇ All-DU-Paths ⊇ All-Uses ⊇ … ⊇ All-Nodes

---

## 핵심 키워드 정리

`Control Flow Graph` `Node` `Edge` `Basic Block` `Node Coverage` `Edge Coverage` `Edge-Pair Coverage` `Decision Coverage` `Condition Coverage` `C/DC Coverage` `MC/DC Coverage` `Subsumption` `Test Requirement` `Test Path` `Dataflow Testing` `def` `use` `DU Pair` `DU Path` `def-clear path` `All-Defs` `All-Uses` `All-DU-Paths` `Program Slicing` `Slice Criterion` `Static Backward Slice`