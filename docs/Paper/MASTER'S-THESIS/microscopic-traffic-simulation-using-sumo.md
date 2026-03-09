---
title: "Microscopic Traffic Simulation Using SUMO"
tags: [JIK_REFERENCE, simulation, autonomous-driving, traffic, SITL, testing]
---

# Microscopic Traffic Simulation Using SUMO

## 서지 정보
- **저자**: Pablo Alvarez Lopez, Michael Behrisch, Laura Bieker-Walz, Jakob Erdmann, Yun-Pang Flötteröd, Robert Hilbrich, Leonhard Lücken, Johannes Rummel, Peter Wagner, Evamarie Wießner
- **출판**: Proceedings of the 21st IEEE International Conference on Intelligent Transportation Systems (ITSC), pp. 2575–2582
- **연도**: 2018
- **DOI/arXiv**: doi: 10.1109/ITSC.2018.8569938

## 핵심 요약
SUMO(Simulation of Urban MObility)는 독일 항공우주연구소(DLR)에서 개발한 오픈소스 미시교통 시뮬레이터로, 이 논문은 SUMO의 핵심 기능과 아키텍처를 공식적으로 소개한다. SUMO는 도시 규모의 교통 네트워크에서 개별 차량의 주행 행동, 차선 변경, 교차로 협상 등을 미시적(microscopic) 수준에서 시뮬레이션한다. TraCI(Traffic Control Interface) API를 통해 실시간으로 시뮬레이션을 제어하고 외부 애플리케이션과 통신할 수 있어, CARLA와 같은 다른 시뮬레이터와의 co-simulation이 가능하다. 전 세계 1,000+ 연구 그룹이 활용하는 사실상의 표준 교통 시뮬레이터다.

## 주요 기여
1. 오픈소스 미시교통 시뮬레이터 SUMO의 핵심 기능, 아키텍처, 사용 방법 공식 문서화
2. TraCI API를 통한 실시간 시뮬레이션 제어 및 외부 시스템과의 통합 인터페이스 제공
3. OpenStreetMap, VISUM 등 다양한 도로 네트워크 데이터 포맷과의 호환성 지원

## 핵심 개념
- **Microscopic Simulation**: 개별 차량의 행동(가속, 제동, 차선 변경)을 물리 모델에 기반하여 시뮬레이션하는 방식 (↔ 거시적/중간적 시뮬레이션)
- **TraCI (Traffic Control Interface)**: TCP/IP 소켓을 통해 실행 중인 SUMO 시뮬레이션을 외부에서 제어하는 API
- **Co-simulation**: SUMO와 CARLA를 연동하여 교통 흐름과 자율주행 에이전트를 함께 시뮬레이션하는 방식
- **IDM (Intelligent Driver Model)**: SUMO에서 기본 사용되는 차량 추종 모델. 반응 시간, 최소 간격, 가속 등을 파라미터로 가짐

## 석사논문과의 연관성
SUMO는 석사논문에서 CARLA와 함께 **Cross-Domain** 시뮬레이션 환경을 구성하는 핵심 구성요소다. CARLA가 고품질 3D 렌더링과 센서 시뮬레이션을 담당하는 반면, SUMO는 대규모 교통 흐름과 NPC 차량의 현실적인 주행 행동을 생성하는 데 강점이 있다. CARLA-SUMO Co-simulation을 통해 더 현실적인 교통 환경을 구성하고, 이 환경에서 LLM이 생성한 BT를 가진 에이전트가 어떻게 행동하는지 SITL 기반으로 검증하는 파이프라인에 SUMO가 핵심 역할을 한다. TraCI API는 LLM-BT 시스템이 에이전트 행동을 실시간으로 업데이트하는 인터페이스로도 활용 가능하다.

## 메모
- DLR(독일 항공우주연구소) 주도로 2001년부터 개발, 현재도 활발하게 유지보수 중
- GitHub: https://github.com/eclipse-sumo/sumo
- CARLA-SUMO Co-simulation 공식 지원: https://carla.readthedocs.io/en/latest/adv_sumo/
- 교통공학, 자율주행, 스마트시티 연구에서 표준적으로 사용됨
