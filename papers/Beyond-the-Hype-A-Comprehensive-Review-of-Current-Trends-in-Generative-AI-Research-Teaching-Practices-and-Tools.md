---
title: "Beyond the Hype: A Comprehensive Review of Current Trends in Generative AI Research, Teaching Practices, and Tools"
date: "2024-07-08"
description: "생성형 AI 연구, 교육 실천, 도구에 대한 현재 트렌드를 종합적으로 검토한 연구"
keywords:
  [
    "Generative AI",
    "Large Language Models",
    "Artificial Intelligence",
    "Machine Learning",
    "Pedagogical Practices",
    "Teaching Computing",
    "Computing Education",
    "Natural Language Processing",
  ]
tags:
  [
    "Generative AI",
    "Large Language Models",
    "Artificial Intelligence",
    "Machine Learning",
    "Pedagogical Practices",
    "Teaching Computing",
    "Computing Education",
    "Natural Language Processing",
  ]
authors:
  [
    "james_prather",
    "juho_leinonen",
    "natalie_kiesler",
    "jamie_benario",
    "sam_lau",
    "stephen_macneil",
    "narges_norouzi",
    "simone_opel",
    "vee_pettit",
    "leo_porter",
    "brent_reeves",
    "jaromir_savelka",
    "david_smith",
    "sven_strickroth",
    "daniel_zingaro",
  ]
---

# Beyond the Hype: A Comprehensive Review of Current Trends in Generative AI Research, Teaching Practices, and Tools

## 논문 정보

- 저자 (Authors): James Prather, Juho Leinonen, Natalie Kiesler, Jamie Gorson Benario, Sam Lau, Stephen MacNeil, Narges Norouzi, Simone Opel, Vee Pettit, Leo Porter, Brent N. Reeves, Jaromir Savelka, David H. Smith IV, Sven Strickroth, Daniel Zingaro (\*공동 리더 표기 있음)
- 소속 (Affiliations): Abilene Christian University, Aalto University, Nuremberg Tech, Google, University of California San Diego, Temple University, University of California Berkeley, FernUniversität in Hagen, Virginia Tech, University of Illinois, LMU Munich, University of Toronto Mississauga 등 다수 대학 및 기업 연구자 포함.
- 학회/발행처 (Conference/Publisher): 2024 Working Group Reports on Innovation and Technology in Computer Science Education (ITICSE-WGR 2024), ACM
- 제출년월일 (Publication Date): 2024년 7월 8-10일 (행사일 기준)
- DOI: [https://doi.org/10.1145/3689187.3709614](https://www.google.com/search?q=https://doi.org/10.1145/3689187.3709614)
- 페이지 (Pages): 39페이지 (본문 300-338로 표기됨)
- 라이선스 (License): Creative Commons Attribution International 4.0 License
- 키워드 (Keywords): 생성형 AI(generative AI, GenAI), 거대 언어 모델(large language models), 인공지능(artificial intelligence), 교육학적 실제(pedagogical practices), 컴퓨팅 교육(teaching computing, computing education)
- CCS 개념 (CCS Concepts): 사회 및 전문 주제 → 컴퓨팅 교육; 컴퓨팅 방법론 → 인공지능

<!-- truncate -->

## 요약

### 초록 (Abstract)

생성형 AI(GenAI)는 빠르게 발전하고 있으며, 컴퓨팅 교육 분야의 문헌도 거의 그만큼 빠르게 확장되고 있다.
GenAI 도구에 대한 초기 반응은 공황과 유토피아적 낙관론 사이에서 엇갈렸다.
많은 이들이 GenAI의 기회와 과제를 빠르게 지적했다.
연구자들은 이 새로운 도구들이 대부분의 입문 프로그래밍 작업을 해결할 수 있으며 교육과정 전반에 걸쳐 혼란을 야기하고 있다고 보고했다.
이러한 도구는 코드를 작성하고 설명하며, 오류 메시지를 개선하고, 강사를 위한 자료를 만들고, 심지어 전통적인 조교처럼 학생들에게 피드백과 도움을 제공할 수도 있다.
2024년에는 컴퓨팅 교실에서의 GenAI 사용 효과에 대한 새로운 연구가 등장하기 시작했다.
이 새로운 데이터는 교실 교육을 대규모로 지원하고 학생들에게 GenAI로 코딩하는 방법을 가르치는 데 GenAI를 사용하는 것을 포함한다.
전자를 지원하기 위해 프로그래밍 과제에 대해 학생들에게 개인화된 피드백을 제공하거나 프로그래밍과 프롬프팅 기술을 동시에 가르칠 수 있는 새로운 종류의 도구들이 등장하고 있다.
문헌이 매우 빠르게 확장됨에 따라, 본 보고서는 컴퓨팅 교실 현장에서 무슨 일이 일어나고 있는지 요약하고 설명하는 것을 목표로 한다.
우리는 체계적 문헌 검토, 교육자 및 업계 전문가 설문 조사, 그리고 GenAI를 과정에 사용하는 교육자, GenAI를 연구하는 교육자, 컴퓨팅 교육을 지원하는 GenAI 도구를 만드는 연구자들과의 인터뷰를 제공한다.
이러한 방법과 데이터 출처의 삼각 측량은 우리 커뮤니티의 이 중요한 순간에 GenAI 사용 및 인식에 대한 이해를 확장시킨다.

### 서론 (Introduction)

컴퓨팅 교육은 GenAI의 발전으로 인해 지각 변동을 겪고 있다.
초기 연구들은 GenAI가 프로그래밍 문제 해결 및 시험 문제 풀이에 있어 놀라운 정확도를 보이며, 교육자 지원, 과제 생성 등 다양한 방식으로 활용될 수 있음을 보여주었다.
동시에 과잉 의존, 모델의 편향성, 교육적 부정행위와 같은 잠재적 위협에 대한 우려도 제기되었다.
K-12 수준의 교사들 또한 GenAI 통합에 어려움을 겪고 있다.
논의는 점차 위협, 과제, 기회에서 실질적인 채택 문제로 옮겨가고 있으며, 커리큘럼에 GenAI를 신뢰할 수 있고 안전하게 구현하는 방법을 결정하는 것이 다음 단계로 제시되었다.
본 보고서는 GenAI를 사용하여 코드를 작성하도록 가르치는 경우와, 도움 봇, 코드 피드백, 과제 생성 등을 통해 교육 과정을 지원하기 위해 GenAI 도구를 사용하는 경우를 구분하고자 한다.

### 보고서의 목표 및 기여 (Goals and Contributions)

본 보고서는 다음의 주요 연구 목표를 다룬다.

1.  (1a) 교육자들이 컴퓨팅 교육에 GenAI를 어떻게 통합하고 있는가?
    (1b) 그리고 왜 이러한 선택을 하는가?
2.  (2a) GenAI의 등장으로 소프트웨어 개발 기술에 대한 기대치가 어떻게 변했는가?
    (2b) 교사와 업계 전문가에 따르면 미래에 어떤 컴퓨팅 역량이 필요한가?

이를 위해 체계적 문헌 검토, 교육자 및 소프트웨어 개발자 대상 설문 조사, 컴퓨팅 교육자/연구자/GenAI 도구 개발자와의 질적 인터뷰를 수행했다.
이를 통해 교육자들이 GenAI를 과정에 통합하기로 선택한 방법과 이유, 그리고 교육 과정 및 산업계의 GenAI 도구 사용에 대한 미래 발전 기대치를 기술한다.

### 체계적 문헌 검토 (Systematic Literature Review)

- **방법:** 교육자들이 컴퓨팅 교실에 GenAI를 어떻게 통합하고 있는지 파악하기 위해 체계적 문헌 검토(SLR)를 수행했다. 2024년 5월 23일까지 ASEE Peer, arXiv, Scopus, ACM Digital Library, IEEE Xplore 데이터베이스에서 관련 논문을 검색했다. 포함/제외 기준(3차 교육 수준의 컴퓨팅 교육, GenAI 관련, 실제 교실 개입 또는 학생 대상 사용자 연구, 특정 분량 이상 등)을 적용하여 최종 71개 논문을 선정했다.
- 결과:
  - **기술 통계:** 연구 저자들의 국가는 미국(34%)과 뉴질랜드(14%)가 가장 많았고, 대부분 학계 소속이었다. 연구 대상 학생 집단의 국가 분포도 유사했다. CS1 과정이 가장 많이 연구되었고(20편), 상위 과정도 다수 포함되었다. 혼합 연구 방법이 가장 많이 사용되었으며, 대부분의 연구는 감독되지 않은 환경(예: 과제)에서 수행되었다. Python이 가장 많이 사용된 프로그래밍 언어였다.
  - **GenAI 통합 방식(SLR-RQ2):** 코드 작성 지원(26편), 코드 이해(10편), 힌트 제공(8편), 학습 자료 생성(7편) 순으로 GenAI가 활용되었다. 대부분의 연구(34/71)는 ChatGPT와 같은 범용 GenAI 도구를 사용했으며, 교육자가 가드레일을 제공하는 도구(예: CodeHelp, Promptly, CodeAid)는 32편이었다. 대다수 연구(49/70)에서 학생들에게 GenAI 사용법에 대한 지침이 제공되지 않았다고 보고되었다.
  - **GenAI 통합 동기(SLR-RQ3):** 대부분의 연구(59/71)는 학생들의 이익을 위해 GenAI를 통합했으며, 5편은 교사의 이익, 7편은 양쪽 모두의 이익을 위한 것이었다.
  - **GenAI 통합 권장 사항:** GenAI 사용에 대한 강사의 지침이 없는 경우, 교육적 가드레일이 포함된 도구를 사용하는 것이 긍정적인 결과를 보였다(73% vs 55%). 코드 이해(80%)나 학습 자료 생성(86%) 작업이 코드 작성(58%)이나 힌트 생성(50%)보다 GenAI 활용 시 긍정적 결과가 더 많았다.

### 교육자 및 개발자 관점: 혼합 연구 방법 (Educator and Developer Views: A Mixed-Methods Approach)

- **방법:** 교육자와 소프트웨어 개발자를 대상으로 각각 설문조사를 실시하고, 추가로 교육자들을 대상으로 심층 인터뷰를 진행했다. 교육자 설문조사는 GenAI의 교실 통합 여부 및 방식, 동기, 프로그래밍 교육 역량 변화에 대한 인식을 파악하는 데 중점을 두었다(N=76). 개발자 설문조사는 산업 현장에서의 GenAI 도구 사용 현황, 작업 흐름에 미치는 영향, 소프트웨어 개발에 필요한 역량 변화에 대한 관점을 파악하는 데 초점을 맞추었다(N=39). 인터뷰는 GenAI 도구 개발자, GenAI 연구 교육자, GenAI 사용 교육자 등 총 17명을 대상으로 진행되었다.
- 결과:
  - **정책(RQ1):** 대다수 교육자(77.6%)는 학생들의 GenAI 도구 사용을 명시적으로 금지하지 않았으나, 적극적으로 통합하는 비율은 35.5%였다. GenAI 사용을 금지하는 교육자 중 일부(58.8%)는 이를 방지하기 위한 조치를 취하고 있었으며, 주로 코드 검토, 과제/시험 변경, 학생들의 사회적 책임에 호소하는 방식이었다. 기관 및 강사 수준에서 사용자 개인 정보 보호, 학문적 정직성 등에 대한 정책이 마련되고 있었다. 산업계에서는 소수의 개발자만이 회사 정책으로 인해 GenAI 사용이 금지된다고 응답했다.
  - **교육-활용 및 교육-지원(RQ2, RQ3):** GenAI를 적극적으로 통합하는 교육자들은 주로 입문 프로그래밍(40.7%) 또는 소프트웨어 공학(33.3%) 과정을 가르쳤다. 대부분(74.1%) 강사와 학생 모두 GenAI를 사용할 것으로 예상했다. 학생들은 주로 무료 공개 도구(59.3%)를 통해 GenAI에 접근했다. GenAI는 학생들에게 사용법을 가르치거나(74.1%), 교육 자료 생성(63.0%)에 주로 활용되었다. 인터뷰에서는 모델의 편향성 교육, 생성된 코드/증명 비판적 분석, 산업 현장 대비를 위한 고급 과정에서의 활용 등이 언급되었다.
  - **동기(RQ4):** GenAI 사용을 허용하지 않는 주된 이유는 학생들이 프로그래밍 기초를 먼저 다져야 한다는 교육적 판단, 학생들의 오용 가능성, GenAI 자체에 대한 부정적 인식 등이었다. GenAI를 통합하는 주된 이유는 산업 현장 대비, 윤리적 사용 교육 책임감, 학생 학습의 효율적 지원, 최신 기술 동향 적응 등이었다. GenAI를 통합하지 않는 이유로는 교육자 자신의 시간/기술/교육 역량 부족, 학생들의 동기/능력에 대한 우려, 유용성에 대한 의구심, 기관의 지원 부족 등이 언급되었다.
  - **도구(RQ5):** 설문조사에서는 모든 교육자가 ChatGPT, Copilot과 같은 표준 산업용 GenAI 도구를 사용한다고 응답했으며, 소수만이 자체 개발 도구를 사용했다. 인터뷰에서는 과정 자료에 특화된 RAG(Retrieval-Augmented Generation) 시스템, 학생 상호작용 추적 도구 등 다양한 맞춤형 도구들이 언급되었다.
  - **인식된 결과(RQ6):** 인터뷰에서 강사들은 GenAI 사용의 긍정적/부정적 결과를 모두 인식했다. 부정적으로는 학생들이 AI에게 코드 작성을 시키는 문제, 이로 인한 학업 부정행위 증가 및 실제 학습 부족, AI 생성 제안에 대한 과신으로 인한 시간 낭비 등이 있었다. 긍정적으로는 학생들이 도움 없이 만들 수 있는 것보다 더 복잡하고 고품질의 작업을 생성하며, AI가 어려운 개념 설명, 논리적 오류 지적, 컴파일러 오류 메시지 개선 등 튜터 역할을 할 수 있다는 점이 언급되었다.
  - **산업계 사용 현황(RQ7):** 설문 응답 개발자의 79.5%가 업무에 GenAI를 사용했으며, 주로 코드 생성 및 자동 완성에 활용했다. 교육자들은 개발자들의 GenAI 사용 빈도를 다소 과소평가하는 경향이 있었다.
  - **역량 변화(RQ8):** 교육자의 75%가 GenAI로 인해 소프트웨어 개발 기술이 변했다고 생각했다. 코드 작성보다는 코드 읽기, 테스트, 디버깅, 문제 이해/분해, 프롬프트 엔지니어링과 같은 상위 수준 기술의 중요성이 커졌다고 인식했다. 개발자들 또한 유사한 변화를 언급하며, GenAI 결과물의 비판적 평가, 프롬프팅, 세심함 등을 새로운 핵심 역량으로 꼽았다.
  - **형평성(RQ9):** 유료 도구 접근성 차이, GenAI 도구를 효과적으로 사용하는 데 필요한 메타인지 능력 차이, 비영어권 사용자 및 낮은 문해력 학생들의 어려움, 장애 학생들의 접근성 문제 등 GenAI가 기존의 불평등을 심화시킬 수 있다는 우려가 제기되었다.
  - **미래(RQ10):** GenAI는 채점 자동화, 맞춤형 피드백 제공 등 교육을 지속적으로 변화시킬 것으로 예상되지만, 효과적이고 공평한 사용을 위한 신중한 계획과 지속적인 적응이 필요하다는 데 의견이 모였다. 학습 결과 및 평가 방식도 AI의 역할 증가에 맞춰 변화하여, 복잡한 문제 해결을 위한 AI 도구와의 상호작용 능력을 강조하게 될 것으로 예측되었다.

### 결론 (Conclusions)

본 연구는 체계적 문헌 검토, 설문 조사, 인터뷰를 통해 GenAI가 컴퓨팅 교육에 미치는 영향과 교육자 및 개발자의 인식을 종합적으로 분석했다.
개발자의 약 80%가 업무에 GenAI를 사용하고 있으며, 교육자의 75%는 프로그래밍 기술이 변화하고 있음을 인지하고 있다.
교육자들은 시험 비중을 높이고, 구술시험 등 대안적 평가 방식을 모색하며, 학습 과정 자체를 중시하는 방향으로 평가 방식을 바꾸고 있다.
프로그래밍 역량은 코드 작성에서 코드 읽기, 문제 이해/분해, 디버깅, 프롬프팅 등으로 중요성이 이동하고 있다.
산업 현장에서 GenAI가 널리 사용됨에 따라 학생들을 이에 대비시키는 것이 중요하며, 이를 위해 교육 과정 및 역량 기대치를 지속적으로 조정해야 한다.
GenAI 사용 지침을 제공하거나 교육적 가드레일이 포함된 맞춤형 도구를 사용하는 것이 긍정적인 학습 결과를 가져오는 것으로 나타났다. GenAI의 한계와 윤리적 문제에 대한 교육의 필요성도 강조되었다.

### 향후 연구 (Future Work)

컴퓨팅 교육 외 다른 분야로 체계적 문헌 검토를 확장하여 비교 연구를 수행하고, 디버깅 지원, 소크라테스식 문답법 등 GenAI의 새로운 교육적 활용 방안을 모색할 필요가 있다.
또한, GenAI가 고용 시장 및 졸업생 자격 요건에 미치는 장기적인 영향에 대한 지속적인 조사가 요구된다.
