---
title: 'Train here, drive there: ROS based end-to-end autonomous-driving pipeline validation in CARLA simulator using the NHTSA typology'
date: '2021-12-01'
description: ROS 기반 자율주행 파이프라인을 CARLA에서 훈련하고 NHTSA 사고 유형 분류 체계 기반 시나리오로 검증하는 방법론
tags: [End-to-End, Software Testing, Artificial Intelligence]
authors:
- name: Lasse Schwartz
- name: Christian Lötter
- name: Rolf Drechsler
---

## 논문 정보

- **제목**: Train here, drive there: ROS based end-to-end autonomous-driving pipeline validation in CARLA simulator using the NHTSA typology
- **저자**: Lasse Schwartz, Christian Lötter, Rolf Drechsler
- **학회/저널**: Multimedia Tools and Applications, Springer
- **발행일**: 2021-12
- **DOI**: [10.1007/s11042-021-11681-7](https://doi.org/10.1007/s11042-021-11681-7)
- **주요 연구 내용**: CARLA 시뮬레이터에서 ROS 기반 종단간(end-to-end) 자율주행 파이프라인을 훈련시키고, NHTSA(미국 도로교통안전국)의 사전 충돌 사고 유형 분류 체계를 기반으로 설계된 교통 시나리오에서 검증하는 방법론 제안
- **주요 결과 및 결론**: NHTSA 사고 유형론에 기반한 체계적 시나리오 설계로 정지, 보행자 횡단, 적응형 순항 제어, 예기치 못한 보행자 등의 시나리오에서 자율주행 시스템의 안전성을 검증
- **기여점**: 훈련-검증 분리 파이프라인과 NHTSA 사고 유형론의 시뮬레이션 적용을 결합하여, 실제 도로 테스트 이전 단계의 체계적 시뮬레이션 검증 프레임워크를 제시
<!--truncate-->

## 요약

### 초록
초현실적(hyper-realistic) 시뮬레이터를 실제 테스트의 예비 보조 수단으로 활용하는 것과, 적절한 교통 시나리오 설계가 안전하고 견고한 자율주행(AD) 기술을 구축하기 위한 두 가지 핵심 열쇠임을 강조한다. 본 논문은 완전 자율주행 아키텍처를 CARLA 시뮬레이터에서 훈련시키고, NHTSA(미국 도로교통안전국)의 사전 충돌(Pre-Crash) 사고 유형 분류 체계를 활용하여 설계된 도전적인 교통 시나리오에서 검증한다. ROS(Robot Operating System) 기반의 표준 로봇 통신 개념과 Docker 접근법을 활용하여 시스템에 격리성, 유연성, 이식성을 부여한다.

### 서론
자율주행 시스템의 안전성 검증은 실제 도로 테스트만으로는 충분하지 않으며, 방대한 수의 주행 시나리오를 효율적으로 테스트할 수 있는 시뮬레이션 환경이 필수적이다. NHTSA는 실제 교통사고 데이터를 분석하여 사전 충돌 유형 분류 체계를 구축하였으며, 이는 시뮬레이션 시나리오 설계의 기준으로 활용될 수 있다. 본 연구는 이러한 실제 사고 데이터 기반 시나리오 설계와 시뮬레이션 기반 검증을 결합하는 방법론을 제안한다.

### 모델 아키텍처 / 방법론
시스템은 다음과 같은 기술 스택으로 구성된다:

| 항목 | 내용 |
|------|------|
| 시뮬레이터 | CARLA |
| 미들웨어 | ROS (Robot Operating System) |
| 시나리오 기준 | NHTSA Pre-Crash Typology |
| 컨테이너화 | Docker |

핵심 방법론:
1. **훈련-검증 분리 파이프라인**: CARLA에서 종단간 자율주행 모델을 훈련하고, 별도의 NHTSA 기반 시나리오에서 독립적으로 검증
2. **NHTSA 사고 유형론 적용**: 실제 교통사고 데이터 분류 체계를 시뮬레이션 시나리오 설계에 직접 활용
3. **ROS 통합**: ROS 기반 모듈화된 자율주행 스택으로 구성하여 컴포넌트 간 표준화된 통신 보장
4. **Docker 기반 격리**: 시스템의 격리성, 유연성, 이식성을 확보

### 실험 및 결과
NHTSA 사전 충돌 유형론에 기반하여 다음과 같은 도전적 주행 시나리오에서 검증을 수행하였다:
- **정지(Stop)**: 정지 신호에 대한 올바른 대응
- **보행자 횡단(Pedestrian Crossing)**: 횡단보도에서의 보행자 감지 및 정지
- **적응형 순항 제어(Adaptive Cruise Control, ACC)**: 선행 차량과의 안전 거리 유지
- **예기치 못한 보행자(Unexpected Pedestrian)**: 갑작스럽게 나타나는 보행자에 대한 긴급 대응

의사결정 모듈은 계층적 해석 이진 페트리 넷(Hierarchical Interpreted Binary Petri Nets, HIBPN)을 기반으로 분석되었다.

### 결론
본 연구는 초현실적 시뮬레이터와 실제 사고 데이터 기반 시나리오 설계를 결합하여 자율주행 시스템의 체계적 검증 프레임워크를 제시한다. ROS와 Docker를 활용한 모듈화된 아키텍처는 시스템의 이식성과 재현 가능성을 보장하며, NHTSA 사고 유형론의 적용은 실제 도로 환경에서 발생 가능한 위험 상황을 체계적으로 커버하는 시나리오 설계를 가능하게 한다. 실제 도로 테스트 이전 단계의 시뮬레이션 기반 안전성 검증에 실용적인 기여를 한다.
