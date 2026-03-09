---
title: "CARJAN: Agent-Based Generation and Simulation of Traffic Scenarios with AJAN"
tags: [JIK_REFERENCE, CARLA, simulation, autonomous-driving, behavior-tree, agent-modeling, scenario]
---

# CARJAN: Agent-Based Generation and Simulation of Traffic Scenarios with AJAN

## 서지 정보
- **저자**: CARJAN Team (Matthias Klusch et al.)
- **출판**: arXiv preprint
- **연도**: 2025
- **DOI/arXiv**: arXiv: 2508.21411

## 핵심 요약
CARJAN은 AJAN(멀티에이전트 엔지니어링 프레임워크)과 CARLA 드라이빙 시뮬레이터를 통합한 신규 도구로, 도시 교통 시나리오의 반자동 생성 및 시뮬레이션을 지원한다. CARJAN은 보행자, 자전거 이용자, 자율주행 차량 등 다양한 유형의 에이전트가 상호작용하는 교통 시나리오의 레이아웃을 시각적 UI에서 모델링하고 저장·관리할 수 있다. SPARQL 기반 행동 트리(Behavior Tree)를 활용하여 CARLA 동적 시뮬레이션에서 에이전트의 의사결정과 상호작용을 제어한다. 인텔리전트 에이전트 기반의 교통 시나리오 생성과 시뮬레이션의 통합적 접근법을 최초로 제시한 연구다.

## 주요 기여
1. AJAN 멀티에이전트 프레임워크와 CARLA 시뮬레이터를 통합한 CARJAN 도구 개발
2. SPARQL 기반 BT를 통한 CARLA 에이전트의 지능적 의사결정 및 상호작용 제어
3. 시각적 UI 기반 교통 시나리오 레이아웃 모델링·저장·유지보수 기능 제공

## 핵심 개념
- **AJAN (Agent-based Interaction Architecture using kNowledge and Beliefs)**: 멀티에이전트 시스템을 위한 오픈소스 엔지니어링 프레임워크. 에이전트의 지식(Knowledge Base)과 BT 기반 행동 계획을 통합
- **SPARQL Behavior Tree**: SPARQL 쿼리를 행동 트리 노드에 통합하여 에이전트가 RDF 지식 그래프에서 정보를 검색하고 행동을 결정하는 BT 확장
- **Multi-Agent Traffic Simulation**: 복수의 이질적 에이전트(자동차, 보행자, 자전거)가 상호작용하는 현실적인 교통 환경 시뮬레이션
- **Semi-automated Scenario Generation**: 사용자가 레이아웃을 정의하면 시스템이 에이전트 행동과 상호작용을 자동으로 구성하는 반자동 시나리오 생성

## 석사논문과의 연관성
CARJAN은 석사논문의 연구 주제인 **CARLA 기반 에이전트 행동 모델링과 BT 활용**과 직접적으로 관련된 동시대 연구다. SPARQL BT와 LLM 생성 BT는 에이전트 행동을 자동으로 결정·실행하는 메커니즘이라는 공통점이 있으나, 접근 방식에서 차이가 있다. CARJAN이 지식 그래프(Knowledge Graph)와 SPARQL 쿼리를 통해 에이전트 행동을 결정하는 반면, 석사논문은 자연어 시나리오 맥락(Context)에서 LLM이 직접 BT를 생성한다. 두 접근법의 비교는 석사논문의 **관련 연구(Related Work)** 섹션에서 유용하며, 향후 LLM과 지식 그래프를 결합한 하이브리드 BT 생성 방향도 제시할 수 있다.

## 메모
- DFKI(German Research Center for Artificial Intelligence) 연구 그룹의 작업
- 2025년 8월 arXiv 게재로 가장 최신 관련 연구 중 하나
- AJAN GitHub: 오픈소스 멀티에이전트 프레임워크
- 논문 제목의 "CARLA agent behavior modeling with SPARQL behavior trees"는 주제를 명확히 반영
