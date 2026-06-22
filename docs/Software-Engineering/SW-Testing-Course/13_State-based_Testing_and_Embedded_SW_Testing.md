# 소프트웨어 테스팅 및 검증 — Week 13: 임베디드 SW 테스팅 & 상태 기반 테스팅

> **과목명:** 소프트웨어 테스팅 및 검증  
> **담당교수:** 이우진 (경북대학교 IT대학 컴퓨터학부, SW Testing 연구실)  
> **강의자료:** 2026_SE_Testing13StateTesting_EmbeddedTesting

---

## Part A. 임베디드 SW 테스팅 (Embedded SW Testing)

---

## 1. 임베디드 소프트웨어 개요

### 1.1 정의

하드웨어와 소프트웨어가 **긴밀하게 결합**(tightly coupled)된 컴퓨팅 시스템으로, **전용 기능**(dedicated function)을 수행하도록 설계되었다.

### 1.2 주요 구성요소

| 구성요소 | 역할 |
|---------|------|
| **Sensors** | 환경으로부터 데이터 수집 |
| **Actuators** | 환경에 물리적 작용 수행 |
| **Controller** | 센서 입력을 처리하고 액추에이터를 제어 |

구조: Environment ← sensors → Controller ← actuators → Environment, Controller ↔ UI ↔ Operator

---

## 2. 임베디드 SW 테스팅의 어려움

### 2.1 System Interaction Loop 관점

| 유형 | 상호작용 | 테스팅 특성 |
|------|---------|----------|
| **Information System** | 시스템 ↔ **사용자** | 폐쇄 루프(closed loop), 사용자 관점에서 시스템 동작 테스트 가능 |
| **Embedded System** | 시스템 ↔ **운영자 + 환경** | 환경 없이는 개방 루프(open loop), 테스팅을 위해 **환경을 다루기 어려움** |

### 2.2 임베디드 SW 테스팅 3단계

| 단계 | 테스팅 방법 | 대체 요소 | 실제 요소 |
|------|---------|---------|---------|
| **MiL**(Model-in-the-Loop) | SW 모델과 환경 모델 간 상호작용 모델에서 테스트 | Target Processor → **SW 모델**, Environment → **Env. 모델** | — |
| **SiL**(Software-in-the-Loop) | PC의 시뮬레이터에서 임베디드 SW를 테스트 | Target Processor → **PC/Notebook의 Simulator** | SW 코드 |
| **HiL**(Hardware-in-the-Loop) | 실제 HW에서 환경을 시뮬레이터로 대체하여 테스트 | Environment → **환경 시뮬레이터** | Target Processor + SW |

### 2.3 MiL Testing

SW 모델과 환경 모델 간의 **상호작용 모델**(Interaction Loop)에서 테스트를 수행한다.
- SW 모델 예시: Idle ↔ Run
- Env. 모델 예시: Normal → Up / Down

### 2.4 SiL Testing

임베디드 SW를 **타겟 프로세서가 아닌 PC의 시뮬레이터**에서 실행하여 테스트한다. 실제 주변 장치와 환경이 없어도 SW 로직을 검증할 수 있다.

예시: Android 앱 개발 시 **Android Phone Emulator** (AVD)를 PC에서 실행하여 테스트

### 2.5 HiL Testing

실제 타겟 프로세서에 SW를 탑재하고, 환경을 **시뮬레이터로 대체**하여 테스트한다. 실제 HW에서의 동작을 검증하면서도 물리적 환경 구축 없이 테스트가 가능하다.

예시: 엘리베이터 시스템 — 실제 Control SW와 PC의 Elevator Simulator 간 연동 테스트

---

## 3. xIL 테스팅 단계 비교 요약

| 특성 | MiL | SiL | HiL |
|------|-----|-----|-----|
| **SW** | 모델 | 실제 코드 (PC에서 실행) | 실제 코드 (타겟 HW) |
| **HW** | 모델 | 시뮬레이터 (PC) | **실제 타겟 프로세서** |
| **환경** | 모델 | 시뮬레이터 | **환경 시뮬레이터** |
| **비용** | 낮음 | 중간 | 높음 |
| **충실도** | 낮음 | 중간 | 높음 |
| **테스트 시점** | 설계 초기 | 코드 완성 후 | HW 준비 후 |

---

## Part B. 상태 기반 테스팅 (State-based Testing)

---

## 4. 행위 상태 머신 (Behavioral State Machines)

### 4.1 UML 다이어그램에서의 위치

UML 다이어그램은 세 가지 관점으로 나뉜다:

| 관점 | 다이어그램 |
|------|---------|
| **Structural viewpoint** | Component, Package, **Class**, Object, Deployment, Composite Structure Diagram |
| **Behavioral viewpoint** | **State Machine Diagram** (Behavioral/Protocol), Activity Diagram |
| **Interactions viewpoint** | **Sequence**, **Communication**, Timing, Interaction Overview Diagram |
| **Functional viewpoint** | **Use Case Diagram** (중심) |

행위 상태 머신은 **동적 모델**(dynamic model)로서, 객체의 다양한 상태와 어떤 이벤트가 상태 변화를 유발하는지를 응답·액션과 함께 보여준다.

### 4.2 Statechart 기본 요소

| 요소 | 표기 | 설명 |
|------|------|------|
| **State** | 둥근 모서리 박스 | 객체가 특정 조건을 만족하는 기간 |
| **Transition** | 상태 간 화살표(arc) | 한 상태에서 다른 상태로의 전이 |
| **Event** | `event[condition]` | 전이를 유발하는 사건 |
| **Guard Condition** | `[condition]` | 이벤트 발생 시 검사되는 조건 |
| **Action** | `/action1; action2` | 전이 시 수행되는 동작 |
| **Initial State** | ● (채워진 원) | 시작 상태 |
| **Final State** | ◉ (이중 원) | 종료 상태 |

**전이 표기법:** `event[condition] / action1; action2`
- `e[c]`: 이벤트 e가 발생하는 **순간** 조건 c를 검사
- `[c]`: 시스템이 해당 전이의 소스 상태에 있는 동안 **매 순간** 조건 c를 검사

---

## 5. 예제: 지하철 개찰구 (Subway Turnstile)

### 5.1 Normal Mode

| 상태 | 설명 |
|------|------|
| **Locked** | 초기 상태, 잠김 |
| **Unlocked** | 동전 투입 후 해제 |
| **Violation** | Locked 상태에서 무단 통과 시 진입 |

**주요 전이:**
- Locked → Unlocked: `Coin / Unlock`
- Unlocked → Locked: `Pass / (Lock, ThankyouOff)`
- Locked → Violation: `Pass / Alarm`
- Violation → Locked: `Ready / (ResetAlarm, Lock)`

### 5.2 Diagnostic Mode

Normal Mode에 **진단 모드**가 추가된 계층적 상태머신이다. `Diagnose / SaveDeviceStates` 이벤트로 Normal Mode에서 Diagnostic Mode로 전환하고, `Return / RestoreDeviceStates`로 복귀한다. History state(H)를 사용하여 Normal Mode로 복귀 시 이전 상태를 기억한다.

Diagnostic Mode 내부: Test Coin ↔ Test Pass (Coin/Thankyou, Pass/ThankyouOff), 그리고 TestLock/Lock, TestUnlock/Unlock, TestAlarm/Alarm, TestResetAlarm/ResetAlarm 등의 진단 이벤트

---

## 6. 예제: 세미나 라이프사이클 (Seminar Lifecycle)

| 상태 | 전이 이벤트 |
|------|---------|
| **Enrollment** | `term started` → Being Taught, `canceled` → 종료 |
| **Being Taught** | `classes end` → Final Exams, `student dropped` → 분기: [seminar size > 0] 유지, [seminar size = 0] 종료 |
| **Final Exams** | `closed` → 종료 |

---

## 7. 상태 전이 테스팅 (State Transition Testing)

### 7.1 VCR 녹화기 예제

VCR의 상태머신은 5개 상태를 가진다: **대기, 녹화, 재생, 되감기, 빨리 감기**

각 상태에서 발생 가능한 이벤트(정지 버튼, 녹화 버튼, 재생 버튼, 되감기 버튼, 빨리 감기 버튼, 테이프 첫/마지막 부분 이벤트)와 그에 따른 전이·액션(입구/출구 액션 포함)을 정의한다.

### 7.2 무반응 테스트 케이스 (Test Cases for No Response)

각 상태에서 **반응이 없어야 하는 이벤트**를 테스트한다. 예를 들어 대기 상태에서 정지 버튼 이벤트, 테이프 마지막 부분 이벤트, 테이프 첫 부분 이벤트는 반응이 없어야 한다.

### 7.3 전자레인지 테스트 시퀀스 예제

전자레인지 상태머신(Waiting, FullPower, HalfPower, SetTime, Enabled, Disabled, Operation)에서:

**Normal Event Test Sequence 1** (전이 1, 3, 6, 7, 9, 11, 14 커버):
Waiting → *full power* → FullPower → *half power* → HalfPower → *timer* → SetTime → *number* → SetTime → *door closed* → Enabled → *start* → Operation → *timeout* → Waiting

**Normal Event Test Sequence 2** (전이 2, 4, 5, 8, 10, 11, 12, 13 커버):
Waiting → *half power* → HalfPower → *full power* → FullPower → *timer* → SetTime → *door open* → Disabled → *door closed* → Enabled → *start* → Operation → *door open* → Disabled → *door closed* → Enabled → *start* → Operation → *cancel* → Waiting

**무반응 Test Sequence:** 각 상태에서 무반응 이벤트 집합을 순회하며 테스트

---

## 핵심 키워드 정리

`Embedded Software` `Sensor` `Actuator` `Controller` `System Interaction Loop` `MiL` `SiL` `HiL` `Simulator` `Android Emulator` `Elevator Simulator` `State Machine Diagram` `Statechart` `State` `Transition` `Event` `Guard Condition` `Action` `Initial/Final State` `History State` `Subway Turnstile` `Normal Mode` `Diagnostic Mode` `State Transition Testing` `VCR 상태머신` `무반응 테스트` `Microwave 테스트 시퀀스`
