---
title: "Week 4 — 객체지향 & 아키텍처 설계"
description: 소프트웨어 테스팅 및 검증 강의(COSE0719) Week 4. 캡슐화·상속·다형성·아키텍처 패턴.
tags: [software-testing, course-note, object-oriented, architecture]
sidebar_position: 4
last_update:
  date: 2026-04-23
---

# 소프트웨어 테스팅 및 검증 — Week 4: 객체지향 개념 & 아키텍처 설계

## 개요

소프트웨어 테스팅 및 검증 강의(COSE0719) Week 4. 캡슐화·상속·다형성·아키텍처 패턴.

> **과목명:** 소프트웨어 테스팅 및 검증  
> **담당교수:** 이우진 (경북대학교 IT대학 컴퓨터학부, SW Testing 연구실)  
> **강의자료:** 2026_SWTesting4ObjectOrientedConcept, 2026_SWTesting4ArchDesign

---

## Part A. 객체지향 개념 (Object-Oriented Concepts based on Java)

---

## 1. 클래스 개념 (Class Concept)

### 1.1 캡슐화 (Encapsulation)

클래스는 **Interface(공개 부분)**와 **Body(은닉 부분)**로 구성된다.

| 구분 | 역할 |
|------|------|
| **Interface (WHAT)** | 객체가 제공하는 서비스를 기술하는 가시적 부분 |
| **Body (HOW)** | 요구 기능을 구현하는 은닉 부분 |

### 1.2 기본 생성자 (Default Constructor)

- 인자를 받지 않는 생성자
- 클래스에 생성자가 없으면 시스템이 자동으로 제공
- C++에서는 다른 생성자가 있으면 기본 생성자가 자동 생성되지 않아 배열 선언 시 오류 발생 가능

```java
public class Counter {
    private int value;
    public Counter() { value = 0; }       // Default constructor
    public Counter(int i) { value = i; }  // Parameterized constructor
}
```

---

## 2. 상속 (Inheritance)

### 2.1 클래스 중복 관리

상속은 기존 클래스의 정보를 재사용하여 새로운 클래스를 생성하는 강력한 **코드 재사용 메커니즘**이다. 기존 코드의 약 95%를 재사용하고 5%만 추가하여 새 클래스를 만들 수 있다.

| 용어 | 동의어 |
|------|--------|
| **Base Class** | Parents, SuperClass |
| **Derived Class** | Child, SubClass |

### 2.2 서브클래스 생성 과정

1. 슈퍼클래스와 서브클래스의 데이터 멤버 정보 입력
2. 생성자 호출로 객체 생성: **Step 1** — super 초기화 (`super()`) → **Step 2** — sub 초기화

```java
public class Student extends Person {
    private String school;
    public Student(String n, int a, String addr, String sch) {
        super(n, a, addr);   // 슈퍼클래스 생성자 호출
        school = sch;
    }
}
```

---

## 3. 오버라이딩 (Overriding)

오버라이딩의 세 가지 용도:

| 용도 | 설명 | 예시 |
|------|------|------|
| **Extension (확장)** | 상속된 동작에 서브클래스의 추가 동작을 더함 | `super.print()` 호출 후 추가 필드 출력 |
| **Adaptation (적응)** | 슈퍼클래스의 동작을 서브클래스에 맞게 명시적으로 변경 | SalesManager가 Salesman의 보너스 계산을 재정의 |
| **Optimization (최적화)** | 성능 향상을 위해 더 효율적인 알고리즘으로 재정의 | Triangle이 Polygon의 일반 면적 계산 대신 빠른 알고리즘 사용 |

---

## 4. 타입 변환과 다형성 (Polymorphism)

### 4.1 슈퍼-서브 클래스 간 타입 변환

| 변환 | 가능 여부 | 설명 |
|------|:---:|------|
| `SuperClass super = new SubClass()` | **가능** | 서브클래스는 슈퍼클래스 자리에 들어갈 수 있음 |
| `SubClass sub = new SuperClass()` | **불가능** | 슈퍼클래스는 서브클래스 자리에 들어갈 수 없음 (서브 전용 멤버 접근 불가) |

### 4.2 동적 바인딩 (Dynamic Binding)

오버라이딩된 함수의 경우, 실행 시점에 슈퍼클래스와 서브클래스 중 적절한 함수가 **동적으로 선택**된다.

```java
Person person;
person = p1;
person.print();   // Person의 print() 호출
person = s1;
person.print();   // Student의 print() 호출 (동적 바인딩)
```

### 4.3 다형성 (Polymorphism)

동일한 타입의 배열에 다양한 서브클래스 객체를 저장하고, 동일한 메서드 호출로 각 객체에 맞는 동작을 수행한다.

```java
ClosedFigure[] cf = new ClosedFigure[3];
cf[0] = new Triangle();
cf[1] = new Rectangle();
cf[2] = new Circle();
for (int i = 0; i < 3; i++)
    cf[i].draw();   // 각각 다른 draw() 실행
```

---

## 5. 추상 클래스와 인터페이스

### 5.1 추상 클래스 (Abstract Class)

| 구분 | 설명 |
|------|------|
| **Abstract Class** | 하나 이상의 추상 오퍼레이션 보유, 객체 생성 불가 |
| **Concrete Class** | 모든 오퍼레이션의 구현 보유, 객체 생성 가능 |

예: `Vehicle`(abstract) → `Car`, `Boat`, `Truck`(concrete) — 각각 `drive()` 구현

### 5.2 인터페이스 (Interface)

- 메서드는 항상 **public abstract** (선언 불필요)
- 필드는 암묵적으로 **final static**
- Java는 다중 상속 불가하나, **다중 인터페이스 구현은 가능**

```java
public class ClassName extends SuperclassName
    implements FirstInterface, SecondInterface, …
```

### 5.3 인터페이스의 활용 — 느슨한 결합(Loose Coupling)

| 결합 유형 | 구조 |
|----------|------|
| **강한 결합 (Strong Coupling)** | AAA(Concrete) → BBB(Concrete) |
| **약한 결합 (Weak Coupling)** | AAA(Concrete) → IBBB(Interface) ← BBB(Concrete) |

인터페이스를 사이에 두면 컴포넌트 간 의존성이 줄어들어 유지보수와 확장이 용이해진다.

---

## Part B. 아키텍처 설계 (Architectural Design)

---

## 6. 아키텍처 설계 개요

### 6.1 정의

아키텍처 설계는 소프트웨어 시스템의 **전체 구조**를 조직하고 설계하는 것이다. 설계와 요구공학 사이의 핵심 연결 고리로, 시스템의 주요 구조 컴포넌트와 그 관계를 식별한다. 결과물은 **아키텍처 모델**이다.

### 6.2 명시적 아키텍처의 장점

| 장점 | 설명 |
|------|------|
| **이해관계자 소통** | 시스템 이해관계자 간 논의의 초점으로 활용 |
| **시스템 분석** | 비기능적 요구사항 충족 여부 분석 가능 |
| **대규모 재사용** | 여러 시스템에 걸쳐 아키텍처 재사용, Product-line 아키텍처 개발 가능 |

---

## 7. 아키텍처 패턴 (Architectural Patterns)

### 7.1 MVC (Model-View-Controller)

| 항목 | 내용 |
|------|------|
| **구조** | Model(데이터 관리), View(데이터 표현), Controller(사용자 상호작용 관리) |
| **사용 시점** | 데이터를 다양한 방식으로 보고 상호작용해야 할 때, 미래 요구사항이 불확실할 때 |
| **장점** | 데이터와 표현의 독립적 변경 가능, 동일 데이터의 다양한 표현 지원 |
| **단점** | 데이터 모델과 상호작용이 단순할 때 불필요한 코드 복잡성 |

### 7.2 Layered Architecture (계층 아키텍처)

| 항목 | 내용 |
|------|------|
| **구조** | 관련 기능을 계층별로 조직, 하위 계층이 상위 계층에 서비스 제공 |
| **사용 시점** | 기존 시스템 위에 새 기능 구축, 팀별 계층 담당, 다단계 보안 필요 시 |
| **장점** | 인터페이스 유지 시 전체 계층 교체 가능, 인증 등 중복 기능으로 신뢰성 향상 |
| **단점** | 계층 간 깔끔한 분리가 어렵고, 다단계 해석으로 인한 성능 저하 가능 |

### 7.3 Repository Architecture (저장소 아키텍처)

| 항목 | 내용 |
|------|------|
| **구조** | 모든 데이터를 중앙 저장소에서 관리, 컴포넌트는 저장소를 통해서만 상호작용 |
| **사용 시점** | 대량 정보의 장기 저장, 데이터 주도 시스템 |
| **장점** | 컴포넌트 독립성, 한 컴포넌트의 변경이 전체에 전파, 일관된 데이터 관리 |
| **단점** | 단일 실패 지점(Single Point of Failure), 분산 배치 어려움 |

### 7.4 Client-Server Architecture (클라이언트-서버 아키텍처)

| 항목 | 내용 |
|------|------|
| **구조** | 독립 서버(서비스 제공) + 클라이언트(서비스 이용) + 네트워크 |
| **사용 시점** | 다양한 위치에서 공유 DB 접근, 가변적 부하 대응(서버 복제) |
| **장점** | 서버의 네트워크 분산 가능, 범용 기능의 공유 |
| **단점** | 서버가 단일 실패 지점(DoS 공격 취약), 네트워크 의존적 성능 |

### 7.5 Pipe and Filter Architecture (파이프-필터 아키텍처)

| 항목 | 내용 |
|------|------|
| **구조** | 각 처리 컴포넌트(필터)가 하나의 데이터 변환을 수행, 데이터가 파이프를 통해 흐름 |
| **사용 시점** | 입력을 별도 단계로 처리하여 관련 출력을 생성하는 데이터 처리 애플리케이션 |
| **장점** | 이해 용이, 변환 재사용, 비즈니스 프로세스와 유사, 순차/병렬 구현 가능 |
| **단점** | 변환 간 데이터 형식 합의 필요, 파싱/언파싱 오버헤드 |

---

## 8. 애플리케이션 아키텍처

### 8.1 개요

비즈니스 간 공통점이 많으므로 애플리케이션 시스템도 **공통 아키텍처**를 가지는 경향이 있다. 제네릭 애플리케이션 아키텍처를 특정 요구사항에 맞게 구성·적응하여 사용한다.

### 8.2 정보 시스템 아키텍처

트랜잭션 기반 시스템으로, 계층 구조로 조직된다: User Interface → User Communications → Information Retrieval → System Database

### 8.3 언어 처리 시스템

자연어·인공어를 입력받아 다른 표현으로 변환하는 시스템이다. 명령 인터프리터와 컴파일러 등이 해당하며, Repository 방식과 Pipe and Filter 방식 모두로 구현 가능하다.

---

## 핵심 키워드 정리

`캡슐화` `생성자` `상속` `오버라이딩` `다형성` `동적 바인딩` `추상 클래스` `인터페이스` `느슨한 결합` `아키텍처 설계` `MVC` `Layered Architecture` `Repository` `Client-Server` `Pipe and Filter` `정보 시스템 아키텍처` `언어 처리 시스템`