---
title: "Teaching Large Language Models to Self-Debug"
tags: [JIK_REFERENCE, LLM, self-debug, code-generation, debugging, iterative-refinement]
---

# Teaching Large Language Models to Self-Debug

## 서지 정보
- **저자**: Xinyun Chen, Maxwell Lin, Nathanael Schärli, Denny Zhou
- **출판**: ICLR 2024
- **연도**: 2024
- **arXiv**: [2304.05128](https://arxiv.org/abs/2304.05128)

## 핵심 요약

Self-Debug는 LLM이 생성한 코드를 실행하고, 실행 결과(오류 메시지, 출력값)를 피드백으로 활용해 스스로 디버깅하는 프레임워크다. 코드 실행이라는 외부 신호를 피드백으로 사용함으로써 Self-Refine보다 구체적이고 정확한 수정이 가능하다. 텍스트-투-SQL, 코드 생성, 트랜스파일링 등의 태스크에서 기존 방법 대비 유의미한 성능 향상을 달성했다.

## 주요 기여
1. **실행 기반 피드백**: 코드 실행 결과(런타임 에러, 출력 불일치)를 LLM 피드백으로 직접 활용
2. **단위 테스트 활용**: 몇 가지 예시 테스트만으로도 디버깅 신호 생성 가능
3. **코드 설명 기반 개선**: LLM이 자신이 작성한 코드를 자연어로 설명(rubber duck debugging)한 뒤 오류를 탐지하는 방식도 제안

## 핵심 개념

- **실행 피드백 루프**: Generate → Execute → Feedback → Refine의 반복 사이클
- **Rubber Duck Debugging**: 코드를 자연어로 설명하게 하여 논리 오류 자가 탐지
- **단위 테스트 연동**: public test case 실패 시 자동으로 수정 시도

## 석사논문과의 연관성

LLM이 생성한 Behavior Tree XML을 시뮬레이터에서 실행하고, 실행 오류(파싱 실패, 노드 미정의, 충돌 등)를 피드백으로 LLM에 재주입해 BT를 자동 수정하는 메커니즘에 직접 적용 가능하다. Self-Debug의 실행 기반 피드백 루프는 BT 생성-검증-수정 파이프라인의 핵심 설계 원리로 활용될 수 있다.

## 메모
- Self-Refine(Madaan et al., 2023)이 자연어 피드백에 의존하는 반면, Self-Debug는 실행 결과라는 객관적 신호를 사용하는 것이 차별점
- BT 검증 단계에서 문법 검사기 + 시뮬레이터 실행 결과를 조합한 피드백 설계에 참고
