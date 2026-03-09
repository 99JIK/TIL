---
title: "Self-Refine: Iterative Refinement with Self-Feedback"
tags: [JIK_REFERENCE, LLM, self-refine, code-generation, iterative-refinement, feedback]
---

# Self-Refine: Iterative Refinement with Self-Feedback

## 서지 정보
- **저자**: Aman Madaan, Niket Tandon, Prakhar Gupta, Skyler Halber, Luyu Gao, Sarah Wiegreffe, Uri Alon, Nouha Dziri, Shrimai Prabhumoye, Yiming Yang, et al.
- **출판**: NeurIPS 2023
- **연도**: 2023
- **arXiv**: [2303.17651](https://arxiv.org/abs/2303.17651)

## 핵심 요약

Self-Refine은 LLM이 초기 출력을 생성한 뒤, 동일한 모델이 스스로 피드백을 생성하고, 그 피드백을 바탕으로 출력을 반복적으로 개선하는 프레임워크다. 추가 학습 없이 단일 LLM만으로 작동하며, 코드 생성, 에세이 작성, 수학 추론 등 7개 태스크에서 일관된 성능 향상을 보였다. 사람의 피드백 없이도 반복 정제만으로 품질이 개선된다는 점에서 자율적 LLM 개선의 핵심 패러다임을 제시한다.

## 주요 기여
1. **학습 없는 자기 정제**: 파인튜닝이나 강화학습 없이 inference-time에만 작동하는 반복 개선 루프 제안
2. **단일 모델 활용**: 생성(Generate) → 피드백(Feedback) → 정제(Refine) 세 단계를 동일 LLM이 수행
3. **범용성 검증**: 코드 최적화, 다이얼로그, 감정 반전 등 다양한 태스크에서 평균 20% 이상 성능 향상

## 핵심 개념

- **Generate**: 초기 출력 생성
- **Feedback**: 생성된 출력의 문제점을 LLM 스스로 자연어로 기술
- **Refine**: 피드백을 컨텍스트로 포함해 개선된 출력 재생성
- 위 과정을 stopping condition(품질 만족 또는 최대 반복 횟수)까지 반복

## 석사논문과의 연관성

LLM이 생성한 Behavior Tree가 문법 오류나 논리 오류를 포함할 경우, Self-Refine 방식의 반복 검증-수정 루프를 적용할 수 있다. 시뮬레이터 실행 결과나 문법 검사기의 피드백을 LLM에 재주입해 BT를 자동 수정하는 메커니즘의 이론적 근거로 활용 가능하다.

## 메모
- Self-Debug(Chen et al., 2024)와 함께 LLM 자기 수정 계열의 대표 논문
- 실제로는 GPT-4 기준으로 효과가 크고, 소형 모델에서는 효과가 제한적일 수 있음
