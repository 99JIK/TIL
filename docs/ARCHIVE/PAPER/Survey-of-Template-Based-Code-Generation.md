---
title: Survey of Template-Based Code Generation
date: '2017-04-01'
description: 모델 기반 엔지니어링에서 템플릿 기반 코드 생성 기법의 체계적 조사 및 도구 비교 분석
tags: [Model Driven Engineering, Code Generation, Tree Based Code Generation, Xtend2]
authors:
- name: Lechanceux Kavuya Luhunu
---

## 논문 정보

- **제목**: Survey of Template-Based Code Generation
- **저자**: Lechanceux Kavuya Luhunu (Université de Montréal), 지도교수: Eugene Syriani (Université de Montréal)
- **학회/저널**: Université de Montréal 석사 학위 논문 (Maîtrise en Informatique)
- **발행일**: 2017-04
- **DOI**: [10.71781/9794](https://doi.org/10.71781/9794)
- **주요 연구 내용**: 모델 기반 엔지니어링(MDE)에서 가장 널리 사용되는 모델-텍스트 변환 패러다임인 템플릿 기반 코드 생성(TBCG) 기법을 체계적으로 매핑하고, 관련 도구들의 표현력·성능·확장성을 비교 분석
- **주요 결과 및 결론**: 모델 기반 도구는 표현력이 높고, 코드 기반 도구는 실행 속도가 훨씬 빠르며, Xtend2가 표현력과 성능 간 최적의 균형을 제공
- **기여점**: TBCG 기법의 분류 체계를 제시하고 구현 패턴을 통한 정량적 도구 비교 프레임워크를 확립
<!--truncate-->

## 요약

### 초록
모델로부터 텍스트 산출물을 자동 합성하는 것은 모델 기반 엔지니어링(MDE)의 핵심 단계이다. 이는 애플리케이션 코드 생성, 모델의 영속 저장소 직렬화, 문서·보고서 생성 등에 매우 유용한 모델 변환 기법이다. 다양한 모델-텍스트 변환 패러다임 중 템플릿 기반 코드 생성(TBCG)이 MDE에서 가장 인기 있다. TBCG는 템플릿이라 불리는 고수준 명세로부터 코드를 생성하는 합성 기법이다. 본 연구는 기존 TBCG 기법을 체계적으로 매핑하고 관련 도구들을 비교 분석한다.

### 서론
MDE는 추상화와 자동화를 강조하는 소프트웨어 개발 방법론으로, 모델을 핵심 산출물로 다루며 이로부터 다양한 텍스트 산출물을 자동 생성한다. TBCG는 MDE에서 가장 보편적인 모델-텍스트 변환 접근법으로, 템플릿 내에 정적 텍스트와 동적 코드를 혼합하여 최종 산출물을 합성한다. 그러나 도구와 접근법이 다양하여 개발자에게 적절한 지원을 제공하기 위한 분류와 비교가 필요하다.

### 모델 아키텍처 / 방법론
본 연구는 두 가지 방법론을 결합한다. 첫째, 체계적 매핑 연구(Systematic Mapping Study)를 통해 기존 TBCG 기법의 특성을 파악하고 연구 동향을 식별한다. 둘째, 표준화된 구현 패턴(implementation patterns)을 사용하여 여러 TBCG 도구의 표현력(expressiveness), 성능(performance), 확장성(scalability)을 정량적으로 비교 평가한다. 비교 대상 도구에는 모델 기반 도구와 코드 기반 도구가 모두 포함된다.

### 실험 및 결과
도구 비교 결과, 모델 기반 도구(model-based tools)는 메타모델 접근, 모델 탐색 등에서 더 높은 표현력을 보이는 반면, 코드 기반 도구(code-based tools)는 실행 속도 면에서 훨씬 우수한 성능을 보였다. 특히 Xtend2는 표현력과 성능 양 측면에서 가장 균형 잡힌 도구로 평가되었다. MDE가 코드 합성에서 차지하는 역할의 중요성도 확인되었다.

### 결론
TBCG는 MDE에서 핵심적인 코드 생성 기법이며, 도구 선택 시 표현력과 성능 간의 트레이드오프를 고려해야 한다. Xtend2가 최적의 절충안을 제공하지만, 프로젝트 요구사항에 따라 적합한 도구가 달라질 수 있다. 본 연구는 TBCG 기법의 체계적 분류와 정량적 비교 프레임워크를 제공함으로써 개발자의 도구 선택을 지원한다.
