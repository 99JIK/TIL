---
title: A survey of Behavior Trees in robotics and Al
date: 2022-04-12
description: 컴퓨터 게임에서 시작된 행동 트리(Behavior Trees)의 핵심 이론과 로봇 공학 및 인공지능 분야에서의 광범위한 응용 사례를 체계적으로 분석하고 향후 과제를 제시한다.
tags:
  - Behavior Trees
  - Robotics
  - Artificial Intelligence
  - Autonomous Systems
  - Control Architecture
  - Survey
authors:
  - Matteo Iovino
  - Edvards Scukins
  - Jonathan Styrud
  - Petter Ögren
  - Christian Smith
  - Alexandru Forrai
---

## 논문 정보
- **제목**: A survey of Behavior Trees in robotics and Al
- **저자**: Matteo Iovino, Edvards Scukins, Jonathan Styrud, Petter Ögren, Christian Smith (KTH Royal Institute of Technology)
- **학회/저널**: Robotics and Autonomous Systems
- **발행일**: 2022-04-12
- **DOI**: [10.1016/j.robot.2022.104096](https://doi.org/10.1016/j.robot.2022.104096)
- **주요 연구 내용**: 모듈성과 반응성이 뛰어난 행동 트리(BT)의 구조적 특징을 설명하고, 게임 AI에서 로봇 공학으로 확장된 기술적 변천사를 다룬다. 수동 설계뿐만 아니라 강화 학습 및 자동 계획(Planning)을 통한 BT 생성 방법론을 포괄적으로 분석한다.
- **주요 결과 및 결론**: BT는 유한 상태 기계(FSM)의 한계를 극복하며 복잡한 시스템의 제어 정책을 투명하게 관리할 수 있음을 입증한다. 특히 로봇 조작, 자율 주행, 스웜 로봇 등 다양한 도메인에서의 성공적인 적용 사례를 통해 그 효용성을 확인한다.
- **기여점**: 160편 이상의 방대한 문헌을 바탕으로 BT 연구의 현주소를 체계화한 분류법(Taxonomy)을 제시한다. 또한 설명 가능한 AI(XAI)와 안전한 자율 주행 등 향후 연구가 필요한 4가지 핵심 도전 과제를 명확히 정의한다.
<!--truncate-->
## 요약
### 초록
행동 트리(BT)는 원래 게임 AI의 모듈성을 높이기 위해 발명되었으나, 지난 10년간 로봇 공학 커뮤니티에서 큰 관심을 받아왔다. 본 논문은 인공지능과 로봇 응용 분야에서의 BT에 대한 종합적인 설문 조사를 제공하며, 기존 문헌을 방법론, 응용 분야, 기여도에 따라 분류하고 향후 연구 과제를 제시한다.
![Figure 1](img/Pasted%20image%2020260422134615.png)
### 서론
연구진은 BT가 로봇이나 가상 게임 캐릭터의 정책(Policy) 또는 컨트롤러 역할을 수행한다고 설명한다. 논문의 **Figure 1**은 도메인(Game AI, Robotic AI)과 설계 방법(수동 설계, 강화 학습, 계획 등)을 기준으로 본 설문 조사에서 다루는 주제들의 개요를 시각화하여 보여준다.

### 배경
기존에 널리 사용되던 유한 상태 기계(FSM)는 시스템이 복잡해질수록 상태 전이 로직이 분산되어 확장이 어렵고 재사용성이 떨어진다는 단점이 있다. BT는 상태 전이 로직을 계층적인 트리 구조로 조직화하여 모듈성을 획기적으로 개선하며, 이는 인간과 알고리즘 모두가 분석하기 용이한 구조를 제공한다.
![Table 1](img/Pasted%20image%2020260422134103.png)
![Figure 2](img/Pasted%20image%2020260422134042.png)
### 모델 아키텍처 / 방법론
- **핵심 구조**: BT는 루트(Root), 제어 흐름 노드(Control Flow Node), 실행 노드(Execution Node)로 구성된 유향 트리 구조이다. **Figure 2**의 FPS 게임 예시를 보면, '공격 여부'나 '체력 상태'를 체크하는 조건 노드(원형)와 '회피', '무기 발사' 등 실제 동작을 수행하는 액션 노드(사각형)가 계층적으로 연결되어 있다.
- **주요 구성 요소**: **Table 1**은 BT의 다섯 가지 주요 노드 타입을 정의한다. 모든 노드는 실행 시 '성공(Success)', '실패(Failure)', '실행 중(Running)' 중 하나의 상태를 부모에게 반환하는 공통 인터페이스를 가진다.
    * **시퀀스**(Sequence, →): 모든 자식이 성공해야 성공을 반환한다.
    * **폴백**(Fallback, ?): 자식 중 하나라도 성공하면 성공을 반환하며, 실패 시 다음 대안을 실행한다.
    * **병렬**(Parallel, ⇉): $M$개 이상의 자식이 성공할 때 성공을 반환한다.
- **수식 및 알고리즘**: BT의 실행은 루트에서 주기적으로 발생하는 '틱(Tick)' 신호를 통해 이루어진다. 예를 들어 시퀀스 노드의 동작은 다음과 같은 알고리즘을 따른다.
$$\text{for } i \leftarrow 1 \text{ to } N \text{ do: } childStatus \leftarrow Tick(child(i))$$
상태가 'Running'이나 'Failure'이면 즉시 해당 값을 반환하여 제어 흐름을 관리한다.
![Figure 5](img/Pasted%20image%2020260422134356.png)
### 실험 결과
- **주요 데이터셋 및 설정**: 본 논문은 특정 실험 데이터셋을 사용하는 대신 160개 이상의 논문을 체계적으로 분류한다. 응용 분야는 크게 게임(Combat, RTS 등)과 로봇(Manipulation, UAV 등)으로 나뉜다.
- **핵심 성능 지표**: BT의 우수성은 모듈성과 가독성으로 평가된다. 각 도메인별 연구 문헌을 요약하여 제시한다. 특히 **Figure 5**의 모바일 매니퓰레이터 사례에서는 BT 최적화 알고리즘을 통해 병렬 노드를 추가함으로써 작업 완료 시간을 단축할 수 있음을 보여준다. 또한 **Figure 7**은 진화 알고리즘을 통해 학습된 팩맨(Pacman)의 BT 구조를 제시하며 자동 생성 가능성을 증명한다.

### 결론
BT는 복잡한 작업을 계층적으로 분해하고 재사용 가능한 모듈로 관리하는 데 탁월한 성능을 보인다. 향후 연구는 설명 가능성(Explainability)을 확보하고, 인간-로봇 상호작용(HRI) 상황에서의 안전성을 보장하며, 기계 학습 모델을 BT 구조 내에 효과적으로 통합하는 방향으로 전개되어야 한다.