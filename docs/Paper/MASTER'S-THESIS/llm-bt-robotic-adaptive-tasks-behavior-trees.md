---
title: "LLM-BT: Performing Robotic Adaptive Tasks Based on Large Language Models and Behavior Trees"
tags: [JIK_REFERENCE, behavior-tree, LLM, robotics, adaptive-tasks, semantic-map, BERT]
---

# LLM-BT: Performing Robotic Adaptive Tasks Based on Large Language Models and Behavior Trees

## 서지 정보
- **저자**: Z. Zhou, Y. Song, H. Zhang, T. Wang, H. Qiao
- **출판**: Proceedings of IEEE International Conference on Robotics and Automation (ICRA), 2024
- **연도**: 2024
- **DOI/arXiv**: arXiv: 2404.05134 / doi: 10.1109/ICRA57147.2024.10610183

## 핵심 요약
LLM과 행동 트리(BT)를 결합하여 환경 변화에 적응적으로 대응하는 로봇 태스크 수행 시스템 LLM-BT를 제안한다. ChatGPT가 태스크의 서술적 단계(descriptive steps)를 추론하고, 객체 인식 알고리즘으로 구축된 시맨틱 맵(semantic map)을 통해 ChatGPT가 환경을 이해할 수 있게 한다. BERT 기반 Parser 모듈이 ChatGPT의 단계 설명을 초기 BT로 변환하고, BT 업데이트 알고리즘이 환경 변화에 따라 BT를 동적으로 확장·수정한다. 외부 방해 요소에 강인하며, 다양한 실용적 시나리오에서 시뮬레이션 검증을 완료했다.

## 주요 기여
1. ChatGPT + BERT + BT Update 알고리즘을 통합한 적응적 로봇 태스크 수행 파이프라인 LLM-BT 제안
2. 시맨틱 맵을 통한 LLM의 환경 이해 능력 강화 및 맥락 기반 BT 생성
3. 환경 변화(새로운 장애물, 객체 위치 변경 등)에 따라 BT를 동적으로 확장하는 BT Update 알고리즘

## 핵심 개념
- **Semantic Map**: 공간 내 객체의 위치, 유형, 속성을 의미론적으로 인코딩한 환경 표현. LLM이 물리 환경을 이해하는 인터페이스
- **BERT-based Parser**: BERT(Bidirectional Encoder Representations from Transformers) 기반으로 LLM의 단계 설명을 BT 노드로 파싱하는 모듈
- **BT Update Algorithm**: 실행 중 환경 변화를 감지하여 새로운 행동을 BT에 추가·수정하는 동적 BT 갱신 알고리즘
- **Adaptive Task Execution**: 사전에 완전히 명세되지 않은 환경에서 실시간 상황 파악을 통해 태스크를 완수하는 능력

## 석사논문과의 연관성
LLM-BT는 석사논문과 매우 유사한 파이프라인 구조를 가진 동시대 연구로, **관련 연구 비교 분석**의 핵심 대상이다. 공통점: LLM이 자연어를 이해하여 BT를 생성하고, 환경 변화에 적응적으로 BT를 업데이트한다. 차이점: LLM-BT는 범용 로봇 조작 태스크에 집중하는 반면, 석사논문은 **교통 시뮬레이션(CARLA/SUMO) 환경에서의 자율주행 에이전트 모델링** 특화 및 **SITL 파이프라인 통합**을 목표로 한다. 또한 석사논문의 Context-Aware BT 생성은 LLM-BT의 시맨틱 맵 기반 환경 이해를 교통 도메인의 시나리오 컨텍스트(시간, 날씨, 교통량 등)로 확장한 개념으로 볼 수 있다.

## 메모
- ICRA 2024 게재 (IEEE 로봇공학 분야 최고 권위 학술대회)
- Beijing Institute of Technology 연구 그룹
- 시뮬레이션 검증으로 현재 실물 로봇 실험은 제한적
- BT 동적 업데이트 알고리즘 설계는 SITL 환경에서의 실시간 BT 수정에 참고 가능
