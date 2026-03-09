---
title: "BETR-XP-LLM: Behavior Tree Expansion and Repair Using Large Language Models for Robot Task Planning"
tags: [JIK_REFERENCE, behavior-tree, LLM, robotics, task-planning, self-repair, AI]
---

# BETR-XP-LLM: Behavior Tree Expansion and Repair Using Large Language Models for Robot Task Planning

## 서지 정보
- **저자**: Jonathan Styrud, Matteo Iovino, Mikael Norrlöf, Mårten Björkman, Christian Smith
- **출판**: Proc. IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2024 (Submitted)
- **연도**: 2024
- **DOI/arXiv**: arXiv: 2409.13356

## 핵심 요약
LLM을 사용하여 행동 트리(BT)를 동적으로 확장(expand)하고 오류를 수복(repair)하는 BETR-XP-LLM 방법을 제안한다. 이 방법은 태스크 플래너가 처리할 수 없는 오류가 발생했을 때 LLM이 개입하여 BT를 수정하고 유사한 미래 문제에 영구적으로 대응할 수 있도록 BT 정책을 업데이트한다. 계획(planning) 및 실행(execution) 단계 모두에서 LLM을 활용하는 투명하고 검증 가능한 BT 정책을 구현하며, 다양한 태스크와 실패 상황에서의 실험을 통해 방법의 효과를 검증했다.

## 주요 기여
1. BT 실행 중 예상치 못한 오류를 LLM이 동적으로 감지하고 BT를 확장·수복하는 BETR-XP-LLM 제안
2. 학습된 수복 패턴을 BT에 영구적으로 반영하여 유사 오류에 미래에도 대응하는 지속 학습 메커니즘
3. 계획 단계와 실행 단계 모두에서 LLM을 통합한 BT 기반 로봇 제어 시스템 구현

## 핵심 개념
- **BT Expansion**: 현재 BT 구조가 처리하지 못하는 새로운 상황에 대응하기 위해 새 노드를 추가하여 BT를 확장하는 과정
- **BT Repair**: 실행 실패 상황을 분석하고 기존 BT의 결함을 수정하는 자동화된 프로세스
- **Permanent Policy Update**: 오류 수복을 일회성 해결이 아닌 BT 정책에 영구적으로 반영하여 미래 재발 방지
- **Transparent Policy**: 인간이 읽고 검증할 수 있는 BT 형태로 정책을 유지하여 해석 가능성 보장

## 석사논문과의 연관성
BETR-XP-LLM은 석사논문에서 LLM이 생성한 BT의 **자기 수정(self-repair) 메커니즘** 설계에 핵심 참고 자료를 제공한다. 교통 시뮬레이션에서 예상치 못한 에이전트 행동 실패(예: BT 실행 시 환경 조건 불일치)가 발생했을 때 LLM이 BT를 동적으로 수정하는 접근법은 BETR-XP-LLM의 확장 적용이다. SITL 환경의 Cross-Domain 에이전트 모델링에서 다양한 도메인별 실패 패턴을 LLM이 학습하여 BT를 점진적으로 개선하는 연구 방향과도 일치한다. 공저자 Styrud와 Iovino는 BT 서베이 논문(arXiv:2005.05842)의 저자이기도 하여 연구 맥락의 연속성이 있다.

## 메모
- IROS 2024에 제출된 논문으로 arXiv에 2024년 9월 게재
- KTH Royal Institute of Technology (스웨덴) 그룹의 연구
- BT 분야의 자기 수리(self-repair) 연구 흐름에서 LLM 기반의 최신 접근법
- 로봇 매니퓰레이션 태스크에서 검증되었으나 자율주행 에이전트 도메인으로의 전이 가능성이 높음
