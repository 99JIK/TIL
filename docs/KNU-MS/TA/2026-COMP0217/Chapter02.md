## 1. 서론
[cite_start]Java 애플리케이션 프로그래밍은 JDK의 도구를 사용하여 프로그램을 컴파일하고 실행한다[cite: 16, 17]. [cite_start]Eclipse나 NetBeans와 같은 통합 개발 환경을 사용하여 시작할 수 있다[cite: 20].

## 2. 첫 번째 Java 프로그램
### 2.1 Java 애플리케이션의 구조
[cite_start]Java 애플리케이션은 java 명령어를 사용하여 JVM(Java Virtual Machine)을 실행할 때 수행되는 컴퓨터 프로그램이다[cite: 23, 24]. [cite_start]모든 Java 프로그램은 적어도 하나의 클래스 정의를 포함해야 한다 [cite: 63][cite_start]. class 키워드는 클래스 선언을 시작하며 바로 뒤에 클래스 이름이 온다[cite: 64]. [cite_start]클래스 이름은 대문자로 시작하고 각 단어의 첫 글자를 대문자로 표기하는 것이 관례이다[cite: 70]. [cite_start]Java는 대소문자를 구별하므로 a1과 A1은 서로 다른 식별자이다[cite: 72].

### 2.2 main 메소드
[cite_start]public static void main(String[] args)는 모든 Java 애플리케이션의 시작점이다 [cite: 84, 85][cite_start]. main 뒤의 괄호는 이것이 메소드라는 프로그램 구성 요소임을 나타낸다 [cite: 86, 87][cite_start]. main 메소드는 반드시 정해진 형식대로 정의되어야 하며 그렇지 않으면 JVM이 애플리케이션을 실행하지 않는다 [cite: 89][cite_start]. void 키워드는 이 메소드가 작업을 완료한 후 어떤 정보도 반환하지 않음을 의미한다[cite: 91].

### 2.3 출력 및 주석
[cite_start]System.out.println 메소드는 큰따옴표 사이의 문자열을 출력한다[cite: 43]. [cite_start]주석은 //로 시작하는 한 줄 주석과 /** */로 묶이는 Javadoc 주석 등이 있다[cite: 26, 49, 50]. [cite_start]컴파일러는 주석 내의 모든 텍스트를 무시한다[cite: 52].

### 2.4 컴파일 및 실행
[cite_start]소스 코드는 .java 파일에 저장된다 [cite: 96][cite_start]. javac 명령어를 사용하여 프로그램을 컴파일하면 플랫폼 독립적인 Java 바이트코드를 포함하는 .class 파일이 생성된다 [cite: 97, 98][cite_start]. java 명령어로 애플리케이션을 실행하면 JVM이 바이트코드를 기본 운영체제가 이해할 수 있는 명령어로 변환한다[cite: 99, 101].

![PDF p.11: Command Prompt execution of Welcome1.java]

## 3. 프로그램 수정 및 출력 형식화
### 3.1 print와 println
[cite_start]System.out.print는 문자열을 출력하고 커서를 다음 줄로 이동시키지 않는다[cite: 116, 117]. [cite_start]따라서 다음에 출력되는 문자는 print가 출력한 마지막 문자 바로 뒤에 나타난다[cite: 118]. [cite_start]반면 println은 출력 후 줄 바꿈 문자를 출력한다[cite: 143].

### 3.2 이스케이프 시퀀스
[cite_start]백슬래시(\) 문자를 사용하여 이스케이프 시퀀스를 나타낼 수 있다[cite: 147]. [cite_start]\n은 줄 바꿈, \t는 탭, \r은 캐리지 리턴, \\는 백슬래시 출력, \"는 큰따옴표 출력을 의미한다[cite: 175].

![PDF p.14: Table of common escape sequences]

### 3.3 printf 메소드
[cite_start]System.out.printf 메소드는 데이터를 형식화하여 출력한다[cite: 179, 181]. [cite_start]첫 번째 인자는 형식 문자열(format string)이며 고정 텍스트와 형식 지정자(format specifier)를 포함할 수 있다[cite: 185, 186]. [cite_start]형식 지정자는 % 기호로 시작하며 데이터 타입을 나타내는 문자가 뒤따른다[cite: 189]. [cite_start]%s는 문자열을 위한 자리 표시자이다[cite: 190].

## 4. 정수 덧셈 애플리케이션
### 4.1 Scanner 클래스와 import
[cite_start]Scanner 클래스를 사용하면 키보드나 디스크 파일 등 다양한 소스로부터 데이터를 읽을 수 있다[cite: 290, 291]. [cite_start]이를 사용하기 위해서는 java.util.Scanner를 import 해야 한다 [cite: 222][cite_start]. import 선언은 컴파일러가 프로그램에서 사용되는 클래스를 찾는 것을 돕는다[cite: 278].

### 4.2 변수 선언 및 입력
[cite_start]변수는 컴퓨터 메모리의 위치로 값을 저장하기 위해 사용된다[cite: 288]. [cite_start]변수는 사용하기 전에 반드시 이름과 타입이 선언되어야 한다 [cite: 289][cite_start]. new 키워드는 새로운 객체를 생성한다[cite: 292]. [cite_start]Scanner 객체의 nextInt 메소드는 사용자로부터 정수를 입력받는다[cite: 297, 299].

### 4.3 정수 출력
[cite_start]printf 메소드에서 %d 형식 지정자는 int 값을 출력하기 위한 자리 표시자이다[cite: 302]. [cite_start]여기서 d는 10진수 정수(decimal integer)를 의미한다[cite: 303].

## 5. 메모리 개념
[cite_start]모든 변수는 이름, 타입, 크기, 그리고 값을 가진다[cite: 305]. [cite_start]변수에 새로운 값을 저장하면 이전 값은 대체되어 사라진다[cite: 306]. 반면 변수에서 값을 읽어오는 작업은 변수의 값을 변경하지 않는다.

![PDF p.21: Memory locations showing destructive update of variables]

## 6. 산술 연산
### 6.1 산술 연산자
[cite_start]Java의 산술 연산자에는 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%)가 있다[cite: 325, 332]. [cite_start]정수 나눗셈은 정수 몫을 반환하며 소수점 이하의 부분은 버려진다(절사)[cite: 327, 328]. [cite_start]나머지 연산자는 나눗셈 후의 나머지를 반환한다[cite: 329].

### 6.2 연산자 우선순위
[cite_start]곱셈, 나눗셈, 나머지 연산은 덧셈과 뺄셈보다 우선순위가 높다[cite: 355, 357]. [cite_start]같은 우선순위를 가진 연산자들은 일반적으로 왼쪽에서 오른쪽으로 계산된다(결합 법칙)[cite: 356, 358]. [cite_start]대입 연산자(=)는 가장 낮은 우선순위를 가지며 오른쪽에서 왼쪽으로 결합한다[cite: 360, 536].

![PDF p.25: Step-by-step evaluation of a polynomial expression showing precedence]

## 7. 의사 결정: 동등 및 관계 연산자
### 7.1 if 문과 조건
[cite_start]if 문은 조건의 값에 따라 결정을 내릴 수 있게 한다[cite: 397]. [cite_start]조건은 참(true) 또는 거짓(false)이 될 수 있는 표현식이다 [cite: 396][cite_start]. if 문은 키워드 if로 시작하며 괄호 안에 조건이 온다[cite: 497].

### 7.2 동등 및 관계 연산자
[cite_start]동등 연산자에는 ==(같다)와 !=(같지 않다)가 있다[cite: 398, 412, 414]. [cite_start]관계 연산자에는 >(크다), <(작다), >=(크거나 같다), <=(작거나 같다)가 있다[cite: 399, 420, 424]. [cite_start]관계 연산자는 동등 연산자보다 높은 우선순위를 가진다[cite: 400].

![PDF p.27: Table of Equality and Relational operators]

### 7.3 주의사항
[cite_start]if 문의 조건 뒤에 세미콜론(;)을 붙이는 것은 논리 오류를 유발한다[cite: 500, 513]. [cite_start]또한 동등 연산자(==)와 대입 연산자(=)를 혼동하는 것은 일반적인 프로그래밍 오류이다[cite: 507].

![PDF p.33: Precedence and associativity table of all operators discussed]