---
title: "Docusaurus blog — authors / tags 맵 누락 빌드 에러 해결"
description: "Author/Tag not found 빌드 실패의 원인과 해결 절차."
tags: [docusaurus, build-error, blog]
sidebar_position: 2
last_update:
  date: 2026-04-23
---

# Docusaurus blog — authors / tags 맵 누락 빌드 에러 해결

## Context

Docusaurus blog 플러그인이 아래와 같은 메시지로 빌드를 실패시킬 때 찾는 문서.

```
Error: Author "john_doe" defined in "blog/2026-02-24-post.md" not found in the authors map "authors.yml".
Error: Tag "llm" defined in "blog/2026-02-24-post.md" not found in the tags map "tags.yml".
```

## 원인

`onInlineTags`, `onInlineAuthors` 옵션이 `"throw"`일 때 blog 마크다운 frontmatter의 `authors`/`tags` 값이 `authors.yml`/`tags.yml`에 **정확히 존재해야만** 통과된다.

| 오류 유형 | 원인 |
|---|---|
| Author not found | `authors:`의 키가 `authors.yml`에 없음 (오타 또는 누락) |
| Tag not found | `tags:`의 슬러그가 `tags.yml`에 없음 (대소문자까지 완전 일치) |
| 빌드는 되나 저자 정보 이상 | `authors.yml`에 키는 있지만 `name`, `url` 등 필드 누락 |

## Steps

### 1. authors.yml에 누락된 저자 추가

```yaml
# blog/authors.yml
john_doe:
  name: John Doe
  title: Researcher
  url: https://example.com
  image_url: https://github.com/johndoe.png
```

키는 마크다운 frontmatter의 `authors: [john_doe]`와 완전히 일치해야 한다. 소문자·언더스코어 권장.

### 2. tags.yml에 누락된 태그 추가

```yaml
# blog/tags.yml
llm:
  label: LLM
  permalink: /llm
  description: Large Language Model 관련 포스트
```

### 3. 기존 파일의 키 일괄 수정

오타로 키가 어긋나 있으면 스크립트로 한 번에 교체한다.

```bash
sed -i 's/authors: \[johndoe\]/authors: [john_doe]/g' blog/*.md
```

## Verification

```bash
npm run build
```

에러 없이 통과하면 성공. 경고 수준으로 낮추고 싶다면 플러그인 옵션을 `onInlineTags: 'warn'`으로 바꿀 수 있다.

## Why this approach

맵 파일 기반 엄격 모드(`throw`)는 번거롭지만 저자·태그의 오타를 빌드 단계에서 잡아낸다. 대량 포스트를 추가할 때는 **맵부터 업데이트하고 포스트를 쓰는 순서**가 버그를 줄인다.

## Related

- [Docusaurus plugin-content-blog options](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog)
