AI-Based Software Testing 분야는 성장하고 있다.
[Software Testing With Large Language Models: Survey, Landscape, and Vision](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10440574&tag=1)에 따르면 2020년부터 2023년까지 1편, 2편, 19편, 82편의 관련 연구가 발표되어 해당 분야에 대한 관심과 주목도가 어느정도 있고, 급격하게 증가하고 있음을 시사한다.
![](img/Pasted%20image%2020251114143534.png)
## STLC
- Software Testing Life Cycle: 테스트 계획부터 완료까지 전체 프로세스
- Test Case 작성
- Test 용어 이해
	- Smoke Test
	- Regression Test
	- Acceptance Test
	- Black Box/White Box Test
- Bug Reporting
## Programming
- 테스트 자동화를 위해 프로그래밍해야 함
## 자동화 대상에 따른 도구
- Web
	- Selenium
	- Cypress
	- Playwright
- API
	- Postman
	- Requests
- Mobile
	- Appium
## Framework & Infrastructure
- Test Runner
- Design Pattern
- Container
## 심화
- 성능 테스트
	- JMeter
	- k6
	- Gatling
- Visual Regression Test
	- Applitools
- AI/ML과 테스팅
	- 스스로 학습하여 TC를 생성하거나, UI가 변경되어도 Element를 잘 찾아내는 Self Healing 기술
	- 결함 위치를 파악하여 Debugging을 돕는 것도 주요 연구 주제에 포함
## 아이디어
- [ ] 예측적 결함 위치 파악
	1. 전통적인 결함 위치 파악 기술과 코드 변경 이력 데이터를 결합할 때, 미래의 버그 발생 가능성을 얼마나 정확히 예측 가능한가?
	2. LLM이나 SLM이 이 코드의 의미론적 복잡성이나 설계적 부조화를 분석하여 예측 정확도를 높일 수 있는가?
- [ ] 멀티모달 모델을 이용한 선제적 테스트 자가 치유
	1. 멀티모달 AI가 UI Screenshoot, 변경된 Frontend Code, Selenium/Cypress 테스트 코드를 동시에 이해하여 깨질 테스트를 예측 가능한가?
	2. 테스트가 실패하기 전, AI가 테스트 코드의 수정안을 생성 가능한가?
- [ ] 생성형 AI Test를 위한 Meta-Testing Framework
	1. 테스터 LLM이 타겟 LLM의 논리적 모순이나 사실 오류를 유발하는 프롬프트를 자동으로 생성하도록 강화학습 시킬 수 있는가?
	2. AI가 생성한 테스트 케이스의 품질을 측정할 새로운 메타-지표는 무엇인가?
