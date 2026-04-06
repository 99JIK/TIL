---
title: 'CARLA: An Open Urban Driving Simulator'
date: '2017-11-10'
description: 자율주행 연구를 위한 오픈소스 도심 주행 시뮬레이터 CARLA를 소개하고 세 가지 자율주행 접근법을 비교 평가한 논문
tags: [JIK Reference, Deep Learning, Artificial Intelligence, Reinforcement Learning, End-to-End]
authors:
- name: Alexey Dosovitskiy
- name: German Ros
- name: Felipe Codevilla
- name: Antonio Lopez
- name: Vladlen Koltun
---

## 논문 정보

- **제목**: CARLA: An Open Urban Driving Simulator
- **저자**: Alexey Dosovitskiy (Intel Labs), German Ros (Toyota Research Institute), Felipe Codevilla (Computer Vision Center, Barcelona), Antonio Lopez (Computer Vision Center, Barcelona), Vladlen Koltun (Intel Labs)
- **학회/저널**: Proceedings of the 1st Annual Conference on Robot Learning (CoRL 2017), pp. 1-16
- **발행일**: 2017-11-10
- **DOI**: [arXiv:1711.03938](https://arxiv.org/abs/1711.03938)
- **주요 연구 내용**: 자율주행 시스템의 개발, 훈련, 검증을 지원하는 오픈소스 도심 주행 시뮬레이터 CARLA의 설계와 구현
- **주요 결과 및 결론**: 모듈형 파이프라인, 모방 학습 기반 E2E, 강화학습 기반 E2E의 세 가지 자율주행 접근법을 난이도가 증가하는 시나리오에서 비교 평가하여 CARLA의 연구 플랫폼으로서의 유용성을 검증
- **기여점**: 소스 코드, 디지털 에셋, 프로토콜을 모두 공개한 최초의 본격적 오픈소스 자율주행 시뮬레이터로, 자율주행 연구의 표준 플랫폼으로 자리잡음
<!--truncate-->

## 요약

### 초록
본 논문은 자율주행 연구를 위한 오픈소스 시뮬레이터 CARLA를 소개한다. CARLA는 자율 도심 주행 시스템의 개발, 훈련, 검증을 지원하기 위해 처음부터 설계되었다. 이 플랫폼은 오픈소스 코드와 프로토콜, 도시 레이아웃, 건물, 차량 등의 디지털 에셋을 자유롭게 사용할 수 있도록 제공한다. 시뮬레이터는 유연한 센서 구성과 환경 조건 설정을 지원한다. 연구팀은 CARLA를 활용하여 세 가지 자율주행 접근법(모듈형 파이프라인, 모방 학습 기반 엔드투엔드 모델, 강화학습 기반 엔드투엔드 모델)을 난이도가 증가하는 제어된 시나리오에서 평가하였다.

### 서론
자율주행 연구는 실제 도로 환경에서의 데이터 수집과 테스트에 막대한 비용과 안전 리스크가 수반된다. 시뮬레이션 환경은 이러한 문제를 해결하면서도 다양한 환경 조건과 시나리오를 체계적으로 제어할 수 있는 장점이 있다. 그러나 기존 시뮬레이터들은 대부분 폐쇄적이거나 기능이 제한적이어서 연구 커뮤니티의 요구를 충분히 충족하지 못했다. CARLA는 이러한 한계를 극복하기 위해 완전한 오픈소스로 개발되었다.

### 모델 아키텍처 / 방법론
CARLA의 기술적 구성과 평가 방법론은 다음과 같다:

1. **시뮬레이터 아키텍처**: Unreal Engine 4 기반의 렌더링 엔진으로 사실적인 도심 환경을 구현한다. Python API와 C++ API를 통해 시뮬레이터를 제어할 수 있으며, OpenSCENARIO와 OpenDRIVE 표준을 지원한다.
2. **유연한 센서 구성**: 카메라(RGB, 깊이, 세그멘테이션), LiDAR, RADAR, IMU 등 다양한 센서를 자유롭게 설정하고 조합할 수 있다.
3. **환경 조건 제어**: 날씨(맑음, 흐림, 비, 안개 등), 조명(시간대), 교통량, 보행자 밀도 등 환경 변수를 세밀하게 조작할 수 있다.
4. **세 가지 접근법 비교 평가**:
   - **모듈형 파이프라인**: 인지, 계획, 제어를 분리된 모듈로 구성하는 전통적 접근법
   - **모방 학습 기반 E2E**: 전문가 주행 데이터를 학습하여 센서 입력에서 제어 명령을 직접 출력
   - **강화학습 기반 E2E**: 보상 함수를 통해 시행착오로 주행 정책을 학습
5. **평가 지표**: CARLA 자체 메트릭을 통해 시나리오별 성능을 측정한다.

### 실험 및 결과
세 가지 자율주행 접근법을 난이도가 점진적으로 증가하는 제어된 시나리오에서 평가하였다. CARLA가 제공하는 플랫폼 내장 메트릭을 활용하여 각 접근법의 성능을 정량적으로 비교하였다. 실험을 통해 CARLA가 다양한 자율주행 연구 방법론의 개발과 평가에 적합한 플랫폼임을 검증하였다.

### 결론
CARLA는 자율주행 연구를 위한 최초의 본격적 오픈소스 시뮬레이터로, 소스 코드, 디지털 에셋, 프로토콜을 모두 공개하여 연구 커뮤니티의 접근성을 극대화하였다. CoRL 2017에서 발표된 이후 자율주행 연구의 사실상 표준 시뮬레이션 플랫폼으로 자리잡았으며, 후속 연구에서 CARLA Scenario Runner, Autonomous Driving Leaderboard 등 풍부한 생태계가 구축되었다. 현재까지도 활발히 개발·유지보수되고 있는 핵심 연구 인프라이다.
