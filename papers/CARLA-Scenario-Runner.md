---
title: CARLA Scenario Runner
date: '2019-01-01'
description: CARLA 시뮬레이터를 위한 교통 시나리오 정의 및 실행 엔진으로 자율주행 평가의 표준 도구
tags: [JIK Reference, Software Testing, Test Generation, Artificial Intelligence]
authors: []
---

## 논문 정보

- **제목**: CARLA Scenario Runner
- **저자**: CARLA 시뮬레이터 개발팀 (오픈소스 커뮤니티)
- **학회/저널**: GitHub 오픈소스 프로젝트
- **발행일**: 2019 (초기 릴리스, 지속 업데이트 중)
- **DOI**: [GitHub - carla-simulator/scenario_runner](https://github.com/carla-simulator/scenario_runner)
- **주요 연구 내용**: CARLA 시뮬레이터 환경에서 교통 시나리오를 정의하고 실행하는 엔진으로, Python API 및 OpenSCENARIO 표준을 지원
- **주요 결과 및 결론**: CARLA Autonomous Driving Leaderboard의 공식 평가 엔진으로 활용되며, 자율주행 연구의 표준 시나리오 테스팅 플랫폼으로 자리잡음
- **기여점**: 표준화된 시나리오 정의 형식과 실행 환경을 제공하여 자율주행 알고리즘의 재현 가능한 평가를 지원
<!--truncate-->

## 요약

### 초록
CARLA Scenario Runner는 CARLA 오픈소스 자율주행 시뮬레이터를 위한 교통 시나리오 정의 및 실행 엔진이다. Python API 또는 OpenSCENARIO 표준으로 작성된 시나리오를 CARLA 환경에서 실행하며, CARLA Autonomous Driving Leaderboard의 공식 평가 엔진으로 활용된다. 다양한 표준 교통 시나리오를 기본 제공하고 사용자 정의 에이전트를 투입하여 성능을 평가할 수 있다.

### 서론
자율주행 시스템의 개발과 검증에는 다양한 교통 시나리오에서의 체계적인 테스트가 필수적이다. 실제 도로 환경에서의 테스트는 비용과 안전 문제가 있어 시뮬레이션 기반 평가가 중요하다. CARLA Scenario Runner는 이러한 시뮬레이션 기반 시나리오 테스트를 표준화하고 자동화하기 위해 개발되었다.

### 모델 아키텍처 / 방법론
CARLA Scenario Runner의 핵심 기능과 아키텍처는 다음과 같다:

1. **시나리오 정의**: Python 클래스 또는 OpenSCENARIO 1.x/2.0 XML 파일로 교통 시나리오를 기술한다. 이를 통해 프로그래밍 방식과 표준 규격 방식 모두를 지원한다.
2. **시나리오 실행 엔진**: 정의된 시나리오를 CARLA 환경에서 로드하고 실행하는 핵심 엔진이다. 렌더링/비렌더링 모드를 지원하며, Docker 배포도 가능하다.
3. **표준 시나리오 내장**: 교차로 충돌, 보행자 돌발, 차선 이탈 등 자율주행 테스트에 필요한 표준 시나리오를 기본 제공한다.
4. **에이전트 연동**: 사용자 정의 자율주행 에이전트를 시나리오에 투입하여 성능을 평가할 수 있다. CARLA Challenge 및 Leaderboard 평가를 공식 지원한다.

| 항목 | 내용 |
|------|------|
| 언어 | Python (85.7%), Java, XSLT |
| 시나리오 포맷 | Python API, OpenSCENARIO 1.x/2.0 |
| 라이선스 | MIT |
| 지원 버전 | CARLA 0.9.2 ~ 0.9.16 |

### 실험 및 결과
CARLA Scenario Runner는 651개 이상의 GitHub 스타와 423개의 포크를 보유하며, 614개 이상의 커밋이 이루어진 활발한 오픈소스 프로젝트이다. CARLA Autonomous Driving Leaderboard에서 전 세계 연구팀의 자율주행 알고리즘 성능을 표준화된 방식으로 비교·평가하는 데 사용되고 있다. 최신 버전은 CARLA v0.9.16을 지원한다(2025년 9월 릴리스).

### 결론
CARLA Scenario Runner는 CARLA 기반 자율주행 시나리오 테스팅의 사실상 표준 실행 엔진으로 자리잡았다. BT 기반 시나리오 생성 연구의 검증 플랫폼으로도 활용되며, OpenSCENARIO 표준 지원을 통해 산업계와 학계 간의 시나리오 호환성을 확보하고 있다. 자율주행 연구에서 재현 가능한 평가 환경을 제공하는 핵심 인프라이다.
