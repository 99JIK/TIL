---
title: "Integrating Intent Understanding and Optimal Behavior Planning for Behavior Tree Generation from Human Instructions"
date: "2024-08-01"
description: "대형 언어 모델의 의도 파악 능력과 최적 행동 트리 확장 알고리즘을 결합하여, 인간의 자연어 명령어로부터 신뢰성 있고 최적화된 로봇 행동 트리를 자동 생성하는 프레임워크를 제안한다."
tags: ["Behavior Trees", "Large Language Models", "Optimal Behavior Planning", "Intent Understanding", "Robotics"]
authors: ["Xinglin Chen", "Yishuai Cai", "Yunxin Mao", "Minglong Li", "Wenjing Yang", "Weixia Xu", "Ji Wang"]
---

## 논문 정보
- **제목**: Integrating Intent Understanding and Optimal Behavior Planning for Behavior Tree Generation from Human Instructions
- **저자**: Xinglin Chen, Yishuai Cai, Yunxin Mao, Minglong Li, Wenjing Yang, Weixia Xu, Ji Wang (National University of Defense Technology)
- **학회/저널**: Proceedings of the Thirty-Third International Joint Conference on Artificial Intelligence (IJCAI-24)
- **발행일**: 2024-08-01
- **DOI**: (미제공)
- **주요 연구 내용**: 사용자 명령어에서 로봇의 작업 목표를 1차 논리식으로 추출하는 대형 언어 모델(LLM) 단계와, 추출된 목표를 최소 비용으로 달성할 수 있도록 보장하는 최적 행동 트리 확장 알고리즘(OBTEA) 단계를 매끄럽게 연결하는 2단계 프레임워크를 제안한다.
- **주요 결과 및 결론**: 카페 서비스 로봇 환경 시뮬레이션 및 데이터셋 실험 결과, LLM은 소수 샷 예제와 피드백을 통해 매우 높은 문법 및 의미 정확도를 달성했으며, OBTEA는 기존 베이스라인 대비 행동 트리의 실행 비용과 조건 검사 횟수를 크게 절감하여 제안된 방식의 우수성과 실용성을 입증하였다.
- **기여점**: 개방형 자연어 명령어를 정형화된 논리식(WFFs) 기반의 수학적 목표로 변환하고, 이를 바탕으로 이론적인 성공과 최소 비용이 보장되는 행동 트리를 생성하는 엔드투엔드 파이프라인을 구축하여 체화된 AI(Embodied AI)의 강건성을 높였다.

## 요약
### 초록
가정이나 산업 현장에서 로봇이 인간의 지시를 수행하려면 적응력과 신뢰성이 모두 필요하다. 행동 트리(Behavior Tree)는 모듈성과 반응성이 뛰어나 이러한 제어 구조로 적합하지만, 기존의 자동 생성 방식은 자연어를 이해하지 못하거나 트리의 성공을 이론적으로 보장하지 못하는 한계가 있다. 본 논문은 LLM을 활용해 고수준 명령어에서 목표를 1차 논리식으로 해석하고, 최적 행동 트리 확장 알고리즘(OBTEA)을 통해 효율적인 행동 트리를 구축하는 2단계 프레임워크를 제안한다. 실험을 통해 문법적 정확성을 높인 LLM의 유용성과 OBTEA의 비용 절감 효과를 검증하며 실제 서비스 로봇 시나리오에서의 배포 가능성을 확인한다.
![Figure 1](img/Pasted%20image%2020260422145250.png)
### 서론
일상생활 환경(홈, 레스토랑 등)에서 자연어는 로봇을 제어하는 가장 직관적인 수단이지만, 명령어의 의도를 파악하고 이를 안전하고 견고한 실행 계획으로 자동 변환하는 것은 로봇 공학의 오랜 난제이다. 논문의 Figure 1에 예시된 것처럼, 기존에 LLM이 직접 행동 트리를 생성하게 하는 방식은 대규모 지도 학습 데이터가 필요할 뿐만 아니라 결과물의 최적성과 수학적 정확성을 보장할 수 없다. 이에 본 연구는 의도 파악 과정과 최적 행동 계획 과정을 1차 논리로 연결하여, 유연하면서도 신뢰성을 확보한 프레임워크를 제안한다.

### 배경
행동 트리는 조건(Condition), 액션(Action), 시퀀스(Sequence), 폴백(Fallback), 부정(Not-Decorator) 노드 등을 사용해 로봇의 동작을 제어하는 방향성 루트 트리 구조이다. 기존 연구들에서 다루는 행동 계획 문제는 로봇이 초기 상태에서 목표 조건으로 도달하게 하는 트리를 찾는 것이 핵심이다. 본 논문은 명령어에 내포된 '최소 비용 완료'라는 암묵적 의도를 반영하여, 이를 주어진 비용 함수 내에서 최적의 트리 구조를 찾아내는 최적 행동 계획 문제로 확장한다.
![Figure 2](img/Pasted%20image%2020260422145356.png)
![Algorithm 1](img/Pasted%20image%2020260422145424.png)
### 모델 아키텍처 / 방법론
- **핵심 구조**: 논문의 Figure 2에 제시된 2단계 프레임워크에 따르면, 첫 번째 단계는 사용자의 명령어를 정형식(WFFs) 기반의 1차 논리 목표로 변환하며, 두 번째 단계는 OBTEA를 이용해 탐색, 확장, 압축, 조립 과정을 거쳐 최적의 행동 트리를 완성한다.
- **주요 구성 요소**:
  - **의도 파악**(Intent Understanding): 프롬프트 엔지니어링을 통해 객체와 서술어의 범위를 명확히 하고, LLM의 생성 오류를 감지하면 블랙리스트를 추가하여 재요청하는 반영적 피드백(Reflective Feedback)을 적용하여 문법적 완결성을 확보한다.
  - **목표 정규화**(Goal Normalization): 생성된 목표를 선언적 논리합 정규형(DNF)으로 변환하여 구문의 모호성을 제거하고, 이를 바탕으로 처리할 하위 목표들을 생성한다.
  - **최적 행동 계획**(Optimal Behavior Planning): OBTEA를 통해 분할된 하위 목표들을 최소 비용으로 달성하는 행동 트리를 구성한다.
- **수식 및 알고리즘**:
  - OBTEA(Algorithm 1)는 목표 조건에서 역방향으로 인접 조건을 탐색(Exploration)하고, 초기 상태에 도달할 때까지 노드를 확장(Expansion)한다.
  - 트리 실행 효율을 높이기 위해, 인접한 조건 노드들 간의 공통 리터럴을 추출하여 중복 검사를 줄이는 압축(Compaction) 알고리즘을 사용한다.
  - 생성된 하위 트리들은 최종 비용이 낮은 순으로 정렬되어 폴백(Fallback) 노드 아래에 조립(Assembly)되며, 트리의 총비용은 연관된 모든 액션 노드 비용의 합산인 $D(\mathcal{T}) = \sum_{i=1}^{n} D(a_{i})$로 정의된다.
![Table 1](img/Pasted%20image%2020260422145451.png)
![Table 2](img/Pasted%20image%2020260422145506.png)
![Figure 3](img/Pasted%20image%2020260422145525.png)
![Figure 4](img/Pasted%20image%2020260422145544.png)
### 실험 결과
- **주요 데이터셋 및 설정**: 가상의 카페 로봇 환경을 설정하여 80개의 객체, 8개의 조건 서술어, 6개의 행동 서술어를 정의하고, Easy, Medium, Hard 3단계 난이도로 구성된 100개의 명령어-목표 쌍 데이터셋을 평가에 사용한다.
- **핵심 성능 지표**:
  - Table 1에 요약된 GPT-3.5 모델 평가 결과에 따르면, 1~5개의 예시(Few-shot)와 피드백 메커니즘을 함께 사용했을 때 제로샷 환경 대비 **문법적 정확도**(GA)와 **해석 정확도**(IA)가 극적으로 향상됨을 확인한다.
  - Table 2 및 Table 3의 알고리즘 벤치마크 결과에서 OBTEA는 기존 행동 트리 확장 알고리즘 대비 총 실행 비용을 대폭 낮추고 조건 노드 틱(Tick) 발생을 절반 이하로 줄이는 압도적 효율을 보여준다.
  - 논문의 Figure 3 그래프는 압축 과정에서의 최대 재귀 깊이가 2~4 수준일 때 조건 노드 틱 횟수가 가장 안정적으로 최적화됨을 시각적으로 나타낸다.
  - Figure 4의 실제 시뮬레이터 배포 사례를 통해, "커피를 내리고 에어컨을 꺼달라"는 다중 복합 명령이 성공적인 행동 트리로 매핑되어 로봇이 자율적으로 임무를 완수함을 증명한다.

### 결론
본 논문은 대형 언어 모델의 언어 파악 능력과 행동 트리 기반 행동 계획의 수학적 신뢰성을 조화롭게 융합하여 이론적으로 완전한 로봇 제어 프레임워크를 개발하였다. 향후 최신 휴리스틱 탐색 기법을 추가하여 계획 수립 속도를 더욱 개선하고, 새로운 환경에 맞춰 규칙을 스스로 학습하는 알고리즘을 결합한다면 범용 체화된 AI의 발전에 크게 기여할 수 있을 것이다.