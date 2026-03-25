---
title: "CARLA: An Open Urban Driving Simulator"
authors: ["Alexey Dosovitskiy", "German Ros", "Felipe Codevilla", "Antonio Lopez", "Vladlen Koltun"]
tags: [JIK_REFERENCE, Deep Learning, Artificial Intelligence, Reinforcement Learning, End-to-End]
---

# CARLA: An Open Urban Driving Simulator

자율주행 연구를 위한 오픈소스 도심 주행 시뮬레이터 CARLA를 소개한다. 개발·훈련·검증 파이프라인 전반을 지원하도록 설계되었으며, CoRL 2017에서 발표되었다.

<!-- truncate -->

## 핵심 기여

- **오픈소스 플랫폼**: 소스 코드·도시 레이아웃·건물·차량 에셋 모두 자유롭게 사용 가능
- **유연한 센서 구성**: 카메라, LiDAR, RADAR, IMU 등 다양한 센서 스위트 설정 가능
- **환경 조건 제어**: 날씨, 조명, 교통량 등 환경 변수를 자유롭게 조작
- **세 가지 접근법 비교 실험**: 모듈형 파이프라인, 모방 학습 기반 E2E, 강화학습 기반 E2E 성능 비교
- **평가 지표 내장**: CARLA 자체 메트릭으로 시나리오별 성능 측정 가능

## 기술 스택

| 항목 | 내용 |
|------|------|
| 렌더링 엔진 | Unreal Engine 4 |
| 인터페이스 | Python API, C++ API |
| 표준 지원 | OpenSCENARIO, OpenDRIVE |

Source: [arXiv:1711.03938](https://arxiv.org/abs/1711.03938)
