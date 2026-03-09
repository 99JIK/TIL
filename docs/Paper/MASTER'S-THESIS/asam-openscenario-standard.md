---
title: "ASAM OpenSCENARIO Standard"
tags: [JIK_REFERENCE, autonomous-driving, simulation, scenario, testing, standard, SITL]
---

# ASAM OpenSCENARIO Standard

## 서지 정보
- **저자**: ASAM e.V. (Association for Standardisation of Automation and Measuring Systems)
- **출판**: ASAM 공식 표준 문서
- **연도**: 2023 (현재 v2.x)
- **DOI/arXiv**: https://www.asam.net/standards/detail/openscenario/

## 핵심 요약
OpenSCENARIO는 자율주행 시뮬레이션에서 동적 교통 시나리오를 정의하기 위한 오픈 표준이다. XML 기반의 v1.x와 Python/도메인 특화 언어(DSL) 기반의 v2.x로 구성되며, 차량·보행자·인프라의 행동, 궤적, 이벤트 트리거를 계층적으로 기술한다. CARLA Scenario Runner, SUMO, dSPACE ASM 등 주요 시뮬레이터와의 호환성을 제공하여 시나리오 이식성을 보장한다. OpenDRIVE(도로 네트워크), OpenCRG(도로 표면) 등 관련 ASAM 표준과 함께 사용되어 통합적인 시뮬레이션 생태계를 형성한다.

## 주요 기여
1. 자율주행 테스트 시나리오의 표준화된 기술 형식 제공으로 시뮬레이터 간 이식성 확보
2. 이벤트 기반(event-driven) 시나리오 트리거 메커니즘으로 복잡한 교통 상황 표현 가능
3. OpenDRIVE, OpenCRG와의 통합을 통한 완전한 가상 테스트 환경 표준 생태계 구축

## 핵심 개념
- **Story/Act/Sequence/Event**: OpenSCENARIO의 계층적 시나리오 구조. 스토리→액트→매니버→이벤트 순으로 구성
- **Trigger/Condition**: 특정 조건(시간, 위치, 속도 등)이 충족될 때 에이전트 행동을 변경하는 이벤트 메커니즘
- **Storyboard**: 시나리오의 전체 타임라인과 참여 엔티티(차량, 보행자 등)를 정의하는 최상위 구조
- **OpenDRIVE**: 도로 네트워크의 기하학적 구조를 기술하는 ASAM 표준. OpenSCENARIO와 함께 사용

## 석사논문과의 연관성
OpenSCENARIO는 석사논문에서 LLM이 생성하는 BT 기반 에이전트 행동 시나리오를 표준화된 형식으로 기술하는 참조 프레임워크다. LLM이 자연어 기반 교통 시나리오 설명을 입력받아 BT를 생성할 때, 생성된 BT가 OpenSCENARIO의 시나리오 구조(Act, Sequence, Event)와 대응될 수 있도록 설계하면 CARLA Scenario Runner와의 직접 연동이 가능하다. **Cross-Domain** 측면에서는 동일한 OpenSCENARIO 시나리오 명세가 CARLA, SUMO 등 서로 다른 시뮬레이터에서 실행될 수 있어, 도메인 독립적 에이전트 행동 모델링의 기반이 된다.

## 메모
- v1.0: XML 기반, 단순 시나리오 기술에 적합
- v2.0: Python DSL 기반, 조건부 로직과 확률적 시나리오 지원 강화
- CARLA Scenario Runner가 OpenSCENARIO v1.x를 기본 지원
- 업계 표준이므로 자율주행 연구 논문에서 광범위하게 인용됨
