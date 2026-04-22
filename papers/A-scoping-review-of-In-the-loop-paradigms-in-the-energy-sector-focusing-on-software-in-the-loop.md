---
title: "A scoping review of In-the-loop paradigms in the energy sector focusing on software-in-the-loop"
date: "2024-02-27"
description: "에너지 섹터 내 소프트웨어 기반 인더루프(SIL) 테스팅의 적용 현황, 아키텍처, 기술적 도전 과제를 체계적으로 분석한 범위 검토 논문이다."
tags: ["In The Loop", "Model In The Loop", "Software In The Loop", "Processor In The Loop", "Hardware In The Loop", "Energy Sector", "Energy Systems", "Electricity Systems", "Scoping Review"]
authors: ["Christian Skafte Beck Clausen", "Bo Nørregaard Jørgensen", "Zheng Grace Ma"]
---

## 논문 정보
- **제목**: A scoping review of In-the-loop paradigms in the energy sector focusing on software-in-the-loop
- **저자**: Christian Skafte Beck Clausen, Bo Nørregaard Jørgensen, Zheng Grace Ma (SDU Center for Energy Informatics, University of Southern Denmark)
- **학회/저널**: Energy Informatics
- **발행일**: 2024-02-27
- **DOI**: [10.1186/s42162-024-00312-8](https://doi.org/10.1186/s42162-024-00312-8)
- **주요 연구 내용**: 에너지 시스템의 디지털 전환에 따른 검증 및 타당성 확인(V&V) 문제를 해결하기 위해 소프트웨어 기반 인더루프(**Software-in-the-Loop**, SIL) 테스팅의 현황을 조사한다. 4개의 주요 데이터베이스에서 추출한 88개의 논문을 바탕으로 적용 분야, 아키텍처, 통신 프로토콜, 기술적 제한 사항을 체계적으로 분류한다.
- **주요 결과 및 결론**: 현재 에너지 분야는 하드웨어 기반 인더루프(HIL)가 주류를 이루고 있으나, 복잡한 디지털 에너지 에코시스템 검증을 위해 SIL의 필요성이 증대되고 있음을 확인한다. 미래 연구 방향으로 게임 엔진 기술, 디지털 트윈, 에이전트 기반 시뮬레이션을 결합한 에너지 메타버스 구축과 체계적인 SIL 개발 가이드라인 수립을 제시한다.
- **기여점**: 에너지 섹터 내 SIL 적용에 대한 포괄적인 오버뷰를 최초로 제공하여 연구 공백을 식별한다. 분산형 에너지 자원(DER) 및 스마트 그리드 환경에서 소프트웨어 중심의 검증 방법론이 비용 절감과 초기 결함 발견에 효과적임을 입증하는 이론적 기반을 마련한다.

## 요약
### 초록
본 논문은 에너지 섹터에서 검증 및 타당성 확인(V&V)을 위해 사용되는 소프트웨어 기반 인더루프(**Software-in-the-Loop**, SIL) 테스팅의 적용 현황과 잠재력, 도전 과제를 분석한다. 분석 결과, 하드웨어 기반 접근법은 저수준 신호 테스트에 주로 사용되는 반면, SIL은 제어 전략 테스트, 최적화, 스케줄링 등에 활용된다. 향후 디지털화된 에너지 시스템을 지원하기 위해 SIL 환경을 체계적으로 개발하기 위한 원칙이 필요함을 강조한다.
![Figure 1](img/Pasted%20image%2020260422130441.png)
### 서론
에너지 시스템은 기후 위기 대응과 에너지 접근성 향상을 위해 디지털 전환을 겪고 있으며, 스마트 그리드나 분산 에너지 자원(DER)과 같은 복잡한 시스템의 특성을 띠게 된다. 이러한 시스템은 전통적인 방법으로 검증하기 어렵고 실패 시 막대한 유무형의 손실을 초래할 수 있다. 논문의 **Figure 1**은 이러한 배경 하에 수행된 범위 검토(Scoping review) 과정을 보여주며, 총 607개의 항목 중 중복 제거와 스크리닝을 거쳐 최종 88개의 전문 분석 대상이 선정되었음을 명시한다.
![Figure 3](img/Pasted%20image%2020260422130511.png)
### 배경
모델 기반 설계(**Model-based Design**, MBD)는 비판적 시스템 개발에서 V&V 활동을 우선시하는 공학적 방법이다. 인더루프 테스팅은 MBD의 핵심 요소로, 개발 단계에 따라 다양한 패러다임이 존재한다. **Figure 3**은 일반적인 네 가지 패러다임인 모델 기반(**Model-in-the-loop**, MIL), 소프트웨어 기반(**Software-in-the-loop**, SIL), 프로세서 기반(**Processor-in-the-loop**, PIL), 하드웨어 기반(**Hardware-in-the-loop**, HIL)의 구조적 차이를 시각화하여 설명한다.
![Figure 4](img/Pasted%20image%2020260422130603.png)
![Figure 5, 6](img/Pasted%20image%2020260422130625.png)
![Figure 7, 8](img/Pasted%20image%2020260422130651.png)
### 모델 아키텍처 / 방법론
- **핵심 구조**: 에너지 시스템의 SIL 아키텍처는 일반적으로 제어기와 가상 모델이 네트워크를 통해 분산된 형태를 취한다. **Figure 4**부터 **Figure 8**까지는 연구들에서 사용된 다양한 시스템 아키텍처를 제시한다. 예를 들어, **Figure 4**는 SCADA 시스템과 RTDS(실시간 디지털 시뮬레이터)가 TCP/IP로 연결된 구조를 보여주며, **Figure 5**는 중간에 OPC 브로커를 둔 미들웨어 기반 아키텍처를 설명한다.
- **주요 구성 요소**: 시스템은 크게 제어기(Controller), 시뮬레이션 환경(Virtual Plant Model), 미들웨어(Middleware), 그리고 경우에 따라 물리적 계측기(Smart Meter 등)로 구성된다. **Table 5**에 따르면 SIL은 에너지 외에도 자동차, 임베디드 시스템, 무인 항공기(UAV) 등 다양한 도메인에서 활용되고 있다.
- **수식 및 알고리즘**: 제어 로직으로는 PID 제어, 유전 알고리즘(**Genetic Algorithms**, GA), 인공 면역 시스템 최적화(AISO) 등이 사용된다. 시뮬레이션은 실제 시간과 동기화되는 실시간 시뮬레이션 방식이 주를 이룬다.
![Table 10_1](img/Pasted%20image%2020260422130957.png)
![Table 10_2](img/Pasted%20image%2020260422131035.png)
![Table 12](img/Pasted%20image%2020260422131109.png)
### 실험 결과
- **주요 데이터셋 및 설정**: 분석된 연구들은 주로 IEEE 34-bus 테스트 피더와 같은 표준 전력망 모델을 가상 환경으로 사용한다. 기술적으로는 MATLAB/Simulink가 가장 많이 사용되는 환경이며, 실시간 전력망 시뮬레이션을 위해 RTDS 기술이 핵심적으로 활용된다.
- **핵심 성능 지표**: 실험에서 수집되는 주요 지표는 유효 전력(Active Power), 무효 전력(Reactive Power), 전압(Voltage), 주파수(System Frequency) 등이다. **Table 10**은 각 연구별로 사용된 시스템 언더 테스트(**System Under Test**, SUT)와 가상 플랜트, 그리고 측정된 성능 지표를 상세히 매핑하여 보여준다. 또한 **Table 12**를 통해 분석 대상 연구의 약 76.9%가 폐쇄 루프(Closed loop) 및 실시간 시뮬레이션 속성을 보유하고 있음을 명시한다.

### 결론
에너지 섹터에서 SIL 테스팅은 초기 결함 감지와 비용 절감 측면에서 큰 이점을 제공하지만, 시뮬레이션 모델의 충실도(Fidelity)와 실시간 동기화 문제는 여전히 해결해야 할 과제이다. 본 논문은 게임 엔진을 활용한 디지털 트윈 구축, 에이전트 기반의 시스템 레벨 테스팅, 그리고 상호운용성 표준 준수 여부를 확인하는 '트윈 인더루프'(Twin-in-the-loop) 개념을 미래 연구의 주요 방향으로 제안한다. 이를 통해 복잡한 에너지 에코시스템의 창발적 행동(Emergent behavior)을 효과적으로 검증할 수 있을 것으로 기대한다.