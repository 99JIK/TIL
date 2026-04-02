---
title: Microscopic Traffic Simulation using SUMO
authors:
- name: Pablo Alvarez Lopez
- name: Michael Behrisch
- name: Laura Bieker-Walz
- name: Jakob Erdmann
- name: Yun-Pang Flötteröd
- name: Robert Hilbrich
- name: Leonhard Lücken
- name: Johannes Rummel
- name: Peter Wagner
- name: Evamarie Wießner
tags: [JIK Reference, Artificial Intelligence, Scalability, Real-Time]
---

# Microscopic Traffic Simulation using SUMO

<!--truncate-->
SUMO(Simulation of Urban MObility)는 독일항공우주센터(DLR)에서 개발한 오픈소스 미시교통 시뮬레이터다. 도시 규모의 교통 흐름을 차량 단위로 시뮬레이션한다.

<!-- truncate -->

## 핵심 기여

- **미시적 시뮬레이션**: 개별 차량의 속도·가속도·차로 변경을 물리 모델로 시뮬레이션
- **대규모 네트워크 지원**: 수백만 차량·수천 km 도로망의 실시간 시뮬레이션 가능
- **다양한 교통수단**: 자동차, 버스, 자전거, 보행자, 열차 등 멀티모달 지원
- **연동 인터페이스**: TraCI API를 통해 외부 프로그램(Python, MATLAB 등)과 실시간 통신
- **CARLA 연동**: CARLA 시뮬레이터와 공동 시뮬레이션(co-simulation) 가능

## 기술 스택

| 항목 | 내용 |
|------|------|
| 언어 | C++, Python |
| 인터페이스 | TraCI, libsumo |
| 라이선스 | EPL-2.0 (오픈소스) |

Source: [ITSC 2018](https://doi.org/10.1109/ITSC.2018.8569938)
