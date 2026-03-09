---
title: "Robot Behavior-Tree-Based Task Generation with Large Language Models"
tags: [JIK_REFERENCE, behavior-tree, LLM, robotics, task-planning, code-generation, AI]
---

# Robot Behavior-Tree-Based Task Generation with Large Language Models

## 서지 정보
- **저자**: Yue Cao, C. S. George Lee
- **출판**: arXiv preprint (AAAI-MAKE 2023 Extended Abstract)
- **연도**: 2023
- **DOI/arXiv**: arXiv: 2302.12927

## 핵심 요약
LLM(Large Language Model)을 활용하여 로봇 태스크를 위한 행동 트리(BT)를 자동으로 생성하는 최초의 체계적 접근법을 제안한 논문이다. 기존 BT 생성 방법들이 미리 정의된 원시 태스크(primitive tasks) 집합에 의존하여 새로운 도메인에 일반화되지 못하는 한계를 극복하고자, Phase-Step 프롬프트 설계를 통해 LLM이 계층적으로 구조화된 BT를 생성하도록 유도한다. BT-임베딩 기반 검색(BT-embedding-based search)으로 적절한 프롬프트를 자동으로 선택하며, 사용자가 추상적인 태스크 설명만 제공하면 LLM이 대응하는 BT를 생성하는 Cross-Domain 태스크 생성을 달성한다.

## 주요 기여
1. LLM을 활용한 자동 BT 생성을 처음으로 체계적으로 제안한 선구적 연구
2. Phase-Step 프롬프트 설계를 통한 계층적 BT 구조 생성 방법 개발
3. 미리 정의된 원시 태스크 불필요한 Cross-Domain BT 자동 생성 달성

## 핵심 개념
- **Phase-Step Prompting**: 태스크를 단계별 Phase로 분해하고, 각 Phase 내에서 Step들을 LLM이 생성하도록 유도하는 계층적 프롬프트 설계
- **BT-Embedding-based Search**: 기존 BT 데이터베이스에서 현재 태스크와 의미적으로 유사한 BT를 임베딩 공간에서 검색하여 프롬프트의 few-shot 예시로 활용
- **Cross-Domain Task Generation**: 특정 도메인(예: 주방 태스크)에서 학습한 BT 생성 능력을 다른 도메인(예: 제조 태스크)에 그대로 적용
- **Primitive-free Generation**: 사전 정의된 원시 행동(primitive actions) 목록 없이도 BT를 생성하는 능력

## 석사논문과의 연관성
이 논문은 석사논문과 **가장 직접적인 선행 연구**로, LLM 기반 BT 자동 생성의 개념적 출발점을 제공한다. 석사논문은 이 연구를 자율주행 시뮬레이션(CARLA, SUMO) 도메인으로 확장하며, 단순한 태스크 BT 생성을 넘어 **Context-Aware** 교통 시나리오 에이전트 행동 BT 생성을 목표로 한다. Phase-Step 프롬프트 설계 방법론은 교통 시나리오(예: "교차로에서 우회전 후 긴급 차량 양보")를 단계별로 분해하여 BT를 생성하는 파이프라인 설계에 직접 참고된다. Cross-Domain 생성 능력은 석사논문의 핵심 주제인 다양한 환경 도메인 간 BT 전이와 일치한다.

## 메모
- Purdue University Cao, Lee 그룹의 연구. 이후 더 발전된 연구들(arXiv:2401.08089 등)의 출발점
- AAAI-MAKE 2023 (AI + Knowledge Engineering 융합 심포지엄) 확장 초록으로 발표
- LLM 기반 BT 생성 분야의 이정표가 되는 논문 중 하나
