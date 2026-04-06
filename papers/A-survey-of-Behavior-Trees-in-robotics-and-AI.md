---
title: A survey of Behavior Trees in robotics and AI
date: '2022-08-01'
description: 로봇공학 및 인공지능 분야에서 행동 트리(BT)의 활용 현황을 체계적으로 조사한 서베이 논문
tags: [JIK Reference, Behavior Tree, Artificial Intelligence, Survey]
authors:
- name: Matteo Iovino
- name: Edvards Scukins
- name: Jonathan Styrud
- name: Petter Ögren
- name: Christian Smith
---

## 논문 정보

- **제목**: A survey of Behavior Trees in robotics and AI
- **저자**: Matteo Iovino (KTH Royal Institute of Technology), Edvards Scukins (KTH Royal Institute of Technology), Jonathan Styrud (KTH Royal Institute of Technology), Petter Ögren (KTH Royal Institute of Technology), Christian Smith (KTH Royal Institute of Technology)
- **학회/저널**: Robotics and Autonomous Systems, Vol. 154
- **발행일**: 2022-08-01 (온라인 공개: 2022-04-12)
- **DOI**: [10.1016/j.robot.2022.104096](https://doi.org/10.1016/j.robot.2022.104096)
- **주요 연구 내용**: 행동 트리(BT)의 로봇공학 및 AI 분야 활용 현황을 방법론, 응용 분야, 기여점 기준으로 분류한 체계적 서베이
- **주요 결과 및 결론**: BT가 기존 FSM 대비 모듈성, 확장성, 재사용성에서 우수하며, 로봇공학과 게임 AI에서 복잡한 에이전트 행동 관리에 유효한 도구임을 확인
- **기여점**: BT 관련 기존 문헌을 체계적으로 분류하고, 합성·분석 방법론, 학습 기반 BT, 미해결 연구 과제를 종합적으로 정리
<!--truncate-->

## 요약

### 초록
행동 트리(Behavior Trees, BT)는 원래 컴퓨터 게임에서 모듈형 AI를 구현하기 위해 발명되었으나, 지난 10년간 로봇공학 커뮤니티에서 상당한 관심을 받아왔다. 에이전트 AI의 복잡성이 증가함에 따라 기존의 유한 상태 기계(Finite State Machine, FSM)는 확장성이 떨어지고 확장·재사용이 어렵다는 한계가 있다. BT는 상태 전이 로직을 계층적 트리 구조로 조직하고, 상태를 리프 노드로 배치하여 모듈성을 크게 향상시키며, 인간과 알고리즘 모두의 합성·분석을 단순화한다. 본 논문은 AI 및 로봇공학에서의 BT에 대한 종합적 서베이를 제공하며, 기존 문헌을 방법론, 응용 분야, 기여점에 따라 분류하고, 미해결 연구 과제를 식별한다.

### 서론
게임 산업에서 NPC(Non-Player Character) AI 제어를 위해 개발된 BT는 그 모듈적이고 계층적인 구조 덕분에 로봇공학 분야로 빠르게 확산되었다. FSM이 개별 상태에 전이 로직이 분산되어 대규모 시스템에서 유지보수가 어려운 것과 달리, BT는 로직이 계층적으로 중앙 집중되어 모듈성이 높고 분석이 용이하다. 이러한 장점으로 BT에 대한 연구가 급증하였으며, 체계적인 서베이가 필요한 시점이다.

### 모델 아키텍처 / 방법론
본 서베이는 BT 관련 기존 문헌을 다음 기준으로 분류한다:

1. **합성 및 분석 방법론**: BT를 자동으로 생성하거나, 기존 BT의 특성을 형식적으로 분석하는 방법들을 조사한다. 자동 합성, 수동 설계, 하이브리드 접근법 등을 포함한다.
2. **응용 분야**: AI와 로봇공학에서 BT가 적용된 다양한 영역을 정리한다. 게임 AI, 자율 로봇, 산업 자동화 등의 분야를 다룬다.
3. **학습 기반 BT**: 강화학습, 진화 알고리즘, 모방 학습 등을 활용하여 BT를 학습·생성하는 연구를 조사한다.
4. **FSM과의 비교**: FSM에서는 로직이 개별 상태에 분산되어 확장과 재사용이 어렵지만, BT에서는 로직이 계층적으로 구조화되어 모듈성이 높고 분석이 용이하다.

### 실험 및 결과
서베이를 통해 BT가 다양한 분야에서 에이전트 AI의 복잡성을 관리하는 효과적인 도구임을 확인하였다. 특히 FSM 대비 모듈성, 확장성, 재사용성에서 우수하며, 인간의 이해와 알고리즘적 분석 모두에 유리하다. BT 합성, 학습, 형식 검증 등 다양한 연구 방향이 활발히 진행 중임을 확인하였다.

### 결론
BT는 게임 AI에서 시작되어 로봇공학 및 AI 전반으로 확산된 강력한 행동 제어 프레임워크이다. 본 서베이는 기존 문헌을 체계적으로 분류하고 미해결 연구 과제를 식별함으로써, BT 분야 연구자들에게 종합적인 참고자료를 제공한다. 향후 LLM과 BT의 통합, 대규모 멀티에이전트 시스템에서의 BT 활용 등이 주요 연구 방향으로 제시된다.
