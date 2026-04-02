---
title: GPT-4 Technical Report
authors:
- name: Sam Altman
- name: Greg Brockman
- name: Ilya Sutskever
tags: [JIK Reference, Large Language Model, Multimodal, Benchmark]
---

# GPT-4 Technical Report

<!--truncate-->
OpenAI가 개발한 대규모 멀티모달 언어 모델 **GPT-4**의 기술 보고서. 이미지와 텍스트를 입력으로 받아 텍스트를 출력하며, 다양한 전문적·학술적 벤치마크에서 인간 수준의 성능을 달성한다.

<!-- truncate -->

## 핵심 기여

- **멀티모달 입력**: 텍스트·이미지를 동시에 입력으로 처리 (Vision 기능)
- **전문적 수준의 성능**:
  - 모의 변호사 시험 상위 10% 수준
  - 의학·법학·수학 등 다양한 전문 시험에서 고득점
- **RLHF 기반 정렬**: 사실성 및 바람직한 행동 준수를 위한 사후 훈련 적용
- **스케일 예측**: 1/1,000 컴퓨팅으로 학습된 소규모 모델로 GPT-4 성능 일부 예측 가능함을 실증
- **안전성 평가**: TruthfulQA, RealToxicityPrompts 등 안전 벤치마크 결과 포함

## 의의

현대 LLM 연구의 기준점이 된 모델. BT 생성, 코드 생성, 시나리오 명세 등 다양한 자동화 연구에서 GPT-4를 베이스라인으로 활용한다.

Source: [arXiv:2303.08774](https://arxiv.org/abs/2303.08774)
