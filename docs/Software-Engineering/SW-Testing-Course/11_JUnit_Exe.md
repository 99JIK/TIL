# 소프트웨어 테스팅 및 검증 — Week 11: Test Driven Development & JUnit

> **과목명:** 소프트웨어 테스팅 및 검증  
> **담당교수:** 이우진 (경북대학교 IT대학 컴퓨터학부, SW Testing 연구실)  
> **강의자료:** 2026_SWTesting11JUnit_Exe

---

## 1. 기타 SW 테스팅 기법 (Other SW Testing Techniques)

### 1.1 Random Testing

- 무작위로 독립적인 입력을 생성하는 **블랙박스 테스팅**
- 명세 없이 예외(exception)가 발생하는지 확인

### 1.2 Mutation Testing

- 새로운 소프트웨어 테스트를 설계하고 기존 테스트의 **품질을 평가**하는 데 사용
- 테스트 스위트는 탐지된 **변이체(mutant) 비율**로 측정
- **Mutation Operators:** 문장 삭제/중복/삽입, 불리언 부분식을 true/false로 대체, 산술/관계 연산자 대체, 변수를 같은 범위의 다른 변수로 대체

### 1.3 Concolic Testing

- "Concolic" = **Concrete + Symbolic**
- 기존 랜덤 테스팅의 개선된 화이트박스 기법 (테스트 케이스 수가 너무 많을 때)
- **기호 실행(Symbolic Execution)** + **정리 증명기(Theorem Prover)**를 사용하여 코드 커버리지를 최대화하는 테스트 입력을 생성
- 임의의 입력(x=0, y=0)으로 시작하여 경로 표현식을 계산하고, 아직 커버되지 않은 경로를 찾아냄

### 1.4 Regression Testing

- 개선, 패치, 구성 변경 등의 변경 후 **새로운 버그를 발견**하기 위한 테스팅
- 변경이 **새로운 결함을 도입하지 않았음**을 보장

### 1.5 Conformance Testing

- 제품이나 시스템이 **명세, 계약, 규정의 요구사항을 준수**하는지 결정하기 위한 테스팅

---

## 2. Test Driven Development (TDD) 개요

### 2.1 TDD란?

TDD는 **테스팅과 코드 개발을 교차(inter-leave)**하는 프로그램 개발 접근법이다. 코드 전에 테스트를 먼저 작성하고, 테스트 통과가 개발의 핵심 동인이 된다. 코드를 **점진적으로** 개발하며, 해당 증분의 테스트를 함께 개발한다. 현재 코드가 테스트를 통과할 때까지 다음 증분으로 넘어가지 않는다. XP 등 애자일 방법론의 일부로 도입되었으나, plan-driven 프로세스에서도 사용 가능하다.

### 2.2 왜 TDD인가?

- 프로그래머는 테스팅을 **싫어함** — 처음에는 꼼꼼하지만 반복될수록 성의 없어짐
- 테스팅은 **지루한 작업**으로 여겨짐
- 테스팅은 다른 부서/사람의 일이라고 생각하기 쉬움
- TDD는 프로그래머가 **반복 가능한 테스트를 유지**하도록 장려
- 테스트가 Code Under Test(CUT)와 함께 존재하며, 매 변경 후 실행 가능

### 2.3 TDD 프로세스 흐름

1. **(Re)Write a test** — 테스트를 작성
2. **Check if the test fails** — 테스트 실패 확인 (아직 기능 미구현이므로 실패해야 함)
3. **Write production code** — 프로덕션 코드 작성
4. **Run all tests** — 모든 테스트 실행
5. Test(s) fail → 3번으로 돌아가 코드 수정
6. **All tests succeed** → **Clean up code** (리팩토링)
7. **Repeat** — 다음 기능에 대해 1번부터 반복

### 2.4 TDD 프로세스 활동

1. 필요한 기능의 **증분을 식별** (소규모, 수 줄의 코드로 구현 가능)
2. 해당 기능에 대한 **자동화된 테스트 작성**
3. 기존 모든 테스트와 함께 **테스트 실행** (기능 미구현 → 새 테스트 실패)
4. **기능 구현** 후 테스트 **재실행**
5. 모든 테스트 성공 → **다음 기능 증분**으로 이동

### 2.5 TDD 적용 현안

테스트 케이스 생성 시점을 어디에 배치하느냐에 따라 4가지 수준:

- All Development → All Test Cases (기존 개발방법)
- One Module Development → One Test Case (모듈별 테스트)
- **One Test Case → One Module Development** (모듈별 TDD)
- **All Test Cases → All Development** (전체 TDD)

---

## 3. JUnit 개념 및 활용

### 3.1 JUnit의 역사

- Kent Beck이 1990년대 중반 Smalltalk 최초의 **xUnit** 자동 테스트 도구 개발
- Beck과 Gamma(GoF)가 취리히→워싱턴 D.C. 비행 중 **JUnit** 개발
- JUnit은 Java의 **TDD 표준 도구**가 됨 (junit.org)
- Eclipse, BlueJ, JBuilder, DrJava 등 많은 Java IDE에 JUnit 테스트 생성기 내장
- xUnit 도구는 Perl, C++, Python, Visual Basic, C# 등 다른 언어로도 확장됨

### 3.2 JUnit 테스트 작성 기본 구조

**Account 클래스 예제:**

```java
public class Account {
    private double balance;
    public Account(double initialBalance) { ... }
    public void credit(double amount) { ... }
    public double getBalance() { ... }
}
```

**JUnit 테스트 클래스:**

```java
import static org.junit.Assert.*;
import org.junit.Test;

public class JUnitAccountTest {
    @Test
    public void testAccountConstructor() {
        Account ac = new Account(100);
        assertEquals("Constructor check", 100, ac.getBalance(), 0);
    }

    @Test
    public void testAccountCredit() {
        Account ac = new Account(100);
        ac.credit(100);
        assertEquals("Credit check", 200, ac.getBalance(), 0);
    }
}
```

### 3.3 Eclipse에서 JUnit 실행

- Package 뷰에서 테스트 클래스 선택 → Run As → **JUnit Test**
- **Green Bar:** 테스트 성공 (Runs: 1/1, Errors: 0, Failures: 0)
- **Red Bar:** 테스트 실패 (Runs: 1/1, Errors: 0, Failures: 1)

---

## 4. JUnit Annotation 정리

### 4.1 JUnit 4 주요 Annotation

|Annotation|설명|
|---|---|
|`@Test`|단위 테스트를 수행할 Test Case를 나타냄 (여러 개 가능, 모두 수행)|
|`@Test(timeout=10)`|10ms가 지나면 timeout 처리|
|`@Test(expected=E1)`|예상되는 Exception 설정에 활용|
|`@Ignore`|단위 테스트에서 제외|
|`@Ignore("이유설명")`|제외 이유를 추가 가능|
|`@Before`|각각의 단위 테스트 실행 **전에 매번** 수행|
|`@After`|각각의 단위 테스트 실행 **후에 매번** 수행|
|`@BeforeClass`|전체 테스트 수행 **전에 한 번만** 수행|
|`@AfterClass`|전체 테스트 수행 **후에 한 번만** 수행|

### 4.2 JUnit 4 vs JUnit 5 Annotation 비교

|기능|JUnit 4|JUnit 5|
|---|---|---|
|테스트 표시|`@Test`|`@Test`|
|실행 전 (매번)|`@Before`|`@BeforeEach`|
|실행 후 (매번)|`@After`|`@AfterEach`|
|전체 전 (한 번)|`@BeforeClass`|`@BeforeAll`|
|전체 후 (한 번)|`@AfterClass`|`@AfterAll`|
|비활성화|`@Ignore`|`@Disabled`|

### 4.3 주요 Assert 메서드

|메서드|설명|
|---|---|
|`assertEquals(expected, actual)`|두 값이 같은지 확인|
|`assertEquals(msg, expected, actual, delta)`|부동소수점 비교 (delta: 허용 오차)|
|`assertTrue(condition)`|조건이 true인지 확인|
|`assertFalse(condition)`|조건이 false인지 확인|
|`assertNull(object)`|객체가 null인지 확인|
|`assertNotNull(object)`|객체가 null이 아닌지 확인|
|`assertSame(obj1, obj2)`|두 참조가 같은 객체를 가리키는지 확인|
|`fail()`|무조건 실패 (도달하면 안 되는 코드 확인용)|

---

## 5. JUnit vs TestNG 비교

|항목|JUnit|TestNG|
|---|---|---|
|**기본 목적**|단위 테스트|단위 + 통합 + 대규모|
|**Annotation**|O|O|
|**병렬 실행**|제한적|강력|
|**그룹화**|약함|강력|
|**XML 설정**|거의 없음|강력|
|**데이터 기반 테스트**|제한적|강력|

---

## 6. JUnit 테스트 실행 라이프사이클

테스트 실행 순서:

```
@BeforeClass (전체 1회)
  ├─ @Before (매 테스트 전)
  │   └─ @Test (testMethod1)
  ├─ @After (매 테스트 후)
  ├─ @Before
  │   └─ @Test (testMethod2)
  ├─ @After
  └─ ...
@AfterClass (전체 1회)
```

`@Before`/`@After`는 각 `@Test` 메서드마다 **독립적으로** 실행되어 테스트 간 격리를 보장한다.

---

## 핵심 키워드 정리

`Random Testing` `Mutation Testing` `Mutation Operator` `Concolic Testing` `Symbolic Execution` `Regression Testing` `Conformance Testing` `TDD` `Test First` `Red-Green-Refactor` `JUnit` `xUnit` `Kent Beck` `@Test` `@Before` `@After` `@BeforeClass` `@AfterClass` `@Ignore` `assertEquals` `assertTrue` `assertNull` `JUnit 4 vs JUnit 5` `JUnit vs TestNG` `Test Lifecycle`