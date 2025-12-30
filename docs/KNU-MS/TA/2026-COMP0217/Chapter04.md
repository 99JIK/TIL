## 1. Introduction and Algorithms
어떤 컴퓨팅 문제든 특정 순서로 일련의 동작을 실행함으로써 해결할 수 있다. Algorithm은 실행할 동작과 그 동작이 실행되는 순서를 포함하는 문제 해결 절차이다. 프로그램 내에서 문장(actions)이 실행되는 순서를 지정하는 것을 program control이라고 한다.

## 2. Pseudocode
Pseudocode는 엄격한 Java 문법 세부 사항을 걱정하지 않고 알고리즘을 개발할 수 있도록 돕는 비공식적인 언어이다. 이는 일상적인 영어와 유사하며, 프로그래밍 언어로 코드를 작성하기 전에 프로그램을 구상하는 데 도움을 준다. Pseudocode는 일반적으로 변수 선언이 아닌 실행 가능한 동작(입력, 출력, 계산 등)만을 묘사한다.

## 3. Control Structures
Sequential execution은 프로그램의 문장들이 작성된 순서대로 하나씩 실행되는 것을 의미한다. Transfer of control은 다음 실행할 문장이 순서상의 다음 문장이 아닐 수 있도록 지정하는 Java 문장들을 통해 발생한다. Bohm과 Jacopini는 goto 문장 없이 sequence structure, selection structure, repetition structure의 세 가지 제어 구조만으로 모든 프로그램을 작성할 수 있음을 증명했다.

### 3.1 Sequence Structure
컴퓨터는 별도의 지시가 없는 한 Java 문장들을 작성된 순서대로 실행한다. UML activity diagram은 action-state symbols(직사각형), diamonds(결정), small circles(초기 및 종료 상태) 등을 사용하여 제어 구조를 시각화한다.

![PDF p.6: Sequence structure activity diagram](img/Pasted%20image%2020251230165932.png)

### 3.2 Selection Statements
Java는 세 가지 유형의 selection statements를 제공한다.
* `if` statement: Single-selection statement로, 조건이 참이면 동작을 수행하고 거짓이면 무시한다.
* `if...else` statement: Double-selection statement로, 조건이 참일 때와 거짓일 때 서로 다른 동작을 수행한다.
* `switch` statement: Multiple-selection statement로, 표현식의 값에 따라 여러 동작 중 하나를 선택한다.

### 3.3 Repetition Statements
Repetition statements(looping statements)는 loop-continuation condition이 참인 동안 문장들을 반복적으로 수행한다.
* `while` 및 `for` 문은 body를 0회 이상 실행한다.
* `do...while` 문은 body를 1회 이상 실행한다.

## 4. if Single-Selection Statement
if 문은 조건이 참인지 거짓인지에 따라 흐름을 제어한다. Pseudocode로 '만약 학생의 점수가 60점 이상이라면 "`Passed`"를 출력하라'는 알고리즘은 Java의 `if` 문으로 구현된다.

![PDF p.10: if single-selection statement UML activity diagram](img/Pasted%20image%2020251230170035.png)

## 5. if...else Double-Selection Statement
`if...else` 문은 조건이 참일 때와 거짓일 때 각각 다른 경로를 실행한다.

![PDF p.11: if...else double-selection statement UML activity diagram](img/Pasted%20image%2020251230170053.png)

Conditional operator (?:)는 if...else 문을 축약하여 사용할 수 있는 삼항 연산자이다. ? 왼쪽의 피연산자는 boolean 표현식이며, 이 값이 참이면 두 번째 피연산자가, 거짓이면 세 번째 피연산자가 평가된다.

Nested if...else 문은 여러 조건을 테스트하기 위해 if...else 문 안에 또 다른 if...else 문을 배치하는 것이다. Java 컴파일러는 중괄호로 구분되지 않은 경우, else를 가장 가까운 if와 연결하는데 이를 dangling-else problem이라고 한다. 의도한 대로 중첩 제어문을 실행하기 위해서는 중괄호({})를 사용하여 블록을 명확히 해야 한다.

## 6. while Repetition Statement
while 문은 조건이 참인 동안 동작을 반복한다. 예를 들어, 3의 거듭제곱 중 100보다 큰 첫 번째 값을 찾는 알고리즘에 사용할 수 있다.

![PDF p.18: while repetition statement UML activity diagram]

## 7. Formulating Algorithms: Counter-Controlled Repetition
Counter-controlled repetition은 문장 집합이 실행될 횟수를 제어하기 위해 counter 변수를 사용한다. 반복 횟수가 루프 실행 전에 알려져 있기 때문에 definite repetition이라고도 불린다. 일반적인 구조는 초기화 단계, 처리 단계, 종료 단계로 나뉜다. 정수 나눗셈을 사용할 때는 소수점 이하가 버려지므로 주의해야 한다.

## 8. Formulating Algorithms: Sentinel-Controlled Repetition
Sentinel-controlled repetition은 반복 횟수가 미리 알려지지 않은 경우(indefinite repetition)에 사용된다. 데이터 입력의 끝을 알리기 위해 sentinel value(signal value, flag value)라는 특수 값을 사용한다. Sentinel value는 유효한 데이터 값과 혼동되지 않는 값이어야 한다. 평균 계산 시 소수점 이하를 유지하기 위해 캐스트 연산자(cast operator)를 사용하여 강제로 부동 소수점 계산을 수행할 수 있다.

## 9. Formulating Algorithms: Nested Control Statements
Control-statement nesting은 하나의 제어 문 안에 다른 제어 문을 포함하는 것이다. 시험 결과 분석 사례 연구에서는 while 루프를 사용하여 10명의 학생을 처리하고, 그 내부에서 if...else 구조를 사용하여 합격(1)과 불합격(2)을 카운트한다.

## 10. Compound Assignment Operators
Compound assignment operators는 할당 표현식을 축약하는 데 사용된다. variable = variable operator expression 형태의 문장은 variable operator= expression 형태로 작성할 수 있다. 예를 들어, c = c + 3은 c += 3으로 작성할 수 있다.

![PDF p.35: Arithmetic compound assignment operators]

## 11. Increment and Decrement Operators
Unary increment operator (++)는 피연산자에 1을 더하고, unary decrement operator (--)는 피연산자에서 1을 뺀다.
* Prefix increment/decrement (++a, --a): 변수의 값을 먼저 증감시킨 후, 그 새로운 값을 표현식에서 사용한다.
* Postfix increment/decrement (a++, a--): 변수의 현재 값을 표현식에서 먼저 사용한 후, 값을 증감시킨다.

![PDF p.37: Increment and decrement operators table]

연산자 우선순위(Precedence)와 결합법칙(Associativity)에 따라 ++, --, 캐스트, 단항 연산자 등은 오른쪽에서 왼쪽으로 결합하며, 이항 산술 연산자 등은 왼쪽에서 오른쪽으로 결합한다.

![PDF p.39: Precedence and associativity of operators]
