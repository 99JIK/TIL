---
title: "Self-Refine: Iterative Refinement with Self-Feedback"
tags: [JIK_REFERENCE, LLM, self-refinement, iterative-improvement, NLP, AI, code-generation]
---

# Self-Refine: Iterative Refinement with Self-Feedback

## 서지 정보
- **저자**: Aman Madaan, Niket Tandon, Prakhar Gupta, Skyler Hallinan, Luyu Gao, Sarah Wiegreffe, Uri Alon, Nouha Dziri, Shrimai Prabhumoye, Yiming Yang, Shashank Gupta, Bodhisattwa Prasad Majumder, Katherine Hermann, Sean Welleck, Amir Yazdanbakhsh, Peter Clark
- **출판**: Advances in Neural Information Processing Systems (NeurIPS), 2023
- **연도**: 2023
- **DOI/arXiv**: arXiv: 2303.17651

## 핵심 요약
LLM이 자신의 출력에 대한 피드백을 스스로 생성하고, 그 피드백을 바탕으로 출력을 반복적으로 개선하는 Self-Refine 방법론을 제안한다. 인간의 글쓰기 개선 과정(초안 작성 → 자가 검토 → 수정 → 반복)에서 영감을 받은 이 방법은, 추가 학습이나 외부 데이터 없이 단일 LLM으로 피드백과 개선을 동시에 수행한다. 코드 최적화, 다이얼로그 생성, 수학 추론, 감정 반전 등 7개의 다양한 태스크에서 평균 20% 성능 향상을 보였다. 첫 번째 출력을 직접 사용하는 것보다 2~3회의 반복 개선만으로도 품질이 크게 향상됨을 실험적으로 입증했다.

## 주요 기여
1. 추가 학습 없이 단일 LLM의 자가 피드백과 반복 개선으로 출력 품질을 향상시키는 Self-Refine 방법 제안
2. 7개 다양한 태스크에서 Self-Refine의 범용적 효과성 입증 (평균 20% 성능 향상)
3. LLM의 1-shot 출력 한계를 극복하는 반복적 자가 개선 패러다임 수립

## 핵심 개념
- **Self-Feedback**: LLM이 자신의 출력을 검토하여 문제점, 개선 방향, 구체적 수정 사항을 자연어로 생성하는 과정
- **Iterative Refinement**: 초기 출력 → 자가 피드백 → 개선된 출력의 사이클을 여러 번 반복하여 점진적으로 품질을 향상시키는 방법
- **Multi-task Generalization**: 코드 최적화, 다이얼로그, 수학 추론 등 다양한 태스크에 동일한 Self-Refine 방법을 적용
- **Without Supervised Training**: 추가적인 파인튜닝이나 강화학습 없이, 추론(inference) 시간에만 반복 개선을 수행

## 석사논문과의 연관성
Self-Refine은 석사논문에서 LLM이 생성한 BT의 **반복적 자가 개선(iterative self-refinement)** 메커니즘 설계의 핵심 이론적 근거를 제공한다. LLM이 생성한 초기 BT가 교통 시나리오의 요구사항을 완전히 충족하지 못할 때, Self-Refine 방식으로 LLM이 자신이 생성한 BT를 검토하고("이 BT에서 차량이 교차로에서 신호를 확인하지 않는 문제가 있다"), 수정된 BT를 생성하는 반복 루프를 구성할 수 있다. Self-Debug(arXiv:2304.05128)와 함께 SITL 시뮬레이션 실행 결과를 피드백으로 사용하는 외부 피드백 강화 Self-Refine 파이프라인 설계에도 활용된다.

## 메모
- NeurIPS 2023 발표. 인용 횟수 급증 중 (2024년 기준 1,000회+)
- 코드: https://github.com/madaan/self-refine
- Self-Refine, Self-Debug, Reflexion 등이 LLM 자가 개선 방법론 흐름을 형성
- GPT-4, GPT-3.5 등 다양한 LLM에서 Self-Refine 효과 검증됨
