---
title: "ASAM OpenSCENARIO"
authors: []
tags: [JIK_REFERENCE, Software Testing, Test Generation, Artificial Intelligence, Automatic Generation]
---

# ASAM OpenSCENARIO

ASAM(Association for Standardisation of Automation and Measuring systems)이 제정한 자율주행 시나리오 기술(記述) 표준. 동적 콘텐츠와 교통 시나리오를 XML 기반 DSL로 정의한다.

<!-- truncate -->

## 핵심 내용

- **표준 목적**: 시뮬레이션 툴 간 시나리오 이식성 확보 및 재현 가능한 테스트 환경 구성
- **버전 구분**:
  - **OpenSCENARIO 1.x**: XML 기반, 차량·보행자·이벤트 등의 행동 시퀀스 정의
  - **OpenSCENARIO 2.0**: 도메인 특화 언어(ESMINI 등) 기반, 확률적 시나리오 기술 지원
- **주요 구성 요소**:
  - Storyboard (Init → Story → Act → Event → Action)
  - Entity (차량, 보행자, 장애물 등)
  - Condition (환경·거리·시간 기반 트리거)
- **연동 지원**: CARLA ScenarioRunner, dSPACE, IPG CarMaker 등과 호환

## 의의

자율주행 테스트 시나리오의 표준화 언어로, 시나리오 기반 검증(Scenario-Based Testing)의 핵심 인프라. BT 기반 시나리오 생성 연구들이 이 표준을 출력 포맷으로 활용한다.

Source: [ASAM OpenSCENARIO 공식 페이지](https://www.asam.net/standards/detail/openscenario/)
