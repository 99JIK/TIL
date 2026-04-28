학번 :                     이름 :

---
#### 1. 아래의 문장을 참/거짓을 판단하시오. (각 1점)
- `abstract` 클래스는 직접 객체를 생성할 수 없으며, 반드시 상속을 위한 부모 클래스로만 사용해야 한다. (　　) 
- 인터페이스에서 선언된 메서드는 별도의 키워드를 붙이지 않아도 암묵적으로 public abstract이며, 모든 필드는 `public static final`이다. (　　)
- 부모 클래스에서 `final`로 선언된 메서드는 자식 클래스에서 오버라이딩할 수 있다. (　　)
- JUnit에서 `@Before` 어노테이션이 붙은 메서드는 전체 테스트 클래스에서 단 한 번만 실행된다. (　　)
    
---
#### 2. 아래 문장에서 빈 칸에 들어갈 알맞은 용어를 적으시오. (각 1점)
- 부모 클래스 타입의 변수를 통해 메서드를 호출할 때, 컴파일 시점이 아닌 실행 시간에 실제 객체의 타입에 따라 오버라이딩된 메서드가 호출되는 현상을(　　　　　)(이)라 한다.
- 추상 클래스를 상속받은 구체 클래스가 부모의 추상 메서드를 구현하지 않으면, 해당 자식 클래스 역시 (　　　　　) 클래스로 선언되어야 한다.
- JUnit에서 특정 테스트 메서드가 지정된 시간 내에 수행을 완료하지 못하면 테스트를 실패로 처리하려면 `@Test` 어노테이션에 (　　　　　) 속성을 사용한다.
---
#### 3. 아래 프로그램의 수행 결과를 적으시오. (1점)

```java
interface Speakable { String speak();}
class Cat implements Speakable {
    @Override
    public String speak() { return "Meow";}
}
class Duck implements Speakable {
    @Override
    public String speak() { return "Quack";}
}
public class AnimalTest {
    public static void main(String[] args) {
        Speakable[] animals = { new Cat(), new Duck(), new Cat() };
        for (Speakable a : animals) { System.out.println(a.speak());}
    }
}
```

**수행 결과**
```


```
---
#### 4. 빈칸 (A), (B)를 채워 프로그램을 완성하시오. (각 1점)
> 다음 코드는 `Shape` 배열을 순회하면서, 해당 객체가 `Circle` 타입일 경우에만 다운캐스팅하여 반지름을 출력하는 프로그램이다. 

```java
for (Shape s : shapes) {
    if (s __(A)__ Circle) {
        Circle c = (__(B)__) s;
        System.out.println("Radius: " + c.getRadius());
    }
}
```
(A) = \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  (B) = \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_