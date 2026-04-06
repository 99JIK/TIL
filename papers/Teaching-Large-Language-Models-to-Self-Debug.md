---
title: Teaching Large Language Models to Self-Debug
date: '2023-04-11'
description: LLM이 생성한 코드를 스스로 실행·분석·수정하는 Self-Debugging 프레임워크를 제안하여 코드 생성 정확도를 크게 향상
tags: [JIK Reference, Large Language Model, Code Generation, Debugging]
authors:
- name: Xinyun Chen
- name: Maxwell Lin
- name: Nathanael Schärli
- name: Denny Zhou
---

## 논문 정보

- **제목**: Teaching Large Language Models to Self-Debug
- **저자**: Xinyun Chen (Google DeepMind), Maxwell Lin (UC Berkeley), Nathanael Schärli (Google DeepMind), Denny Zhou (Google DeepMind)
- **학회/저널**: ICLR 2024 (International Conference on Learning Representations)
- **발행일**: 2023-04-11 (arXiv), 2024 (ICLR)
- **DOI**: [10.48550/arXiv.2304.05128](https://doi.org/10.48550/arXiv.2304.05128)
- **주요 연구 내용**: LLM이 생성한 코드를 스스로 실행하고, 실행 결과를 분석하며, 자연어 설명을 통해 오류를 파악·수정하는 Self-Debugging 프레임워크 제안
- **주요 결과 및 결론**: Spider(text-to-SQL)에서 2-3%, TransCoder(C++-to-Python)와 MBPP(text-to-Python)에서 최대 12%의 정확도 향상을 달성하며, 10배 이상의 후보 프로그램을 생성하는 베이스라인과 동등하거나 우수한 성능
- **기여점**: 추가 학습 데이터 없이 인퍼런스 단계에서만 동작하는 자기 수정 메커니즘을 제안하고, 러버 덕 디버깅 개념을 LLM에 적용
<!--truncate-->

## 요약

### 초록
본 논문은 대규모 언어 모델이 자신이 예측한 프로그램을 few-shot 시연을 통해 디버깅하도록 학습시키는 Self-Debugging 기법을 제안한다. 특히, Self-Debugging은 LLM에게 러버 덕 디버깅(rubber duck debugging)을 수행하도록 가르친다. 즉, 코드 정확성에 대한 인간 피드백이나 오류 메시지 없이도, 모델이 실행 결과를 조사하고 생성된 코드를 자연어로 설명함으로써 스스로 오류를 식별할 수 있다.

### 서론
LLM 기반 코드 생성은 최근 큰 발전을 이루었으나, 생성된 코드에 여전히 오류가 포함되는 경우가 빈번하다. 인간 프로그래머는 코드를 작성한 후 테스트하고 디버깅하는 반복적 과정을 거치지만, 기존 LLM 코드 생성 시스템은 한 번의 시도로 최종 코드를 출력한다. 본 연구는 이러한 한계를 극복하기 위해, LLM이 인간과 유사한 디버깅 과정을 수행하도록 하는 방법을 제안한다.

### 모델 아키텍처 / 방법론
Self-Debugging은 두 가지 핵심 전략으로 구성된다:

1. **Simple Feedback**: 코드 실행 후 발생하는 오류 메시지를 그대로 LLM에 피드백하여 수정을 유도
2. **Code Explanation (Rubber Duck Debugging)**: LLM이 자신이 생성한 코드를 자연어로 설명하도록 하여, 설명 과정에서 논리적 오류를 스스로 발견하고 수정. 인간 피드백이나 오류 메시지 없이도 동작

전체 과정은 생성 → 실행 → 오류 분석(또는 자연어 설명) → 수정의 반복 루프로 진행된다. 추가 학습 데이터가 필요 없으며, few-shot 프롬프팅을 통해 인퍼런스 단계에서만 동작한다.

평가 모델: code-davinci-002, gpt-3.5-turbo, gpt-4, StarCoder 등

### 실험 및 결과
세 가지 주요 코드 생성 벤치마크에서 평가하였다:
- **Spider (text-to-SQL)**: Self-Debugging을 통해 2-3%의 정확도 향상 달성
- **TransCoder (C++-to-Python)**: 최대 12%의 정확도 향상 달성
- **MBPP (text-to-Python)**: 최대 12%의 정확도 향상 달성
- **효율성**: 10배 이상의 후보 프로그램을 생성하는 베이스라인 방법과 동등하거나 우수한 성능을 달성하여, 실패한 예측을 재활용하고 피드백 메시지를 통합함으로써 높은 샘플 효율성을 보임

### 결론
Self-Debugging은 Self-Refine, Reflexion과 함께 LLM의 자기 수정(self-improvement) 패러다임을 확립한 핵심 논문이다. 추가 학습 데이터 없이 인퍼런스 단계에서만 동작하는 효율적인 접근법으로, 코드 생성뿐 아니라 BT 생성·검증 루프 설계 등 다양한 자동화 작업에 직접 적용 가능한 방법론이다. 러버 덕 디버깅이라는 직관적 개념을 LLM에 성공적으로 적용한 점에서도 의의가 크다.
