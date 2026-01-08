## 1. Algorithms and Control Structures

컴퓨팅 문제는 특정 순서로 일련의 작업을 실행함으로써 해결된다. Algorithm은 실행할 작업과 그 작업이 실행되는 순서를 정의한 문제 해결 절차이다. Pseudocode는 Java 언어 구문의 엄격한 세부 사항을 걱정하지 않고 알고리즘을 개발할 수 있도록 도와주는 비공식 언어이다. 이는 일상적인 영어와 유사하며 프로그램을 작성하기 전에 생각을 정리하는 데 도움을 준다.

Bohm과 Jacopini는 goto 문 없이 프로그램을 작성할 수 있음을 증명했다. 모든 프로그램은 Sequence structure, Selection structure, Repetition structure라는 세 가지 제어 구조만으로 작성될 수 있다.
* Sequence structure: 컴퓨터는 별도의 지시가 없는 한 문장들을 작성된 순서대로 하나씩 실행한다.
* Selection structure: if, if...else, switch 문을 포함한다.
* Repetition structure: while, do...while, for 문을 포함한다.

![PDF p.6: Sequence structure activity diagram](img/Pasted%20image%2020260108155741.png)

## 2. Selection Statements

Java는 세 가지 유형의 선택 문을 제공한다.
* if statement: Single-selection statement로, 조건이 참이면 작업을 수행하고 거짓이면 무시한다.
* if...else statement: Double-selection statement로, 조건이 참이면 하나의 작업을 수행하고 거짓이면 다른 작업을 수행한다.
* switch statement: Multiple-selection statement로, 표현식의 값에 따라 여러 작업 중 하나를 수행한다.

![PDF p.10: if single-selection statement UML activity diagram](img/Pasted%20image%2020260108155803.png)
![PDF p.11: if...else double-selection statement UML activity diagram](img/Pasted%20image%2020260108155822.png)

Nested if...else 문을 사용할 때 Dangling-else 문제가 발생할 수 있다. Java 컴파일러는 항상 else를 중괄호로 묶이지 않은 가장 가까운 이전의 if와 연관시킨다. 이를 해결하기 위해 중괄호 {}를 사용하여 블록을 명확히 지정해야 한다.

Conditional operator (?:)는 if...else 문을 대체할 수 있는 삼항 연산자이다. 피연산자 세 개를 취하며 첫 번째는 boolean 표현식, 두 번째는 참일 때의 값, 세 번째는 거짓일 때의 값이다.

switch 문은 byte, short, int, char 타입의 상수 정수 표현식 값에 따라 다른 작업을 수행한다. 각 case는 상수로 라벨링되며 일치하는 case가 실행된다.

```java
// GradeBook.java
import java.util.Scanner;

public class GradeBook {
	private String courseName;
	public GradeBook(String name) { courseName = name; }
	public void setCourseName(String name) { courseName = name; }
	public Sring getCourseName() { return courseName; }
	public void displayMessage() { System.out.printf("Welcome to the grade book for \n%s!\n", getCourseName()); }
	public void determineClassAverage() {
		Scanner input = new Scanner(System.in);
		int total = 0, gradeCounter = 1, grade, average;
		
		while(gradeCounter <= 10) {
			System.out.print("Enter grade: ");
			grade = input.nextInt();
			total += grade;
			gradeCounter++;
		}
		
		System.out.printf("\nTotal of all 10 grades is %d\n", total);
		System.out.printf("Class average is %d\n", average);
	}
}
// GradeBookTest.java
public class GradeBookTest {
	public static void main(String[] args) {
		GradeBook myGradeBook = new GradeBook("CS101 Introduction to Java Programming");
		
		myGradeBook.displayMessage();
		myGradeBook.determinClassAverage();
	}
}
```

## 3. Repetition Statements

반복 문은 Loop-continuation condition이 참인 동안 문장들을 반복해서 실행한다.

while 문은 루프 본문을 실행하기 전에 조건을 먼저 검사한다. 조건이 처음부터 거짓이면 본문은 한 번도 실행되지 않는다.
* Counter-controlled repetition: 반복 횟수가 루프 실행 전에 알려진 경우 사용하며 Definite repetition이라고도 한다. 제어 변수, 초기값, 증감, 루프 지속 조건이 필요하다.
* Sentinel-controlled repetition: 반복 횟수가 사전에 알려지지 않은 경우 사용하며 Indefinite repetition이라고도 한다. Sentinel value(감시 값)를 사용하여 데이터 입력의 끝을 나타낸다.

![PDF p.18: while repetition statement UML activity diagram]

for 문은 카운터 제어 반복의 세부 사항(초기화, 조건, 증감)을 코드 한 줄에 지정한다. 일반적으로 for 문은 카운터 제어 반복에 사용되고 while 문은 센티넬 제어 반복에 사용된다. 초기화 부분에서 선언된 변수는 그 for 문 내에서만 사용할 수 있는 Scope를 가진다.

![PDF p.7: UML activity diagram for the for statement]

do...while 문은 루프 본문을 실행한 후에 루프 지속 조건을 검사한다. 따라서 본문이 항상 최소 한 번은 실행된다.

![PDF p.18: do...while repetition statement UML activity diagram]

## 4. Control Flow Manipulation

프로그램의 흐름을 제어하기 위해 break와 continue 문을 사용한다.
* break: while, for, do...while, switch 문에서 실행되면 해당 문을 즉시 종료하고 다음 문장으로 제어를 이동시킨다. 주로 루프를 조기에 탈출하거나 switch 문의 나머지 부분을 건너뛸 때 사용한다.
* continue: while, for, do...while 문에서 실행되면 루프 본문의 남은 문장들을 건너뛰고 다음 반복(Iteration)으로 진행한다.

## 5. Operators

Compound assignment operators는 할당 표현식을 축약한다. 예를 들어 c = c + 3은 c += 3으로 작성할 수 있다. 이는 변수의 값에 오른쪽 표현식의 값을 연산하여 다시 변수에 저장한다.

Increment and Decrement operators는 변수의 값을 1 증가시키거나(++) 1 감소시킨다(--).
* Prefix (e.g., ++a): 변수를 먼저 증가/감소시킨 후 그 값을 식에서 사용한다.
* Postfix (e.g., a++): 변수의 현재 값을 식에서 먼저 사용한 후 변수를 증가/감소시킨다.

Logical operators는 더 복잡한 조건을 형성하기 위해 사용된다.
* && (Conditional AND): 두 조건이 모두 참일 때만 참이다.
* || (Conditional OR): 두 조건 중 하나라도 참이면 참이다.
* ! (Logical NOT): 조건의 값을 반전시킨다.
* Short-circuit evaluation: &&나 || 연산자를 포함한 식에서, 결과가 이미 결정된 경우 나머지 부분은 평가하지 않는다. 예를 들어 && 연산에서 첫 번째 조건이 거짓이면 전체는 거짓이므로 두 번째 조건은 평가되지 않는다.

## 6. Structured Programming Summary

Java의 제어 문들은 Single-entry/single-exit 구조를 가진다. 즉, 각 제어 문에는 들어가는 길 하나와 나가는 길 하나만 존재한다. 구조적 프로그래밍은 이러한 제어 문들을 연결하는 두 가지 방법으로 이루어진다.
* Stacking: 하나의 제어 문 종료 지점을 다음 제어 문의 시작 지점과 연결하여 순차적으로 배치하는 것이다.
* Nesting: 하나의 제어 문 안에 다른 제어 문을 포함시키는 것이다.

![PDF p.42: Rules for forming structured programs]