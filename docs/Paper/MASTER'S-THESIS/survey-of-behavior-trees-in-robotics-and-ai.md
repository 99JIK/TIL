---
title: "A Survey of Behavior Trees in Robotics and AI"
tags: [JIK_REFERENCE, behavior-tree, robotics, AI, survey, task-planning]
---

# A Survey of Behavior Trees in Robotics and AI

## 서지 정보
- **저자**: Matteo Iovino, Edvards Scukins, Jonathan Styrud, Petter Ögren, Christian Smith
- **출판**: Robotics and Autonomous Systems, vol. 154, p. 104096
- **연도**: 2022
- **DOI/arXiv**: doi: 10.1016/j.robot.2022.104096 (arXiv: 2005.05842)

## 핵심 요약
로봇공학 및 AI 분야에서 행동 트리(BT)의 연구 동향을 포괄적으로 조사한 서베이 논문이다. BT의 설계 방법론, 자동 생성 기법(유전 프로그래밍, 강화학습, 학습으로부터 합성 등), 검증 방법, 그리고 다양한 응용 분야(드론, 매니퓰레이터, 이동 로봇, 게임 AI 등)를 체계적으로 정리한다. 약 150여 편의 관련 논문을 분석하여 BT 연구의 현황과 미래 방향을 제시한다. 특히 BT 자동 생성 분야의 연구 흐름(GP, RL, LfD 등)과 그 한계점을 명확히 정리하여, LLM 기반 BT 생성 연구의 필요성에 대한 배경 지식을 제공한다.

## 주요 기여
1. BT 설계·생성·검증·응용에 관한 150+ 논문의 체계적 분류 및 분석
2. BT 자동 생성 기법(GP, RL, LfD, 계획 기반)의 장단점 비교 및 연구 공백 식별
3. 확장성(scalability)과 도메인 이식성(domain transferability) 측면에서 BT 연구의 미래 과제 제시

## 핵심 개념
- **Genetic Programming (GP) for BT**: 진화 알고리즘을 사용해 BT 구조를 자동으로 탐색·최적화하는 방법
- **Learning from Demonstration (LfD)**: 인간의 시연 데이터에서 BT를 역으로 학습하는 기법
- **BT Synthesis**: 태스크 목표와 환경 모델로부터 BT를 자동으로 생성하는 과정
- **Scalability**: BT가 복잡한 태스크에 적용될 때 구조의 복잡도가 관리 가능한 수준으로 유지되는 특성

## 석사논문과의 연관성
이 서베이 논문은 석사논문의 **선행 연구 챕터**에 직접적으로 인용될 핵심 레퍼런스다. BT 자동 생성 분야에서 기존 GP·RL 기반 방법들의 한계(도메인 특화성, 데이터 의존성, 확장성 부족)를 명확히 정리해 LLM 기반 BT 생성의 차별점과 필요성을 논거하는 데 활용된다. 특히 이 서베이에서 "LLM 기반 BT 생성"이 아직 충분히 탐구되지 않은 연구 공백으로 식별된다는 점이 석사논문의 연구 gap 정당화에 기여한다. SITL 및 자율주행 시뮬레이션에서의 BT 응용 가능성도 이 논문에서 언급된다.

## 메모
- 2020년 arXiv 초판 제출 후 2022년 Robotics and Autonomous Systems 게재
- BT 분야 연구자들이 필수적으로 참조하는 핵심 서베이 (수백 회 인용)
- 공저자 Styrud와 Ögren은 동일 그룹에서 BETR-XP-LLM 논문(arXiv: 2409.13356)도 발표
