---
title: "Scenario Runner for CARLA"
tags: [JIK_REFERENCE, CARLA, simulation, scenario, autonomous-driving, testing, SITL]
---

# Scenario Runner for CARLA

## 서지 정보
- **저자**: CARLA Team
- **출판**: GitHub Repository (오픈소스 소프트웨어)
- **연도**: 2023 (지속 업데이트)
- **DOI/arXiv**: https://github.com/carla-simulator/scenario_runner

## 핵심 요약
CARLA 자율주행 시뮬레이터를 위한 시나리오 실행 엔진으로, OpenSCENARIO 및 자체 Python 기반 시나리오 정의 형식을 지원한다. Scenario Runner는 차량, 보행자 등 교통 참여자의 행동 시나리오를 정의하고 실행하며, 테스트 시나리오의 결과를 자동으로 평가하는 기능을 제공한다. CARLA Challenge, CARLA Leaderboard 등 자율주행 평가 대회의 공식 테스트 프레임워크로 사용된다. ScenarioRunner는 내부적으로 Py Trees(Python 행동 트리 라이브러리)를 사용하여 에이전트 행동을 제어한다.

## 주요 기여
1. CARLA 시뮬레이터에서 복잡한 교통 시나리오를 자동으로 실행하는 공식 오픈소스 도구
2. OpenSCENARIO 표준과의 호환성을 통해 다양한 시나리오 파일을 CARLA에서 실행 가능
3. CARLA Leaderboard/Challenge의 공식 평가 프레임워크로서 자율주행 알고리즘의 표준화된 평가 환경 제공

## 핵심 개념
- **Scenario Runner**: CARLA와 연동하여 사전 정의된 교통 시나리오(NPC 행동, 이벤트, 트리거 등)를 자동으로 실행하는 Python 기반 도구
- **py_trees**: Python BT 라이브러리. Scenario Runner가 내부적으로 사용하며, NPC 에이전트의 행동을 BT로 제어
- **OpenSCENARIO 호환**: ASAM OpenSCENARIO v1.x 형식의 시나리오 파일을 파싱하여 CARLA에서 실행
- **CARLA Leaderboard**: 자율주행 알고리즘을 표준화된 시나리오에서 평가하는 공개 경진대회 플랫폼

## 석사논문과의 연관성
Scenario Runner는 석사논문 실험의 **핵심 실행 플랫폼**이다. LLM이 생성한 BT를 CARLA 에이전트에 적용할 때, Scenario Runner의 py_trees 기반 BT 실행 엔진을 통해 생성된 BT를 직접 실행한다. Scenario Runner의 시나리오 트리거 메커니즘과 NPC 제어 API는 LLM-BT 시스템이 교통 상황 변화에 반응적으로 에이전트 행동을 업데이트하는 인터페이스로 활용된다. OpenSCENARIO 호환성을 통해 표준화된 형식으로 테스트 시나리오를 정의하고 실행하는 SITL 파이프라인을 구성할 수 있다.

## 메모
- GitHub: https://github.com/carla-simulator/scenario_runner
- CARLA 버전과의 호환성에 주의 필요 (CARLA 0.9.13+ 권장)
- py_trees 라이브러리를 BT 실행 엔진으로 사용하므로 LLM 생성 BT와의 통합이 자연스러움
- CARLA Challenge 2020, 2021, 2023 등 국제 자율주행 대회에서 공식 사용
