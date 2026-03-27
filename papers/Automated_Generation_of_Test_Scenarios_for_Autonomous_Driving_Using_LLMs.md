---
slug: Automated Generation of Test Scenarios for Autonomous Driving Using LLMs
title: "Automated Generation of Test Scenarios for Autonomous Driving Using LLMs"
authors: [Aaron Agyapong Danso, Ulrich Büker]
tags: [Large Language Models, Autonomous Driving, Test Scenario Generation, CARLA Simulation, ScenarioRunner, Operational Design Domain, Tree of Thoughts, Chain-of-Thought, Prompt Engineering, Red Teaming]
---

# Automated Generation of Test Scenarios for Autonomous Driving Using LLMs

## 논문 정보
- **제목**: Automated Generation of Test Scenarios for Autonomous Driving Using LLMs
- **저자**: Aaron Agyapong Danso, Ulrich Büker 
- **소속**: inIT—Institute Industrial IT, University of Applied Sciences and Arts Ostwestfalen-Lippe, Germany
- **게재지**: Electronics 2025, 14(16), 3177 (MDPI, Editor's Choice)
- **출판일**: 2025년 8월 10일
- **DOI**: https://doi.org/10.3390/electronics14163177

## 연구 개요

자율주행차(AV) 안전성 검증을 위한 **Operational Design Domain(ODD)** 기반 시뮬레이션 시나리오 자동 생성 연구. 대규모 언어모델(LLM)을 활용하여 텍스트 기반 ODD 설명을 CARLA 시뮬레이터에서 실행 가능한 ScenarioRunner 스크립트로 자동 변환하는 파이프라인을 제안한다.

## 연구 배경 및 문제점

### Operational Design Domain (ODD)
- **정의**: 자율주행 시스템이 설계된 운영 조건 집합 (환경, 지리적, 시간적 제약, 교통/도로 특성 등)
- **중요성**: 자율주행 수준이 높아질수록 의사결정 책임이 인간에서 기계로 이전되어 ODD 범위 밖에서는 안전 보장 불가

### 기존 접근법의 한계
1. **수작업 의존**: 시뮬레이션 시나리오 생성이 노동집약적이고 시간 소모적
2. **유연성 부족**: 규칙 기반 시스템은 엣지 케이스(예기치 않은 보행자 행동, 갑작스러운 날씨 변화) 포착에 한계  
3. **확장성 문제**: AV 기술 발전에 따라 ODD 범위가 지속 확대되어 지속적인 시나리오 업데이트 필요

## 제안 방법론

### 1. ODD 분해 체계 (BSI PAS 1883 기반)

ODD를 세 가지 핵심 구성 요소로 분류:

| 그룹 | 설명 | 예시 |
|------|------|------|
| **Environmental** | 환경 이상으로 AV 성능에 영향 | 폭설, 짙은 안개, 도로 장애물 |
| **Scenery** | 공간적으로 고정된 요소 (상태는 변화 가능) | 차선 구성, 표지판, 공사 구역, 인프라 |
| **Dynamic** | 이동 가능한 요소 | 교통 참여자, 자차, 보행자, 자전거 |

### 2. LLM 기반 파이프라인 (Tree of Thoughts + Chain-of-Thought)

4단계 LLM 인스턴스로 구성된 파이프라인:

#### 1) Initial Tree
- LLM에 ODD 개념 소개 및 예시 시나리오 생성 유도
- ODD 시나리오 그룹별 분류 패턴 제공

#### 2) Tree-LLM  
- Initial Tree 기반으로 세 ODD 그룹을 모두 포함하는 종합 시나리오 생성
- ScenarioRunner 코드 생성 요청 → **Diverse Tree** 산출 (실행 불가능할 수 있음)

#### 3) Red-LLM
- Red teaming에서 영감을 받은 검증 단계
- Few-shot 프롬프팅으로 Diverse Tree의 오류 식별 및 수정 → **Simulatable Tree** 산출
- 올바른 ScenarioRunner 코드, CARLA 에셋, 오류 패턴 제공

#### 4) Augmented-LLM
- Red-LLM의 반복적 학습으로 향상된 최종 인스턴스
- CARLA에서 직접 실행 가능한 고품질 코드 생성

### 3. 프롬프트 엔지니어링 전략

- **시나리오 프롬프팅**: ODD 정의 → 구성요소 설명 → 추상화된 시나리오 형식 제공
- **코드 생성 프롬프팅**: ODD 파라미터를 CARLA 코드 요소로 매핑
  - Weather → `carla.WeatherParameters()`
  - Actors → `carla.Vehicle()`/`carla.Walker()`
- **정제 프롬프팅**: 문법 오류, API 호환성, 이벤트 시퀀스 논리적 정합성 검증 및 수정

## 실험 설계

- **LLM**: Pre-trained LLaMA 3
- **시뮬레이터**: CARLA 0.9.13 및 0.9.15  
- **실행 환경**: ScenarioRunner (Python 3.7 API), Jupyter Notebook
- **평가 시나리오**: 8개 (비상 제동, 차선 차단, 도로 공사, 차선 합류, 추월 등)

## 실험 결과

### 파이프라인 vs. 비파이프라인 비교 (n=8, paired t-test, α=0.05)

| 메트릭 | Baseline (Mean±SD) | Pipeline (Mean±SD) | 개선율 | p-값 |
|--------|-------------------|-------------------|--------|------|
| **시나리오 정확도** | 30±4% | 50±5% | **+66.7%** | 0.004 |
| **논리적 일관성** (이벤트 시퀀싱) | 20±6% | 50±5% | **+150%** | 0.002 |
| **문법/API 오류** (스크립트당) | 8±2개 | 5±1.5개 | **-37.5%** | 0.015 |
| **실행 성공률** (수동 수정 없이) | 40±5% | 60±4% | **+50%** | 0.008 |
| **디버깅 시간** | 10±2분 | 3±1분 | **-70%** | 0.002 |
| **차량 행동 정확도** | 5±3% | 20±4% | **+300%** | 0.001 |

→ **모든 메트릭에서 통계적으로 유의미한 개선** (p < 0.05)

### 자동화 수준
- **LLM 생성 코드 비율**: 90% (LLM) vs. 10% (인간 개입 - 주로 디버깅 및 CARLA 에셋 문제)
- 파이프라인 버전이 올라갈수록 평균 프롬프트 시도 횟수와 오류 수가 감소

## 주요 기여도

1. **ODD-to-Simulation 자동화 파이프라인**: 텍스트 기반 ODD 설명을 CARLA 실행 가능 코드로 변환하는 체계적 프레임워크
2. **ToT + CoT 프롬프팅 전략**: 복잡한 시나리오 생성을 구조화된 추론 단계로 분해하여 정확도 향상
3. **Red teaming 기반 정제**: LLM 출력 품질을 반복적으로 개선하는 Red-LLM 인스턴스 도입
4. **ODD 3분류 체계 활용**: Environmental, Scenery, Dynamic 그룹 분해를 통한 체계적 시나리오 구성
5. **수작업 감소**: 시뮬레이션 시나리오 생성 수동 노력 크게 감소 (디버깅 시간 70% 감소)

## 한계점

1. **동적 요소의 낮은 정확도**: 차량 행동 정확도가 파이프라인 적용 후에도 20%에 불과
   - 보행자, 자전거, 응급차량의 타이밍/동기화 문제 지속
2. **완전 자동화 미달성**: 여전히 10%의 인간 개입 필요 (스폰 포인트 조정, 누락 에셋 보상 등)
3. **절대적 성능 한계**: 파이프라인 적용 후에도 시나리오 정확도 50%, 실행 성공률 60%에 그침
4. **소규모 실험**: 8개 시나리오만 평가 - 일반화 가능성에 대한 추가 검증 필요
5. **CARLA 플랫폼 종속**: 특정 버전의 에셋 가용성에 따라 실행 결과가 달라짐

## 향후 연구 방향

1. **데이터 기반 접근법**: 실제 ODD 설명-CARLA 코드 쌍으로 구성된 큐레이션 데이터셋으로 LLM fine-tuning
2. **프롬프트 엔지니어링 최적화**: 생성 스크립트의 일관성과 정확도 향상
3. **동적 요소 오류의 체계적 해결**: 타이밍/동기화 문제의 근본 원인 분석 및 해결
4. **시뮬레이션 피드백 통합**: 시뮬레이션 결과를 fine-tuning 프로세스에 반영하는 반복적 정제 루프

## 개인적 견해

LLM을 활용한 자율주행 시뮬레이션 시나리오 자동 생성이라는 실용적 문제에 체계적인 파이프라인을 제안한 의미 있는 연구다. 정적/환경적 요소에 대해서는 효과성을 입증했으나, 동적 요소 처리의 한계가 명확하다. 수작업 감소와 구조화된 생성 프로세스 측면에서 가치가 있으며, fine-tuning 기반 접근법과의 결합을 통한 발전 가능성이 크다.

## 참고 자료

- [원문 논문](https://doi.org/10.3390/electronics14163177)
- [CARLA 시뮬레이터](https://carla.org/)
- [ScenarioRunner](https://github.com/carla-simulator/scenario_runner)