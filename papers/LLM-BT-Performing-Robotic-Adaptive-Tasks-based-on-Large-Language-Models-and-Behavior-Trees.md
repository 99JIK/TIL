---
title: LLM-BT - Performing Robotic Adaptive Tasks based on Large Language Models and Behavior Trees
date: '2024-04-08'
description: LLM과 행동 트리를 결합하여 외부 교란에 적응적으로 대응하는 로봇 태스크 수행 방법을 제안하는 논문
tags: [JIK Reference, Robotics, Large Language Model, Behavior Tree, Adaptive Tasks, International Conference on Robotics and Automation 2024]
authors:
- name: Haotian Zhou
- name: Yunhan Lin
- name: Longwu Yan
- name: Jihong Zhu
- name: Huasong Min
---

## 논문 정보

- **제목**: LLM-BT: Performing Robotic Adaptive Tasks based on Large Language Models and Behavior Trees
- **저자**: Haotian Zhou, Yunhan Lin, Longwu Yan, Jihong Zhu, Huasong Min
- **학회/저널**: IEEE International Conference on Robotics and Automation (ICRA 2024)
- **발행일**: 2024-04-08
- **DOI**: [arXiv:2404.05134](https://arxiv.org/abs/2404.05134)
- **주요 연구 내용**: 대규모 언어 모델(LLM)과 행동 트리(BT)를 결합하여 외부 교란 상황에서도 로봇이 적응적으로 태스크를 수행할 수 있는 LLM-BT 프레임워크 제안
- **주요 결과 및 결론**: 기존 LLM 기반 방법과 달리 동적으로 확장 가능한 가변 행동 트리를 출력하여 외부 교란에 강건한 로봇 태스크 실행 달성
- **기여점**: ChatGPT 기반 추론, BERT 기반 파싱, 동적 BT 업데이트 알고리즘을 통합한 새로운 적응적 로봇 태스크 수행 파이프라인 제시
<!--truncate-->

## 요약

### 초록
복잡한 로봇 태스크 실행 중 외부 교란을 처리하는 것은 여전히 어려운 과제이다. 본 논문은 대규모 언어 모델(LLM)과 행동 트리(BT)를 결합하여 로봇의 적응적 태스크 수행을 달성하는 새로운 방법인 LLM-BT를 제안한다. 시스템은 ChatGPT를 활용한 태스크 추론, 객체 인식 기반 시맨틱 맵 구성을 통한 환경 이해, BERT 기반 파서를 통한 초기 BT 생성, 그리고 환경 변화에 대응하는 동적 BT 업데이트 알고리즘으로 구성된다.

### 서론
기존의 로봇 태스크 실행 방법들은 사전에 정의된 행동 시퀀스에 의존하여 실행 중 발생하는 예상치 못한 외부 교란에 취약하다. 최근 LLM을 로봇 제어에 활용하는 연구가 증가하고 있으나, 대부분 고정된 행동 계획을 생성하여 동적 환경 변화에 대한 적응성이 부족하다. 이러한 한계를 극복하기 위해 LLM의 자연어 추론 능력과 BT의 모듈적이고 반응적인 제어 구조를 결합하는 접근법이 필요하다.

### 모델 아키텍처 / 방법론
LLM-BT 시스템은 네 가지 핵심 구성요소로 이루어진다:

1. **ChatGPT 기반 추론**: 자연어로 기술된 태스크를 ChatGPT가 단계별 설명적 태스크 스텝으로 분해한다. 고수준 태스크 계획과 추론을 담당한다.
2. **시맨틱 매핑**: 객체 인식 기술을 활용하여 로봇 환경의 시맨틱 맵을 구성한다. 이를 통해 환경 내 객체의 위치와 상태를 실시간으로 파악한다.
3. **BERT 기반 파서**: 설명적 태스크 스텝을 구조화된 BT 노드로 변환하는 파서 모듈이다. 자연어 처리를 통해 액션, 조건, 시퀀스 등의 BT 요소를 자동 생성한다.
4. **BT 업데이트 알고리즘**: 실행 중 환경 변화나 외부 교란이 감지되면 기존 BT를 동적으로 확장하여 새로운 액션을 추가하고 실행하는 알고리즘이다.

### 실험 및 결과
다양한 실제적 시나리오에서 시뮬레이션을 통해 LLM-BT의 유효성을 검증하였다. 기존 LLM 기반 방법들이 고정된 행동 계획만 출력하는 것과 달리, LLM-BT는 가변적인 BT를 생성하여 실행 중 새로운 액션을 동적으로 추가하고 실행할 수 있음을 보였다. 외부 교란이 발생하는 환경에서 기존 방법 대비 높은 태스크 성공률과 적응성을 달성하였다.

### 결론
LLM-BT는 LLM의 자연어 추론 능력과 BT의 모듈적이고 반응적인 제어 구조를 효과적으로 결합한 프레임워크이다. 동적 BT 업데이트 알고리즘을 통해 외부 교란에 강건한 적응적 로봇 태스크 수행을 달성하였으며, 이는 기존 LLM 기반 로봇 제어 방법의 한계를 극복하는 새로운 접근법을 제시한다. ICRA 2024에 채택되어 발표되었다.
