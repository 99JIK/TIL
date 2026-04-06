---
title: An Architecture for Autonomy
date: '1997-01-01'
description: 자율 로봇을 위한 3계층(3T) 아키텍처를 제안하고 다수의 실제 로봇 시스템에 적용한 경험을 정리한 논문
tags: [Architecture, Artificial Intelligence, Behavior Tree]
authors:
- name: R. Peter Bonasso
- name: R. James Firby
- name: Erann Gat
- name: David Kortenkamp
- name: David P. Miller
- name: Marc G. Slack
---

## 논문 정보

- **제목**: Experiences with an Architecture for Intelligent, Reactive Agents (An Architecture for Autonomy)
- **저자**: R. Peter Bonasso (Metrica Inc./NASA JSC), R. James Firby (University of Chicago), Erann Gat (Jet Propulsion Laboratory), David Kortenkamp (Metrica Inc./NASA JSC), David P. Miller, Marc G. Slack
- **학회/저널**: Journal of Experimental and Theoretical Artificial Intelligence (JETAI), Vol. 9, No. 1, pp. 237-256
- **발행일**: 1997
- **DOI**: [10.1080/095281397147103](https://doi.org/10.1080/095281397147103)
- **주요 연구 내용**: 반응적 제어, 시퀀싱, 심의적 계획을 분리된 계층으로 구성하는 3계층(3T) 로봇 아키텍처의 설계와 다수의 실제 로봇 시스템에 적용한 경험 정리
- **주요 결과 및 결론**: 8년간 개발된 3T 아키텍처가 6종 이상의 서로 다른 로봇 시스템에서 성공적으로 동작함을 검증
- **기여점**: 현대 자율 로봇 아키텍처의 초석이 된 3계층 구조를 형식화하고, 실용적인 소프트웨어 도구를 제공하며, BT·FSM 등 후속 제어 패러다임에 직접적 영향을 미침
<!--truncate-->

## 요약

### 초록
본 논문은 8년간 개발된 3T 로봇 아키텍처의 구현 경험을 기술한다. 이 아키텍처는 여러 수준의 추상화와 계층 간 호환 가능한 기술 언어를 사용하며, 계획적 활동과 동적 환경 대응을 위한 실시간 행동을 조율하는 구조를 갖추고 있다. 이 아키텍처의 두 가지 차별점은 다양한 실제 로봇에 구현을 돕는 소프트웨어 도구가 개발되었다는 점과, 6종 이상의 매우 다른 로봇 시스템에서 전체 또는 일부가 구현되었다는 점이다.

### 서론
자율 로봇은 복잡하고 동적인 환경에서 실시간 반응과 장기적 계획 수립을 동시에 수행해야 한다. 순수 반응적 시스템은 장기 목표를 달성하기 어렵고, 순수 심의적 시스템은 실시간 환경 변화에 대응하기 어렵다. 이러한 문제를 해결하기 위해 반응적 제어와 심의적 계획을 분리된 계층으로 구성하고, 그 사이에 시퀀싱 계층을 두는 3계층 아키텍처가 제안되었다.

### 모델 아키텍처 / 방법론
3T 아키텍처는 세 개의 분리된 계층으로 구성된다:

1. **반응 계층 (Reactive Layer / Controller)**: 센서 데이터에 즉각적으로 반응하는 저수준 제어를 담당한다. 실시간 성능이 요구되며, 빠른 피드백 루프를 통해 로봇의 물리적 행동을 직접 제어한다.
2. **시퀀싱 계층 (Sequencing Layer / Sequencer)**: 스킬 시퀀싱 및 상황 기반 행동 전환을 관리한다. 반응 계층의 기본 행동들을 조합하여 의미 있는 태스크 시퀀스를 구성하고, 현재 상황에 따라 적절한 행동을 선택한다.
3. **심의 계층 (Deliberative Layer / Deliberator)**: 장기 계획 수립 및 목표 관리를 담당한다. 전통적인 AI 계획 기법을 활용하여 고수준 목표를 달성하기 위한 전략을 수립하고, 시퀀싱 계층에 실행할 태스크 순서를 전달한다.

각 계층 간의 인터페이스와 통신 방식이 형식화되어 있으며, 계층 간 호환 가능한 기술 언어를 사용한다.

### 실험 및 결과
3T 아키텍처는 우주 탐사 로봇, 해저 탐사 로봇 등 6종 이상의 매우 다른 로봇 시스템에서 구현되었다. 다양한 프로세서, 운영체제, 작동기, 센서 구성을 사용하는 로봇에서 아키텍처의 전체 또는 일부가 성공적으로 동작함을 검증하였다. 또한 구현을 지원하는 다양한 소프트웨어 도구가 개발되어 새로운 로봇 시스템에의 적용을 용이하게 하였다.

### 결론
3T 아키텍처는 반응적 제어와 심의적 계획의 장점을 결합하여 복잡한 자율 행동을 체계적으로 구현하는 방법론을 제공한다. 이 논문은 현대 자율 로봇 아키텍처의 초석이 되었으며, Behavior Tree, Finite State Machine 등 후속 제어 패러다임에 직접적인 영향을 미쳤다. 특히 시퀀싱 계층의 개념은 BT의 이론적 전구체 중 하나로 자주 인용된다.
