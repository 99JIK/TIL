---
title: "Train here, drive there: ROS based end-to-end autonomous-driving pipeline validation in CARLA simulator using the NHTSA typology"
authors: []
tags: [End-to-End, Software Testing, Artificial Intelligence]
---

# Train here, drive there: ROS based end-to-end autonomous-driving pipeline validation in CARLA simulator using the NHTSA typology

ROS 기반 자율주행 파이프라인을 CARLA 시뮬레이터에서 학습시키고, NHTSA(미국 도로교통안전국) 사고 유형 분류 체계를 기반으로 생성된 시나리오에서 검증하는 방법론을 제안한다.

<!-- truncate -->

## 핵심 기여

- **훈련-검증 분리 파이프라인**: CARLA에서 훈련한 모델을 NHTSA 기반 시나리오에서 독립적으로 검증
- **NHTSA 사고 유형론 적용**: 실제 교통사고 데이터 분류 체계를 시뮬레이션 시나리오 설계에 활용
- **ROS 통합**: ROS(Robot Operating System) 기반으로 모듈화된 자율주행 스택 구성
- **시나리오 커버리지 분석**: 사고 유형별 시나리오를 체계적으로 커버하는 테스트 설계

## 기술 스택

| 항목 | 내용 |
|------|------|
| 시뮬레이터 | CARLA |
| 미들웨어 | ROS |
| 시나리오 기준 | NHTSA Pre-Crash Typology |

Source: [Multimedia Tools and Applications, 2021](https://doi.org/10.1007/s11042-021-11681-7)
