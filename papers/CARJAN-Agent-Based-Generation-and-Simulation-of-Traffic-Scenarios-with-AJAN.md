---
title: "CARJAN: Agent-Based Generation and Simulation of Traffic Scenarios with AJAN"
authors: ["Matthias Klusch", "et al."]
tags: [Traffic Scenario, Agent-Based, AJAN, CARLA, Behavior Trees, SPARQL, Multi-Agent]
---

# CARJAN: Agent-Based Generation and Simulation of Traffic Scenarios with AJAN

AJAN(다중 에이전트 엔지니어링 프레임워크)과 CARLA 시뮬레이터를 결합하여 도시 교통 시나리오를 반자동으로 생성하고 시뮬레이션하는 도구 **CARJAN**을 소개한다.

<!-- truncate -->

## 핵심 기여

- **비주얼 UI 기반 시나리오 모델링**: 교통 시나리오 레이아웃을 그래픽 인터페이스로 설계·저장·관리
- **SPARQL Behavior Tree 기반 의사결정**: 에이전트(보행자, 자전거, AV 등)의 행동을 SPARQL 쿼리 기반 BT로 정의
- **멀티 에이전트 상호작용**: 여러 에이전트가 동적 시나리오에서 상호작용하는 복잡한 교통 상황 시뮬레이션
- **CARLA 통합**: 생성된 시나리오를 CARLA 환경에서 직접 실행·검증

## 기술 스택

| 항목 | 내용 |
|------|------|
| 에이전트 프레임워크 | AJAN (SPARQL 기반) |
| 시뮬레이터 | CARLA |
| 의사결정 | SPARQL Behavior Trees |
| 인터페이스 | 비주얼 UI |

## 의의

BT와 시맨틱 웹 기술(SPARQL)을 결합한 독특한 접근법. 에이전트 기반 시나리오 생성과 시뮬레이션을 통합한 첫 번째 시도 중 하나다.

Source: [arXiv:2508.21411](https://arxiv.org/abs/2508.21411)
