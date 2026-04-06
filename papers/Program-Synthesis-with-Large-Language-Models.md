---
title: Program Synthesis with Large Language Models
date: '2021-08-16'
description: 대규모 언어 모델의 프로그램 합성 능력을 체계적으로 평가하고 MBPP 및 MathQA-Python 벤치마크를 제안한 연구
tags: [JIK Reference, Large Language Model, Program Synthesis, Python, Mostly Basic Python Programming, MathQA]
authors:
- name: Jacob Austin
- name: Augustus Odena
- name: Maxwell Nye
- name: Maarten Bosma
- name: Henryk Michalewski
- name: David Dohan
- name: Ellen Jiang
- name: Carrie Cai
- name: Michael Terry
- name: Quoc Le
- name: Charles Sutton
---

## 논문 정보

- **제목**: Program Synthesis with Large Language Models
- **저자**: Jacob Austin (Google Research), Augustus Odena (Google Research), Maxwell Nye (Google Research), Maarten Bosma (Google Research), Henryk Michalewski (Google Research / University of Warsaw), David Dohan (Google Research), Ellen Jiang (Google Research), Carrie Cai (Google Research), Michael Terry (Google Research), Quoc Le (Google Research), Charles Sutton (Google Research)
- **학회/저널**: arXiv Preprint
- **발행일**: 2021-08-16
- **DOI**: [arXiv:2108.07732](https://arxiv.org/abs/2108.07732)
- **주요 연구 내용**: 244M에서 137B 파라미터까지의 대규모 언어 모델(LaMDA PT)의 프로그램 합성 능력을 MBPP 및 MathQA-Python 벤치마크에서 few-shot 및 fine-tuning 방식으로 체계적으로 평가
- **주요 결과 및 결론**: 프로그램 합성 성능이 모델 크기에 따라 로그-선형적으로 증가하며, 최대 모델이 few-shot으로 MBPP 태스크의 59.6%를 해결하고, fine-tuning으로 약 10%p 추가 향상 가능하며, 인간 피드백으로 오류율을 절반으로 줄일 수 있음을 입증
- **기여점**: LLM 기반 프로그램 합성의 가능성과 한계를 체계적으로 분석하고, 프로그램 합성 연구를 위한 두 가지 새로운 벤치마크(MBPP, MathQA-Python)를 제공
<!--truncate-->

## 요약

### 초록
본 논문은 현재 세대의 대규모 언어 모델(LLM)이 범용 프로그래밍 언어에서의 프로그램 합성에 어느 정도까지 활용될 수 있는지 탐구한다. 대규모 웹 텍스트 코퍼스(오픈소스 코드, 프로그래밍 웹사이트, 튜토리얼 포함)로 학습된 언어 모델이 자연어 설명으로부터 짧은 Python 프로그램을 합성하는 능력을 평가한다. 244M에서 137B 파라미터까지의 모델 컬렉션을 두 가지 새로운 벤치마크인 MBPP(Mostly Basic Programming Problems)와 MathQA-Python에서 few-shot 및 fine-tuning 방식으로 평가한다.

### 서론
프로그램 합성(Program Synthesis)은 자연어 명세로부터 올바른 프로그램을 자동으로 생성하는 오래된 AI 연구 분야이다. 최근 대규모 언어 모델이 다양한 자연어 처리 태스크에서 뛰어난 성능을 보이면서, 이 모델들의 코드 생성 능력에 대한 관심이 높아지고 있다. 기존 연구들은 주로 도메인 특화 언어(DSL)에서의 프로그램 합성에 초점을 맞추었으나, 본 논문은 Python과 같은 범용 프로그래밍 언어에서의 프로그램 합성 능력을 체계적으로 평가한다. 이를 위해 입문 수준 프로그래머가 풀 수 있는 프로그래밍 문제 974개로 구성된 MBPP 벤치마크와, 복잡한 수학적 텍스트로부터 코드를 합성하는 23,914개 문제의 MathQA-Python 벤치마크를 새롭게 제안한다.

### 모델 아키텍처 / 방법론
본 연구의 평가 방법론은 다음과 같다:

1. **모델**: Google의 LaMDA PT(Pre-Trained) 모델을 사용하며, 244M, 422M, 1B, 2B, 4B, 8B, 68B, 137B 파라미터의 다양한 크기에서 평가한다. 이 모델들은 대규모 웹 텍스트 코퍼스로 사전 학습되었다.

2. **벤치마크**:
   - **MBPP (Mostly Basic Programming Problems)**: 974개의 프로그래밍 문제로 구성되며, 각 문제는 자연어 태스크 설명, 함수 솔루션, 3개의 자동화된 테스트 케이스를 포함한다. 입문 수준 프로그래머가 풀 수 있는 수준으로 설계되었다.
   - **MathQA-Python**: 기존 MathQA 벤치마크를 Python 버전으로 변환한 23,914개 문제의 데이터셋으로, 복잡한 텍스트로부터 코드를 합성하는 능력을 평가한다.

3. **평가 방식**:
   - **Few-shot**: 소수의 예제만 프롬프트로 제공하여 코드를 생성하는 방식
   - **Fine-tuning**: 데이터셋의 일부를 사용하여 모델을 추가 학습하는 방식
   - **인간 피드백**: 대화 형식의 자연어 피드백을 통해 모델의 코드를 수정하는 방식

4. **의미적 기반(Semantic Grounding)**: 모델이 프로그램의 실행 결과를 예측하도록 fine-tuning하여, 코드의 의미적 이해 능력을 평가한다.

### 실험 및 결과
주요 실험 결과는 다음과 같다:

- **스케일링 법칙**: 프로그램 합성 성능이 모델 크기에 따라 로그-선형적(log-linearly)으로 증가하며, 이 경향은 MBPP와 MathQA-Python 모두에서 일관되게 관찰된다.

- **Few-shot 성능**: 최대 모델(137B)이 잘 설계된 프롬프트를 사용한 few-shot 학습으로 MBPP 태스크의 59.6%를 해결한다.

- **Fine-tuning 효과**: 데이터셋의 일부로 fine-tuning하면 대부분의 모델 크기에서 약 10%p의 성능 향상을 달성한다. MathQA-Python에서는 최대 fine-tuned 모델이 83.8%의 정확도를 달성한다.

- **인간 피드백 효과**: 대화 형식의 자연어 피드백을 통해 모델의 초기 예측 대비 오류율을 절반으로 줄일 수 있다.

- **의미적 기반의 한계**: 특정 입력이 주어졌을 때 프로그램의 실행 결과를 예측하는 것은 여전히 이들 모델에게 중요한 과제로 남아 있으며, 이는 모델이 코드의 표면적 패턴은 학습하지만 의미적 실행 흐름에 대한 이해는 부족함을 시사한다.

- **오류 분석**: 모델이 생성하는 오류의 유형을 체계적으로 분석하여, 어떤 유형의 프로그램이 가장 생성하기 어려운지, 모델이 어떻게 개선될 수 있는지에 대한 통찰을 제공한다.

### 결론
대규모 언어 모델은 범용 프로그래밍 언어에서의 프로그램 합성에 상당한 잠재력을 보여주며, 모델 크기의 증가에 따라 성능이 체계적으로 향상된다. Few-shot 학습만으로도 의미 있는 수준의 프로그램 합성이 가능하며, fine-tuning과 인간 피드백을 통해 추가적인 성능 향상을 달성할 수 있다. 그러나 프로그램 실행 결과 예측과 같은 의미적 기반(semantic grounding) 능력에는 여전히 한계가 존재한다. 본 연구에서 제안한 MBPP 벤치마크는 이후 코드 생성 모델 연구에서 널리 활용되는 표준 벤치마크로 자리잡았다.
