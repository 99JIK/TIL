## 1. Classes, Objects, Methods and Instance Variables

애플리케이션을 개발할 때 클래스(Classes)와 객체(Objects)의 개념을 이해하는 것이 중요하다. 자동차 가속 페달의 비유를 통해 이를 설명할 수 있다. 운전자가 가속 페달을 밟으면 자동차가 더 빨리 가도록 설계되어 있지만, 운전자는 엔진의 복잡한 메커니즘을 알 필요가 없다. 이러한 방식은 엔진 동작 원리를 모르는 사람도 쉽게 운전할 수 있게 한다.

Java에서는 클래스가 메서드(Method)를 포함하며, 이는 자동차 설계도에 가속 페달의 설계가 포함된 것과 같다. 클래스 내의 메서드는 해당 클래스의 작업을 수행하도록 설계된다.

프로그램이 작업을 수행하려면 먼저 해당 클래스의 객체(Object)를 생성해야 한다. 이는 엔지니어링 도면을 바탕으로 실제 자동차를 생산하는 과정과 유사하다. 운전자가 가속 페달을 밟아 자동차에 메시지를 보내는 것처럼, 프로그램에서는 객체에 메시지를 보내 작업을 수행하게 하며, 이는 메서드 호출(method call)로 구현된다.

자동차는 속도, 연료량 같은 속성(Attributes)을 가지며, 모든 자동차는 자신의 속성을 개별적으로 유지한다. Java에서 이러한 속성은 클래스의 인스턴스 변수(Instance Variables)로 지정된다.

## 2. Declaring a Class with a Method and Instantiating an Object

새로운 클래스를 선언할 때 `public` 키워드는 해당 클래스가 공용으로 사용 가능함을 의미한다. `public`으로 선언된 클래스는 클래스 이름과 동일한 파일명(`.java`)을 가져야 한다.

```java
public class GradeBook{
	public void displayMessage() {
		System.out.println("Welcom to the Grade Book!");
	}
}
```

`GradeBook` 클래스는 환영 메시지를 출력하는 `displayMessage` 메서드를 포함한다. 하지만 이 클래스 자체에는 `main` 메서드가 없어 독립적으로 실행할 수 없다. 실행을 위해서는 `main` 메서드를 포함한 별도의 드라이버 클래스(Driver class)가 필요하다.

![PDF p.11: Creating a GradeBook object and calling its displayMessage method]
```Java
public class GradeBookTest {
	public static void main(String[] args) {
		GradeBook myGradeBook = new GradeBook(); // Create a GradeBook object and assign it to myGradeBook
		myGradeBook.displayMessage(); // Call myGradeBook's displayMessage method
	}
}
```

객체 생성 표현식(Class instance creation expression)에서 new 키워드는 새 객체를 생성하고, 괄호는 생성자(Constructor)를 호출하여 객체를 초기화한다. 생성된 객체의 메서드는 점 구분자(.)를 사용하여 호출한다.

UML 클래스 다이어그램은 클래스를 세 부분으로 나누어 표현한다. 상단에는 클래스 이름, 중간에는 속성, 하단에는 메서드와 같은 연산(Operations)이 위치한다.

![PDF p.13: UML class diagram for class GradeBook](img/Pasted%20image%2020251230160359.png)

## 3. Declaring a Method with a Parameter

메서드가 작업을 수행할 때 추가적인 정보가 필요한 경우 매개변수(Parameter)를 사용한다. 매개변수는 메서드 이름 뒤의 괄호 안에 정의되며 타입과 식별자를 지정해야 한다.

```java
public class GradeBook {
	public void displayMessage(String courseName) {
		System.out.printf("Welcome to the grade book for \n%s!\n", courseName);
	}
}
```

Scanner 클래스는 사용자로부터 입력을 받는 데 사용되며, 프로그램에서 사용하기 위해 import 선언이 필요하다. java.lang 패키지에 있는 System이나 String 클래스는 암시적으로 import되지만, 그 외의 클래스는 명시적으로 import해야 한다.

![PDF p.15: UML class diagram indicating that class GradeBook has a displayMessage operation with a courseName parameter](img/Pasted%20image%2020251230164217.png)
## 4. Instance Variables, set Methods and get Methods

지역 변수(Local variables)는 메서드 내에 선언되며 메서드 종료 시 값이 사라지지만, 객체의 속성인 인스턴스 변수는 메서드 호출 전후에도 값이 유지된다. 인스턴스 변수는 클래스 선언 내부, 메서드 선언 외부에 필드(Fields)로 선언된다. 각 객체는 자신만의 인스턴스 변수 복사본을 메모리에 유지한다.

대부분의 인스턴스 변수는 private으로 선언되며, 이는 데이터 은닉(Data hiding) 또는 캡슐화(Encapsulation)라고 한다. private 변수는 해당 클래스의 메서드에서만 접근 가능하다. 클라이언트 코드가 private 필드를 조작할 수 있도록 클래스는 public으로 선언된 set 및 get 메서드를 제공하는 것이 일반적이다.

![PDF p.25: Updated UML class diagram for the version of class GradeBook with private fields](img/Pasted%20image%2020251230164321.png)

인스턴스 변수는 초기화하지 않아도 기본값(Default initial value)을 가진다. 예를 들어 String 타입의 필드는 기본적으로 null 값을 가진다.

## 5. Primitive Types vs. Reference Types

Java의 타입은 기본 타입(Primitive types)과 참조 타입(Reference types)으로 나뉜다. 기본 타입에는 boolean, byte, char, short, int, long, float, double이 있다. 그 외의 모든 타입은 참조 타입이다.

참조 타입 변수는 컴퓨터 메모리 상의 객체 위치(주소)를 저장한다. 변수의 타입이 기본 타입 8가지 중 하나가 아니라면 이는 참조 타입이다.

## 6. Initializing Objects with Constructors

생성자(Constructor)는 객체가 생성될 때 인스턴스 변수를 초기화하는 데 사용된다. 생성자의 이름은 반드시 클래스 이름과 동일해야 한다. 생성자는 반환 값을 가질 수 없으므로 반환 타입을 지정하지 않는다.

클래스에 생성자를 명시적으로 선언하지 않으면 컴파일러가 매개변수가 없는 기본 생성자(Default constructor)를 제공한다. 하지만 생성자를 하나라도 선언하면 컴파일러는 기본 생성자를 생성하지 않는다.

```java
// GradeBook.java
public class GradeBook {
	private String courseName;
	
	public GradeBook(String name) { // Constructor
		courseName = name;
	}
	
	public void setCourseName(String name) { // Setter
		courseName = name;
	}
	
	public String getCourseName() { // Getter
		return courseName;
	}
	
	public void displayMessage() {
		System.out.printf("Welcome to the grade book for \n%s!\n", getCourseName());
	}
}

// GradeBookTest.java
public class GradeBookTest {
	public static void main(String[] args) {
		GradeBook gradeBook1 = new GradeBook("CS101 Introduction to Java Programming");
		GradeBook gradeBook2 = new GradeBook("CS102 Data Structures in Java");
		
		System.out.printf("GradeBook1 course name is: %s\n", gradeBook1.getCourseName());
		System.out.printf("GradeBook2 course name is: %s\n", gradeBook2.getCourseName());
	}
}
```

```text
gradeBook1 course name is: CS101 Introduction to Java Programming
gradeBook2 Course name is: CS102 Data Structures in Java
```
## 7. Floating-Point Numbers and Type double

실수형 숫자를 표현하기 위해 float와 double 타입을 사용한다. double 변수는 float 변수보다 더 큰 크기와 정밀도를 저장할 수 있다. Java는 모든 실수 리터럴을 기본적으로 double로 취급한다. float는 7자리의 유효 숫자를 가지는 반면, double은 약 15자리의 유효 숫자를 제공한다.

Account 클래스 예제에서는 생성자를 통해 유효하지 않은 초기값(예: 음수)이 입력되는 것을 방지하고 데이터를 검증한다.

```java
public class Account {
	private double balance;
	
	public Account(double initialBalance) {
		if(initialBalance > 0.0) balance = initialBalance;
	}
	
	public void credit(double amount) {
		balance += amount;
	}
	
	public double getBalance() {
		return balance;
	}
}
```

출력 시 System.out.printf 메서드와 포맷 지정자 %.2f를 사용하여 소수점 이하 두 자리까지 반올림하여 출력할 수 있다. Scanner 객체의 nextDouble 메서드는 사용자가 입력한 double 값을 반환한다.

## 8. GUI and Graphics Case Study: Using Dialog Boxes

많은 애플리케이션이 윈도우나 대화 상자(Dialog boxes)를 사용하여 출력을 표시한다. JOptionPane 클래스는 미리 만들어진 대화 상자를 제공하며, 이를 통해 메시지 다이얼로그(Message dialogs)를 띄울 수 있다.
```java
import javax.swing.JOptionPane;

public class Dialog1 {
	public static void main(String[] args) {
		JOptionPane.showMessageDialog(null, "Welcome\nto\nJava");
	}
}
```
![PDF p.38: Using JOptionPane to display multiple lines in a dialog box](img/Pasted%20image%2020251230165238.png)

showMessageDialog 메서드는 대화 상자를 표시하는 static 메서드이다. 첫 번째 인자가 null이면 대화 상자가 화면 중앙에 나타난다. 사용자 입력을 받기 위해서는 showInputDialog 메서드를 사용할 수 있다. 이러한 그래픽 컴포넌트들은 javax.swing 패키지에 포함되어 있다.
```java
import javax.swing.JOptionPane;

public class NameDialog {
	public static void main(String[] args) {
		String name = JOptionPane.showInputDialog("What is your name?");
		String message = String.format("Welcome, %s, to Java Programming!", name);
		JOptionPane.showMessageDia
	}
}
```
![PDF p.41: Obtaining user input from a dialog](img/Pasted%20image%2020251230165406.png)
