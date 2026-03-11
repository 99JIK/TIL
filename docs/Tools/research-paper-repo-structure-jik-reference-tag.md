---
title: "연구 논문 저장소 구조 정리 — papers/ 분리와 JIK_REFERENCE 태그 전략"
sidebar_label: "논문 저장소 구조 & JIK_REFERENCE 태그"
tags: [tools, git, knowledge-management, research, paper]
date: 2026-03-09
---

# 연구 논문 저장소 구조 정리 — papers/ 분리와 JIK_REFERENCE 태그 전략

## 배운 것

석사 논문 레퍼런스가 늘어나면서 `docs/Paper/MASTER'S-THESIS/` 안에 같이 섞여 있던 파일들이  
문서 빌드(Docusaurus)와 레퍼런스 원본 파일이 뒤섞이는 문제가 생겼다.  
이를 해결하기 위해 **`papers/` 디렉토리를 최상위에 별도 분리**하고,  
모든 레퍼런스 파일에 `JIK_REFERENCE` 태그를 일괄 적용했다.

## 문제 상황

- `docs/Paper/MASTER'S-THESIS/` 에 논문 마크다운이 27편 혼재
- Docusaurus 빌드 시 사이드바 항목이 비정상적으로 많아짐
- 파일명이 약어 또는 일부 단어만 표기되어 검색/추적이 어려움
- 중복 파일, 오배치 파일 혼재

## 해결 방법

### 1. `papers/` 최상위 디렉토리로 분리

```
Today_I_Learned/
├── docs/           ← Docusaurus 빌드 대상
│   └── Paper/      ← 직접 작성한 논문 리뷰만 유지
└── papers/         ← 레퍼런스 원본 마크다운 (빌드 제외)
    ├── self-refine-iterative-refinement-llm.md
    ├── self-debug-code-generation-unit-tests.md
    └── ...
```

- `papers/`는 Docusaurus `docs` 경로 밖이므로 빌드에 포함되지 않음
- 레퍼런스 파일은 Git 추적 + 개인 검색 용도로만 사용

### 2. 파일명 전체 이름 표준화

| 이전 | 이후 |
|------|------|
| `self-refine.md` | `self-refine-iterative-refinement-llm.md` |
| `self-debug.md` | `self-debug-code-generation-unit-tests.md` |
| `BT-planning.md` | `task-planning-behavior-trees-robotics.md` |

- 파일명만 보고 논문 주제를 파악할 수 있도록 **full descriptive name** 사용
- kebab-case 유지

### 3. JIK_REFERENCE 태그 일괄 적용

각 레퍼런스 파일 상단에 태그 추가:

```markdown
<!-- JIK_REFERENCE -->
# Self-Refine: Iterative Refinement with Self-Feedback

...
```

- `JIK_REFERENCE` 태그로 grep 검색 또는 스크립트 필터링 가능
- 내가 직접 읽고 참고한 논문임을 명시하는 마커로 사용

## 커밋 순서 (실제 작업 흐름)

```
744658c  docs(paper): add 27 master's thesis reference papers       ← 초기 추가
57b9da7  docs(paper): remove duplicate files, add missing 3 papers  ← 중복/누락 정리
8301226  docs(paper): rename files to full descriptive names + JIK_REFERENCE tags
de89732  refactor(paper): move docs/ → papers/, remove misplaced files
250885d  docs(paper): add JIK_REFERENCE tag to 27 remaining files   ← 태그 일괄 적용
```

- 한 번에 완벽하게 하려다 보면 커밋이 커지고 롤백이 어려워짐
- 단계별로 "추가 → 정리 → 이름변경 → 이동 → 태그" 순서로 쪼갠 것이 추적에 유리했음

## 핵심 교훈

> "레퍼런스 논문은 문서 빌드 시스템과 경로를 분리해야 양쪽 다 관리하기 편하다."

- `docs/` 와 `papers/` 를 명확히 나누면 빌드 노이즈 없이 논문 아카이브 유지 가능
- 파일명은 처음부터 full descriptive name으로 — 나중에 rename하면 git history가 끊김
- 마커 태그(`JIK_REFERENCE`)는 단순하지만 grep 한 줄로 모든 레퍼런스를 찾을 수 있어 유용
- 대량 파일 작업은 커밋을 작게 쪼개는 것이 실수 복구에 유리
