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
	1. 전통적인 결함 위치 파악
- [ ] 멀티모달 모델을 이용한 선제적 테스트 자가 치유
- [ ] 생성형 AI Test를 위한 Meta-Testing Framework