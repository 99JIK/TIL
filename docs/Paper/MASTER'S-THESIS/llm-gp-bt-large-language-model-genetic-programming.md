---
title: "LLM-GP-BT: Large Language Model Guided Genetic Programming for Behavior Tree Generation"
tags: [JIK_REFERENCE, behavior-tree, LLM, genetic-programming, robotics, task-planning, code-generation]
---

# LLM-GP-BT: Large Language Model Guided Genetic Programming for Behavior Tree Generation

## 서지 정보
- **저자**: A. Kobilov, G. Lan
- **출판**: arXiv preprint
- **연도**: 2025
- **DOI/arXiv**: arXiv: 2502.07772

## 핵심 요약
LLM(Large Language Model)과 GP(Genetic Programming)를 결합하여 행동 트리(BT) 기반 태스크 계획을 자동화하는 LLM-GP-BT 기법을 제안한다. LLM이 자연어로 표현된 로봇 태스크 명령을 해석하고 초기 BT 구조를 생성하면, GP가 이를 진화적으로 최적화·개선하는 하이브리드 접근법이다. LLM의 풍부한 사전 지식과 자연어 처리 능력을 활용하여 GP의 탐색 공간을 효과적으로 안내하고, GP의 진화적 탐색으로 LLM이 놓칠 수 있는 최적 BT 구조를 발견한다. 드론, 로봇, 자율주행 차량 등 자율 시스템의 태스크 계획에 적용 가능하며 시뮬레이션 실험으로 검증되었다.

## 주요 기여
1. LLM의 언어 이해 능력과 GP의 진화적 최적화를 결합한 하이브리드 BT 생성 기법 LLM-GP-BT 제안
2. LLM이 GP 탐색을 안내하여 탐색 효율성을 크게 향상시키는 가이드드 탐색(guided search) 메커니즘
3. 드론, 로봇, 자율주행 등 다양한 자율 시스템 도메인에서의 실험적 검증

## 핵심 개념
- **Genetic Programming (GP) for BT**: 진화 알고리즘(교차, 돌연변이, 선택)을 사용하여 BT 구조를 자동으로 탐색·최적화하는 방법
- **LLM-guided Search**: LLM이 생성한 초기 BT나 행동 힌트를 GP 탐색의 시작점으로 사용하여 탐색 공간을 효과적으로 줄이는 방법
- **Hybrid Optimization**: LLM(사전 지식 활용)과 GP(탐색·최적화) 각각의 강점을 결합하는 최적화 전략
- **Cross-domain Task Planning**: 로봇 조작, 드론 내비게이션, 자율주행 등 다양한 도메인에서의 BT 기반 태스크 계획

## 석사논문과의 연관성
LLM-GP-BT는 석사논문의 LLM 기반 BT 생성 방법과 밀접하게 연관된 최신 연구로, 주요 차이점과 공통점을 비교·분석하는 **관련 연구** 섹션의 핵심 내용이 된다. 공통점: LLM을 BT 생성에 활용하고, Cross-Domain 적용을 목표로 한다. 차이점: LLM-GP-BT는 GP와의 하이브리드 최적화에 중점을 두는 반면, 석사논문은 **Context-Aware** 시나리오 맥락 이해를 통한 SITL 환경 에이전트 행동 특화에 집중한다. GP 기반 최적화는 계산 비용이 크고 도메인 특화 피트니스 함수 설계가 어렵다는 한계가 있어, 이를 LLM의 컨텍스트 이해로 대체하는 석사논문의 접근이 차별점이 된다.

## 메모
- 2025년 2월 arXiv 게재, 매우 최신 연구
- 저자 Kobilov가 IEEE Conference에 제출 예정임을 언급
- 자율 시스템(autonomous systems) 분야 전반에 걸친 BT 생성 접근으로 석사논문의 자율주행 특화와 비교 가능
- GP 기반 BT 생성의 대표 선행 연구(Iovino et al., 2021; Styrud et al., 2021)를 참고
