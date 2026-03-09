---
title: "Learning Behavior Trees from Demonstration"
tags: [JIK_REFERENCE, behavior-tree, robotics, learning-from-demonstration, imitation-learning, AI]
---

# Learning Behavior Trees from Demonstration

## 서지 정보
- **저자**: Kevin French, Shiyu Wu, Tianyang Pan, Zheming Zhou, Odest Chadwicke Jenkins
- **출판**: Proceedings of the IEEE International Conference on Robotics and Automation (ICRA), pp. 7791–7797
- **연도**: 2019
- **DOI/arXiv**: doi: 10.1109/ICRA.2019.8794104

## 핵심 요약
인간의 시연(demonstration) 데이터에서 행동 트리(BT)를 자동으로 학습하는 방법론을 제안한다. 로봇이 전문가의 시연을 관찰하여 해당 행동의 기저에 있는 BT 구조를 역으로 추론(inverse learning)하는 알고리즘을 개발했다. 기존의 모방 학습(imitation learning)이 블랙박스 정책을 학습하는 것과 달리, 이 연구는 해석 가능하고 수정 가능한 BT 형태로 학습된 정책을 표현한다. 분류·조작 태스크에서의 실험을 통해 시연 데이터에서 적절한 BT를 학습할 수 있음을 검증했다.

## 주요 기여
1. 인간 시연 데이터에서 해석 가능한 BT 구조를 자동으로 학습하는 알고리즘 개발
2. 모방 학습의 블랙박스 문제를 극복하는 투명하고 수정 가능한 BT 기반 정책 표현
3. 분류·조작 태스크에서의 실험적 검증을 통한 방법론 유효성 입증

## 핵심 개념
- **Learning from Demonstration (LfD)**: 전문가의 시연 데이터를 관찰하여 정책을 학습하는 모방 학습의 일종
- **Behavior Tree Induction**: 시연 데이터(상태-행동 쌍)로부터 BT 구조를 역으로 유도하는 과정
- **Interpretable Policy**: 학습된 정책이 BT 형태로 표현되어 인간이 이해하고 수정할 수 있는 특성
- **Generalization**: 학습에 사용되지 않은 새로운 상황에서도 학습된 BT가 올바르게 동작하는 능력

## 석사논문과의 연관성
이 논문은 석사논문에서 LLM 기반 BT 생성과의 비교·대조를 위한 중요한 선행 연구다. LfD 기반 BT 학습은 시연 데이터가 충분할 때 효과적이지만, 새로운 도메인이나 희귀 시나리오에서는 데이터 부족 문제가 발생한다. 이 한계를 LLM 기반 BT 생성으로 극복한다는 논거를 석사논문의 관련 연구 비교에서 활용할 수 있다. 또한 학습된 BT의 해석 가능성 특성은 석사논문에서 LLM 생성 BT의 장점(명시적이고 수정 가능한 BT)을 강조하는 논거와 일치한다. Cross-Domain 측면에서, 이 방법은 각 도메인마다 별도의 시연 데이터가 필요한 반면 LLM은 도메인 지식을 사전 학습 지식에서 활용한다.

## 메모
- University of Michigan Jenkins 그룹의 연구
- ICRA 2019 발표, 인용 횟수 200회 이상 (2024년 기준)
- 후속 연구로 강화학습 기반 BT 학습, 유전 프로그래밍 기반 BT 학습 등이 등장
- LfD 기반 BT 학습의 대표적 논문으로 BT 자동 생성 분야 서베이에서 반드시 인용됨
