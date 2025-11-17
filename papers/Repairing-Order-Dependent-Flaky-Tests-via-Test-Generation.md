---
title: "Repairing Order-Dependent Flaky Tests via Test Generation"
date: "2022-05-21"
description: "테스트 생성(Test Generation)을 통해 기존 '클리너(cleaner)' 테스트가 없는 경우에도 순서 의존적(order-dependent) 결함 테스트를 자동으로 복구하는 ODRepair 기법 제안"
keywords: ["flaky test", "order-dependent test", "test generation", "automated repair"]
tags: ["Flaky Test", "Order-Dependent Test", "Test Generation", "Automated Repair"]
authors: ["Chengpeng Li", "Chenguang Zhu", "Wenxi Wang", "August Shi"]
---

## 논문 정보
- **제목**: Repairing Order-Dependent Flaky Tests via Test Generation
- **저자**: Chengpeng Li, Chenguang Zhu, Wenxi Wang, and August Shi (The University of Texas at Austin)
- **학회/저널**: 2022 IEEE/ACM 44th International Conference on Software Engineering (ICSE)
- **발행일**: 2022-05-21
- **DOI**: https://doi.org/10.1145/3510003.3510173
- **주요 연구 내용**: 순서 의존적(order-dependent) 결함 테스트 복구를 위한 자동화 기법 **ODRepair** 제안. 이 기법은 먼저 테스트 실패를 유발하는 오염된 공유 상태(polluted shared state)를 식별하고, 이후 자동화된 테스트 생성 도구(Randoop)를 활용하여 해당 상태를 리셋(reset)하는 '클리너(cleaner)' 코드(메서드 호출 시퀀스)를 생성함.
- **주요 결과 및 결론**: 327개의 순서 의존적 테스트 대상 평가. ODRepair는 181개 테스트에서 오염된 정적 필드(static field)를 식별했으며, 이 중 141개의 테스트에 대한 패치를 성공적으로 생성함. 기존 SOTA 기법인 iFixFlakies가 복구하지 못하는 24개의 테스트를 ODRepair가 복구함.
- **기여점**:
    1.  기존에 '클리너' 테스트가 없는 경우에도 테스트 생성을 통해 순서 의존적 테스트를 복구하는 새로운 접근법 제시.
    2.  오염된 공유 힙 상태(heap-state), 특히 정적 필드를 자동으로 식별하는 'Debugger' 컴포넌트 개발.
    3.  'Generator' 컴포넌트를 통해 테스트 생성 도구를 가이드하여 리셋 메서드를 호출하고 패치를 생성하는 방법론 구현.
<!--truncate-->
## 요약
### 초록
결함 테스트(Flaky tests)는 동일한 코드 버전에서도 비결정론적으로 통과/실패하는 테스트로, 회귀 테스트 시 개발자에게 혼란을 준다. 이 중 '순서 의존적 테스트(order-dependent tests)'는 실행 순서에 따라 결과가 달라지는데, 이는 이전 테스트가 공유 상태(shared state)를 오염시키기 때문이다. 기존 연구(iFixFlakies)는 공유 상태를 리셋하는 '클리너(cleaner)' 테스트가 이미 존재해야 한다는 한계가 있었다. 본 연구는 클리너가 없는 상황에서도 순서 의존적 테스트를 복구하는 **ODRepair**를 제안한다. ODRepair는 먼저 테스트 실패를 유발하는 오염된 공유 상태(특히 정적 필드에서 도달 가능한 힙 메모리)를 정확히 식별한다. 그다음, 이 오염된 정적 필드에 접근하여 상태를 리셋할 수 있는 '리셋 메서드(reset-methods)'를 코드베이스에서 검색한다. 마지막으로, 자동화된 테스트 생성 도구를 사용해 이 리셋 메서드를 대상(target)으로 하는 메서드 호출 시퀀스를 생성하여, 테스트를 통과시키는 패치를 만든다. 327개의 순서 의존적 테스트 평가 결과, ODRepair는 181개의 오염된 정적 필드를 식별했고, 이 중 141개에 대한 패치를 생성했다. 이는 기존 SOTA 기법인 iFixFlakies가 해결하지 못한 24개의 테스트를 포함한다.

### 서론
회귀 테스트는 결함 테스트(flaky tests)로 인해 방해받는다. 결함 테스트는 코드 변경 없이도 비결정론적으로 통과/실패하며, 개발자가 실제로는 문제없는 코드를 디버깅하게 만든다. 결함 테스트의 일반적인 원인은 '테스트 순서 의존성(test-order dependence)'이다. 순서 의존적 테스트는 특정 순서(passing test order)에서는 통과하지만 다른 순서(failing test order)에서는 실패한다.

기존 연구인 iFixFlakies는 '피해자(victim)' 테스트(홀로 실행 시 통과, 특정 테스트 실행 후 실패)를 복구하기 위해 오염된 상태를 리셋하는 '클리너(cleaner)' 테스트를 검색한다. 하지만 이 방식은 개발자가 이미 클리너를 작성해 둔 경우에만 작동하는 한계가 있다.

본 연구는 기존 테스트 스위트에 클리너가 없어도 순서 의존적 테스트를 복구하는 **ODRepair**를 제안한다. ODRepair는 오염된 상태를 식별한 후, iFixFlakies가 필요로 하는 '클리너'를 자동으로 생성하는 것을 목표로 한다.

### 배경
순서 의존적 테스트는 '브리틀(brittle)'과 '피해자(victim)' 두 유형으로 분류된다 (Shi et al.).

* **브리틀(Brittle)**: 단독 실행 시 실패하지만, 특정 테스트(state-setters)가 먼저 실행되면 상태가 설정되어 통과한다.
* **피해자(Victim)**: 단독 실행 시 통과하지만, 특정 테스트(polluters)가 먼저 실행되면 공유 상태가 오염되어 실패한다.

iFixFlakies는 브리틀의 경우 'state-setter'를, 피해자의 경우 'cleaner'를 찾아 패치를 생성한다. 브리틀은 정의상 state-setter가 보장되지만, 피해자는 클리너가 보장되지 않는다. 피해자 테스트가 브리틀보다 훨씬 비중이 높기 때문에, 본 연구는 '피해자' 테스트 복구에 집중한다.

### 모델 아키텍처 / 방법론
ODRepair는 **Debugger**와 **Generator** 두 가지 주요 컴포넌트로 구성된다.
![Figure 2](img/Pasted%20image%2020251117123005.png)
#### 1. Debugger (오염 상태 식별)
Debugger의 목표는 오염 유발 테스트($p$)가 피해자 테스트($t$)를 실패하게 만드는 오염된 공유 상태(특히 정적 필드에서 도달 가능한 힙 상태)를 찾는 것이다. 논문의 **Figure 2**에 제시된 알고리즘은 다음과 같다.

1.  **실패 상태 캡처**: 실패 순서($[p, t]$)에서 $t$ 실행 직전의 힙 상태($xmls\_f$)를 캡처(직렬화)한다.
2.  **통과 상태 캡처**: 통과 순서(주로 $[t, t]$ 사용)에서 두 번째 $t$ 실행 직전의 힙 상태($xmls\_p$)를 캡처한다.
3.  **차이 비교**: $xmls\_f$와 $xmls\_p$ 간에 상태가 다른 정적 필드(diff\_fields)를 식별한다.
4.  **오염 필드 확정**: 실패 순서($[p, t]$)에서 $t$ 실행 직전에, diff\_fields의 각 필드 상태를 $xmls\_p[field]$ (통과 시 상태)로 강제 설정(역직렬화)하여 $t$를 재실행한다. 만약 $t$가 통과하면, 해당 $field$를 '오염된 정적 필드(polluted static field)'로 확정한다.
![Figure 3](img/Pasted%20image%2020251117123027.png)
* *주요 난제 및 해결*: 클래스로더 등 JVM 고유 객체는 다른 JVM에서 역직렬화가 어렵다. ODRepair는 현재 JVM(실패 순서 실행 중)의 객체 그래프(논문의 **Figure 3** 참조)를 탐색하여 해당 객체를 재사용하는 방식으로 이 문제를 해결한다.
![Figure 4](img/Pasted%20image%2020251117123045.png)
#### 2. Generator (패치 생성)
Generator는 식별된 '오염된 정적 필드'를 입력받아 패치를 생성한다. 논문의 **Figure 4**는 Generator의 전체 과정을 보여준다.

1.  **Reset-Method Finder**: 바이트코드 분석을 통해 오염된 정적 필드를 리셋할 가능성이 있는 '리셋 메서드'를 검색한다.
    * *휴리스틱 1*: 해당 필드에 `PUTSTATIC` 명령어를 사용하는 메서드.
    * *휴리스틱 2*: 오염된 필드가 `Map` 등 컬렉션일 경우, `clear()`, `remove()` 등 API를 호출하는 메서드.
2.  **Test Generator**: 자동화된 테스트 생성 도구(Randoop 사용)를 활용하여 리셋 메서드를 호출하는 테스트(메서드 호출 시퀀스)를 생성한다.
    * *Randoop 설정 1 (리터럴 마이닝)*: 오염 유발 테스트가 사용한 리터럴("test\_job" 등)을 코드에서 마이닝하여 Randoop의 입력 값으로 제공한다.
    * *Randoop 설정 2 (헬퍼 메서드)*: 리셋 메서드 호출에 필요한 객체(예: 오염된 필드를 반환하는 getter)를 '헬퍼 메서드'로 Randoop에 함께 제공한다.
3.  **Patch Generator**: 생성된 테스트(GenTest)들을 iFixFlakies에 입력으로 제공한다. iFixFlakies는 이 생성된 테스트 중 '클리너' 역할을 하는 것을 찾아내고, 해당 테스트의 코드를 최소화(minimize)하여 최종 패치를 생성한다.
![Table 1](img/Pasted%20image%2020251117123113.png)
### 실험 결과
* **데이터셋**: IDoFT 데이터셋에서 추출한 42개 프로젝트의 '피해자(victim)' 순서 의존적 테스트 327개를 대상으로 평가했다.
* **RQ1: 오염 식별 효과 (Table 1)**
    * ODRepair는 327개 테스트 중 **181개(약 55.4%)** 테스트에서 오염된 정적 필드를 성공적으로 식별했다.
    * 평균 분석 시간은 1820.9초였으나, 아웃라이어(예: spring-boot)를 제외하면 51.5초로 감소했다.
    * 식별 실패(146개)의 주요 원인은 리소스 부족(OOM, 46개), 직렬화/역직렬화 오류(46개), 힙 상태 외의 오염(파일 시스템, 외부 서비스 등, 52개) 등이었다.
* **RQ2: 패치 생성 효과 (Table 2)**
    * ODRepair는 오염이 식별된 181개 중 **141개(약 77.9%)** 테스트에 대한 패치를 생성했다. (전체 327개 중 약 43.1%)
    * **iFixFlakies와 비교 결과**:
        * 공통 복구: 117개 (64.6%)
        * **ODRepair 단독 복구**: 24개 (13.3%)
            * *이유*: iFixFlakies는 기존 테스트 스위트에 '클리너'가 없으면 실패하지만, ODRepair는 코드베이스에서 리셋 메서드를 찾아 새 클리너를 생성 가능했다.
        * **iFixFlakies 단독 복구**: 18개 (9.9%)
            * *이유*: (1) Mockito 라이브러리 호출 등 매우 복잡한 메서드 시퀀스가 필요한 경우 (Randoop이 생성하기 어려움). (2) `SomeClass.class` 같은 클래스 리터럴 등 생성하기 어려운 입력이 필요한 경우.

### 결론
본 연구는 기존 클리너 테스트가 없어도 순서 의존적 결함 테스트를 복구하는 ODRepair를 제안했다. ODRepair는 오염된 힙 상태(정적 필드)를 식별하고, 테스트 생성 도구(Randoop)를 가이드하여 상태를 리셋하는 메서드 호출 시퀀스(클리너)를 생성한다. 327개 테스트 중 181개의 오염을 식별하고 141개의 패치를 생성했으며, SOTA 기법인 iFixFlakies가 해결 못 한 24개 테스트를 복구했다.

ODRepair와 iFixFlakies는 상호 보완적이다. 개발자는 iFixFlakies를 먼저 시도하고, 실패 시 ODRepair를 적용하는 방식을 사용할 수 있다.