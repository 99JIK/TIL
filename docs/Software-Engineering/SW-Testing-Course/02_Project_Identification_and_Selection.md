---
title: "Week 2 — Project Identification"
description: 소프트웨어 테스팅 및 검증 강의(COSE0719) Week 2. 프로젝트 시작·System Request·타당성 분석.
tags: [software-testing, course-note, project-management]
sidebar_position: 2
last_update:
  date: 2026-04-23
---

# 소프트웨어 테스팅 및 검증 — Week 2: Project Identification and Management

## 개요

소프트웨어 테스팅 및 검증 강의(COSE0719) Week 2. 프로젝트 시작·System Request·타당성 분석.

> **과목명:** 소프트웨어 테스팅 및 검증  
> **담당교수:** 이우진 (경북대학교 IT대학 컴퓨터학부, SW Testing 연구실)  
> **강의자료:** 2026_SWTesting-2-ProjectIndentificationMag  
> **참고문헌:** Alan Dennis, Barbara Wixom, and David Tegarden, *Systems Analysis and Design: An Object-Oriented Approach with UML*, 5th ed., 2016

---

## 1. 프로젝트의 시작 (How Do Projects Begin?)

프로젝트는 **비즈니스 요구(Business Needs)**에 의해 시작된다. Project Sponsor가 새 시스템의 필요성을 인식하고 구현을 추진하며, 비즈니스 요구가 시스템의 기능을 결정한다. 프로젝트의 **비즈니스 가치(Business Value)**가 명확해야 한다.

---

## 2. System Request

시스템 요청서는 프로젝트의 비즈니스 사유와 기대 가치를 기술하는 문서이다.

### 2.1 핵심 구성요소

| 요소 | 설명 | 예시 |
|------|------|------|
| **Project Sponsor** | 프로젝트를 개시하고 비즈니스 측 주 연락 담당자 | Finance 부서, VP of Marketing, CIO, CEO |
| **Business Need** | 시스템 도입의 비즈니스 사유 | 매출 증대, 시장 점유율 향상, 고객 서비스 개선 |
| **Business Requirements** | 시스템이 제공할 비즈니스 기능 | 온라인 정보 접근, 고객 인구통계 수집, 제품 검색 |
| **Business Value** | 시스템이 조직에 창출할 이익 | 매출 3% 증가, 인력 5 FTE 감축, $200,000 비용 절감 |
| **Special Issues/Constraints** | 구현 관련 이슈·제약 | 정부 기한, 보안 요구사항, 시즌 마감일 |

### 2.2 예비 승인 (Preliminary Project Acceptance)

승인위원회(Approval Committee)가 시스템 요청서를 검토하고, 프로젝트의 장점을 평가한 뒤 승인된 프로젝트는 **타당성 분석(Feasibility Analysis)**에 진입한다.

---

## 3. 타당성 분석 (Feasibility Analysis)

프로젝트의 기회와 한계를 이해하기 위한 상세 비즈니스 케이스로, 프로젝트 전 과정에 걸쳐 **재평가**된다.

### 3.1 기술적 타당성 (Technical Feasibility) — "Can We Build It?"

| 고려 항목 | 설명 |
|----------|------|
| 업무 영역 친숙도 | 사용자·분석가의 해당 비즈니스 이해도 |
| 기술 친숙도 | 해당 기술의 사전 사용 경험 여부 |
| 프로젝트 규모 | 대규모 프로젝트일수록 리스크 증가 |
| 기존 시스템 호환성 | 현행 시스템과의 연동 가능성 |
| 평가 방법 | 이전 프로젝트 비교, 경험 있는 IT 전문가 자문 |

### 3.2 경제적 타당성 (Economic Feasibility) — "Should We Build It?"

**4단계 프로세스:**

**Step 1: 비용과 이익 식별**

| 비용 유형 | 항목 예시 |
|----------|----------|
| **개발 비용 (Development)** | 팀 급여, 컨설턴트 비용, 교육, HW/SW, 설치, 데이터 변환 |
| **운영 비용 (Operational)** | SW 업그레이드/라이선스, HW 수리/업그레이드, 운영 인력, 통신, 사용자 교육 |

| 이익 유형 | 항목 예시 |
|----------|----------|
| **유형 이익 (Tangible)** | 매출 증가, 인력 감축, 재고 감소, IT 비용 절감, 공급 가격 개선 |
| **무형 이익 (Intangible)** | 시장 점유율 향상, 브랜드 인지도, 제품 품질 향상, 고객 서비스 개선 |

- Tangible: 수치로 직접 측정 가능한 이익
- Intangible: 직관과 판단에 기반한 이익 — 가능한 정량화하되, 불가능하면 목록으로 첨부

**Step 2: 비용·이익에 값 할당** — 해당 영역에 가장 익숙한 사람들과 협력하여 추정

**Step 3: 현금 흐름 결정 (Cash Flow)**

예시 (Simple Cash Flow Method):
- 총 이익: $2,739,308 / 총 비용: $2,400,638
- **ROI:** 14.1% = (338,670 / 2,400,638)
- **Break-Even Point:** 3.37년 (4년차에 비용 완전 회수)

**Step 4: 재무 타당성 평가**

| 지표 | 공식 | 판단 기준 |
|------|------|----------|
| **NPV** (순현재가치) | PV(이익) − PV(비용) | NPV ≥ 0 → 프로젝트 승인; NPV < 0 → 부적합 |
| **ROI** (투자수익률) | NPV / ΣPV(현금유출) | 값이 클수록 투자 효율 높음 |
| **BEP** (손익분기점) | 누적 수익 = 투자액 시점 | 기간이 길수록 리스크 증가 |

현재가치 공식: **PV = Cash Flow / (1 + interest rate)^n**

| 할인율 | 1년 | 2년 | 3년 | 4년 |
|:---:|:---:|:---:|:---:|:---:|
| 6% | 0.943 | 0.890 | 0.840 | 0.792 |
| 10% | 0.909 | 0.826 | 0.751 | 0.683 |
| 15% | 0.870 | 0.756 | 0.572 | 0.497 |

### 3.3 조직적 타당성 (Organizational Feasibility) — "If We Build It, Will They Come?"

| 고려 항목 | 설명 |
|----------|------|
| **전략적 정렬** | 프로젝트 목표와 비즈니스 목표의 부합 여부 |
| **이해관계자 분석** | Project Champion (고위 비IT 임원), 조직 관리자, 시스템 사용자 |

사용자 참여(User Participation)를 개발 전 과정에 걸쳐 촉진해야 한다.

### 3.4 프로젝트 선정 이슈

- 승인위원회는 시스템 요청서 + 타당성 분석에 기반하여 판단
- **포트폴리오 관리(Portfolio Management):** 전체 프로젝트 포트폴리오 내 균형을 고려하여 선정, 타당한 프로젝트도 포트폴리오 이유로 거부·유보될 수 있음

---

## 4. 프로젝트 관리 (Project Management)

### 4.1 관리의 4가지 핵심 단계

1. 프로젝트 **규모 파악** (Identifying project size)
2. **작업 계획** 생성 및 관리 (Creating and managing the workplan)
3. 프로젝트 **인력 배치** (Staffing the project)
4. 프로젝트 **활동 조정** (Coordinating project activities)

프로젝트 관리는 **트레이드오프(Trade-offs)**: 하나의 요소를 변경하면 다른 요소도 조정해야 한다.

### 4.2 프로젝트 추정 (Project Estimation)

- 시간과 노력에 대한 예상 값을 할당하는 프로세스
- 추정 소스: 사용 중인 방법론, 과거 실제 프로젝트, 경험 많은 개발자
- 추정치는 범위(range)로 시작하여 프로젝트 진행에 따라 구체화

**SDLC 단계별 업계 표준 시간 배분:**

| Planning | Analysis | Design | Implementation |
|:---:|:---:|:---:|:---:|
| 15% | 20% | 35% | 30% |

---

## 5. Function Point 추정법

### 5.1 Function Point란?

1979년 IBM의 Allen Albrecht가 개발한 개념으로, 시스템의 **수와 복잡도**에 기반한 프로그램 크기 측정 방법이다.

구성 요소: Inputs (데이터 입력), Outputs (보고서), Queries (DB 질의), Files (내부 파일), Program Interfaces (외부 시스템 파일)

### 5.2 추정 3단계

**Step 1: 시스템 크기 추정**

(a) 시스템 구성요소별 복잡도 가중치 합산 → **TUFP (Total Unadjusted Function Points)**

| 구성요소 | Low | Medium | High |
|----------|:---:|:---:|:---:|
| Inputs | ×3 | ×4 | ×6 |
| Outputs | ×4 | ×5 | ×7 |
| Queries | ×3 | ×4 | ×6 |
| Files | ×7 | ×10 | ×15 |
| Program Interfaces | ×5 | ×7 | ×10 |

(b) Processing Complexity (PC) 산출 — 14개 항목 (0~5 척도)

(c) 조정:
- **APC** = 0.65 + (0.01 × PC)
- **TAFP** = APC × TUFP

**Step 2: 노력 추정 (COCOMO 모델)**

- Effort (Person-Months) = **1.4 × KLOC** (KLOC = 천 줄 단위 코드)

주요 언어별 FP당 코드 줄 수:

| 언어 | LOC/FP | 언어 | LOC/FP |
|------|:---:|------|:---:|
| C | 148 | Java | 60 |
| C++ | 60 | JavaScript | 56 |
| C# | 59 | HTML | 43 |
| COBOL | 73 | SQL | 39 |

**Step 3: 일정 추정**

- Schedule Time (months) = **3.0 × (Person-Months)^(1/3)**
- 예시: 14 PM → 약 7개월, 37.42 PM → 약 10개월

### 5.3 추정 예제

- TUFP = 158, APC = 1.2 → TAFP = 189.6
- 75% Java(60 LOC/FP) + 25% HTML(43 LOC/FP) → **10,600 LOC**
- COCOMO: 1.4 × 10.6 = **15 Person-Months**
- Schedule: 3.0 × 15^(1/3) = **약 7.5개월**

---

## 6. Use Case 추정법

### 6.1 Use Case Diagram 개념

- **Actor:** 외부 에이전트(사람, HW, 다른 시스템)의 역할
- **Use Case:** 여러 시나리오를 포함하는 완전한 기능 단위

### 6.2 추정 절차

**Step 1: Unadjusted Use-Case Points (UUCP) = UAW + UUCW**

Actor 가중치:

| Actor 유형 | 설명 | 가중치 |
|-----------|------|:---:|
| Simple | 외부 시스템 (well-defined API) | 1 |
| Average | 프로토콜 기반 인터페이스 (HTTP, DB 등) | 2 |
| Complex | 사람 (Human) | 3 |

Use Case 가중치:

| Use Case 유형 | 트랜잭션 수 | 가중치 |
|-------------|:---:|:---:|
| Simple | 1~3 | 5 |
| Average | 4~7 | 10 |
| Complex | >7 | 15 |

**Step 2: Technical Complexity Factor (TCF)**

- 13가지 기술 요인 (분산 시스템, 응답 시간, 이식성, 보안 등)
- **TCF = 0.6 + (0.01 × TFactor)**

**Step 3: Environmental Factor (EF)**

- 8가지 환경 요인 (시스템 친숙도, 경험, 동기부여, 요구 안정성 등)
- **EF = 1.4 + (−0.03 × EFactor)**

**Step 4: 최종 계산**

- **UCP** = UUCP × TCF × EF
- **Effort** = UCP × PHM (Person-Hour Factor)

PHM 결정 기준:

| 조건 | PHM |
|------|:---:|
| (E1~E6 중 값\<3인 수) + (E7~E8 중 값\>3인 수) ≤ 2 | 20 |
| 위 합계 = 3 또는 4 | 28 |
| 위 합계 ≥ 5 | 프로젝트 재검토 필요 |

### 6.3 추정 예제

- UAW = 12, UUCW = 70 → UUCP = 82
- TCF = 0.75, EF = 0.635
- UCP = 82 × 0.75 × 0.635 = **약 39** (슬라이드에서는 70 × 0.75 × 0.635 = 33.3375)
- Effort = 20 × 33.3375 = **약 667 Person-Hours**

---

## 7. 작업 계획 수립 및 관리 (Creating and Managing the Work Plan)

### 7.1 작업 식별 (Identifying Tasks)

- **방법론 기반:** 표준 태스크 목록 사용
- **Top-down 접근:** 최상위 작업 식별 → 점차 세분화 → **WBS(Work Breakdown Structure)** 구성

### 7.2 프로젝트 작업 계획 (Project Workplan) 구성요소

작업명, 소요 기간, 현재 상태, 작업 의존관계, 마일스톤(날짜)으로 구성된다.

### 7.3 작업 추적 도구

| 도구 | 형식 | 특징 |
|------|------|------|
| **Gantt Chart** | 막대 차트 | 특정 시점의 프로젝트 상태 모니터링에 유용 |
| **PERT Chart** | 흐름도 | 작업 의존관계와 **임계 경로(Critical Path)** 시각화 |

### 7.4 추정 정제 — Hurricane Model

프로젝트가 진행될수록 추정의 **오차 범위가 줄어듦:**

| 단계 | 산출물 | 비용 오차(%) | 일정 오차(%) |
|------|--------|:---:|:---:|
| Planning | System Request | 400 | 60 |
| Planning | Project Plan | 100 | 25 |
| Analysis | System Proposal | 50 | 15 |
| Design | System Specifications | 25 | 10 |

### 7.5 일정 지연 시 대응 방안

| 상황 가정 | 조치 | 리스크 |
|----------|------|:---:|
| 나머지가 더 단순할 것 → 만회 가능 | 일정 변경 없음 | **높음** |
| 나머지가 비슷한 복잡도 → 만회 불가하나 추가 지연 없음 | 지연된 만큼 전체 일정 연장 | **중간** |
| 원래 추정이 낙관적이었음 → 모든 미래 추정도 과소 | 지연 비율만큼 전체 일정 비례 연장 | **낮음** |

### 7.6 범위 관리 (Managing Scope)

- **Scope Creep:** 새로운 요구사항 추가로 인한 일정·비용 초과
- **Timeboxing:** 고정 마감일 유지, 필요시 기능 축소

---

## 핵심 키워드 정리

`System Request` `Feasibility Analysis` `기술적 타당성` `경제적 타당성` `조직적 타당성` `NPV` `ROI` `BEP` `Function Point` `COCOMO` `Use Case Estimation` `UUCP` `TCF` `EF` `WBS` `Gantt Chart` `PERT Chart` `Hurricane Model` `Scope Creep` `Timeboxing`