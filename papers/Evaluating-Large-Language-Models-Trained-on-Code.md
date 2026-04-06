---
title: Evaluating Large Language Models Trained on Code
date: '2021-07-07'
description: GitHub 코드로 파인튜닝된 GPT 모델 Codex를 소개하고 코드 생성 벤치마크 HumanEval을 제안한 선구적 연구
tags: [JIK Reference, Large Language Model, Code Generation, Benchmark]
authors:
- name: Mark Chen
- name: Jerry Tworek
- name: Heewoo Jun
- name: Qiming Yuan
- name: Jared Kaplan
- name: Greg Brockman
- name: Ilya Sutskever
- name: Wojciech Zaremba
---

## 논문 정보

- **제목**: Evaluating Large Language Models Trained on Code
- **저자**: Mark Chen, Jerry Tworek, Heewoo Jun, Qiming Yuan, Henrique Ponde de Oliveira Pinto, Jared Kaplan, Harri Edwards, Yuri Burda, Nicholas Joseph, Greg Brockman, Alex Ray, Raul Puri, Gretchen Krueger, Michael Petrov, Heidy Khlaaf, Girish Sastry, Pamela Mishkin 외 다수 (OpenAI)
- **학회/저널**: arXiv 프리프린트
- **발행일**: 2021-07-07
- **DOI**: [arXiv:2107.03374](https://arxiv.org/abs/2107.03374)
- **주요 연구 내용**: GitHub 공개 코드로 파인튜닝된 GPT 언어 모델 Codex를 소개하고, docstring에서 함수를 생성하는 능력을 평가하는 HumanEval 벤치마크 제안
- **주요 결과 및 결론**: Codex는 HumanEval에서 pass@1 28.8%를 달성하였으며 (GPT-3: 0%, GPT-J: 11.4%), 반복 샘플링(100개)으로 70.2% 달성
- **기여점**: LLM의 코드 생성 능력을 체계적으로 측정한 선구적 연구로, HumanEval은 이후 모든 코드 생성 LLM의 표준 벤치마크로 자리잡음. GitHub Copilot의 기반 모델
<!--truncate-->

## 요약

### 초록
본 논문은 GitHub의 공개 코드로 파인튜닝된 GPT 언어 모델인 Codex를 소개하고, 그 Python 코드 생성 능력을 평가한다. docstring에서 프로그램을 합성하는 함수적 정확성을 측정하는 새로운 벤치마크 HumanEval을 제안한다. Codex는 HumanEval 문제의 28.8%를 올바르게 해결하며, 이는 GPT-3의 0%와 GPT-J의 11.4%를 크게 상회한다. 또한 문제당 100개의 샘플을 생성하여 하나라도 통과하면 해결로 간주하는 반복 샘플링 전략에서는 70.2%의 성공률을 달성한다.

### 서론
대규모 언어 모델(LLM)이 자연어 처리에서 놀라운 성과를 보이면서, 이를 프로그래밍 코드 생성에 활용하려는 시도가 증가하고 있다. 그러나 기존 LLM은 코드 생성에 특화되지 않아 성능이 제한적이었다. 본 연구는 GitHub의 방대한 공개 코드 저장소를 활용하여 LLM을 코드 도메인에 특화시키고, 생성된 코드의 함수적 정확성을 체계적으로 평가하는 방법론을 제시한다.

### 모델 아키텍처 / 방법론
Codex와 HumanEval의 핵심 설계는 다음과 같다:

1. **Codex 모델**: GPT-3 아키텍처를 기반으로 GitHub의 공개 코드 수억 토큰으로 파인튜닝한 모델이다. 코드 도메인에 특화된 언어 이해와 생성 능력을 갖추고 있다.
2. **HumanEval 벤치마크**: 164개의 수작업 프로그래밍 문제로 구성되며, 각 문제는 함수 시그니처와 docstring이 주어지고 모델이 함수 본체를 생성해야 한다. 단위 테스트를 통한 함수적 정확성(pass@k)으로 평가한다.
3. **평가 메트릭 (pass@k)**: k개의 코드 샘플을 생성하여 하나라도 모든 단위 테스트를 통과하면 해결로 간주하는 메트릭이다. pass@1은 단일 시도 성공률, pass@100은 100회 시도 중 1회 이상 성공률을 나타낸다.
4. **반복 샘플링 전략**: 모델의 확률적 특성을 활용하여 다수의 후보 코드를 생성하고 테스트를 통해 정답을 선별하는 전략이다.

### 실험 및 결과
주요 실험 결과는 다음과 같다:

- **pass@1 성능**: Codex 28.8%, GPT-3 0%, GPT-J 11.4%로 Codex가 크게 우수
- **반복 샘플링**: 문제당 100개 샘플 생성 시 70.2% 성공률 달성
- **한계점 분석**: 긴 연산 체인(chain of operations)에서의 오류, 변수-연산 바인딩(variable-operation binding)에서의 취약점 확인
- **사회적 영향**: 코드 생성 AI의 안전, 보안(악성 코드 생성 가능성), 경제적 영향(개발자 생산성 변화), 공정성 등에 대한 포괄적 분석 수행

### 결론
Codex는 LLM의 코드 생성 능력을 체계적으로 측정하고 개선한 선구적 연구이다. HumanEval 벤치마크는 이후 CodeLlama, StarCoder, GPT-4 등 모든 코드 생성 LLM의 표준 평가 도구로 자리잡았다. Codex는 GitHub Copilot의 기반 모델로 실용화되어, LLM 기반 코드 생성의 상용화 가능성을 최초로 입증하였다. 또한 코드 생성 AI의 사회적 영향에 대한 체계적 논의를 통해 책임 있는 AI 개발의 중요성을 강조하였다.
