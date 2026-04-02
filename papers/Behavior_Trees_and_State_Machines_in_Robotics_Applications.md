---
slug: Behavior Trees and State Machines in Robotics Applications
title: Behavior Trees and State Machines in Robotics Applications
authors:
- name: Razan Ghzouli
- name: Thorsten Berger
- name: Einar Broch Johnsen
- name: Andrzej Wąsowski
- name: Swaib Dragule
tags: [Behavior Tree, State Machine, Robotics Applications, Domain-Specific Languages, Empirical Study, Software Language Engineering, Model Driven Engineering, GitHub Mining, Code Reuse Patterns]
---

# Behavior Trees and State Machines in Robotics Applications

<!--truncate-->
## 논문 정보
- **제목**: Behavior Trees and State Machines in Robotics Applications
- **저자**: Razan Ghzouli, Thorsten Berger (교신저자), Einar Broch Johnsen, Andrzej Wąsowski, Swaib Dragule
- **소속**: Chalmers University of Technology, Ruhr University Bochum, University of Oslo, IT University of Copenhagen
- **게재지**: IEEE Transactions on Software Engineering, Vol. 49, No. 9, September 2023
- **DOI**: 10.1109/TSE.2023.3269081
- **확장 연구**: SLE 2020에서 발표된 행동 트리 연구를 상태 머신까지 포함하여 확장한 저널 논문

## 연구 개요

자율 로봇의 **미션(mission)** 모델링을 위한 행동 트리(Behavior Trees)와 상태 머신(State Machines)의 실제 사용 현황을 체계적으로 비교 분석한 실증 연구. 5개 DSL의 언어 개념, 구현 설계, 오픈소스 ROS 프로젝트에서의 실제 사용 패턴을 소프트웨어 언어 엔지니어링 관점에서 조사했다.

## 연구 배경

### 로봇 행동 모델링의 필요성
- **미션**: 개별 스킬(skill)을 조합한 복잡한 로봇 행동
- **스킬**: 센서/액추에이터 제어 등 저수준으로 프로그래밍
- **조정(Coordination)**: 스킬을 조합하여 미션을 형성하는 고수준 표현

### 전통적 접근법 vs. 신흥 접근법
- **상태 머신**: 수십 년간 로봇 행동 모델링의 표준 언어
- **행동 트리**: 원래 컴퓨터 게임 NPC용으로 개발, 최근 로봇 공학에서 주목
  - 모듈성, 유연성, 코드 재사용 측면에서 장점 주장
  - 복잡한 미션에서 상태 머신보다 유지보수성 우수

## 연구 질문

- **RQ1**: 행동 트리와 상태 머신의 라이브러리 구현에서 어떤 모델링 개념이 제공되는가?
- **RQ2**: 이러한 언어(라이브러리)는 실제로 어떻게 엔지니어링되는가?  
- **RQ3**: 행동 트리와 상태 머신 모델이 로보틱스 프로젝트에서 어떻게 사용되는가?

## 연구 방법론

### 1. DSL 식별 및 분석 (RQ1)
- GitHub 검색과 ROS 위키를 통해 12개 DSL 식별
- **선정 기준**: 문서화, 유지보수 상태(2019년 이후 커밋), ROS 지원, 마이닝된 프로젝트 존재
- **최종 5개 DSL** 심층 분석:
  - **행동 트리**: BehaviorTree.CPP (C++), PyTrees/PyTrees_ros (Python)
  - **상태 머신**: SMACH (Python), FlexBe (Python)

### 2. 오픈소스 프로젝트 마이닝 (RQ3)
- **마이닝**: GitHub API를 이용한 코드 검색으로 프로젝트 수집
- **6단계 필터링**: 포크 제외 → 중복 제거 → 도구 리포지토리 제외 → 과제/튜토리얼 키워드 필터링
- **샘플링**: 행동 트리 75개, 상태 머신 75개 모델을 무작위 샘플링하여 총 150개 모델(43개 프로젝트) 분석

## 핵심 결과

### 1. 언어 개념 비교 (RQ1)

#### 행동 트리 개념
- **실행 노드**: 액션(행동 실행), 조건(Boolean 판정)  
- **복합 노드**: Sequence(순차), Selector(선택), Parallel(병렬), Decorator(장식)
- **실행 의미론**: 시간 기반(time-triggered), 틱(tick) 메커니즘으로 주기적 트리 순회
- **데이터 공유**: Blackboard 패턴 (전역 키-값 저장소)
- **상태값**: success, failure, running

#### 상태 머신 개념  
- **기본 요소**: 상태(state), 전이(transition), 액션(action)
- **실행 의미론**: 이벤트 기반(event-triggered), 반응형
- **데이터 공유**: UserData (로컬 범위 키-값 딕셔너리)
- **컨테이너**: 계층적 중첩 지원, 제어 흐름 컨테이너

#### 주요 유사점과 차이점

| 측면 | 행동 트리 | 상태 머신 |
|------|----------|----------|
| **프로그래밍 모델** | 동기/비동기, 시간 기반 | 비동기, 이벤트 기반 |
| **점프(goto)** | 미지원 (트리 순회만) | 지원 |
| **개방성** | 사용자 확장 기대 | 사용자 확장 기대 |
| **동시성** | 인터리빙, 코루틴 | 인터리빙, Python 스레딩 |
| **반응성** | 높은 빈도 실행으로 시뮬레이션 | FlexBe에서 직접 지원 |

### 2. DSL 구현 특성 (RQ2)

#### BehaviorTree.CPP
- **타입**: C++ 라이브러리, **외부 DSL** (XML + Groot GUI)
- **특징**: 그래픽 편집기 및 런타임 모니터링, 관심사 분리

#### PyTrees_ros
- **타입**: Python 라이브러리, **내부 DSL**  
- **특징**: GUI 없음, 코드에서 직접 모델 구성

#### SMACH
- **타입**: Python 라이브러리, **내부 DSL**
- **특징**: smach_viewer로 디버깅 가능 (구성 불가)

#### FlexBe  
- **타입**: **외부 DSL** (FlexBE App GUI)
- **특징**: MDE 기법 활용, 그래픽 모델에서 Python 코드 반자동 생성

**핵심 관찰**: GUI 지원 DSL에서 내장 언어 구조 활용도가 더 높음

### 3. 사용 현황 분석 (RQ3)

#### 인기도 추이
- **2018년 이후 행동 트리 급성장**: 2021년에 BehaviorTree.CPP와 PyTrees 사용이 2018년 대비 **약 10배 증가**
- **주요 원인**: ROS 2의 Navigation 2 스택이 행동 트리를 핵심 컴포넌트로 채택

#### 최종 마이닝 데이터  
- **상태 머신**: 620개 프로젝트, 2,507개 모델
- **행동 트리**: 169개 프로젝트, 658개 모델

#### 모델 구조 특성

| 메트릭 | 행동 트리 | 상태 머신 |
|--------|----------|----------|
| **평균 모델 크기** | 26 노드 | 9 상태 |
| **평균 깊이/중첩** | 5 | 1 |

**핵심 관찰**: 개발자들은 두 모델 모두 **얕고 적당한 크기**로 유지하는 경향

#### 복합 노드 사용 비율 (행동 트리)

| 노드 타입 | 사용 비율 |
|----------|----------|
| **Sequence** | 56% |
| **Selector** | 21% |
| **Decorator** | 16% |
| **Parallel** | 7% |

### 4. 재사용 패턴

3가지 재사용 패턴 식별:

#### 1) 모델 내 참조 (Intra-model referencing)
- **행동 트리에서 주로 사용**: 스킬 수준 30%, 태스크 수준 18%
- **활용**: 서브 트리를 정의하고 매개변수만 변경하여 재사용

#### 2) 복제 후 수정 (Clone-and-own)  
- **태스크 수준 재사용의 주요 패턴**: 행동 트리 48%, 상태 머신 29%
- **활용**: 유사한 미션의 모델을 복제 후 일부 수정

#### 3) 모델 간 참조 (Inter-model referencing)
- **스킬 수준 재사용의 주요 패턴**: 상태 머신 67%, 행동 트리 56%
- **활용**: 외부 파일에 스킬을 정의하고 임포트하여 사용

## 주요 기여

1. **체계적 비교 분석**: 5개 DSL의 언어 개념, 구현 설계, 실제 사용을 소프트웨어 언어 엔지니어링 관점에서 최초 비교
2. **대규모 오픈소스 마이닝**: GitHub에서 로봇 프로젝트를 체계적으로 마이닝하여 실제 사용 현황 파악  
3. **재사용 패턴 식별**: 3가지 재사용 패턴과 그 사용 방식 분석
4. **GUI 효과 발견**: 시각화 도구가 언어 구조 활용도에 미치는 영향 발견
5. **공개 데이터셋**: 150개 행동 모델을 포함한 데이터셋 공개
6. **트렌드 분석**: 행동 트리의 급속한 성장과 ROS 2 Navigation 2의 영향 확인

## 핵심 관찰사항

### 언어 설계 관점
1. **도메인 적응**: 두 언어 모두 로봇 공학의 요구에서 비롯된 개념들을 DSL에 반영
2. **개방성**: 모든 DSL이 고정 모델을 강제하지 않고 프로젝트별 확장 허용/기대

### GUI vs. 코드 기반 개발
3. **시각화의 중요성**: GUI가 있는 DSL에서 모델 구성과 모니터링에 대한 이해도 향상, 코드 재사용 촉진
4. **구조 누출**: 내부 DSL에서는 DSL 구조가 일반 프로그래밍 언어 구조로 우회되는 경향

### 실제 사용 패턴  
5. **단순함 선호**: 개발자들이 이해가능성을 위해 얕고 적당한 크기의 모델 선호
6. **재사용의 이중성**: 스킬 재사용은 모델 간 참조, 태스크 재사용은 복제 후 수정이 주류

## 한계점

1. **ROS 생태계 편향**: ROS 기반 프로젝트만 분석하여 다른 로봇 플랫폼의 사용 패턴 누락
2. **언어별 불균형**: 상태 머신 프로젝트가 행동 트리보다 4배 많아 비교에 편향 가능성
3. **품질 평가 부재**: 생성된 모델의 품질이나 정확성에 대한 평가 없음
4. **정적 분석**: 런타임 동작이나 성능 특성은 분석하지 않음
5. **소규모 샘플**: 150개 모델(43개 프로젝트)로 일반화에 한계

## 향후 연구 방향

1. **언어 개선**: 각 언어의 장점을 상호 벤치마킹하여 설계 개선
2. **도구 발전**: 모델 기반 설계 개념과 언어 설계 원칙을 더 많은 도구에 적용  
3. **분석 기법**: 행동 모델을 위한 분석 기법과 도구 개발
4. **성능 연구**: 런타임 성능과 확장성 비교 연구

## 개인적 견해

로봇 공학에서 행동 모델링 언어의 **실제 사용 현황**을 체계적으로 분석한 최초의 대규모 실증 연구다. 행동 트리의 급속한 성장과 GUI 기반 도구의 효과를 정량적으로 입증했으며, 소프트웨어 언어 엔지니어링과 로봇 공학 커뮤니티 모두에게 유용한 통찰을 제공한다. 특히 **실무 개발자들의 실제 사용 패턴**을 데이터로 뒷받침한 점에서 학술적 가치가 높다.

## 참고 자료

- [원문 논문](https://doi.org/10.1109/TSE.2023.3269081)
- [공개 데이터셋](https://zenodo.org/record/4279067)
- [BehaviorTree.CPP](https://behaviortree.github.io/BehaviorTree.CPP/)
- [PyTrees](https://py-trees.readthedocs.io/)
- [SMACH](http://wiki.ros.org/smach)
- [FlexBE](http://flexbe.github.io/)