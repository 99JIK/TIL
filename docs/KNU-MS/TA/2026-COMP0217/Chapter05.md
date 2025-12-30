## 1. 개요 및 카운터 제어 반복의 필수 요소

Counter-controlled repetition은 다음의 네 가지 요소를 필요로 한다.
* control variable (또는 loop counter)
* control variable의 초기값
* 루프를 반복할 때마다 control variable이 수정되는 increment (또는 decrement)
* 루프 지속 여부를 결정하는 loop-continuation condition

`while` 반복문을 사용하여 카운터 제어 반복을 구현할 수 있다.
실수형(floating-point) 변수는 근사값을 가지므로 루프 제어 변수로 사용 시 부정확한 카운터 값과 종료 테스트 오류가 발생할 수 있다.

## 2. for 반복문

`for` 반복문은 카운터 제어 반복의 세부 사항을 한 줄의 코드로 지정한다.
`for` 문은 keyword, control variable, initial value, loop-continuation condition, increment 등으로 구성된다.

![PDF p.5: for statement header components]

대부분의 경우 for 문은 초기화, 조건, 증감을 포함하는 등가의 while 문으로 표현할 수 있다.
일반적으로 for 문은 카운터 제어 반복에 사용되고, while 문은 sentinel-controlled repetition에 사용된다.
for 헤더의 초기화 식에서 선언된 control variable은 해당 for 문 내에서만 사용 가능하다.
변수의 scope는 프로그램 내에서 해당 변수가 사용될 수 있는 범위를 정의한다.

![PDF p.7: UML activity diagram for the for statement](img/Pasted%20image%2020251230171610.png)

`for` 문의 초기화, 루프 지속 조건, 증감 부분에는 산술 표현식을 사용할 수 있다.
increment가 음수일 경우 decrement로 작용하며 루프는 아래쪽으로 카운트한다.

## 3. for 반복문 사용 예제

control variable을 다양한 방식으로 제어할 수 있다.
* 1부터 100까지 1씩 증가
* 100부터 1까지 1씩 감소
* 7부터 77까지 7씩 증가
* 20부터 2까지 2씩 감소
* 특정 값들(2, 5, 8, 11, 14, 17, 20)에 대해 반복

초기화 및 증감 표현식은 쉼표로 구분된 목록을 사용하여 여러 개의 초기화 식이나 증감 식을 포함할 수 있다.

복리 계산 애플리케이션 예제에서는 다음 공식을 사용한다: `a = p(1 + r)^n`.
여기서 `p`는 원금, `r`은 연이율, `n`은 연수, `a`는 `n`년 말의 예치 금액이다.
이 예제에서는 `Math.pow` 메서드를 사용하여 거듭제곱을 계산한다.

형식 지정자(format specifier)를 사용하여 출력을 제어할 수 있다.
* `%20s`는 값이 최소 20 문자의 너비로 표시됨을 의미하며, 기본적으로 우측 정렬된다.
* 좌측 정렬을 하려면 필드 너비 앞에 마이너스 기호(`-`) 플래그를 사용한다.
* `%,20.2f`에서 쉼표(`,`) 플래그는 부동 소수점 값에 그룹 구분 기호(천 단위 구분)를 표시함을 의미한다.

## 4. do...while 반복문

`do...while` 반복문은 `while` 문과 유사하다.
`while` 문은 루프 본문을 실행하기 전에 루프 지속 조건을 검사하므로 조건이 거짓이면 본문이 한 번도 실행되지 않는다.
반면 `do...while` 문은 루프 본문을 실행한 후에 루프 지속 조건을 검사한다.
따라서 `do...while`의 본문은 항상 최소한 한 번은 실행된다.

![PDF p.18: do...while repetition statement UML activity diagram](img/Pasted%20image%2020251230171747.png)

## 5. switch 다중 선택 문

switch 문은 상수 정수 표현식(byte, short, int, char 타입)의 가능한 값에 따라 다른 동작을 수행한다.

![PDF p.20: switch multiple-selection statement UML activity diagram with break statements](img/Pasted%20image%2020251230171806.png)
```java
// GradeBook.java
import java.util.Scanner;
public class GradeBook {
	private String CourseName;
	private int total;
	private int gradeCounter;
	private int aCount;
	private int bCount;
	private int cCount;
	private int dCount;
	private int fCount;
	
	public GradeBook(String name) {
		courseName = name;
	}
	public void setCourseName(String name) {
		courseName = name;
	}
	public String getCourseName() {
		return courseName;
	}
	public void displayMessage() {
		System.out.printf("Welcome to the grade book for \n%s!\n\n", getCourseName());
	}
	public void inputGrades() {
		Sanner input = new Scanner(System.in)'
		int grade;
		System.out.printf("%s\n%s\n    %s\n    %s\n"),
			"Enter the integer grades in the range 0-100.",
			"Type the end-of-file indicator to terminate input:",
			"On UNIX/Linux/MacOS X Type <Ctrl> d then press Enter",
			"On windows type <Ctrl> z then press Enter");
		
		while(input.hasNext()) {
			grade = input.nextInt();
			total += grade;
			++gradeCounter;
			incrementLetterGradeCounter(grade);
		}
	}
	private void incrementLetterGradeCounter(int grade){
		switch(grade / 10) {
			case 9: case 10:
				++aCount;
				break;
			case 8:
				++bCount;
				break;
			case 7:
				++cCount;
				break;
			case 6:
				++dCount;
				break;
			default:
				++fCount;
				break;
		}
	}
	public void displayGradeReport() {
		System.out.println("\nGrade Report:");
		if(gradeCounter != 0) {
			double average = (double)total / gradeCounter;
			System.out.printf("Total of the %d grades entered is %d\n",
				gradeCounter, total);
			System.out.printf("%s\n%s%d\n%s%d\n%s%d\n%s%d\n%s%d\n",
				"Number of students who received each grade:",
				"A: ", aCount, "B: ", bCount, "C: ", cCount,
				"D: ", dCount, "F: ", fCount);
		}
		else System.out.println("No grades were entered");
	}
}

// GradeBookTest.java
public class GradeBookTest {
	public static void main(String[] args) {
		GradeBook myGradeBook = new GradeBook("CS101 Introduction to Java Programming");
		
		myGrade
	}
}
```
GradeBook 클래스 예제에서는 사용자가 입력한 점수를 `switch` 문을 사용하여 학점(A, B, C, D, F)별로 카운트한다.
`case` 레이블의 값과 제어 표현식의 값을 비교하여 일치하는 경우 해당 `case`의 동작을 수행한다.
`break` 문은 `switch` 문을 빠져나가게 하며, `default` 케이스는 일치하는 `case`가 없을 때 실행된다.

## 6. break 및 continue 문

break 문은 while, for, do...while, switch 문에서 실행될 때 해당 문을 즉시 종료시킨다.
실행은 제어 문 다음의 첫 번째 문장으로 이어진다.
일반적으로 루프를 조기에 탈출하거나 switch의 나머지 부분을 건너뛸 때 사용한다.

continue 문은 while, for, do...while 문에서 실행될 때 루프 본문의 나머지 문장들을 건너뛰고 다음 반복(iteration)을 진행한다.

## 7. 논리 연산자 (Logical Operators)

Java의 논리 연산자는 단순 조건을 결합하여 더 복잡한 조건을 형성할 수 있게 한다.
* && (conditional AND)
* || (conditional OR)
* & (boolean logical AND)
* | (boolean logical inclusive OR)
* ^ (boolean logical exclusive OR)
* ! (logical NOT)

&& 또는 || 연산자를 포함하는 표현식은 조건의 참/거짓 여부가 결정되는 시점까지만 평가되며, 이를 short-circuit evaluation이라 한다.
종속 조건(dependent condition)이 있는 경우, 예를 들어 (i != 0) && (10 / i == 2)와 같이 종속 조건이 뒤에 오도록 배치해야 런타임 오류(예: 0으로 나누기)를 방지할 수 있다.
%b 형식 지정자는 boolean 표현식의 값에 따라 true 또는 false를 표시한다.

![PDF p.37: Precedence/associativity of the operators]

## 8. 구조적 프로그래밍 요약

Java는 single-entry/single-exit 제어 문만을 포함한다.
구조적 프로그램을 형성하는 규칙은 제어 문을 순차적으로 배치하는 control-statement stacking과 중첩하는 nesting을 허용한다.

![PDF p.39: Sequence and Selection Activity Diagrams]
![PDF p.40: Repetition Activity Diagrams]

Bohm과 Jacopini에 따르면 알고리즘을 구현하는 데는 Sequence, Selection, Repetition의 세 가지 제어 형태만 필요하다.
* Sequence: 문장들을 순서대로 나열
* Selection: if (단일 선택), if...else (이중 선택), switch (다중 선택)
* Repetition: while, do...while, for

모든 형태의 선택은 if 문만으로 구현 가능하며, 모든 형태의 반복은 while 문만으로 구현 가능하다.
따라서 모든 Java 프로그램의 제어 흐름은 Sequence, if 문(selection), while 문(repetition)만을 사용하여 stacking과 nesting으로 표현할 수 있다.

## 9. (선택) GUI 및 그래픽 사례 연구: 간단한 그림 그리기

Java의 좌표계(coordinate system)는 화면상의 점을 식별하는 체계이다.
GUI 컴포넌트의 왼쪽 상단 모서리 좌표는 (0, 0)이다.
좌표 단위는 픽셀(pixel)로 측정된다.
x축은 수평 좌표(왼쪽에서 오른쪽), y축은 수직 좌표(위에서 아래)를 설명한다.

![PDF p.49: Java coordinate system]

Graphics 클래스(java.awt 패키지)는 텍스트와 도형을 그리는 메서드를 제공한다.
JPanel 클래스(javax.swing 패키지)는 그림을 그릴 수 있는 영역을 제공한다.

간단한 그림 그리기 예제에서 DrawPanel 클래스는 JPanel을 상속(extends)한다.
이 상속 관계에서 JPanel은 superclass, DrawPanel은 subclass가 된다.
JPanel은 paintComponent 메서드를 가지며, 시스템은 JPanel을 표시해야 할 때마다 이 메서드를 호출한다.
paintComponent 메서드의 첫 번째 문장은 항상 super.paintComponent(g);여야 한다.

Graphics 객체의 drawLine 메서드는 두 점 사이의 선을 그리며, 4개의 인수(x1, y1, x2, y2)를 받는다.
DrawPanel을 화면에 표시하기 위해 JFrame 객체를 생성하여 창을 만든다.
JFrame의 setDefaultCloseOperation 메서드는 창을 닫을 때 애플리케이션을 종료하도록 설정한다.
add 메서드는 DrawPanel을 JFrame에 부착하고, setSize는 창의 크기를 설정하며, setVisible(true)는 창을 화면에 표시한다.
