---
title: "Evaluating Large Language Models Trained on Code"
authors: ["Mark Chen", "Jerry Tworek", "Heewoo Jun", "Qiming Yuan", "Jared Kaplan", "Greg Brockman", "Ilya Sutskever", "Wojciech Zaremba"]
tags: [JIK_REFERENCE, Large Language Models, Code Generation, Benchmark]
---

# Evaluating Large Language Models Trained on Code

GitHub 공개 코드로 파인튜닝된 GPT 언어 모델 **Codex**를 소개하고, Python 코드 생성 능력을 평가하는 벤치마크 **HumanEval**을 제안한다. GitHub Copilot의 기반 모델이다.

<!-- truncate -->

## 핵심 기여

- **Codex 모델**: GPT-3 기반, GitHub 공개 코드 수억 토큰으로 파인튜닝
- **HumanEval 벤치마크**: docstring → 함수 구현 164개 문제, 함수적 정확성(pass@k)으로 평가
  - Codex: 28.8% (pass@1), GPT-3: 0%, GPT-J: 11.4%
- **반복 샘플링 전략**: 100개 샘플 중 1개 통과 시 문제 해결로 보면 70.2% 달성
- **한계 분석**: 긴 연산 체인, 변수-연산 바인딩에서 취약점 확인
- **사회적 영향 논의**: 코드 생성 AI의 안전·보안·경제적 영향 분석

## 의의

LLM의 코드 생성 능력을 체계적으로 측정한 선구적 연구. HumanEval은 이후 모든 코드 생성 LLM의 표준 벤치마크가 되었다.

Source: [arXiv:2107.03374](https://arxiv.org/abs/2107.03374)
