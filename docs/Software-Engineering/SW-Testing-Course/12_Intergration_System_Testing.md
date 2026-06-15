# 소프트웨어 테스팅 및 검증 — Week 12: 통합 테스팅 & 시스템 테스팅

> **과목명:** 소프트웨어 테스팅 및 검증  
> **담당교수:** 이우진 (경북대학교 IT대학 컴퓨터학부, SW Testing 연구실)  
> **강의자료:** 2026_SWTesting12Integration_SystemTesting

---

## Part A. 통합 테스팅 (Integration Testing)

---

## 1. IEEE 표준 결함 유형 복습 — 테스팅 기법 매핑

| 결함 유형 | 대응 테스팅 기법 |
|---------|-----------|
| **Input/Output Faults** | Unit: **Black-Box Testing** |
| **Logic Faults** | Unit: **White-Box Testing** |
| **Computation Faults** | Unit: White-Box Testing |
| **Interface Faults** | **Integration Testing** |
| **Data Faults** | Unit: White-Box Testing |

---

## 2. 인터페이스 테스팅 (Interface Testing)

### 2.1 목표

인터페이스 오류 또는 인터페이스에 대한 **잘못된 가정**으로 인한 결함을 탐지하는 것이다.

### 2.2 인터페이스 오류 유형

| 오류 유형 | 설명 |
|---------|------|
| **Interface misuse** | 호출 컴포넌트가 다른 컴포넌트를 호출할 때 인터페이스를 잘못 사용 (예: 매개변수 순서 오류) |
| **Interface misunderstanding** | 호출 컴포넌트가 피호출 컴포넌트의 동작에 대해 잘못된 가정을 내재 |
| **Timing errors** | 호출·피호출 컴포넌트가 서로 다른 속도로 작동하여 오래된 정보에 접근 |

### 2.3 NSI 방사선 의료사고 사례

- **2000년 National Cancer Institute, Panama City:** Multidata Systems International(미국) 개발 방사선 선량 계산 소프트웨어
- 28명이 방사선에 과다 노출, **23명 사망**
- **원인:** 차폐 블록(block) 그리기 방식의 오류 — 4개 블록만 허용되는데 5개를 사용하려 도넛 형태로 2개 루프를 그렸고, 두 루프의 그리기 방향이 달라져 차폐 영역이 뒤집힘 → 건강한 세포에 방사선 집중

---

## 3. 통합 테스팅의 특성

- **모듈 간 상호작용(interactions among modules)**에 초점
- 명세에서 도출된 **블랙박스 테스팅**이 주를 이룸
- 주요 어려움: **오류 위치 파악(localising errors)**
- **점진적(incremental) 통합 테스팅**으로 이 문제를 완화

### 3.1 통합 테스팅 접근법

| 접근법 | 설명 |
|------|------|
| **Big Bang** | 모든 모듈을 한꺼번에 결합하여 테스트 |
| **Decomposition-based** | Top-down, Bottom-up, Sandwich |
| **Call Graph-based** | Pairwise, Neighborhood |
| **Path-based** | 호출 경로 기반 |

---

## 4. Decomposition-based Integration

### 4.1 Top-down Testing

상위 수준 시스템에서 시작하여 하위 컴포넌트를 **스텁(stub)**으로 대체하면서 위에서 아래로 통합한다.

**장점:** 시스템의 전체 동작을 일찍 확인 가능, 아키텍처 결함 조기 발견

**단점:** 하위 모듈의 스텁 작성 비용, 하위 모듈 테스트가 불충분할 수 있음

### 4.2 Bottom-up Testing

최하위 개별 컴포넌트부터 테스트 드라이버(test driver)를 사용하여 Level N → Level N-1 → ... 순으로 통합한다.

**장점:** 하위 모듈을 충분히 테스트한 후 통합, 드라이버가 스텁보다 작성 용이

**단점:** 전체 시스템 동작 확인이 늦어짐

### 4.3 Sandwich Integration

Top-down과 Bottom-up의 **결합** 방식이다.

---

## 5. Call Graph-based Integration

### 5.1 Pairwise Integration

호출 그래프의 각 **엣지(호출 관계)**를 기준으로, 호출하는 유닛과 호출되는 유닛의 쌍(pair)을 테스트한다. 스텁과 드라이버의 사용을 줄일 수 있다.

### 5.2 Neighborhood Integration

호출 그래프에서 각 노드의 **Neighborhood**(모든 직전 선행 노드 + 모든 직후 후속 노드)를 기준으로 통합 테스트한다.

Calendar 프로그램 예제에서 각 유닛의 Predecessor와 Successor를 파악하여 Neighborhood 단위로 테스트를 구성한다.

### 5.3 Sandwich Integration (Call Graph 기반)

서브트리에 대해 Big Bang 통합을 수행한다. 결함 격리가 어렵다는 단점이 있으나, **드라이버와 스텁이 불필요**하다는 장점이 있다. 기능 분해 트리의 루트에서 리프까지의 전체 경로를 한 단위로 테스트한다.

---

## Part B. 시스템 테스팅 (System Testing)

---

## 6. 시나리오 기반 시스템 테스팅

### 6.1 Use Case 기반 테스팅

시스템 요구사항을 Use Case Diagram으로 표현하고, 각 Use Case의 시나리오(기본 흐름 + 대안 흐름)를 기반으로 시스템 수준의 테스트 케이스를 생성한다.

**Osbert Oglesby 정보 시스템 예제:**
- Actor: Osbert, Seller, Buyer
- Use Cases: Buy a Painting, Sell a Painting, Produce a Report, Update a Fashionability Coefficient

### 6.2 시나리오에서 테스트 케이스 도출

각 Use Case의 기본 시나리오(Basic Flow)와 대안 시나리오(Alternative Flow)를 조합하여 테스트 시나리오를 생성한다. 기본 흐름에서 분기되는 각 대안 흐름이 하나의 테스트 시나리오가 된다.

---

## 7. GUI 테스팅

### 7.1 GUI 테스팅의 과제

| 과제 | 설명 |
|------|------|
| **테스트 케이스 생성** | 웹 애플리케이션은 다수의 웹 페이지로 구성되며, 각 페이지에 여러 GUI 연산이 포함됨. 페이지 간 의존성 존재 |
| **GUI 이벤트 시퀀스 입력** | 수동 마우스/키보드 입력 또는 **Capture and Replay** 도구를 활용하여 자동화 |
| **테스트 결과 판정** | 테스터의 수동 확인 또는 이미지 비교 도구를 활용한 자동 검증 |

**Capture and Replay:** 사용자와 애플리케이션 간 상호작용을 기록하고 재생하여 GUI의 **완전 자동 회귀 테스팅**을 지원한다.

### 7.2 Model-based Testing

모델은 시스템 동작의 그래픽적 표현으로, 시스템 행동을 이해하고 예측하는 데 도움을 준다. 시스템 요구사항으로부터 효율적인 테스트 케이스를 생성할 수 있으며, GUI가 도달할 수 있는 **바람직하지 않은 상태**를 결정할 수 있다는 것이 주요 장점이다.

---

## 8. 자동화 테스팅 도구

### 8.1 2026년 Best 4 자동화 테스팅 도구 비교

| Feature | TestComplete | Selenium | OpenText Functional Testing | IBM DevOps Test UI |
|---------|-------------|----------|---------------------------|-------------------|
| **Best For** | 코딩 지식 있는 팀 | 코딩 스킬 있는 개발자 | 크로스 플랫폼 테스팅 | 자동 기능·회귀·GUI 테스팅 |
| **Scripting** | JavaScript, Python | 다중 언어 | VBScript | Java, Visual Basic .NET |
| **Cross-Platform** | Web, Mobile, Desktop | Web, Cross-browser | Web, Desktop, SAP, Mobile | Web, .Net, Java, SAP, 터미널 |
| **Mobile Testing** | O | 제한적 | O | O |

### 8.2 Selenium

- 다양한 브라우저와 플랫폼에서 웹 애플리케이션을 검증하는 **무료 오픈소스** 자동화 테스팅 프레임워크
- Java, C#, Python 등 다중 프로그래밍 언어로 테스트 스크립트 작성 가능
- **WebDriver**가 브라우저 자동화의 핵심
- **Selenium Suite:** Selenium IDE → Selenium RC + WebDriver → Selenium 2 → **Selenium 3** (New & Improved)
- 실행 흐름: Test Script → WebDriver API → Browser Driver → Chrome/Edge/Firefox

---

## 핵심 키워드 정리

`Integration Testing` `Interface Testing` `Interface misuse` `Interface misunderstanding` `Timing errors` `Big Bang` `Top-down` `Bottom-up` `Sandwich` `Stub` `Test Driver` `Call Graph` `Pairwise Integration` `Neighborhood Integration` `System Testing` `Scenario-based Testing` `Use Case 기반 테스팅` `GUI Testing` `Capture and Replay` `Model-based Testing` `Selenium` `WebDriver` `TestComplete` `자동화 테스팅 도구`