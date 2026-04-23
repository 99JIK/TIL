---
title: An Expressiveness Hierarchy of Behavior Trees and Related Architectures
date: '2021-04-16'
description: Behavior Tree와 관련 제어 아키텍처들의 표현력을 형식적으로 비교하는 계층 구조를 수립한 이론적 논문
tags: [Behavior Tree, Architecture, Artificial Intelligence, Survey]
authors:
- name: Oliver Biggar
- name: Mohammad Zamani
- name: Iman Shames
---

## 논문 정보

- **제목**: An Expressiveness Hierarchy of Behavior Trees and Related Architectures
- **저자**: Oliver Biggar (University of Melbourne), Mohammad Zamani (University of Melbourne), Iman Shames (University of Melbourne)
- **학회/저널**: IEEE Robotics and Automation Letters (RA-L), Volume 6, Issue 3, pp. 5397-5404
- **발행일**: 2021-04-16
- **DOI**: [10.1109/LRA.2021.3074337](https://ieeexplore.ieee.org/document/9409618/)
- **주요 연구 내용**: BT, Decision Tree(DT), Teleo-reactive Program(TR), Finite State Machine(FSM) 간의 표현력(expressiveness)을 형식적으로 비교하는 계층 구조 수립
- **주요 결과 및 결론**: 보조 변수 유무에 따른 BT의 표현력 차이를 규명하고, 가독성-표현력 트레이드오프의 존재를 증명
- **기여점**: "BT가 FSM보다 나은가?"라는 실용적 질문에 이론적 답변을 제공하고, BT 설계 시 아키텍처 선택의 이론적 근거를 마련
<!--truncate-->

## 요약

### 초록
본 논문은 Behavior Tree(BT)의 표현력을 다른 액션 선택 아키텍처와 비교하기 위한 형식적 프레임워크를 제공한다. 구조적 프로그래밍 비교에서 영감을 받아, 저자들은 표현력(expressiveness)의 개념을 형식화하고, BT, Decision Tree(DT), Teleo-reactive Program(TR), Finite State Machine(FSM)을 포함하는 표현력 계층 구조를 도출한다. 보조 변수(auxiliary variable)가 있는 BT와 없는 BT를 구분함으로써, BT 설계에서 가독성(readability)과 표현력(expressiveness) 사이에 트레이드오프가 존재함을 보인다.

### 서론
BT는 게임 AI와 로봇 공학에서 FSM의 대안으로 부상하고 있으며, 모듈성, 반응성, 가독성에서 우위가 있다고 주장된다. 그러나 "BT가 FSM보다 표현력이 높은가?", "BT로 FSM이 할 수 있는 모든 것을 할 수 있는가?" 같은 근본적 질문에 대한 엄밀한 답변은 부재하였다. 표현력은 프로그래밍 언어 이론에서 오래 연구된 개념으로, 한 언어/아키텍처가 다른 것을 얼마나 표현할 수 있는지를 측정한다. 저자들은 이 개념을 제어 아키텍처에 적용하여 체계적인 비교를 수행한다.

### 모델 아키텍처 / 방법론
저자들은 다음과 같은 이론적 프레임워크를 구축하였다:

1. **표현력 형식화**: 아키텍처 A가 아키텍처 B를 "표현할 수 있다(can express)"는 것을 수학적으로 정의. A의 구성 요소만으로 B의 모든 가능한 행동을 재현할 수 있으면 A가 B만큼 표현력이 있다고 정의
2. **비교 대상 아키텍처**:
   - **Behavior Tree(BT)**: Sequence, Selector, Parallel 등의 제어 노드와 Action, Condition 노드로 구성된 트리 구조
   - **Decision Tree(DT)**: 조건 기반 분기를 통해 액션을 선택하는 트리 구조
   - **Teleo-reactive Program(TR)**: 목표 지향적 조건-액션 규칙의 순서 리스트
   - **Finite State Machine(FSM)**: 상태와 전이로 구성된 그래프 기반 구조
3. **보조 변수 구분**: 보조 변수(메모리 변수)를 사용하는 BT와 사용하지 않는 순수 BT를 구분하여 분석
4. **증명 방법**: 각 아키텍처 쌍에 대해 표현 가능성 또는 불가능성을 구성적 증명(constructive proof) 또는 반례를 통해 입증

### 실험 및 결과
이론적 분석을 통해 다음과 같은 표현력 계층이 도출되었다:

- **보조 변수 없는 BT < FSM**: 보조 변수 없는 순수 BT는 FSM이 표현할 수 있는 모든 행동을 표현할 수 없음. 즉, 메모리가 없는 BT는 FSM보다 표현력이 낮음
- **보조 변수 있는 BT = FSM**: 보조 변수를 도입하면 BT의 표현력이 FSM과 동등해짐
- **DT < BT (보조 변수 없는)**: Decision Tree는 순수 BT보다 표현력이 낮음
- **TR과 BT의 관계**: Teleo-reactive Program과 BT 간에도 명확한 계층 관계가 존재
- **가독성-표현력 트레이드오프**: 보조 변수를 추가하면 표현력은 증가하지만, BT의 핵심 장점인 가독성과 모듈성이 저하될 수 있음

### 결론
본 논문은 BT와 관련 제어 아키텍처들 간의 표현력 계층을 최초로 형식적으로 수립하였다. 핵심 발견은 보조 변수의 사용 여부가 BT의 표현력을 결정적으로 좌우하며, 이로 인해 가독성과 표현력 사이에 근본적인 트레이드오프가 존재한다는 것이다. 이 결과는 실제 BT 설계 시 어느 수준의 복잡도가 필요한지 판단하는 이론적 근거를 제공하며, "BT가 FSM보다 나은가?"라는 질문에 "조건에 따라 다르다"는 엄밀한 답변을 제시한다.
