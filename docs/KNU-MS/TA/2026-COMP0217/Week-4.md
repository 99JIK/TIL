## 1. Introduction 및 Program Modules
큰 프로그램을 개발하고 유지보수하는 가장 좋은 방법은 프로그램을 작고 단순한 조각, 즉 module로 구성하는 것이다. 이를 divide and conquer 전략이라고 한다. Java에서 프로그램은 메서드와 클래스를 조합하여 구성된다. 메서드는 프로그램을 모듈화하여 작업을 독립적인 단위로 분리하는 데 도움을 준다.

메서드를 사용하면 코드를 한 번만 작성하여 프로그램의 여러 위치에서 재사용할 수 있으며, 구현 세부 사항을 다른 메서드로부터 숨길 수 있다. 이는 소프트웨어 엔지니어링의 관점에서 매우 중요하다. 호출자(caller)와 피호출자(called method) 사이에는 계층적인 관계가 형성된다. 호출자(boss)는 피호출자(worker)에게 작업을 요청하고, 피호출자는 작업을 수행한 후 결과를 반환한다.

![PDF p.7: Hierarchical boss-method/worker-method relationship](img/Pasted%20image%2020260108163052.png)

## 2. static Methods, static Fields 및 Class Math
어떤 메서드들은 특정 객체의 내용에 의존하지 않고 작업을 수행한다. 이러한 메서드는 클래스 전체에 적용되며 static method 또는 class method라고 부른다. 메서드를 static으로 선언하려면 메서드 선언의 반환 타입 앞에 static 키워드를 붙인다. static 메서드는 ClassName.methodName(arguments) 형식으로 호출한다.

Math 클래스는 일반적인 수학 계산을 수행하기 위한 static 메서드들의 집합을 제공한다. 주요 메서드는 다음과 같다.
- abs(x): 절대값
- ceil(x): 올림 (x보다 작지 않은 가장 작은 정수)
- cos(x): 코사인
- exp(x): 지수 함수
- floor(x): 내림 (x보다 크지 않은 가장 큰 정수)
- log(x): 자연 로그
- max(x, y): 더 큰 값 반환
- min(x, y): 더 작은 값 반환
- pow(x, y): 거듭제곱
- sin(x): 사인
- sqrt(x): 제곱근
- tan(x): 탄젠트

Math 클래스는 또한 일반적인 수학 상수를 위한 필드를 제공한다. Math.PI와 Math.E는 public, final, static으로 선언되어 있다. final 키워드는 해당 필드의 값이 초기화된 후 변경될 수 없음을 의미한다.

인스턴스 변수(instance variable)는 클래스의 각 객체마다 메모리에 별도로 존재하지만, static 필드(class variable)는 해당 클래스의 모든 객체가 하나의 복사본을 공유한다. main 메서드가 static으로 선언된 이유는 JVM이 객체를 생성하지 않고도 main 메서드를 호출할 수 있게 하기 위함이다.

## 3. Declaring Methods with Multiple Parameters
메서드는 쉼표로 구분된 목록을 통해 여러 개의 파라미터를 가질 수 있다. 메서드 호출 시 전달되는 argument의 개수는 메서드 선언에 있는 파라미터의 개수와 일치해야 하며, 각 argument의 타입은 대응되는 파라미터의 타입과 일치해야 한다.

## 4. Notes on Declaring and Using Methods
메서드를 호출하는 방법은 세 가지가 있다.
1. 같은 클래스 내의 다른 메서드를 호출할 때는 메서드 이름만 사용한다.
2. 객체를 참조하는 변수 뒤에 점(.)과 메서드 이름을 붙여 해당 객체의 메서드를 호출한다.
3. 클래스 이름 뒤에 점(.)과 메서드 이름을 붙여 static 메서드를 호출한다.

non-static 메서드는 같은 클래스의 모든 메서드와 필드에 직접 접근할 수 있다. 반면 static 메서드는 같은 클래스의 다른 static 메서드나 static 필드에만 직접 접근할 수 있다. static 메서드가 non-static 멤버에 접근하려면 객체의 참조를 사용해야 한다.

메서드의 제어권은 메서드의 닫는 중괄호에 도달하거나, return; 문을 만나거나, return expression; 문을 통해 결과를 반환할 때 호출자에게 돌아간다.

## 5. Method-Call Stack and Activation Records
스택(Stack) 데이터 구조는 접시 더미와 유사한 후입선출(LIFO) 구조이다. 프로그램이 메서드를 호출할 때, 피호출 메서드는 호출자에게 돌아갈 주소를 알아야 한다. 이 주소는 program-execution stack(또는 method-call stack)에 push된다.

스택은 메서드 호출 시 사용되는 로컬 변수를 저장하기 위한 메모리 공간도 포함한다. 이를 activation record 또는 stack frame이라고 한다. 메서드 호출이 너무 많이 발생하여 스택에 activation record를 저장할 공간이 부족해지면 stack overflow 에러가 발생한다.
```c
int add(int x, int y) { // (2)
	int res;
	res = x + y;
	return res;
}
void main() {
	int a, b, c;
	a = 10;
	b = 20; // (1)
	c = add(a, b);
	printf("Result = %d\n", c); // (3)
}
```
![PDF p.26: Stack memory visualization during method call (1)](img/Pasted%20image%2020260108163425.png)
![PDF p.26: Stack memory visualization during method call (2)](img/Pasted%20image%2020260108163504.png)
![PDF p.26: Stack memory visualization during method call (3)](img/Pasted%20image%2020260108163516.png)

## 6. Argument Promotion and Casting
Argument promotion은 argument의 값을 메서드가 예상하는 파라미터 타입으로 변환하는 것을 말한다. Java의 promotion rule에 따라 변환이 수행되며, 만족되지 않으면 컴파일 에러가 발생한다. 일반적으로 더 작은 범위의 타입은 데이터 손실 없이 더 큰 범위의 타입으로 승격될 수 있다.


| Type      | Valid promotions                                                 |
| --------- | ---------------------------------------------------------------- |
| `double`  | None                                                             |
| `float`   | `double`                                                         |
| `long`    | `float`, `double`                                                |
| `int`     | `long`, `float`, `double`                                        |
| `char`    | `int`, `long`, `float`, `double`                                 |
| `short`   | `int`, `long`, `float`, `double` (but not `char`)                |
| `byte`    | `short`, `int`, `long`, `float`, `double` (but not `char`)       |
| `boolean` | None (`boolean` values are not considered to be numbers in Java) |


## 7. Java API Packages
Java는 관련된 클래스들을 묶어 package로 관리한다. 주요 패키지는 다음과 같다.
- java.util: 유틸리티 클래스, 날짜/시간 조작, Random 클래스 등
- java.io: 입출력 관련 클래스
- java.lang: 기본적인 Java 언어 클래스 (자동으로 import됨)
- java.awt: GUI 컴포넌트 및 그래픽 관련 클래스
- javax.swing: 경량 GUI 컴포넌트

## 8. Random-Number Generation
시뮬레이션과 게임에는 난수 생성이 필요하다. Java는 java.util 패키지의 Random 클래스와 Math 클래스의 static 메서드 random을 제공한다. Random 클래스의 nextInt() 메서드는 0부터 지정된 값 미만의 정수를 반환한다.

난수의 범위를 조절하기 위해 scaling과 shifting을 사용한다. 일반적인 공식은 다음과 같다.
number = shiftingValue + randomNumbers.nextInt(scalingFactor);
여기서 shiftingValue는 원하는 범위의 시작 숫자를, scalingFactor는 범위 내 숫자의 개수를 의미한다.
```java
import java.util.Random;

public class RandomIntegers {
	public static void main(String[] args) {
		Random randomNumbers = new Random();
		int face;
		
		for(int counter = 1; counter <= 20; counter++) {
			face = 1 + randomNumbers.nextInt(6);
			System.out.printf("%d ", face);
			if(counter % 5 == 0) System.out.println();
		}
	}
}
```

테스트와 디버깅을 위해 난수 생성의 반복성을 확보해야 할 때가 있다. 이를 위해 Random 객체를 생성할 때 시드(seed) 값을 전달할 수 있다. 동일한 시드 값을 사용하면 동일한 순서의 난수가 생성된다.

## 9. Scope of Declarations
Scope는 선언된 식별자(이름)가 프로그램 내에서 참조될 수 있는 영역을 의미한다.
1. 파라미터의 scope는 해당 메서드의 본문이다.
2. 로컬 변수의 scope는 선언된 지점부터 해당 블록의 끝까지이다.
3. for 문의 초기화 섹션에서 선언된 변수의 scope는 for 문의 본문과 헤더이다.
4. 메서드나 필드의 scope는 클래스 전체이다.

메서드 내의 로컬 변수가 클래스의 필드와 같은 이름을 가질 경우, 로컬 변수가 필드를 가리(shadow)게 된다.

## 10. Method Overloading
Method overloading은 같은 클래스 내에 같은 이름을 가진 메서드를 여러 개 선언하는 것이다. 단, 파라미터의 개수, 타입, 또는 순서가 달라야 한다. 컴파일러는 호출 시 제공된 argument를 통해 적절한 메서드를 선택한다.

주의할 점은 반환 타입만 다른 경우는 오버로딩으로 구분되지 않으며 컴파일 에러가 발생한다는 것이다. 오버로딩된 메서드들은 서로 다른 반환 타입을 가질 수 있지만, 반드시 파라미터 리스트가 달라야 한다.

## 11. GUI and Graphics Case Study
Java의 GUI 그래픽 기능을 사용하여 도형을 그릴 수 있다. JPanel을 상속받아 paintComponent 메서드를 오버라이딩하여 그래픽을 그린다. Graphics 객체는 그리기 메서드를 제공한다.
- drawRect(x, y, width, height): 사각형을 그린다.
- drawOval(x, y, width, height): bounding rectangle 내에 접하는 타원을 그린다.

```java
import javax.swing.JFrame;
import javax.swing.JOptionPane;

public class ShapesTest {
	public static void main(String[] args) {
		String input = JOptionPane.showInputDialog(
			"Enter 1 to draw rectangles\n" +
			"Enter 2 to draw ovals");
		int choice = Integer.parseInt(input);
		Sh
	}
}
```

색상은 java.awt 패키지의 Color 클래스를 사용한다. RGB 값(0~255)을 사용하여 색상을 정의하며, 미리 정의된 static Color 객체(Color.RED, Color.BLUE 등)도 사용할 수 있다.
- setColor(Color c): 현재 그리기 색상을 설정한다.
- fillRect(x, y, width, height): 채워진 사각형을 그린다.
- fillOval(x, y, width, height): 채워진 타원을 그린다.

![PDF p.61: Smiley face drawn with filled shapes]