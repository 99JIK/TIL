---
title: An Architecture for Autonomy
authors:
- name: R. Peter Bonasso
- name: R. James Firby
- name: Erann Gat
- name: David Kortenkamp
- name: David P. Miller
- name: Marc G. Slack
tags: [Architecture, Artificial Intelligence, Behavior Tree]
---

# An Architecture for Autonomy

<!--truncate-->
자율 로봇 시스템을 위한 3계층(3T) 아키텍처를 제안한다. 반응적 제어·시퀀싱·계획을 분리된 계층으로 구성하여 복잡한 자율 행동을 체계적으로 구현하는 방법론을 다룬다.

<!-- truncate -->

## 핵심 기여

- **3계층 구조 정의**:
  - **Reactive Layer (Controller)**: 센서 데이터에 즉각 반응하는 저수준 제어
  - **Sequencing Layer (Sequencer)**: 스킬 시퀀싱 및 상황 기반 행동 전환
  - **Deliberative Layer (Deliberator)**: 장기 계획 수립 및 목표 관리
- 각 계층 간 인터페이스와 통신 방식 형식화
- 실제 우주 탐사·해저 탐사 로봇에 적용한 사례 포함
- Behavior Tree의 이론적 전구체 중 하나로 자주 인용

## 의의

현대 자율 로봇 아키텍처의 초석이 된 논문. BT, FSM 등 후속 제어 패러다임에 직접적인 영향을 미쳤다.

Source: [IJRR, 1998](https://doi.org/10.1177/027836499801700402)
