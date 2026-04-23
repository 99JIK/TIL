---
title: Behavior Trees and State Machines in Robotics Applications
date: '2023-04-18'
description: Behavior Tree와 Finite State Machine을 로봇 조작 태스크에서 실증적으로 비교하여 BT의 모듈성과 유지보수성 우위를 검증한 논문
tags: [Robotics, Behavior Tree, State Machine, Policy Design]
authors:
- name: Matteo Iovino
- name: Julian Förster
- name: Pietro Falco
- name: Jen Jen Chung
- name: Roland Siegwart
- name: Christian Smith
---

## 논문 정보

- **제목**: Behavior Trees and State Machines in Robotics Applications
- **저자**: Matteo Iovino (KTH Royal Institute of Technology), Julian Förster (ETH Zurich), Pietro Falco (ABB Corporate Research), Jen Jen Chung (University of Queensland), Roland Siegwart (ETH Zurich), Christian Smith (KTH Royal Institute of Technology)
- **학회/저널**: IEEE Transactions on Software Engineering, Volume 49, Issue 9, 2023
- **발행일**: 2023-04-18
- **DOI**: [10.1109/TSE.2023.3269081](https://ieeexplore.ieee.org/document/10106642/)
- **주요 연구 내용**: Behavior Tree(BT)와 Finite State Machine(FSM)을 로봇 조작 태스크에서 실증적으로 비교하여 설계 복잡도, 유지보수성, 성능을 분석
- **주요 결과 및 결론**: BT가 복잡한 다단계 로봇 태스크에서 FSM 대비 우수한 확장성과 유지보수성을 제공함을 실증
- **기여점**: BT와 FSM의 이론적 비교를 넘어, 실제 로봇 조작 태스크에서의 실증적 비교 데이터를 최초로 제공
<!--truncate-->

## 요약

### 초록
상태 기계(State Machine)는 수십 년간 행동 모델링의 표준으로 사용되어 왔으나, 최근 Behavior Tree(BT)가 로봇 공학자들 사이에서 주목받고 있다. 원래 컴퓨터 게임에서 자율 액터의 행동 모델링을 위해 설계된 BT는 확장 가능한 트리 기반 미션 표현을 제공하며, 모듈적 설계와 코드 재사용을 지원한다고 주장된다. 본 논문은 BT와 FSM 간의 실증적 비교를 제공하여, 각 프레임워크의 설계 복잡도, 유지보수성, 성능을 로봇 조작 태스크를 통해 분석한다.

### 서론
FSM은 자동차, 항공, 산업 로봇 등 다양한 분야에서 제어 로직 설계에 널리 사용되어 왔다. 그러나 상태와 전이(transition)의 수가 증가하면 FSM의 복잡도가 급격히 증가하여 유지보수가 어려워지는 "상태 폭발(state explosion)" 문제가 존재한다. BT는 계층적 트리 구조를 통해 이 문제를 완화할 수 있다고 이론적으로 주장되어 왔으나, 실제 로봇 응용에서의 실증적 비교 연구는 부족하였다. 이에 저자들은 실제 로봇 조작 태스크를 통해 양 프레임워크를 체계적으로 비교한다.

### 모델 아키텍처 / 방법론
저자들은 다음과 같은 비교 프레임워크를 설계하였다:

1. **태스크 설계**: 모바일 매니퓰레이터를 활용한 물체 가져오기(item fetching) 태스크를 기본 시나리오로 설정
2. **BT 구현**: 백워드 체이닝(backward chaining) 기법을 활용한 BT 설계. 목표 조건에서 역방향으로 필요한 액션과 조건을 구성
3. **FSM 구현**: 결함 내성(fault-tolerant) FSM 설계. 각 상태에서 발생 가능한 오류 상황에 대한 전이를 명시적으로 정의
4. **비교 기준**:
   - **설계 복잡도**: 태스크 모델링에 필요한 노드/상태 수, 연결(전이) 수
   - **유지보수성**: 태스크 변경 또는 확장 시 수정해야 하는 코드의 양(프로그래밍 노력)
   - **성능**: 실행 시 로봇의 견고성(robustness)과 반응성(reactivity)
5. **변형 태스크**: 기본 태스크에 새로운 요구사항(장애물 회피, 추가 물체 처리 등)을 점진적으로 추가하여 확장성 비교

### 실험 및 결과
실제 모바일 매니퓰레이터를 활용한 실험에서 다음 결과를 얻었다:

- **설계 복잡도**: 기본 태스크에서는 BT와 FSM 간 큰 차이가 없었으나, 태스크가 복잡해질수록 FSM의 상태-전이 수가 급격히 증가한 반면 BT는 완만하게 증가
- **유지보수성**: BT의 모듈적 구조 덕분에 새로운 기능 추가 또는 기존 기능 수정 시 필요한 코드 변경량이 FSM 대비 현저히 적음. BT에서는 서브트리 추가/교체만으로 확장 가능한 반면, FSM에서는 다수의 상태와 전이를 동시에 수정해야 함
- **성능**: 실행 시 반응성 측면에서 BT가 우수. BT의 tick 기반 실행 모델은 환경 변화에 빠르게 대응 가능한 반면, FSM은 현재 상태에 고정되어 전이 조건이 충족될 때까지 대기
- **확장성**: 복잡한 다단계 태스크에서 BT의 우위가 더욱 뚜렷하게 나타남

### 결론
본 논문은 BT와 FSM에 대한 기존의 이론적 비교를 넘어, 실제 로봇 조작 태스크에서의 실증적 비교 데이터를 제공하였다. 결과적으로 BT는 복잡한 다단계 로봇 태스크에서 FSM 대비 우수한 확장성과 유지보수성을 제공하며, 반응성 측면에서도 이점이 있음을 확인하였다. 이 연구는 로봇 제어 아키텍처 선택 시 실증적 근거를 제공하며, 특히 태스크 복잡도가 높은 응용에서 BT의 채택을 지지하는 결과를 보여주었다.
