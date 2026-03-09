---
title: "GPT-4 Technical Report"
tags: [JIK_REFERENCE, LLM, GPT-4, AI, code-generation, reasoning, NLP]
---

# GPT-4 Technical Report

## 서지 정보
- **저자**: OpenAI (Josh Achiam, Steven Adler, Sandhini Agarwal, et al.)
- **출판**: arXiv preprint
- **연도**: 2023
- **DOI/arXiv**: arXiv: 2303.08774

## 핵심 요약
OpenAI의 대규모 멀티모달 언어 모델 GPT-4의 능력, 안전성, 한계를 기술한 기술 리포트다. GPT-4는 텍스트와 이미지를 입력으로 받아 텍스트를 출력하는 트랜스포머 기반 모델로, 이전 세대(GPT-3.5) 대비 다양한 전문 시험(BAR, SAT, GRE, 의사면허 등)에서 상위 퍼센타일 성능을 달성했다. 특히 복잡한 추론, 코드 생성, 자연어 이해, 지시 따르기(instruction following) 능력에서 획기적인 향상을 보인다. 안전성 측면에서는 RLHF(인간 피드백 강화학습)와 adversarial testing을 통해 유해 출력을 줄이는 방법을 상세히 기술한다.

## 주요 기여
1. 멀티모달(텍스트+이미지) 입력을 처리하는 대규모 LLM GPT-4의 역량 체계적 평가
2. 다양한 전문 분야 벤치마크에서 인간 전문가 수준의 성능 달성 입증
3. RLHF 기반 안전 정렬(alignment) 기법 및 adversarial testing 방법론 공개

## 핵심 개념
- **Multimodal LLM**: 텍스트와 이미지를 동시에 입력으로 처리할 수 있는 대규모 언어 모델
- **RLHF (Reinforcement Learning from Human Feedback)**: 인간 평가자의 선호도를 강화학습 신호로 사용하여 LLM 출력을 정렬하는 기법
- **Instruction Following**: 복잡하고 구체적인 지시를 이해하고 정확히 수행하는 능력
- **Hallucination**: LLM이 사실과 다른 정보를 자신감 있게 생성하는 현상. GPT-4에서도 부분적으로 발생

## 석사논문과의 연관성
GPT-4(또는 동급 LLM)는 석사논문의 **핵심 기술 구성요소**로, 자연어로 표현된 교통 시나리오 맥락(Context)을 이해하고 행동 트리(BT)를 생성하는 역할을 담당한다. GPT-4의 뛰어난 코드 생성 능력과 instruction following 능력은 LLM이 BT XML/JSON을 정확하게 생성할 수 있는 근거가 된다. 또한 GPT-4의 멀티모달 능력은 향후 연구에서 시뮬레이션 환경의 시각적 정보를 LLM에 입력하여 더욱 context-aware한 BT를 생성하는 확장 방향을 제시한다. Hallucination 문제는 LLM 생성 BT의 검증 메커니즘이 필요한 이유이기도 하다.

## 메모
- 기술 리포트 특성상 모델 아키텍처, 파라미터 수 등 세부 사항은 비공개
- GPT-4는 2023년 3월 ChatGPT Plus를 통해 공개됨
- GPT-4V (Vision), GPT-4 Turbo, GPT-4o 등 후속 버전들이 능력을 지속 확장
- LLM 기반 BT 생성 연구(arXiv:2302.12927, arXiv:2401.08089 등)에서 핵심 활용 모델로 사용됨
