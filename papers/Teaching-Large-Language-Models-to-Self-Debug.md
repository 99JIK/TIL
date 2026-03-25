---
title: "Teaching Large Language Models to Self-Debug"
authors: ["Xinyun Chen", "Maxwell Lin", "Nathanael Schärli", "Denny Zhou"]
tags: [JIK_REFERENCE, Large Language Models, Code Generation, Debugging]
---

# Teaching Large Language Models to Self-Debug

LLM이 생성한 코드를 스스로 실행하고 결과를 보며 오류를 수정하는 **Self-Debugging** 프레임워크를 제안한다. Google DeepMind 연구진의 성과.

<!-- truncate -->

## 핵심 기여

- **Self-Debugging 프레임워크**: LLM이 코드를 생성 → 실행 → 오류 메시지 분석 → 수정의 루프를 자율적으로 반복
- **두 가지 디버깅 전략**:
  - **Simple Feedback**: 오류 메시지를 그대로 LLM에 피드백
  - **Code Explanation**: LLM이 자신의 코드를 자연어로 설명하며 오류 파악
- **성능 향상**: 코드 생성 정확도를 단일 샘플 대비 유의미하게 향상
- **데이터 효율성**: 추가 학습 데이터 없이 인퍼런스 단계에서만 동작

## 의의

Self-Refine, Reflexion과 함께 LLM의 자기 수정(self-improvement) 패러다임을 확립한 핵심 논문. BT 생성·검증 루프 설계에 직접 적용 가능한 방법론이다.

Source: [Semantic Scholar](https://www.semanticscholar.org/paper/9e3c493fb09dcd61bb05e8c5659f23327b7b6340)
