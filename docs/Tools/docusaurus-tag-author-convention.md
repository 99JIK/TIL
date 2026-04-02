---
description: Docusaurus papers 섹션의 태그 및 저자 작성 규칙을 정리한다.
---

# Docusaurus Papers — 태그/저자 작성 컨벤션

## 개요

`papers/` 디렉토리의 논문 마크다운 파일에서 `tags`와 `authors`는 **인라인 방식**으로 작성한다.
별도의 `tags.yml`, `authors.yml` 파일은 사용하지 않는다.

---

## 태그 작성 규칙

### 1. 풀 영어 용어 사용 (약어 금지)

| 사용 금지 | 사용 |
|---|---|
| `LLM` | `Large Language Model` |
| `AI` | `Artificial Intelligence` |
| `FSM` | `State Machine` |
| `CNN` | `Convolutional Neural Network` |
| `GAN` | `Generative Adversarial Network` |

### 2. 띄어쓰기 + Title Case

| 사용 금지 | 사용 |
|---|---|
| `behavior-tree` | `Behavior Tree` |
| `task-planning` | `Task Planning` |
| `GameAI` | `Game Artificial Intelligence` |

### 3. 단수형 사용

학문 분야명(`Robotics`, `Statistics`, `Economics` 등)만 복수형 허용.

| 사용 금지 | 사용 |
|---|---|
| `Large Language Models` | `Large Language Model` |
| `Behavior Trees` | `Behavior Tree` |

### 4. 고유명사는 원래 표기 유지

제품명, 프로젝트명, 모델명 등 고유명사는 공식 표기를 그대로 사용한다.

| 예시 | 설명 |
|---|---|
| `CARLA` | 시뮬레이터 이름 |
| `ChatGPT` | 제품명 |
| `VGGNet` | 모델명 |
| `AlphaGo` | 프로젝트명 |
| `XGBoost` | 라이브러리명 |
| `SUMO` | 시뮬레이터 이름 |

### 5. 의미가 다른 태그는 각각 유지

`Quality Control` / `Quality Assurance`, `Survey` / `Review` 등.

### 6. 특수 태그

- `JIK Reference`: 본인 연구 참고 논문 표시용

---

## 저자 작성 규칙

저자는 front matter에 **객체 배열** 형태로 작성한다.

```yaml
authors:
  - name: Hong Gil Dong
  - name: Woojin Lee
```

- 논문에 표기된 영문 이름을 그대로 사용
- 미들 이니셜 포함: `Ian J. Goodfellow`
- 한국인 저자도 영문 표기 우선, 없으면 한글

---

## Front Matter 예시

```yaml
---
title: "논문 제목"
date: "2025-01-01"
description: "논문 한 줄 설명"
tags: [Large Language Model, Behavior Tree, Artificial Intelligence]
authors:
  - name: Hong Gil Dong
  - name: Woojin Lee
---
```

- `keywords` 필드는 사용하지 않는다 (tags로 통합).
