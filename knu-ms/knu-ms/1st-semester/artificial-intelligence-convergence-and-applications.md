---
description: GRAD0732-001 / Wed. 09:00~12:00 / 공대9호관 521 / 이성현 교수님 sh0416@knu.ac.kr
icon: brain-circuit
---

# Artificial Intelligence: Convergence and Applications

{% hint style="info" %}
Course Outline

This course provides a comprehensive exploration of Generative AI, with a focus on their theoretical foundations and practical applications. Students will dive deep into large language models and their recent developments, examining both technical principles and real-world implementations. The course covers advanced topics including large language models, retrieval-augmented generation, prompt engineering, and multimodal AI systems. Through hands-on projects and case studies, students will learn to develop and deploy NLP and generative AI applications across various industries.
{% endhint %}

| Attendance | Midterm Exam | Final Exam | Assignment |
| ---------- | ------------ | ---------- | ---------- |
| 10%        | 20%          | 20%        | 50%        |

## GRAD0732 - 인공지능융합응용 Midterm&#x20;

***

### 강의 1: 소개 (Introduction)

* **강의 개요:**
  * **주제:** 최신 생성형 AI, 특히 거대 언어 모델(Large Language Models, LLMs) 동향 탐구 \[989]
  * **수업 정보:** 시간 (수 9:00-11:45), 장소 (공대 9호관 521호) \[990]
  * **평가:** 출석 10%, 개인 과제(Proof-of-Concept 실험 및 동료 리뷰) 30%, 개인 발표(논문 리뷰) 20%, 중간고사 20%, 기말고사 20% \[998, 1003, 1004, 1005, 1006, 1007, 1009, 1011]
  * **참여:** 적극적인 참여 및 질의응답 권장 (보너스 포인트) \[991, 992, 993]
  * **선수 조건:** 기본적인 코딩 능력 필요. 수학/머신러닝 지식은 도움되나 필수 아님. \[994, 997]
  * **수업 규칙:** 노트북/전자기기 사용 지양 (필요시 사전 문의) \[1001, 1002]
* **생성형 AI 활용:**
  * **허용 범위:** ChatGPT, Claude 등 활용 가능하나 최종 결과물은 본인 작성 필수. \[1013, 1014, 1015]
  * **주의:** 생성형 AI는 잘못된 정보(환각)를 생성할 수 있으므로, **사실 확인(Double Check)** 필수. \[1016]
* **생성형 AI 응용 사례:**
  * **ChatGPT:** OpenAI가 개발한 대화형 AI 모델 \[1019, 1020]. 질문 답변, 실수 인정, 부적절한 요청 거부 가능 \[1021]. InstructGPT의 형제 모델 \[1022].
  * **활용 분야:**
    * **Q\&A:** Stack Overflow 트래픽 감소 사례 \[1033, 1035]
    * **과제 도움:** 학생들의 사용 증가 \[1037, 1038, 1039]
    * **잡담(Chitchat):** Character.ai 와 같은 감성적 교류 \[1042, 1043]
    * **로봇 제어:** 자연어 명령을 코드로 변환하여 로봇 제어 (Code as Policies) \[1044, 1045]
    * **법률 연구:** 유사 판례 검색 및 법률 의견 제공 (RAG 활용) \[1046, 1047, 1048]
    * **금융:** BloombergGPT - 금융 데이터 특화 LLM 개발 \[1051, 1052, 1053]

***

### 강의 2 & 2-2: 언어 모델 기초 (Language Model Basics)

* **언어 모델 (LM) 정의:**
  * 이전 토큰 시퀀스가 주어졌을 때 **다음 토큰의 확률 분포** P(y\_t|y\_{1:t-1})를 출력하는 모든 모델 \[751, 881]
  * 역사적으로는 통계적 n-gram 모델 사용 (제한된 과거 정보만 고려) \[753, 883]
* **시퀀스 확률 계산:**
  * 언어 모델은 다음 단어의 **가능도(Likelihood)**&#xB97C; 출력 \[760, 885]
  * 전체 시퀀스 확률은 **연쇄 법칙(Chain Rule)**&#xC744; 이용해 계산: P(Y) = P(y\_1, ..., y\_T) = \prod\_{i=1}^{T} P(y\_i|y\_{1:i-1}) \[762, 764, 887, 889]
* **조건부 언어 모델 (Conditional LM):**
  * 추가적인 **조건 텍스트(X)**&#xB97C; 입력받아 다음 토큰 예측: P(y\_t|y\_{1:t-1}, x\_{1:I}) \[767, 769, 890, 892]
  * 모델 파라미터 \theta를 사용하여 확률 계산: P\_\theta(y\_i|y\_{1:i-1}, x\_{1:I}) \[770, 771, 893, 894]
* **Sequence-to-Sequence (Seq2Seq) 모델:**
  * 텍스트(토큰 시퀀스)를 입력받아 텍스트를 출력하는 모델 \[779, 902]
  * 입출력 텍스트의 의미에 따라 번역, 요약, 분류 등 다양한 작업 수행 가능 \[784, 907]
  * **Text-to-Text Framework:** T5 모델처럼 단일 모델로 다양한 NLP 작업을 입력 텍스트에 작업 종류를 명시하여 처리 \[790, 791, 911, 912]
* **토크나이저 (Tokenization):**
  * 텍스트를 이산적인 **토큰(token)** 시퀀스로 변환하는 과정 \[795, 916]
  * **종류:** 문자(character), 단어(word), 서브워드(subword) 단위 \[796, 797, 917, 918]
  * **목표:** 작은 어휘집 크기(vocabulary size)와 짧은 토큰 시퀀스 길이 \[798, 919]
  * **어휘집 (Vocabulary):** 사용 가능한 모든 토큰의 집합 \mathcal{V}. 토큰화 결과는 y\_{1:L} \in \mathcal{V}^L. \[800, 920]
* **처리 과정:**
  * **임베딩 (Embedding):** 이산적 토큰 \rightarrow 연속적 벡터 (임베딩 행렬 E \in \mathbb{R}^{|\mathcal{V}| \times D}) \[807, 808, 925, 926]
  * **은닉 상태 (Hidden State):** 임베딩 시퀀스 변환 (h\_{1:L} = f(e\_{1:L}), h\_{1:L} \in \mathbb{R}^{L \times D'}) \[810, 811, 928, 929]
  * **다음 토큰 예측:** 은닉 상태 \rightarrow 로짓(logits) \hat{y}\_L \in \mathbb{R}^{|\mathcal{V}|} \rightarrow **Softmax** 정규화 \rightarrow 확률 분포 P(y\_{L+1}|y\_{1:L}) \[813, 815, 816, 817, 931, 933, 934, 935]
* **학습 (Training):**
  * **목표:** 사람이 작성한 텍스트(Corpus \mathcal{C})의 생성 가능도(Likelihood) 최대화: \max\_\theta P\_\theta(\mathcal{C}) \[827, 940]
  * **손실 함수:** **Negative Log Likelihood (NLL)** 최소화 사용: \min\_\theta - \sum\_{i=1}^{|\mathcal{C}|} \sum\_{j=1}^{N\_i} \log P\_\theta(x\_{ij}|x\_{i,\<j}) (계산 안정성 위해 로그 사용) \[829, 830, 942, 943]
* **샘플링 / 디코딩 (Sampling / Decoding):**
  * 학습된 모델로부터 텍스트를 생성하는 과정 (Auto-regressive 방식) \[831, 832, 944, 947]
  * **기본:** 예측된 확률 분포 P(y\_i|y\_{1:i-1}) 에서 다음 토큰 v 샘플링 \[838, 953]
  * **전략:**
    * **탐욕적 (Greedy):** v = \arg\max\_j P(y\_i=v\_j|y\_{1:i-1}) \[840, 955] (가장 확률 높은 토큰 선택)
    * **무작위 (Random):** 확률 분포대로 샘플링. \[844, 959] 확률 낮은 토큰이 누적 선택될 위험. \[847, 962]
    * **온도 (Temperature):** Softmax 계산 시 로짓을 온도 T로 나눔 (P(y\_{L+1}=v\_i|y\_{1:L}) = \frac{\exp(\hat{y}\_L\[i]/T)}{\sum\_{k=1}^{|\mathcal{V}|}\exp(\hat{y}\_L\[k]/T)}). T \downarrow: 분포 Sharp (Greedy 근접), T \uparrow: 분포 Flat (Uniform 근접). \[850, 965] T \to \infty 이면 균등 분포, T \to 0 이면 Greedy. \[854, 969, 857, 972]
    * **Top-k:** 확률 상위 k개 토큰 중에서만 샘플링. \[858, 973]
    * **Top-p (Nucleus):** 누적 확률 p 이상인 최소 토큰 집합에서 샘플링. \[859, 974]
  * **기타 파라미터:**
    * **빈도 패널티 (Frequency Penalty):** 이미 등장한 빈도에 따라 확률 감소. \[862, 977]
    * **존재 패널티 (Presence Penalty):** 등장 여부에 따라 확률 감소. \[864, 979]
    * **종료 조건 (Stopping Criteria):** 최대 길이 도달 또는 특정 토큰 생성 시 종료. \[866, 981]

***

### 강의 3: Few-shot Prompting

* **프롬프트 엔지니어링:** 입력(프롬프트)을 신중하게 구성하여 언어 모델의 출력을 제어하는 기술. \[670]
* **Few-shot Prompting / In-context Learning:**
  * 모델 파라미터 업데이트 없이, 프롬프트 내에 **몇 개의 예시(demonstrations)**&#xB97C; 제공하여 원하는 작업을 수행하도록 유도. \[668, 675, 677]
  * 모델은 예시로부터 **작업 형식, 입력 분포, 레이블 공간, 입출력 관계** 등을 학습. \[709]
* **핵심 연구 (Min et al., 2022):** \[680, 681, 682]
  * **실험 설정:** 분류 및 다중 선택 과제에서 (1) 예시 없음, (2) 정답 예시, (3) 무작위 레이블 예시 비교. \[683-699]
  * **주요 결과:**
    * **예시의 효과:** 정답이든 아니든, 예시를 제공하는 것이 예시 없는 경우보다 **훨씬 성능이 좋음.** \[700, 701]
    * **정답 매핑의 역할 미미:** 입력과 정답 레이블 간의 실제 매핑 정보는 성능 향상에 **결정적이지 않음.** \[704]
    * **중요한 요소:**
      * **입력 분포 (Input Distribution):** 예시의 입력 텍스트가 실제 테스트 입력과 유사한 분포를 따르는 것이 중요. \[715, 716, 717]
      * **레이블 공간 (Label Space):** 예시의 레이블이 실제 레이블과 같은 공간(예: Positive/Negative)에 속하는 것이 중요. \[725, 726, 727]
      * **형식 (Format):** 입력과 레이블을 짝지어 보여주는 형식이 중요. \[711, 714]
  * **템플릿 효과:** 수작업으로 만든 좋은 템플릿은 성능을 더 높이지만, 무작위 레이블의 효과는 여전히 유효함. \[705, 706, 708]
* **결론:** 언어 모델은 우리가 생각하는 방식(정답 매핑 학습)과 다르게 작동할 수 있음. Few-shot prompting에서는 **형식, 입력 분포, 레이블 공간 제공**이 핵심 역할. 프롬프트 엔지니어링에는 만능 해결책이 없으며, **실험과 평가**가 중요. \[728, 729, 730]

***

### 강의 4: Zero-shot Prompting

* **정의:** 작업 수행 예시 없이, **작업 설명이나 지시사항**만으로 언어 모델이 해당 작업을 수행하도록 하는 방식. \[502, 503]
* **지시사항:** 자연어를 사용하여 목표, 기준, 제약 조건 등을 명시. \[504, 505, 511]
* **모델 발전과 Zero-shot 능력:**
  * **초기 모델 (GPT-2):** 지시사항 이해 및 준수 능력 부족. \[527, 530]
  * **최신 모델 (GPT-3, PaLM, GPT-4 등):** 모델 **규모(Scale)** 증가와 **Instruction Tuning**(InstructGPT, FLAN 등)을 통해 Zero-shot 능력 크게 향상. 특정 규모 이상에서 **창발적(Emergent)** 능력 발현. \[536, 537, 538, 539, 540, 541]
* **효과적인 Zero-shot 프롬프트:**
  * **명확성:** 작업 내용, 제약 조건, 출력 형식 등을 명확하고 구체적으로 명시. \[543]
  * **구체성:** 모호함("Analyze this text") 대신 구체적 지시("Identify the main themes...") 사용. \[547]
  * **균형:** 과도하거나 부족한 제약/설명 피하기. \[544]
  * **예시:** 분류, 정보 추출, 요약 등에서 구체적 프롬프트가 성능 향상시킴. \[547-557]
* **Zero-shot vs. Few-shot:**
  * **Zero-shot:** 프롬프트 간단, 토큰 효율적, 구현 용이 / 정확도 낮음, 프롬프트 민감도 높음. \[558, 559]
  * **Few-shot:** 프롬프트 복잡, 예시 필요, 토큰 소모 큼 / 정확도 높음, 안정적. \[558, 559]
* **한계점:** 지시사항 오해석, 특정 분야 전문성 부족, 환각(Hallucination) 생성, 프롬프트 문구 민감성. \[562]

***

### 강의 5: Chain-of-Thought (CoT) Prompting

* **개념:** 복잡한 추론이 필요한 작업에서, 최종 답변 전에 **단계별 추론 과정(reasoning chain)**&#xC744; 생성하도록 유도하는 프롬프팅 기법. \[569, 570]
* **필요성:**
  * 다단계 추론, 수학 문제 해결 등 복잡한 작업에서 **정확도 크게 향상**. \[573, 574, 616]
  * 모델의 "사고 과정"을 보여주어 **해석 가능성** 증진. \[576]
  * 오류 발생 시 원인 파악 용이. \[576]
* **구현 방식:**
  * **Few-Shot CoT:** 입력과 함께 **추론 과정 + 최종 답**이 포함된 예시 몇 개를 프롬프트에 제공. \[582, 583-589]
    * **장점:** 추론 스타일 제어 용이, 성능 높음. \[612]
    * **단점:** 양질의 예시 작성 어려움, 토큰 소모 큼, 예시 의존성 높음. \[591, 592]
  * **Zero-Shot CoT:** 예시 없이, 프롬프트 끝에 **"Let's think step by step."** 등 간단한 문구 추가. \[594, 595, 596]
    * **장점:** 간편함, 토큰 효율적. \[612]
    * **단점:** 추론 스타일 제어 어려움, 문구에 따라 성능 변동성 큼. \[608, 609]
* **Auto-CoT (Zhang et al., 2023):** \[617]
  * Zero-Shot CoT로 추론 예시들을 자동 생성 \rightarrow 질문들을 **클러스터링**하여 다양성 확보 \rightarrow 각 클러스터 대표 질문의 추론 과정을 **선별**하여 Few-Shot CoT 프롬프트 구성. \[619, 620, 621, 622, 623]
  * 수동 Few-Shot CoT와 유사한 성능을 **자동으로** 달성. \[625, 626]
* **CoT의 신뢰성(Faithfulness) 문제:** \[627]
  * 생성된 추론 과정이 실제 모델의 답변 도출 과정과 **일치하지 않을 수 있음** (Unfaithful CoT). \[628, 631]
  * 그럴듯해 보이는 잘못된 추론은 모델에 대한 **과신(over-trust)** 유발 위험. \[635, 636]
* **Faithful CoT Framework (Lyu et al., 2023):** \[637]
  * **아이디어:** 답변이 추론 과정의 **결정론적 실행 결과**가 되도록 보장. \[638]
  * **과정:** (1) **번역:** LM이 쿼리를 자연어+기호언어(Python 등) 혼합 추론 체인으로 변환. (2) **문제 해결:** 결정론적 솔버(인터프리터 등)가 추론 체인 실행하여 답 도출. \[639, 640, 641, 642-655]
* **고급 CoT 기법:** Least-to-Most, Self-Refine, Tree of Thoughts (ToT), Maieutic Prompting. \[656]

***

### 강의 6: Least-to-Most & Decomposed Prompting

* **Least-to-Most Prompting (Zhou et al., 2023):** \[399]
  * **동기:** 표준 CoT는 예시보다 어려운 문제에 대한 일반화 성능 부족. \[400]
  * **핵심 아이디어:** 복잡한 문제를 \rightarrow **더 쉬운 하위 문제들의 리스트로 분해** \rightarrow **이전 하위 문제의 답을 활용**하여 순차적으로 해결. (교육 심리학에서 영감) \[401, 402, 403]
  * **구현:** 2단계 프롬프팅 사용 - (1) 문제 분해 프롬프트 (Few-shot), (2) 하위 문제 해결 프롬프트 (Few-shot, 이전 답 포함). \[404-413]
  * **예시 (Last-Letter Concatenation):** "a, b, c" \rightarrow 분해: "a", "a, b", "a, b, c" \rightarrow 해결: "a" \rightarrow "a"; "a, b" \rightarrow "ab"; "a, b, c" \rightarrow "abc". \[414-424]
  * **성능:** LLC처럼 **일반화가 중요한 문제**에서 CoT 대비 큰 성능 향상. GSM8K(수학 문제)에서는 약간의 향상 (분해 자체의 어려움 때문일 수 있음). \[425-429, 437-439, 443]
  * **한계:** **문제 분해 방법**을 도메인 전반에 걸쳐 일반화하기 어려움. \[440, 441, 442]
* **Decomposed Prompting (Khot et al., 2023):** \[445]
  * **핵심 아이디어:** (1) **Decomposer LLM:** 복잡한 작업을 \rightarrow 더 간단한 **하위 작업들의 인터페이스 호출 시퀀스(프로그램)**&#xB85C; 분해. (2) **Sub-task Handler LLM:** 각 하위 작업을 \rightarrow 독립적으로 처리 (각자 Few-shot 프롬프트 가짐). \[445, 446, 447]
  * **소프트웨어 공학 비유:** Decomposer = 메인 프로그램, Handlers = 모듈화된 라이브러리 함수. \[448, 449, 450]
  * **장점:** Handler는 **간단한 작업에 대한 풍부한 예시** 학습 가능, 여러 복잡한 작업에서 **재사용** 가능, Handler **개별 업데이트** 용이. \[451-455]
  * **구현:** Decomposer는 (f\_k, Q\_k, A\_k) 형태의 프로그램 생성 (f\_k: 핸들러 함수, Q\_k: 하위 쿼리, A\_k: 하위 답변). \[459, 460, 461] Controller가 프로그램 실행 및 데이터 전달. \[462] Decomposer 학습에도 Few-shot 예시 사용. \[464, 465] 필요시 Helper 함수(foreach 등) 활용. \[469-485]
  * **추론:** Decomposer \rightarrow Handler \rightarrow Decomposer ... 반복, \[EOQ] 생성 시 종료. \[486-492]
* **결론:** 복잡한 문제는 **분해(Decomposition)**&#xAC00; 효과적. 분해 자체를 자동화/일반화하는 것이 중요 과제. \[493, 494]

***

### 강의 7: 트리 기반 프롬프팅 (Tree-based Prompting)

* **동기 부여:**
  * 인간의 사고: System 1 (빠름, 자동) vs. System 2 (느림, 숙고, 탐색). \[291, 292, 293]
  * 표준 LLM 생성 (좌 \to 우 순차)은 System 1과 유사. 복잡한 문제 해결에는 **System 2 방식(탐색, 평가, 계획, 백트래킹)** 필요. \[294, 295, 296, 297]
  * 기존 방식 한계: 다양한 대안 탐색 부재, 계획/예측/백트래킹 부재. \[301, 302, 303, 304]
* **Tree of Thoughts (ToT) (Yao et al., 2023):** \[308]
  * **개념:** 문제 해결 과정을 **'생각(thought)'들의 트리(Tree)** 탐색으로 모델링. 각 노드는 **부분 해답(partial solution)** 상태. 여러 추론 경로를 **동시에 탐색**. \[305, 306, 307, 309, 310, 311]
  * **구현 요소:**
    1. **생각 분해 (Thought Decomposition):** 중간 과정을 '생각' 단위로 나눔. 생각은 너무 작지도(평가 불가) 크지도(다양성 부족) 않아야 함. (예: Game of 24 - 수식 한 줄, Crosswords - 단어 하나) \[313, 319-325]
    2. **생각 생성 (Thought Generation):** 각 상태(노드)에서 다음 생각 후보 k개 생성 (p\_\theta^{propose} 사용). \[313, 326, 327, 328]
    3. **상태 평가 (State Evaluation):** 각 상태(부분 해답)의 **유망성(progress)**&#xC744; 휴리스틱하게 평가. LLM 자체 평가 활용: \[314, 329-334]
       * **개별 가치 평가 (Value):** 상태 s에 대해 p\_\theta^{value}(v|s)로 가치(점수/분류) 예측. \[335, 336] 예측/상식 활용 가능. \[337-341]
       * **상태 간 투표 (Vote):** 여러 상태 S 중 가장 유망한 s^\* 선택 (p\_\theta^{vote}(s^\*|S)). \[342, 343]
    4. **탐색 알고리즘 (Search Algorithm):** BFS, DFS 등 표준 알고리즘 적용. \[314, 344, 345]
       * **ToT-BFS:** 매 스텝마다 가장 유망한 b개 상태 유지. 깊이가 제한적일 때 유용. \[346-349]
       * **ToT-DFS:** 가장 유망한 상태부터 깊이 우선 탐색. 가치가 임계값 v\_{th} 미만이면 가지치기(pruning) 및 백트래킹. \[350-353]
  * **성능 (Game of 24):** ToT가 Few-shot, CoT 대비 **압도적 성능 향상**. \[354, 355, 356]
* **Planning-Guided Transformer Decoding (PG-TD) (Zhang et al., 2023):** \[357, 367]
  * **배경:** 코드 생성 시, 기존 방식(생성 후 필터링)은 생성 중 테스트 케이스 고려 안 함. \[358-363] 토큰 하나 오류로 전체 실패 가능. \[364, 365, 366]
  * **개념:** Transformer 디코딩 과정에 **계획(Planning) 알고리즘 (MCTS)** 적용 \rightarrow **테스트 케이스 통과**라는 목표를 가지고 토큰 생성 유도. \[367, 368]
  * **MDP 공식화:** 상태 = 문제 설명 + 부분 코드, 행동 = 어휘집 내 토큰, 보상 = 테스트 통과율 (부분 코드는 0). \[373-376]
  * **MCTS in PG-TD:** \[377, 378]
    1. **선택 (Selection):** **P-UCB** 사용 (LM의 다음 토큰 확률 P\_\theta(a|s) 통합). UCB(s,a) = Q(s,a) + \beta(s) P\_\theta(a|s) \frac{\sqrt{\log s.\text{visits\}}}{1+s'.\text{visits\}} \[379-382]
    2. **확장 (Expansion):** 선택된 노드(부분 코드)에서 LM이 예측한 **top-k 다음 토큰**으로 자식 노드 추가. \[383]
    3. **평가 (Evaluation):** 새로 추가된 노드에서 **빔 서치(beam search)**&#xB85C; 프로그램 완성 \rightarrow 테스트 케이스 실행 \rightarrow 보상(통과율) 계산. \[384]
    4. **역전파 (Backpropagation):** 평가 결과(보상)를 경로 상의 노드들에 전파하여 **Q값(Q(s,a) \leftarrow \max(Q(s,a), r)) 및 방문 횟수 갱신**. \[385]
  * **성능:** 표준 빔 서치, 샘플링+필터링 대비 **Pass@1 성능 향상** 및 컴파일/런타임 에러 감소. \[386, 387, 388]
  * **장점:** 모델 종류 무관, 재학습 불필요, 다양한 최적화 기준 적용 가능, 트리 구조로 해석 가능. \[389]
* **결론:** 트리 구조와 계획 알고리즘 통합은 LLM의 **고차원적 문제 해결 능력** 향상에 기여. \[390]

***

### 강의 8: 다중 에이전트 프롬프팅 (Multi-agent Prompting)

* **동기:** 단일 LLM 에이전트 프롬프팅은 사실성(factuality) 및 추론(reasoning)에서 한계. \[128, 131] "마음의 사회(Society of Mind)" 개념처럼, **여러 LLM 인스턴스(에이전트)**&#xAC00; 개별적으로 제안하고 공동으로 **토론(debate)**&#xD558;여 최종 답 도출. \[133, 134, 135] 인간의 문제 해결 방식(다양한 관점 비교/검토) 모방. \[136-141]
* **접근법 1: 토론 과정 모델링 (Du et al., 2024):** \[142]
  * **프로세스:** (1) 여러 에이전트가 **초기 답변 생성**. (2) **토론 라운드 반복:** 각 에이전트는 다른 에이전트들의 답변을 **검토/검증**하고 이를 바탕으로 **자신의 답변 개선**. \[143, 144, 145, 146]
  * **예시:** 수학 문제 풀이 과정에서 3 라운드 토론 후 정답으로 수렴. \[147-163]
  * **특징:** CoT 등 다른 프롬프팅 기법과 **결합 가능**. \[164] 에이전트를 더 "고집스럽게(stubborn)" 만들면 토론이 길어지고 성능 향상 가능. \[168]
  * **성능:** 단일 에이전트 대비 **추론 능력**(산수, GSM8K 등) 및 **사실성**(인물 정보, MMLU) 향상. 에이전트 수, 토론 라운드 수 증가 시 성능 향상 (3 라운드 정도에서 수렴). \[169-180, 185-189] 다른 모델 사용 시에도 효과. \[190-208]
  * **신뢰도:** 모델 불확실 시 에이전트 간 의견 불일치 발생, 토론 통해 정확한 답으로 수렴. "설득 용이성"이 신뢰도 지표가 될 수 있음. \[181-184]
* **접근법 2: 논쟁적 토론 (Argumentative Debate) (Liang et al., 2024):** \[209]
  * **프로세스:** **2개의 에이전트**(찬성 Affirmative, 반대 Negative)가 **"Tit for Tat"** 방식으로 논쟁. **심판(Judge)**&#xC774; 토론 관리 및 최종 결론 도출. \[209, 210]
  * **프롬프트:** 메타 프롬프트(주제/규칙), 토론자 프롬프트(역할 부여), 심판 프롬프트(평가/결정). \[211-224]
  * **예시:** 반직관적 기하학 문제 해결 과정. \[225-235]
  * **분석:** 토론자 수가 너무 많으면 긴 텍스트 처리 능력 부족 시 성능 저하. 적절한 "Tit for Tat" 강도 설정 중요. \[236-245]
* **접근법 3: 소통형 에이전트 (Communicative Agents) (Park et al., 2023; Qian et al., 2024):** \[246]
  * **개념:** **특화된 역할**을 가진 여러 LLM 기반 에이전트들이 텍스트를 통해 **소통**하며 복잡한 작업(예: 소프트웨어 개발 - ChatDev) 공동 수행. 이전 단계의 결론이 다음 단계에 활용됨. \[246-249, 250-252]
  * **메커니즘:** 역할별 에이전트(Instructor/Assistant 등) 간 **다회전 대화(Multi-turn dialogue)** 통해 합의 도출. \[253, 254]
  * **Inception Prompting:** 역할 뒤바뀜 등 문제 방지 위해, 목표/역할/프로토콜/제약 명시하는 대칭적 시스템 프롬프트 사용. \[258-263]
  * **기억 관리:** 단계 내 대화용 **단기 기억** + 단계 간 정보 전달용 **장기 기억**(요약된 해결책). \[264-273]
  * **환각 감소:** Assistant가 **"역할 반전(Role Reversal)"** 통해 Instructor에게 구체적 제안 요청 후 답변 생성. \[274-277]
* **공통 한계:** 계산 비용 높음, 긴 문맥 처리 능력 요구, 토론/소통의 수렴이 반드시 정답을 보장하지는 않음. \[278, 279]

***

### 강의 8-1: Markov Decision Process (MDP) & MCTS

* **결정 문제 (Decision Problem):** 여러 행동 대안 중 하나를 선택하여 목표 달성. 구성 요소: **목표값(Objective), 행동 공간(Action Space), 보상(Reward)**. \[5, 6, 7, 22, 23, 24]
  * **예시:** 밴딧 문제 - 승률 최대화 위해 레버 선택. \[8, 9, 10]
* **순차적 결정 문제 (Sequential Decision Problem):** 행동에 따라 상황(State)이 변하는 환경에서 연속적인 행동 선택. 구성 요소: 목표값, 행동 공간, 보상, **상태(State)**. \[25, 26, 27, 41, 45, 46]
  * **예시:** 4x4 그리드 월드 - 목표 지점 도달 (보상 +1), 함정 회피 (보상 -1). \[30-40]
* **상태 (State):** 현재 상황을 나타내는 정보. 좋은 상태는 의사결정에 필요한 모든 과거 정보를 요약 (마르코프 속성). \[42, 47, 48, 49]
* **마르코프 속성 (Markov Property):** 미래 상태는 오직 **현재 상태와 행동**에만 의존하며, 과거 이력과는 무관. P(s\_{t+1}|s\_t, a\_t, s\_{t-1}, a\_{t-1},...) = P(s\_{t+1}|s\_t, a\_t). 의사결정 단순화. \[51, 52]
* **마르코프 결정 과정 (Markov Decision Process, MDP):** 불확실성 하에서의 순차적 의사결정을 모델링하기 위한 수학적 프레임워크. 4-튜플 (S, A, P, R) 또는 (S, A, P, R, \gamma)로 정의. \[54, 55, 56]
  * S: 상태 집합 (State Space)
  * A: 행동 집합 (Action Space)
  * P: 상태 전이 확률 함수 P(s'|s, a) - 상태 s에서 행동 a를 했을 때 상태 s'로 전이될 확률. \[58]
  * R: 보상 함수 R(s, a, s') - 상태 s에서 행동 a 후 s'로 전이 시 받는 즉각적 보상.
  * \gamma: 할인 인자 (Discount Factor, 0 \le \gamma \le 1) - 미래 보상의 현재 가치 반영.
* **MDP 해결 목표:** 최적의 **정책(Policy)** \pi(a|s) (상태 s에서 행동 a를 선택할 확률/규칙)를 찾아 **기대 누적 보상(Expected Cumulative Reward)** 최대화.
* **몬테카를로 트리 탐색 (Monte Carlo Tree Search, MCTS):** \[70]
  * MDP와 같은 의사결정 문제 해결에 효과적인 **휴리스틱 탐색** 알고리즘. \[71] 경험적 성능 우수. AlphaGo 등에 사용됨. \[377]
  * **핵심:** 시뮬레이션을 통해 각 행동의 가치를 추정하고, 이를 바탕으로 유망한 탐색 경로 선택. **탐험(Exploration)과 활용(Exploitation)의 균형** 중요. \[79]
  * **4단계 반복:** \[72]
    1. **선택 (Selection):** 현재 트리에서 **UCB-T(Upper Confidence Bound applied to Trees)** 점수가 가장 높은 경로를 따라 리프 노드까지 이동. \[73, 77, 78]
       * UCB-T 점수: Q(s, a) + C \sqrt{\frac{\ln N(s)}{N(s, a)\}}
         * Q(s, a): 행동 a의 평균 보상 (활용) \[85]
         * N(s): 부모 노드 s 방문 횟수
         * N(s, a): 행동 a 선택 횟수
         * C: 탐험 상수 (클수록 탐험 중시) \[86]
    2. **확장 (Expansion):** 선택된 리프 노드에서 아직 탐색되지 않은 행동(자식 노드) 하나를 트리에 추가. \[74, 87, 88, 89]
    3. **시뮬레이션 (Simulation / Rollout):** 새로 추가된 노드에서부터 무작위 또는 간단한 정책에 따라 게임(MDP) 종료 시까지 진행하여 **결과(보상)** 획득. \[74, 90, 91]
    4. **역전파 (Backpropagation):** 시뮬레이션 결과를 확장된 노드부터 루트 노드까지 거슬러 올라가며 각 노드의 **통계 정보(총 보상 W, 방문 횟수 N) 갱신**. \[75, 76, 92, 93, 94, 95]
  * **MCTS 예시:** 4x4 그리드 월드 문제에 MCTS 적용 단계별 설명. \[96-125]
