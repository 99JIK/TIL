## 1. Introduction to Computers and Java

Java는 전 세계적으로 가장 널리 사용되는 컴퓨터 프로그래밍 언어이다. Software는 Hardware를 제어하는 명령어를 의미한다. Java는 엔터프라이즈 데스크톱, 장치, Blu-ray 플레이어 등 다양한 환경에서 실행되며 특히 인터넷 기반 애플리케이션 및 네트워크 통신 소프트웨어 구현에 적합하다.

Java Editions는 목적에 따라 다음과 같이 분류된다.
* Java SE (Standard Edition): 크로스 플랫폼, 범용 애플리케이션 개발용이다.
* Java EE (Enterprise Edition): 대규모 분산 네트워킹 및 웹 기반 애플리케이션 개발용이다.
* Java ME (Micro Edition): 메모리가 제한된 소형 장치(스마트폰, 태블릿 등)용이다.

## 2. Computers: Hardware and Software

Computer는 계산을 수행하고 논리적 결정을 내리는 장치이다. Hardware는 키보드, 스크린, 마우스, 디스크, 메모리, CPU 등 물리적 장치를 의미하며, Software는 컴퓨터에서 실행되는 프로그램을 의미한다. Moore's Law는 컴퓨터의 용량이 가격 상승 없이 매년 또는 2년마다 약 두 배로 증가한다는 관찰이다.

데이터는 다음과 같은 Data Hierarchy를 구성한다.
* Bit: 0 또는 1의 값을 가지는 가장 작은 데이터 단위이다.
* Character: 숫자, 문자, 기호 등을 의미한다.
* Field: 관련된 문자들의 그룹이다.
* Record: 관련된 필드들의 그룹이다.
* File: 관련된 레코드들의 그룹이다.
* Database: 조직화된 데이터의 집합이다.

![PDF p.15: Data hierarchy](img/Pasted%20image%2020260108153814.png)

Computer Organization은 다음과 같은 논리적 장치들로 구성된다.
* Input unit
* Output unit
* Memory unit
* Central processing unit (CPU)
* Secondary storage unit

## 3. Programming Languages

프로그래밍 언어는 크게 세 가지 유형으로 나뉜다.
* Machine languages: 컴퓨터가 직접 이해할 수 있는 언어이며 하드웨어 설계에 종속적이다.
* Assembly languages: 기계어의 기본 연산을 영어 약어로 표현한 언어이다. Assembler가 이를 기계어로 변환한다.
* High-level languages: 단일 문장으로 상당한 작업을 수행할 수 있는 언어이다. Compiler가 이를 기계어로 변환하거나 Interpreter가 직접 실행한다.

## 4. Introduction to Object Technology

Object(객체)는 재사용 가능한 소프트웨어 컴포넌트이다. 거의 모든 명사를 속성(Attributes)과 행동(Behaviors)을 가진 소프트웨어 객체로 표현할 수 있다.

Class와 Object의 개념은 다음과 같다.
* Class: 객체를 생성하기 위한 설계도(Blueprint)이다. 예를 들어 자동차 엔지니어링 도면이 클래스에 해당한다.
* Object: 클래스의 인스턴스(Instance)이다. 도면을 바탕으로 만들어진 실제 자동차가 객체에 해당한다.
* Method: 프로그램의 작업을 수행하는 코드 블록이다. 자동차의 가속 페달처럼 내부 메커니즘을 숨기고 기능을 제공한다.
* Instantiation: 클래스로부터 객체를 생성하는 과정이다.

객체 지향의 주요 특징은 다음과 같다.
* Reuse: 기존 클래스를 재사용하여 시간과 노력을 절약하고 시스템의 신뢰성을 높인다.
* Messages: 객체 간의 상호작용은 메시지 전송(Method call)을 통해 이루어진다.
* Attributes (Instance Variables): 객체의 상태를 나타낸다. 각 객체는 고유한 속성 값을 유지한다.
* Encapsulation: 클래스는 속성과 메서드를 객체 내에 감싸고 구현 세부 사항을 숨긴다(Information hiding).
* Inheritance: 기존 클래스의 특성을 흡수하고 새로운 특성을 추가하여 새 클래스를 빠르게 생성한다.

UML (Unified Modeling Language)은 객체 지향 시스템을 모델링하기 위한 가장 널리 사용되는 그래픽 체계이다.

## 5. Java Development Environment

Java 프로그램 개발은 일반적으로 5단계를 거친다.

1.  Edit: 편집기를 사용하여 소스 코드를 작성하고 .java 파일로 저장한다.
    ![PDF p.34: Typical Java development environment-editing phase](img/Pasted%20image%2020260108153849.png)
2.  Compile: javac 명령어를 사용하여 소스 코드를 Bytecodes로 변환한다. 결과물은 .class 파일이다.
    ![PDF p.36: Typical Java development environment-compilation phase](img/Pasted%20image%2020260108153905.png)
3.  Load: Class Loader가 디스크에서 .class 파일을 읽어 메모리로 전송한다.
    ![PDF p.38: Typical Java development environment-loading phase](img/Pasted%20image%2020260108153923.png)
4.  Verify: Bytecode Verifier가 바이트코드가 유효한지, 보안 제한을 위반하지 않는지 검사한다.
5.  Execute: JVM(Java Virtual Machine)이 바이트코드를 실행한다. JIT(Just-In-Time) 컴파일러는 바이트코드를 기계어로 변환하여 실행 속도를 높인다.

## 6. Our First Program in Java

Java 프로그램의 기본 구조는 다음과 같다.
* class 키워드로 클래스를 선언한다. 클래스 이름은 대문자로 시작하는 것이 관례이다(PascalCase).
* main 메서드는 Java 애플리케이션의 시작점이다. `public static void main(String[] args)` 형식을 따른다.
* System.out.println 메서드는 콘솔에 문자열을 출력하고 줄을 바꾼다.

주석(Comments)은 컴파일러에 의해 무시되며 프로그램 문서를 작성하는 데 사용된다.
* `//`: 한 줄 주석
* `/* ... */`: 여러 줄 주석
* `/** ... */`: Javadoc 주석. javadoc 유틸리티를 통해 HTML 문서를 생성할 수 있다.

Escape sequences는 백슬래시(`\`)로 시작하며 특수 문자를 표현한다.
* `\n`: Newline
* `\t`: Horizontal tab
* `\"`: Double quote
* `\\`: Backslash

System.out.printf 메서드는 형식을 지정하여 출력을 수행한다.
* `%s`: 문자열(String) 플레이스홀더
* `%d`: 십진수 정수(Decimal integer) 플레이스홀더

## 7. Adding Integers & Memory Concepts

사용자로부터 입력을 받기 위해 Scanner 클래스를 사용한다.
* `import java.util.Scanner;`: Scanner 클래스를 사용하기 위한 import 선언이다.
* `Scanner input = new Scanner(System.in);`: 표준 입력 스트림(System.in)에서 데이터를 읽는 Scanner 객체를 생성한다.
* `input.nextInt()`: 사용자로부터 정수를 입력받는다.

변수(Variable)는 메모리 위치를 나타내며 이름, 타입, 크기, 값을 가진다.
* 변수에 새로운 값을 할당하면 이전 값은 대체된다(Destructive write).
* 변수에서 값을 읽어오면 값은 그대로 유지된다(Non-destructive read).

![PDF p.21: Memory locations after storing values for number1 and number2](img/Pasted%20image%2020260108154023.png)

## 8. Arithmetic

Java의 산술 연산자(Arithmetic operators)는 다음과 같다.
* `+`: 덧셈
* `-`: 뺄셈
* `*`: 곱셈
* `/`: 나눗셈
* `%`: 나머지(Remainder) 연산자

정수 나눗셈(Integer division)은 몫만 반환하며 소수점 이하는 버려진다(Truncated).

연산자 우선순위(Operator precedence)는 다음과 같다.
1.  괄호 `()`
2.  곱셈, 나눗셈, 나머지 `* / %` (왼쪽에서 오른쪽으로 결합)
3.  덧셈, 뺄셈 `+ -` (왼쪽에서 오른쪽으로 결합)
4.  대입 `=` (오른쪽에서 왼쪽으로 결합)

![PDF p.25: Order in which a second-degree polynomial is evaluated](img/Pasted%20image%2020260108154041.png)

## 9. Decision Making: Equality and Relational Operators

if 문은 조건(Condition)이 참(true)일 때 명령문을 실행한다.
* 조건은 괄호 안에 작성해야 하며, 세미콜론을 붙이지 않는다.
* Equality operators: `==` (같다), `!=` (같지 않다)
* Relational operators: `>` (크다), `<` (작다), `>=` (크거나 같다), `<=` (작거나 같다)

주의해야 할 점:
* `==` (비교 연산자)와 `=` (대입 연산자)를 혼동하면 논리 오류가 발생한다.
* if 문의 조건 뒤에 바로 세미콜론(`;`)을 찍으면 빈 문장(Empty statement)으로 처리되어 논리 오류가 발생한다.

![PDF p.29: Compare integers using if statements output]