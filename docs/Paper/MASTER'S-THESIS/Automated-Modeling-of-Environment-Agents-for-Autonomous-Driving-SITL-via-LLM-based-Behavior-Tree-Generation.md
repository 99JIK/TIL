# LLM 기반 행동 트리 생성을 통한 자율주행 Software In The Loop 검증용 환경 에이전트 자동 모델링
## Core Logic
### 문제점
SITL은 수많은 Edge case가 필요하며, 시뮬레이션 내의 환경 에이전트(행인, 적대적 차량)의 행동을 직접 코딩하는 것은 비용이 매우 높고, 시나리오가 제한적이다.
### 해결책
LLM에게 자연어로 요구사항을 주면 LLM이 이를 해석하여 해당 에이전트의 행동 패턴을 행동 트리로 자동 생성한다.
행동트리로 생성하는 이유는 모듈성과 재사용성을 높여 생성한 서브 트리를 다른 시나리오에 쉽게 끼워 넣을 수 있어 생산성이 향상되기 때문이다.
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