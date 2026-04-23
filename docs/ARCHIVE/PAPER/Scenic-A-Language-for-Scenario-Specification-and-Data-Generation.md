---
title: 'Scenic: A Language for Scenario Specification and Data Generation'
date: '2022-02-01'
description: 자율주행 시스템 테스트 및 학습 데이터 생성을 위한 확률론적 시나리오 명세 언어 Scenic을 제안한 연구
tags: [JIK Reference, Machine Learning, Software Testing, Test Generation, Artificial Intelligence, Automatic Generation]
authors:
- name: Daniel J. Fremont
- name: Edward Kim
- name: Tommaso Dreossi
- name: Shromona Ghosh
- name: Xiangyu Yue
- name: Alberto L. Sangiovanni-Vincentelli
- name: Sanjit A. Seshia
---

## 논문 정보

- **제목**: Scenic: A Language for Scenario Specification and Data Generation
- **저자**: Daniel J. Fremont (UC Santa Cruz), Edward Kim (UC Berkeley), Tommaso Dreossi (UC Berkeley), Shromona Ghosh (UC Berkeley), Xiangyu Yue (UC Berkeley), Alberto L. Sangiovanni-Vincentelli (UC Berkeley), Sanjit A. Seshia (UC Berkeley)
- **학회/저널**: Machine Learning Journal (Springer)
- **발행일**: 2022-02-01
- **DOI**: [10.1007/s10994-021-06120-5](https://doi.org/10.1007/s10994-021-06120-5)
- **주요 연구 내용**: 사이버-물리 시스템, 특히 자율주행 시스템의 설계와 분석을 위한 확률적 프로그래밍 언어 Scenic을 제안. 시나리오 내 객체의 공간적, 시간적 관계를 확률 분포로 명세하여 다양한 시나리오를 자동 생성
- **주요 결과 및 결론**: Scenic을 통해 CARLA, GTA V, Webots 등 다양한 시뮬레이터에서 시나리오를 자동 생성하고, 학습 데이터 증강 및 엣지 케이스 탐색에 효과적으로 활용할 수 있음을 입증
- **기여점**: 확률적 시나리오 명세를 위한 도메인 특화 언어를 정의하고, 자율주행 시스템의 학습 및 검증을 위한 체계적인 데이터 생성 방법론을 제공. Boeing, Meta, Deutsche Bahn, Toyota 등 산업계에서도 채택
<!--truncate-->

## 요약

### 초록
본 논문은 머신러닝 기반 사이버-물리 시스템의 설계와 분석을 위한 새로운 확률적 프로그래밍 언어인 Scenic을 제안한다. Scenic은 설계 과정에서 발생하는 여러 문제, 즉 시스템을 희귀 이벤트에 강건하게 학습시키는 것, 다양한 조건에서 성능을 테스트하는 것, 실패를 디버깅하는 것 등을 해결하기 위해 개발되었다. 확률적 프로그래밍 언어를 통해 흥미로운 유형의 입력을 인코딩하는 분포를 명세하고, 이를 샘플링하여 특화된 학습 및 테스트 데이터를 생성할 수 있다.

### 서론
자율주행 시스템을 포함한 AI 기반 사이버-물리 시스템의 안전성 검증은 핵심적인 과제이다. 실제 도로에서 발생할 수 있는 무한히 다양한 시나리오를 체계적으로 테스트하기 위해서는 시나리오를 프로그래밍적으로 명세하고 자동 생성할 수 있는 도구가 필요하다. OpenSCENARIO와 같은 기존 시나리오 명세 언어는 결정론적(deterministic) 시나리오만 지원하여, 테스트 공간 탐색이 제한적이라는 한계가 있다. Scenic은 확률론적(probabilistic) 시나리오 명세를 지원하여 보다 풍부한 테스트 공간 탐색을 가능하게 한다.

### 모델 아키텍처 / 방법론
Scenic은 다음과 같은 핵심 특징을 가진 도메인 특화 언어(DSL)이다:

1. **확률론적 시나리오 명세**: 시나리오 내 객체(차량, 보행자 등)의 위치, 속도, 방향 등의 속성을 확률 분포로 정의한다. 이를 통해 하나의 시나리오 명세로부터 다양한 구체적 시나리오 인스턴스를 샘플링할 수 있다.

2. **공간적 관계 표현**: "차량 앞 10~20m 범위에 보행자 배치"와 같이 자연어에 가까운 직관적인 구문으로 공간적 제약 조건을 표현할 수 있다. 하드 제약(hard constraints)과 소프트 제약(soft constraints)을 선언적으로 부과할 수 있다.

3. **시간적 행동 명세**: 시간에 따른 에이전트의 행동(behaviors)을 시나리오의 일부로 명세할 수 있어, 정적 장면(scene)뿐만 아니라 동적 시나리오의 생성이 가능하다.

4. **효율적 샘플링**: Scenic의 도메인 특화 구문이 제공하는 구조를 활용한 특화된 샘플링 기법을 통해 복잡한 제약 조건을 만족하는 시나리오를 효율적으로 생성한다.

5. **시뮬레이터 연동**: CARLA, GTA V, Webots, Gazebo 등 다양한 시뮬레이터와 연동하여 시나리오를 실행하고 합성 데이터를 생성할 수 있다. Scenic은 CARLA 시뮬레이터의 공식 시나리오 모델링 언어로 채택되었다.

예시 코드:
```scenic
ego = Car
adversary = Car at ego offset by Range(-5, 5) @ Range(20, 40),
    facing Range(-10, 10) deg relative to ego
```

### 실험 및 결과
Scenic의 효과는 여러 실험을 통해 검증되었다:

- **학습 데이터 증강**: Scenic으로 생성한 합성 데이터를 학습에 활용하여 객체 인식 모델의 희귀 시나리오에 대한 강건성을 향상시켰다.
- **엣지 케이스 탐색(Falsification)**: 시스템 오동작을 유발하는 반례(counterexample)를 자동으로 탐색하여, 자율주행 시스템의 안전성 검증에 활용하였다.
- **다양한 시뮬레이터에서의 활용**: CARLA, GTA V, Webots 등 서로 다른 시뮬레이터에서 동일한 Scenic 시나리오를 실행하여 시뮬레이터 독립적인 시나리오 명세의 가능성을 입증하였다.

2019년 오픈소스로 공개된 이후 학술계에서 자율주행차, 항공기, 로봇 등의 버그 발견과 수정에 활용되었으며, 산업계에서는 Boeing, Meta, Deutsche Bahn, Toyota 등이 채택하였다.

### 결론
Scenic은 확률론적 시나리오 명세를 통해 자율주행 시스템의 학습과 검증에 필요한 데이터를 체계적으로 생성할 수 있는 강력한 도구이다. 직관적인 구문, 다양한 시뮬레이터와의 연동성, 그리고 효율적인 샘플링 기법을 통해 기존 결정론적 시나리오 명세의 한계를 극복한다. 오픈소스로서 활발한 학술 및 산업 활용이 이루어지고 있으며, 사이버-물리 시스템의 안전성 검증 분야에서 중요한 기여를 하고 있다.
