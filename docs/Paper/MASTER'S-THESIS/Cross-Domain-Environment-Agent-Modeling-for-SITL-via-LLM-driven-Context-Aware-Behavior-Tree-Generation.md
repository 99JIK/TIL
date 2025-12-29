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
## Methodology
### System Architecture
1. 사용자 입력
	- 요구사항 입력을 통해 생성하거나, 사용자의 입력으로 TC를 생성한다.
		- Ex) 스쿨존에서 갑자기 튀어나오는 아이 생성
2. 도메인 식별 및 검색
	- LLM이 입력을 분석하여 도메인을 분류한다.
	- JSON 파일에서 해당 도메인의 허용된 행동 리스트를 불러온다.
3. 맥락 인식형 생성
	- 불러온 행동 리스트를 Prompt에 주입하여 LLM이 요구사항을 분해해 행동 트리(XML)로 생성한다.
4. 검증 및 실행
	- 문법 확인 및 표준 행동을 실제 시뮬레이터 API로 변환하여 Agent를 소환해 확인한다.
### Core Technology Elements
- Semantic Capabilities Registry: 각 도메인의 Agent가 수행 가능한 행동과 감지 가능한 상태를 정의한 메타데이터의 집합
- Behavior Tree(BT): 복잡한 Agent Logic을 Sequence, Fallback, Parallel Node로 표현하여 가독성 및 디버깅 용이성을 확보하는 행동 트리
- Simulator Adapter: 이기종 시뮬레이터(CARLA, Gazebo, Custom Sim)와 BT Engine을 연결하는 Interface
## Evaluation Plan
### Testbed
- CARLA(자율주행)
	- SUT: 자율주행 차량
	- Agent: 보행자, 일반 차량
- Gazebo(스마트 빌딩 등 시뮬레이터)
	- SUT: 중앙 관제 시스템
	- Agent: 엘리베이터, 자동문, 화재 감지기
### Metrics
1. 생성 성공률: LLM이 생성한 행동 트리가 문법적/논리적 오류 없이 시뮬레이터에서 실행 되는 비율
2. 도메인 적합성: 다른 도메인의 명령어를 섞어 쓰지 않았는지 확인
3. 비용 효율성: 시나리오 1개 제작 시 소요 시간 및 토큰
4. 확장성: 새로운 도메인 추가 시 필요 공수
## Expected Impact
### Academic Contribution
### Industrial Contr