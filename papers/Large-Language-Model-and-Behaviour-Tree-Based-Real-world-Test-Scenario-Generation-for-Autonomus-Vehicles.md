---
title: Large Language Model and Behaviour Tree Based Real-world Test Scenario Generation for Autonomous Vehicles
description: 대규모 언어 모델과 행동 트리를 결합하여 자연어 교통사고 기록으로부터 자율주행 시스템용 테스트 시나리오를 자동으로 생성하고 최적화하는 ScenLaBe 프레임워크를 제안한다.
authors:
  - name: Yuliang Li
  - name: Zhonglin Hou
  - name: Hong Liu
year: 2024
venue: 2024 IEEE 23rd International Conference on Trust, Security and Privacy in Computing and Communications (TrustCom)
tags:
  - autonomous-vehicle
  - large-language-model
  - behavior-tree
  - test-scenario-generation
  - natural-language-processing
relevance: high
reading_reason: ""
date: 2026-07-08
sidebar_label: ScenLaBe
---

# Large Language Model and Behaviour Tree Based Real-world Test Scenario Generation for Autonomous Vehicles

> Yuliang Li, Zhonglin Hou, Hong Liu · 2024 · 2024 IEEE 23rd International Conference on Trust, Security and Privacy in Computing and Communications (TrustCom)

> 관련도: 상

:::tip Intuition
자연어로 기록된 실제 교통사고 서사를 LLM의 제로샷 능력을 통해 정형화된 행동 트리 구조로 번역하고, 시뮬레이션의 시각적 키프레임을 피드백으로 활용해 크리티컬한 사고 상황의 파라미터를 역으로 추적·최적화하여 실행 가능한 테스트 시나리오를 자동 합성한다.
:::

{/* truncate */}

## One-liner

대규모 언어 모델과 행동 트리를 융합하여 정형화되지 않은 실제 교통사고 자연어 묘사 데이터로부터 자율주행 시스템 검증용 위험 테스트 시나리오를 자동 생성하고 최적화하는 프레임워크를 제안한다.

## Problem

기존의 자율주행 테스트 시나리오 생성 방식은 이미지나 차량 궤적 데이터에 의존하는 데이터 기반 방식과 교통 법규 등 외부 지식을 활용하는 지식 기반 방식으로 나뉜다. 국가교통안전국(NHTSA)의 CDS 데이터셋과 같이 실제 발생한 대량의 교통사고 내러티브 기록은 가치 있는 테스트 원천이지만, 비정형 자연어 형태로 존재하여 의미적 맥락을 온전히 보존하면서 시뮬레이터에서 직접 구동할 수 있는 실행 가능한 테스트 시나리오로 변환하기 어려웠다.

## Core Idea

대규모 언어 모델의 제로샷 및 ReAct 추론 능력을 적용하여 자연어 사고 서사를 정형화된 행동 트리 구조(XML)로 생성하고, 시뮬레이션 환경의 시각적 피드백인 핵심 프레임(Keyframe) 이미지와 안전 잠재량 지표를 기반으로 멀티모달 LLM을 최적화 도구로 활용해 구체적인 실행 파라미터를 반복 조율하는 ScenLaBe 프레임워크를 정립한다.

## Method

ScenLaBe는 ISO 26262 표준의 시나리오 추상화 단계(기능, 논리, 구체 시나리오)를 추종하며 다음 세 단계 파이프라인으로 구동된다.

1. **Functional Scenario Establishment** (기능 시나리오 수립): CDS 데이터셋의 비정형 교통사고 설명 글을 표준화한다. Word2Vec 단어 임베딩의 코사인 유사도를 기준으로 동의어를 정제하여 전용 어휘집을 생성하고, 원문 자연어의 모호성을 제거하여 문제 공간을 축소한다.
2. **Logical Scenario Generation** (논리 시나리오 생성): 표준화된 텍스트 기술을 바탕으로 LLM(GPT-4O)이 제로샷 및 ReAct 기법을 적용하여 동작 제어 모델을 구성한다. 구문 오류를 방지하기 위해 XML 스키마 가이드를 프롬프트에 제공하며, 최종적으로 복합 노드(Selector, Sequence, Parallel)와 7가지 단위 액션 노드(차선 변경, 목표 속도 가속 등) 조합의 행동 트리 XML 구조를 출력한다.
3. **Concrete Scenario Generation** (구체 시나리오 생성): 수립된 행동 트리 내부 파라미터(속도 범위, 유지 시간 등)를 최적화하여 실제 충돌을 유도한다. 멀티모달 LLM(GPT-4V)을 최적화 기렉터로 사용하는 OPRO 패러다임을 도입하여 CARLA 시뮬레이터 실행 화면의 키프레임 이미지와 산출된 안전 잠재량 수치를 피드백 프롬프트로 전달받아 사고가 발생할 때까지 파라미터 후보군을 생성하고 반복 개정한다.

구체 시나리오 생성을 위한 안전 잠재량(Safety Potential) 산출 공식은 다음과 같다.

$$
F_{\text{safety}} = \min(dis(V_i, V_j, t) - dis_{\text{safety}}(V_i, V_j))
$$

여기서 $dis(V_i, V_j, t)$는 시간 $t$에서의 차량 $V_i$와 $V_j$ 사이의 거리이고, $dis_{\text{safety}}(V_i, V_j)$는 사전에 정의된 안전 거리이다. 안전 잠재량을 최소화하여 충돌 상황을 유도하는 최적의 파라미터 조합 $\chi^*$를 구하는 목적 함수는 아래와 같다.

$$
\chi^* = \arg\min_{\chi \in X} F_{\text{safety}}(\theta)
$$

## Results

NHTSA CDS 데이터셋에서 무작위 추출한 2대 차량 연루 사고 기록 500개를 대상으로 프레임워크 검증을 시행하였다.

- **Scenario behaviour coverage** (시나리오 행동 커버리지): 생성된 행동 트리가 원본 자연어 묘사의 거동을 올바르게 반영하는지 측정한 결과 평균 0.81의 커버리지를 기록하며 충실도 높은 시나리오 변환 성능을 입증하였다.
- **Critical scenario generation ratio** (크리티컬 시나리오 생성 비율): 안전 잠재량이 0 미만으로 떨어져 물리적 충돌 위험을 유발한 테스트 시나리오의 비율($r_{\text{critical}}$)을 비교군인 전통적 그리드 서치(Grid Search) 방식과 대조한 결과, 모든 안전 거리 설정 구간에서 ScenLaBe가 확연히 높은 위험 상황 재현 성공률을 보였다.

| 평가 지표                                 | 비교 대상 방법론   | 결과 수치  | 주요 특징 및 경향                  |
| ------------------------------------- | ----------- | ------ | --------------------------- |
| 평균 행동 커버리지                            | ScenLaBe 단독 | 0.81   | 원본 교통사고 텍스트 기술을 충실히 재현      |
| 크리티컬 비율 ($dis_{\text{safety}} = 2.0$) | Grid Search | 0.065  | 격차가 매우 크며 전통적 방식의 탐색 한계를 노출 |
| 크리티컬 비율 ($dis_{\text{safety}} = 2.0$) | ScenLaBe    | 약 0.50 | 멀티모달 최적화 루프를 통해 위험 상황 집약 생성 |

## Key Figures
![Figure 1](img/Pasted%20image%2020260708124413.png)
- **Fig. 1**: 제안된 시스템 모델 구성도로, 자연어 입력에서부터 기능 시나리오 정제, 행동 트리 기반 논리 시나리오 생성, 멀티모달 LLM 최적화 루프를 통한 구체 시나리오 완성까지의 파이프라인을 시각화함
![Figure 2](img/Pasted%20image%2020260708124434.png)
- **Fig. 2**: 속도 유지 후 차선 변경을 시퀀스 구조로 묶어 표현한 구체적 차량 행동 트리 모델링 예시
![Figure 7](img/Pasted%20image%2020260708124457.png)
- **Fig. 7**: 500개 샘플 시뮬레이션 결과를 기반으로 도출한 시나리오 행동 커버리지 지표의 커널 밀도 추정 곡선
- **Fig. 8**: 허용 안전 거리 기준 설정 변화에 따른 ScenLaBe와 Grid Search의 임계 시나리오 생성 효율 비교 막대그래프

## Contribution vs Limitation

**저자 주장**
- 자연어 교통사고 설명글을 입력받아 정형 행동 트리 구조와 대규모 언어 모델을 결합해 작동 가능한 자율주행 안전 테스트 시나리오로 변환하는 최초의 ScenLaBe 프레임워크를 개발함
- 시나리오 파라미터 결정을 최적화 태스크로 공식화하고, 시뮬레이터 이미지 피드백을 직접 해독하는 멀티모달 LLM 기반 최적화(OPRO) 기법을 최초로 접목함
- 실제 대규모 교통사고 데이터셋 환경에서 뛰어난 거동 재현도와 우수한 크리티컬 시나리오 탐색 효율성을 실증함

**저자가 밝힌 한계**
- 멀티모달 LLM의 파라미터 최적화 과정에서 다량의 토큰 소모가 발생하므로 비용 효율화를 위한 프롬프트 가이드 개선이 과제로 남음
- 7종의 기본 단위 액션 노드 구조를 확장하여 더 다차원적이고 복잡한 다중 차량 얽힘 사고 상황을 대변할 수 있도록 발전시켜야 함

:::note 실제로 보이는 것
멀티모달 언어 모델을 블랙박스 최적화 기렉터(Optimizer)로 승화시켜 시뮬레이션의 이미지 궤적을 직접 보고 학습하게 만든 시도는 획기적이다. 다만 실제 인더스트리 규모의 대량 리그레션 테스트에 적용하기에는 매 이터레이션마다 고성능 상용 LLM API를 호출하고 고해상도 이미지를 피드로 넣는 비용적, 시간적 오버헤드가 극심할 것으로 추정된다. 또한 템플릿화된 행동 노드 외의 비선형적인 돌발 궤적이나 보행자 복합 인터랙션을 완벽히 수용하기에는 생성 모델의 규칙 제약이 여전히 따를 수 있다.
:::

## Quotes

- "However, natural language traffic accident descriptions represent an underutilized source for generating ADS test scenarios." (p.1)
- "In this work, we introduce a novel method, ScenLaBe, which leverages large language models (LLMs) and behaviour trees to generate test scenarios from these natural language descriptions." (p.1)
- "Inspired by the OPRO paradigm introduced in [19], we propose to use LLMs as the optimizer to solve the scenario parameter determination problem." (p.3)
- "While using videos directly to capture the simulation process seems intuitive, it is impractical due to the large file sizes..." (p.4)

## Idea Seeds

- LLM의 토큰 비용 문제를 완화하기 위해 전체 최적화 이터레이션을 LLM에 전담시키지 않고, 초기 탐색 영역 구획화 단계에만 LLM을 적용한 뒤 미세 수렴 단계는 베이지안 최적화(Bayesian Optimization) 알고리즘으로 이관하는 2단계 하이브리드 탐색 구조 설계
- 사고 기술 서사에서 차량 거동뿐만 아니라 주변 환경 정보(날씨, 교차로 형태, 신호 주기 등)를 계층적으로 자동 추출하여 시뮬레이터 카를라(CARLA)의 정적 오픈드라이브(OpenDRIVE) 맵 구성 요소까지 원스톱으로 빌드해 주는 완전 자동화 엣지 케이스 생성 엔진 고도화

## For My Writing

본 논문은 정형화되지 않은 텍스트 형태의 실제 도메인 위험 지식(사고 리포트)을 자율주행 안전성 검증을 위한 정형 제어 구조(Behaviour Tree)로 융합 매핑한 대표적 우수 선행 사례로 활용할 수 있다. 특히 언어 모델을 단순한 일회성 변역기가 아니라 시각 피드백 루프 내에서 능동적으로 목적 함수를 최소화해 나가는 최적화 에이전트로 정의하여 도메인 특화 태스크를 풀어나간 구조는 연구 기획서나 관련 연구 섹션에서 생성형 에이전트 기반 안전 테스팅 파트의 강력한 이론적 근거로 인용하기 적합하다.

## Open Questions

**이해하지 못한 것**
- 시각적 키프레임 이미지 피드백을 전달할 때 LLM이 픽셀 수준에서 차량 간 정량적 거리 오차나 구체적 가속도 성분을 정확히 인지하는 구체적 프롬프트 엔지니어링 스펙 및 한계 수치 해석 메커니즘이 논문 내에 명확히 상세화되어 있지 않아 블랙박스에 가깝다.

**저자가 다루지 않은 것**
- 차량 2대 간의 단순 충돌을 넘어선 3대 이상의 연쇄 추돌이나 특수 교통 약자(보행자, 개별 킥보드 등)와의 다중 인터랙션이 동반되는 복잡계 사고 구조에 대한 행동 트리 확장 가능성과 프롬프트 무결성의 강건성 검증

## Links

- **선행 연구**: Yao et al., 2022 (`ReAct: Synergizing reasoning and acting in language models`), Yang et al., 2023 (`Large language models as optimizers`)
- **후속 연구**: 명시되지 않음
- **관련 주제**: Autonomous Driving Simulation, Multimodal Large Language Model Optimization, Robot Behaviour Tree, Automated Crash Reconstruction

## References

- **DOI**: [10.1109/TrustCom63139.2024.00243](https://doi.org/10.1109/TrustCom63139.2024.00243)
- **arXiv**: 명시되지 않음
- **Code**: 명시되지 않음
- **BibTeX key**: `li2024scenlabe`

```bibtex
@inproceedings{li2024scenlabe,
  title     = {Large Language Model and Behaviour Tree Based Real-world Test Scenario Generation for Autonomous Vehicles},
  author    = {Li, Yuliang and Hou, Zhonglin and Liu, Hong},
  booktitle = {Proceedings of the 2024 IEEE 23rd International Conference on Trust, Security and Privacy in Computing and Communications (TrustCom)},
  year      = {2024},
  pages     = {1770--1775}
}
```