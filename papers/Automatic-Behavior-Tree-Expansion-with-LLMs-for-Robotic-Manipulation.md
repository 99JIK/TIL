---
title: Automatic Behavior Tree Expansion with LLMs for Robotic Manipulation
date: '2024-09-20'
description: LLM을 활용하여 로봇 조작 작업의 행동 트리를 자동으로 확장하고 구성하는 BETR-XP-LLM 방법론 제안
tags: [JIK Reference, Robotics, Large Language Model, Behavior Tree, Robotic Manipulation, International Conference on Robotics and Automation 2025]
authors:
- name: Jonathan Styrud
- name: Matteo Iovino
- name: Mikael Norrlöf
- name: Mårten Björkman
- name: Christian Smith
---

## 논문 정보

- **제목**: Automatic Behavior Tree Expansion with LLMs for Robotic Manipulation
- **저자**: Jonathan Styrud, Matteo Iovino, Mikael Norrlöf, Mårten Björkman, Christian Smith
- **학회/저널**: ICRA 2025 (IEEE International Conference on Robotics and Automation)
- **발행일**: 2024-09-20 (arXiv), 2025 (ICRA)
- **DOI**: [10.48550/arXiv.2409.13356](https://doi.org/10.48550/arXiv.2409.13356)
- **주요 연구 내용**: LLM을 활용하여 로봇 조작 작업 중 계획 및 실행 단계에서 발생하는 오류를 자동으로 해결하고, 행동 트리(BT) 정책을 동적으로 확장·구성하는 BETR-XP-LLM 방법론 제안
- **주요 결과 및 결론**: 다양한 작업과 실패 상황에서 BT를 자동으로 확장하여 문제를 해결하고, 향후 유사한 문제에 대응할 수 있도록 정책을 영구적으로 업데이트
- **기여점**: BT의 투명성과 가독성을 유지하면서 LLM 호출을 최소화하고, 자동 정책 업데이트를 통해 로봇 시스템의 견고성과 성공률을 향상
<!--truncate-->

## 요약

### 초록
로봇 조작 시스템은 새로운 작업이나 예측 불가능한 환경에 대해 쉽게 구성할 수 있으면서도, 인간이 읽고 검증할 수 있는 투명한 정책을 유지할 것이 점점 더 요구되고 있다. 본 논문은 BETR-XP-LLM(BEhavior TRee eXPansion with Large Language Models)을 제안하며, 이는 로봇 제어를 위한 행동 트리 정책을 동적이고 자동으로 확장·구성하는 방법이다. LLM을 활용하여 작업 플래너의 능력 범위를 벗어나는 오류를 계획 및 실행 단계 모두에서 해결하며, 다양한 작업과 실패 상황을 해결하고 향후 유사한 문제를 처리할 수 있도록 정책을 영구적으로 업데이트하는 능력을 보여준다.

### 서론
로봇 조작 분야에서 행동 트리(BT)는 투명성, 모듈성, 반응성 등의 장점으로 인해 로봇 제어 정책으로 널리 활용되고 있다. 그러나 기존 BT 기반 시스템은 사전에 정의된 행동 범위 내에서만 작동하며, 예상치 못한 상황이나 오류에 대응하기 어렵다. LLM은 상식적 추론 능력을 갖추고 있어 이러한 한계를 극복할 수 있는 잠재력을 가진다. 본 연구는 LLM을 단순한 목표 해석을 넘어 오류 해결 및 정책 업데이트에 활용한다.

### 모델 아키텍처 / 방법론
BETR-XP-LLM은 다음과 같은 핵심 메커니즘으로 구성된다:
1. **실패 감지**: 계획 또는 실행 중 실패가 발생하면, 현재 정책에서 실패한 행동(action)을 식별
2. **LLM 기반 오류 해결**: 실패한 행동이 성공적으로 실행되기 위해 필요한 조건을 LLM이 상식 모델로서 제안 (수동 입력 불필요)
3. **BT 동적 확장**: LLM의 제안을 바탕으로 BT에 새로운 노드를 추가하여 자동 확장
4. **영구적 정책 업데이트**: 해결된 오류에 대한 대응 방안을 BT에 영구적으로 반영하여, 동일한 문제 재발 시 LLM 호출 없이 처리 가능

### 실험 및 결과
다양한 로봇 조작 작업에서 BETR-XP-LLM의 효과를 검증하였다. 실험 결과, 시스템은 계획 단계와 실행 단계 모두에서 발생하는 예상치 못한 실패를 성공적으로 해결하였다. BT의 투명성과 가독성은 유지되었으며, LLM 호출 횟수를 최소화하면서도 높은 성공률을 달성하였다. GitHub 저장소(jstyrud/BETR-XP-LLM)에서 코드가 공개되어 있다.

### 결론
BETR-XP-LLM은 LLM의 상식적 추론 능력을 활용하여 BT 기반 로봇 제어 정책을 자동으로 확장하는 효과적인 방법론이다. 투명성, 가독성, 검증 가능성이라는 BT의 고유한 장점을 유지하면서, LLM을 통해 새로운 상황에 대한 적응력을 확보하고, 영구적 정책 업데이트를 통해 시스템의 장기적 견고성을 향상시킨다.
