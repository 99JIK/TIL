---
title: "Scenic: A Language for Scenario Specification and Data Generation"
authors: []
tags: [Machine Learning, Software Testing, Test Generation, Artificial Intelligence]
---

# Scenic: A Language for Scenario Specification and Data Generation

자율주행 시스템 테스트 및 학습 데이터 생성을 위한 확률론적 시나리오 명세 언어 **Scenic**을 소개한다. UC Berkeley에서 개발되었으며 Machine Learning 저널에 게재되었다.

<!-- truncate -->

## 핵심 기여

- **확률론적 시나리오 언어**: 시나리오 내 객체의 위치·속도·속성을 확률 분포로 정의하여 다양한 변형 시나리오 자동 생성
- **공간적 관계 표현**: "차량 앞 10~20m 범위에 보행자 배치"와 같이 자연어에 가까운 공간 제약 표현 가능
- **시뮬레이터 연동**: CARLA, GTA V, Webots 등 다양한 시뮬레이터와 연동하여 시나리오 실행
- **데이터 증강**: 학습 데이터 부족 문제 해결을 위해 시나리오 기반 합성 데이터 생성에 활용
- **반례 생성**: 시스템 오동작을 유발하는 엣지 케이스를 탐색(falsification)하는 데 활용

## 예시 코드

```scenic
ego = Car
adversary = Car at ego offset by Range(-5, 5) @ Range(20, 40),
    facing Range(-10, 10) deg relative to ego
```

## 의의

OpenSCENARIO의 결정론적 시나리오와 달리 Scenic은 확률적 시나리오를 지원해 더 풍부한 테스트 공간 탐색이 가능하다.

Source: [Machine Learning, 2022](https://doi.org/10.1007/s10994-021-06120-5)
