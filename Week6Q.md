학번 :                     이름 :

---
#### 1. 아래의 문장을 참/거짓을 판단하시오. (각 1점)
- Java는 다중 상속(multiple inheritance)을 지원하므로, 하나의 클래스가 여러 개의 직접 슈퍼클래스를 가질 수 있다. (　　) 
- 서브클래스의 생성자에서 슈퍼클래스의 생성자를 명시적으로 호출하지 않으면, Java는 자동으로 슈퍼클래스의 기본 생성자를 호출한다. (　　)
- 슈퍼클래스의 `private` 인스턴스 변수는 서브클래스에서 직접 접근할 수 있다. (　　)
- 슈퍼클래스의 `public` 메서드를 서브클래스에서 오버라이드할 때, 접근 제어자를 `protected`나 `private`으로 변경할 수 있다. (　　)
    
---
#### 2. 아래 문장에서 빈 칸에 들어갈 알맞은 용어를 적으시오. (각 1점)
- 상속에서 기존 클래스를 (　　　　　)(이)라 하고, 새로 만들어지는 클래스를 (　　　　　)(이)라 한다.
- Java의 모든 클래스는 직접 또는 간접적으로 (　　　　　) 클래스를 상속한다.
- 상속 관계에서 "A is-a B"는 (　　　　　)을/를 나타내고, "A has-a B"는 (　　　　　)을/를 나타낸다.
---
#### 3. 아래 프로그램의 수행 결과를 적으시오. (1점)

```java
public class Animal {
    public String speak() { return "..."; }
    @Override
    public String toString() { return "Animal: " + speak(); }
}

public class Dog extends Animal {
    @Override
    public String speak() { return "Woof!"; }
    @Override
    public String toString() { return "Dog: " + speak(); }
}

public class TestAnimal {
    public static void main(String[] args) {
        Dog d = new Dog();
        System.out.println(d.speak());
        System.out.println(d);
    }
}
```

**수행 결과**
```


```
---
#### 4. 빈칸 (A), (B)를 채워 프로그램을 완성하시오. (각 1점)
> `BasePlusCommissionEmployee`는 `CommissionEmployee`를 상속하며, 생성자에서 슈퍼클래스의 생성자를 호출하고, `earnings()` 메서드를 오버라이드하여 기본급(baseSalary)에 슈퍼클래스의 `earnings()`를 더한 값을 반환한다.

```java
public class BasePlusCommissionEmployee extends CommissionEmployee {
    private double baseSalary;
    public BasePlusCommissionEmployee(String first, String last,
        String ssn, double sales, double rate, double salary) {
        __(A)__;
        setBaseSalary(salary);
    }
	// getter, setter 생략
    @Override
    public double earnings() {
        return getBaseSalary() + __(B)__;
    }
}
```
(A) = \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  (B) = \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_