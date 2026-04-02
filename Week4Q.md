학번 :                     이름 :

---
#### 1. 아래의 문장을 참/거짓을 판단하시오. (각 1점)
- 정적(static) 메서드는 같은 클래스의 인스턴스 변수(instance variable)에 직접 접근할 수 있다. (  )
- 메서드의 매개변수와 동일한 이름의 지역 변수를 메서드 본문 내에서 다시 선언해도 컴파일 오류가 발생하지 않는다. (  )
- 메서드 오버로딩(method overloading)에서 반환 타입만 다른 경우에도 컴파일러가 메서드를 구별할 수 있다. (  )
- `final` 키워드로 선언된 변수는 초기화된 후에도 값을 변경할 수 있다. (  )
---
#### 2. 아래 문장에서 빈 칸에 들어갈 알맞은 용어를 적으시오. (각 1점)
- 프로그램이 메서드를 호출할 때, 반환 주소와 지역 변수는 (        )에 저장되며, 이 구조는 LIFO 방식으로 동작한다.
- Java에서 `int` 타입의 값은 더 넓은 범위를 가지는 타입으로 자동 변환될 수 있는데, 이를 (        )이라 한다.
- 기본 타입의 인수는 (        ) 방식으로 전달되므로, 메서드 내에서 매개변수 값을 변경하더라도 호출자의 원래 변수에 영향을 주지 않는다.
---
#### 3. 아래 프로그램의 수행 결과를 적으시오. (1점)

```java
public class MathTest {
	public static void main(String[] args) {
		System.out.println(Math.floor(-9.8));
		System.out.println(Math.abs(-15));
		System.out.println(Math.max(10, 20));
		System.out.println(Math.pow(2, 3));
	}
}
```

**수행 결과**
```




```
---
#### 4. 빈칸 (A), (B)를 채워 프로그램을 완성하시오. (각 1점)

```java
import java.security.SecureRandom; // 주사위를 굴려 1~6의 난수를 20번 출력하는 프로그램
public class DiceRoll {
	public static void main(String[] args) {
		SecureRandom rand = new SecureRandom();
		for(int i = 1; i <= 20; i++) {
			int face = __(A)__ + rand.nextInt(__(B)__);
			System.out.printf("%d ", face);
		}
	}
}
```
(A) = _____________________ , (B) = _____________________