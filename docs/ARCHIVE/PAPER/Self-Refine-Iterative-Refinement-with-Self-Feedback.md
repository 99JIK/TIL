---
title: Self-Refine - Iterative Refinement with Self-Feedback
date: '2023-12-10'
description: 단일 LLM이 자기 자신의 출력에 대해 피드백을 생성하고 이를 반복적으로 개선하는 Self-Refine 프레임워크를 제안한 연구
tags: [JIK Reference, Large Language Model, Iterative Refinement, Self-Feedback, Artificial Intelligence]
authors:
- name: Aman Madaan
- name: Niket Tandon
- name: Prakhar Gupta
- name: Skyler Hallinan
- name: Luyu Gao
- name: Sarah Wiegreffe
- name: Uri Alon
- name: Nouha Dziri
- name: Shrimai Prabhumoye
- name: Yiming Yang
- name: Shashank Gupta
- name: Bodhisattwa Prasad Majumder
- name: Katherine Hermann
- name: Sean Welleck
- name: Amir Yazdanbakhsh
- name: Peter Clark
---

## 논문 정보

- **제목**: Self-Refine: Iterative Refinement with Self-Feedback
- **저자**: Aman Madaan (Carnegie Mellon University), Niket Tandon (Allen Institute for AI), Prakhar Gupta (Carnegie Mellon University), Skyler Hallinan (University of Washington), Luyu Gao (Carnegie Mellon University), Sarah Wiegreffe (Allen Institute for AI), Uri Alon (Carnegie Mellon University), Nouha Dziri (Allen Institute for AI), Shrimai Prabhumoye (NVIDIA), Yiming Yang (Carnegie Mellon University), Shashank Gupta (Allen Institute for AI), Bodhisattwa Prasad Majumder (Allen Institute for AI), Katherine Hermann (Google Research), Sean Welleck (Carnegie Mellon University), Amir Yazdanbakhsh (Google Research), Peter Clark (Allen Institute for AI)
- **학회/저널**: NeurIPS 2023 (Thirty-seventh Conference on Neural Information Processing Systems)
- **발행일**: 2023-12-10
- **DOI**: [arXiv:2303.17651](https://arxiv.org/abs/2303.17651)
- **주요 연구 내용**: 단일 LLM을 생성기, 피드백 제공자, 개선기로 동시에 활용하여 초기 출력을 반복적으로 개선하는 Self-Refine 프레임워크 제안
- **주요 결과 및 결론**: 7개의 다양한 태스크에서 평균 약 20%의 절대적 성능 향상을 달성하며, 추가 학습 데이터나 강화학습 없이 GPT-4와 같은 최신 모델의 성능도 테스트 시간에 추가로 향상 가능함을 입증
- **기여점**: 별도의 학습 없이 단일 LLM만으로 출력 품질을 반복적으로 개선할 수 있는 범용적 프레임워크를 제안하여, LLM의 활용 패러다임에 새로운 방향을 제시
<!--truncate-->

## 요약

### 초록
인간이 글을 작성할 때 초안을 반복적으로 수정하는 것처럼, 대규모 언어 모델(LLM)도 첫 번째 시도에서 항상 최선의 출력을 생성하지는 않는다. 이러한 관찰에 기반하여 본 논문은 LLM의 초기 출력을 반복적인 피드백과 개선을 통해 향상시키는 접근법인 Self-Refine을 제안한다. 핵심 아이디어는 LLM을 사용하여 초기 출력을 생성한 후, 동일한 LLM이 자신의 출력에 대한 피드백을 제공하고 이를 사용하여 스스로를 개선하는 것을 반복하는 것이다. Self-Refine은 지도 학습 데이터, 추가 학습, 강화학습을 필요로 하지 않으며, 단일 LLM을 생성기, 개선기, 피드백 제공자로 활용한다.

### 서론
LLM은 다양한 자연어 처리 태스크에서 뛰어난 성능을 보여주고 있지만, 한 번의 생성으로 최적의 결과를 얻기 어려운 경우가 많다. 인간의 글쓰기 과정에서 초안 작성, 검토, 수정의 반복적 과정이 품질 향상에 핵심적인 역할을 하듯이, LLM의 출력도 유사한 반복적 개선 과정을 통해 향상될 수 있다. 기존 접근법들은 별도의 피드백 모델 학습이나 강화학습을 필요로 했으나, Self-Refine은 단일 LLM만으로 이 전체 과정을 수행할 수 있음을 보인다.

### 모델 아키텍처 / 방법론
Self-Refine은 세 가지 핵심 구성요소로 이루어진 반복적 프레임워크이다:

1. **초기 생성(Initial Generation)**: 주어진 입력에 대해 LLM이 초기 출력 y0를 생성한다.

2. **피드백(Feedback)**: 동일한 LLM이 생성된 출력을 검토하고, 구체적인 개선 포인트를 포함하는 피드백 fb를 생성한다. 피드백은 태스크에 따라 다양한 차원(정확성, 유창성, 적절성 등)을 포함한다.

3. **개선(Refine)**: LLM이 원래 입력, 이전 출력, 피드백을 모두 참고하여 개선된 출력 yt+1을 생성한다.

이 FEEDBACK -> REFINE -> FEEDBACK 루프는 피드백이 더 이상 개선이 필요하지 않다고 판단하거나, 미리 정해진 최대 반복 횟수에 도달할 때까지 반복된다. 중요한 점은 전체 과정에서 추가적인 학습이나 외부 모델이 필요하지 않으며, 프롬프트 엔지니어링만으로 동작한다는 것이다.

### 실험 및 결과
Self-Refine은 GPT-3.5, ChatGPT, GPT-4를 사용하여 7개의 다양한 태스크에서 평가되었다:

- **리뷰 재작성(Review Rewriting)**: 논문 리뷰의 품질 개선
- **두문자어 생성(Acronym Generation)**: 창의적 두문자어 생성
- **스토리 생성(Story Generation)**: 이야기의 일관성과 흥미 향상
- **코드 최적화(Code Rewriting)**: 코드의 효율성 개선
- **응답 생성(Response Generation)**: 대화 응답의 적절성 향상
- **제약 조건 생성(Constrained Generation)**: 제약 조건을 만족하는 텍스트 생성
- **독성 제거(Toxicity Removal)**: 텍스트에서 유해 표현 제거

모든 평가 태스크에서 Self-Refine으로 생성된 출력이 동일한 LLM의 단일 생성 출력보다 인간 평가자와 자동 메트릭 모두에서 선호되었다. 평균적으로 약 20%의 절대적 성능 향상을 달성했으며, 태스크에 따라 5%에서 40%까지의 향상 폭을 보였다. 특히 GPT-4와 같은 최신 모델에서도 추가적인 성능 향상이 가능함을 입증했다.

### 결론
Self-Refine은 별도의 학습 없이 단일 LLM의 출력 품질을 반복적으로 개선할 수 있는 간단하면서도 효과적인 프레임워크이다. 이 접근법은 LLM이 자신의 출력을 비판적으로 평가하고 개선할 수 있는 능력을 갖추고 있음을 보여주며, 다양한 태스크에 범용적으로 적용 가능하다. Self-Refine은 추가 학습 비용 없이 테스트 시간에 성능을 향상시킬 수 있다는 점에서 실용적 가치가 높으며, LLM 활용의 새로운 패러다임을 제시한다.
