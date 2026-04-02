---
title: Test Intention Guided LLM-based Unit Test Generation
date: '2025-05-01'
description: 정적 분석을 통해 추출한 테스트 의도(Test Intention)를 사용하여 LLM이 높은 커버리지와 정확한 Mocking을 갖춘 단위 테스트를 생성하도록 유도하는 IntUT 프레임워크 제안
authors:
- name: Zifan Nan
- name: Zhaoqiang Guo
- name: Kui Liu
- name: Xin Xia
tags: [Software Engineering, Unit Test Generation, Large Language Models, Static Analysis, Program Analysis, Mocking]
---

## 논문 정보
- **제목**: Test Intention Guided LLM-based Unit Test Generation
- **저자**: Zifan Nan, Zhaoqiang Guo, Kui Liu, Xin Xia (Huawei Technologies Co., Ltd.)
- **학회/저널**: 2025 IEEE/ACM 47th International Conference on Software Engineering (ICSE)
- **발행일**: 2025-05-01 (ICSE 2025 Proceedings)
- **DOI**: 10.1109/ICSE55347.2025.00243
- **주요 연구 내용**: 정적 분석 기반의 PAINT 기법을 통해 코드의 분기(Branch)와 의존성을 분석하고, 이를 바탕으로 명시적인 '테스트 의도(Test Intention)'를 생성하여 LLM 프롬프트에 주입함으로써 단위 테스트의 품질을 향상시키는 IntUT 프레임워크를 제안함.
- **주요 결과 및 결론**: 산업계 자바 프로젝트 적용 결과, 기존 방식 대비 분기 커버리지(Branch Coverage)를 94%, 라인 커버리지(Line Coverage)를 49% 향상시켰으며, 실제 개발자 대상 라이브 스터디에서 30%의 효율성 향상을 입증함.
- **기여점**: 단순 코드 컨텍스트 제공을 넘어, 프로그램 분석을 통해 도출된 명확한 테스트 시나리오(입력값, Mocking 동작, 기대 결과)를 LLM에 가이드함으로써 복잡한 분기와 의존성을 가진 코드에 대한 테스트 생성 한계를 극복함.
<!--truncate-->
## 요약
### 초록
LLM(Large Language Models)의 등장은 단위 테스트 생성에 새로운 가능성을 열었으나, 기존 접근법은 낮은 커버리지와 부정확한 Mocking 능력으로 인해 실용성이 떨어지는 한계가 있었다. 본 논문은 명시적인 테스트 의도(테스트 입력, Mock 동작, 기대 결과 등)를 활용하여 LLM이 고품질의 테스트 케이스를 생성하도록 유도하는 새로운 접근법인 **IntUT**를 제안한다. 3개의 산업용 자바 프로젝트와 라이브 스터디를 통한 실험 결과, IntUT는 분기 커버리지와 라인 커버리지를 획기적으로 개선하였으며 개발자들의 테스트 작성 효율성을 크게 높이는 것으로 나타났다.
![Figure 1](img/Pasted%20image%2020251122203901.png)
![Figure 2](img/Pasted%20image%2020251122203926.png)
### 서론
단위 테스트는 소프트웨어 품질 보증의 핵심이지만, 고품질의 테스트 케이스를 작성하는 것은 시간 소모적이고 복잡한 작업이다. 최근 LLM을 활용한 자동 생성 연구가 활발하지만, 단순히 코드 문맥만 제공하는 방식은 복잡한 분기 조건을 모두 커버하지 못하거나 외부 의존성(DB, 네트워크 등)에 대한 Mocking 코드를 정확히 생성하지 못하는 문제가 있다. 
논문의 Figure 1과 2에서는 기존 LLM(CodeLLaMA, GPT-4)이 복잡한 제어 흐름을 가진 메소드에 대해 단순하고 유효하지 않은 테스트만 생성하는 실패 사례를 보여주며, 이를 해결하기 위해 개발자의 '의도'를 명시적으로 주입하는 기법의 필요성을 강조한다.

### 배경
본 연구를 이해하기 위해 다음과 같은 개념이 전제된다.
* **제어 흐름 그래프(Control-Flow Graph, CFG)**: 프로그램의 실행 흐름을 방향 그래프 $G=(B, E)$로 모델링한 것. 여기서 $B$는 기본 블록(basic block), $E$는 제어 흐름을 나타내는 엣지이다.
* **Mocking**: 테스트 대상 코드(Focal Method)가 의존하는 외부 객체의 동작을 흉내 내어, 테스트를 격리하고 실행 속도와 안정성을 보장하는 기법이다.
![Figure 4](img/Pasted%20image%2020251122204004.png)
### 모델 아키텍처 / 방법론
**IntUT**는 크게 테스트 의도 생성(PAINT)과 프롬프트 조립 및 LLM 생성의 두 단계로 구성된다(Figure 4 참조).

#### 1. PAINT: 프로그램 분석 기반 테스트 의도 생성기
PAINT(Program Analysis-driven test Intention generation)는 정적 분석을 통해 타겟 메소드의 모든 분기를 커버하기 위한 명세서를 작성한다.
* **블록 분석 (Block Analysis)**: 소스 코드를 CFG로 변환하고 If, Switch, Exception, Hybrid 블록으로 분류하여 분석한다. 각 분기로 나가는 엣지(Edge)에 True/False 조건을 레이블링한다.
* **SSM-DFS 알고리즘**: Subgraph-Split-Merge Depth-First Search 알고리즘을 사용하여 CFG를 순회한다. 이는 함수 호출이나 예외 처리가 포함된 복잡한 구조에서, 특정 분기(Leaf Node)에 도달하기 위해 만족해야 하는 조건들의 체인(Condition Chain)을 추출한다. 경로 폭발(Path Explosion) 문제를 완화하기 위해 중첩 조건(Nested Condition) 위주로 가지치기(Pruning)를 수행한다.
* **Mock Classifier**: CodeBERT 기반으로 학습된 분류기를 사용하여, 조건 체인 내의 함수 호출이 실제 실행되어야 하는지 혹은 Mocking 되어야 하는지를 결정한다. Mocking이 필요한 경우, 해당 분기에 도달하기 위한 반환값을 Mock 조건으로 설정한다.
![Figure 6](img/Pasted%20image%2020251122204049.png)
#### 2. 프롬프트 구성 (Figure 6 참조)
추출된 테스트 의도는 다음과 같은 템플릿 형태로 변환되어 LLM 프롬프트에 포함된다.
* **Input Parameters**: 해당 분기를 타기 위해 필요한 입력 변수 설정 (예: `StringUtils.isEmpty(id)`가 False가 되도록 id 설정).
* **Mock Conditions**: 의존성 객체의 메소드 호출 시 반환해야 할 값 또는 예외 설정.
* **Expected Result**: 테스트 실행 후 검증해야 할 결과값(Oracle).
* **RAG**: 유사한 과거 테스트 케이스와 Mock 예제 코드를 검색하여 프롬프트에 추가, LLM이 프로젝트의 코딩 스타일을 따르도록 유도한다.

### 실험 결과
실험은 화웨이의 실제 산업용 자바 프로젝트 3개(Mgmt, Lic, Res)를 대상으로 진행되었으며, CodeLLaMA-34B-SFT 모델을 기반으로 평가했다.

* **테스트 품질**: 생성된 테스트의 65%는 즉시 컴파일 및 실행이 가능했으며, 컴파일 에러율은 3%에 불과했다.
* **커버리지 향상**: 테스트 의도(Test Intention)를 적용했을 때, 적용하지 않은 경우(Baseline) 대비 **분기 커버리지(Branch Coverage)는 94%**, **라인 커버리지(Line Coverage)는 49%** 향상되었다. 이는 단순 파인튜닝이나 RAG만 적용했을 때보다 월등히 높은 수치이다.
* **절제 연구 (Ablation Study)**: 테스트 의도(TI)가 포함된 프롬프트가 토큰 편집 거리(TED)와 라인 편집 거리(LED)를 획기적으로 줄여, 개발자가 생성된 코드를 수정하는 데 드는 노력을 감소시킴을 확인했다.
* **라이브 스터디**: 185명의 현업 개발자가 참여한 연구에서 84.4%의 높은 수용률(Acceptance Rate)을 보였으며, 개발 효율성이 30% 향상되었다는 피드백을 받았다.

### 결론
본 논문은 LLM을 활용한 단위 테스트 생성 시, 정적 분석을 통해 추출한 명시적 '테스트 의도'를 가이드로 사용하는 것이 성능 향상에 결정적임을 증명했다. IntUT는 복잡한 비즈니스 로직을 가진 실제 산업 현장의 코드에서도 높은 커버리지와 정확한 Mocking 코드를 생성해냈으며, 이는 LLM과 프로그램 분석 기술의 결합이 소프트웨어 엔지니어링 자동화 도구의 신뢰성을 크게 높일 수 있음을 시사한다.