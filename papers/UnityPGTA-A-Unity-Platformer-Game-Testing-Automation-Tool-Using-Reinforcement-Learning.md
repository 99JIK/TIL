---
title: "UnityPGTA: 강화학습을 이용한 유니티 플랫포머 게임의 테스팅 자동화 도구"
description: "사람의 개입 없이 유니티 게임의 코드와 씬을 분석하여 결함을 탐지하는 강화학습 기반 자동 테스팅 도구"
authors:
  - name: 박세찬
  - name: 김덕엽
  - name: 이우진
year: 2024
venue: "Journal of KIISE"
tags: [reinforcement-learning, unity-game-engine, game-testing-automation, unity-machine-learning-agents-toolkit, proximal-policy-optimization]
relevance: high
reading_reason: "교수님이 원하시는 KCI 양식 및 분량, 선행 및 참고 연구로 활용"
date: 2026-04-28
sidebar_label: "UnityPGTA"
---

# UnityPGTA: 강화학습을 이용한 유니티 플랫포머 게임의 테스팅 자동화 도구

> **박세찬, 김덕엽, 이우진** · **2024** · **Journal of KIISE**

> 관련도: 상 · 읽은 이유: 교수님이 원하시는 KCI 양식 및 분량, 선행 및 참고 연구로 활용

{/* turncate */}

:::tip Intuition
게임의 입력 소스 코드와 물리적 구성 요소(씬)를 AI가 스스로 분석하여 '어디를 눌러야 에러가 나는지'를 학습하는 자가 학습형 테스터를 구축한다.
:::

## One-liner

유니티 엔진의 코드와 씬 데이터를 분석하여 별도의 테스트 스크립트 작성 없이도 강화학습 에이전트가 게임을 플레이하며 시스템 결함을 탐지하는 도구이다.

## Problem

게임 테스팅은 전체 개발 비용의 약 50%를 차지할 정도로 막대하지만, 기존 자동화 연구는 두 가지 한계가 있다. 첫째, 테스트 스크립트 작성이나 시나리오 그래프 제작 등 인간 엔지니어의 수동 개입이 필수적이라 비용 절감 효과가 낮다. 둘째, VGDL이나 GVG-AI 같은 가상 연구 환경에 국한되어 실제 상용 엔진(유니티 등) 기반 게임에 적용하기 어렵다.

## Core Idea

UnityPGTA는 인간의 개입을 완전히 배제하고 유니티 프로젝트의 **Source Code**와 **Scene** 파일을 직접 분석한다. 이를 통해 에이전트가 가질 수 있는 행동과 관측 정보를 자동으로 추출하고, 에러 로그 발생 자체를 보상(Reward)으로 삼아 결함 탐지에 최적화된 학습 모델을 생성한다.

## Method


1.  **Game Analyzer** (게임 분석기):
    * 소스 코드 스캔: `InputManager`의 `GetKey`, `GetAxis` 함수나 `InputSystem`의 `InputActionAsset` 속성을 추적하여 에이전트가 수행할 수 있는 **Action** (행동) 집합을 정의한다.
    * 씬 분석: `RigidBody`나 `Collider`가 포함된 주요 오브젝트를 식별하여 에이전트의 **Observation** (관측) 정보(위치 데이터 등)에 추가한다.
2.  **Customizer** (커스터마이저):
    * 분석된 행동/관측 정보를 바탕으로 **Unity ML-Agents** (유니티 머신러닝 에이전트)를 설정한다.
    * 로그 콜백 함수를 활용하여 `Error` 또는 `Exception` 발생 시 양(+)의 보상을 부여하는 로직을 자동 삽입한다.
3.  **Testing & Logging**:
    * **PPO** (Proximal Policy Optimization) 알고리즘을 기반으로 에이전트를 학습시키며 게임을 플레이한다.
    * 발견된 결함은 스택 트레이스 정보를 포함한 JSON 형태의 버그 리포트와 재현을 위한 입력 시퀀스 로그로 저장된다.

## Results

세 가지 오픈소스 유니티 게임을 대상으로 **Random Baseline** 모델과 비교 실험을 수행하였다.

| 대상 게임 | 장르 | 발견 에러 (Proposed) | 발견 에러 (Random) | 개선율 |
| :--- | :--- | :---: | :---: | :---: |
| **SanAndreas Unity** | 액션 어드벤처 | 10개 | 5개 | +100% |
| **bouncer** | 플랫포머 (무한 러너) | 44개 | 10개 | +340% |
| **spelunky** | 횡스크롤 액션 | 18개 | 0개 | 측정불가 |

* **SanAndreas Unity**: 특정 위치에서 차량 소환(V키) 반복 시 `MeshCollider`가 충돌하며 발생하는 에러를 정밀하게 탐지하였다.
* **bouncer**: 랜덤 모델은 초반 장애물을 넘지 못해 후반 결함을 놓친 반면, 제안 도구는 학습을 통해 후반부까지 도달하여 `NullReference` 등을 다수 발견하였다.
* **spelunky**: 특정 오브젝트와의 거리를 고려한 방향성 이동이 필요하여 랜덤 모델은 에러 지점에 도달조차 하지 못했다.

## Key Figures
![Figure 2](img/Pasted%20image%2020260428142640.png)
-   **Fig. 2**: UnityPGTA의 전체 구조도. Game Analyzer, Customizer, ML-Agents, Logger 간의 상호작용을 보여준다.
![Figure 6](img/Pasted%20image%2020260428142731.png)
-   **Fig. 6**: 스텝 경과에 따른 누적 에러 탐지 그래프. 학습이 진행됨에 따라 특정 구간에서 에러가 집중적으로 발견되는 양상을 확인 가능하다.
![Table 1](img/Pasted%20image%2020260428142708.png)
-   **Table 1**: 코드와 씬을 분석하여 에이전트의 BrainParameters를 초기화하는 구체적인 알고리즘 단계.

## Contribution vs Limitation

**저자 주장**
-   **Zero Human Intervention**: 테스트 스크립트 작성 없이 코드/씬 분석만으로 자동 테스팅 환경 구축.
-   **Practicality**: 실제 상용 엔진인 유니티를 기반으로 하여 현업 적용 가능성이 높음.
-   **Efficiency**: 수동 플레이테스팅 대비 시간과 비용을 크게 절감.

**저자가 밝힌 한계**
-   **Genre Constraint**: 물리 엔진(Rigidbody/Collider) 의존도가 낮은 퍼즐 게임 등에는 부적합함.
-   **Performance Dependency**: 복잡한 게임 환경에서 낮은 사양의 PC 사용 시 학습 및 테스팅 지연 발생 가능.

:::note 실제로 보이는 것
-   **장점**: 유니티의 표준 입력 방식(`InputManager`, `InputSystem`)을 사용하는 대부분의 프로젝트에 즉시 적용 가능한 높은 범용성을 가짐.
-   **한계**: '에러 로그'가 남지 않는 논리적 버그(예: 캐릭터가 벽에 끼었으나 에러는 안 남)를 탐지하기 위해서는 이미지 분석 기반의 추가 관측 모델이 필요해 보임.
:::

## Quotes

> "기존 테스트 자동화 기존 연구들은 스크립트 작성 등의 사람의 개입을 요구하는 수동 작업이 남아 있어 테스트 비용이 많이 든다." (p.149)
> "제안하는 도구는 실제 상용 게임 엔진 기반이며 사람의 개입 없이 게임을 스스로 분석하여 게임 자동 테스팅 환경을 구축한다." (p.149)
> "에이전트는 기본적으로 PPO를 기반으로 학습한다... 일반적으로 PPO가 가장 안정적이고 강인한 학습을 보이기 때문이다." (p.152)
> "UnityPGTA는 게임 분석을 분석하고 에이전트를 조정하고 플레이테스팅을 하는 모든 과정이 자동 방식이기 때문에 추가적인 비용이 적다는 장점이 있다." (p.155)

## Idea Seeds

-   **이미지 기반 관측 확장**: 물리 엔진 데이터뿐만 아니라 현재 화면 프레임을 CNN으로 분석하여, 로그가 남지 않는 시각적 결함(텍스처 깨짐 등)을 보상 조건으로 추가할 수 있다.
-   **CI/CD 파이프라인 통합**: 유니티 프로젝트가 깃허브에 푸시될 때마다 자동으로 UnityPGTA를 실행하여 '에러 탐지 리포트'를 PR 코멘트로 달아주는 자동화 시스템.
-   **멀티 에이전트 협력 테스팅**: 여러 에이전트가 서로 다른 보상 함수(예: 맵 구석구석 가기, 특정 아이템 사용하기)를 가지고 협력하여 결함 탐지 범위를 넓히는 방식.

## For My Writing

이 논문은 게임 개발 프로세스에서 **Shift-Left Testing** (테스트 단계 앞당기기)을 구현하기 위한 핵심 도구로 인용할 수 있다. 특히 QA 엔지니어가 부족한 인디 게임 개발 환경에서 최소한의 비용으로 런타임 에러를 걸러낼 수 있는 실무적 대안으로 제시하기에 적합하다.

## Open Questions

**이해하지 못한 것**
-   테이블 1의 11번 단계에서 'Continuous action'의 임계값(Threshold) 0.1이 게임마다 다른 이동 속도나 입력 감도에 따라 어떻게 최적화되는지 구체적인 기준이 명시되지 않음.

**저자가 다루지 않은 것**
-   유니티의 표준 입력 방식이 아닌 커스텀 입력 시스템을 사용하는 게임에 대한 대응 방안.
-   학습된 모델이 게임의 버전 업데이트(씬 구조 변경 등) 시 얼마나 재사용 가능한지에 대한 전이 학습(Transfer Learning) 가능성 여부.

## Links

-   **선행 연구**: [Unity ML-Agents Toolkit](https://github.com/Unity-Technologies/ml-agents)
-   **관련 주제**: [PPO Algorithm (Schulman et al., 2017)](https://arxiv.org/abs/1707.06347)
-   **Code**: [github.com/amkorousagi/UnityPGTA](https://github.com/amkorousagi/UnityPGTA)

## References

-   **DOI**: [10.5626/JOK.2024.51.2.149](https://doi.org/10.5626/JOK.2024.51.2.149)
-   **BibTeX key**: `park2024unitypgta`

```bibtex
@article{park2024unitypgta,
  title     = {UnityPGTA: A Unity Platformer Game Testing Automation Tool Using Reinforcement Learning},
  author    = {Park, Se-chan and Kim, Deock Yeop and Lee, Woo Jin},
  journal   = {Journal of KIISE},
  volume    = {51},
  number    = {2},
  pages     = {149--156},
  year      = {2024},
  publisher = {KIISE}
}
```