---
title: "Large Language Models as Commonsense Knowledge for Large-Scale Task Planning"
date: "2023-10-30"
description: "대규모 언어 모델의 상식적 세계 모델과 휴리스틱 정책을 몬테카를로 트리 탐색과 결합하여 복잡한 가계 업무 계획 능력을 혁신적으로 향상시킨다."
tags: ["Large Language Models", "Task Planning", "Monte Carlo Tree Search", "Commonsense Knowledge", "Embodied AI"]
authors:
- name: Zirui Zhao
- name: Wee Sun Lee
- name: David Hsu
---

## 논문 정보
- 제목: Large Language Models as Commonsense Knowledge for Large-Scale Task Planning
- 저자: Zirui Zhao, Wee Sun Lee, David Hsu (National University of Singapore)
- 학회/저널: 37th Conference on Neural Information Processing Systems (NeurIPS 2023)
- 발행일: 2023-10-30
- DOI: (미제공)
- 주요 연구 내용: LLM이 정책뿐만 아니라 세계에 대한 상식적인 모델을 제공할 수 있음을 보여주며, 이를 Monte Carlo Tree Search(MCTS)와 결합하여 작업 계획을 확장하는 LLM-MCTS 알고리즘을 제안한다. LLM 유도 세계 모델은 사전 믿음을 제공하고, LLM 유도 정책은 탐색을 안내하는 휴리스틱 역할을 수행한다.
- 주요 결과 및 결론: LLM-MCTS는 복잡하고 새로운 작업에서 MCTS 단독 모델이나 LLM 유도 정책보다 월등한 성능을 보였으며, 물체 재배치 과업에서 성공률을 크게 높였다. 또한 최소 기술 길이(MDL) 원칙을 통해 모델 기반 계획이 정책 기반 계획보다 유리한 조건을 이론적으로 제시한다.
- 기여점: LLM의 상식 지식을 세계 모델과 정책으로 결합하는 새로운 알고리즘을 정립하고, 대규모 탐색 공간에서 효율적인 추론과 계획이 가능함을 입증한다.
<!--truncate-->

## 요약
### 초록
대규모 작업 계획은 로봇 공학의 주요 도전 과제이다. 본 논문은 LLM이 정책 역할 외에도 세계에 대한 상식 모델을 제공할 수 있음을 입증한다. LLM-MCTS 알고리즘은 LLM 유도 세계 모델의 사전 믿음과 LLM 유도 정책 휴리스틱을 결합하여 탐색 효율을 극대화한다. 실험 결과, 이 방식은 복잡한 과업에서 기존 방식들을 큰 차이로 앞질렀다.

### 서론
자율 주행 로봇 버틀러가 과일을 냉장고에 넣는 등의 일상적인 과업을 수행할 때 수백 개의 항목과 장소가 존재하는 거대한 탐색 공간에 직면한다. 최근 연구들은 LLM을 직접 정책(L-Policy)으로 사용하지만, 복잡하고 생소한 과업에서는 일반화 성능이 떨어진다. 본 논문은 LLM을 통해 세계 모델(L-Model)을 구축하고 이를 계획 알고리즘에 적용하여 효율성을 개선하는 방법을 제시한다. 논문의 Figure 1은 LLM-MCTS의 전체적인 구조와 흐름을 시각적으로 설명한다.

### 배경
작업 계획 문제는 부분 관측 마르코프 결정 과정(POMDP)으로 정형화된다. 로봇은 상태(S), 행동(A), 관측(Ω), 전이 함수(T), 보상 함수(R)를 포함한 환경에서 최적의 정책을 찾아야 한다. 가계 물건 재배치 작업은 수많은 객체와 용기로 인해 기하급수적으로 큰 탐색 트리를 생성하므로 계획이 매우 어렵다.
![Figure 1](img/Pasted%20image%2020260422135353.png)
![Algorithm 1](img/Pasted%20image%2020260422135433.png)
### 모델 아키텍처 / 방법론
- 핵심 구조: LLM-MCTS는 LLM의 상식 지식을 MCTS의 시나리오 시뮬레이션 과정에 통합한다. Figure 1은 데이터셋과 사용자 지시가 LLM을 거쳐 상태 사전 믿음과 휴리스틱 정책으로 변환되어 MCTS에 주입되는 과정을 보여준다.
- 주요 구성 요소:
    * 상식 세계 모델: LLM을 사용하여 물체의 위치에 대한 초기 믿음을 생성한다. 문장 기반 임베딩을 통해 LLM의 응답을 실제 환경의 고유 물체 이름과 매핑하여 상태를 샘플링한다.
    * 휴리스틱 정책: PUCT 알고리즘에서 행동 선택을 가이드하기 위해 LLM을 정책으로 활용한다. LLM의 응답을 샘플링하여 경험적인 정책 분포를 형성한다.
    * MCTS 알고리즘: Algorithm 1은 LLM-MCTS의 상세 절차를 설명한다. 각 시뮬레이션은 사전 믿음에서 상태를 샘플링하고, Q값과 LLM 정책을 기반으로 유망한 경로를 탐색한다.
- 수식 및 알고리즘: 행동 선택은 시뮬레이션 중 $argmax_{a\in A}Q(h,a)+c\hat{\pi}(a|h)\frac{\sqrt{N(h)}}{N(h,a)+1}$ 수식을 통해 이루어진다. 여기서 $\hat{\pi}(a|h)$가 LLM 기반 휴리스틱 정책을 나타낸다.
![Table 1](img/Pasted%20image%2020260422135539.png)
![Table 2](img/Pasted%20image%2020260422135640.png)
![Figure 2](img/Pasted%20image%2020260422135622.png)
### 실험 결과
- 주요 데이터셋 및 설정: VirtualHome 시뮬레이션 환경을 사용하며, 800개의 무작위 객체 재배치 과업을 통해 평가를 진행한다. 200개의 예시 데이터를 프롬프트로 활용하며 파인튜닝은 거치지 않는다.
- 핵심 성능 지표: Table 1의 결과에 따르면 GPT3.5-MCTS는 모든 기본 모델보다 뛰어난 성공률을 보인다. 특히 Unseen Apartment의 NovelComp(2) 과업에서 GPT3.5 단독 정책이 54.0%를 기록할 때 LLM-MCTS는 70.4%의 성공률을 기록한다. Table 2의 절제 연구 결과, 휴리스틱 정책이 없는 모델은 성공률이 0%로 떨어져 그 중요성이 입증된다. Figure 2의 비행 계획 결과는 도시 숫자가 늘어날수록 정책보다 모델 기반 방식이 정확함을 보여준다.
![Table 3](img/Pasted%20image%2020260422135740.png)
### 결론
LLM-MCTS는 LLM의 상식 지식을 계획 알고리즘과 결합하여 효율적인 의사결정을 달성한다. MDL 원칙 분석을 통해 특정 도메인에서는 LLM을 직접 정책으로 쓰는 것보다 세계 모델로 활용하는 것이 더 우수한 성능을 낸다는 것을 밝혔다. Table 3에 보고된 바와 같이 LLM 호출 횟수로 인한 실행 속도 저하가 한계이나, 지식 증류 등을 통해 개선될 가능성이 있다.