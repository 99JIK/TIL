# How to use Docusaurus

---

## Docusaurus?

Docusaurus는 Meta에서 개발 및 유지보수하는 React 기반 오픈 소스 Static Site Generator(SSG)이다.

주로 기술 문서 웹사이트를 쉽고 빠르게 구축 및 관리하는 데 특화되어 있다.

### 주요 특징 및 기능

1.  Markdown 기반: 컨텐츠를 익숙하고 간편한 마크다운 문법으로 작성할 수 있어 문서 관리가 용이하다.
2.  React 기반: 웹 기술인 React를 사용해 확장성이 뛰어나고 유연한 커스터마이징이 가능하다.
3.  Versioning: Software library나 Framework처럼 여러 버전의 문서를 관리해야 할 때 유용하다.
    특정 버전의 문서를 선택해 볼 수 있다.
4.  검색 기능: Algolia DocSearch와 같은 Search solution과 쉽게 통합되어 사용자가 방대한 문서 내에서 원하는 정보를 쉽게 찾을 수 있다.
5.  Locale 지원(i18n): Website를 여러 언어로 번역하고 제공하는 기능을 내장하고 있어 글로벌 프로젝트에 적합하다.
6.  문서 외 기능: 기술 문서 뿐 아니라 블로그, 커스텀 페이지 등 다양한 형태의 컨텐츠를 웹사이트에 추가 가능하다.
7.  MDX 지원: 마크다운 파일 내에서 React component를 직접 사용할 수 있는 MDX를 지원하여 더욱 Interactive하고 Dynamic한 컨텐츠를 만들 수 있다.
8.  쉬운 배포: 생성된 Static file들은 Github pages, Netlify, Vercel 등 다양한 Hosting service에 쉽게 배포 가능하다.
9.  Customizing & Theme: 기본 테마를 사용하거나 필요에 맞게 디자인과 레이아웃을 수정하여 사용 가능하다.

### 장점

- 빠른 속도: Static site이므로 로딩 속도가 매우 빠르다.
- 간편한 설정 및 사용: 비교적 쉽게 시작하고 운영 가능하다.
- 개발자 친화적: 문서 작성 및 관리에 최적화된 기능을 제공한다.
- SEO 최적화: 정적 컨텐츠는 SEO에 유리하다.
- 활발한 커뮤니티: 많은 프로젝트에서 사용하며 커뮤니티 지원이 활발하다.

### 사용 사례

Docusaurus는 아래 웹사이트를 구축하는 데 널리 사용되었다.

- [React Native](https://reactnative.dev/)
- [Jest](https://jestjs.io/)
- [Babel](https://babeljs.io/)

---

## Markdown?

이제 Docusaurus에서 기반으로 사용하는 Markdown에 대해 알아보자.

Markdown은 경량 Markup Language이다.

특수 기호를 사용하여 웹에서 내용을 쉽게 서식화 할 수 있게 디자인 되어있으며 이를 HTML로 쉽게 변환한다.

읽고 쓰기 쉽다는 장접으로 인해 많은 개발자들이 README 파일, 포럼 게시물, 블로그, 기술 문서 등을 작성할 때 사용한다.

### 주요 Markdown 문법

#### Headers

`#` 기호를 사용하여 제목을 표현한다.

`#` 개수에 따라 `<h1>`~`<h6>`까지 Header level을 나타낸다.

```markdown
# H1

## H2

### H3

#### H4

##### H5

###### H6
```

```html
<h1>H1</h1>
<h2>H2</h2>
<h3>H3</h3>
<h4>H4</h4>
<h5>H5</h5>
<h6>H6</h6>
```

### Emphasis

Italic, Bold, Strickethrough를 표시할 수 있다.

```markdown
_Italic_
_Italic_
**Bold**
**Bold**
**_Italic+Bold_**
**_Italic+Bold_**
~~Strkiethrough~~
```

### Lists

Unordered / Ordered list를 만들 수 있다.

#### Unordered lists

`*`, `+`, `-` 기호를 사용한다.

```markdown
- Item 1
- Item 2
  - Sub item 2.1
  - Sub item 2.2

* Item 3

- Item 4
```

물론 선택사항이겠지만 통일하는 것을 추천하며 필자는 `-` 기호를 선호한다(`*` 기호의 경우 사용처가 다양).

#### Ordered lists

Numbering 이후 `.` 기호를 붙여 표기한다.

```markdown
1. Item 1
2. Item 2
   1. Item 2.1
   2. Item 2.2
3. Item 3
```

### Links

Inline과 Reference가 존재하며 둘 다 Rendering 시 동일하게 표시된다.

`[<description>](<link>)` 형태로 사용한다.

```markdown
[Google](https://google.com)
[JIK\'s TIL](https://www.99jik.com)
```

[Google](https://google.com)
[JIK\'s TIL](https://www.99jik.com)

### Images

Link 앞에 `!` 기호를 붙여 이미지를 참조한다.

```markdown
![대체 텍스트](https://avatars.githubusercontent.com/u/116618620?v=4 "이미지 설명-제발 확인하지 마세요 그냥 넣은겁니다.")
```

![대체 텍스트](https://githubusercontent.com/u/116618620?v=4 "이미지 설명-제발 확인하지 마세요 그냥 넣은겁니다.")

### Code Blocks

Backtick(\`)이나 `~` 기호 3개로 감싸고 특정 언어를 명시해 Syntax highlighting하는 Block을 만들 수 있다.

````markdown
```c
#include <stdio.h>
int main() {
	printf("Hello World!");
	return 0;
}
```
````

```c
#include <stdio.h>
int main() {
	printf("Hello World!");
	return 0;
}
```

### Blockquotes

`>` 기호를 사용하여 Blockquotes를 나타낸다.

중첩 역시 가능하다.

```markdown
> Blockquotes
>
> > Double Blockquotes
```

> Blockquotes
>
> > Double Blockquotes

### Horizontal Rules

세 개 이상의 `-`, `*`, `_` 기호를 연속하여 사용해 수평선을 만둘 수 있다.

물론 필자는 역시 `-` 기호를 선호한다.

```markdown
---

---

---
```

### Tables

Github Flavored Markdown(GFM)에서 확장된 기능이나 많은 Markdown Editor에서 지원한다.

`|` 기호와 `-` 기호를 사용해 표를 만든다.

`:` 기호를 통해 정렬을 지원할 수 있다.

```markdown
| Header 1(left) |     Header 2(mid)      | Header 3(right) |
| :------------- | :--------------------: | --------------: |
| Contents 1     |       Contents 2       |      Contents 3 |
| Long contents  | Too much long contents |    Numbers 1234 |
```

| Header 1(left) |     Header 2(mid)      | Header 3(right) |
| :------------- | :--------------------: | --------------: |
| Contents 1     |       Contents 2       |      Contents 3 |
| Long contents  | Too much long contents |    Numbers 1234 |

### Task Lists

표와 마찬가지로 GFM 확장 기능으로 Check box list를 생성한다.

```markdown
- [x] Checked
- [ ] Unchecked
  - [ ] Sub task 1
  - [x] Sub task 2
```

- [x] Checked
- [ ] Unchecked
  - [ ] Sub task 1
  - [x] Sub task 2

### Escaping Characters \*\*\*(CRITICAL!)

Docusaurus에서 Static page로 변환 가능한 Markdown file을 작성하기 위해 신경써야 하는 정말 중요한 내용으로 특수 문자(`*`, `<`, `>`, `\`, `"`, `'`, `#`)들을 텍스트 그대로 나타내고 싶을 때 해당 문자 앞에 `\` 기호를 붙인다.

특히 Docusaurus는 Markdown과 MDX의 구분이 없으므로 `<`, `>`, `[`, `]`, `{`, `}`과 같은 수식 표현에 쓰이는 표현에 이를 누락할 시 build 시 에러를 발생시키므로 주의해야 한다.

```Markdown
\*Literal Asterisk\*
```

\*Literal Asterisk\*

---

## Docusaurus + Markdown Editor

필자를 포함한 이 글을 읽는 사람들은 아마 Docusaurus를 포트폴리오 및 TIL 사이트로 활용할 것이라 생각된다.

따라서 그에 적당한 에디터를 추천하자면 아래와 같다.

1.  Typora(필자 사용): What You See Is What You Get(WYSIWYG)이 가장 큰 특징이며 개별 Markdown 파일을 직접 열고 편집하는 데 매우 직관적이고 편리하다.
    1.  장점
        1.  사용 편의성 및 다양한 테마 지원
        2.  표, LaTeX, Mermaid.js 지원
        3.  PDF, HTML 등 다양한 포맷으로 내보낼 수 있으나 그닥 좋진 않음
        4.  이미지 로컬 저장 및 관리가 용이(정말 편함!!!!)
    2.  플랫폼: Windows, MacOS, Linux
    3.  가격: 유료(일회성 구매)
2.  Visual Studio Code(필자 사용): 확장 기능을 활용해 Git, Github action extension을 사용하여 편리한 관리가 가능하며 Markdown 이외의 파일들을 수정하기에 매우 편리하며, Markdown 파일도 수정 가능하다.
    1.  장점
        1.  무료
        2.  `Markdown All in One`, `Markdown Preview Enhanced` 등의 Extension을 사용하여 편리하게 Markdown 문서 편집 가능
        3.  Git 및 Github 연동 등 개발 관련 기능 통합
        4.  가볍고 빠르고 안정적
    2.  플랫폼: Windows, MacOS, Linux
    3.  가격: 무료
3.  Obsidian: Local directory에 Markdown file들을 저장 및 관리하는 Vault 개념을 사용해 Backlink, Graph view를 통해 Personal Knowlendge Management(PKM)을 구축하는 데 특화되어 있다.
    1.  장점
        1.  강력한 Link, Backlink 기능
        2.  Plugin을 통한 높은 확장성(Calendar, Kanban, Diagram, etc.)
        3.  모든 데이터가 Local에 일반 Text file로 저장되어 데이터 관리 용이
        4.  빠른 검색 속도(Indexing)
    2.  플랫폼: Windows, MacOS, Linux, Android, iOS
    3.  가격: 개인 사용 시 무료
4.  Mark Text: 사용해보진 않았으나 Typora와 유사한 WYSWYG 경험을 제공하는 것이 목표인 무료 오픈소스 에디터이다.
    1.  장점
        1.  무료, 오픈소스
        2.  Typora와 유사하고 직관적인 실시간 편집 환경
        3.  다양한 테미 및 모드
        4.  표, 수식, 다이어그램 지원
    2.  플랫폼: Windows, MacOS, Linux
    3.  가격: 무료

필자는 어릴 때 메모장에 Markdown 문법을 직접 타이핑 하며 쓰다가 21년 Typora를 쓰곤 신세계를 느껴버려 돈을 주고 샀으나, 요즘 좋은 에디터들이 즐비한데 굳이 돈을 주고 사야 하나 싶다.

물론 판단은 각자에게 맡기겠다.
