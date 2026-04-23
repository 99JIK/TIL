---
title: Learning Behavior Trees From Demonstration
date: '2019-05-20'
description: 인간 시연으로부터 Behavior Tree를 자동 생성하는 BT-Espresso 알고리즘을 제안한 학습 기반 로봇 프로그래밍 논문
tags: [JIK Reference, Robotics, Behavior Tree, LfD, Learning from Demonstration]
authors:
- name: Kevin French
- name: Shiyu Wu
- name: Tianyang Pan
- name: Zheming Zhou
- name: O. C. Jenkins
---

## 논문 정보

- **제목**: Learning Behavior Trees From Demonstration
- **저자**: Kevin French, Shiyu Wu, Tianyang Pan, Zheming Zhou, Odest Chadwicke Jenkins (University of Michigan)
- **학회/저널**: 2019 IEEE International Conference on Robotics and Automation (ICRA), pp. 7791-7797
- **발행일**: 2019-05-20
- **DOI**: [10.1109/ICRA.2019.8794104](https://ieeexplore.ieee.org/document/8794104/)
- **주요 연구 내용**: 인간의 시연(demonstration)으로부터 Behavior Tree를 자동으로 학습하는 파이프라인과 BT-Espresso 알고리즘 제안
- **주요 결과 및 결론**: Fetch 로봇을 활용한 가정 청소 태스크에서 시연 기반 BT 생성의 실용성을 검증
- **기여점**: Learning from Demonstration(LfD)과 BT를 결합하여, 비전문가도 투명하고 편집 가능한 로봇 정책을 생성할 수 있는 방법론 제시
<!--truncate-->

## 요약

### 초록
Learning from Demonstration(LfD)은 로봇에게 태스크 수행 방법을 보여줌으로써 프로그래밍하는 강력한 방법이다. 본 논문은 인간 시연으로부터 Behavior Tree(BT)를 직접 추출하는 방법을 탐구한다. BT는 실시간 실행, 모듈성, 투명성을 위해 설계된 로봇 제어 실행 모델이다. 저자들은 시연 데이터로부터 결정 트리(decision tree)를 학습하고 이를 BT로 변환하는 BT-Espresso 알고리즘을 포함한 새로운 LfD 파이프라인을 개발하였다.

### 서론
로봇 프로그래밍은 전통적으로 전문 지식을 필요로 하며, 복잡한 태스크의 경우 수동 코딩에 많은 시간이 소요된다. LfD는 비전문가가 시연을 통해 로봇을 프로그래밍할 수 있게 하지만, 기존 LfD 접근법은 학습된 정책이 블랙박스 형태로 사람이 이해하거나 수정하기 어렵다는 한계가 있었다. BT는 계층적 구조 덕분에 사람이 읽고 편집할 수 있는 투명한 정책 표현을 제공한다. 이에 저자들은 LfD의 접근성과 BT의 투명성을 결합한 새로운 방법론을 제안한다.

### 모델 아키텍처 / 방법론
제안된 파이프라인은 다음 단계로 구성된다:

1. **시연 수집**: 인간 조작자가 Fetch 로봇을 통해 가정 청소 태스크를 시연하며, 로봇의 상태(센서 데이터)와 수행된 액션을 기록
2. **결정 트리 학습**: 수집된 상태-액션 쌍으로부터 결정 트리(decision tree)를 학습하여 조건(condition)과 액션(action) 간의 매핑을 추출
3. **BT-Espresso 변환**: 학습된 결정 트리를 Espresso 로직 최소화 알고리즘에서 영감을 받은 BT-Espresso 알고리즘을 통해 최적화된 BT로 변환
4. **사용자 수정**: 생성된 BT는 투명한 구조를 가지므로, 사용자가 코너 케이스 처리 등을 위해 수동으로 조정 가능

### 실험 및 결과
Fetch 로봇을 활용한 가정 청소 태스크에서 실험을 수행하였다:

- 인간 시연자가 테이블 위의 물체를 정리하는 태스크를 시연
- 시연 데이터로부터 BT-Espresso 알고리즘을 통해 BT를 자동 생성
- 생성된 BT가 로봇에 의해 성공적으로 실행됨을 확인
- 생성된 BT의 구조가 직관적이며, 사용자가 이해하고 수정할 수 있음을 검증
- 기존 블랙박스 정책 대비 투명성과 편집 가능성에서 우수함을 시연

### 결론
본 논문은 LfD와 BT를 결합한 새로운 로봇 프로그래밍 패러다임을 제시하였다. BT-Espresso 알고리즘을 통해 시연 데이터로부터 자동으로 최적화된 BT를 생성할 수 있으며, 생성된 BT는 투명하고 편집 가능하여 비전문가도 로봇 정책을 이해하고 조정할 수 있다. 이 연구는 로봇 프로그래밍의 접근성을 높이면서도 정책의 설명 가능성(explainability)을 유지하는 데 기여하였다.
