학번 :                     이름 :

---
#### 1. 아래의 문장을 참/거짓을 판단하시오. (각 1점)
- 배열을 생성할 때 부여되는 `length` 인스턴스 변수는 `final` 변수이므로 생성된 이후에는 그 값을 변경할 수 없다. (　　) 
- 향상된 for 문(Enhanced for statement)을 사용하면 배열의 요소를 읽는 것뿐만 아니라 값을 수정할 수도 있다. (　　)
- `static` 메서드 내부에서는 `this` 참조를 사용할 수 없으며, 같은 클래스의 non-static member에 직접 접근할 수 없다. (　　)
- 클래스에 constructor를 하나라도 명시적으로 선언하면, 자바 컴파일러는 default constructor를 자동으로 제공하지 않는다. (　　)
    
---
#### 2. 아래 문장에서 빈 칸에 들어갈 알맞은 용어를 적으시오. (각 1점)
- Variable-Length Argument Lists 선언 시, 여러 개의 인수를 받을 수 있도록 매개변수 타입 뒤에 추가하는 기호는 (　　　　　) 이다.
- 특정 변수가 클래스의 모든 객체 간에 공유되어 단 하나의 사본만 존재해야 할 때, 해당 필드 선언 시 (　　　　　) 키워드를 사용한다.
- 일반 배열과 달리 실행 시점에 데이터가 추가됨에 따라 동적으로 크기를 변경할 수 있는 `java.util` 패키지의 컬렉션 클래스는 (　　　　　) 이다.
---
#### 3. 아래 프로그램의 수행 결과를 적으시오. (1점)

```java
public class ArrayPassTest {
    public static void modifyArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) arr[i] *= 2;
    }
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3};
        modifyArray(numbers);
        for (int n : numbers) System.out.print(n + " ");
    }
}
```

**수행 결과**
```



```
---
#### 4. 빈칸 (A), (B)를 채워 프로그램을 완성하시오. (각 1점)

```java
public class ListTest { // 문자열을 저장하는 동적 배열 객체 생성
    public static void main(String[] args) {
        ArrayList<__(A)__> list = new ArrayList<__(A)__>();
        list.add("Apple");
        list.add("Banana");
        System.out.println("list size: " + list.__(B)__());
    }
}
```
(A) = _____________________ , (B) = _____________________
