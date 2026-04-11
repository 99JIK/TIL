# 소프트웨어 테스팅 및 검증 — Week 6: 디자인 패턴 & 행위 모델 (시퀀스 다이어그램)

> **과목명:** 소프트웨어 테스팅 및 검증  
> **담당교수:** 이우진 (경북대학교 IT대학 컴퓨터학부, SW Testing 연구실)  
> **강의자료:** 2026_SWTesting6DesignPattern_BehavioralModel

---

## Part A. 디자인 패턴 (Design Patterns)

---

## 1. 디자인 패턴 개요

### 1.1 정의와 필요성

디자인 패턴은 객체지향 소프트웨어 개발을 위한 **검증된 아키텍처**로, 업계 경험으로부터 축적되었다.

**효과:**
- 설계 프로세스의 복잡성 감소
- 미래 시스템에서의 설계 재사용 촉진
- 일반적인 설계 실수와 함정 식별
- 구현 언어와 무관한 설계 가능
- 공통 설계 "어휘" 확립
- 소프트웨어 개발 과정의 설계 단계 단축

### 1.2 역사와 분류

Gamma, Helm, Johnson, Vlissides ("**Gang of Four**")가 1995년 23가지 디자인 패턴을 확립하였다.

| 분류 | 목적 | Scope: Class | Scope: Object |
|------|------|-------------|---------------|
| **Creational** | 객체 생성 | Factory Method | Abstract Factory, Builder, Prototype, **Singleton** |
| **Structural** | 클래스·객체 조직 | Adapter(Class) | Adapter(Object), Bridge, **Composite**, Decorator, **Façade**, Flyweight, Proxy |
| **Behavioral** | 객체에 책임 할당 | Interpreter, **Template Method** | Chain of Responsibility, Command, Iterator, Mediator, Memento, **Observer**, State, Strategy, Visitor |

---

## 2. 상속의 설계적 활용

### 2.1 인터페이스 관점의 상속 — 내부 은폐

클라이언트에게 Parent 클래스만 보이게 하여 내부의 복잡한 상황을 숨긴다. 서브시스템 간 커뮤니케이션에 많이 활용된다.

`Client → Parent Class ← Child A, Child B` (Client는 Parent만 인지)

### 2.2 상속을 통한 재귀적 구조 정의

디렉토리-파일 구조의 예:
1. 디렉토리는 파일의 일종이다 (IS-A)
2. 디렉토리는 파일들을 포함한다 (HAS)
3. 디렉토리는 서브디렉토리를 포함한다 (재귀)

→ `File` ← `Directory` (상속) + `Directory --0..*--> File` (집합) 으로 단순화

클라이언트에게는 모두 File 클래스로만 인지되며, 내부의 재귀적 정의는 숨겨진다.

---

## 3. Creational 패턴

### 3.1 Singleton

| 항목 | 내용 |
|------|------|
| **의도** | 클래스의 인스턴스가 **하나만** 존재하도록 보장하고, 전역 접근점 제공 |
| **구현** | 생성자를 protected로 선언, static self 포인터 유지, static instance() 함수로 단일 인스턴스 생성·반환 |
| **결과** | 단일 인스턴스 보장, 접근 제어, 전역 변수 오염 방지, 서브클래싱 가능 |

```
Client ----> Singleton
             - self : Singleton (static)
             + instance() : Singleton (static)
             + doOperation()
```

`instance()` 호출 시: self가 NULL이면 새로 생성, 아니면 기존 인스턴스 반환

### 3.2 Prototype

| 항목 | 내용 |
|------|------|
| **의도** | 프로토타입 인스턴스를 사용하여 생성할 객체의 종류를 지정하고, **복제(clone)**하여 새 객체 생성 |
| **적용** | 생성할 클래스가 런타임에 결정될 때, 팩토리 계층 구조를 피하고 싶을 때, 상태 조합이 제한적일 때 |
| **결과** | 구체 제품 클래스 은닉, 런타임 제품 추가·제거, 값·구조 변경으로 새 객체 정의, 서브클래싱 감소 |

---

## 4. Structural 패턴

### 4.1 Façade

| 항목 | 내용 |
|------|------|
| **의도** | 서브시스템의 인터페이스 집합에 **통합된 상위 인터페이스** 제공 |
| **동기** | 서브시스템 간 의존성과 통신 최소화, 단순화된 단일 인터페이스 제공 |
| **적용 예** | 프로그래밍 환경의 컴파일러 서브시스템, 가상 메모리 프레임워크 |

### 4.2 Adapter

| 항목 | 내용 |
|------|------|
| **의도** | 클래스의 인터페이스를 클라이언트가 기대하는 **다른 인터페이스로 변환** |
| **동기** | 호환되지 않는 인터페이스를 가진 기존 클래스(예: TextView)를 새 애플리케이션(예: Shape 기반)에서 사용 |
| **구현** | Object Adapter — 객체 합성(composition)을 통해 adaptee에 위임 |

### 4.3 Composite

| 항목 | 내용 |
|------|------|
| **의도** | 객체를 트리 구조로 구성하여 **부분-전체 계층**을 표현, 개별 객체와 합성 객체를 동일하게 취급 |
| **동기** | 그래픽 에디터에서 기본 요소(Text, Line)와 컨테이너(Group)를 동일하게 처리 |
| **구조** | Component(공통 인터페이스) ← Leaf, Composite(자식 Component 포함) |

---

## 5. Behavioral 패턴

### 5.1 Template Method

| 항목 | 내용 |
|------|------|
| **의도** | 알고리즘의 **골격을 정의**하고, 일부 단계를 서브클래스에서 재정의하도록 함. 알고리즘 구조는 변경하지 않음 |
| **적용** | 알고리즘의 불변 부분을 한 번 구현하고 가변 동작은 서브클래스에 위임, 공통 동작을 공통 클래스에 집중, hook 오퍼레이션으로 확장 지점 제어 |

### 5.2 Observer

| 항목 | 내용 |
|------|------|
| **의도** | 객체 그룹 간 관계를 정의하여, 하나가 갱신되면 다른 모든 객체에 **자동 통지** |
| **적용** | 그룹 내 한 객체의 변경이 다른 객체의 변경을 요구할 때, 객체 수가 가변적일 때, 느슨한 결합이 필요할 때 |
| **결과** | Subject는 관찰 그룹에 대한 제한적 지식만 보유, 객체 추가·제거 용이, 갱신 통지 자동 브로드캐스트. 단, 갱신 비용이 예상보다 클 수 있음 |

**Java GUI 적용 예:** `JButton`에 `ActionListener`를 등록하면, 버튼 클릭 이벤트 발생 시 등록된 모든 리스너에 자동 통지된다. 모든 `JComponent`는 `EventListenerList`를 통해 등록된 리스너 참조를 유지한다.

---

## Part B. 행위 모델 — 시퀀스 다이어그램 (Sequence Diagram)

---

## 6. 시퀀스 다이어그램 기본 구성요소

| 요소 | 설명 |
|------|------|
| **Actor** | 시스템 외부의 사용자/시스템 |
| **Object** | `objectName:ClassName` 형태로 표기 |
| **Lifeline** | 객체 아래로 내려가는 점선 — 객체의 존재 기간 |
| **Focus of Control (Activation Box)** | Lifeline 위의 얇은 사각형 — 해당 객체가 활성화된 기간 |
| **Message** | 객체 간 화살표 — 메서드 호출 |
| **Object Destruction** | Lifeline 끝의 X 표시 |

---

## 7. 시퀀스 다이어그램 표기법

### 7.1 기본 메시지

- **Call message (동기):** 실선 채워진 화살표 `──▶`
- **Return message:** 점선 화살표 `──▷` (반환값 표현)
- **Self message:** 자기 자신에게 보내는 메시지 (예: `clear()`)
- **Asynchronous message (비동기):** 실선 열린 화살표

### 7.2 객체 생성과 소멸

- **Object Creation:** `create()` 메시지로 새 객체의 Lifeline 시작점에 화살표
- **Object Destruction:** `delete()` 메시지 후 Lifeline 끝에 **X** 표시

### 7.3 메시지 종류 (Message Kind)

| 종류 | 설명 |
|------|------|
| Asynchronous | 비동기 메시지 — 응답을 기다리지 않음 |
| Call | 동기 메시지 — 응답을 기다림 |
| Reply | 반환 메시지 |
| Lost | 발신은 있으나 수신자를 모르거나 도달하지 않음 |
| Found | 수신은 있으나 발신자를 모름 |

---

## 8. UML 2.0 결합 프래그먼트 (Combined Fragments)

| 프래그먼트 | 의미 |
|-----------|------|
| **alt** | 조건 분기 (alternatives) — if-else |
| **opt** | 선택적 실행 (option) — if |
| **loop** | 반복 |
| **par** | 병렬 실행 |
| **critical** | 임계 영역 |
| **assert** | 단정 (assertion) |
| **neg** | 유효하지 않은 추적 (negative/invalid trace) |

### 8.1 Interaction Use

참조된 Interaction의 내용을 복사하는 **약식 표기**이다. 반복적으로 사용되는 시퀀스를 별도로 정의하고 재사용할 수 있다.

### 8.2 Timing Constraints

메시지의 시간 제약을 표기하여, 메시지 전송·수신 간의 시간 조건을 명시한다.

---

## 9. 시퀀스 다이어그램 작성 시 주의사항 (Pitfalls)

### 9.1 표기법 정확성

- Object 표기: `objectName:ClassName` (밑줄 포함)
- 메시지 유형별 화살표 구분 (동기/비동기/반환)
- Lifeline과 Activation Box의 정확한 사용

### 9.2 메시지 요청 방향

메시지 요청(Request)과 응답(Reply)의 방향을 정확히 구분해야 한다.

### 9.3 일반적인 실수

- Actor와 Object의 혼동
- 메시지 번호 매기기의 불일치
- 객체 생성·소멸 시점의 부정확한 표현
- Activation Box 없이 메시지만 표기

---

## 핵심 키워드 정리

`디자인 패턴` `GoF` `Creational` `Structural` `Behavioral` `Singleton` `Prototype` `Façade` `Adapter` `Composite` `Template Method` `Observer` `시퀀스 다이어그램` `Lifeline` `Activation Box` `Combined Fragment` `alt` `opt` `loop` `Interaction Use` `동적 바인딩`