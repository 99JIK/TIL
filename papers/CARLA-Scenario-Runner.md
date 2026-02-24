---
title: "CARLA Scenario Runner"
authors: ["CARLA Simulator Team"]
tags: [CARLA, Scenario Runner, Autonomous Driving, Testing, OpenSCENARIO, Open Source]
---

# CARLA Scenario Runner

CARLA 시뮬레이터를 위한 교통 시나리오 정의 및 실행 엔진. Python API 또는 OpenSCENARIO 표준으로 작성된 시나리오를 CARLA 환경에서 실행한다.

<!-- truncate -->

## 핵심 기능

- **시나리오 정의**: Python 클래스 또는 OpenSCENARIO 1.x/2.0 XML 파일로 시나리오 기술
- **CARLA Challenge 지원**: CARLA Autonomous Driving Leaderboard의 공식 평가 엔진으로 활용
- **다양한 시나리오 내장**: 교차로 충돌, 보행자 돌발, 차선 이탈 등 표준 시나리오 기본 제공
- **에이전트 연동**: 사용자 정의 자율주행 에이전트를 시나리오에 투입하여 성능 평가
- **버전 호환**: CARLA 버전별 브랜치 관리 (0.9.6 ~ 0.9.16)

## 기술 스택

| 항목 | 내용 |
|------|------|
| 언어 | Python |
| 시나리오 포맷 | Python API, OpenSCENARIO 1.x/2.0 |
| 라이선스 | MIT |

## 의의

CARLA 기반 자율주행 시나리오 테스팅의 표준 실행 엔진. BT 기반 시나리오 생성 연구의 검증 플랫폼으로 자주 활용된다.

Source: [GitHub - carla-simulator/scenario_runner](https://github.com/carla-simulator/scenario_runner)
