---
title: "Behavior Trees in Robotics and AI: An Introduction"
tags: [JIK_REFERENCE, behavior-tree, robotics, AI, task-planning, autonomous-driving]
---

# Behavior Trees in Robotics and AI: An Introduction

## 서지 정보
- **저자**: Michele Colledanchise, Petter Ögren
- **출판**: arXiv preprint (CRC Press 출판본: "Behavior Trees in Robotics and AI", 2018)
- **연도**: 2017 (초판 arXiv 제출), 최신 버전 2022
- **DOI/arXiv**: arXiv: 1709.00084

## 핵심 요약
행동 트리(Behavior Tree, BT)의 이론적 기초, 수학적 형식화, 로봇공학 및 AI에서의 응용을 체계적으로 정리한 교과서적 논문(겸 책)이다. BT의 기본 노드 유형(Sequence, Fallback, Parallel, Decorator, Action, Condition)과 실행 의미론(execution semantics)을 엄밀하게 정의한다. 유한 상태 기계(FSM), 계층적 FSM, 서브섬션 아키텍처 등 기존 행동 제어 프레임워크와의 비교를 통해 BT의 장점을 논증한다. 모듈성, 반응성, 인간 가독성을 BT의 핵심 장점으로 제시하며, 실제 로봇 시스템 적용 사례를 다수 포함한다.

## 주요 기여
1. 행동 트리의 수학적 형식화 및 실행 의미론의 엄밀한 정의 (로보틱스 표준 레퍼런스)
2. FSM, 서브섬션 아키텍처 등 기존 접근법 대비 BT의 장단점 체계적 비교
3. 안전성(safety), 모듈성(modularity), 재사용성(reusability) 관점에서 BT 설계 원칙 제시

## 핵심 개념
- **Sequence Node**: 자식 노드를 순서대로 실행. 하나라도 실패하면 즉시 실패 반환 (AND 로직)
- **Fallback Node (Selector)**: 자식 노드를 순서대로 시도. 하나라도 성공하면 성공 반환 (OR 로직)
- **Parallel Node**: 복수의 자식 노드를 동시에 실행. 임계값 M/N 성공 시 성공 반환
- **Tick**: BT의 실행 사이클. 루트 노드에서 시작하여 리프 노드까지 상태(Running/Success/Failure)를 전파
- **Reactivity**: 환경 상태 변화에 즉각적으로 행동을 전환할 수 있는 BT의 핵심 특성

## 석사논문과의 연관성
이 논문은 석사논문의 **핵심 기술 기반**을 제공하는 필수 레퍼런스다. LLM이 생성하는 행동 트리의 구조적 정의, 실행 의미론, 노드 유형 등이 이 논문에서 정의된 표준을 따른다. Context-Aware BT 생성에서 BT의 어떤 노드 조합이 어떤 교통 상황(Context)에 적합한지를 LLM이 이해하려면 이 논문의 BT 이론적 기초가 선행 지식으로 필요하다. 또한 BT의 모듈성·재사용성 특성은 Cross-Domain 에이전트 모델링에서 동일한 BT 서브트리를 다양한 도메인에 재활용하는 근거가 된다.

## 메모
- CRC Press에서 단행본으로도 출판됨: "Behavior Trees in Robotics and AI: An Introduction" (2018)
- 로보틱스 BT 분야의 교과서로, 수천 회 이상 인용됨
- 관련 오픈소스 BT 라이브러리: BehaviorTree.CPP (C++), py_trees (Python)
- 2022년까지 지속적으로 업데이트되어 LLM 기반 BT 생성 관련 내용도 일부 포함
