---
title: 논문용 템플릿
description: "One-liner를 복사하거나 한 줄 요약"
authors:
  - name: 저자1
  - name: 저자2
year: 2024
venue: "구체적 학회/저널명 (예: NeurIPS 2024, MILCOM 2007)"
tags: [tag-1, tag-2, tag-3]
relevance: high
reading_reason: "왜 이 논문을 읽었는가"
date: YYYY-MM-DD
sidebar_label: "짧은 제목 (제목이 길 때만)"
---

# 논문 원제 그대로

> **저자명** · **연도** · **학회/저널**

> 관련도: 상 · 읽은 이유: (reading_reason 값 복사. 비었으면 이 줄 전체 삭제)

:::tip Intuition
수식과 구조를 다 잊어도 남을 한 문장 비유.
:::

{/* truncate */}

## One-liner

논문 전체를 한 문장으로 압축.

## Problem

기존 연구의 공백이나 한계. 이 논문이 왜 나왔는가. 1-3 문장.

## Core Idea

저자가 제안한 핵심. "무엇이 새로운가". 1-3 문장.

## Method

이 논문을 이 논문답게 만드는 결정적 설계 선택. 파이프라인 전체를 옮기지 않는다. 수식은 1-2개만.

$$
(필요한 경우 KaTeX 블록 수식)
$$

## Results

"무엇이 얼마나 좋아졌는가"를 서술. 숫자 나열 X. 중요한 벤치마크·비교 대상만.

| 모델 | 벤치마크 | 점수 |
|------|----------|------|
| ... | ... | ... |

## Key Figures

- **Fig. N**: 한 줄 설명
- **Table. N**: 한 줄 설명

(정보 밀도 높은 1-3개만)

## Contribution vs Limitation

**저자 주장**
- ...

**저자가 밝힌 한계**
- ...

:::note 실제로 보이는 것
내가 보기에 저자가 숨긴 한계나 과장된 기여. 추정임을 명시.
:::

## Quotes

> "인용문" (p.N)

> "인용문" (p.N)

(5개 이하. 의역보다 원문이 강력할 때만)

## Idea Seeds

- 파생 아이디어 1
- 파생 아이디어 2

(없으면 섹션 전체 생략)

## For My Writing

이 논문을 내 글의 어느 자리에서 어떻게 인용할지 구체적으로.

## Open Questions

**이해하지 못한 것**
- ...

**저자가 다루지 않은 것**
- ...

## Links

- **선행 연구**: ...
- **후속 연구**: ...
- **관련 주제**: ...

## References

- **DOI**: [10.xxxx/xxxxx](https://doi.org/10.xxxx/xxxxx)
- **arXiv**: [xxxx.xxxxx](https://arxiv.org/abs/xxxx.xxxxx)
- **Code**: [github.com/...](https://github.com/...)
- **BibTeX key**: `author2024keyword`

```bibtex
@inproceedings{author2024keyword,
  title     = {...},
  author    = {...},
  booktitle = {...},
  year      = {2024}
}
```