---
title: "An Investigation into Reactive Planning in Complex Domains"
tags: [JIK_REFERENCE, behavior-tree, robotics, reactive-planning, AI, task-planning]
---

# An Investigation into Reactive Planning in Complex Domains

## 서지 정보
- **저자**: R. James Firby
- **출판**: Proceedings of the AAAI Conference on Artificial Intelligence (AAAI-87)
- **연도**: 1987
- **DOI/arXiv**: doi: 10.1177/027836499801700402 (관련 후속 저널)

## 핵심 요약
복잡하고 동적인 도메인에서 로봇이 실시간으로 행동을 계획하고 실행할 수 있도록 하는 리액티브 플래닝(Reactive Planning) 모델을 제안한 선구적 논문이다. Firby는 RAP(Reactive Action Package)라는 개념을 도입하여, 미리 정의된 행동 패키지들이 실행 시간에 경쟁·선택되는 방식으로 동작하는 시스템을 설계했다. RAP 시스템은 사전 계획(pre-planning)과 실시간 반응(real-time reaction)을 결합하여, 예측 불가능한 환경 변화에 유연하게 대응할 수 있다. 이 연구는 이후 행동 트리(Behavior Tree)와 서브섬션 아키텍처(Subsumption Architecture) 등 현대 로봇 행동 제어 프레임워크의 이론적 기반을 제공한 것으로 평가된다.

## 주요 기여
1. 복잡한 동적 환경에서의 리액티브 플래닝 개념 정립 및 RAP 시스템 도입
2. 사전 계획과 실시간 반응을 통합하는 하이브리드 행동 제어 아키텍처 제안
3. 이후 행동 트리(BT), PRS(Procedural Reasoning System) 등 현대 AI 계획 시스템의 이론적 기초 마련

## 핵심 개념
- **RAP (Reactive Action Package)**: 특정 목표를 달성하기 위한 조건부 행동 패키지. 조건이 충족될 때 활성화되며 여러 RAP가 경쟁적으로 실행됨
- **Reactive Planning**: 환경의 현재 상태를 기반으로 즉각적으로 행동을 선택하는 계획 방식. 전통적인 심볼릭 플래닝과 대비됨
- **Execution-time Selection**: 실행 시점에 여러 가능한 행동 중 하나를 동적으로 선택하는 메커니즘
- **Complex Domain**: 상태 공간이 넓고 예측 불가능한 사건이 빈번하게 발생하는 실세계 환경

## 석사논문과의 연관성
Firby의 RAP 시스템은 행동 트리(BT)의 직접적인 선구자 중 하나다. 석사논문에서 활용하는 **BT(Behavior Tree)**는 RAP의 계층적 조건부 행동 구조에서 발전한 개념으로, LLM이 생성하는 Context-Aware BT는 Firby가 제안한 실행시간 반응적 행동 선택 원칙을 현대적으로 재구현한 것이다. 특히 Cross-Domain 환경 에이전트 모델링에서 다양한 교통 도메인(고속도로, 교차로, 주차장 등)에 적응적으로 동작하는 BT 설계는 RAP의 도메인 독립적 리액티브 플래닝 개념을 계승한다.

## 메모
- 1987년 AAAI 발표 당시 AI 계획 분야에서 혁신적인 연구로 평가받음
- RAP 시스템은 이후 PRS(Georgeff & Lansky, 1987), BDI 아키텍처 등으로 발전
- 행동 트리의 역사적 계보를 이해하는 데 필수적인 레퍼런스
- 원문 PDF: https://cdn.aaai.org/AAAI/1987/AAAI87-036.pdf
