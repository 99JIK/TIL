---
title: "Driving to Safety: How Many Miles of Driving Would It Take to Demonstrate Autonomous Vehicle Reliability?"
tags: [JIK_REFERENCE, autonomous-driving, testing, validation, safety, simulation]
---

# Driving to Safety: How Many Miles of Driving Would It Take to Demonstrate Autonomous Vehicle Reliability?

## 서지 정보
- **저자**: Nidhi Kalra, Susan M. Paddock
- **출판**: Transportation Research Part A: Policy and Practice, vol. 94, pp. 182–193
- **연도**: 2016
- **DOI/arXiv**: doi: 10.1016/j.tra.2016.09.010

## 핵심 요약
자율주행차량(AV)의 안전성을 통계적으로 입증하기 위해 필요한 실제 주행 마일리지를 정량적으로 분석한 연구다. 분석 결과, 현재 인간 운전자 수준의 안전성을 95% 신뢰구간으로 증명하려면 약 110억 마일(~177억 km) 이상의 주행 데이터가 필요하다고 결론지었다. 이는 수백 대의 차량이 수십 년간 쉬지 않고 주행해야 달성 가능한 수치로, 사실상 순수 실도로 테스트만으로는 검증이 불가능함을 보여준다. 따라서 저자들은 시뮬레이션, 가속 테스트, 통계적 방법론 등 혁신적인 대안적 검증 기법의 필요성을 강조한다. 규제 기관 역시 이러한 현실에 맞게 적응적(adaptive) 정책 프레임워크를 마련해야 한다고 주장한다.

## 주요 기여
1. 자율주행 안전성 검증에 필요한 주행 거리를 통계적으로 정량화한 최초의 주요 연구
2. 실도로 테스트만으로는 AV 신뢰성 입증이 현실적으로 불가능하다는 사실을 수학적으로 증명
3. 시뮬레이션 기반 검증 및 혁신적 테스트 방법론 도입의 필요성 제시

## 핵심 개념
- **통계적 신뢰성 검증**: 사망 사고 발생률(fatality rate)을 기준으로 AV의 안전성을 증명하기 위한 표본 크기(주행 마일리지) 계산
- **가속 테스트(Accelerated Testing)**: 실제 도로에서 희귀 사고 상황을 재현하기 어렵기 때문에 시뮬레이션으로 엣지 케이스를 집중적으로 테스트하는 방법론
- **적응적 규제(Adaptive Regulation)**: 기술 발전 속도에 맞춰 안전 기준 및 규제가 유연하게 변화해야 한다는 정책적 개념

## 석사논문과의 연관성
본 연구는 석사논문 주제인 **LLM 기반 Context-Aware BT 생성을 통한 SITL 환경 에이전트 모델링**의 핵심 동기를 제공한다. 실도로 테스트만으로 자율주행 시스템의 신뢰성을 증명하는 것이 사실상 불가능하다는 이 연구의 결론은, 시뮬레이션 환경(CARLA, SUMO 등)에서의 테스트 자동화와 다양한 시나리오 생성이 왜 중요한지를 강력하게 뒷받침한다. LLM이 생성하는 행동 트리(BT)를 통해 SITL 환경에서 다양한 에이전트 행동 시나리오를 자동으로 생성하고 검증하는 접근법은, 이 논문이 지적한 실도로 테스트의 한계를 시뮬레이션으로 극복하려는 직접적인 시도다.

## 메모
- RAND Corporation에서 동명의 리포트(RR1478)로도 출판됨
- 자율주행 분야에서 가장 많이 인용되는 논문 중 하나 (수천 회 인용)
- 이 논문 이후 AV 업계와 학계에서 시뮬레이션 기반 테스트가 표준으로 자리잡기 시작함
