# 컴퓨팅이론 및 시스템 특강

김정근 교수님

---

교수님께서 만약 비전공자인데 이 수업을 듣게 된다면 보면 좋을 영상이라고 추천해 주신 리스트이다.
시간 날 때 확인해보자.

- [100+ Computer Science Concepts Explained](https://www.youtube.com/watch?v=-uleG_Vecis)
- [CS50x 2024: Introduction to Computer Science](https://www.youtube.com/playlist?list=PLhQjrBD2T381WAHyx1pq-sBfykqMBI7V4)
- [COMPUTER SCIENCE explained in 17 Minutes](https://www.youtube.com/watch?v=CxGSnA-RTsA)
- [Computer Science Map](https://www.youtube.com/watch?v=SzJ46YA_RaA)

## Introduction

### 1. 강의 소개 및 동기 부여

#### 1.1. AI의 부상

현재 컴퓨터 아키텍처 분야는 다양한 기술 기업(ST, Intel, AMD, NVIDIA, Google, Apple, Amazon, Microsoft, Tesla, Samsung, SK hynix, TSMC 등)들의 활발한 혁신 속에 있다 .
![PDF p.4: 다양한 기술 기업 로고](img/Pasted%20image%2020251022212759.png)
AI의 발전 단계를 2012년 AlexNet부터 시작하여 Perception AI (Speech Recognition, Medical Imaging), Generative AI (Content Creation), Agentic AI (Customer Service, Coding Assistant), Physical AI (Autonomous Vehicles, Robotics)로 구분한다.
![PDF p.5: AI의 발전 단계 차트](img/Pasted%20image%2020251022212817.png)
AI의 능력은 'Unreliable Agent' 수준을 넘어 Hacking, Bioweapons 등 잠재적 위험성을 내포한 단계로 발전 중임을 시사한다.
![PDF p.6: AI 역량 타임라인 그래프](img/Pasted%20image%2020251022212832.png)

#### 1.2. 기술적 특이점 (The Singularity)

Kurzweil Curve는 Moore's Law를 넘어 기술의 힘이 기하급수적으로(exponentially) 성장함을 보여준다.
![PDF p.7: 특이점(Singularity) 및 Kurzweil Curve 그래프](img/Pasted%20image%2020251022212851.png)
그래프는 2015년 기계 지능이 쥐의 뇌를, 2023년경 인간의 뇌를 능가할 것으로 예측한다.
2050년경에는 $1,000의 연산 능력이 모든 인류의 지능을 합친 것과 같아질 것으로 예측한다.
Ray Kurzweil의 저서 "The Singularity Is Near" (2005)와 "The Singularity Is Nearer" (2024)를 소개하며 인간이 생물학을 초월하고 AI와 융합하는 미래를 제시한다.
Martec's Law는 기술은 기하급수적으로(fast) 변하지만, 조직은 로그적으로(slow) 변하는 현상을 설명한다.
![PDF p.9: Martec's Law 그래프 (기술 변화 vs 조직 변화)](img/Pasted%20image%2020251022212919.png)
이 변화의 격차(change gap)를 관리하기 위해 조직은 'evolutionary' 접근(더 민첩한 조직 되기)이나 'revolutionary' 접근(파괴적인 'reset' 감수)을 선택해야 한다.

#### 1.3. AI의 시각적 역사

AI의 역사는 1943년 McCulloch & Pitts의 뉴런 수학적 모델에서 시작한다.
![PDF p.10: A Visual History of AI 타임라인](img/Pasted%20image%2020251022212935.png)
주요 이정표는 다음과 같다:

- 1950: Alan Turing의 Turing Test 제안.
- 1956: John McCarthy가 조직한 Dartmouth Summer Research Project에서 AI 분야가 시작됨.
- 1957: Frank Rosenblatt의 Perceptron 개발.
- 1969: Minsky & Papert가 Perceptron이 XOR Problem을 해결할 수 없음을 증명.
- 1986: Rumelhart, Hinton, Williams에 의해 Backpropagation이 대중화됨.
- 1989: Yann LeCun의 LeNet (최초의 CNN 중 하나) 개발.
- 1997: Hochreiter & Schmidhuber의 Long Short-Term Memory (LSTM) 도입.
- 2012: Krizhevsky & Hinton의 AlexNet, Deep Learning의 부흥을 이끎.
- 2014: Ian Goodfellow의 Generative Adversarial Network (GAN) 도입.
- 2017: Google의 Transformer ("Attention Is All You Need") 발표.
- 2022: OpenAI의 DALL-E 2, ChatGPT 출시로 Generative AI가 주류가 됨.
  AI 역사에는 두 번의 암흑기("AI Winter")가 존재했다.
  ![PDF p.11: 신경망 발전의 이정표 (AI Winter 포함)](img/Pasted%20image%2020251022212951.png)
  ![PDF p.27: Symbolic and Subsymbolic AI Timeline 그래프](img/Pasted%20image%2020251022213019.png)

#### 1.4. 인공 뉴런과 모델의 진화

- 1940년대: Donald Hebb가 "Neurons that fire together wire together" (Hebb's Law)를 제시.
- 1943: McCulloch와 Pitts가 생물학적 뉴런의 기능을 모방한 수학적 모델(최초의 인공 뉴런)을 개발.
  ![PDF p.13: 인공 뉴런 다이어그램 (McCulloch-Pitts)](img/Pasted%20image%2020251022213058.png)
- 1957: Frank Rosenblatt가 Perceptron 알고리즘을 발명. 이는 이진 분류기(binary classifiers)를 위한 지도 학습 알고리즘이다.
  ![PDF p.14: Perceptron 다이어그램](img/Pasted%20image%2020251022213117.png)
- 1957: Mark 1 Perceptron은 400 픽셀 이미지를 인식(예: 알파벳 문자)하도록 설계된 기계이다.
- 1996: Sepp Hochreiter와 Jürgen Schmidhuber가 Long Short-Term Memory (LSTM) Recurrent Neural Networks를 도입하여 시퀀스 데이터 처리를 가능하게 했다.
- 2013: Google의 Tomas Mikolov 팀이 Word2Vec을 개발하여 단어를 연속 공간의 밀집 벡터(word embeddings)로 표현했다.
  ![PDF p.20: Word2Vec 벡터 공간 예시 (man -> king, woman -> ?)](img/Pasted%20image%2020251022213135.png)
- 2017: Vaswani 등이 Transformer 모델("Attention is All you Need")을 소개. 이는 Self-Attention을 사용하여 토큰 간의 관계를 병렬로 포착한다.
  ![PDF p.21: Transformer 모델 아키텍처 다이어그램](img/Pasted%20image%2020251022213149.png)
- 2018: OpenAI의 Generative Pre-trained Transformers (GPT)와 Google의 Bidirectional Encoder Representations from Transformers (BERT)가 출시됨.
- 2019: GPT-2 (1.5B 파라미터) 출시.
- 2020: GPT-3 (45TB 데이터 기반) 출시, Few-shot learning 도입.
- 2021: DALL-E (Text-to-Image), GitHub Co-Pilot, Codex, LaMDA 등 출시.
- 2022: InstructGPT (Reinforcement Learning from Human Feedback, RLHF) 및 ChatGPT 출시.

#### 1.5. Lee Sedol Moment

AlphaGo는 DeepMind에 의해 개발된 AI 바둑 프로그램이다.
"Lee Sedol Moment"는 개인이 자신이 깊이 관여하는 영역(domain)에서 AI가 최고 인간을 능가하는 것을 목격하는 순간을 의미한다.
Noam Brown은 "모든 사람은 각기 다른 시점에 자신의 이세돌를 갖게 될 것"이라고 말했다.
![PDF p.29: AlphaGo와 Lee Sedol의 대국 장면](img/Pasted%20image%2020251022213214.png)

#### 1.6. 지능이란 무엇인가?

Geoffrey Hinton 교수에 따르면 지능에는 두 가지 패러다임이 있다.

1.  Logic-inspired (논리 기반): 지능의 본질은 추론(reasoning)이며, 기호 규칙을 사용한다.
2.  Biologically-inspired (생물학 기반): 지능의 본질은 신경망의 연결 강도를 학습(learning)하는 것이다.
    Coller-Dolittle Prize는 Turing test에서 영감을 받아, 인간이 아닌 유기체(예: 돌고래)와의 양방향 소통 알고리즘 개발을 목표로 한다.
    2024년 우승자는 야생 돌고래의 비-서명(non-signature) 휘파람 유형 공유에 대한 최초의 증거를 제시한 Laela Sayigh이다.
    DolphinGemma는 돌고래 오디오를 사용하여 돌고래의 의사소통 방식을 연구하는 Large Language Model (LLM)이다.

### 2. 강의의 가치와 목표

#### 2.1. 대학 교육의 필요성

MOOC(Massive Open Online Courses)가 전통적 대학을 대체할 수 있는가에 대한 질문을 제기한다.
경북대학교(KNU)는 MOOC가 대체할 수 없는 경험(상호작용 활동, 질의응답, 인턴십, URP 등)을 제공할 수 있다고 강조한다.
Coding Bootcamp는 주니어 엔지니어의 빠른 취업에 초점을 맞추지만, 깊은 이론이나 근본적인 문제 해결 기술(fundamental problem-solving skills)이 부족할 수 있다.
대학의 EECS 프로그램은 컴퓨팅 과학의 광범위하고 원칙적인 개요(broad, principled overview)를 제공하며, 학생들을 'Coder'가 아닌 'Engineer' 또는 연구자로 양성하는 것을 목표로 한다.
진짜 참 교육자시다.

- Coder: 코딩, 개발 수행.
- Engineer: 개발, 문제 해결(troubleshooting), 연구, 시스템 설계, 문제 해결 수행.
  ![PDF p.83: Bloom's Taxonomy (고차원적 사고 기술)](img/Pasted%20image%2020251022213705.png)
  Bloom's Taxonomy는 기억(Remember), 이해(Understand) 같은 저차원적 사고 기술(Lower Order Thinking Skills)에서 분석(Analyse), 평가(Evaluate), 창조(Create) 같은 고차원적 사고 기술(Higher Order Thinking Skills)로 나아가는 과정을 보여준다 .
  'The Learning Pyramid'는 신화(myth)일 수 있으나, 강의 수강 외에 프로그래밍 과제, 퀴즈, URP 등 추가 활동이 학습 경험을 극대화하는 데 필수적임을 시사한다.
  ![PDF p.84: Learning Pyramid (Myth)와 Bloom's Taxonomy](img/Pasted%20image%2020251022213719.png)

#### 2.2. 컴퓨터 아키텍처(CA)를 공부하는 이유

컴퓨터가 어떻게 만들어지고(Building a computer: Logic -> Circuits) 제어되는지(Controlling a computer: Instructions -> Microarchitecture) 이해할 수 있다.
효율적인 소프트웨어 및 더 나은 하드웨어를 구축하는 데 필수적이다.
"백엔드 개발자에게 CA는 필요 없다"는 생각은 잘못되었으며, 소프트웨어 최적화는 하드웨어 구현과 밀접하게 연관되어 있다.
Magnificent 7 (M7) 기업들(Google, Amazon, Meta, Microsoft, Tesla 등)이 자체 칩(Google Tensor, TPU, Amazon Graviton, Meta's MTIA, Microsoft Cobalt, Tesla DOJO)을 설계하며 컴퓨터 아키텍트를 적극적으로 채용하고 있다.
![PDF p.42: M7 기업들의 자체 개발 칩 (TPU, Graviton, MTIA 등)](img/Pasted%20image%2020251022213857.png)
AMD, Google, Apple, 삼성전자 등의 채용 공고는 ML/GPU/CPU 아키텍처, C/C++, 컴퓨터 아키텍처, 시뮬레이터(SystemC, GEM5), OS/디바이스 드라이버 지식을 공통적으로 요구한다.
삼성 CE Challenge 2025는 RISC-V 아키텍처의 분기 예측(branch prediction) 메커니즘 개선 및 LLVM 컴파일러의 벡터화(vectorization) 능력 강화를 목표로 하며, GEM5와 LLVM 환경에서 평가된다.

### 3. 사례 연구: Geoffrey Hinton과 Ilya Sutskever

Geoffrey Hinton ("Godfather of Deep Learning") 교수는 Ilya Sutskever (AlexNet 공저자, OpenAI/SSI 공동 창업자)의 박사 과정 지도교수이다.
Ilya가 여름 방학 동안 감자튀김을 굽다가(McDonald's 알바) Hinton의 랩에서 일하고 싶다며 무작정 찾아왔다.
Hinton은 그에게 Backpropagation에 관한 Nature 논문(Rumelhart, Hinton, 1986)을 주고 일주일 뒤에 다시 오라고 했다.
![PDF p.53: Backpropagation 논문 표지](img/Pasted%20image%2020251022213931.png)
일주일 후, Ilya는 "I didn't understand it."이라고 말했다.
그러나 Ilya는 이어서 "Oh, no, no, I understood that! (논문의 chain rule은 이해했다) I just don't understand why you don't give the gradient to a sensible function optimizer?" (왜 그 gradient를 합리적인 함수 최적화기에 넘기지 않는지 이해가 안 간다)라고 반문했다. (당시에는 이것이 표준 접근 방식이 아니었음)
이후 그들은 Alex Krizhevsky와 함께 2012년 "ImageNet Classification with Deep Convolutional Neural Networks" (AlexNet)를 발표했다. 영웅은 영웅을 알아보고... 뭐 그런건가.
![PDF p.57: AlexNet 아키텍처 다이어그램 및 논문 초록](img/Pasted%20image%2020251022214040.png)
AlexNet은 GPU(x2 GTX 580)를 사용한 최초의 주요 CNN으로, Deep Learning의 성공적인 첫 적용 사례가 되었다.
AlexNet(8 layers)은 2012년 ILSVRC(ImageNet Large Scale Visual Recognition Challenge)에서 16.4%의 Top-5 에러율을 기록하며, 이전의 'Shallow' 접근 방식(2011년 25.8%) 대비 획기적인 성능 향상을 보였다.
![PDF p.58: ILSVRC Top-5 에러율 변화 그래프 (2010-2015)](img/Pasted%20image%2020251022214104.png)
이는 Yann LeCun의 LeNet-1(1989)과 비교할 때, 활성화 함수로 Sigmoid 대신 ReLu 사용, 더 깊은 레이어, GPU 활용 등에서 큰 차이를 보였다.
![PDF p.60: LeNet과 AlexNet의 아키텍처 및 사양 비교](img/Pasted%20image%2020251022214125.png)

### 4. 경북대학교(KNU) 연구 그룹 소개

#### 4.1. PASCAL (Peta-scale in-Storage Computing platform Laboratory)

NRF(한국연구재단)의 지원을 받는 기초연구실(Basic Research Laboratory, BRL)이다.
주요 목표는 유전체 정보 처리 가속(Accelerating genomic information processing)이다.
![PDF p.62: Next Generation Sequencing (NGS) Workflow](img/Pasted%20image%2020251022214157.png)
![PDF p.64: AlphaFold 3 논문 (Bioinformatics의 중요성)](img/Pasted%20image%2020251022214219.png)
PASCAL은 여러 랩의 연합으로 구성된다.

- COB Lab (Computational Biology & Bioinformatics): Bioinformatics.
- SCENT (Scalable Energy Efficient Computing): Approximate & Stochastic computing, Processing-in-Memory, Quantum computing.
- NCSL (Next-gen Computing System Lab): Memory Architecture, Processing-in-Memory, GPU & Simulations, ML for Systems.
- MECCALab (Memory Computing and Computer Architecture Laboratory): In-Storage Computing, NAND Flash, Solid-State Disks.
  ![PDF p.65: PASCAL 연구 그룹 구성도](img/Pasted%20image%2020251022214233.png)(img/Pasted%20image%2020251022214313.png)

#### 4.2. HPC Lab + NCSL

Processing-in-Memory (PIM)을 연구한다.
UPMEM 기반 소프트웨어 최적화 및 작업 스케줄링, PIM 시뮬레이션, 이기종 컴퓨팅 시스템(CPU-GPU-PIM)을 다룬다.
![PDF p.68: UPMEM 기반 이기종 컴퓨팅 시스템 다이어그램](img/Pasted%20image%2020251022214328.png)

#### 4.3. NCSL + MECCALab

모델링 및 시뮬레이션(Modeling & Simulation) 분야에서 "LLM-in-the-loop"를 연구한다.
Defense Simulator (ABM + DEVS)에 OpenAI의 LLM(gpt-oss-120b/20b)과 Vector DB를 연동하여 지휘 결심을 위한 요구와 방책 평가 로직을 구현하는 아키텍처를 제시한다.
![PDF p.69: LLM-in-the-loop 다이어그램](img/Pasted%20image%2020251022214344.png)

### 5. 강의 운영 (Logistics)

#### 5.1. 기본 정보

- 강의: COMP411 (Computer Architecture), COMP811 (Advanced Computer Architecture).
- 교수: 김정근 (Jeonggeun Kim).
- 연구실: ENCSLE (NEXT-GENERATION COMPUTING SYSTEM LABORATORY).
- 공식 언어: 영어.
- 선수과목: Python 및 C/C++ 프로그래밍 기술(필수), 디지털 회로(권장), 2의 보수 연산(권장).
  ![PDF p.74: ChampSim (Computer architecture simulator) 코드 예시](img/Pasted%20image%2020251022214513.png)
- 커리큘럼 내 위치: 본 과목(COMP411)은 데이터 구조, CSE 입문, 프로그래밍 기초, 논리 회로 위에 구축되며, 데이터베이스(COMP322), 네트워크(COMP414), OS(COMP312), 컴파일러(COMP321), AI(COMP324), 클라우드 컴퓨팅(GLSO227) 등 상위 과목의 기초(Foundation of Computer Systems)가 된다.
  ![PDF p.75: CS/ECE 커리큘럼 내 Computer Architecture 과목의 위치](img/Pasted%20image%2020251022214540.png)

#### 5.2. 교재 및 자료

- 주요 교재: "Computer Organization and Design, RISC-V Edition" (David A. Patterson, John L. Hennessy).
- 참고 교재: "Digital Design and Computer Architecture, RISC-V Edition" (Sarah Harris, David Harris) .
- 강의 자료(Syllabus, 슬라이드) 및 과제는 KNU LMS를 통해 제공된다.
- Q&A는 Notion을 통해 진행될 수 있다.
- 모든 강의는 Zoom으로 녹화되어 업로드될 예정이며, 한국어 버전 강의 영상도 공유될 수 있다.

#### 5.3. 평가 및 정책

- 평가 비율 (잠정): 시험 65% (중간 30%, 기말 35%), 과제 35%.
- 과제: 약 6개 이하의 Python 기반(C/C++ 포함) 과제이며, 시뮬레이터 및 하드웨어 구조 구현을 포함한다.
- 답안은 한국어 또는 영어로 작성 가능하다.
- Late Policy: 마감 72시간 내 제출 시 80% 인정 (잠정).
- LLM Policy: 과제 수행 시 ChatGPT 등 LLM 사용을 허용한다 (어렵게 내시겠지? 나 뇌 굳었는데..).
- 질문: 강의 중 언제든지 질문(interrupt)하는 것을 환영하며(I WELCOME YOUR INTERRUPTIONS!), 한국어 또는 영어로 질문 가능하다.

### 6. 강의 계획 (Floorplan) 및 서론

#### 6.1. 강의 계획 (Course Floorplan)

강의는 von Neumann Architecture, ISA, Datapath, Pipelining, Memory Systems, Parallel processors (Multi-cores, GPGPU), Accelerators (TPU, NPU, QPU) 순서로 진행된다.
![PDF p.87: 강의 계획 상세 (1-13주차)](img/Pasted%20image%2020251022214620.png)

- 1-2주차: Introduction to Computer Architecture, Performance Analysis.
- 2-3주차: ISA Design (x86, ARM, RISC-V, Assembly Languages).
- 4-6주차: Single-Cycle Processor Design (Digital Logic, Datapath, Control).
- 6-7주차: Pipelining (Parallelism, Throughput, ILP).
- 7-8주차: Pipeline Hazard (Data dependency, Branch Prediction).
- 8주차: Instruction Level Parallelism (Superscalar, SMT).
- 8-9주차: Out-of-Order Processor.
- 10-11주차: Caches and Memory (Memory Hierarchy, Prefetching).
- 12주차: Multi-core and GPGPU (SIMD, SIMT, Parallel Programming).
- 12-13주차: Accelerators and Quantum Computing (NPU, TPU, QPU).

#### 6.2. 컴퓨터란 무엇인가?

'Computer'의 초기 의미는 '계산하는 사람(a person who computes)', 즉 "Human Computer"였다.
![PDF p.110: Human Computer (NASA) 사진](img/Pasted%20image%2020251022214704.png)
현대적 정의: "산술적 또는 논리적 연산 시퀀스를 자동으로 수행하도록 프로그래밍될 수 있는 기계(machine)".
컴퓨터는 'Universal Computational Device'이며, 이는 Alan Turing (1937)의 Turing machine 개념에 기반한다.

### 7. 컴퓨터 시스템 추상화 계층 (Abstraction Hierarchy)

#### 7.1. 추상화의 개념

Nand to Tetris: 첫 번째 원칙(first principles)으로부터 NAND 게이트만으로 현대적 컴퓨터 시스템(테트리스 게임 실행까지)을 구축하는 과정을 다룬다.
![PDF p.124: Factorial 계산의 Black-box 예시](img/Pasted%20image%2020251022214722.png)
추상화 계층(Layers of Abstraction)은 시스템의 작동 세부 사항을 숨기는 방법이다.
계층은 물리적 실체(Physics)에서부터 애플리케이션(Application)에 이르기까지 복잡도와 추상화 수준에 따라 나뉜다.
![PDF p.127: 컴퓨터 시스템의 추상화 계층 다이어그램 (Physics-Device-Logic-Microarchitecture-ISA-OS-Compiler-Language-Application)](img/Pasted%20image%2020251022214742.png)
추상화는 100억 개가 넘는 트랜지스터로 구성된 복잡한 시스템을 인간 프로그래머가 다룰 수 있게 하며, 생산성과 효율성을 향상시킨다.
이 강의의 목표 중 하나는 이 추상화를 해체(un-abstract or deconstruct)하는 능력을 기르는 것이다.

#### 7.2. 하드웨어 인프라 (Hardware Infrastructure)

현대 컴퓨팅은 이기종 처리(heterogeneous processing)를 사용한다 (예: CPU + GPU, CPU + TPU).
Distributed System: 독립된 컴퓨터들의 네트워크가 사용자에게는 단일 시스템처럼 보이게 하는 시스템.

- Scale-out (수평 확장): 더 많은 인스턴스(서버)를 추가하여 용량 확장. Scale-up(수직 확장)과 대비된다.
  ![PDF p.145: Scale-out 웹 아키텍처 다이어그램](img/Pasted%20image%2020251022214813.png)
- Datacenter (Warehouse-Scale Computers, WSC): 수만 대의 거의 동일한 서버를 포함하며, 전력(예: 15-40 MW)이 주요 제한 요소이다.
- 데이터센터는 Rack -> Row/Cluster -> Datacenter의 계층 구조를 갖는다.
  ![PDF p.155: 데이터센터의 계층 구조 다이어그램](img/Pasted%20image%2020251022214853.png)
- 데이터센터 네트워크는 Top-of-rack (ToR) 스위치, Aggregation 스위치, Core 라우터로 구성된 계층적 토폴로지를 갖는다.
  ![PDF p.163: 데이터센터 네트워크 토폴로지](img/Pasted%20image%2020251022214907.png)
- 데이터센터 하드웨어는 범용 하드웨어(commodity hardware) 또는 목적별 하드웨어(Purpose-built hardware: GPGPU, ASIC, FPGA, TPU 등)를 사용한다.
  ![PDF p.170-171: NVIDIA AI Infrastructure (DGX, NVLink)](img/Pasted%20image%2020251022214937.png)

#### 7.3. 소프트웨어 아키텍처 (Software Architecture)

- Services: 서비스(Service)는 다수의 요청을 동시에 처리하는 프로그램으로, 확장성(Scalability)은 동시 사용자/요청의 성장을 처리하는 능력으로 측정된다 (예: requests/sec).
- Virtualization: 기존 인터페이스를 확장/대체하여 다른 시스템의 동작을 모방하는 기술.
  - Type 1 (Native/Bare-metal): Hypervisor가 하드웨어에서 직접 실행 (예: VMWare ESX Server, Xen).
  - Type 2 (Hosted): Hypervisor가 Host OS 위에서 실행 (예: VirtualBox, VMWare Workstation, Parallels).
  - OS-level Virtualization (Containers): OS가 여러 보안 가상 서버(컨테이너)를 실행 (예: Docker, Linux Containers).
  - Application-level Virtualization: JVM, Rosetta, WINE 등.
    ![PDF p.243: Docker 아키텍처 다이어그램 (VM vs Container)](img/Pasted%20image%2020251022215004.png)
- Middleware: OS와 애플리케이션 사이의 소프트웨어 (예: DBMS - MySQL, PostgreSQL; NoSQL - Redis, MongoDB; Web Server - Nginx, Apache).
  ![](img/Pasted%20image%2020251022215028.png)

#### 7.4. 운영체제 (Operating System)

OS는 하드웨어를 애플리케이션이 유용한 형태로 변환하는 시스템 소프트웨어이다.
OS는 하드웨어 리소스를 관리하며, 세 가지 핵심 추상화 개념을 제공한다.

1.  Virtualization (가상화): 각 앱이 리소스를 독점하는 것처럼 보이게 함 (예: CPU -> Process, Memory -> Virtual Memory).
2.  Concurrency (동시성): 동시 이벤트를 처리 (예: Threads, Synchronization).
3.  Persistence (영속성): 전원이 꺼져도 정보를 보존 (예: Storage -> Files).
    ![PDF p.253: OS 추상화 (CPU, Memory, Storage)](img/Pasted%20image%2020251022215118.png)
    OS Kernel은 System Call Interface를 통해 파일 시스템, I/O, 메모리, 프로세스 관리를 수행한다.
    Process: 실행 중인 프로그램의 인스턴스.
    Multiprocessing: 단일 CPU가 시분할(time-sharing) 기법을 통해 여러 프로세스를 빠르게 전환(context switch)하며, 동시에 실행되는 것처럼 보이게 하는 것.
    ![PDF p.270: Multiprocessing의 현실 (CPU Context Switching)](img/Pasted%20image%2020251022215200.png)
    프로세스 생성 (Linux): `fork()` (현재 프로세스 복사)와 `exec*()` (새 프로그램 코드로 교체) 시스템 콜을 사용한다.
    ![PDF p.279: Shell에서의 fork-exec 모델 흐름도](img/Pasted%20image%2020251022215227.png)
    Virtual Address Space: OS가 각 프로세스에 제공하는 고립된(isolated) 추상적 메모리 공간.
    ![PDF p.281: A process in memory (Text, Data, Heap, Stack)](img/Pasted%20image%2020251022215242.png)
    Virtual Memory: David Wheeler의 "Any problem in computer science can be solved by adding another level of indirection" 격언처럼, 가상 주소(VA)를 물리 주소(PA)로 매핑(mapping)하여 메모리 부족, 보호, 공유 문제를 해결한다.
    ![PDF p.289: Virtual Memory 매핑(Indirection) 다이어그램](img/Pasted%20image%2020251022215257.png)
    프로그램 실행 과정: Shell에서 명령어 입력 -> `fork()`로 자식 프로세스(PCB) 생성 -> `execve()` (loader)가 ELF(Unix) 또는 PE(Windows) 같은 실행 파일을 스토리지(File System)에서 읽어와 Main Memory(DRAM)에 적재하고, 프로세스의 가상 주소 공간(Virtual Address Space)을 설정한다.
    ![PDF p.295: 프로그램 로딩 및 실행 (Storage -> Memory -> VA Space)](img/Pasted%20image%2020251022215319.png)
    ![](img/Pasted%20image%2020251022215357.png)

#### 7.5. Instruction Set Architecture (ISA)

ISA는 소프트웨어(명령어)와 하드웨어(수행) 사이의 인터페이스, 즉 "계약(contract)"이다.
ISA는 다음을 명시한다: (1) 메모리 구성(Memory organization), (2) 레지스터 집합(Register set), (3) 명령어 집합(Instruction set) (Opcodes, Data types, Addressing modes).

- CISC (Complex Instruction Set Computing): `Mem[R1] <- Mem[R2] + R3` 같은 복잡한 명령어를 제공 (예: x86, VAX). 하드웨어가 복잡해진다.
- RISC (Reduced Instruction Set Computing): 단순하고 원시적인(primitive) 명령어만 제공 (예: ARM, RISC-V). 하드웨어 및 컴파일러 설계가 용이하다.
  현대의 모든 칩 내부는 RISC 방식으로 동작한다 (x86조차도 내부적으로 RISC-like micro-ops로 변환하여 실행).

#### 7.6. Microarchitecture (μ-arch) & Digital Logic

Microarchitecture (Computer Organization)는 ISA의 실제 구현체(implementation)이다.

- Architecture (ISA): 소프트웨어에 보이는 부분 (프로그래머 가시 상태: 레지스터, 메모리).
- Microarchitecture: 소프트웨어에 보이지 않는 부분 (Caches, branch prediction, pipelining, OoO).
  동일한 ISA (x86-64)도 AMD Ryzen 9 (16코어, 64MB L3)와 Intel Core i9 (24코어, P/E 구성, 36MB L3)처럼 서로 다른 마이크로아키텍처로 구현될 수 있다.
  ![PDF p.328: AMD Ryzen CPU Zen 2/3 마이크로아키텍처](img/Pasted%20image%2020251022215426.png)
  ![PDF p.330: GPU 마이크로아키텍처 (SM, CUDA Cores)](img/Pasted%20image%2020251022215443.png)
  ![PDF p.333: Modern SSD Anatomy (NAND Flash)](img/Pasted%20image%2020251022215503.png)
  ![PDF p.334: DRAM Anatomy (Bank, Row, Column)](img/Pasted%20image%2020251022215519.png)
  Digital Logic (Circuits): 수많은 스위치(Transistor)의 조합으로 마이크로아키텍처를 구현한다.
  Boolean Algebra: "true"/"false" 또는 "1"/"0"을 조작하는 수학적 시스템으로, 디지털 시스템(이진수)에 완벽하게 부합한다.
  Transistor: 컴퓨터를 구성하는 수십억 개의 작은 스위치. Apple M2 Max는 500억 개 이상의 트랜지스터를 집적했으며, 이는 Moore's Law를 따른다.

#### 7.7. Devices & Physics

MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor): 전압으로 제어되는 4단자 스위치.
![PDF p.352: MOSFET 물리적 구조 (Source, Gate, Drain, Body)](img/Pasted%20image%2020251022215546.png)
NFET (n-type)과 PFET (p-type)의 상보적인(Complementary) 사용이 CMOS (Complementary MOS) 로직의 핵심이다.
Claude Shannon은 1937년 MIT 석사 논문에서 Boolean 대수(추상적 논리)와 전자 스위치(물리적 회로) 간의 유사성을 증명하며 디지털 전자공학의 시대를 열었다.
![PDF p.350: 논리(Boolean)와 회로(Transistors)의 연결](img/Pasted%20image%2020251022215607.png)
반도체 제조(Fabrication)에서 Die 크기는 비용에 큰 영향을 미친다.
Yield (수율): 웨이퍼(Wafer)에서 결함(Defects) 없이 작동하는 Die의 비율. Die 크기가 커질수록 결함이 포함될 확률이 높아져 수율이 급격히 낮아지고, 개별 Die 당 비용이 상승한다.
![PDF p.358-359: Die 크기와 수율(Yield)의 관계](img/Pasted%20image%2020251022215628.png)

## Performance & Benchmarking

### 1. 컴퓨터 아키텍처 개요

- 컴퓨터는 유한 상태 기계(Finite State Machine)로 모델링된다.
- 주요 구성 요소는 레지스터(Registers), 메모리(Memory), 프로그램 카운터(PC)이다.
- 기본 실행 모델은 순차적(Sequential Model)이며, Fetch, Decode, Read Inputs, Execute, Write Output, Next Instr 단계를 반복한다.
- 이는 폰 노이만(숭배해야만 해.) 아키텍처(von Neumann architecture)로 알려져 있다.
- 핵심 아이디어는 Stored-Program Computer로, 메모리에 명령어(Instructions)와 데이터(Data)를 함께 저장한다.
- ![PDF p. 9: 폰 노이만 아키텍처 다이어그램 (Input, Control Unit, ALU, Memory, Output)](img/Pasted%20image%2020251022220249.png)

### 2. 컴퓨터 아키텍처의 8가지 위대한 아이디어

- 강의에서는 다음 8가지 핵심 아이디어를 소개한다.
  1.  Moore's Law를 위한 설계
  2.  추상화(Abstraction)를 통한 설계 단순화
  3.  Make the common case fast (Amdahl's Law)
  4.  병렬성(Parallelism)을 통한 성능 향상
  5.  파이프라이닝(Pipelining)을 통한 성능 향상
  6.  예측(Prediction)을 통한 성능 향상
  7.  지역성 원리 (Principle of Locality) / 메모리 계층
  8.  중복성(Redundancy)을 통한 신뢰성(Dependability)

### 3. 아이디어 1: Moore's Law

- **정의**: Intel 공동 창립자 Gordon Moore가 1965년에 제시한 법칙으로, 칩의 트랜지스터 수가 약 24개월마다 2배씩 증가한다는 것이다.
- 이는 DRAM 밀도(DRAM density)에 해당하며, 대중적으로는 성능이 18개월마다 2배가 된다고 해석되었으나 이는 정확하지 않다.
- ![PDF p. 16: 1970-2020년 트랜지스터 개수 증가 그래프](img/Pasted%20image%2020251022220315.png)
- ![PDF p. 17: 트랜지스터 밀도(transistors/mm^2) 그래프. "Moore's Law is still alive!"](img/Pasted%20image%2020251022220333.png)
- **성능의 정체**:
  - Moore's Law에 따라 트랜지스터 수는 계속 증가했지만, CPU 성능(GFLOPS) 증가는 10년간 4.15배에 그쳐, 트랜지스터 증가율을 따라가지 못했다.
  - 특히 CPU 클럭 속도(CPU Clock Speed)는 2005년경 "CPU Speed Flat" 상태가 되었다.
  - ![PDF p. 23: 50년간 마이크로프로세서 트렌드 (Transistors, Single-Thread Performance, Frequency, Power, Logical Cores)](img/Pasted%20image%2020251022220348.png)
- **AI/ML 요구와의 불일치**: AI 모델의 연산 요구량(GFLOPS)은 4개월마다 2배씩 증가(10년간 43,000,000배)했지만, CPU(4.1배) 및 GPU(21배)의 성능 향상은 이를 따라가지 못하여 큰 격차(gap)가 발생했다.
  - ![PDF p. 20: AI 모델 수요와 CPU/GPU 성능 격차 그래프](img/Pasted%20image%2020251022220402.png)
- **Dennard Scaling의 붕괴**:
  - Dennard Scaling은 트랜지스터가 작아져도 전력 밀도(power density)는 일정하게 유지된다는 이론이다.
  - $Power = Capactive Load \times Voltage^2 \times Frequency$.
  - 이 법칙 덕분에 과거에는 트랜지스터를 2배로 늘려도 전력 소모가 일정했다.
  - 하지만 2005-2006년경, 트랜지스터가 너무 작아져 전류 누수(current leakage) 문제로 Dennard Scaling이 붕괴되었다.
- **Power Wall**:
  - 전압을 더 낮출 수 없고, 발생하는 열을 더 제거할 수 없는 '전력 장벽(Power wall)'에 도달했다.
  - ![PDF p. 27: 클럭 속도와 전력 소모 트렌드 (2004년경 정체)](img/Pasted%20image%2020251022220418.png)
  - 이에 대한 해결책으로 단일 코어의 클럭을 높이는 대신, 여러 개의 코어(Multi-cores)를 사용하는 방향으로 전환되었다.
- **기타 장벽**: Power wall 외에도 명령어 수준 병렬성(ILP wall) 및 메모리 지연 시간(Memory wall) 문제도 성능 향상을 가로막았다.

### 4. 아이디어 2 & 3: 추상화 및 Amdahl's Law

- **추상화(Abstraction)**: 복잡성을 다루기 위해 하위 레벨의 세부 사항을 숨기는 방식이다. (예: Application -> Algorithm -> ISA -> Physics).
- **Amdahl's Law (Make Common Case Fast)**:
  - 최적화의 이론적 상한선은 코드의 순차적(serial) 부분(병렬화 불가능한 부분)에 의해 제한된다.
  - $f$ = 최적화 가능한 부분의 비율, $s$ = 해당 부분의 속도 향상 배율
  - $Speedup_{enhanced} = \frac{1}{(1 - f) + f/s}$.
  - ![PDF p. 40: Amdahl's Law 실행 시간 비교 (baseline vs enhanced)](img/Pasted%20image%2020251022220437.png)

### 5. 아이디어 4, 5, 6: 병렬성, 파이프라이닝, 예측

- **병렬성(Parallelism)**:
  - 애플리케이션에 병렬성이 많다면, 다수의 단순한 코어(GPU 방식)가 소수의 복잡한 코어(CPU 방식)보다 효율적이다.
  - 종류:
    - Instruction level parallelism (ILP): Pipelining, Superscalar 등.
    - Data level parallelism (DLP): SIMD/Vector 명령어.
    - Task level parallelism (TLP): Multithreading, Multicore.
- **파이프라이닝(Pipelining)**: 작업을 여러 단계로 나누어 동시에 처리한다.
  - ![PDF p. 44: 파이프라인](img/Pasted%20image%2020251022220501.png)
- **예측(Prediction)**:
  - Branch Prediction: `if` 문과 같은 분기문에서 다음에 실행될 명령어를 예측하여 성능 저하를 막는다.
  - Prefetching: 향후 접근할 메모리 주소를 예측하여 데이터를 미리 캐시(Cache)로 가져온다.

### 6. 아이디어 7: 메모리 계층

- **The Memory Wall Problem**: 프로세서 속도와 메모리 대역폭(memory bandwidth) 간의 성능 격차가 시스템 성능을 제한한다.
- ![PDF p. 50: 메모리 월 문제 (모델 파라미터 vs 메모리 용량)](img/Pasted%20image%2020251022220520.png)
- Jim Gray는 "RAM Locality is King"이라고 강조했다.
- **메모리 계층(Memory Hierarchy)**: 속도가 빠르고 용량이 작은 저장장치부터 느리고 용량이 큰 저장장치까지 계층적으로 구성한다.
  - Registers (1 cycle) -> Caches (~10 cycles) -> Main memory (~100 cycles) -> SSD (~1M cycles) -> HDD (~10M cycles).
- ![PDF p. 54: 메모리 계층 피라미드](img/Pasted%20image%2020251022220531.png)

### 7. 아이디어 8: 중복성

- **신뢰성(Dependability)**: 시스템 일부가 실패하더라도 전체 시스템이 중단되지 않도록 중복성을 사용한다.
- 예: 3개의 모듈 중 2개가 동의하는 방식, Redundant Arrays of Independent Disks (RAID), Error Correcting Code (ECC) Memory.
- SpaceX의 Crew Dragon 모듈은 방사선으로 인한 오류 검사를 위해 3대의 컴퓨터를 사용한다 .
- ![PDF p. 57: 3-모듈 중복성 (1+1=1 실패)](img/Pasted%20image%2020251022220553.png)

### 8. 성능 측정 지표

- Latency (지연 시간): 작업을 완료하는 데 걸리는 시간. 낮을수록 좋다 .
- Throughput (처리량): 단위 시간당 완료하는 작업의 양 (예: Bandwidth). 높을수록 좋다 .
- Latency와 Throughput은 종종 상충 관계(contradictory)이다 .
- 예: 10TB 데이터 전송 시, 인터넷(low latency) vs. AWS Snowball (high throughput) .
- 예: 자동차(low latency) vs. 버스(high throughput) .
- 기타 지표: Cost (비용), Power (전력, $Joules/sec$), Energy (에너지, $Joules$), Reliability (신뢰성, $MTTF$) .

### 9. CPU 성능 방정식

- 성능을 결정하는 가장 기본적인 방정식은 다음과 같다 .
- $Execution Time = \frac{Instructions}{Program} \times \frac{Cycles}{Instruction} \times \frac{Seconds}{Cycle}$
- 즉, **$ET = IC \times CPI \times CT$** .
- IC (Instruction Count): 프로그램의 동적 명령어 수. (Compiler, ISA에 영향) .
- CPI (Cycles Per Instruction): 명령어당 평균 사이클 수. (Micro-architecture에 영향) .
  - 명령어 종류(ALU, Load, Store, Branch)마다 CPI가 다르다 .
- CT (Cycle Time): 1 사이클에 걸리는 시간. ($1 / Frequency$) .
- IPC (Instructions Per Cycle): $1 / CPI$. CPI보다 자주 쓰이며 높을수록 좋다 .
- **MIPS**: Millions of Instructions Per Second. 성능을 오해하게 만들 수 있는 지표이다 .

### 10. 벤치마킹 및 성능 법칙

- 벤치마크 스위트(Benchmark Suites): 공정한 비교를 위해 동일한 프로그램과 입력으로 시스템을 평가하는 표준화된 워크로드이다. (예: SPEC, MLPerf) .
- 평균 계산 \*\*:
  - Latency (시간)의 평균: Arithmetic Mean (산술 평균).
  - Throughput (비율)의 평균: Harmonic Mean (조화 평균).
  - Speedup (비율)의 평균: Geometric Mean (기하 평균).
- **Gustafson's Law (Weak Scaling)**: Amdahl's Law와 달리, 프로세서 수($P$)가 증가할 때 노드당 작업량을 고정한다. 즉, 전체 문제의 크기가 $P$에 비례하여 커진다.
- **Little's Law**: 큐(Queue) 시스템에 적용되는 법칙. $L = \lambda W$ .
  - $L$ = 시스템 내 아이템 수 (대기열 길이)
  - $\lambda$ = 평균 도착률 (Arrival Rate)
  - $W$ = 평균 대기 시간 (Wait Time)
- M/M/1 Queue: 대기열 모델. 시스템 처리량(Throughput)이 높아지면(서버가 바빠지면) 대기열(L)이 기하급수적으로 길어져 Latency(W)가 급증한다.
  - ![PDF p. 150: M/M/1 큐 Latency vs Throughput 트레이드오프](img/Pasted%20image%2020251022220634.png)
- **Operational Intensity (Arithmetic Intensity)**: $Flops / byte$. 메모리 1바이트당 수행하는 연산 횟수 .
- **Roofline Model**: Operational Intensity(X축)와 성능(FLOP/s, Y축) 간의 관계를 시각화한다 .
  - ![PDF p. 157: Roofline Model (Memory Bound vs Compute Bound)](img/Pasted%20image%2020251022220705.png)
  - 성능은 Memory Access(메모리 대역폭) 또는 Peak Compute(최대 연산 성능) 중 더 낮은 쪽(지붕)에 의해 제한된다.

## Instruction Set Architecture

### 1. ISA (Instruction Set Architecture) 소개

#### 1.1. ISA의 정의

ISA (Instruction Set Architecture)는 하드웨어와 소프트웨어 사이의 인터페이스를 정의하는 계약이다.
![PDF p.9: ISA as the interface between software and hardware](img/Pasted%20image%2020251022222820.png)

- ISA는 소프트웨어(운영체제, 애플리케이션)가 하드웨어(CPU, Mem, I/O)를 제어하기 위한 기능적 명세를 정의한다.
- ISA는 하드웨어가 이해하는 비트 패턴(명령어)과 레지스터, 메모리와 같은 저장 위치 및 접근 방법을 정의한다.
- 명령어의 구현 방식, 속도, 전력 소모 등 비기능적 측면은 ISA 계약에 포함되지 않는다.

#### 1.2. ISA vs. Microarchitecture

- **ISA (Architecture):** 소프트웨어에 보이는 기능적 명세이다. (예: 컴퓨터는 덧셈을 수행할 수 있다).
- **Microarchitecture:** ISA를 실제로 구현하는 하드웨어 설계이다 (예: 특정 데이터패스와 제어 로직을 가진 설계). 이는 소프트웨어에게는 보이지 않는다.

#### 1.3. 실행 모델 (von Neumann)

![PDF p.16: The von Neumann Architecture diagram](img/Pasted%20image%2020251022222849.png)
현대 컴퓨터는 대부분 von Neumann 모델을 기반으로 한다.

- 컴퓨터는 CPU(중앙 처리 장치), Main Memory(메인 메모리), Input/Output(입출력 장치)로 구성된다.
- CPU는 다시 Datapath (연산 수행, 레지스터 포함)와 Control Unit (명령어 해석 및 제어 신호 생성)으로 나뉜다.
  ![PDF p.17: Detailed anatomy of a von Neumann computer](img/Pasted%20image%2020251022222914.png)
- 프로그램은 메모리에 저장된 명령어의 집합이다.
- 프로세서는 **Program Counter (PC)**가 가리키는 메모리 주소에서 명령어를 가져와(Fetch) 해독하고(Decode), 입력을 읽어(Read Inputs), 실행하며(Execute), 결과를 쓰고(Write Output),다음 명령어를 가리킨다(Next Instr).
  ![PDF p.13: Instruction execution cycle flowchart](img/Pasted%20image%2020251022222830.png)

#### 1.4. ISA의 요소

- **Operations:** 산술/논리 연산, 메모리 접근, 제어 흐름(분기) 등.
- **Operands:** 데이터의 타입 (레지스터, 상수, 메모리 주소) 및 크기 (byte, 32-bit, 64-bit).
- **Memory Space:** 주소 지정 방식 및 프로그램이 사용할 수 있는 메모리 크기.

### 2. ISA 설계 및 비교 (RISC vs. CISC)

#### 2.1. ISA 설계 목표

1.  **Programmability:** 프로그램을 효율적으로 표현하기 쉬워야 한다. 과거에는 사람(어셈블리 프로그래머)이 대상이었으나 현재는 컴파일러가 대상이다.
2.  **Implementability (Performance):** 고성능 (저전력, 저비용) 구현이 용이해야 한다. 가변 길이 명령어 등은 디코딩을 복잡하게 하여 구현을 어렵게 한다.
3.  **Compatibility:** 기술이 발전해도 기존 프로그램을 계속 지원(Backward)하거나 오래된 프로세서가 새 프로그램을 지원(Forward)할 수 있어야 한다.

#### 2.2. 성능 분석

컴퓨터 프로그램의 실행 시간은 세 가지 요소로 결정된다:

- **Execution time = (Instructions / Program) \* (Seconds / Cycle) \* (Cycles / Instruction)**
  - `Instructions / Program`: 명령어 수. (ISA, 컴파일러에 영향)
  - `Seconds / Cycle`: 클럭 속도. (Microarchitecture, 기술에 영향)
  - `Cycles / Instruction` (CPI): 명령어 당 사이클 수. (ISA, Microarchitecture에 영향)

#### 2.3. CISC (Complex Instruction Set Computer)

- **특징:** 복잡하고 강력한 명령어들을 제공한다.
- **장점:** `Instructions/Program` (명령어 수)를 줄이는 것을 목표로 한다. 코드 밀도가 좋다.
- **단점:** `Cycles/Insn` (CPI) 또는 `Seconds/Cycle` (클럭 주기)가 증가하는 경향이 있다. 디코딩 로직이 복잡하다 (특히 x86은 1~16바이트의 가변 길이 명령어).
- **현황 (x86):** 호환성(Inertia) 덕분에 데스크톱 시장을 장악했다.

#### 2.4. RISC (Reduced Instruction Set Computer)

- **특징:** 간단하고 균일한 명령어 집합을 제공한다. (예: MIPS, ARM, RISC-V)
- **RISC 설계 원칙:**
  1.  **Load/Store Architecture:** 메모리 접근은 `load`, `store` 명령어로만 수행한다. ALU 연산은 레지스터 간에만 수행한다.
  2.  **Fixed-length Instruction:** 모든 명령어가 고정된 길이(예: 32-bit)를 가져 디코딩이 단순하다.
  3.  **Many Registers:** 컴파일러가 최적화에 사용할 수 있는 범용 레지스터가 많다.
  4.  **Simple Addressing Modes:** 단순한 주소 지정 방식만 사용한다.
- **장점:** `Cycles/Insn` (CPI)과 `Seconds/Cycle` (클럭 주기)를 줄이는 것을 목표로 한다.
- **단점:** `Instructions/Program` (명령어 수)가 CISC보다 늘어날 수 있으나, 컴파일러 최적화로 상쇄한다.
- **현황 (ARM):** 저전력 특성으로 임베디드 및 모바일 시장을 장악했다.

#### 2.5. 현대의 CISC: "RISC Inside"

- 현대의 고성능 x86 프로세서(CISC)는 내부적으로 **micro-ops (μops)**라는 RISC 스타일의 단순한 명령어로 변환하여 실행한다.
- 복잡한 x86 명령어 (예: `addl %ebx, -4(%rax)`)는 여러 개의 μops (load, add, store)로 분해(cracking)된다.
- 이를 통해 CISC의 호환성을 유지하면서 RISC의 고성능 구현 기술(파이프라이닝, 비순차 실행)을 활용한다.

---

### 3. RISC-V ISA 상세

#### 3.1. RISC-V 개요

- UC Berkeley에서 2010년 시작된 오픈 소스 ISA 표준이다.
- 라이선스 비용 없이 누구나 RV 칩을 설계할 수 있다.
- Google, Intel, Samsung, NVIDIA 등 많은 기업이 참여하는 **RISE (RISC-V Software Ecosystem)**를 통해 생태계가 확장되고 있다.
  ![PDF p.85: RISE Members logo slide](img/Pasted%20image%2020251022222947.png)
- **RV32I**는 47개의 기본 정수 명령어를 가진 32-bit 기본 ISA이다.
- 모든 명령어는 32-bit 고정 길이이다.
- 32개의 32-bit 범용 레지스터 (`x0` ~ `x31`)를 가지며, `x0`는 항상 0이다.

#### 3.2. 메모리와 주소 지정

- **Byte-Addressable:** 메모리의 최소 주소 단위는 바이트(8 bit)이다.
- **Endian-ness:** RISC-V는 **Little-endian** 방식을 사용한다. (즉, `0x12345678` 저장 시 `0x00`번지에 `0x78`이 저장됨).
- **Alignment:** RISC-V는 하드웨어에서 **misaligned access** (정렬되지 않은 주소 접근)를 투명하게 처리한다 (단, 속도는 느림).
- **Addressing Modes:** RISC-V는 4가지 기본 주소 지정 방식을 사용한다: 1. Immediate: 상수 값을 명령어 자체에 포함. 2. Register: 피연산자가 레지스터에 있음. 3. Base (Displacement): `lw x10, 12(x13)` (x13 레지스터 값 + 12 바이트 오프셋). 4. PC-relative: PC 기준 상대 주소 (주로 분기 명령어).
  ![PDF p.60: RISC-V addressing modes diagram](img/Pasted%20image%2020251022223012.png)

#### 3.3. 함수 호출 규약 (Function Call Convention)

- **6단계:** 1. 파라미터 전달 -> 2. 제어 전달 -> 3. 로컬 저장소 확보 -> 4. 작업 수행 -> 5. 결과 전달 -> 6. 제어 복귀.
- **명령어:**
  - `jal ra, FuncName`: 함수 호출. `PC+4` (복귀 주소)를 `ra` (Return Address, x1) 레지스터에 저장하고 `FuncName`으로 점프한다.
  - `jr ra` (pseudo-insn): 함수 복귀. `ra` 레지스터에 저장된 주소로 점프한다 (`jalr x0, ra, 0`와 동일).
- **레지스터 규약:**
  - **Arguments (a0-a7 / x10-x17):** 함수에 인자를 전달. (Caller-saved)
  - **Return values (a0-a1):** 함수가 결과를 반환. (Caller-saved)
  - **Caller-saved (t0-t6):** 호출한 함수(Caller)가 필요시 저장해야 한다. 피호출 함수(Callee)는 마음대로 덮어쓸 수 있다.
  - **Callee-saved (s0-s11):** 피호출 함수(Callee)가 사용하려면 반드시 저장했다가 복귀 전에 복원해야 한다.
- **The Stack (스택):**
  _ 레지스터에 담을 수 없는 로컬 변수, `ra` (중첩 호출 시), `callee-saved` 레지스터를 임시 저장하는 메모리 공간이다.
  _ `sp` (Stack Pointer, x2) 레지스터가 스택의 최상단(가장 마지막에 사용된 주소)을 가리킨다. \* RISC-V에서 스택은 높은 주소에서 낮은 주소로 "자란다". (Push = `sp` 감소, Pop = `sp` 증가)
  ![PDF p.213: RV32 Memory Allocation diagram](img/Pasted%20image%2020251022223030.png)

#### 3.4. RISC-V 6가지 명령어 형식 (Instruction Formats)

![PDF p.226: The 6 RISC-V instruction formats (R, I, S, B, U, J)](img/Pasted%20image%2020251022223121.png)

- **R-Format (Register):** 레지스터 간 연산. (예: `add`, `sub`, `sll`)
  - `funct7 | rs2 | rs1 | funct3 | rd | opcode`
- **I-Format (Immediate):** 상수 값(Immediate)을 사용한 연산 및 로드. (예: `addi`, `lw`, `jalr`)
  - `imm[11:0] | rs1 | funct3 | rd | opcode`
- **S-Format (Store):** 메모리 저장. (예: `sw`, `sb`)
  - `imm[11:5] | rs2 | rs1 | funct3 | imm[4:0] | opcode`
- **SB-Format (Branch):** 조건부 분기. (예: `beq`, `bne`)
  - `imm[12|10:5] | rs2 | rs1 | funct3 | imm[4:1|11] | opcode`
  - PC-relative 주소 사용. Immediate 값들이 흩어져 인코딩된다.
- **U-Format (Upper Immediate):** 20-bit 상위 상수 로드. (예: `lui`)
  - `imm[31:12] | rd | opcode`
  - 주로 `addi`와 조합하여 32-bit 상수를 만든다. (예: `lui x10, 0x87654` -> `addi x10, x10, 0x321`)
- **UJ-Format (Jump):** 무조건 점프. (예: `jal`)
  - `imm[20|10:1|11|19:12] | rd | opcode`
  - PC-relative 주소 사용. Immediate 값들이 흩어져 인코딩된다.

#### 3.5. 프로그램 빌드 과정

1.  **Compiler:** C 코드 (`.c`)를 어셈블리 코드 (`.s`)로 변환한다.
2.  **Assembler:** 어셈블리 코드 (`.s`)를 기계어 코드인 오브젝트 파일 (`.o`)로 변환한다.
    _ Pseudo-instructions (예: `j label`)을 실제 명령어 (예: `jal x0, label`)로 변환한다.
    _ **Symbol Table** (다른 파일이 참조할 수 있는 이 파일의 레이블/데이터 목록)과 \* **Relocation Table** (이 파일이 참조하는 외부 주소 목록)을 생성한다.
    ![PDF p.180: Assembler and Linker process diagram](img/Pasted%20image%2020251022223204.png)
3.  **Linker:** 여러 오브젝트 파일 (`.o`)과 라이브러리를 묶어 하나의 실행 파일 (`a.out`)로 만든다.
    - Relocation Table을 참조하여 외부 레이블이나 데이터의 절대 주소를 찾아 기계어 코드를 완성(수정)한다.
