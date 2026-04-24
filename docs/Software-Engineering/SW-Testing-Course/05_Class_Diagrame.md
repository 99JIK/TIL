---
title: "Week 5 — 구조 모델링 & 클래스 다이어그램"
description: 소프트웨어 테스팅 및 검증 강의(COSE0719) Week 5. UML 구조 뷰·클래스 다이어그램 작성법.
tags: [software-testing, course-note, uml, class-diagram]
sidebar_position: 5
last_update:
  date: 2026-04-23
---

# 소프트웨어 테스팅 및 검증 — Week 5: 구조 모델링 & 클래스 다이어그램

## 개요

소프트웨어 테스팅 및 검증 강의(COSE0719) Week 5. UML 구조 뷰·클래스 다이어그램 작성법.

> **과목명:** 소프트웨어 테스팅 및 검증  
> **담당교수:** 이우진 (경북대학교 IT대학 컴퓨터학부, SW Testing 연구실)  
> **강의자료:** 2026_SWTesting5ClassDiagram  
> **참고문헌:** Stephen R. Schach, *Introduction to Object-Oriented Analysis and Design with UML and The Unified Process*, McGraw-Hill, 2004

---

## 1. 구조 모델링 개요 (Structural Modeling)

### 1.1 목적

- 애플리케이션 도메인에서 중요한 **사물, 아이디어, 개념**을 객체로 표현
- 클래스 다이어그램과 객체 다이어그램의 작성 규칙·스타일 가이드라인 이해
- 구조 모델 간의 관계 파악

### 1.2 UML 관점에서의 구조 모델

UML의 **Structural Viewpoint**에 해당하는 다이어그램: Component Diagram, Package Diagram, **Class Diagram**, Object Diagram, Deployment Diagram, Composite Structure Diagram

### 1.3 구조 모델이 표현하는 것

시스템 객체와 그 관계를 표현하며, 대상은 People(역할), Places, Things, Transaction 등이다. 핵심 목표는 문제 도메인의 **핵심 데이터를 발견**하고 객체의 구조 모델을 구축하는 것이다.

---

## 2. 클래스 (Class)

### 2.1 클래스 다이어그램

시스템의 클래스와 그 관계를 보여주는 **정적(static)** 다이어그램이다. 무엇이 상호작용하는지를 보여주지만, 상호작용 시 무엇이 일어나는지는 보여주지 않는다.

**클래스 구성:** Class Name, Attributes, Operations, Responsibility(선택)

### 2.2 속성 (Attribute)

**문법:** `[visibility] name : type-expression [= initial-value]`

| 가시성 | 기호 | 의미 |
|--------|:---:|------|
| public | + | 어디서나 접근 가능 |
| private | − | 해당 클래스 내부에서만 접근 |
| protected | # | 해당 클래스 및 하위 클래스에서 접근 |

예: `+ modelName : String`, `- modelRegNum : Integer = 10`, `# accessCount : Integer`

### 2.3 Static Instance

클래스 수준에서 공유되는 속성(static)은 모든 인스턴스가 하나의 값을 공유한다. 예를 들어 `instanceCount`는 객체를 여러 개 생성해도 클래스 전체에서 하나만 존재한다.

### 2.4 오퍼레이션 (Operation)

**문법:** `[visibility] name([parameter-list]) [: return-type]`

| 스타일 | 예시 |
|--------|------|
| UML | `+ addClothes(n : Cloth)`, `+ getClothes(index : int) : Cloth` |
| Java | `+ void addClothes(Cloth n)`, `+ Cloth getClothes(int index)` |

---

## 3. 클래스 간 관계 (Relationships)

UML에서 세 가지 기본 관계가 존재한다.

### 3.1 일반화 (Generalization)

- **Parent-Child 관계** (IS-A)
- 자식 클래스는 부모의 모든 속성·오퍼레이션을 상속
- **Abstract Class:** 하나 이상의 추상 오퍼레이션 보유, 객체 생성 불가 (이탤릭체로 표기)
- **Concrete Class:** 모든 오퍼레이션 구현 완료, 객체 생성 가능

### 3.2 집합 (Aggregation)

| 유형 | 표기 | 설명 |
|------|------|------|
| **강한 집합 (Composition)** | ◆ (채워진 다이아몬드) | Whole과 Part가 동시에 생성/소멸, Part는 공유 불가 |
| **약한 집합 (Aggregation)** | ◇ (빈 다이아몬드) | Whole과 Part-Of 관계이나, Part가 다른 Whole과 공유 가능 |

### 3.3 연관 (Association)

클래스 간 관계를 나타내며, 다음 요소를 포함한다:
- **Navigability:** 연관의 방향
- **Role Name:** 관계에서 각 클래스의 역할
- **Multiplicity:** 관련 객체의 수

**다중성 (Multiplicity) 표기:**

| 표기 | 의미 |
|:---:|------|
| `1` | 정확히 1개 |
| `0..1` | 0개 또는 1개 |
| `*` 또는 `0..*` | 0개 이상 |
| `1..*` | 1개 이상 |
| `2..*` | 2개 이상 |

예: `Author 1 --uses--> 1..* Computer` — 한 명의 Author가 하나 이상의 Computer를 사용

### 3.4 의존 (Dependency)

한 클래스의 변경이 다른 클래스에 변경을 강제할 수 있는 관계이다. 매개변수 클래스나 반환 타입 클래스 등이 해당하며, **점선 화살표**로 표기한다.

### 3.5 제약 (Constraints)

설계의 모든 구현이 만족해야 하는 조건이다. **중괄호 { }** 안에 작성한다.

---

## 4. 인터페이스와 스테레오타입

### 4.1 인터페이스 (Interface)

오퍼레이션 시그니처의 집합이다. C++에서는 순수 가상 멤버만 가진 추상 클래스로 구현한다.

### 4.2 스테레오타입 (Stereotype)

UML을 확장하는 방법으로, 기존 모델 요소로부터 새로운 종류의 모델 요소를 생성한다. `<<interface>>`, `<<entity>>`, `<<boundary>>`, `<<control>>` 등이 있다.

---

## 5. 클래스 다이어그램 vs 객체 다이어그램

| 구분 | 클래스 다이어그램 | 객체 다이어그램 |
|------|---------------|-------------|
| 표현 대상 | 클래스와 관계 (타입 수준) | 특정 시점의 인스턴스와 링크 |
| 성격 | 일반적·추상적 | 구체적·예시적 |
| 표기 | `ClassName` | `objectName : ClassName` (밑줄) |

---

## 6. CRC 카드를 활용한 클래스 식별

### 6.1 CRC 카드 (Class-Responsibility-Collaboration)

| 구성요소 | 설명 |
|----------|------|
| **Class Name** | 클래스 이름 |
| **Responsibilities — Knowing** | 속성값과 관계를 아는 것 |
| **Responsibilities — Doing** | 오퍼레이션을 실행하는 것 |
| **Collaborations** | 요청을 처리하기 위해 함께 작동하는 객체들 |

### 6.2 객체 식별 및 구조 모델링 7단계

1. Use Case에 대한 **텍스트 분석**으로 CRC 카드 작성
2. Common Object List 접근법으로 후보 클래스·속성·오퍼레이션·관계 **브레인스토밍**
3. CRC 카드를 사용해 각 Use Case **역할 수행(Role-play)**
4. CRC 카드 기반으로 **클래스 다이어그램 생성**
5. 누락되거나 불필요한 클래스·속성·오퍼레이션·관계 **검토**
6. 유용한 **패턴 통합**
7. 구조 모델 **최종 검토**

### 6.3 객체 식별 방법

| 방법 | 설명 |
|------|------|
| **텍스트 분석** | 명사 → 클래스 후보, 동사 → 오퍼레이션 후보 |
| **브레인스토밍** | 여러 사람이 잠재적 클래스를 제안 |
| **Common Object List** | Tangible things, Incidents(사건), Roles(역할), Interactions(트랜잭션) |

---

## 7. Unified Process의 3가지 클래스 유형

| 클래스 유형 | 역할 | 계층 | 예시 |
|-----------|------|------|------|
| **Entity** | 오래 유지되는 정보 모델링 | Persistency Layer | Account, Painting, Student |
| **Boundary** | 시스템과 Actor 간 상호작용 (입출력) | Presentation Layer | User Interface, Report 클래스 |
| **Control** | 복잡한 계산·알고리즘 모델링 | Business Logic Layer | Compute Price, Compute Trends |

---

## 8. 사례 연구: Osbert Oglesby 정보 시스템

### 8.1 시스템 개요

미술 딜러 Osbert의 노트북에서 실행되는 정보 시스템으로, 그림의 최대 구매 가격 결정과 미술 시장의 새로운 트렌드 감지를 목표로 한다.

### 8.2 클래스 다이어그램 도출 과정

**Step 1: 명사 추출** — 시스템 설명 문단에서 명사를 추출하고 후보 분류

| 판단 | 명사 | 이유 |
|------|------|------|
| 제외 | effectiveness, process, information | 추상 명사 — 엔티티 클래스 가능성 낮음 |
| 제외 | buying, selling | 동사에서 파생 — 오퍼레이션 후보 |
| 제외 | report | 오래 유지되지 않음 — Boundary 클래스 |
| 제외 | work of art | painting의 동의어 |
| **채택** | painting, masterpiece, masterwork, other painting | Entity 클래스 후보 |

**Step 2~4: 반복적 클래스 다이어그램 정제**

1차: Painting(base) → Masterpiece, Masterwork, Other Painting(sub)
2차: 가격 알고리즘 반영 — Masterwork가 Masterpiece의 속성도 필요 → 상속 구조 조정
3차: Auctioned Painting 클래스 추가 (유사도 비교용)
4차: Fashionability 클래스 추가 (작가별 유행 계수)

**Step 5: Boundary 클래스 추출** — User Interface, Purchases Report, Sales Report, Future Trends Report

**Step 6: Control 클래스 추출** — Compute Masterpiece Price, Compute Masterwork Price, Compute Other Painting Price, Compute Future Trends

### 8.3 최종 클래스 다이어그램 구성

- **Entity:** Gallery Painting, Masterpiece, Masterwork, Other Painting, Auctioned Paintings, Fashionability
- **Boundary:** User Interface, Sales Report, Purchases Report, Future Trends Report
- **Control:** Compute Masterpiece Price, Compute Masterwork Price, Compute Other Painting Price, Compute Future Trends

---

## 핵심 키워드 정리

`클래스 다이어그램` `속성` `오퍼레이션` `Generalization` `Aggregation` `Composition` `Association` `Multiplicity` `Dependency` `Constraint` `Interface` `Stereotype` `CRC 카드` `텍스트 분석` `Entity Class` `Boundary Class` `Control Class` `명사 추출`