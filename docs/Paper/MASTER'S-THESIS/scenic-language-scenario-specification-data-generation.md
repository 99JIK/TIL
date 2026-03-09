---
title: "Scenic: A Language for Scenario Specification and Data Generation"
tags: [JIK_REFERENCE, autonomous-driving, simulation, scenario, probabilistic-programming, testing]
---

# Scenic: A Language for Scenario Specification and Data Generation

## 서지 정보
- **저자**: Daniel J. Fremont, Edward Kim, Tommaso Dreossi, Shromona Ghosh, Xiangyu Yue, Alberto L. Sangiovanni-Vincentelli, Sanjit A. Seshia
- **출판**: Machine Learning, vol. 112, pp. 3805–3849
- **연도**: 2023 (초기 arXiv: 2019)
- **DOI/arXiv**: doi: 10.1007/s10994-021-06120-5

## 핵심 요약
자율주행 시스템과 같은 사이버-물리 시스템(CPS)의 설계와 분석을 위한 확률적 프로그래밍 언어 Scenic을 제안한다. Scenic은 물리적 장면(scene)과 에이전트 행동을 확률 분포로 명세하여, 다양한 시나리오 인스턴스를 자동으로 샘플링·생성할 수 있다. 자율주행 테스트에서 엣지 케이스를 포함한 다양한 훈련·테스트 데이터를 효율적으로 생성하는 데 활용되며, 시나리오 명세에서 보안 취약점을 탐지하는 형식 분석도 지원한다. GAN 기반 이미지 생성과 결합하여 시각적으로 다양한 데이터셋 생성도 가능하다.

## 주요 기여
1. 자율주행 시나리오 명세와 데이터 생성을 위한 확률적 프로그래밍 언어 Scenic 설계 및 구현
2. 확률 분포 기반 시나리오 명세로 다양한 교통 상황의 자동 샘플링·데이터셋 생성 가능
3. CARLA, Webots 등 시뮬레이터와 통합되어 명세된 시나리오를 직접 시뮬레이션에서 실행

## 핵심 개념
- **Probabilistic Scenario Specification**: 시나리오의 초기 조건, 에이전트 위치, 속도 등을 확률 분포로 표현하여 다양한 시나리오 변형을 자동 샘플링
- **Domain-Specific Language (DSL)**: 특정 응용 도메인(자율주행 시나리오)에 특화된 프로그래밍 언어
- **Importance Sampling**: 시뮬레이션에서 엣지 케이스(희귀 사고 상황)가 더 자주 샘플링되도록 하는 통계적 기법
- **Falsification**: 시스템 명세를 위반하는 반례(counterexample) 시나리오를 자동으로 탐색하는 형식 검증 방법

## 석사논문과의 연관성
Scenic은 석사논문에서 **시나리오 명세 언어**의 비교 기준점으로 활용된다. OpenSCENARIO가 XML 기반의 결정론적 시나리오를 기술하는 데 중점을 둔다면, Scenic은 확률적 명세를 통해 다양한 시나리오 변형을 자동 생성한다. LLM이 자연어로부터 BT를 생성하는 석사논문의 접근법은 Scenic의 확률적 프로그래밍 명세와 상보적 관계에 있다—Scenic이 장면(scene)을 명세한다면 LLM-BT는 에이전트의 행동(behavior)을 명세한다. 향후 LLM이 Scenic 프로그램을 생성하거나, Scenic 기반 시나리오에서 BT를 생성하는 통합 파이프라인도 고려할 수 있다.

## 메모
- UC Berkeley Seshia 그룹의 연구. 2019년 초기 버전 발표 후 Machine Learning 저널에 확장 게재
- Scenic 2.0은 에이전트 행동(temporal behavior) 명세 기능을 추가하여 시나리오 언어로 확장
- GitHub: https://github.com/BerkeleyLearnVerify/Scenic
- ScenicNL(자연어 → Scenic 프로그램 생성)과 같은 LLM 기반 확장 연구도 진행 중
