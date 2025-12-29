# LLM 기반 맥락 인식형 행동 트리 생성을 통한 SITL용 교차 도메인 환경 에이전트 모델링
## Introduction
### Background
- SITL(Software In The Loop) 검증의 중요성: 비용 효율적인 안정성 검증을 위해 가상 환경에서의 시뮬레이션 테스트가 필수적이다.
- Environment Agent 생성의 병목: 테스트 대상(SUT)을 위협하거나, 상호작용해야 하는 주변 Agent를 구현하는 데 많은 비용과 시간이 소요되며, 기존 수동 스크립팅 방식의 경우 다양한 Edge Case를 커버하는 데 한계가 있다.
### Problem
- LLM의 환각 및 제어 불가능
- 도메인 종속성 문제
### Goal
- 범용 Framework 개발: LLM이 도메인을 인지하고, 해당 도메인에 정의된 행동만을 사용하여 실행 가능한 행동 트리를 생성하는 시스템을 구축한다.
- 비용 효율성 입증: 수동제작, 단순 LLM 사용 대비 시나리오 생성 속도 및 다양성 측면에서의 효율성을 보인다.
## Hypothesis & Novelty
### Hypothesis
> LLM에게 도메인별 행동 제약조건을 동적으로 주입하는 RAG(Retrieval-Augmented Generation) 기법을 적용하면, 단일 Framework로 이종 도메인의 Environment Agent를 오류 없이 생성 가능하며, 이를 행동 트리로 구조화해 테스트 시나리오의 수정 및 재사용 비용을 획기적으로 절감 가능하다.

### Novelty(Contribution)
- 중간 표현으로 행동 트리 활용: LLM이 직접 코드를 짜는 대신 행동 트리를 생성하여 모듈성 및 안정성을 확보한다.
- 기능 인식 생성: 단순 프롬프팅이 아닌, 시스템의 물리, 기능적 제약사항을 JSON 형태의 Registry로 관리해 환각을 차단하는 아키텍처를 제안한다.
- 이종 도메인 적용: 다양한 시뮬레이션 환경에 적용 가능한 표준 어댑터 패턴을 도입한다.
## Keyword
- Senario Generation
- Simulation-based Testing
- Environment Agents
- Behavior Tree
## System Architecture
1. 요구사항 입력
2. 행동 추출
3. 행동 필터링
	- 중간 표현에 해당하는 행동 트리를 생성
		- 물리적으로 불가능한 행동 제거
		- 논리적으로 모순된 행동 제거
4. 행동 트리 생성
## Contribution
1. 경제적 가치: 고비용의 시나리오 제작을 자동화 할 수 있음
2. 안전성 검증의 효율화: 다양하고 예측 불가능한 환경 에이전트를 대량 생산하여 SITL을 더 강건히 진행할 수 있음
## Plan
1. 시뮬레이터 선정(CARLA로 계획 중)
2. 환경 에이전트가 할 수 있는 행동을 미리 정의
3. 비교 실험
	1. 수동 생성
	2. LLM 생성
	3. LLM+BT
	- 평가 지표
		- 얼마나 다양한 시나리오가 나왔는가?
		- 시나리오를 만드는 데 걸린 시간은 얼마인가?
		- 생성된 환경 에이전트가 자율주행차에게 유의미한 TC가 되었는가?
