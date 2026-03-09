---
title: "Teaching Large Language Models to Self-Debug"
tags: [JIK_REFERENCE, LLM, code-generation, self-debug, AI, iterative-improvement]
---

# Teaching Large Language Models to Self-Debug

## 서지 정보
- **저자**: Xinyun Chen, Maxwell Lin, Nathanael Schärli, Denny Zhou
- **출판**: Proceedings of the International Conference on Learning Representations (ICLR), 2024
- **연도**: 2024 (arXiv: 2023)
- **DOI/arXiv**: arXiv: 2304.05128

## 핵심 요약
LLM이 자신이 생성한 코드의 오류를 스스로 감지하고 수정하는 Self-Debugging 방법을 제안한다. 핵심 아이디어는 "rubber duck debugging"—외부 피드백(오류 메시지, 테스트 결과) 없이도 LLM이 코드를 자연어로 설명함으로써 버그를 스스로 발견하는 능력이다. Spider(텍스트→SQL), TransCoder(C++→Python 번역), MBPP(텍스트→Python)에서 최고 성능을 달성했으며, 테스트 케이스가 있는 경우 실행 결과를 피드백으로 활용하면 최대 12% 성능 향상을 보였다. 실패한 예측을 재활용하여 샘플 효율성도 크게 개선했다.

## 주요 기여
1. LLM이 코드를 자연어로 설명하는 과정에서 버그를 자동으로 감지하는 "rubber duck debugging" 개념의 LLM 적용
2. 실행 결과(오류 메시지, 테스트 통과 여부)를 피드백으로 활용하는 외부 피드백 기반 Self-Debugging 구현
3. 여러 코드 생성 벤치마크(Spider, TransCoder, MBPP)에서 SOTA 달성 및 샘플 효율성 개선

## 핵심 개념
- **Rubber Duck Debugging**: 코드를 단계별로 설명하는 과정에서 논리적 오류를 스스로 발견하는 디버깅 기법. LLM이 이를 자동으로 수행
- **Code Explanation**: LLM이 자신의 코드를 자연어로 설명하여 의도와 구현의 불일치를 발견하는 메커니즘
- **Execution Feedback**: 코드를 실제로 실행한 결과(오류 메시지, 테스트 통과 여부)를 LLM에 입력하여 수정을 유도
- **Sample Efficiency**: 더 적은 샘플 생성으로 더 높은 성능을 달성하는 효율성. Self-Debugging으로 실패 샘플을 재활용

## 석사논문과의 연관성
Self-Debug는 석사논문에서 **SITL 기반 BT 검증 및 자가 수정 파이프라인** 설계의 핵심 참고 자료다. LLM이 생성한 BT가 CARLA 시뮬레이션에서 실행 실패(에이전트 충돌, 목표 미달성 등)하거나 논리적 오류(무한 루프, 잘못된 조건 순서 등)가 발견될 때, 실행 오류 메시지와 시뮬레이션 결과를 피드백으로 LLM에 제공하여 BT를 자동으로 수정하는 Self-Debug 루프를 구성할 수 있다. 코드를 자연어로 설명하는 방법론은 LLM이 생성한 BT의 논리 흐름을 자연어로 해석하여 오류를 발견하는 BT 검증 메커니즘으로도 활용 가능하다.

## 메모
- Google DeepMind 연구. ICLR 2024 게재
- 특히 텍스트→SQL 생성에서 검증 피드백 없이도 일관된 성능 향상을 보인 점이 주목받음
- Self-Refine(arXiv:2303.17651)과 함께 LLM 자가 개선 방법론의 핵심 논문
- BT의 실행 가능성 검증과 자가 수정에 직접 적용 가능한 방법론
