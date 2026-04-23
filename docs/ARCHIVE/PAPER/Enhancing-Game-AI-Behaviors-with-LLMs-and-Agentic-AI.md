---
title: Enhancing Game AI Behaviors with Large Language Models and Agentic AI
date: '2025-06-25'
description: LLM과 에이전트 기반 AI를 활용하여 게임 NPC의 행동 트리를 자동 생성하는 프레임워크 제안
tags: [Large Language Model, Behavior Tree, Game Artificial Intelligence, Non-Player Character, Agentic Artificial Intelligence, JIK Reference]
authors:
- name: Ciprian Paduraru
- name: Miruna Gabriela Paduraru
- name: Alin Stefanescu
year: 2025
venue: FSE 2025 (33rd ACM International Conference on the Foundations of Software Engineering) - Industry Papers
doi: 10.1145/3696630.3728553
pages: 286–296
---

## 논문 정보

- **제목**: Enhancing Game AI Behaviors with Large Language Models and Agentic AI
- **저자**: Ciprian Paduraru (Gameloft & University of Bucharest), Miruna Gabriela Paduraru (University of Bucharest), Alin Stefanescu (University of Bucharest)
- **학회/저널**: FSE 2025 (33rd ACM International Conference on the Foundations of Software Engineering) - Industry Papers
- **발행일**: 2025-06-25
- **DOI**: [10.1145/3696630.3728553](https://doi.org/10.1145/3696630.3728553)
- **주요 연구 내용**: LLM과 에이전트 기반 AI를 활용하여 게임 NPC의 복잡한 행동 트리(BT)를 자동 생성하는 프레임워크를 제안하며, 소스 코드와 게임 엔진 시각 도구 간의 간극을 해소
- **주요 결과 및 결론**: 소형 로컬 모델로 외부 API 없이 구동 가능하며, 기술/비기술 스테이크홀더 모두 활용 가능한 실용적 접근법을 산학 협력으로 검증
- **기여점**: LLM 기반 BT 자동 생성 파이프라인, 게임 엔진 시각 도구 통합, NPC 행동 다양성 및 테스트 가능성 향상, 다양한 게임 엔진에 적응 가능한 확장성 있는 아키텍처
<!--truncate-->

## 요약

### 초록
고급 AI 행동의 통합은 몰입감 있고 역동적인 비디오 게임 경험을 만드는 데 핵심적이다. 본 논문은 LLM과 에이전트 기반 AI를 활용하여 게임 NPC(Non-Player Character)를 위한 복잡한 행동 트리(BT)를 생성하는 프레임워크를 제안한다. 이 방법은 소스 코드와 게임 엔진의 시각적 도구 사이의 간극을 해소하여, 기술적·비기술적 이해관계자 모두가 NPC 개발에 효과적으로 기여할 수 있도록 한다. 주요 기여점에는 행동 다양성 증대, 게임 테스트 가능성 향상, 다양한 게임 엔진에 적응 가능한 확장성 있는 아키텍처가 포함된다. 표준 개발자 하드웨어에서 외부 서비스 없이 구동되는 소형 모델을 활용하여 접근성을 우선시한다.

### 서론
게임 AI에서 NPC의 행동 설계는 게임의 몰입감과 품질을 좌우하는 핵심 요소이다. 전통적으로 BT는 게임 개발자가 수동으로 설계하며, 이 과정은 시간이 많이 소요되고 전문 지식을 요구한다. 최근 LLM의 발전은 코드 생성, 자연어 처리 등에서 뛰어난 성능을 보여주고 있으며, 이를 게임 AI 행동 생성에 활용할 수 있는 가능성이 열리고 있다. 특히 에이전트 기반 AI 접근법을 통해 복잡한 BT 생성을 여러 상호 연결된 에이전트에게 분배할 수 있다.

### 모델 아키텍처 / 방법론
프레임워크의 핵심 구성 요소:
1. **멀티 에이전트 오케스트레이션**: 여러 상호 연결된 에이전트를 조율하여 복잡한 BT를 생성. 각 에이전트는 BT 생성의 특정 측면을 담당
2. **게임 엔진 시각 도구 통합**: 생성된 BT를 게임 엔진의 시각적 편집 도구와 통합하여, 프로그래머뿐 아니라 게임 디자이너 등 비기술 인력도 결과를 확인하고 수정 가능
3. **로컬 소형 모델 활용**: 외부 API 의존 없이 표준 개발자 하드웨어에서 실행되는 소형 LLM을 활용하여 비용 절감 및 보안 확보
4. **확장 가능한 아키텍처**: 다양한 게임 엔진에 적응 가능한 설계로 범용적 활용 지원

### 실험 및 결과
산학 협력을 통해 프레임워크의 유효성을 검증하였다. 실험 결과:
- LLM을 통해 생성된 BT가 NPC의 행동 다양성을 크게 향상시킴
- 소형 로컬 모델로도 충분한 품질의 BT 생성이 가능함을 확인
- 게임 엔진 시각 도구와의 통합으로 기술/비기술 스테이크홀더 간 협업 효율성이 향상됨
- 게임 테스트 가능성이 개선되어 QA 과정의 효율성 증대

### 결론
본 연구는 LLM과 에이전트 기반 AI를 활용한 게임 NPC 행동 트리 자동 생성의 실용적 프레임워크를 제시한다. 외부 서비스 없이 로컬 소형 모델로 구동 가능하며, 다양한 게임 엔진에 적응 가능한 확장성 있는 아키텍처를 갖추고 있다. Gameloft과 부쿠레슈티 대학교의 산학 협력을 통해 실제 게임 개발 환경에서의 효용성이 검증되었다.
