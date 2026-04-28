---
title: "A Generic Solution to Software-in-the-Loop"
description: "네트워크 시뮬레이터와 실제 소프트웨어를 수정 없이 연동하여 설계부터 테스트까지 동일한 코드를 재사용하게 해주는 범용 SITL 솔루션"
authors:
  - name: Stephanie Demers
  - name: Praveen Gopalakrishnan
  - name: Latha Kant
year: 2007
venue: "MILCOM 2007 - IEEE Military Communications Conference"
tags: [software-in-the-loop, real-time-simulation, network-modeling-and-simulation, event-driven-simulation, mobile-ad-hoc-network]
relevance: high
reading_reason: "내 논문에 인용하기 위해서, 차후 SITL Sim을 구축할 때 참고하기 위해서"
date: 2026-04-23
sidebar_label: "Generic SITL Solution"
---

# A Generic Solution to Software-in-the-Loop

> **Stephanie Demers, Praveen Gopalakrishnan, Latha Kant** · **2007** · **MILCOM 2007 - IEEE Military Communications Conference**

> 관련도: 상 · 읽은 이유: 내 논문에 인용하기 위해서, 차후 SITL Sim을 구축할 때 참고하기 위해서

{/* turncate */}

:::tip Intuition
시뮬레이션의 가상 환경과 실제 소프트웨어를 '망글러'와 '매니저'라는 매개체로 투명하게 연결하여, 실험실 안에서 대규모 야전망 테스트를 실제 코드 그대로 수행한다.
:::

## One-liner

실제 응용 소프트웨어의 수정 없이 이벤트 기반 시뮬레이터와 연동하여, 설계 단계부터 배포 전 테스트까지 코드 재사용성을 극대화하는 범용 **Software-in-the-Loop** 아키텍처를 제안한다.

## Problem

전통적인 네트워크 시뮬레이션은 모델의 충실도와 실행 속도 사이의 상충 관계가 크며, 모델의 유효성을 검증하는 것이 매우 어렵다. 특히 설계 단계에서 시뮬레이션에 사용된 모델링 코드와 실제 구현 코드가 서로 달라 재사용이 불가능하며, 대규모 **Ad-hoc Network** 테스트를 위해 실제 장비를 구축하는 것은 비용과 환경 제약 면에서 비현실적이다.

## Core Idea

응용 소프트웨어를 수정하지 않고도 네트워크 시뮬레이터와 통신할 수 있게 해주는 중계 계층을 도입한다. 이를 통해 시뮬레이터의 유연함과 하드웨어 에뮬레이터의 높은 충실도를 결합하여, 실제 코드를 그대로 시뮬레이션 환경에 투입함으로써 개발 주기 전반에 걸친 비용 절감과 신뢰도 향상을 꾀한다.

## Method

제안된 아키텍처는 크게 세 가지 핵심 구성 요소로 이루어진다.


- **Mangler** (망글러): 실제 소프트웨어가 실행되는 리눅스 호스트에 설치된다. IP 계층 상단에서 트래픽을 가로채 목적지 대신 시뮬레이터로 전달하며, 이 과정은 소프트웨어 입장에서 투명하게 진행된다.
- **Manager** (매니저): 시뮬레이터 호스트(예: OPNET)에서 동작한다. 망글러로부터 받은 패킷을 시뮬레이터 내의 적절한 노드에 주입하고, 시뮬레이션을 거쳐 나온 패킷을 다시 실제 목적지 노드로 전달한다.
- **Time Synchronization** (시간 동기화): 이벤트 기반 시뮬레이터와 실시간 소프트웨어 간의 시간 차이를 해결한다. 시뮬레이션이 실시간보다 느릴 경우, 시뮬레이터가 주기적으로 비콘 신호를 브로드캐스트하여 소프트웨어가 실행되는 호스트들이 시뮬레이터의 진행 속도에 맞춰 스스로의 진행을 늦추도록 조정한다.

## Results

두 가지 주요 정부 프로젝트에 적용하여 효용성을 입증하였다.

- **DRAMA 프로젝트**: 504개 규모의 노드 인스턴스를 다수의 리눅스 머신에서 실행하여 정책 기반 애드혹 네트워크 관리 시스템의 확장성을 성공적으로 테스트하였다.
- **ACERT 프로젝트**: 실제 야전 궤적 데이터를 시뮬레이터에 입력하고, 무선 MAC 및 물리 계층의 열악한 환경(페이딩, 장애물 등)을 모사하여 응용 프로그램의 견고성을 배포 전에 검증하였다.

| 테스트 항목 | 환경 | 성과 |
|------|----------|------|
| **Scalability** | 504개 노드 | 소수의 PC만으로 대규모 네트워크 모사 성공 |
| **Code Reuse** | 설계/테스트 통합 | 시뮬레이션 모델 개발 시간 및 검증 비용 대폭 절감 |
| **Fidelity** | 실제 코드 사용 | 모델 추상화로 인한 오차 제거 및 TCP 연결 유지 |

## Key Figures

![Figure 1](img/Pasted%20image%2020260423185439.png)

- **Fig. 1**: 계획, 설계, 코드, 테스트, 배포로 이어지는 품질 개발 모델을 제시하며 SITL이 설계와 테스트 단계를 연결함을 보여준다.

![Figure 2](img/Pasted%20image%2020260423185507.png)

- **Fig. 2**: 실제 애드혹 테스트 베드(실외 환경 제약)와 SITL 구성(실험실 내 통제된 환경)을 비교하여 SITL의 편의성을 강조한다.

![Figure 4](img/Pasted%20image%2020260423185525.png)

- **Fig. 4**: 망글러와 매니저를 통해 여러 노드 인스턴스가 단일 시뮬레이터와 연동되는 구체적인 End-to-End 아키텍처를 도식화한다.

## Contribution vs Limitation

**저자 주장**
- 소프트웨어 수정 없는 범용적인 SITL 구현 방법을 제시함.
- 설계와 테스트 단계 사이의 간극을 메워 코드 재사용성을 극대화함.
- 대규모 네트워크 테스트를 위한 하드웨어 비용과 물리적 제약을 획기적으로 줄임.

**저자가 밝힌 한계**
- 시뮬레이션 이벤트가 너무 많아 실시간보다 극도로 느려질 경우, 시간 동기화로 인한 성능 저하가 발생할 수 있음.
- TCP 스푸핑과 같은 기법 없이는 일부 연결 지향적 프로토콜의 특성이 시뮬레이터 환경에서 왜곡될 여지가 있음.

:::note 실제로 보이는 것
제안된 시간 동기화 방식이 주기적 비콘 브로드캐스트에 기반하므로, LAN 내에서는 효과적이지만 WAN이나 인터넷 환경으로 확장했을 때의 동기화 지연·지터 문제가 별도로 다뤄지지 않은 것으로 보인다. 또한 다수의 인스턴스가 실행될 때 호스트 OS의 스케줄링 부하가 결과에 영향을 줄 가능성도 추정된다.
:::

## Quotes

> "Software-in-the-loop combines the flexibility and low cost of the simulator with the fidelity of the hardware emulator." (p.2)

> "If the simulated code were the same as the deployed code for this module, then simulation validity would not be of concern anymore." (p.2)

## Idea Seeds

- **SLA 검증 자동화**: 실제 트래픽 생성기 없이 실제 앱을 사용하여 서비스 수준 협약(SLA)을 시뮬레이션 기반으로 정밀 측정하는 연구.
- **하이브리드 클라우드 테스트**: 일부는 실제 하드웨어에, 일부는 SITL 가상 노드에 배치하여 상호 운용성을 테스트하는 과도기적 검증 모델.

## For My Writing

이 논문은 네트워크 소프트웨어 개발 주기에서 시뮬레이션과 실제 배포 간의 '단절된 연결 고리'를 어떻게 해결할지 논의할 때 핵심 근거로 활용할 수 있다. 특히 시뮬레이션 모델의 유효성 논란을 잠재우기 위해 '실제 코드 사용'이라는 접근법이 가진 경제적, 기술적 가치를 서술하는 부분에 인용하기 좋다.

## Open Questions

**이해하지 못한 것**
- 망글러가 IP 패킷을 캡처하고 리디렉션할 때 발생하는 커널 오버헤드가 대규모(500노드 이상) 환경에서 어느 정도의 지터(Jitter)를 유발하는지 구체적인 수치가 부족하다.

**저자가 다루지 않은 것**
- 리눅스 외에 윈도우나 실시간 운영체제(RTOS) 환경에서의 망글러 구현 가능성 및 이식성 문제.
- LAN 범위를 벗어난 분산(WAN/인터넷) 환경에서의 동기화 확장성 문제.

## Links

- **선행 연구**: Chiang et al. (2006), "Performance Analysis of DRAMA", MILCOM 2006 — DRAMA 시스템 기반.
- **관련 주제**: OPNET Co-simulation, QualNet Real-time Interface Module.

## References

- **BibTeX key**: `demers2007generic`

```bibtex
@INPROCEEDINGS{4455268,
  author={Demers, Stephanie and Gopalakrishnan, Praveen and Kant, Latha},
  booktitle={MILCOM 2007 - IEEE Military Communications Conference}, 
  title={A Generic Solution to Software-in-the-Loop}, 
  year={2007},
  volume={},
  number={},
  pages={1-6},
  keywords={Software testing;Discrete event simulation;Hardware;Ad hoc networks;Scalability;Government;Performance evaluation;Quality management;Springs;Large-scale systems;software-in-the-loop;real-time simulation;network modeling and simulation;event-driven simulation;ad-hoc large-scale networks},
  doi={10.1109/MILCOM.2007.4455268}}
```