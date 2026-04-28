---
title: "Vehicle Hardware-In-the-Loop System for ADAS Virtual Testing"
description: "섀시 다이나모미터와 센서 자극 장치를 결합하여 대규모 시설 없이도 실차 수준에서 ADAS를 검증할 수 있는 컴팩트한 VeHIL 시스템"
authors:
  - name: Romain Rossi
  - name: Clément Galko
  - name: Hariharan Narasimman
  - name: Xavier Savatier
year: 2017
venue: "Towards a Common Software/Hardware Methodology for Future Advanced Driver Assistance Systems (Ch. 11), River Publishers"
tags: [vehicle-hardware-in-the-loop, advanced-driver-assistance-systems, virtual-testing, chassis-dynamometer, sensor-simulation]
relevance: middle
reading_reason: "실차 기반의 ADAS 검증 환경 구축 시, 실제 테스트 트랙을 대체할 수 있는 하드웨어 구성 및 센서 데이터 주입 기법을 파악하기 위함이다."
date: 2026-04-24
sidebar_label: "Vehicle HIL for ADAS"
---

# Vehicle Hardware-In-the-Loop System for ADAS Virtual Testing

> **Romain Rossi et al.** · **2017** · **Towards a Common Software/Hardware Methodology for Future Advanced Driver Assistance Systems (Ch. 11), River Publishers**

> 관련도: 중 · 읽은 이유: 실차 기반의 ADAS 검증 환경 구축 시, 실제 테스트 트랙을 대체할 수 있는 하드웨어 구성 및 센서 데이터 주입 기법을 파악하기 위함이다.

{/* turncate */}

:::tip Intuition
실제 자동차를 '런닝머신(다이나모미터)' 위에 올리고, 전방 카메라에는 LCD 화면을, 통신 모듈에는 가상 차량 데이터를 보여주어 자동차가 마치 실제 도로를 달리고 있는 것처럼 '착각'하게 만드는 시스템이다.
:::

## One-liner

실제 차량을 섀시 다이나모미터에 고정하고 센서에 물리적·전기적 자극을 직접 주입함으로써, 거대 인프라 없이 실차 통합 검증이 가능한 컴팩트한 **Vehicle-Hardware-In-the-Loop** (차량 하드웨어 인더루프) 시스템인 **SERBER**를 제안한다.

## Problem

기존의 ADAS 검증 방식은 단계별 한계가 명확하다. 모델 기반 (MIL)이나 소프트웨어 기반 (SIL)은 실제 하드웨어 특성을 반영하지 못하고, 실도로 주행 테스트는 비용이 많이 들며 위험하고 반복성이 떨어진다. 기존의 **Vehicle-Hardware-In-the-Loop** (차량 하드웨어 인더루프) 시스템은 대규모 공간 ($200 \times 40 \text{m}$)과 고속으로 움직이는 로봇 타겟(Mobile Bases)을 필요로 하여 설치와 운영이 매우 어렵고 위험하다.

## Core Idea

거대한 이동형 타겟 대신 **Chassis Dynamometer** (섀시 다이나모미터)와 **Multi-sensor Road Environment Simulation** (다중 센서 도로 환경 시뮬레이션) 소프트웨어를 결합한다. 차량은 제자리에서 바퀴만 굴리고, 시뮬레이터가 생성한 가상 환경 데이터를 센서에 직접 '주입'하여 실차 수준의 통합 테스트를 실내에서 안전하고 반복 가능하게 수행한다.


## Method

### 1. 하드웨어 구성
* **Chassis Dynamometer**: 두 개의 독립 차축을 갖는 Horiba Vulcan 4WD 모델을 사용한다. 최대 5% 경사 상당의 마찰력을 가할 수 있어, 시뮬레이터의 가상 경사도에 따라 저항 토크를 가하여 운전자가 실제 오르막을 오르는 듯한 피드백을 받게 한다.
* **USB Steering Wheel**: 앞바퀴가 다이나모미터 롤러 위에서 조향될 경우 손상이 발생할 수 있으므로, 차량의 **조향 핸들**을 물리적으로 탈거하고 USB 조이스틱으로 가상 차량의 횡방향 제어를 수행한다. 물리 바퀴는 롤러 정렬을 위해 직선으로 고정된다.

### 2. 센서 데이터 주입 방식 (Fooling strategies)
* **Full Simulation**: ADAS 유닛 자체를 전자 프로브로 대체하고, 시뮬레이션 결과(ADAS 출력)를 CAN 버스에 직접 주입한다.
* **Sensor Simulation**: 센서 부분만 분리하여 전자 프로브로 대체하고, ADAS의 신호 처리 부는 루프에 남겨둔다.
* **Stimulation (Preferred)**: 실제 ADAS 전체를 루프에 유지한 채 센서에 물리적 자극을 직접 가한다. 카메라 앞에 LCD 스크린(32인치 사용 검증)을 배치하거나, RADAR 센서에 고주파(Hyper-Frequency) 신호를 쏘는 방식이다. 차량 개조를 최소화할 수 있어 가장 선호된다.

### 3. 소프트웨어 스택
* **Pro-Sivic** (Civitec): 실시간 다중 센서 및 도로 환경 시뮬레이터로, 현실적인 영상 출력과 운동 역학 데이터를 생성한다.
* **RTMAPS** (Intempora): 각 구성 요소(다이나모미터, CAN 버스, 시뮬레이터)를 연결하는 컴포넌트 기반 그래픽 프로그래밍 미들웨어다.

## Results

* **Mobileye 560 검증**: 카메라 기반 ADAS인 Mobileye를 차량에 장착하고 LCD 스크린으로 자극을 준 결과, 가상 시나리오상의 차선 이탈 경고(Lane Departure Warning)와 전방 충돌 경고(Forward Collision Warning)가 실제 장치에서 정확히 트리거됨을 확인했다.
* **V2V 통신 테스트**: Khoda Wireless MK2 802.11p 모뎀 2대를 사용하여 가상 차량 4대의 CAM/DENM 메시지를 송신하고, 실제 차량의 HMI에 레이더 형태로 표시하는 데 성공했다.
* **운전자 피드백**: 다이나모미터의 경사 제어를 통해 운전자가 직관적이고 자연스러운 주행감을 느끼며 가상 환경에서 운전할 수 있음을 입증했다.

## Key Figures
![Figure 11.1](img/Pasted%20image%2020260424121737.png)
- **Fig 11.1**: 시뮬레이터와 실차, 다이나모미터 간의 데이터 흐름(속도 피드백, 경사 제어, 이미지 스트림)을 보여주는 시스템 개요도이다.
![Figure 11.2](img/Pasted%20image%2020260424121809.png)
- **Fig 11.2**: Pro-Sivic과 RTMAPS를 기반으로 한 소프트웨어 블록 다이어그램이다.
![Figure 11.10](img/Pasted%20image%2020260424121907.png)
- **Fig 11.10**: LCD 화면의 가상 도로 상황에 반응하여 실제 태블릿의 Mobileye 앱에 차선 이탈 경고가 뜨는 실험 장면이다.

## Contribution vs Limitation

**저자 주장**
- 대규모 인프라 없이 표준 섀시 다이나모미터가 설치된 실내 워크숍에서 ADAS 테스트가 가능하다.
- 실차의 CAN 데이터를 직접 읽고 쓰기 때문에 ADAS 작동에 따른 에너지 소비량 및 오염 물질 배출 분석이 용이하다.
- 모바일 베이스(이동 로봇)를 쓰는 방식보다 훨씬 안전하고 비용 효율적이다.

**저자가 밝힌 한계**
- 카메라와 V2X 통신 외에 RADAR, LIDAR, GPS 센서의 물리적 자극 주입은 구현이 매우 복잡하거나 아직 개발 중이다.
- 관성 센서(IMU)는 ECU에 깊이 내장되어 물리적으로 분리하거나 차량 전체를 외부 액추에이터로 움직이는 방법 외에 뚜렷한 해법이 없다.
- 비 센서(Rain sensor) 자극을 위한 물 분사 장치는 반복성을 보장하기 어렵다.

:::note 실제로 보이는 것
이 시스템은 실차를 활용한 '주행 시뮬레이터'에 가깝지만, 핵심은 센서 유닛을 속이는 'Stimulation' 기술의 정교함에 달려 있다. 카메라의 경우 FOV나 렌즈 왜곡을 LCD 화면에 정확히 투사하는 캘리브레이션 작업이 실제 성능을 좌우할 것으로 보이며, 광각/어안 카메라의 시야각을 모두 커버하는 것은 저자들도 명시적으로 어려움을 인정하고 있다.
:::

## Quotes

> "The last way (stimulation) is to keep the full ADAS in the loop and send physical stimuli to the ADAS sensor through dedicated hardware." (p.255)

> "In fact, our system can easily be installed on a standard chassis-dynamometer, if it can be controlled by software, requiring only minor physical modification of the facility." (p.266)

## Idea Seeds

- **에너지 효율 최적화**: ADAS 알고리즘(예: ACC)의 가감속 로직 변화가 실제 전기차 배터리 소모량에 미치는 영향을 다이나모미터의 정밀 측정을 통해 벤치마킹할 수 있다.
- **HMI 사용자 경험 테스트**: 위험 상황(충돌 직전)을 안전하게 반복 재현하며 운전자가 경고 시스템에 어떻게 반응하는지 연구하는 용도로 확장 가능하다.

## For My Writing

가상 검증 기술의 분류를 다룰 때, 본 논문의 SERBER 시스템을 **Stimulation-based VeHIL**의 대표 사례로 인용한다. 특히 실도로 테스트의 고비용 문제와 기존 VeHIL의 거대 인프라 문제를 동시에 해결하려 노력한 연구로 명시한다.

## Open Questions

**이해하지 못한 것**
- 조향 핸들을 분리하고 USB 휠을 사용한다면, 조향각 데이터가 실제 조향 기어박스를 거치지 않고 바로 시뮬레이터로 들어가는 것인데, 이때 발생하는 조향 피드백(Steering Feel)의 괴리를 어떻게 보완했는지 구체적 언급이 부족하다.

**저자가 다루지 않은 것**
- 다중 센서 융합(Sensor Fusion) ADAS의 경우, 카메라(영상)와 RADAR(RF) 자극의 시간적 동기화(Time Synchronization)가 매우 중요한데 이 부분의 정밀도 데이터가 누락되어 있다.

## Links

- **선행 연구**: Galko et al. (2014), "Vehicle-Hardware-In-The-Loop System for ADAS Prototyping and Validation", SAMOS XIV — 본 시스템(SERBER)의 초기 구현을 발표한 전신 논문.
- **관련 주제**: [DESERVE Project](http://deserve-project.eu) - 본 연구가 소속된 유럽 ADAS 개발 플랫폼 프로젝트 (ECSEL-JU 지원).

## References

- **Book DOI** (2022 T&F 재출판본): [10.1201/9781003339847](https://doi.org/10.1201/9781003339847)
- **ISBN**: 978-87-93519-14-5 (hardcover) / 978-87-93519-13-8 (online)
- **BibTeX key**: `rossi2017vehil`

```bibtex
@incollection{rossi2017vehil,
  title     = {Vehicle Hardware-In-the-Loop System for ADAS Virtual Testing},
  author    = {Rossi, Romain and Galko, Cl{\'e}ment and Narasimman, Hariharan and Savatier, Xavier},
  booktitle = {Towards a Common Software/Hardware Methodology for Future Advanced Driver Assistance Systems},
  editor    = {Pay{\'a}-Vay{\'a}, Guillermo and Blume, Holger},
  chapter   = {11},
  pages     = {251--267},
  year      = {2017},
  publisher = {River Publishers},
  isbn      = {978-87-93519-14-5}
}
```