---
title: "COSYS-AIRSIM: A REAL-TIME SIMULATION FRAMEWORK EXPANDED FOR COMPLEX INDUSTRIAL APPLICATIONS"
description: "산업용 어플리케이션을 위해 새로운 센서 모달리티와 절차적 환경 생성 기능을 추가한 오픈 소스 AirSim 확장 프레임워크"
authors:
  - name: Wouter Jansen
  - name: Erik Verreycken
  - name: Anthony Schenck
  - name: Jean-Edouard Blanquart
  - name: Connor Verhulst
  - name: Nico Huebel
  - name: Jan Steckel
year: 2023
venue: "ANNSIM 2023 (Annual Modeling and Simulation Conference)"
tags: [robot-simulation, sensor-modeling, procedural-generation, digital-twin, transfer-learning, lidar-simulation, simultaneous-localization-and-mapping]
relevance: high
reading_reason: "SIL 자동화, 연구를 위한 기반으로 활용"
date: 2026-04-28
sidebar_label: "Cosys-AirSim"
---

# COSYS-AIRSIM: A REAL-TIME SIMULATION FRAMEWORK EXPANDED FOR COMPLEX INDUSTRIAL APPLICATIONS

> **Wouter Jansen 외** · **2023** · **ANNSIM 2023, pp. 37–48**

> 관련도: 상 · 읽은 이유: SIL 자동화, 연구를 위한 기반으로 활용

{/* turncate */}

:::tip Intuition
산업용 로봇의 '눈(센서)'과 '두뇌(알고리즘)'를 실제 현장 투입 전 가상 공간에서 완벽하게 트레이닝할 수 있도록 돕는 물리 엔진 기반의 디지털 샌드박스이다.
:::

## One-liner

Microsoft의 AirSim을 기반으로 물리 기반 센서 모델(LiDAR, Pulse-Echo 등)과 동적 객체 및 절차적 환경 생성 기능을 확장하여 복잡한 산업용 로봇 알고리즘 검증을 지원하는 오픈 소스 시뮬레이션 프레임워크이다.

## Problem

기존의 AirSim은 드론 연구에 집중되어 있어, 복잡한 산업적 요구사항을 충족하기에 한계가 있었다. 특히 센서 배치 최적화, 정교한 **Simultaneous Localization And Mapping** (SLAM) 검증, 실내 환경의 다양성 확보를 위한 환경 변화 기능, 그리고 재질과 기상 영향을 고려한 물리적으로 정확한 센서 데이터 생성 능력이 부족했다. 상용 시뮬레이터들은 고가이며 접근성이 낮아 학계와 중소기업에서 사용하기 어렵다는 문제도 존재한다.

## Core Idea

Unreal Engine의 강력한 렌더링 성능을 활용하여 물리 기반 센서 모델링을 구현하고, 런타임에 객체를 배치하거나 상태를 변경하는 **Changeable Objects** 시스템과 절차적 환경 생성 기능을 AirSim에 통합했다. 이를 통해 사용자는 수동적인 환경 구축 없이도 무수히 많은 변종 환경에서 로봇의 성능을 검증할 수 있다.


## Method

### 물리 기반 센서 모델링
- **GPU-Accelerated LiDAR**: 단순한 레이 캐스팅을 넘어, GPU 셰이더를 통해 표면 재질(Lambertian target reflectance)과 입사각에 따른 반사 강도를 실시간으로 계산한다.
- **Weather Impact**: 비(rain)에 따른 성능 저하 모델을 통합하여 강수량에 따른 포인트 클라우드의 강도와 거리 오차를 시뮬레이션한다.
  $$ \delta = e^{-2\alpha d}-1 $$
  ($d$는 측정 거리, $\alpha$는 비 산란 계수)
- **Pulse-Echo**: 생체모방 pulse-echo RADAR의 특성을 주 대상으로, 신호의 전파, 반사, 감쇠 과정을 레이 트레이싱으로 구현했다. 프레임워크의 Echo 센서는 초음파(SONAR) 및 레이더(RADAR) 양쪽 설정을 지원한다.

### 환경 및 객체 관리
- **Object-based Instance Segmentation**: 수백만 개의 객체에 고유한 라벨과 색상을 부여하여 정교한 센서 지면 진리(Ground Truth) 데이터를 생성한다.
- **Changeable Objects**: 문, 창문, 이동하는 사람, 지게차 등 객체의 상태를 파라미터화하여 시뮬레이션 중 동적으로 변경한다.
- **Procedural Generation**: 외부 도구에서 정의한 규칙과 제약 조건에 따라 런타임에 벽, 랙, 화물 등을 배치하여 새로운 맵을 생성한다.

## Results

아래 결과들은 본 논문이 프레임워크 검증 사례로 인용한 것으로, Navigation과 SLAM 수치는 Schouten, Jansen, and Steckel (2021)의 실험에서 유래한다.

| 영역 | 주요 성과 | 비교/수치 | 출처 |
|------|----------|----------|------|
| **Navigation** | 실제 환경과 시뮬레이션 환경에서 차량 제어기의 고우선순위 행동 활성화 시간 비교 | 유사도 $\pm 1.9\%$ | Schouten et al. (2021) |
| **SLAM** | Pulse-Echo 기반 SLAM 위치 추정 오차 검증 | 95% 구간에서 3.2m 이내 오차 | Schouten et al. (2021) |
| **Data Gen** | LiDAR 세그멘테이션용 합성 데이터 생성 | 실세계 실내 데이터셋 부족 문제 해결 | 본 논문 |


## Key Figures
![Figure 1](img/Pasted%20image%2020260428151926.png)
- **Fig. 1**: Unreal Engine과 AirSim Framework 간의 연결 구조 및 확장된 API, 센서, 차량 모듈 요약.
![Figure 3](img/Pasted%20image%2020260428151952.png)
- **Fig. 3**: 실제 물류 창고 및 실외 환경과 시뮬레이션 내에서 재현된 디지털 트윈 환경의 시각적 비교.
![Figure 7](img/Pasted%20image%2020260428152016.png)
- **Fig. 7**: 정적(Static), 이동 가능(Movable), 동적(Dynamic) 객체를 구분하는 파놉틱 세그멘테이션 마스크 예시.


## Contribution vs Limitation

**저자 주장**
- 물리적으로 정확한 실시간 LiDAR 및 전파 기반 센서 모델링 제공.
- 절차적 생성 및 동적 객체 시스템을 통한 데이터 다양성 극대화.
- ROS 미들웨어 지원 및 성능 최적화를 통한 실시간 시뮬레이션 달성.

**저자가 밝힌 한계**
- 실시간성을 유지해야 하는 제약 때문에 시뮬레이션 속도 저하시 물리/애니메이션 시스템에 오차가 발생할 수 있다.
- 향후 더욱 정교한 물리 연산을 위해 **Fixed-step** 시뮬레이션 모드 도입이 고려되어야 한다.

:::note 실제로 보이는 것
이 프레임워크는 특히 산업용 AGV의 실내 자율 주행 및 SLAM 검증에 강력한 도구이다. 단순히 시각적 재현을 넘어 센서의 물리적 특성(재질 반사 등)을 깊이 있게 다루고 있어, **Sim-to-Real gap**을 줄이는 데 크게 기여한다. 다만, 고도의 물리적 상호작용(물체 파손, 복잡한 접촉 물리 등)보다는 센서 데이터의 정확한 재현과 환경의 통계적 변주에 더 치중되어 있다.
:::

## Quotes

> "The challenge of keeping the simulation capable of running in real-time continues to be one of its complex constraints." (p.10)
>
> "Using the simulator, we can quickly create an environment that closely resembles the specific use case and create a data set with which we can train a neural network." (p.9)

## Idea Seeds

- **동적 디지털 트윈 동기화**: 실제 현장의 IoT 센서 데이터를 API로 수신하여, 시뮬레이션 내의 'Changeable Objects'(예: 열린 문, 작동 중인 컨베이어 벨트) 상태를 실시간으로 동기화하는 관제 시스템 구축.
- **에지 케이스 자동 생성**: 강화학습 에이전트가 실패하는 지점을 분석하여, 절차적 생성 규칙을 통해 해당 취약 시나리오를 집중적으로 생성 및 학습시키는 루프 구현.

## For My Writing

본 논문은 산업용 자율 주행 로봇의 SLAM 성능을 평가하기 위한 고충실도 시뮬레이션 환경 구축의 핵심 사례로 활용할 수 있다. 특히 시뮬레이션 기반 학습(Simulation-based learning) 시 합성 데이터의 품질이 모델의 일반화 성능에 미치는 영향을 논의할 때, 물리 기반 센서 모델링의 필요성을 강조하는 근거로 인용하기 적합하다.

## Open Questions

**이해하지 못한 것**
- UWB와 Wi-Fi 센서 모델에서 다중 경로 간섭(Multi-path interference)이나 복잡한 실내 전파 회절이 어느 수준까지 실시간으로 계산되는가.

**저자가 다루지 않은 것**
- 여러 대의 로봇이 협업하는 멀티 에이전트 시나리오에서의 통신 지연 및 간섭 시뮬레이션.
- Unreal Engine 5의 최신 기능(Lumen, Nanite)이 시뮬레이션 성능과 물리적 정확도에 미치는 영향.

## Links

- **선행 연구**: [Shah et al. 2017 (AirSim 원본 논문, FSR 2017)](https://arxiv.org/abs/1705.05065)
- **관련 논문**: [Schouten et al. 2021 (Pulse-Echo Radar 시뮬레이션 및 SLAM 검증)](https://doi.org/10.3390/s21020523)
- **관련 프로젝트**: [UnrealCV](https://unrealcv.org/), [ROS (Robot Operating System)](https://www.ros.org/)

## References

- **arXiv**: [2303.13381](https://arxiv.org/abs/2303.13381)
- **IEEE Xplore**: [10155352](https://ieeexplore.ieee.org/document/10155352/)
- **Code**: [github.com/Cosys-Lab/Cosys-AirSim](https://github.com/Cosys-Lab/Cosys-AirSim)
- **BibTeX key**: `cosysairsim2023jansen`

```bibtex
@inproceedings{cosysairsim2023jansen,
  author    = {Jansen, Wouter and Verreycken, Erik and Schenck, Anthony and Blanquart, Jean-Edouard and Verhulst, Connor and Huebel, Nico and Steckel, Jan},
  booktitle = {2023 Annual Modeling and Simulation Conference (ANNSIM)},
  title     = {COSYS-AIRSIM: A Real-Time Simulation Framework Expanded for Complex Industrial Applications},
  year      = {2023},
  pages     = {37-48},
  keywords  = {Industries;Simultaneous localization and mapping;Machine learning algorithms;Atmospheric modeling;Transfer learning;Sensor systems and applications;Real-time systems;sensors;procedural generation;digital twins;transfer learning;open-source},
  doi       = {10.48550/arXiv.2303.13381}
}
```