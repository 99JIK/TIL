---
title: "CARLA: An Open Urban Driving Simulator"
tags: [JIK_REFERENCE, autonomous-driving, simulation, SITL, CARLA, scenario]
---

# CARLA: An Open Urban Driving Simulator

## 서지 정보
- **저자**: Alexey Dosovitskiy, German Ros, Felipe Codevilla, Antonio Lopez, Vladlen Koltun
- **출판**: Proceedings of the 1st Annual Conference on Robot Learning (CoRL), pp. 1–16
- **연도**: 2017
- **DOI/arXiv**: arXiv: 1711.03938

## 핵심 요약
CARLA(Car Learning to Act)는 자율주행 연구를 위한 오픈소스 도시 주행 시뮬레이터다. Unreal Engine 4 기반으로 개발되어 고품질 렌더링, 유연한 시나리오 설정, 다양한 센서 모달리티(RGB 카메라, LiDAR, depth, semantic segmentation 등)를 지원한다. CARLA는 자율주행 알고리즘의 훈련, 검증, 테스트를 위한 표준 플랫폼으로 설계되었으며, Python API를 통한 프로그래밍 가능한 환경 제어를 제공한다. 오픈소스·무료 배포를 통해 학계와 산업계에서 폭넓게 채택되었다. 초기 논문에서는 모방 학습(imitation learning)과 강화학습(reinforcement learning) 기반 주행 에이전트를 벤치마크로 평가했다.

## 주요 기여
1. 자율주행 연구를 위한 최초의 포괄적 오픈소스 도시 시뮬레이터 공개
2. 다양한 날씨, 조명, 교통 조건을 프로그래밍 방식으로 제어할 수 있는 유연한 환경 제공
3. 표준화된 벤치마크 태스크(town driving, one-turn, two-turn, nav 등)를 통한 자율주행 알고리즘 비교 평가 framework 제시

## 핵심 개념
- **Open-source Simulator**: 연구자 누구나 무료로 사용 가능한 자율주행 시뮬레이션 환경
- **Sensor Suite**: 카메라, LiDAR, GNSS, IMU, Radar 등 실제 AV 센서를 가상으로 재현
- **Python API**: 시뮬레이터 환경(날씨, 맵, NPC 행동 등)을 프로그래밍 방식으로 제어
- **ScenarioRunner**: CARLA와 연동되어 OpenSCENARIO 형식의 시나리오를 실행할 수 있는 별도 도구
- **Town Maps**: 다양한 도시 레이아웃(Town01~Town15+)을 제공하여 일반화 성능 테스트 지원

## 석사논문과의 연관성
CARLA는 석사논문의 핵심 실험 플랫폼이다. **Cross-Domain Environment Agent Modeling for SITL via LLM-driven Context-Aware BT Generation** 연구에서 CARLA는 에이전트(NPC 차량, 보행자 등)의 행동을 시뮬레이션하는 기반 환경으로 활용된다. LLM이 생성한 행동 트리(BT)는 CARLA의 Python API를 통해 에이전트 행동을 제어하며, Scenario Runner와 연동하여 다양한 교통 시나리오에서의 에이전트 행동을 검증한다. SITL(Software-In-The-Loop) 파이프라인에서 CARLA가 실제 물리 환경을 대신하는 소프트웨어 루프의 핵심 구성요소다.

## 메모
- 2017년 첫 공개 이후 지속적으로 업데이트 중 (현재 v0.9.x 버전)
- GitHub: https://github.com/carla-simulator/carla
- 자율주행 시뮬레이션 분야에서 가장 많이 사용되는 플랫폼 중 하나 (수천 회 인용)
- Intel Labs, Toyota Research Institute 등 주요 연구소에서 채택
