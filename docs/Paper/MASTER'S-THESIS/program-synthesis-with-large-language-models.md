---
title: "Program Synthesis with Large Language Models"
tags: [JIK_REFERENCE, LLM, code-generation, program-synthesis, AI, benchmark]
---

# Program Synthesis with Large Language Models

## 서지 정보
- **저자**: Jacob Austin, Augustus Odena, Maxwell Nye, Maarten Bosma, Henryk Michalewski, David Dohan, Ellen Jiang, Carrie Cai, Michael Terry, Quoc Le, Charles Sutton
- **출판**: arXiv preprint
- **연도**: 2021
- **DOI/arXiv**: arXiv: 2108.07732

## 핵심 요약
대규모 언어 모델(LLM)의 일반적인 프로그래밍 언어에서의 프로그램 합성(Program Synthesis) 능력을 탐구한 논문이다. 244M에서 137B 파라미터까지 다양한 크기의 모델을 MBPP(Mostly Basic Programming Problems)와 MathQA-Python 두 가지 새로운 벤치마크에서 평가했다. 코드 데이터셋 없이도 대형 모델이 few-shot 학습만으로 MBPP 문제의 59.6%를 해결할 수 있음을 보였으며, 코드 데이터로 파인튜닝 시 성능이 약 10% 추가 향상되었다. 또한 LLM이 코드에 대한 대화(code dialogue)에 참여하고 인간 피드백을 통해 점진적으로 코드를 개선할 수 있음을 실험했다.

## 주요 기여
1. LLM의 범용 프로그래밍 언어 합성 능력을 평가하는 MBPP 벤치마크 데이터셋 공개
2. 모델 크기와 코드 생성 성능 간 log-linear 스케일링 법칙 발견
3. 코드 대화(code dialogue)를 통한 인간-LLM 협력적 코드 개선 가능성 실험적 입증

## 핵심 개념
- **Program Synthesis**: 자연어 명세나 예시 입출력으로부터 프로그램 코드를 자동으로 생성하는 AI 태스크
- **MBPP (Mostly Basic Programming Problems)**: 974개의 입문자 수준 Python 프로그래밍 문제. 각 문제는 설명, 코드, 테스트 케이스로 구성
- **MathQA-Python**: 23,914개의 수학 문제를 Python 코드로 풀도록 설계된 벤치마크
- **Scaling Law**: 모델 파라미터 수가 증가할수록 성능이 예측 가능한 방식으로 향상되는 법칙 (log-linear 관계)

## 석사논문과의 연관성
이 논문은 석사논문에서 LLM이 **BT 구조 코드를 합성**하는 작업의 이론적 근거를 강화한다. BT 생성은 자연어 시나리오 설명으로부터 BT 코드(XML, JSON, Python 등)를 합성하는 프로그램 합성 문제로 볼 수 있으며, 이 논문이 보여준 LLM의 범용 프로그램 합성 능력은 도메인 특화 BT 코드 생성의 가능성을 뒷받침한다. 특히 스케일링 법칙 발견은 더 큰 LLM을 사용할수록 더 복잡한 BT를 정확하게 생성할 가능성이 높다는 근거로 활용된다. 코드 대화 실험은 LLM 기반 BT 생성에서 사용자 피드백을 통한 반복적 개선(iterative refinement)의 가능성을 시사한다.

## 메모
- Google Research 주도 연구. 이후 Codex(OpenAI), AlphaCode(DeepMind) 등의 연구와 함께 LLM 코드 생성 분야의 기반 논문으로 위치
- MBPP 데이터셋은 현재도 코드 생성 LLM 평가에 널리 사용됨
- 인용 횟수 2,000회 이상 (2024년 기준)
