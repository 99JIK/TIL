---
title: "Week 1 — Introduction"
description: 소프트웨어 테스팅 및 검증 강의(COSE0719) Week 1. 교재·수업 구성·테스팅 개요.
tags: [software-testing, course-note, coursework]
sidebar_position: 1
last_update:
  date: 2026-04-23
---

# 소프트웨어 테스팅 및 검증 — Week 1: Introduction

## 개요

소프트웨어 테스팅 및 검증 강의(COSE0719) Week 1. 교재·수업 구성·테스팅 개요.

> **과목명:** 소프트웨어 테스팅 및 검증  
> **담당교수:** 이우진 (경북대학교 IT대학 컴퓨터학부, SW Testing 연구실)  
> **강의자료:** 2026_SWTesting-1-Introduction

---

## 1. 수업 개요

### 1.1 교재
- **메인 교재:** Paul C. Jorgensen, *Software Testing, A Craftsman's Approach*, 4th ed., CRC Press, 2014
- **참고 교재:** Ian Sommerville, *Software Engineering*, 10th ed., Addison-Wesley, 2016
- 소프트웨어 테스팅 관련 **오픈소스 도구** 활용

### 1.2 수업 구성
- **강의:** 요구분석/설계 및 SW 테스팅 기법
- **실습:** 오픈소스 자동화 도구 (테스트 케이스 생성, JUnit, GUI 테스트 등)
- **프로젝트:** Use Case Diagram, Class Diagram, 테스트 충실도 평가

### 1.3 평가 방법
| 항목 | 비율 |
|------|------|
| 중간고사 | 45% |
| 기말고사 | 45% |
| 출석 및 숙제 | 10% |

---

## 2. Software 개요

### 2.1 관점의 차이
- 건축물의 비유: 시공자, 거주자, 설계사, 작업 인부 등 각자 다른 관점으로 바라봄
- 소프트웨어도 마찬가지로 **의뢰자, designer, programmer, user** 등 다양한 관점이 존재

### 2.2 소프트웨어란?
- 프로그램 + 개발·운용·수정·기능 확장에 필요한 **모든 정보**
- 프로그램의 **동적인 의미** (형식 언어로 표현된 지적 구축물)

### 2.3 소프트웨어의 특성
| 특성 | 설명 |
|------|------|
| **비가시성 (Invisibility)** | 개념적·무형적이며, 구조가 코드 내에 내재 |
| **복잡성 (Complexity)** | 개발 과정이 복잡하고, 대상 업무·시스템이 난해 |
| **순응성 (Conformity)** | 요구나 환경 변화에 적절히 변형 가능 |
| **복제 가능성 (Duplicability)** | 쉽게 복제 가능 |
| **테스팅의 어려움 (Intestability)** | 완전한 테스팅이 어려움 |

### 2.4 소프트웨어의 유형
**분류 기준:**
- 기능: 시스템 SW / 응용 SW
- 개발 과정: newly-built / 재사용 / modification / porting
- 신뢰도: critical ~ non-critical
- 크기: programming-in-the-small ~ programming-in-the-large
- 데이터: 그래픽, 이미지, 텍스트, 음성 등

**주요 유형:**

| 유형 | 특징 | 예시 |
|------|------|------|
| **정보시스템** | 대량 데이터 분류·저장·검색, GUI 기반, 데이터 설계 비중 큼 | 신용카드 인증, 항공 예약, 온라인 쇼핑몰 |
| **내포 시스템 (Embedded)** | 대규모·장기 운용, 실시간 응답, fail-safe, 비동기·병렬·분산 | 공정 제어, 비행 유도, 교환기 |

---

## 3. 소프트웨어 관련 핵심 질문과 답변

### Q1. 전체 개발 비용 중 프로그래밍(코딩) 비용 비중은?
- **답: 약 20%**
- 요구분석/설계 40% + 테스팅 40% + 프로그래밍 20%
- 건축은 80~90%가 시공이지만, SW는 논리적 요소이므로 코딩 비중이 낮음

### Q2. 배달된 SW 실행코드 1,000줄당 예상 오류 수는?
- **답: 4개 이하**
- 개발 과정 중 오류는 약 50~60개/1,000줄이지만, 최종 제품은 평균 4개 이하

### Q3. 사용자가 발견하기 가장 어려운 오류는?
- **답: 제안서와 사용자 요구사항에 대한 잘못된 이해**
- 가장 어려운 문제 = 사용자가 무엇을 원하는지 명확하게 정의하는 일
- "프로그래밍을 서둘러 시작할수록 더 오래 걸린다"
- 오류 발견이 늦을수록 수정 비용이 기하급수적으로 증가

### Q4. 유지보수 비용은 개발 비용의 몇 배?
- **답: 약 2배** (개발 33% vs 유지보수 67%)
- 유지보수 비용은 제품의 체계적 개발 정도에 **반비례**

---

## 4. 소프트웨어에 대한 오해

### 4.1 관리자의 오해
- 책과 표준만 있으면 충분하다
- 최신 장비·도구만 도입하면 빠르게 개발 가능하다
- 요구 분석은 비생산적인 일이다
- 일정 지연 시 인력을 추가 투입하면 해결된다

### 4.2 고객의 오해
- 개략적 목표 기술만으로 충분하다
- SW는 융통성이 있어 요구 변경을 쉽게 수용할 수 있다

### 4.3 엔지니어의 오해
- 프로그램이 작동하면 임무 완료이다
- 실행 전까지 품질 평가 방법이 없다
- 프로젝트 결과물은 작동하는 프로그램뿐이다

---

## 5. 소프트웨어 위기 (Software Crisis)

### 5.1 주요 문제
- 예산 초과 (Cost Overruns)
- 개발 일정 지연 (Late Delivery)
- 불충분한 성능 (Inadequate Performance)
- 신뢰하기 어려운 품질 (Unreliability)
- 유지보수의 어려움 및 비용 증가

### 5.2 위기의 원인
- HW의 급속한 발전과 대중화 → SW 수요 급증
- SW의 생산성과 기술은 수요를 따라가지 못함

| 항목 | 1965→1985 증가 | 1983년도 증가율 |
|------|:---:|:---:|
| 수요 (Demand) | 100배 | 12% |
| 생산성 (Productivity) | 2배 | 4% |
| 인력 (Manpower) | 10배 | 4% |

---

## 6. 소프트웨어 공학 (Software Engineering)

### 6.1 정의
- 품질 좋은 SW를 **최소 비용**으로 **계획된 일정**에 맞추어 개발하기 위해 공학적 원리와 방법을 체계적으로 적용하는 것

### 6.2 역사
- **~1970:** SW 위기 인식, goto 논쟁(1965), 고급 언어 등장
- **~1980:** SW 공학 학문 정착, lifecycle 개념, 구조적 설계, 정보 은닉
- **현재:** SW 재사용, CASE, 디자인 패턴, 컴포넌트, 아키텍처

### 6.3 규모에 따른 구분
| 구분 | 특징 |
|------|------|
| **Programming-in-the-Small** | 잘 정의된 문제, 명세 변경 거의 없음 |
| **Programming-in-the-Large** | 요구 변경, 컴포넌트 인터페이스, 통합 테스팅, 유지보수 |
| **Programming-in-the-Many** | 팀 커뮤니케이션, 작업 배분, 품질 보증, 프로젝트 관리 |

### 6.4 소프트웨어 품질 요소 (McCall's Quality Triangle)
| 관점 | 품질 요소 |
|------|----------|
| **Product Operation** (제품 운용) | Correctness, Reliability, Efficiency, Integrity, Usability |
| **Product Revision** (제품 수정) | Maintainability, Flexibility, Testability |
| **Product Transition** (제품 전이) | Portability, Reusability, Interoperability |

---

## 7. 소프트웨어 테스팅 개요

### 7.1 구현과 테스팅
- 프로젝트 규모가 클수록 구현·개발자 테스트 비중은 줄어들고, **시스템 테스팅·통합 테스팅** 비중이 증가
- 구현(Construction) 단계에서 발생하는 오류 비중이 가장 높음

### 7.2 SW 코드 검증 방법
소스 코드 평가는 크게 두 가지로 나뉨:

| 목적 | 방법 | 세부 항목 |
|------|------|----------|
| **오류 예방 (Preventing)** | Analysis — 소스 코드 **품질** 분석 | 언어 품질/표준, 코딩 품질/표준 |
| **오류 탐지 (Detecting)** | Test — 소스 코드 **행위** 테스트 | 기능 정확성, 시간 정확성, 예외 행위 |

### 7.3 소스 코드 검증 기법
| 기법 | 유형 | 설명 |
|------|------|------|
| **Code Inspection** | 정적 분석 (Static) | 코드를 실행하지 않고 검토 |
| **Code Execution** | 동적 분석 (Dynamic) | 코드를 실행하여 오류 탐지 |

### 7.4 테스트 기법별 오류 감지율
- 어떤 단일 기법도 평균 **75% 이상**의 감지율을 달성하지 못함
- 따라서 **다양한 방법을 병행**하여 사용해야 함
- 예: Formal code inspection (최대 70%), Unit test (최대 50%), High-volume beta test (최대 85%)

### 7.5 Testing Life Cycle — V Model
개발 단계와 테스트 단계가 대응하는 구조:

| 개발 단계 | ↔ | 테스트 단계 |
|----------|:-:|----------|
| Objectives | ↔ | Acceptance Test |
| Requirements | ↔ | System Test |
| System Design | ↔ | Function Test |
| Program Structure Design | ↔ | Integration Test |
| Module Interface Specifications | ↔ | Module Test |
| Code | — | (구현) |

---
