## 1. Introduction to Classes and Objects

Class와 Object의 개념을 이해하기 위해 자동차(Car)의 비유를 사용한다.
* **Class**: 자동차 엔지니어링 도면(Blueprints)과 같다. 도면은 자동차의 설계(예: 가속 페달)를 포함한다.
* **Object**: 도면을 바탕으로 실제로 만들어진 자동차이다. 프로그램이 작업을 수행하려면 클래스의 객체를 생성(Build)해야 한다.
* **Method**: 자동차의 가속 페달과 같다. 페달은 엔진의 복잡한 메커니즘을 운전자로부터 숨기고(Hides) 자동차를 더 빨리 가게 하는 작업을 수행한다.
* **Method Call**: 운전자가 가속 페달을 밟는 것은 자동차에 "더 빨리 가라"는 메시지(Message)를 보내는 것과 같다.

## 2. Declaring a Class and Instantiating an Object

Java에서 모든 프로그램은 최소 하나의 클래스 선언으로 구성된다.
* **Class Declaration**: `public class` 키워드로 시작하며, 파일 이름은 클래스 이름과 동일해야 한다(.java 확장자).
* **Driver Class**: `main` 메서드를 포함하는 별도의 클래스로, 다른 클래스를 테스트하거나 실행하는 데 사용된다.
* **Instantiation**: `new` 키워드를 사용하여 클래스의 새로운 객체를 생성한다.

![PDF p.13: UML class diagram indicating that class GradeBook has a public displayMessage operation](img/Pasted%20image%2020260108154842.png)

UML Class Diagram은 클래스를 직사각형으로 모델링하며 세 부분으로 나뉜다.
* **Top**: 클래스 이름 (Bold체).
* **Middle**: 속성 (Attributes).
* **Bottom**: 연산 (Operations) 또는 메서드.

## 3. Methods with Parameters

Parameter는 메서드가 작업을 수행하는 데 필요한 추가 정보이다.
* 메서드 이름 뒤의 괄호 안에 쉼표로 구분된 목록(Parameter list)으로 정의된다.
* 메서드를 호출할 때 Argument를 전달하여 파라미터 값을 제공한다.
* `java.lang` 패키지(System, String 등)는 모든 Java 프로그램에 암시적으로 import되므로 별도의 import 선언이 필요 없다.

## 4. Instance Variables and Encapsulation

Local variables(지역 변수)는 메서드가 종료되면 값이 사라지지만, Instance variables(인스턴스 변수)는 객체가 존재하는 동안 값을 유지한다.
* **Fields**: 클래스 선언 내부, 메서드 외부에 선언된 변수이다.
* **Instance Variable**: 클래스의 각 객체(Instance)가 자신만의 복사본을 유지하는 변수이다.
* **Private Access Modifier**: `private`으로 선언된 변수나 메서드는 해당 클래스 내부의 메서드에서만 접근 가능하다. 이를 Data hiding 또는 Information hiding이라고 한다.
* **Set and Get Methods**: 클라이언트 코드가 private 인스턴스 변수의 값을 설정(Set)하거나 조회(Get)할 수 있도록 하는 public 메서드이다.

![PDF p.25: GradeBook UML class diagram with private courseName attribute](img/Pasted%20image%2020260108154902.png)

UML에서 `+` 기호는 public, `-` 기호는 private 접근 제한자를 나타낸다.
인스턴스 변수는 초기화하지 않아도 Default initial value를 가진다 (String의 경우 null).

## 5. Primitive Types vs. Reference Types

Java의 타입은 두 가지로 나뉜다.
* **Primitive Types**: boolean, byte, char, short, int, long, float, double (총 8개).
* **Reference Types**: 기본형이 아닌 모든 타입(예: String, GradeBook 등). 객체의 메모리 위치를 참조(Reference)한다.

## 6. Initializing Objects with Constructors

Constructor(생성자)는 객체가 생성될 때 인스턴스 변수를 초기화하는 데 사용된다.
* 생성자의 이름은 클래스 이름과 반드시 동일해야 한다.
* 반환 타입(Return type)을 명시할 수 없다.
* `new` 키워드로 객체를 생성할 때 호출된다.
* 클래스에 생성자를 명시하지 않으면 컴파일러가 매개변수가 없는 Default constructor를 제공한다. 단, 생성자를 하나라도 선언하면 기본 생성자는 제공되지 않는다.

```java
// GradeBook.java
public class GradeBook {
	private String courseName;
	public GradeBook(String name) { courseName = name; }
	public void setCourseName(String name) { courseName = name; }
	public Sring getCourseName() { return courseName; }
	public S
}
```

## 7. Floating-Point Numbers and Type double

Floating-point number는 소수점이 있는 숫자이다.
* **float**: Single-precision 부동 소수점 숫자이다. 약 7자리의 유효 숫자를 가진다.
* **double**: Double-precision 부동 소수점 숫자이다. `float`보다 두 배의 메모리를 사용하며 약 15자리의 유효 숫자를 가진다.
* Java에서 실수는 기본적으로 `double` 타입으로 취급된다.
* `System.out.printf`에서 `%.2f` 포맷 지정자를 사용하면 소수점 둘째 자리까지 반올림하여 출력한다.

## 8. GUI and Graphics Case Study: Dialog Boxes

Java 애플리케이션은 `JOptionPane` 클래스를 사용하여 대화 상자(Dialog boxes)를 표시할 수 있다.
* **Message Dialog**: 사용자에게 메시지를 보여주는 창이다. `JOptionPane.showMessageDialog` 메서드를 사용한다.
* **Input Dialog**: 사용자로부터 데이터를 입력받는 창이다. `JOptionPane.showInputDialog` 메서드를 사용한다.
* `JOptionPane`의 메서드들은 `static` 메서드이므로 객체를 생성하지 않고 클래스 이름으로 직접 호출한다.

![PDF p.38: Using JOptionPane to display multiple lines in a dialog box]
