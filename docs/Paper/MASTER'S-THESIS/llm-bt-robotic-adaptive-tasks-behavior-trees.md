---
title: "LLM-BT: Performing Robotic Adaptive Tasks Based on Large Language Models and Behavior Trees"
tags: [JIK_REFERENCE, LLM, behavior-tree, robotics, adaptive-tasks, LLM-BT]
---

# LLM-BT: Performing Robotic Adaptive Tasks Based on Large Language Models and Behavior Trees

## 서지 정보
- **저자**: Ziqi Zhou, Yewei Song, Hongyu Zhang, Tao Wang, Hui Qiao
- **출판**: arXiv preprint, 2024
- **연도**: 2024
- **arXiv**: [2404.05134](https://arxiv.org/abs/2404.05134)

## 핵심 요약

LLM-BT는 LLM의 자연어 이해 능력과 Behavior Tree의 구조적 실행 능력을 결합해, 로봇이 자연어 명령으로부터 적응적 작업을 수행할 수 있도록 하는 프레임워크다. LLM이 태스크를 분석해 BT 구조를 생성하고, 실행 중 환경 변화에 맞게 BT를 동적으로 수정한다. 특히 예상치 못한 상황에 대한 Fallback 처리를 BT의 계층 구조로 자연스럽게 표현하는 것이 특징이다.

## 주요 기여
1. **LLM-BT 통합 프레임워크**: 자연어 명령 → LLM 분석 → BT 생성 → 로봇 실행의 엔드투엔드 파이프라인 제안
2. **적응적 실행**: 실행 중 환경 변화 감지 시 LLM을 재호출해 BT를 동적으로 수정하는 메커니즘
3. **Fallback 자동 생성**: 예외 상황에 대한 복구 행동을 BT의 Fallback 노드로 자동 삽입

## 핵심 개념

- **Behavior Tree 동적 수정**: 실행 중 Condition 노드 실패 시 LLM이 새로운 서브트리를 생성해 BT에 삽입
- **자연어-BT 매핑**: 사용자의 고수준 명령을 BT의 Sequence/Fallback/Action 노드 계층으로 분해
- **적응적 태스크 플래닝**: 정적 계획이 아닌 실행 중 동적 재계획

## 석사논문과의 연관성

석사논문의 핵심 아키텍처인 "LLM이 도메인 제약을 인식해 BT를 생성하고, 실행 오류 시 자동 수정"과 직접적으로 연관된 선행 연구다. 특히 BT의 Fallback 노드를 활용한 예외 처리 자동화와 동적 BT 수정 메커니즘은 SITL 환경에서 Environment Agent의 비정상 행동 복구에 적용 가능하다.

## 메모
- BETR-XP-LLM(Styrud et al., 2024)과 함께 LLM 기반 BT 동적 수정의 대표 사례
- 로보틱스 도메인이지만 자율주행 시뮬레이션의 Environment Agent 모델링에도 동일한 원리 적용 가능
