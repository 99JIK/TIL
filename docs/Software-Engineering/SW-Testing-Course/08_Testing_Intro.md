# 소프트웨어 테스팅 및 검증 — Week 8: SW 테스팅 개요

> **과목명:** 소프트웨어 테스팅 및 검증  
> **담당교수:** 이우진 (경북대학교 IT대학 컴퓨터학부, SW Testing 연구실)  
> **강의자료:** 2026_SWTesting8TestingIntro

---

## 1. 소프트웨어 테스팅의 필요성

### 1.1 임베디드 소프트웨어의 안전성

임베디드 SW 제품은 다양한 분야에서 폭넓게 활용되며 실생활과 밀접하게 사용된다. IT 융합 제품의 오류는 심각한 결과를 초래할 수 있다 (자동차 급발진 사고, 도요타 가속페달 불량 등).

### 1.2 Therac-25 의료사고

**Therac-25**는 1976년 캐나다 AECL에서 개발한 방사능 치료기이다.

| 항목 | 내용 |
|------|------|
| **1982년** | 하드웨어 제어에서 소프트웨어 제어로 변경 |
| **1985년~** | 최초 의료사고 후 19개월 동안 6건의 사고 발생 |
| **피해** | 3명 사망, 3명 심각한 장애 |

**두 가지 동작 모드:**
- **X-ray 모드:** 텅스텐 스크린 막을 통과한 약한 방사능으로 얕은 곳의 종양 치료
- **Electron 모드:** 피부 깊숙이 있는 종양 치료

**사고 원인:** 오퍼레이터가 X-ray 모드에서 방사능 수치를 설정한 후, 모드가 잘못된 것을 알고 급히 Electron 모드로 변경하여 치료를 시작했으나 X-ray 모드에서 설정된 강력한 방사능이 환자에게 그대로 노출됨

**시사점:**
- 프로그래머 **한 명**이 제어 소프트웨어를 작성하고, 어떠한 소프트웨어 검증도 거치지 않음
- 최초 사고 후 19개월 동안 사고 시나리오를 재현하지 못함
- 임베디드 소프트웨어는 반드시 **엄격한 신뢰성 및 안전성 검증**을 거쳐야 함

### 1.3 기타 의료기기 SW 사고

- **2000년 National Cancer Institute, Panama City:** 28명 노출, 23명 사망

### 1.4 기능 안전 표준 (Functional Safety Standards)

| 표준 | 적용 분야 |
|------|----------|
| **IEC 61508** (1998~2000) | Generic Safety Standard (범용) |
| EN 50129 | Railway (철도) |
| IEC 61511 | Process Industry (공정 산업) |
| IEC 61513 | Nuclear (원자력) |
| IEC 60601 | Medical (의료) |
| **ISO 26262** | Automotive (자동차) |

---

## 2. 소프트웨어 테스팅의 개요

### 2.1 왜 테스팅하는가? (Why Test Software?)

- 제대로 작동할 것인가? (Will it work properly?)
- 신뢰할 수 있는가? (Will it be reliable?)
- 만들기 쉬운가? (Will it be easy to build?)
- 품질 좋은 설계인가? (Is it a quality design?)
- 유지보수하기 쉬운가? (Will it be easy to maintain?)

### 2.2 구현과 테스팅

- 프로젝트 규모가 클수록 구현과 개발자 테스트 비중이 줄고, 시스템 테스팅·통합 테스팅 비중이 증가
- 프로젝트에서 **구현(Construction) 오류의 비중이 가장 높음**

### 2.3 소스 코드 검증 기법

| 목적 | 기법 | 유형 |
|------|------|------|
| **오류 예방 (Error Prevention)** | Code Inspection | 정적 분석 (Static Analysis) |
| **오류 탐지 (Error Detection)** | Code Execution | 동적 분석 (Dynamic Analysis) |

### 2.4 테스팅 관련 용어

| 용어 | 정의 |
|------|------|
| **Test Data** | 시스템을 테스트하기 위해 고안된 입력값 |
| **Test Case** | 시스템을 테스트할 **입력값(Input)** + 명세에 따른 **예상 출력값(Expected Output)** |
| **Test Suite** | 소프트웨어 프로그램을 테스트하기 위해 사용되는 테스트 케이스의 모음 |
| **Test Oracle** | 테스트의 통과·실패 여부를 결정하는 메커니즘 (명세, 문서, 다른 제품 등) |

### 2.5 동적 테스팅의 절차

**기본 개념:** Input Stimulus → Software under test → Measured Responses

**상세 절차:**
1. Software Specification → **Test Cases** 설계
2. Test Cases → **Test Script** + **Test Data** 준비
3. Software Code for Testing + Test Script → **Code Execution**
4. Code Execution → **Measured Responses**
5. Test Cases → **Calculated Responses** (예상 결과)
6. Measured Responses + Calculated Responses → **Comparison and Results Analysis**

**핵심:** Test Case = (Test Data, Expected Result)

---

## 3. Testing Life Cycle — V Model

개발 단계와 테스트 단계가 대응하는 구조:

| 개발 단계 | ↔ | 테스트 단계 |
|----------|:-:|----------|
| End User / Requirements | ↔ | Installation Test / Acceptance Test |
| Objectives | ↔ | System Test |
| External Specification | ↔ | Function Test |
| System Design | ↔ | Integration Test |
| Module Interface Specifications | ↔ | Module Test |
| Code | — | (구현) |

### 3.1 ISO 26262의 SW 테스팅

자동차 기능 안전 표준에서의 테스팅은 V-Model 구조를 따른다:
- **Part 4 (System):** System Design ↔ Item Integration and Testing
- **Part 6 (Software):** SW Safety Requirements → SW Architectural Design → SW Unit Design & Implementation ↔ SW Unit Testing → SW Integration and Testing → Verification of SW Safety Requirements

각 설계 단계에서 **Design Phase Verification**(설계 단계 검증)이 수행된다.

---

## 4. 소프트웨어 테스트 단계 (Bottom-Up Integration)

1. **Code Unit** → Test Units (단위 테스트)
2. **Major Software Functions** ← Integrate units → Test Functions (기능 테스트)
3. **Software Sub-systems** ← Integrate functions → Test Sub-systems (서브시스템 테스트)
4. **Software System** ← Integrate sub-systems → Test Complete System (시스템 테스트)

---

## 5. 다양한 테스트 기법들의 오류 감지율

단일 기법으로는 평균 **75% 이상**의 감지율을 달성할 수 없으므로, 다양한 방법을 **병행**하여 사용해야 한다.

| 기법 | 최저율 | 평균율 | 최고율 |
|------|:---:|:---:|:---:|
| Formal code inspections | 45% | 60% | 70% |
| Modeling or prototyping | 35% | 65% | 80% |
| **Unit test** | **15%** | **30%** | **50%** |
| **Integration test** | **25%** | **35%** | **40%** |
| **System test** | **25%** | **40%** | **55%** |
| High-volume beta test (>1,000 sites) | 60% | 75% | 85% |

---

## 6. Verification vs Validation

| 구분 | 질문 | 의미 |
|------|------|------|
| **Verification** | "Are we building the product **right**?" | 소프트웨어가 **명세를 준수**하는가 |
| **Validation** | "Are we building the **right** product?" | 소프트웨어가 **사용자가 진정 원하는 것**을 수행하는가 |

---

## 7. 프로그램 테스팅의 목표와 원칙

### 7.1 두 가지 테스팅 목표

| 목표 | 설명 | 테스팅 유형 |
|------|------|----------|
| **요구사항 충족 입증** | 개발자와 고객에게 소프트웨어가 요구사항을 충족함을 보여줌 | **Validation Testing** — 시스템의 예상 사용을 반영하는 테스트 케이스 |
| **결함 발견** | 소프트웨어의 동작이 부정확하거나 명세에 부합하지 않는 상황을 발견 | **Defect Testing** — 의도적으로 모호한 테스트 케이스, 정상 사용과 다를 수 있음 |

### 7.2 핵심 원칙

- 테스팅은 오류의 **존재를 보여줄 수 있지만**, 오류의 **부재를 증명할 수는 없다**
- 테스팅은 V&V(Verification and Validation)의 일부이며, 정적 검증(static validation) 기법도 포함

### 7.3 입출력 모델 (Input-Output Model)

- **Input test data** 중 Ie(비정상 행위를 유발하는 입력) → System → **Output test results** 중 Oe(결함의 존재를 드러내는 출력)

---

## 8. 인스펙션과 테스팅 (Inspections and Testing)

### 8.1 인스펙션의 적용 범위

Inspections은 Requirements Specification, Software Architecture, UML Design Models, Database Schemas, Program 등 **모든 산출물**에 적용 가능하다. Testing은 **Program에만** 적용된다.

### 8.2 인스펙션의 장점

- 테스팅에서는 하나의 오류가 다른 오류를 **은폐(mask)**할 수 있으나, 인스펙션은 정적 프로세스이므로 오류 간 상호작용을 걱정할 필요 없음
- **불완전한 버전**의 시스템도 추가 비용 없이 인스펙션 가능 (테스팅은 테스트 하네스 개발 필요)
- 프로그램 결함뿐 아니라 **표준 준수, 이식성, 유지보수성** 등 광범위한 품질 속성도 검토 가능

---

## 9. 소프트웨어 테스팅 프로세스

**Design test cases** → **Prepare test data** → **Run program with test data** → **Compare results to test cases** → Test Reports

---

## 10. 프로그램 테스팅 단계별 기술

### 10.1 S1. Development Testing (개발 테스팅)

개발팀이 수행하는 모든 테스팅 활동을 포함한다.

**S1.1 Unit Testing (단위 테스팅)**

| 항목 | 내용 |
|------|------|
| **정의** | 개별 컴포넌트를 **독립적으로(in isolation)** 테스트하는 프로세스 |
| **성격** | Defect testing 프로세스 |
| **대상** | 개별 함수/메서드, 객체 클래스(여러 속성·메서드), 정의된 인터페이스를 가진 복합 컴포넌트 |

**S1.2 Component Testing (컴포넌트 테스팅)**

- 여러 개별 유닛을 통합하여 복합 컴포넌트를 생성한 후 테스트
- **컴포넌트 인터페이스** 테스팅에 초점

**Interface Testing:**
- 목표: 인터페이스 오류 또는 인터페이스에 대한 잘못된 가정으로 인한 결함 탐지

| 인터페이스 유형 | 설명 |
|-------------|------|
| **Parameter interfaces** | 메서드/프로시저 간 전달되는 데이터 |
| **Shared memory interfaces** | 프로시저/함수 간 공유되는 메모리 블록 |
| **Message passing interfaces** | 서브시스템이 다른 서브시스템에 서비스를 요청 |

**S1.3 System Testing (시스템 테스팅)**

- 시스템의 일부 또는 전체 컴포넌트를 통합하여 전체 시스템으로 테스트
- **컴포넌트 간 상호작용** 테스팅에 초점
- 컴포넌트 호환성, 올바른 상호작용, 인터페이스를 통한 적시 데이터 전달 확인
- 시스템의 **창발적 행동(emergent behavior)**, 즉 **비기능적 요구사항** 테스트

### 10.2 S2. Release Testing (릴리스 테스팅)

| 항목 | 내용 |
|------|------|
| **정의** | 개발팀 **외부**에서 사용할 특정 릴리스를 테스트하는 프로세스 |
| **주요 목표** | 시스템의 공급자에게 시스템이 **사용하기에 충분히 좋다**는 것을 확신시킴 |
| **확인 사항** | 명세된 기능, 성능, 신뢰성 제공 + 정상 사용 중 미실패 |
| **테스팅 방식** | 일반적으로 **Black-box testing** — 테스트가 시스템 명세에서만 도출 |

**Performance Testing (성능 테스팅):**
- 시스템의 성능 및 신뢰성 같은 **창발적 속성** 테스트
- 시스템의 사용 프로파일을 반영한 테스트
- 부하를 **점진적으로 증가**시키며 성능이 수용 불가할 때까지 테스트
- **Stress Testing:** 시스템에 의도적으로 과부하를 걸어 **실패 동작(failure behavior)**을 테스트

### 10.3 S3. User Testing (사용자 테스팅)

사용자 또는 고객이 시스템 테스팅에 대한 입력과 조언을 제공하는 단계이다. 포괄적인 시스템·릴리스 테스팅이 수행된 후에도 **필수적**인데, 사용자 작업 환경의 영향이 시스템의 신뢰성, 성능, 사용성, 견고성에 큰 영향을 미치며 이는 테스팅 환경에서 재현이 불가능하기 때문이다.

| 유형 | 수행 장소 | 설명 |
|------|---------|------|
| **Alpha Testing** | **개발자 사이트** | 사용자가 개발팀과 함께 소프트웨어를 테스트 |
| **Beta Testing** | **사용자 환경** | 소프트웨어 릴리스를 사용자에게 제공하여 실험, 발견된 문제를 개발자에게 보고 |
| **Acceptance Testing** | **고객 환경** | 고객이 시스템을 인수하여 고객 환경에 배포할 준비가 되었는지 결정 |

---

## 핵심 키워드 정리

`Therac-25` `IEC 61508` `ISO 26262` `Test Case` `Test Suite` `Test Oracle` `정적 분석` `동적 분석` `V Model` `Verification` `Validation` `Validation Testing` `Defect Testing` `Inspection` `Unit Testing` `Component Testing` `Interface Testing` `System Testing` `Release Testing` `Black-box Testing` `Performance Testing` `Stress Testing` `Alpha Testing` `Beta Testing` `Acceptance Testing`