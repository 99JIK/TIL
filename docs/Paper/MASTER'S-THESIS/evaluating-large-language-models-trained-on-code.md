---
title: "Evaluating Large Language Models Trained on Code"
tags: [JIK_REFERENCE, LLM, code-generation, benchmark, AI, NLP]
---

# Evaluating Large Language Models Trained on Code

## 서지 정보
- **저자**: Mark Chen, Jerry Tworek, Heewoo Jun, Qiming Yuan, et al. (OpenAI)
- **출판**: arXiv preprint
- **연도**: 2021
- **DOI/arXiv**: arXiv: 2107.03374

## 핵심 요약
코드에 특화적으로 학습된 대규모 언어 모델 Codex를 소개하고, 코드 생성 능력을 평가하는 벤치마크 HumanEval을 제안한 논문이다. GitHub의 공개 코드로 파인튜닝된 GPT 기반 Codex는 자연어 설명(docstring)으로부터 Python 함수를 생성하는 태스크에서 기존 모델 대비 획기적인 성능 향상을 보여주었다. HumanEval 벤치마크는 164개의 프로그래밍 문제로 구성되며, pass@k 메트릭으로 코드 생성 성능을 평가한다. Codex는 GitHub Copilot의 기반 모델로, LLM의 코드 생성 분야를 새로운 단계로 끌어올린 기념비적 연구다.

## 주요 기여
1. 코드 생성에 특화된 LLM Codex 개발 및 공개 (GPT 기반, GitHub 코드 파인튜닝)
2. 코드 생성 능력을 측정하는 표준 벤치마크 HumanEval 제안 및 pass@k 평가 메트릭 도입
3. 모델 크기, 학습 데이터, few-shot prompting이 코드 생성 성능에 미치는 영향을 체계적으로 분석

## 핵심 개념
- **Codex**: GitHub 공개 코드로 파인튜닝된 GPT-3 기반 코드 생성 LLM. GitHub Copilot의 기반 모델
- **HumanEval**: 164개의 hand-crafted 프로그래밍 문제로 구성된 코드 생성 벤치마크 데이터셋
- **pass@k**: k개의 샘플을 생성했을 때 적어도 하나가 테스트를 통과할 확률. 코드 생성 성능 지표
- **Few-shot Code Generation**: 몇 개의 예시(입출력 쌍)를 프롬프트에 포함시켜 LLM이 새로운 코드를 생성하도록 유도하는 방법

## 석사논문과의 연관성
Codex 논문은 **LLM이 코드를 생성하는 능력**의 기초를 확립한 연구로, 석사논문에서 LLM이 행동 트리(BT)를 코드 형태(XML, Python, JSON 등)로 자동 생성하는 핵심 메커니즘의 이론적 근거를 제공한다. BT 생성은 본질적으로 구조화된 코드 생성(structured code generation) 태스크이며, Codex가 증명한 LLM의 코드 생성 능력은 LLM-BT 생성의 실현 가능성을 뒷받침한다. HumanEval의 pass@k 평가 방법론은 생성된 BT의 실행 성공률 평가에도 참고할 수 있다.

## 메모
- OpenAI Codex는 이후 GPT-4, GPT-4o 등으로 발전되었으며 코드 생성 능력이 대폭 향상됨
- HumanEval은 현재도 코드 생성 LLM 평가의 표준 벤치마크로 사용됨
- GitHub Copilot, Amazon CodeWhisperer 등 상용 코드 AI 도구의 이론적 기반
- 인용 횟수 5,000회 이상 (2024년 기준)
