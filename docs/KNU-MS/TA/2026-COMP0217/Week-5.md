## 1. Arrays and ArrayLists

### Introduction
Arrays는 동일한 type의 관련 데이터 항목으로 구성된 Data structures이다. 이들은 관련된 값들의 그룹을 편리하게 처리할 수 있게 해주지만, 생성된 후에는 길이가 고정되어 변경되지 않는다. 배열의 각 요소는 index(또는 subscript)를 통해 참조하며, 인덱스는 0부터 시작한다.

![PDF p.6: A 12-element array](img/Pasted%20image%2020260108164808.png)

### Arrays 선언 및 생성
Array 객체는 키워드 new를 사용하여 생성한다. 배열 생성 식에서는 요소의 type과 개수를 지정해야 한다.
`int[] c = new int[12];`
또한 Array initializer를 사용하여 배열을 생성하고 요소를 초기화할 수 있다. 이는 중괄호 안에 쉼표로 구분된 식들의 목록으로 구성된다.

### Enhanced for Statement
Enhanced for statement는 카운터를 사용하지 않고 배열이나 컬렉션의 요소를 반복(iterate)할 수 있게 해준다. 이는 배열의 범위를 벗어나는 오류를 방지한다.
문법: for (parameter : arrayName) statement
이 구문은 배열의 요소를 수정할 수 없으며 오직 접근만 가능하다.

### Passing Arrays to Methods
메서드에 배열을 전달할 때는 대괄호 없이 배열의 이름만 지정한다. 배열 객체는 자신의 length를 알고 있으므로 길이를 별도로 전달할 필요가 없다. 배열 전체나 객체 참조 배열의 요소가 인자로 전달될 때, 호출된 메서드는 해당 참조의 복사본을 받는다(Pass-by-value). 이는 메서드가 원본 배열 객체에 직접 접근하고 수정할 수 있음을 의미한다. 반면 primitive type의 개별 요소가 전달될 때는 값의 복사본이 전달된다.

### Multidimensional Arrays
2차원 배열은 행(row)과 열(column)로 배열된 값들의 테이블을 나타내는 데 자주 사용된다. Java는 다차원 배열을 직접 지원하지 않으며, 배열의 요소가 또 다른 배열인 1차원 배열로 이를 구현한다.
초기화 예시: `int[][] b = { {1, 2}, {3, 4} };`
각 행은 서로 다른 길이를 가질 수 있다.

![PDF p.51: Two-dimensional array with three rows and four columns](img/Pasted%20image%2020260108164845.png)

### Variable-Length Argument Lists
메서드가 불특정 다수의 인자를 받을 수 있도록 가변 길이 인자 리스트를 생성할 수 있다. 타입 뒤에 ellipsis(...)를 붙여 표시하며, 이는 파라미터 리스트의 마지막에만 위치할 수 있다.

### Class Arrays
java.util 패키지의 Arrays 클래스는 배열 조작을 위한 static 메서드들을 제공한다.
sort: 배열 정렬
binarySearch: 정렬된 배열 검색
equals: 배열 비교
fill: 배열에 값 채우기

### Introduction to Collections and Class ArrayList
Java API는 관련된 객체 그룹을 저장하기 위해 collections라는 미리 정의된 데이터 구조를 제공한다. ArrayList는 배열과 유사하지만 실행 시간에 크기가 동적으로 조정된다.
ArrayList\<T\>에서 T는 컬렉션에 저장될 요소의 타입을 나타내는 placeholder이며, nonprimitive type만 사용할 수 있다.
주요 메서드: add, clear, contains, get, indexOf, remove, size.

## 2. Classes and Objects: A Deeper Look

### Time Class Case Study
Time1 클래스는 하루의 시간을 나타낸다. 일관된 상태를 유지하기 위해 hour, minute, second는 private 인스턴스 변수로 선언되고, public 메서드를 통해서만 접근 가능하다. 생성자나 setTime 메서드는 입력값이 유효한지 검증하고, 유효하지 않은 경우 일관된 값(예: 0)으로 설정한다.

### Controlling Access to Members
Access modifiers인 public과 private은 클래스의 변수와 메서드에 대한 접근을 제어한다. public 메서드는 클래스의 public interface를 구성한다. private 멤버는 클래스 외부에서 접근할 수 없다.

### this Reference
모든 객체는 키워드 this를 통해 자기 자신에 대한 참조에 접근할 수 있다. non-static 메서드 내에서 인스턴스 변수나 다른 메서드를 참조할 때 암묵적으로 사용된다. 또한 메서드의 파라미터나 로컬 변수가 인스턴스 변수와 이름이 같을 때(shadowing), 인스턴스 변수를 명시적으로 가리키기 위해 사용한다.

```java
public class ThisTest {
	public static void main(String[] args) {
		SimpleTime time = new SimpleTime(15, 30, 19);
		System.out.println(time.buildString());
	}
}

class SimpleTime {
	private int hour;
	private int minute;
	private int second;
	public SimpleTime(int hour, int minute, int secound) {
		this.hour = hour;
		this.minute = minute;
		this.second = second;
	}
	public String buildString() {
		return String.format("%24s: %s\n%24s: %s",
			"this.toUniversalString()", this.toUniversalString(),
			"toUniversalString()", toUniversalString());
	}
	public String toUniversalString() {
		return String.format("%02d:%02d:%02d",
			this.hour, this.minute, this.second);
	}
}
```

### Overloaded Constructors
Overloaded constructors는 서로 다른 시그니처를 가진 여러 생성자를 제공하여 객체를 다양한 방식으로 초기화할 수 있게 한다. 생성자 본문의 첫 줄에 this(...)를 사용하여 동일 클래스의 다른 생성자를 호출할 수 있으며, 이는 초기화 코드를 재사용하는 데 유용하다.

### Set and Get Methods
Set 메서드(mutator)와 Get 메서드(accessor)는 private 인스턴스 변수에 접근하고 수정하는 통로를 제공한다. 이를 통해 데이터의 무결성을 위한 Validity Checking을 수행할 수 있으며, 구현 세부 사항을 클라이언트로부터 숨길 수 있다.

### Composition
클래스는 다른 클래스의 객체에 대한 참조를 멤버로 가질 수 있으며, 이를 Composition 또는 has-a 관계라고 한다. 예를 들어, Employee 객체는 생일과 고용일을 나타내는 Date 객체에 대한 참조를 포함할 수 있다.

```java
// Date.java
public class Date {
	private int month;
	private int day;
	private int year;
	public Date(int theMonth, int theDay, int theYear) {
		month = checkMonth(theMonth);
		year = theYear;
		day = checkDay(theDay);
		
		System.out.printf("Date object constructor for date %s\n", this);
	}
	private int checkMonth(int testMonth) {
		if(testMonth > 0 && testMonth <= 12)
	}
}
//Employee.java
public class Employee {
	private String firstName;
	private String lastName;
	private Date birthDate;
	private Date hireDate;
	
	public Employee(String first, String last, Date dateOfBirth, Date dateOfHire) {
		firstName = first;
		lastName = last;
		birthDate = dateOfBirth;
		hireDate = dateOfHire;
	}
	public String toString() {
		return String.format("%s, %s hired: %s Birthday: %s",
			lastName, firstName, hireDate, birthDate);
	}
}
//EmployeeTest.java
public class EmployeeTest {
	public static void main(String[] args) {
		Date birth = new Date(5, 20, 1999);
		Date hire = new Date(9, 1, 2022);
		Employee employee = ne Employee("Jeongin", "Kim", birth, hire);
		
		System.out.println(employee);
	}
}
```

### Enumerations
enum 타입은 고유한 식별자로 표현되는 상수 집합을 정의한다. enum은 참조 타입이며, 생성자, 필드, 메서드를 포함할 수 있다. enum 상수는 암묵적으로 static이자 final이다. values 메서드는 모든 enum 상수를 배열로 반환한다.

### Garbage Collection and Method finalize
JVM은 Garbage Collection을 수행하여 더 이상 참조되지 않는 객체가 점유한 메모리를 회수한다. finalize 메서드는 객체가 수거되기 전에 종료 작업을 수행하기 위해 호출되지만, 실행 시점이 불확실하므로 사용을 지양해야 한다.

### static Class Members
static 변수는 클래스의 모든 객체가 공유하는 하나의 데이터 복사본을 나타낸다. static 메서드는 클래스의 인스턴스가 생성되지 않아도 호출할 수 있다. 따라서 static 메서드 내부에서는 this 참조를 사용할 수 없다.

### final Instance Variables
final 키워드는 변수가 수정 불가능함(상수)을 명시한다. final 인스턴스 변수는 선언 시 또는 모든 생성자에서 반드시 초기화되어야 한다. 초기화된 이후에는 값을 변경할 수 없다.

### Packages
Package는 관련된 클래스들을 그룹화하여 관리하고 소프트웨어 재사용을 용이하게 한다. 소스 파일의 첫 부분에 package 선언을 사용하여 해당 클래스가 속할 패키지를 지정한다. 패키지 이름은 일반적으로 도메인 이름을 역순으로 사용하여 유일성을 보장한다.
