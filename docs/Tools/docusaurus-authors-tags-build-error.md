---
description: Docusaurus blog에서 authors.yml / tags.yml 참조 오류로 빌드가 실패할 때의 원인과 해결 방법을 정리한다.
---

# Docusaurus Blog — authors.yml / tags.yml 참조 오류 해결

## 배경

`docusaurus build` 실행 시 아래와 같은 에러와 함께 빌드가 실패하는 경우가 있다.

```
Error: Author "john_doe" defined in "blog/2026-02-24-post.md" not found in the authors map "authors.yml".
Error: Tag "llm" defined in "blog/2026-02-24-post.md" not found in the tags map "tags.yml".
```

논문 17편을 일괄 등록한 뒤 이 오류를 마주쳤고, 원인을 추적해 수정했다.

---

## 원인

Docusaurus의 blog 플러그인에서 `onInlineTags`, `onInlineAuthors` 옵션을 `"throw"` 로 설정하면,  
마크다운 front matter의 `authors` / `tags` 값이 각각 `authors.yml` / `tags.yml`에 **정확히 존재해야만** 빌드가 통과된다.

| 오류 유형 | 원인 |
|---|---|
| Author not found | `authors:` 에 쓴 key가 `authors.yml`에 없음 (오타 또는 누락) |
| Tag not found | `tags:` 에 쓴 slug가 `tags.yml`에 없음 (대소문자 포함 완전 일치) |
| Build succeed but wrong author | `authors.yml`에 key는 있지만 `name`, `url` 등 필드 누락 |

---

## 해결 방법

### 1. authors.yml에 신규 저자 추가

`blog/authors.yml` 파일에 누락된 저자를 추가한다.

```yaml
# blog/authors.yml
john_doe:
  name: John Doe
  title: Researcher
  url: https://example.com
  image_url: https://github.com/johndoe.png
```

> **Key 규칙**: 소문자, 언더스코어 허용. 마크다운 `authors: [john_doe]` 와 완전 일치해야 한다.

### 2. tags.yml에 신규 태그 추가

```yaml
# blog/tags.yml
llm:
  label: LLM
  permalink: /llm
  description: Large Language Model 관련 논문 및 기술 정리
```

### 3. 마크다운 front matter 일괄 수정

이미 작성된 파일들의 `authors` / `tags` 값이 yml 키와 불일치하는 경우,  
정규식 치환 또는 스크립트로 일괄 수정한다.

```bash
# 예: 오타 수정 (저자 키 변경)
sed -i 's/authors: \[johndoe\]/authors: [john_doe]/g' blog/*.md
```

---

## 빌드 검증

수정 후 로컬에서 빌드를 돌려 오류가 없는지 확인한다.

```bash
npm run build
# 또는
npx docusaurus build
```

빌드 성공 후 `git add → commit → push` 하여 배포한다.

---

## 핵심 정리

- `authors.yml` / `tags.yml` 키는 **대소문자·공백 포함 완전 일치**
- 논문/포스트를 대량 추가할 때는 **yml 파일을 먼저 업데이트**하고 md 파일을 작성하면 오류를 예방할 수 있다
- `onInlineTags: "warn"` 으로 완화할 수 있지만, `"throw"` 유지가 누락 방지에 유리하다
