## 1. 수업 개요 및 평가 방법

[cite_start]이 수업은 자바 프로그래밍을 다루며 임베디드 SE 연구실의 이우진 교수가 진행한다[cite: 1, 3, 4]. [cite_start]주교재는 H. M. Deitel과 P. J. Deitel이 저술한 JAVA - How to Program (9판 또는 10판)이다[cite: 7, 8]. [cite_start]수업의 목표는 객체 지향 프로그래밍 개념 파악, Java 언어 문법 숙지, 그리고 Java를 이용한 문제 해결(Problem Solving) 능력을 향상시키는 것이다[cite: 12, 13, 14, 15].

[cite_start]평가는 상대 평가 권장과목으로 A 등급은 40% 미만으로 부여된다[cite: 24, 25]. [cite_start]평가는 실습 위주로 진행되며 구체적인 배점은 다음과 같다[cite: 26].
* [cite_start]실습 과제 제출 (20%): 강의 후 실습 결과를 채점한다[cite: 27, 28].
* [cite_start]중간 고사 (25%): 이론 및 실기시험으로 2~3시간 진행한다[cite: 29, 30].
* [cite_start]기말 고사 (30%): 이론 및 실기시험으로 2~3시간 진행한다[cite: 31, 32].
* [cite_start]프로젝트 (15%): 3~4명이 팀을 이루어 텀 프로젝트를 수행한다[cite: 33, 34].
* [cite_start]퀴즈 (10%): 매시간 수업 시작 전에 시험을 치른다[cite: 35, 36].

[cite_start]실습은 문제 풀이 방식으로 이루어지며 수업시간에 배운 내용 익히기(70%)와 응용 문제 풀이(30%)로 구성된다[cite: 19, 21, 22].

## 2. Java 소개

[cite_start]Java는 세계에서 가장 널리 사용되는 컴퓨터 프로그래밍 언어이다[cite: 65]. [cite_start]이는 인터넷 기반 애플리케이션 및 네트워크 통신 장치 소프트웨어 구현을 위한 선택 언어가 되었다[cite: 74, 75, 76]. [cite_start]Oracle에 따르면 엔터프라이즈 데스크톱의 97%, 30억 개의 장치, 모든 Blu-ray 플레이어가 Java를 실행한다[cite: 78, 79].

[cite_start]Java Editions는 다음과 같이 구분된다[cite: 89].
* [cite_start]Java SE (Standard Edition): 크로스 플랫폼, 범용 애플리케이션 개발에 사용된다[cite: 90, 91].
* [cite_start]Java EE (Enterprise Edition): 대규모 분산 네트워킹 애플리케이션 및 웹 기반 애플리케이션 개발을 위한 것이다[cite: 92, 93, 94].
* [cite_start]Java ME (Micro Edition): 메모리가 제한된 소형 장치(예: 스마트폰, 셋톱박스 등)를 위한 것이다[cite: 95, 96].

## 3. 컴퓨터 하드웨어와 소프트웨어

[cite_start]컴퓨터는 인간보다 훨씬 빠르게 계산을 수행하고 논리적 결정을 내릴 수 있는 장치이다[cite: 100]. [cite_start]컴퓨터는 키보드, 화면, 디스크, 메모리, processing units 등과 같은 하드웨어 장치들로 구성된다[cite: 101, 102]. [cite_start]컴퓨터에서 실행되는 프로그램을 소프트웨어라고 한다[cite: 103].

[cite_start]Moore's Law는 매년 또는 2년마다 컴퓨터의 용량이 가격 인상 없이 약 두 배로 증가한다는 관찰이다[cite: 110, 111, 112].

[cite_start]데이터 계층 구조(Data Hierarchy)는 비트(Bits)에서 시작하여 문자(Characters), 필드(Fields), 레코드(Records), 파일(File) 등으로 구조가 커지고 복잡해진다[cite: 116].

![PDF p.15: Data hierarchy diagram showing bits, characters, fields, records, and files]

## 4. 컴퓨터 구조 및 프로그래밍 언어

[cite_start]컴퓨터의 논리적 장치는 Input unit, Output unit, Memory unit, Central processing unit (CPU), Secondary storage unit으로 구성된다[cite: 139, 140, 141, 142, 143, 144].

[cite_start]프로그래밍 언어는 크게 세 가지 유형으로 나뉜다[cite: 149].
* Machine languages: 컴퓨터가 직접 이해할 수 있는 언어로, 하드웨어 설계에 의해 정의된다. [cite_start]일반적으로 숫자의 나열(1과 0)로 구성되며 기계 종속적(Machine dependent)이다[cite: 150, 155, 156, 157].
* Assembly languages: 기계어의 기본 연산을 영어 약어로 표현한 것이다. [cite_start]Assembler라는 번역 프로그램이 필요하다[cite: 151, 158, 159].
* High-level languages: 단일 문장으로 실질적인 작업을 수행할 수 있다. [cite_start]Compiler가 이를 기계어로 변환하거나 Interpreter가 직접 실행한다[cite: 152, 163, 164, 165, 168].

## 5. 객체 기술 (Object Technology)

[cite_start]객체(Objects), 정확히는 객체가 생성되는 클래스(Classes)는 재사용 가능한 소프트웨어 구성 요소이다[cite: 173]. [cite_start]명사(Noun)는 속성(attributes)과 행동(behaviors)을 가진 소프트웨어 객체로 표현될 수 있다[cite: 175].

[cite_start]자동차를 예로 들면, 엔지니어링 도면이 Class에 해당하고 실제 자동차가 Object에 해당한다[cite: 187, 200, 201]. [cite_start]가속 페달은 자동차를 더 빠르게 만드는 복잡한 메커니즘을 운전자로부터 숨기는데, 이는 Method가 복잡한 프로그램 문장을 사용자로부터 숨기는 것과 유사하다[cite: 190, 198]. [cite_start]Java에서는 Class라는 프로그램 단위를 생성하여 메소드들을 포함시킨다[cite: 199].

주요 개념은 다음과 같다.
* [cite_start]Reuse: 기존 클래스를 재사용하여 시간과 노력을 절약하고 시스템의 신뢰성을 높인다[cite: 207, 209, 210].
* [cite_start]Messages and Methods Calls: 객체에 메시지를 보내는 것은 해당 객체의 메소드를 호출하여 작업을 수행하게 하는 것이다[cite: 217, 218, 219].
* [cite_start]Attributes and Instance Variables: 각 객체는 자신의 속성(예: 연료량)을 유지 관리하며 이를 Instance Variable이라고 한다[cite: 225, 230].
* [cite_start]Encapsulation: 클래스는 속성과 메소드를 객체 내에 캡슐화하며, 구현 세부 사항을 숨긴다(Information hiding)[cite: 235, 236, 237].
* [cite_start]Inheritance: 새로운 클래스가 기존 클래스의 특성을 흡수하고 고유한 특성을 추가하여 생성되는 것이다[cite: 242, 243].

[cite_start]OOAD(Object-Oriented Analysis and Design)는 시스템 요구사항을 분석하고 설계를 개발하는 과정이며, UML(Unified Modeling Language)은 이를 모델링하기 위한 그래픽 체계이다[cite: 249, 254, 255].

## 6. 운영체제 및 Java의 역사

[cite_start]운영체제(Operating Systems)는 컴퓨터 사용을 편리하게 하고 애플리케이션이 안전하고 효율적으로 실행되도록 하는 소프트웨어이다[cite: 259, 260]. [cite_start]핵심 구성 요소를 Kernel이라고 한다[cite: 262].

[cite_start]프로그래밍 언어의 역사를 보면 C는 1972년 Dennis Ritchie가 개발했으며 UNIX 운영체제 개발 언어로 알려졌다[cite: 269, 270]. [cite_start]C++는 1980년대 초 Bjarne Stroustrup이 C를 확장하여 개발했으며 객체 지향 기능을 제공한다[cite: 272, 273, 274].

[cite_start]Java는 1991년 Sun Microsystems의 James Gosling에 의해 C++ 기반으로 시작되었다[cite: 280, 281, 282, 283]. [cite_start]1993년 웹의 폭발적인 인기와 함께 동적 콘텐츠를 추가할 수 있는 잠재력을 인정받았다[cite: 284, 285, 286]. [cite_start]Sun Microsystems는 2009년 Oracle에 인수되었다[cite: 291]. [cite_start]Java Class Libraries는 Java APIs라고도 불리며 기존 클래스와 메소드의 풍부한 컬렉션이다[cite: 294, 296].

## 7. Java 개발 환경

[cite_start]일반적인 Java 프로그램은 5단계를 거친다[cite: 299].

1. [cite_start]Edit: 편집기(Editor)를 사용하여 소스 코드(.java 파일)를 작성하고 수정한다[cite: 312, 313, 316]. [cite_start]IDE(Integrated Development Environments)는 편집기, 디버거 등을 제공하여 개발을 지원한다(예: Eclipse, NetBeans)[cite: 324, 327, 328].

![PDF p.34: Typical Java development environment-editing phase]

2. [cite_start]Compile: javac 컴파일러를 사용하여 소스 코드를 바이트코드(.class 파일)로 변환한다[cite: 336, 337, 340, 341].

![PDF p.36: Typical Java development environment-compilation phase]

3. [cite_start]Load: Class Loader가 디스크나 네트워크에서 .class 파일을 읽어 메모리(Primary Memory)로 전송한다[cite: 358, 359, 360].

![PDF p.38: Typical Java development environment-loading phase]

4. [cite_start]Verify: Bytecode verifier가 바이트코드를 검사하여 자바의 보안 제한 사항을 위반하지 않는지 확인한다[cite: 371, 372, 373].
5. [cite_start]Execute: JVM(Java Virtual Machine)이 바이트코드를 실행한다[cite: 378]. [cite_start]JVM은 해석(Interpretation)과 JIT(Just-In-Time) 컴파일을 혼합하여 실행하며, 기반 하드웨어와 운영체제를 숨기는 가상 머신 역할을 한다[cite: 379, 381, 353, 354].