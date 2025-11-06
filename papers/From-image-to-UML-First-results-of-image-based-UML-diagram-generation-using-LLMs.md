---
title: "From image to UML: First results of image-based UML diagram generation using LLMs"
date: "2024-01-01"
description: "시각적 LLM을 사용하여 손으로 그린 UML 클래스 다이어그램 이미지를 기계가 읽을 수 있는 PlantUML 코드로 자동 변환하는 성능을 평가한 연구"
keywords: ["Large Language Model", "UML Diagram", "Software Models", "Low-code"]
tags: ["Large Language Model", "UML Diagram", "Software Models", "Low-code"]
authors: ["Aaron Conrardy", "Jordi Cabot"]
---

## 논문 정보
- **제목**: From image to UML: First results of image-based UML diagram generation using LLMs
- **저자**: Aaron Conrardy (Luxembourg Institute of Science and Technology), Jordi Cabot (Luxembourg Institute of Science and Technology, University of Luxembourg)
- **학회/저널**: First Large Language Models for Model-Driven Engineering Workshop (LLM4MDE 2024)
- **발행일**: 2024
- **DOI**: (제공되지 않음, CEUR-WS.org/Vol-3727/paper5.pdf 로 제공)
- **주요 연구 내용**: 본 연구는 GPT-4V, Gemini (Pro/Ultra), CogVLM과 같은 최신 시각적 LLM을 사용하여, 손으로 그린 UML 클래스 다이어그램 이미지를 PlantUML 텍스트 코드로 변환하는 성능을 평가함. 다이어그램의 복잡도, 의미적 정확성, 프롬프트의 상세 수준을 변수로 설정하여 실험을 수행함.
- **주요 결과 및 결론**: GPT-4V가 PlantUML 구문 오류 없이 가장 정확하고 일관된 변환 결과를 보여주었음. 반면, 다른 모델들은 구문 오류가 잦거나(Gemini, CogVLM), 의미적으로 무의미한 다이어그램의 변환을 거부하는 경향을 보임.
- **기여점**: LLM을 활용한 이미지 기반 UML 다이어그램 생성 가능성을 최초로 실증적으로 평가함. 소프트웨어 엔지니어링 초기 설계 단계에서 발생하는 수동 모델링 작업을 자동화하여 '로우-모델링(low-modeling)'을 지원할 수 있음을 시사하며, 현재 기술 수준에서는 '인간-참여형(human-in-the-loop)' 접근이 필수적임을 강조함.

## 요약
### 초록
소프트웨어 엔지니어링 초기 단계에서는 화이트보드나 종이에 UML 같은 모델을 그리는 경우가 많음. 하지만 이를 공식적인, 기계가 읽을 수 있는 모델로 변환하는 작업은 시간이 많이 소모됨. 이 연구는 LLM(Large Language Models)을 사용하여 손으로 그린 UML 클래스 다이어그램 이미지를 공식적인 모델 표현(PlantUML)으로 자동 생성하는 방안을 탐구함. 여러 LLM의 성능을 평가한 결과, 모델 기반 엔지니어링 파이프라인의 일부로 활용하기에 충분히 좋은 결과를 보였지만, 여전히 한계가 존재하며 이를 극복하기 위해 '인간-참여형(human-in-the-loop)' 접근이 필요함을 확인함.

### 서론
LLM은 프로그래밍 보조나 자연어 기반 모델 생성 등 소프트웨어 개발 여러 분야에 통합되고 있음. 특히 GPT-4V, Gemini 등 이미지 입력(visual LLM)을 지원하는 모델이 등장하면서 웹페이지 목업을 코드로 변환하는 등의 활용 사례가 나옴. 소프트웨어 모델링 분야에서도 초기 디자인 스케치를 공식적인 UML 다이어그램으로 변환하는 데 이 기술을 활용할 수 있음. 이는 기존 모델링 도구의 사용성 문제를 해결하고, 레거시 프로젝트의 문서를 복원하며, 로우-코드(low-code) 개발 파이프라인을 가속화하는 '로우-모델링(low-modeling)'을 가능하게 할 잠재력이 있음.

### 배경 (State of the art)
기존에도 이미지에서 UML 다이어그램(XMI 파일)을 생성하려는 시도(예: Img2UML)가 있었으나, 이는 주로 CASE 도구로 생성된 이미지에 초점을 맞췄으며 손그림 인식 여부는 불분명함. ReSECDI 같은 연구는 이미지에서 클래스나 관계 등 의미론적 요소만 인식할 뿐 표준 표기법을 따르지 않음. 손으로 그린 다이어그램에서 정보를 추출하려는 기존 연구들은 오래되었거나 특정 도구에 한정됨. 텍스트 입력으로 UML을 생성하는 LLM 연구는 있었지만, 이미지 입력을 활용한 연구는 본 논문이 처음임.

### 모델 아키텍처 / 방법론 (Experiment)
이 연구는 LLM 모델 자체가 아닌, LLM의 변환 성능을 평가하는 방법론을 제시함.

- **핵심 구조/방법**: 4가지 레벨의 손으로 그린 UML 클래스 다이어그램 이미지와 3가지 상세 수준의 프롬프트를 조합하여 여러 시각적 LLM의 성능을 평가함.
- **주요 구성 요소**:
    - **LLMs**: GPT-4V, Gemini (Pro/Ultra), CogVLM.
    - **Output Notation**: PlantUML (텍스트 기반 UML 도구).
    - **Diagrams (Figure 1 참고)**:
        - **Level 1**: 간단한 상속 구조 (동물, 오리, 물고기 등).
        - **Level 2**: 속성(attributes) 및 메서드(methods) 추가.
        - **Level 3**: 연관(association), 집약(aggregation) 관계 및 카디널리티(cardinality)를 포함한 더 복잡한 구조 (결제, 통화 등).
        - **Level 4**: 구문은 정확하나 의미론적으로 무의미한 다이어그램 (개, 우주선, 날개 등).
    - **Prompts**:
        - **P1**: 간단한 요청 ("...PlantUML notation으로 변환해 줘").
        - **P2**: 속성, 메서드, 가시성 등 세부 사항 주의 요청.
        - **P3**: 연관, 집약, 일반화, 카디널리티 등 모든 세부사항을 원본 그대로 정확히 복제 요청.
- **평가**: 각 조합(LLM, 다이어그램, 프롬프트)당 3회씩 빈 대화창에서 실행. 결과물에서 누락되거나 잘못 추가된(hallucinated) 요소의 수를 '실수(mistake)'로 계산함.

### 실험 결과
- **주요 데이터셋**: 자체 제작한 4가지 레벨의 손그림 UML 클래스 다이어그램 이미지 (논문의 Figure 1 참조).
- **핵심 성능 지표**: 생성된 PlantUML 코드의 실수 개수 및 구문 오류(Compilation Error) 발생 여부.
- **비교 결과 (Table 1, 2)**:
    - **전반적 성능 (RQ1)**: **GPT-4V**가 압도적으로 가장 좋은 성능을 보임. Level 1, 2에서는 실수가 1~3개 수준이었으나, 복잡한 Level 3에서는 7~18개로 증가함.
    - **구문 정확성 (RQ2)**: **GPT-4V**는 36번의 시도에서 **단 한 건의 구문 오류도 발생시키지 않음 (0%)**. 반면 Gemini Pro/Ultra는 약 44.4%, CogVLM은 약 55.6%의 시도에서 구문 오류를 발생시킴.
    - **복잡도 영향 (RQ3)**: 모든 LLM에서 다이어그램의 복잡도(Level 1 → Level 3)가 높아질수록 실수 개수가 꾸준히 증가함.
    - **의미론 영향 (RQ4)**: Level 4(의미 무관 다이어그램)에 대해 GPT-4V는 큰 영향을 받지 않았으나, **Gemini 모델들**은 "실제 UML 다이어그램이 아니다"라며 **코드 생성을 거부**하는 경우가 많았음.
    - **프롬프트 영향 (RQ5)**: 직관과 달리, 가장 **간단한 프롬프트(P1)**가 전반적으로 가장 좋은 결과를(8회 최저 실수), 가장 상세한 프롬프트(P3)가 가장 나쁜 결과를(6회 최고 실수) 보임.

### 결론
연구 결과, 시각적 LLM(특히 GPT-4V)은 손으로 그린 UML 다이어그램을 PlantUML 코드로 변환하는 데 유망한 성능을 보였음. 이는 모델링 파이프라인에 통합되어 '로우-모델링'을 지원할 잠재력이 있음.

- **주요 시사점**:
    - LLM 모델의 선택이 결과 품질에 매우 중요함 (GPT-4V가 월등함).
    - Gemini 등 일부 모델은 다이어그램의 '의미'에 대해 자체적인 판단(제약)을 하려는 경향을 보임.
    - PlantUML처럼 학습 데이터가 풍부한 유명한 표기법을 선택하는 것이 결과 품질에 긍정적인 영향을 미침.
    - GPT-4V조차 사소한 오류(예: Level 4에서 상속을 연관으로 '수정'하려 한 것)가 여전히 발생하므로, **'인간-참여형(human-in-the-loop)' 패러다임이 현재로서는 필수적임.**
- **향후 연구**: 실제 사용자(학생, 엔지니어)를 대상으로 한 정성적 유용성 평가, 유스케이스나 상태 다이어그램 등 다른 유형의 다이어그램 변환 테스트, 생성된 모델의 정확성을 자동으로 검증하고 LLM에게 수정을 요청하는 파이프라인(LLM-as-judge) 개발 등을 계획함.