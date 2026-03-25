---
title: "Enhancing Game AI Behaviors with Large Language Models and Agentic AI"
authors: []
year: 2025
venue: "FSE 2025 (33rd ACM International Conference on the Foundations of Software Engineering) - Industry Papers"
doi: "10.1145/3696630.3728553"
pages: "286–296"
tags: [LLM, BehaviorTree, GameAI, NPC, AgenticAI, JIK_REFERENCE]
---

## 요약

LLM과 에이전트 기반 AI를 활용해 게임 NPC의 **Behavior Tree(BT)를 자동 생성**하는 프레임워크를 제안한다. 여러 에이전트를 오케스트레이션하여 복잡한 BT를 생성하며, 소스 코드와 게임 엔진 시각 툴 간의 간극을 해소한다.

## 핵심 기여

1. **LLM → BT 자동 생성** 파이프라인
2. 게임 엔진 시각 툴 통합 (기술/비기술 스테이크홀더 모두 활용 가능)
3. NPC 행동 다양성 및 테스트 가능성 향상
4. 외부 API 없이 로컬 소형 모델로 구동 → 실용적 접근

## 방법론

- 여러 상호 연결된 에이전트(멀티 에이전트 오케스트레이션)를 통해 BT 생성
- 다양한 게임 엔진에 적응 가능한 확장성 있는 아키텍처
- 산학 협력으로 유효성 검증

## JIK 연구와의 연관성

JIK 석사 논문("LLM 기반 Context-Aware Behavior Tree 생성으로 SITL 환경 에이전트 모델링")과 직접 연관:
- 공통점: LLM → BT 생성, 에이전트 오케스트레이션 구조
- 차이점: 이 논문은 게임 NPC 도메인 / JIK는 SITL/드론 도메인
- 소형 로컬 모델 활용 전략은 JIK 연구에서도 참고 가능
