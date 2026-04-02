---
title: Improving the Parallel Execution of Behavior Trees
authors:
- name: Michele Colledanchise
- name: Petter Ögren
tags: [Behavior Tree, Artificial Intelligence, Software Testing]
---

# Improving the Parallel Execution of Behavior Trees

<!--truncate-->
Behavior Tree의 병렬 노드(Parallel Node) 실행 방식의 한계를 분석하고, 이를 개선하는 새로운 실행 의미론(execution semantics)을 제안한다.

<!-- truncate -->

## 핵심 기여

- **기존 병렬 노드의 문제점 분석**: 동기화 없는 병렬 실행 시 발생하는 경쟁 조건(race condition) 및 예측 불가능한 동작 규명
- **개선된 실행 의미론 제안**: 병렬 노드의 성공/실패 조건을 명확히 정의하고 결정론적(deterministic) 실행을 보장하는 새 규칙 도입
- **형식적 분석**: 개선된 병렬 BT의 안전성 및 반응성 속성을 형식적으로 증명
- **실험 검증**: 로봇 시뮬레이션 환경에서 개선 효과 실증

## 의의

BT의 병렬 실행은 자율주행·로봇 제어에서 복수 행동을 동시에 수행할 때 필수적이다. 이 논문은 병렬 BT의 신뢰성을 높이는 기초 연구다.

Source: [IROS 2018](https://doi.org/10.1109/IROS.2018.8593504)
