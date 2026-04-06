# 소프트웨어 테스팅 및 검증 — Week 3: 소프트웨어 개발 방법론 & 요구사항 분석

> **과목명:** 소프트웨어 테스팅 및 검증  
> **담당교수:** 이우진 (경북대학교 IT대학 컴퓨터학부, SW Testing 연구실)  
> **강의자료:** 2026_SWTesting3Methodology_RE

---

## 1. SW 개발 방법론 개요

### 1.1 소프트웨어 프로세스란?

소프트웨어 시스템을 개발하는 데 필요한 **일련의 활동**이다.

**주요 활동:**
- **명세(Specification):** 시스템이 무엇을 해야 하는지 정의
- **설계 및 구현(Design & Implementation):** 시스템의 조직을 정의하고 구현
- **테스팅(Testing):** 고객이 원하는 것을 수행하는지 확인
- **유지보수(Maintenance):** 변화하는 고객 요구에 대응하여 시스템을 변화시킴

소프트웨어 프로세스 모델(개발방법론)은 프로세스의 **추상 표현**으로, 특정 관점에서 프로세스에 대한 설명을 제공한다.

### 1.2 방법론 비교 포인트

| 비교 포인트 | 설명 |
|----------|------|
| **반복성 (Iteration)** | 주요 활동의 반복 여부 및 빈도 |
| **수행 가능 버전** | 실행 가능한 버전이 나오는 시점 |
| **요구 변경 수용** | 요구사항 변경 대응 능력 |
| **스케줄 관리 수월성** | 개발 일정의 가시성 |

---

## 2. 주요 개발 방법론

### 2.1 Waterfall 모델

**단계:** Statement of Requirements → Problem Analysis → Requirement Specification → Architectural Design → Physical Design → Implementation → Test & Debug → Maintain

현실에서는 이상적인 순차 진행이 아니라 **이전 단계로의 피드백(되돌아감)**이 빈번하게 발생한다.

**문제점:**
- 진행 도중 **변경사항 수용이 어려움** → 변화하는 고객 요구에 대응 곤란
- 단계 분할이 명확하나 **유연하지 못함**
- 요구사항을 잘 이해하고 있는 경우에만 적합
- 이상적 단계 구분과 실제 단계 분포 사이에 괴리가 존재

### 2.2 병렬적 개발 방법론

여러 단계의 활동을 동시에 병렬로 수행하는 방식이다.

### 2.3 프로토타이핑 (Prototyping)

| 유형 | 목표 | 특징 |
|------|------|------|
| **진화적 (Evolutionary)** | 초기 사양에서 최종 시스템으로 발전 | 고객과 협력하여 프로토타입을 수정·보완·확장 |
| **Throwaway** | 시스템 요구사항 이해 | 요구사항이 명확해지면 Waterfall로 전환하여 개발 |

### 2.4 점진적(Incremental) 개발

시스템을 **증분(increment)** 단위로 나누어 점진적으로 개발한다. 사용자 요구사항에 우선순위를 부여하고, 가장 높은 우선순위를 초기 증분에 포함시킨다. 해당 증분 개발이 시작되면 요구사항을 고정하고, 이후 증분에서 요구사항을 계속 발전·변경시킨다.

**장점:**
- 각 증분과 함께 고객 가치를 제공하여 기능을 더 빨리 사용 가능
- 초기 증분이 이후 증분에 대한 **프로토타입 역할**
- 전반적인 프로젝트 실패 위험 감소
- 우선순위가 높은 서비스가 가장 많은 테스트를 받음

**단점:**
- 빠른 개발로 인해 매 버전마다 문서 작성·수정이 비효율적일 수 있음
- 새로운 증분 추가 시 시스템 구조가 점점 나빠질 수 있음

### 2.5 Unified Process (UP)

1985~1995년 사이 50여 가지 넘는 객체 지향 방법론 중 가장 성공적인 세 가지(Booch Method, Jacobson's Objectory, Rumbaugh의 OMT)를 하나로 합친 방법론이다.

**명칭 변천:** Rational Unified Process (RUP) → Unified Software Development Process (USDP) → **Unified Process (UP)**

**특징:**
- 적응 가능한(adaptable) 방법론 — 특정 정보 시스템 특성에 맞게 수정·적용
- **Test Workflow는 전체 Phase에서 수행**되어야 함

### 2.6 애자일 개발 (Agile Development)

모델링·문서 작업의 오버헤드를 줄여 개발 프로세스를 간소화하는 데 중점을 둔다. 단순하고 반복적인 개발을 강조하며, 대표적으로 **XP(Extreme Programming)**가 있다.

**애자일 원리:**

| 원리 | 설명 |
|------|------|
| **고객 참여** | 개발 전반에 걸쳐 긴밀하게 관여, 요구사항 제공·우선순위 결정·반복 평가 |
| **점진적 개발** | 고객이 각 증분에 포함될 요구사항을 지정하여 증분 단위로 개발 |
| **사람 중심** | 개발팀의 기술을 인지·활용, 보편적 절차보다 자신의 업무 방식 유지·개발 |
| **변경 수용** | 요구사항 변경을 기본 가정으로, 이를 수용하도록 시스템 설계 |
| **단순성 유지** | SW와 개발 프로세스 모두에서 복잡성을 적극 제거 |

**XP (Extreme Programming):**
- 반복적·점진적(iterative and incremental) 방법 사용
- **TDD(Test-Driven Development):** 먼저 테스트 케이스를 생성하고 자동 테스트 환경 구성
- **Pair Programming:** 하나의 컴퓨터에서 파트너와 동시 작업
- 모든 테스트 케이스가 통과될 때까지 구현 후 마무리

### 2.7 Plan-driven vs. Agile 비교

Plan-driven 방식은 요구사항 명세와 설계를 사전에 상세히 작성한 후 개발에 들어가는 반면, Agile 방식은 요구사항 명세·설계·구현을 반복 사이클 내에서 동시에 진행한다.

---

## 3. 요구사항 분석 (Requirement Analysis)

### 3.1 목표

요구사항 분석은 제안 시스템이 **무엇을(What)** 수행하는지를 정의하는 것이며, **어떻게(How)**는 설계 단계에서 정의한다.

프로세스: System Requirements → 시스템 요구사항 분석 → SW 요구사항 명세 → Software Specification (+ 추가 제약사항 반영)

### 3.2 요구분석 단계 오류의 중요성

요구사항 단계의 오류는 전체 오류 중 가장 큰 비중을 차지하며, 수정 비용도 압도적으로 높다.

| 오류 소스 | 오류 비율 | 수정 비용 비율 | 전체 영향 |
|---------|:---:|:---:|:---:|
| **Requirements** | 56% | 0.82 | **84.8%** |
| Design | 27% | 0.13 | 6.5% |
| Coding | 7% | 0.10 | 1.3% |
| Other | 10% | 0.40 | 7.4% |

### 3.3 요구사항 분석 프로세스

**Elicitation(수집)** → **기록** → **Specification(명세)** → **검사(Consistency, Correctness, Completeness)** → 피드백 반복

정보의 소스: 사용자 A, 사용자 B, 장비 등 다양한 이해관계자로부터 수집한다.

---

## 4. 요구사항 명세

### 4.1 구성요소

| 유형 | 설명 |
|------|------|
| **기능적 요구사항 (Functional)** | 시스템이 **무엇을 수행**하는가 — 행위(Behavior) |
| **비기능적 요구사항 (Non-Functional)** | 시스템이 **어떤 특성**을 가지는가 — 속성(Attribute) |
| **도메인 요구사항 (Domain)** | 해당 도메인의 기본 상식, 인터뷰에서 언급되지 않아 "완전성" 문제 발생 가능 |

### 4.2 기능적 요구사항

시스템이 제공하는 서비스, 특정 입력에 대한 반응, 특정 상황에서의 작동 방식 등 기능적 요소를 포함한다.

**기능적 요구사항 명세의 구성:** 데이터(Data in/out), 처리(기능, 변형), 이벤트(무엇, 언제, 시간), 실행 방식(순차적, 병렬적), 비정상적 행동

**예시 — 전투기 자동 조종 시스템:**
- Process: 하드 모드에서 최대 500 노트 속도로 고도 150m ± 3m 제어
- Inputs: 고도, 속도, 지형 추적 레이더, 자이로 등
- Outputs: 에일러론, 방향타 및 엘리베이터 서보 명령
- Major error: 고도 또는 레이더 신호 손실
- Exception: 자동 조종 일반 모드 해제, 에너지 비상 모드

### 4.3 비기능적 요구사항

시스템 속성이나 제약사항을 기술하며, 개별 기능이 아닌 **전체 시스템에 적용**된다. 비기능적 요구사항이 충족되지 않으면 시스템이 쓸모없을 수 있으므로, 기능적 요구사항보다 **더 중요**할 수 있다.

**유형:** Product requirements, Organizational requirements, External requirements

**예시 — MHC-PMS (Mental HealthCare-Patient Management System):**
- Product: 정상 근무시간 내 서비스 불가 시간 하루 5초 이내
- Organizational: 보건당국 신원카드로 인증
- External: 환자 개인정보 보호 조항 구현

**검증 가능한 비기능적 요구사항 측정 방법:**

| 속성 | 측정 방법 |
|------|----------|
| Speed | 트랜잭션/초, 응답 시간, 화면 갱신 시간 |
| Size | Mbytes, ROM 칩 수 |
| Ease of use | 교육 시간, 도움말 프레임 수 |
| Reliability | MTTF, 비가용 확률, 고장 발생률, 가용성 |
| Robustness | 장애 후 재시작 시간, 장애 유발 이벤트 비율 |
| Portability | 대상 의존 문장 비율, 대상 시스템 수 |

---

## 5. 요구사항 명세서 작성법

| 표기법 | 설명 |
|--------|------|
| **자연어** | 번호 매겨진 문장으로 작성, 표현력 풍부하고 직관적이나 명확성 부족·요구사항 혼동·합병 문제 |
| **구조적 자연어** | 표준 양식/template 형식, 임베디드 제어에 적합하나 정보 시스템에는 지나치게 엄격 |
| **그래픽 표기법** | UML Use Case Diagram, Class Diagram 등 활용 |
| **수학적 명세** | 유한상태기계, 집합 등 수학 개념 기반, 모호성 감소하나 고객 이해 어려움 |

**구조적 명세 예시 — Insulin Pump:**
- Function, Description, Inputs, Source, Outputs, Destination, Action, Requirements, Pre-condition, Post-condition, Side effects 등의 필드로 체계적 기술

---

## 6. UML 기반 시스템 모델링

UML은 4가지 관점으로 시스템을 모델링한다:

| 관점 | 다이어그램 |
|------|----------|
| **Functional** | Use Case Diagram |
| **Structural** | Component, Package, Class, Object, Deployment, Composite Structure Diagram |
| **Interactions** | Sequence, Communication, Timing, Interaction Overview Diagram |
| **Behavioral** | State Machine, Activity Diagram |

---

## 7. Use Case 분석

### 7.1 목적

고객 요구사항 분석 및 개발 시스템의 범위를 정의한다. 요구사항을 그래픽 다이어그램·시나리오 방식으로 기술하며, 고객-개발자 간 오해를 최소화하고 Acceptance Test 수행 시나리오로 활용된다.

### 7.2 Use Case와 Actor

- **Use Case:** Actor 관점에서 관찰 가능한 연속적인 행위의 집합
- **Actor:** 시스템과 상호작용하는 외부 에이전트가 수행하는 **역할(role)** — 하나의 외부 에이전트가 여러 역할 수행 가능

### 7.3 Use Case Diagram 구성

- 시스템은 **사각형 박스**, Use Case는 박스 안의 **타원**, Actor는 경계 외부에 표시
- Actor와 Use Case 사이에 **연관선**을 그어 관계 표현

### 7.4 Use Case 간의 관계

| 관계 | 표기 | 설명 |
|------|------|------|
| **Include** | A --<<include\>\>--> B | 여러 Use Case의 공통 행위를 별도로 분리하여 포함 |
| **Extend** | A --<<extend\>\>--> B | 하나의 Use Case의 확장점에서 추가 행위를 추가하여 변형 (화살표 방향 주의) |

### 7.5 Use Case 설명 기술

Use Case 내부 시나리오를 START → 단계별 행위 → FINISH 형태로 상세 기술한다.

### 7.6 Use Case 모델링 5단계

1. **Actor 찾기** — 도메인 요구사항에서 추출
2. **Actor별 Use Case 찾기**
3. **Use Case 간 관계 설정** (include, extend)
4. **Use Case 상세 기술** (선행조건, 기본 흐름, 예외 흐름)
5. **Use Case Diagram 검증**

---

## 8. 요구사항 불일치의 원인

### 8.1 소통(Communication)의 3가지 요인

1. 생각 → 말로 바꾸는 과정
2. 표현하는 방식
3. 보고 듣는 것을 이해·해석하는 과정

### 8.2 불일치 발생 원인

| 원인 | 설명 |
|------|------|
| **정보 불일치** | 고객의 지식 체계와 개발자의 지식 체계 사이 간극 |
| **가정 (Assumption)** | 암묵적으로 전제하는 정보 |
| **빠트린 정보** | 언급되지 않은 중요 정보 |
| **암시적 정보** | 명시적으로 표현되지 않은 정보 |
| **애매성 / 모호함** | 여러 해석이 가능한 표현 |
| **모순** | 서로 상충하는 요구사항 |
| **복잡성** | 문제 영역 자체의 복잡함 |

---

## 9. 요구사항 명세서와 테스팅

요구분석 단계에서 명세서에 명시된 기능적·비기능적 요구사항에 대한 **Test Plan을 수립**한다. Test Case 작성 과정을 통해 요구사항의 **일관성(Consistency)** 및 **완전성(Completeness)**을 검사할 수 있다.

**흐름:** 요구사항 명세서 (기능적 + 비기능적) → Test Plan (Test Case, Test Scenario) → System Testing (기능적 테스팅, 성능 테스팅 등)

---

## 핵심 키워드 정리

`Waterfall 모델` `프로토타이핑` `점진적 개발` `Unified Process` `애자일` `XP` `TDD` `Pair Programming` `기능적 요구사항` `비기능적 요구사항` `도메인 요구사항` `Use Case` `Actor` `Include 관계` `Extend 관계` `요구사항 불일치` `자연어 명세` `구조적 명세` `Test Plan`