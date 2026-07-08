---
id: open-knowledge-format
title: Open Knowledge Format (OKF)
sidebar_label: Open Knowledge Format
description: Google Cloud가 2026년 6월 발표한 OKF 명세 정리. AI 에이전트가 읽고 쓰고 교환할 수 있는 지식을 마크다운 + YAML frontmatter 디렉터리로 표현하는 개방형 포맷.
tags:
  - okf
  - open-knowledge-format
  - google-cloud
  - ai-agent
  - knowledge-management
  - markdown
  - llm-wiki
  - knowledge-catalog
last_update:
  date: 2026-06-30
---

## 한 줄 정의

Open Knowledge Format(OKF)은 Google Cloud가 2026년 6월 12일 발표한 개방형 명세다. 조직의 지식을 YAML frontmatter가 붙은 마크다운 파일들의 디렉터리로 표현해서, 사람과 AI 에이전트가 별도 도구 없이 읽고 쓰고 교환할 수 있게 한다. 현재(2026-06-30) 버전은 0.1, 상태는 Draft다. 발표 주체는 Google Cloud의 Data Cloud 팀이며, 명세와 레퍼런스 구현, 샘플 번들은 [`GoogleCloudPlatform/knowledge-catalog`]([GitHub - GoogleCloudPlatform/knowledge-catalog: Google Cloud Knowledge Catalog Tools and Samples · GitHub](https://github.com/GoogleCloudPlatform/knowledge-catalog)) 레포에 공개되어 있다.

핵심 성격은 플랫폼이 아니라 포맷이라는 점이다. 새로운 런타임이나 SDK, 데이터베이스, 에이전트 프레임워크를 도입하는 것이 아니라, 이미 누구나 쓰는 마크다운과 YAML 위에 최소한의 약속 몇 개만 얹는다. 파일을 `cat`으로 읽을 수 있으면 OKF를 읽을 수 있고, 레포를 `git clone`할 수 있으면 OKF를 배포할 수 있다.

:::note 약어 충돌 주의
같은 약어를 쓰는 Open Knowledge Foundation(오픈 데이터를 추진하는 비영리 단체)과는 전혀 무관한 별개의 대상이다. 이 문서에서 OKF는 전부 Google의 파일 포맷 명세를 가리킨다.
:::

{/* truncate */}

---

## 1. 왜 나왔나

### 1.1 에이전트의 컨텍스트 문제

파운데이션 모델의 성능은 계속 올라가지만, 실무에서 에이전트가 막히는 지점은 대체로 같다. 컨텍스트가 없다는 것이다. 모델은 코드를 작성하거나 데이터셋을 분석할 수 있지만, 그러려면 테이블 스키마, 메트릭 정의, 조인 경로, 운영 런북 같은 내부 지식이 필요하다. 이 지식은 보통 데이터 카탈로그, 위키, 코드 주석, 공유 드라이브, 그리고 몇몇 시니어 엔지니어의 머릿속에 흩어져 있다.

문제는 이 흩어진 지식을 모델에 공급하는 방식이 표준화되어 있지 않다는 데 있다. 벤더마다 자체 카탈로그, 자체 SDK, 자체 지식 그래프 스키마를 제공한다. 어느 것도 제품이나 조직의 경계를 넘어 이식되지 않는다. 결과적으로 에이전트를 만드는 모든 팀이 같은 컨텍스트 조립 문제를 처음부터 다시 풀고, 카탈로그 벤더들은 같은 데이터 모델을 반복해서 재발명한다.

### 1.2 LLM 위키 패턴

OKF의 직접적인 사상적 출발점은 Andrej Karpathy가 2026년 4월에 공개한 LLM Wiki 글이다. 요지는 단순하다. LLM은 지루해하지 않고, 상호 참조를 갱신하는 것을 잊지 않으며, 한 번에 여러 파일을 편집할 수 있다. 사람이 개인 위키를 결국 방치하게 만드는 그 귀찮은 부기 작업이야말로 LLM이 잘하는 일이다. 그래서 마크다운 파일 라이브러리를 에이전트가 직접 읽고 갱신하고 유지하게 하면, 위키 유지보수가 비로소 지속 가능해진다.

이 패턴은 이름을 바꿔가며 반복적으로 등장해 왔다. 코딩 에이전트에 연결된 Obsidian 볼트, `AGENTS.md`와 `CLAUDE.md` 같은 규약 파일, `llms.txt`, 메타데이터를 코드처럼 다루는 레포 등이 전부 같은 아이디어의 변주다. OKF가 한 일은 이 패턴에 형태에 대한 합의를 부여한 것이다. 한 개념에 반드시 들어가야 하는 필드 하나를 정하고, 질의 가능하게 만들고 싶을 때 쓸 수 있는 선택 필드 몇 개를 제안하고, 나머지는 자유롭게 쓰게 둔다. 새로운 도구가 아니라 모양에 대한 약속이며, 이것이 Karpathy의 패턴이 제각각인 수십 개의 재발명으로 흩어지지 않게 막아주는 최소 장치다.

### 1.3 제품 맥락

OKF는 Google Cloud의 Knowledge Catalog 안에서 함께 출시됐다. Knowledge Catalog는 오랫동안 Dataplex라는 이름으로 팔리던 데이터 거버넌스 제품을 개편한 것으로, AI 에이전트를 위한 상시 컨텍스트 엔진으로 재포지셔닝됐다. Google Cloud는 이 Knowledge Catalog가 OKF를 인제스트해서 자사 에이전트에 제공할 수 있도록 업데이트했다고 밝혔다. 즉 OKF는 순수 명세인 동시에, 실제로 동작하는 상용 제품의 입력 포맷이기도 하다.

---

## 2. 설계 철학

명세 본문이 직접 못박는 원칙은 다음과 같다. 지식은 다음 네 가지를 만족하는, 널리 접근 가능하고 확립된 포맷으로 표현하는 것이 가장 낫다는 입장이다.

- 도구 없이 사람이 읽을 수 있을 것 (Readable)
- 전용 SDK 없이 에이전트가 파싱할 수 있을 것 (Parseable)
- 버전 관리에서 diff를 뜰 수 있을 것 (Diffable)
- 도구와 조직과 시간을 가로질러 이식 가능할 것 (Portable)

여기서 파생되는 실무적 성격이 세 가지다.

첫째, 의도적으로 최소한만 규정한다. 지식 코퍼스가 스스로를 설명할 수 있게 만드는 데 필요한 구조적 약속만 표준화하고, 그 이상은 전부 생산자에게 맡긴다.

둘째, 생산자와 소비자를 깔끔하게 분리한다. 누가 지식을 쓰는지와 누가 소비하는지가 포맷 수준에서 분리되어 있다. 사람이 손으로 작성한 번들을 에이전트가 소비할 수 있고, 메타데이터 추출 파이프라인이 생성한 번들을 시각화 도구로 탐색할 수 있으며, 한 LLM이 합성한 번들을 다른 LLM이 질의할 수 있다. 포맷이 계약이고, 양 끝단의 도구는 독립적으로 교체 가능하다.

셋째, 플랫폼이 아니라 포맷이다. 특정 클라우드, 데이터베이스, 모델 제공자, 에이전트 프레임워크에 묶이지 않는다. 읽고 쓰고 제공하는 데 독점 계정이나 SDK를 요구하지 않는다. 지식 포맷의 가치는 누가 소유하느냐가 아니라 얼마나 많은 주체가 그것을 말하느냐에서 나온다는 논리다.

### 비목표

명세는 하지 않는 것도 명시한다.

- 개념 타입의 고정 분류 체계를 정의하지 않는다.
- 저장, 제공, 질의 인프라를 규정하지 않는다.
- 도메인별 스키마(Avro, Protobuf, OpenAPI 등)를 대체하지 않는다. OKF는 이들을 참조할 뿐 흡수하지 않는다.

---

## 3. 용어

명세가 정의하는 기본 용어는 다음과 같다.

- **Knowledge Bundle (지식 번들)**: 자기 완결적인 계층형 지식 문서 모음. 배포의 단위다.
- **Concept (개념)**: 번들 안의 지식 한 단위. 마크다운 문서 하나로 표현된다. 테이블이나 API 같은 구체적 자산일 수도, 메트릭이나 비즈니스 프로세스 같은 추상적 아이디어일 수도, 그 사이 무엇이든 될 수 있다.
- **Concept ID (개념 식별자)**: 번들 안에서 그 개념 파일의 경로에서 `.md` 확장자를 뗀 것. 예를 들어 `tables/users.md`의 Concept ID는 `tables/users`다.
- **Frontmatter**: 마크다운 파일 맨 위에 `---`로 구분되는 YAML 메타데이터 블록.
- **Body (본문)**: frontmatter 다음에 오는 모든 내용.
- **Link (링크)**: 한 개념에서 다른 개념으로 향하는 표준 마크다운 링크. 부모/자식이라는 암묵적 계층을 넘어서는 관계를 표현하는 데 쓴다.
- **Citation (인용)**: 본문의 주장을 뒷받침하는 외부 출처로 향하는 링크.

---

## 4. 번들 구조

번들은 마크다운 파일들의 디렉터리 트리다. 디렉터리 구조는 도메인과 독립적이며, 생산자가 포착하려는 지식에 맞게 자유롭게 조직한다.

```text
path/to/bundle/
├── index.md                # 선택. 점진적 공개를 위한 디렉터리 목록
├── log.md                  # 선택. 시간순 변경 이력
├── <concept>.md            # 번들 루트의 개념
└── <subdirectory>/         # 하위 디렉터리는 개념을 그룹으로 묶는다
    ├── index.md
    ├── <concept>.md
    └── <subdirectory>/
        └── ...
```

배포 형태는 다음 중 무엇이든 가능하다.

- git 레포지토리. 이력, 기여자 정보, diff를 제공하므로 권장된다.
- 디렉터리를 tar 또는 zip으로 묶은 아카이브.
- 더 큰 레포 안의 하위 디렉터리.

### 4.1 예약 파일명

다음 두 파일명은 계층의 어느 레벨에서든 정해진 의미를 가지며, 개념 문서로 써서는 안 된다.

| 파일명 | 용도 |
| --- | --- |
| `index.md` | 디렉터리 목록 (6절) |
| `log.md` | 변경 이력 (7절) |

이 둘을 제외한 모든 `.md` 파일은 개념 문서다. 태그별로 문서를 모으는 별도 파일 포맷은 규정하지 않는다. 태그 브라우징 뷰가 필요하면 소비 시점에 frontmatter를 스캔해서 합성하면 된다.

---

## 5. 개념 문서

모든 개념은 UTF-8 마크다운 파일이며 두 부분으로 구성된다. 파일 맨 앞에 `---`로 시작하고 닫는 YAML frontmatter 블록, 그리고 그 뒤의 자유 형식 마크다운 본문이다.

### 5.1 Frontmatter 필드

```yaml
type: <Type name>                    # 필수
title: <표시 이름>                    # 선택
description: <한 줄 요약>             # 선택
resource: <자산의 정규 URI>           # 선택
tags: [<tag>, <tag>, ...]            # 선택
timestamp: <ISO 8601 datetime>       # 선택, 마지막 수정 시각
# ... 생산자가 정의한 임의의 키/값 쌍
```

**필수 필드는 `type` 하나뿐이다.**

- `type`: 개념의 종류를 가리키는 짧은 문자열. 소비자는 이 값으로 라우팅, 필터링, 표현을 결정한다. 예시 값으로 `BigQuery Table`, `BigQuery Dataset`, `API Endpoint`, `Metric`, `Playbook`, `Reference` 등이 있다. 타입 값은 중앙에 등록되지 않는다. 생산자는 설명적이고 자명한 값을 골라야 하고, 소비자는 모르는 타입을 무리 없이 처리해야 한다. 보통은 일반 개념으로 취급한다.

**권장 필드(우선순위 순):**

- `title`: 사람이 읽을 표시 이름. 없으면 소비자가 파일명에서 유도할 수 있다.
- `description`: 개념을 요약하는 한 문장. `index.md` 생성기, 검색 스니펫, 미리보기에서 쓰인다.
- `resource`: 개념이 설명하는 실제 자산을 유일하게 식별하는 URI. 물리적 자원이 아니라 추상적 아이디어를 설명하는 개념에는 없다.
- `tags`: 횡단적 분류를 위한 짧은 문자열의 YAML 리스트.
- `timestamp`: 마지막으로 의미 있는 변경이 일어난 시각, ISO 8601 형식.

**확장:** 생산자는 임의의 추가 키를 넣을 수 있다. 소비자는 라운드트립할 때 모르는 키를 보존해야 하고, 인식하지 못하는 필드가 있다고 해서 문서를 거부해서는 안 된다.

### 5.2 본문 규약

본문은 표준 마크다운이다. 생산자는 자유로운 산문보다 구조적 마크다운, 즉 제목, 리스트, 표, 코드 펜스를 선호하는 것이 좋다. 구조는 사람의 읽기와 에이전트의 검색 양쪽에 도움이 되기 때문이다.

필수 본문 섹션은 없다. 다만 다음 제목들은 관례적 의미를 가지며, 해당하는 경우 쓰는 것이 좋다.

| 제목 | 용도 |
| --- | --- |
| `# Schema` | 자산의 컬럼/필드에 대한 구조적 설명 |
| `# Examples` | 구체적 사용 예시, 보통 코드 펜스 |
| `# Citations` | 본문의 주장을 뒷받침하는 외부 출처 (8절) |

### 5.3 예시: 자원에 묶인 개념

```text
---
type: BigQuery Table
title: Customer Orders
description: One row per completed customer order across all channels.
resource: https://console.cloud.google.com/bigquery?p=acme&d=sales&t=orders
tags: [sales, orders, revenue]
timestamp: 2026-05-28T14:30:00Z
---

# Schema

| Column        | Type      | Description                               |
|---------------|-----------|-------------------------------------------|
| order_id      | STRING    | Globally unique order identifier.         |
| customer_id   | STRING    | Foreign key into [customers](/tables/customers.md). |
| total_usd     | NUMERIC   | Order total in US dollars.                |
| placed_at     | TIMESTAMP | When the customer submitted the order.    |

# Joins

Joined with [customers](/tables/customers.md) on customer_id.

# Citations

[1] [BigQuery table schema](https://console.cloud.google.com/bigquery?p=acme&d=sales&t=orders)
```

### 5.4 예시: 자원에 묶이지 않은 개념

```text
---
type: Playbook
title: Incident response — data freshness alert
description: Steps to triage a freshness alert on the orders pipeline.
tags: [oncall, incident]
timestamp: 2026-04-12T09:00:00Z
---

# Trigger

A freshness alert fires when orders lags more than 30 minutes behind
its expected SLA. See the [orders table](/tables/orders.md).

# Steps

1. Check the ingestion job dashboard.
2. ...
```

---

## 6. 상호 연결

개념은 표준 마크다운 링크로 다른 개념을 가리킬 수 있다. 두 가지 형태를 지원한다.

### 6.1 절대(번들 기준) 링크

`/`로 시작하며 번들 루트를 기준으로 해석된다.

```text
See the [customers table](/tables/customers.md) for the join key.
```

문서가 하위 디렉터리 안에서 이동해도 안정적이므로 이쪽이 권장된다.

### 6.2 상대 링크

표준 마크다운 상대 경로다.

```text
See the [neighboring concept](./other.md).
```

### 6.3 링크 의미론

개념 A에서 개념 B로 향하는 링크는 관계가 있음을 단언한다. 그 관계가 구체적으로 어떤 종류인지, 즉 부모/자식인지, 참조인지, 조인 대상인지, 의존 관계인지는 링크 자체가 아니라 주변 산문이 전달한다. 그래프 뷰를 만드는 소비자는 보통 모든 링크를 타입 없는 관계의 방향 간선으로 취급한다.

소비자는 깨진 링크를 무리 없이 처리해야 한다. 번들 안에 대상이 존재하지 않는 링크는 잘못된 것이 아니라, 아직 작성되지 않은 지식을 가리키는 것일 수 있다.

---

## 7. index.md(점진적 공개)

`index.md`는 번들 루트를 포함해 어느 디렉터리에든 올 수 있다. 디렉터리의 내용을 나열해서 점진적 공개를 지원한다. 사람이나 에이전트가 개별 문서를 열기 전에 무엇이 있는지 먼저 보게 하는 장치다.

index 파일은 frontmatter를 갖지 않는다. 본문은 하나 이상의 섹션으로 구성되며, 각 섹션이 제목 아래에 개념을 묶는다.

```text
# Section / Group Heading

* [Title 1](relative-url-1) - short description of item 1
* [Title 2](relative-url-2) - short description of item 2

# Another Section

* [Subdirectory](subdir/) - short description of the subdirectory
```

각 항목에는 링크된 개념의 frontmatter에 있는 `description`을 넣는 것이 좋다. 생산자는 `index.md`를 자동 생성할 수 있고, 소비자는 없을 때 즉석에서 합성할 수 있다.

:::tip frontmatter 예외
`index.md`에 frontmatter가 허용되는 유일한 경우는 번들 루트의 `index.md`에 OKF 버전을 선언할 때다. 11절을 참고하라.
:::

---

## 8. log.md(변경 이력)

`log.md`는 계층의 어느 레벨에든 올 수 있으며, 그 범위의 변경 이력을 기록한다. 형식은 날짜별로 묶은 평평한 리스트이고, 최신순으로 정렬한다.

```text
# Directory Update Log

## 2026-05-22
* **Update**: Added new BigQuery table reference for [Customer Metrics](/tables/customer-metrics.md).
* **Creation**: Established the [Dataplex Playbook](/playbooks/dataplex.md).

## 2026-05-15
* **Initialization**: Created foundational directory structure.
* **Update**: Added progressive-disclosure guidelines to the root [index](/index.md).
```

날짜 제목은 ISO 8601 `YYYY-MM-DD` 형식을 써야 한다. 로그 항목은 산문이고, 앞에 붙는 굵은 단어(`Update`, `Creation`, `Deprecation` 등)는 권장 관례일 뿐 강제는 아니다. 이 구조 덕분에 별도의 컴플라이언스 도구 없이도 번들 자체가 변경 추적 가능한 상태로 유지된다.

---

## 9. 인용

개념 본문이 외부 자료에 근거한 주장을 담을 때, 그 출처는 문서 하단의 `# Citations` 제목 아래에 번호를 매겨 나열하는 것이 좋다.

```text
# Citations

[1] [BigQuery public dataset announcement](https://cloud.google.com/blog/...)
[2] [Internal data quality runbook](https://wiki.acme.internal/data/quality)
```

인용 링크는 절대 URL일 수도, 번들 기준 경로일 수도, 외부 자료를 일급 OKF 개념으로 미러링한 `references/` 하위 디렉터리로의 경로일 수도 있다.

---

## 10. 적합성

번들이 OKF v0.1에 적합하려면 다음 세 조건을 만족해야 한다.

1. 트리 안의 모든 비예약 `.md` 파일이 파싱 가능한 YAML frontmatter 블록을 포함한다.
2. 모든 frontmatter 블록이 비어 있지 않은 `type` 필드를 포함한다.
3. 예약 파일(`index.md`, `log.md`)이 있을 때 각각 6절과 7절의 구조를 따른다.

소비자는 이 외의 모든 제약을 느슨한 지침으로 취급해야 한다. 특히 다음을 이유로 번들을 거부해서는 안 된다.

- 선택 frontmatter 필드가 없음
- 모르는 `type` 값
- 모르는 추가 frontmatter 키
- 깨진 상호 링크
- `index.md` 파일이 없음

이 관대한 소비 모델은 의도된 것이다. 번들이 커지고, 리팩터링되고, 일부가 에이전트에 의해 생성되더라도 OKF가 계속 유용하게 남도록 설계됐다.

---

## 11. 다른 포맷과의 관계

OKF는 여러 확립된 패턴과 의도적으로 가깝다.

- **LLM 위키 레포**: 마크다운 + frontmatter를 에이전트가 읽는 지식 베이스로 쓰는 방식. OKF의 직접적 모태다.
- **개인 지식 도구**: Obsidian, Notion처럼 상호 링크가 걸린 계층형 마크다운을 쓰는 도구.
- **메타데이터 애즈 코드**: 카탈로그 메타데이터를 별도 레지스트리가 아니라 소스 코드 옆에 두는 접근.

OKF가 이들과 다른 점은 명세화되어 있다는 것이다. 도구를 지시하지 않으면서, 상호 운용에 필요한 최소한의 규칙만 못박는다.

비교를 조금 더 구체적으로 보면 다음과 같다.

- **Obsidian**: 이미 평문 마크다운으로 노트를 저장하고 사용자가 파일을 소유한다. 그래서 둘을 가르는 것은 이식성이 아니라 목적이다. Obsidian은 사람의 노트를 위한 것이고, OKF는 에이전트 간 지식 교환을 위한 것이다.
- **Notion**: 마크다운으로 내보낼 수는 있지만 지식이 제품 안에 갇혀 있는 쪽의 대표 사례다.
- **AGENTS.md**: 2025년 8월 OpenAI가 공개했고 6만 개 이상의 프로젝트에서 쓰인다. 모양으로는 가장 가까운 규약이지만, 코딩 에이전트에게 레포 안에서 어떻게 행동할지를 알려주는 것이지 지식 자체를 서술하는 것이 아니다.
- **도메인 스키마(Avro, Protobuf, OpenAPI)**: OKF는 이들을 대체하지 않고 참조한다. 데이터의 구조적 계약은 여전히 이들이 담당하고, OKF는 그 주변의 맥락과 큐레이션된 지식을 담는다.

---

## 12. 버전 관리

이 명세는 OKF 버전 0.1을 규정한다. 이후 개정은 `<major>.<minor>` 형식으로 버전을 매긴다.

- **마이너** 버전 증가는 하위 호환되는 추가를 도입한다. 새 선택 필드, 새 관례적 섹션 제목 등.
- **메이저** 버전 증가는 호환성을 깨는 변경을 할 수 있다. 필수 필드 이름 변경, 예약 파일명 변경 등.

번들은 목표로 하는 OKF 버전을 번들 루트 `index.md`의 frontmatter 블록에 `okf_version: "0.1"`을 넣어 선언할 수 있다. 앞서 적었듯 이것이 `index.md`에 frontmatter가 허용되는 유일한 위치다. 선언된 버전을 이해하지 못하는 소비자는 번들을 거부하지 말고 최선의 노력으로 소비를 시도해야 한다.

---

## 13. 레퍼런스 구현과 샘플

Google은 포맷을 구체화하기 위해 생산자 쪽과 소비자 쪽 양 끝단의 레퍼런스 구현을 함께 공개했다.

- **생산 에이전트(enrichment agent)**: Google의 Agent Development Kit와 Gemini 모델로 만들어졌다. BigQuery 데이터셋을 순회하며 테이블과 뷰마다 OKF 개념 문서를 초안으로 작성하고, 이어서 두 번째 LLM 패스가 권위 있는 문서를 크롤링해 각 개념을 보강한다.
- **정적 HTML 시각화 도구**: 임의의 번들을 백엔드 없이 자기 완결적인 인터랙티브 HTML 그래프 뷰로 렌더링한다.
- **샘플 번들 3종**: GA4 e-commerce, Stack Overflow, Bitcoin 공개 데이터셋을 다룬다.
- **Knowledge Catalog 인제스트**: Google Cloud의 Knowledge Catalog가 OKF를 받아들여 자사 에이전트에 제공하도록 업데이트됐다.

명세 본문에 따르면 기여자는 이슈를 열거나 PR을 보내거나 확장을 제안할 수 있고, 명세는 하위 호환 성장을 전제로 버전이 매겨진다. 레포의 `not an official Google product` 문구는 Google이 대부분의 오픈소스 레포에 붙이는 표준 보일러플레이트로, 코드가 무지원이라는 뜻이지 포맷이 비공식이라는 뜻은 아니다. 명세는 Google이 직접 작성하고 발표했다.

---

## 14. 한계와 비판

v0.1에 대해 유효하게 지적되는 지점들을 정리한다. 채택을 검토한다면 이 부분을 먼저 보는 것이 낫다.

### 14.1 구조적 상호 운용성과 의미적 상호 운용성의 간극

OKF가 실제로 고정하는 것은 컨테이너다. 폴더 레이아웃, 마크다운, YAML frontmatter, 예약 파일명 두 개, 필수 필드 하나. 이는 구조적 상호 운용성을 분명히 진전시킨다. 그러나 의미에 대해서는 거의 아무것도 표준화하지 않고, 그것을 의도적으로 명시한다.

- `type`만 필수인데 타입 값은 어디에도 등록되지 않는다. 한 생산자는 `BigQuery Table`이라 쓰고 다른 생산자는 같은 대상을 `table`이라 쓴다.
- 링크는 타입이 없다. 두 개념이 관련 있다고만 단언할 뿐 어떻게 관련되는지는 말하지 않는다.
- 소비자는 모르는 타입과 깨진 링크를 관용하도록 지시받는다. 스키마 레지스트리도, 개념 타입 분류 체계도 없다.

따라서 OKF가 약속하는 것은 상호 운용 가능한 지식이라기보다 상호 운용 가능한 컨테이너에 가깝다. 둘 사이의 거리가 이 릴리스에서 가장 흥미로운 지점이며, 의미적 합의는 생산자와 소비자, 그리고 앞으로 등장할 관례에 맡겨져 있다.

### 14.2 벤더 중립이라는 표현의 단서

포맷 자체는 개방적이고 특정 모델 제공자나 제공 시스템에 묶이지 않는다는 Google의 설명은 파일 포맷에 한해 사실이다. 다만 레퍼런스 구현은 여전히 Google 모양이다. 생산자는 Gemini를 쓰고, 시연된 소스는 BigQuery이며, 자연스러운 인제스트 경로는 Google 자신의 Knowledge Catalog다. 라이선스는 중립이어도 생태계의 중력은 여전히 Google Cloud 쪽으로 기운다.

### 14.3 필수 필드에 대한 명세와 구현의 불일치

명세는 필수 필드가 하나(`type`)라고 적는다. 그런데 한 분석에 따르면 Google 자신의 레퍼런스 파서는 `type`, `title`, `description`, `timestamp` 네 개 중 하나라도 빠진 파일을 거부한다고 한다. 이는 직접 검증된 1차 사실이 아니라 한 매체의 코드 분석이므로 단정하기는 이르지만, 사실이라면 컨테이너의 필수 표면조차 v0.1에서 완전히 확정되지 않았다는 뜻이 된다. 적합성을 무언가의 보증으로 취급하기 전에 알아둘 가치가 있다.

### 14.4 단일 페이지라는 표현

Google은 명세가 한 페이지에 들어간다고 표현했지만, GitHub의 `SPEC.md`는 451줄 분량이다. 한 페이지라는 말은 문자 그대로라기보다 수사에 가깝다. 그렇다 해도 기술 명세치고 짧고 읽기 쉬운 편이라는 평가 자체는 유효하다.

---

## 15. Docusaurus 사용자 관점의 시사점

이 포맷은 마크다운 + YAML frontmatter + 상호 링크 + 디렉터리 구조의 조합이다. 이는 Docusaurus 문서 사이트가 이미 갖춘 구조와 거의 그대로 겹친다. Docusaurus의 `id`, `title`, `tags` frontmatter는 OKF의 `title`, `tags`와 직접 대응하고, 문서 간 마크다운 링크는 OKF의 cross-link 그대로다.

실질적으로 Docusaurus 콘텐츠를 OKF 번들에 가깝게 만들려면 추가로 필요한 것은 사실상 문서마다 `type` 필드를 부여하는 일이다. 개념을 `Reference`, `Tutorial`, `Note`, `Paper Summary` 같은 타입으로 분류하고, 디렉터리 루트에 `index.md`로 점진적 공개 목록을 두고, 변경 이력을 `log.md`로 남기면 그대로 OKF 번들로 export하거나 병행 관리할 수 있는 형태가 된다.

다만 두 포맷의 목적이 다르다는 점은 분명히 해두는 것이 좋다. Docusaurus는 사람이 브라우저로 읽는 사이트를 렌더링하는 도구이고, OKF는 에이전트가 읽고 교환하는 지식의 직렬화 포맷이다. 같은 마크다운 자산을 두 목적에 모두 쓸 수 있다는 것이 핵심이지, 한쪽이 다른 쪽을 대체하는 관계는 아니다.

---

## 참고

- [Introducing the Open Knowledge Format — Google Cloud Blog](https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing)
- [OKF 명세 원본 (SPEC.md, v0.1) — GitHub](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md)
- [knowledge-catalog 레포](https://github.com/GoogleCloudPlatform/knowledge-catalog)
- [비판적 분석 (구조적 vs 의미적 상호 운용성, 필수 필드 불일치) — Marc Bara, Medium](https://medium.com/@marc.bara.iniesta/googles-new-format-for-agent-context-a-standard-or-just-a-folder-82fb21d92041)
- [MarkTechPost 소개 기사](https://www.marktechpost.com/2026/06/16/google-cloud-introduces-open-knowledge-format-okf-a-vendor-neutral-markdown-spec-for-giving-ai-agents-curated-context/)