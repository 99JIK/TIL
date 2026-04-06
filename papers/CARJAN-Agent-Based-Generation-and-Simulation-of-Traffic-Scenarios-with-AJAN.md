---
title: 'CARJAN: Agent-Based Generation and Simulation of Traffic Scenarios with AJAN'
date: '2025-08-29'
description: AJAN 멀티에이전트 프레임워크와 CARLA 시뮬레이터를 결합하여 교통 시나리오를 반자동으로 생성·시뮬레이션하는 도구 CARJAN을 소개하는 논문
tags: [JIK Reference, Behavior Tree, Artificial Intelligence, Test Generation, Automatic Generation]
authors:
- name: Leonard Frank Neis
- name: André Antakli
- name: Matthias Klusch
---

## 논문 정보

- **제목**: CARJAN: Agent-Based Generation and Simulation of Traffic Scenarios with AJAN
- **저자**: Leonard Frank Neis (DFKI, Saarland Informatics Campus), André Antakli (DFKI, Saarland Informatics Campus), Matthias Klusch (DFKI, Saarland Informatics Campus)
- **학회/저널**: arXiv 프리프린트 (cs.AI)
- **발행일**: 2025-08-29
- **DOI**: [arXiv:2508.21411](https://arxiv.org/abs/2508.21411)
- **주요 연구 내용**: AJAN 멀티에이전트 프레임워크와 CARLA 자율주행 시뮬레이터를 통합하여 도시 교통 시나리오를 반자동으로 생성하고 시뮬레이션하는 도구 CARJAN 개발
- **주요 결과 및 결론**: 보행자, 자전거, 자율주행 차량 등 다양한 에이전트가 상호작용하는 복합 교통 시나리오의 비주얼 모델링과 시뮬레이션을 통합한 최초의 접근법 제시
- **기여점**: SPARQL Behavior Tree 기반 에이전트 의사결정과 비주얼 UI 기반 시나리오 모델링을 결합하여 사용자 친화적인 교통 시나리오 생성·시뮬레이션 도구 제공
<!--truncate-->

## 요약

### 초록
보행자, 자전거, 자율주행 차량 등 다양한 유형의 상호작용 에이전트가 포함된 도시 교통 시나리오의 사용자 친화적 모델링 및 가상 시뮬레이션은 여전히 어려운 과제이다. 본 논문은 멀티에이전트 엔지니어링 프레임워크 AJAN과 자율주행 시뮬레이터 CARLA를 기반으로 이러한 시나리오를 반자동으로 생성하고 시뮬레이션하는 새로운 도구 CARJAN을 소개한다. CARJAN은 교통 시나리오 레이아웃의 모델링, 저장, 관리를 위한 비주얼 사용자 인터페이스를 제공하며, CARLA에서의 동적 시나리오 시뮬레이션을 위해 SPARQL Behavior Tree 기반 에이전트 의사결정 및 상호작용을 활용한다.

### 서론
자율주행 시스템의 안전성 검증을 위해서는 다양한 교통 상황에서의 체계적인 테스트가 필수적이다. 기존의 시나리오 생성 방법은 수동 스크립팅에 의존하여 다양성과 확장성이 부족하다. CARJAN은 시맨틱 웹 기술과 멀티에이전트 시스템을 결합하여 이러한 한계를 극복하고, 지능적 에이전트 기반의 교통 시나리오 생성·시뮬레이션을 가능하게 한다.

### 모델 아키텍처 / 방법론
CARJAN의 핵심 구성요소와 기술 스택은 다음과 같다:

1. **비주얼 UI 기반 시나리오 모델링**: 그리드 기반 레이아웃에서 드래그 앤 드롭으로 교통 시나리오를 설계한다. 엔티티 배치, 시나리오 저장·관리 기능을 제공한다.
2. **SPARQL Behavior Tree 기반 의사결정**: 에이전트(보행자, 자전거, AV 등)의 행동을 SPARQL 쿼리 기반 행동 트리로 정의한다. AJAN 에이전트 프레임워크의 선언적 행동 모델링을 활용한다.
3. **Flask 미들웨어**: AJAN 프레임워크와 CARLA 시뮬레이터를 연결하는 미들웨어로, 두 시스템 간의 통신을 담당한다.
4. **CARLA 통합**: 모델링된 시나리오를 원클릭으로 CARLA 형식으로 변환하여 직접 실행·검증한다.

| 항목 | 내용 |
|------|------|
| 에이전트 프레임워크 | AJAN (SPARQL 기반) |
| 시뮬레이터 | CARLA |
| 의사결정 | SPARQL Behavior Trees |
| 미들웨어 | Flask |
| 인터페이스 | 비주얼 UI (그리드 기반) |

### 실험 및 결과
CARJAN은 대화형 지능적 에이전트 기반의 가상 교통 시나리오 생성·시뮬레이션을 통합한 최초의 접근법을 제시한다. 비주얼 UI를 통해 시나리오 레이아웃을 직관적으로 설계하고, SPARQL Behavior Tree로 에이전트 행동을 정의하며, CARLA 환경에서 직접 시뮬레이션을 수행하는 엔드투엔드 워크플로우를 구현하였다. 다만 정량적 실험 결과나 비교 벤치마크는 포함되지 않았으며, 도구의 아키텍처와 기능을 중심으로 기술되었다.

### 결론
CARJAN은 BT와 시맨틱 웹 기술(SPARQL)을 결합한 독특한 접근법으로, 에이전트 기반 시나리오 생성과 시뮬레이션을 통합한 최초의 시도 중 하나이다. 사용자 친화적인 비주얼 인터페이스와 지능적 에이전트 행동 모델링을 결합하여, 자율주행 시스템의 안전성 검증을 위한 다양한 교통 시나리오 생성을 지원한다. DFKI(독일 인공지능 연구 센터) 소속 연구팀이 개발하였으며, CC BY 4.0 라이선스로 공개되었다.
