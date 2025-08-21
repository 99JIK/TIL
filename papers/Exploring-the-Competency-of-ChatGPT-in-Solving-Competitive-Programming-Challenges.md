---
title: "Exploring the Competency of ChatGPT in Solving Competitive Programming Challenges"
date: "2024-01-01"
description: "ChatGPT가 경쟁 프로그래밍 문제 해결에서 보이는 능력을 탐구한 연구"
keywords:
  [
    "ChatGPT",
    "Competitive Programming",
    "Code Generation",
    "Problem Solving",
    "Large Language Models",
    "Programming Education",
    "Machine Learning",
    "AI in Education",
  ]
tags:
  [
    "ChatGPT",
    "Competitive Programming",
    "Code Generation",
    "Problem Solving",
    "Large Language Models",
    "Programming Education",
    "Machine Learning",
    "AI in Education",
  ]
authors: ["md_eusha_kadir", "tasnim_rahman", "sourav_barman", "md_al_amin"]
---

# Exploring the Competency of ChatGPT in Solving Competitive Programming Challenges

## 논문 정보

- 저자 (Authors): Md. Eusha Kadir, Tasnim Rahman, Sourav Barman, Md. Al-Amin
- 소속 (Affiliations): Institute of Information Technology, Noakhali Science and Technology University, Noakhali, Bangladesh
- 교신 저자 (Corresponding Author):Tasnim Rahman (tasnim.iit@nstu.edu.bd)
- 학술지 (Journal): International Journal of Advanced Trends in Computer Science and Engineering (IJATCSE)
- 볼륨 (Volume) 및 호 (No.): Volume 13, No.1
- ISSN: 2278-3091
- DOI: https://doi.org/10.30534/ijatcse/2024/031312024
- 접수일 (Received Date): 2023년 12월 20일
- 채택일 (Accepted Date): 2024년 1월 21일
- 발행일 (Published Date): 2024년 2월 06일
- 키워드 (Keywords): ChatGPT, 문제 해결(Problem-solving), 경쟁적 프로그래밍(Competitive programming), 프로그래밍 챌린지(Programming challenges)

<!-- truncate -->

## 요약

### 서론 (Introduction)

본 연구는 인공지능 언어 모델인 ChatGPT가 경쟁적 프로그래밍 문제 해결에서 어느 정도의 역량을 보이는지 탐구하는 것을 목표이다.
연구팀은 ChatGPT가 생성한 답안의 정확성을 평가하기 위해 다양한 주제와 난이도(쉬움, 중간, 어려움)의 경쟁적 프로그래밍 문제들을 선정했다.

### 연구 방법 (Study Setup / Methodology)

연구팀은 온라인 코딩 플랫폼인 LeetCode에서 10가지 다른 카테고리(배열, 백트래킹, 이진 탐색, 비트 조작, 동적 프로그래밍, 그래프, 그리디 알고리즘, 힙, 수학, 정렬)에 걸쳐 총 300개의 경쟁적 프로그래밍 문제를 수집했다.
각 카테고리마다 쉬움, 중간, 어려움 난이도의 문제가 각각 10개씩 포함되었다.

ChatGPT에게 문제 해결을 요청하는 방식은 아래 세 가지 접근법을 활용했다:

1.  문제의 URL을 제공하는 방식 (ChatGPT의 지식 마감일인 2021년 9월 이후 문제에 대해서는 한계)
2.  문제 설명 전체를 복사하여 제공하는 방식 (LeetCode 제출 형식 미충족 문제 발생)
3.  문제 설명과 함께 LeetCode에서 요구하는 코드 구조(클래스, 메소드 선언 등)를 명시하는 **프롬프트 엔지니어링** 방식 (가장 효과적)

ChatGPT가 Java 언어로 생성한 코드들은 LeetCode에 제출되어 정답 여부(Accepted), 오답(Wrong Answer), 런타임 에러(Runtime Error), 시간 초과(Time Limit Exceeded), 컴파일 에러(Compile Error) 등의 결과를 수집했다.
이 결과는 일반 사용자들의 평균 정답률과 비교 분석했다.

### 주요 결과 (Result Discussion)

- **전반적 성능:** ChatGPT는 전체 300문제 중 **66.00%의** **정답률(acceptance rate)**을 기록하여, 평균적인 인간 참가자의 정답률인 52.95%보다 높은 성과를 보였습니다.
- 난이도별 성능:
  - 쉬움(Easy): ChatGPT 89.00% (인간 평균 62.72%)
  - 중간(Medium): ChatGPT 68.00% (인간 평균 54.04%)
  - 어려움(Hard): ChatGPT 41.00% (인간 평균 36.87%)
    - ChatGPT와 인간 모두 문제의 난이도가 높아질수록 정답률이 감소하는 경향을 보였으나, 모든 난이도에서 ChatGPT가 평균적인 인간보다 높은 정답률을 기록했다.
- 카테고리 별 성능:
  - ChatGPT는 **이진 탐색(Binary Search)** 카테고리에서 83.33%로 가장 높은 정답률을 보였다.
  - **그리디 알고리즘(Greedy Approach)** 카테고리에서는 50.00%로 가장 낮은 정답률을 보였다.
  - 인간 참가자들은 수학(Math) 및 비트 조작(Bit Manipulation)과 같은 고급 주제에서 ChatGPT보다 높은 정답률을 보이는 경향이 있었는데, 이는 해당 분야에 능숙한 전문가 수준의 참가자들이 주로 시도하기 때문일 수 있다.
- **프롬프트 엔지니어링의 효과:** 문제 설명과 함께 명확한 코드 구조를 제시하는 프롬프트 엔지니어링 방식이 컴파일 에러를 현저히 줄이고 응답의 질을 향상시키는 데 매우 효과적이었다.
- **오류 유형:** ChatGPT는 그래프(Graph) 관련 문제에서 런타임 에러(10% 발생)를, 수학(Math) 관련 문제에서 시간 초과(13.33% 발생)를 가장 빈번하게 겪었다.

### 고찰 및 한계 (Threats to Validity)

- 데이터셋의 크기 및 다양성: 300개의 LeetCode 문제로 한정되어 있어, 더 많은 문제와 다양한 알고리즘 영역을 포함하면 일반화 가능성이 높아질 수 있다.
- 플랫폼 특정성: LeetCode 플랫폼의 통계를 사용하였으므로 다른 플랫폼(Codeforces, HackerRank 등)에서는 결과가 다를 수 있다.
- ChatGPT의 진화: ChatGPT는 지속적으로 업데이트되므로, 향후 동일한 연구 재현 시 결과가 달라질 수 있다 (본 연구는 2023년 7-8월 버전 사용).

### 결론 (Conclusion)

본 연구는 ChatGPT가 경쟁적 프로그래밍 문제 해결에 있어 상당한 잠재력을 가지고 있음을 보여준다.
특히 쉬움 및 중간 난이도의 문제에서는 인간 참가자의 평균을 능가하는 성능을 보였으나, 어려운 문제나 복잡한 알고리즘, 수학적 문제 해결에는 여전히 약점을 드러냈다.
프롬프트 엔지니어링은 ChatGPT의 문제 해결 능력을 향상시키는 데 중요한 역할을 했다.
이러한 결과는 향후 프로그래밍 대회 문제 출제자들이 AI 시스템에 더 저항력 있는 문제를 만드는 데 기여할 수 있으며, 연구팀은 이를 추후 연구 과제로 삼을 계획이다.
