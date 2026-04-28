---
title: "AirSim: High-Fidelity Visual and Physical Simulation for Autonomous Vehicles"
description: "Unreal Engine 기반의 오픈 소스 시뮬레이터로, 물리적·시각적으로 사실적인 환경에서 자율 주행 차량의 알고리즘을 개발·테스트할 수 있도록 모듈형 물리 엔진, 센서 모델, HITL 지원을 제공한다."
authors:
  - name: Shital Shah
  - name: Debadeepta Dey
  - name: Chris Lovett
  - name: Ashish Kapoor
year: 2017
venue: "FSR 2017 (Field and Service Robotics)"
tags: [autonomous-vehicles, simulation, unreal-engine, quadrotor, hardware-in-the-loop, sensor-modeling, physics-engine, reinforcement-learning]
relevance: high
reading_reason: "SIL 자동화, 연구를 위한 기반으로 활용"
date: 2026-04-28
slug: shah-2017-airsim
sidebar_label: "AirSim"
---

# AirSim: High-Fidelity Visual and Physical Simulation for Autonomous Vehicles

> **Shital Shah, Debadeepta Dey, Chris Lovett, Ashish Kapoor** · **2017** · **FSR 2017**

> 관련도: 상 · 읽은 이유: SIL 자동화, 연구를 위한 기반으로 활용

:::tip Intuition
실제 드론을 날리면 비싸고 위험하니, Unreal Engine의 사실적인 그래픽 위에 정밀한 물리 엔진과 센서 모델을 얹어서 가상 세계에서 드론을 마음껏 훈련시키고 테스트할 수 있게 만든 오픈 소스 비행 시뮬레이터이다.
:::

{/* truncate */}

## One-liner

Unreal Engine 4 위에 모듈형 물리 엔진(1000 Hz), 환경 모델(중력·자기장·대기압), 센서 모델(IMU·기압계·자력계·GPS)을 구현하고, 실제 비행 컨트롤러(PX4 등)와의 **Hardware-In-The-Loop** (HITL) 연동을 지원하는 오픈 소스 자율 주행 시뮬레이션 플랫폼이다.

## Problem

자율 주행 알고리즘의 개발과 테스트에는 대량의 학습 데이터와 다양한 환경 조건이 필요하지만, 실제 차량을 운용하는 것은 비용이 높고 위험하다. 강화학습이나 모방학습 같은 기법은 높은 샘플 복잡도(sample complexity)를 요구하므로 시뮬레이션 의존도가 더욱 커진다. 기존 시뮬레이터(Gazebo, Hector, RotorS, jMavSim)는 시각적 사실성이 부족하거나, 특정 미들웨어에 강하게 결합되어 있거나, 센서 모델이 단순하여 sim-to-real 전이에 한계가 있었다.

## Core Idea

게임 엔진(Unreal Engine 4)의 포토리얼리스틱 렌더링 능력을 활용하면서, 자체 구현한 경량 물리 엔진으로 1000 Hz 실시간 업데이트를 달성한다. 차량 모델·환경 모델·센서 모델·물리 엔진을 모두 독립적인 모듈로 설계하여, 각 컴포넌트를 교체하거나 AirSim 외부에서 재사용할 수 있게 했다. API 계층이 시뮬레이션과 실제 환경을 추상화하므로, 알고리즘 코드를 수정 없이 실차에 배포할 수 있다.

## Method

### 차량 모델 (Vehicle Model)
- 차량을 $K$개의 꼭짓점(vertex)으로 정의하고, 각 꼭짓점에서 발생하는 힘과 토크를 계산한다.
- 쿼드로터의 경우 프로펠러 추력과 토크를 다음과 같이 계산한다:
  $$ \mathbf{F}_i = C_T \rho \omega^2_{max} D^4 u_i \qquad \tau_i = \frac{1}{2\pi} C_{pow} \rho \omega^2_{max} D^5 u_i $$
  ($C_T$: 추력 계수, $C_{pow}$: 파워 계수, $\rho$: 공기 밀도, $D$: 프로펠러 직경, $\omega_{max}$: 최대 각속도, $u_i$: 무차원 제어 입력)
- 비행 중 꼭짓점 위치와 법선의 동적 변경을 허용하여 VTOL 등의 변형 기체를 시뮬레이션할 수 있다.

### 환경 모델 (Environment)
- **중력**: 고도에 따른 중력 변화를 이항 근사로 모델링: $g \approx g_0 (1 - 2h/R_e)$
- **자기장**: Tilted Dipole Model로 지구 자기장의 위도·경도·고도에 따른 변화를 계산한다.
- **대기압·공기 밀도**: 1976 U.S. Standard Atmosphere 모델(51 km 이하)과 확장 모델(86 km까지)을 사용한다.

### 물리 엔진 (Physics Engine)
- 1000 Hz로 동작하여 고속 쿼드로터 제어의 실시간 시뮬레이션을 지원한다.
- 선형 항력: $|F_d| = \frac{1}{2}\rho|v|^2 C_{lin}A$, 각 항력은 차체 표면을 직사각형 박스로 근사하여 적분한다.
- 적분 방식으로 Euler 대신 **Velocity Verlet** 알고리즘을 채택하여 2차 정확도와 안정성을 확보했다.
- 방향(orientation)은 쿼터니언으로 관리하여 회전 행렬의 드리프트 문제를 방지한다.
- 충돌 감지는 Unreal Engine의 내장 시스템을 활용하고, Coulomb 마찰 모델로 충돌 응답을 계산한다.

### 센서 모델
- **IMU (가속도계·자이로스코프)**: 백색 노이즈 + Gaussian Markov 과정 기반 바이어스 드리프트를 지면 진리(ground truth)에 합산한다.
- **기압계**: Gaussian Markov 과정으로 장기 드리프트를 모델링하고, 데이터시트 기반 백색 노이즈를 추가한다.
- **자력계**: Tilted Dipole Model의 출력에 데이터시트 기반 노이즈를 추가한다.
- **GPS**: 지연(약 200 ms), 느린 갱신율(약 50 Hz), 1차 저역 통과 필터 기반의 수평·수직 정밀도 수렴을 시뮬레이션한다.

## Results

쿼드로터(Flamewheel + Pixhawk v2)로 실세계 비행과 시뮬레이션을 비교 검증했다.

| 실험 | 메트릭 | 수치 |
|------|--------|------|
| **원형 비행 궤적** | Symmetric Hausdorff Distance | 1.47 m |
| **사각형 비행 궤적** | Symmetric Hausdorff Distance | 0.65 m |
| **자이로 (정지 상태)** | 분산 비교 | 시뮬 2.47e-7 vs 실제 6.71e-7 rad²/s² |
| **가속도계 (정지 상태)** | 분산 비교 | 시뮬 1.78e-4 vs 실제 1.93e-4 m²/s⁴ |
| **가속도계 (비행 중)** | 분산 비교 | 시뮬 1.75e-3 vs 실제 9.46 m²/s⁴ |

비행 중 가속도계 분산의 큰 차이는 실제 기체에서 모터 진동이 발생하지만 시뮬레이션에서는 이를 모델링하지 않았기 때문이다.

## Key Figures

- **Fig. 1**: AirSim의 도심 환경 스냅샷. 인셋에 깊이 맵, 객체 세그멘테이션, 전방 카메라 스트림을 실시간으로 표시한다.
- **Fig. 2**: 시스템 아키텍처 다이어그램. Flight Controller ↔ Vehicle Model ↔ Physics Engine ↔ Sensor Models ↔ Rendering Engine ↔ API Layer ↔ Companion Computer의 모듈 간 상호작용을 보여준다.
- **Fig. 4**: 원형·사각형 기동의 시뮬레이션(보라색) vs 실세계(빨간색) 궤적 비교 및 시공간 플롯.
- **Fig. 5**: 기압계와 자력계의 시뮬레이션 신호와 실세계 센서 신호의 특성 비교.

## Contribution vs Limitation

**저자 주장**
- Unreal Engine을 활용한 포토리얼리스틱 시각 환경과 정밀 물리 시뮬레이션의 결합.
- 모든 핵심 컴포넌트(물리 엔진, 차량 모델, 센서 모델)가 독립적으로 재사용 가능한 모듈형 설계.
- MavLink 등 표준 프로토콜을 통한 HITL 지원으로, 시뮬레이션에서 실차로의 무수정 배포 가능.
- 오픈 소스로 커뮤니티 기반 발전을 지향.

**저자가 밝힌 한계**
- 복잡한 충돌 응답이나 고급 지면 상호작용 모델이 없다.
- 카메라 센서의 노이즈·렌즈 모델이 Unreal Engine 내장 기능에 의존한다.
- GPS 신호의 장애물에 의한 감쇠(멀티패스 등)를 시뮬레이션하지 않는다.
- 비행 중 모터 진동에 의한 IMU 노이즈 증가를 모델링하지 않아 실세계와 큰 차이가 발생한다.

:::note 실제로 보이는 것
- 이 논문의 가장 큰 기여는 게임 엔진의 시각적 사실성 + 자체 구현한 경량 물리 엔진의 실시간성이라는 조합을 오픈 소스로 제공한 것이다. 이후 Cosys-AirSim 등 산업용 확장의 토대가 되었다.
- 정지 상태의 센서 모델은 실세계와 잘 맞지만, 비행 중(모터 진동 등 동적 요인)에서는 상당한 gap이 존재한다. 이는 sim-to-real 전이 시 반드시 고려해야 할 지점이다.
- LiDAR나 RADAR 같은 능동 센서 모델이 없는 것은 당시의 한계이며, 이후 Cosys-AirSim(Jansen et al. 2023)에서 보완되었다.
:::

## Quotes

> "AirSim is an open-source platform that aims to narrow the gap between simulation and reality in order to aid development of autonomous vehicles." (p.2)
>
> "The task of mimicking the real-world in real-time simulation is a challenging endeavor." (p.13)

## Idea Seeds

- **모터 진동 모델링**: 비행 중 가속도계 분산의 실세계 대비 ~5400배 차이(1.75e-3 vs 9.46)는 모터 진동 모델의 부재 때문이다. RPM에 따른 고조파(harmonic) 진동 모델을 추가하면 IMU 시뮬레이션의 현실성이 크게 향상될 수 있다.
- **Domain Randomization 베이스라인**: 환경 모델 파라미터(중력, 대기압, 자기장)를 의도적으로 변동시켜 학습시키면, 실세계 전이 시 환경 불확실성에 대한 강건성을 확보할 수 있다.

## For My Writing

AirSim은 시뮬레이션 기반 자율 주행 연구의 사실상 표준 플랫폼 중 하나로, sim-to-real 전이나 시뮬레이션 환경 구축을 논의할 때 기본 참조점으로 인용하기 적합하다. 특히 Cosys-AirSim 등 후속 확장을 함께 언급하면 기본 프레임워크의 한계 → 산업 응용을 위한 확장이라는 서사를 구성할 수 있다.

## Open Questions

**이해하지 못한 것**
- Velocity Verlet 적분에서 $a_{k+1}$을 계산하려면 $v_{k+1}$이 필요하고, $v_{k+1}$을 계산하려면 $a_{k+1}$이 필요한 순환 의존성이 있는데, 이를 실제 구현에서 어떻게 해결했는지 상세히 설명되지 않았다.

**저자가 다루지 않은 것**
- 멀티 에이전트(다수 드론) 시뮬레이션에서의 성능 스케일링.
- LiDAR, RADAR 등 능동 센서 모델 (이후 Cosys-AirSim에서 보완됨).
- 날씨(비, 안개, 바람)가 센서와 비행 역학에 미치는 영향의 체계적 모델링.

## Links

- **후속 확장**: [Cosys-AirSim (Jansen et al. 2023)](https://arxiv.org/abs/2303.13381) — LiDAR, Pulse-Echo, 절차적 환경 생성 등 산업용 확장
- **관련 시뮬레이터**: [Gazebo](http://gazebosim.org/), [RotorS](https://github.com/ethz-asl/rotors_simulator)

## References

- **arXiv**: [1705.05065](https://arxiv.org/abs/1705.05065)
- **Code**: [github.com/Microsoft/AirSim](https://github.com/Microsoft/AirSim)
- **BibTeX key**: `airsim2017fsr`

```bibtex
@inproceedings{airsim2017fsr,
  author    = {Shital Shah and Debadeepta Dey and Chris Lovett and Ashish Kapoor},
  title     = {AirSim: High-Fidelity Visual and Physical Simulation for Autonomous Vehicles},
  year      = {2017},
  booktitle = {Field and Service Robotics},
  eprint    = {arXiv:1705.05065},
  url       = {https://arxiv.org/abs/1705.05065}
}
```