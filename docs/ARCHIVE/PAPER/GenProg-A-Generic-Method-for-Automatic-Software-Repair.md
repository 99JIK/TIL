---
title: 'GenProg: A Generic Method for Automatic Software Repair'
date: '2025-11-22'
description: 공식 명세 없이 기존 테스트 케이스와 유전 프로그래밍을 활용하여 레거시 소프트웨어의 버그를 자동으로 수정하는 GenProg 방법론 제안
tags: [Automated Software Repair, Genetic Programming, Software Engineering, Legacy Systems]
authors:
- name: Claire Le Goues
- name: Thanh Vu Nguyen
- name: Stephanie Forrest
- name: Westley Weimer
---

## 논문 정보
- **제목**: GenProg: A Generic Method for Automatic Software Repair
- **저자**: Claire Le Goues, Thanh Vu Nguyen, Stephanie Forrest, Westley Weimer (University of Virginia, University of New Mexico)
- **학회/저널**: IEEE Transactions on Software Engineering (Vol. 38, No. 1, 2012)
- **발행일**: 2012-01-01
- **DOI**: 10.1109/TSE.2011.104
- **주요 연구 내용**: 공식적인 명세(Specification)가 없는 기성(off-the-shelf) C 프로그램의 결함을 수정하기 위해, 유전 프로그래밍(Genetic Programming)을 확장하여 자동화된 수정을 생성하는 기법인 GenProg를 제안함. 기존 테스트 케이스를 활용해 결함과 필수 기능을 정의하고, AST(추상 구문 트리) 수준에서 유전 연산(변경, 교차)을 수행하여 수정한 뒤 델타 디버깅으로 최소한의 패치를 생성함.
- **주요 결과 및 결론**: 총 125만 줄(LOC)에 달하는 16개의 오픈 소스 프로그램(웹 서버, 미디어 플레이어 등)에서 8가지 유형의 결함을 대상으로 실험한 결과, 평균 357초 만에 수리에 성공함. 생성된 패치는 입력 암기(Input Memorization) 방식이 아닌 실제 결함을 해결하는 일반적인 수정본임이 검증됨.
- **기여점**: 주석이나 특수 코딩 관행 없이도 실제 레거시 소프트웨어에 적용 가능한 최초의 범용 자동 수리 방법을 입증했으며, 유전 프로그래밍을 소프트웨어 유지보수 영역으로 확장함.
<!--truncate-->
## 요약

### 초록
이 논문은 공식 명세나 프로그램 주석 없이 기성 레거시 프로그램의 결함을 자동으로 수정하는 방법인 GenProg를 설명한다. GenProg는 확장된 형태의 유전 프로그래밍(GP)을 사용하여 필수 기능은 유지하면서 결함을 제거한 프로그램 변형(Variant)을 진화시킨다. 이때 기존 테스트 스위트를 활용하여 결함과 필수 기능을 인코딩한다. 구조적 차이 알고리즘과 델타 디버깅을 통해 원본 프로그램과 변형 프로그램 간의 차이를 최소화하여 최종 패치를 생성한다. 16개의 C 프로그램에 대해 실험한 결과, 평균 357초 내에 다양한 결함을 성공적으로 수정함을 확인했다.

### 서론
소프트웨어 품질 유지는 막대한 비용이 드는 문제이며, 버그 수정은 소프트웨어 유지보수 비용의 큰 비중을 차지한다. 결함 탐지 기술은 발전했으나, 탐지된 버그를 수정하는 것은 여전히 어렵고 수동적인 과정이다. 본 연구는 기존 테스트 케이스를 활용하여 레거시 애플리케이션의 실제 버그를 자동으로 수정하는 GenProg 기술을 제안한다. 이는 공식 명세 없이도 작동하며, 특정 버그 유형에 국한되지 않는 범용적인 접근 방식이다.

### 배경
연구는 유전 프로그래밍(GP)을 핵심 알고리즘으로 사용한다. GP는 생물학적 진화에서 영감을 받은 확률적 검색 방법으로, 변형(mutation)과 교차(crossover)를 통해 프로그램 집단을 진화시킨다.  GenProg는 프로그램의 문장(Statement) 수준에서 작동하며, 프로그램의 다른 위치에 올바른 동작을 구현하는 코드가 존재할 것이라는 가설(Plastic Surgery Hypothesis)을 바탕으로 한다.

### 모델 아키텍처 / 방법론

#### 핵심 구조 및 표현 (Representation)
GenProg는 프로그램 변형을 **(1) 추상 구문 트리(AST)**와 **(2) 가중치 경로(Weighted Path)**의 쌍으로 표현한다.
- **AST**: CIL 툴킷을 사용하여 생성하며, 문장(Statement) 단위로 조작한다. 이는 구문론적으로 잘못된 프로그램 생성을 방지한다.
- **가중치 경로**: 부정적(실패) 테스트 케이스 실행 시 방문한 문장들의 리스트이다. 긍정적(성공) 테스트 케이스에서도 방문되는 문장은 가중치를 낮추어($W_{Path}$), 수정이 결함과 관련된 부분에 집중되도록 한다.

#### 유전 연산자 (Genetic Operators)
- **변형(Mutation)**: 가중치 경로상의 문장을 선택하여 삭제, 삽입, 또는 교체(Swap)한다. 삽입이나 교체에 사용되는 코드는 프로그램 내의 다른 위치에서 무작위로 가져온다.
- **교차(Crossover)**: 두 부모 프로그램의 가중치 경로를 기준으로 교차점을 선택하여 이후의 문장들을 서로 바꾼다.

#### 적합도 함수 (Fitness Function)
적합도 함수는 테스트 케이스 통과 여부로 결정된다.
$$fitness(P) = W_{PosT} \times |\{t \in PosT | P \text{ passes } t\}| + W_{NegT} \times |\{t \in NegT | P \text{ passes } t\}|$$
여기서 $PosT$는 긍정적 테스트 셋, $NegT$는 부정적 테스트 셋이며, $W$는 각 가중치이다. 컴파일되지 않는 변형은 적합도가 0이다.
![Figure 1](img/Pasted%20image%2020251124143317.png)
#### 수리 최소화 (Repair Minimization)
GP가 찾은 초기 수리(Primary Repair)는 불필요한 변경을 포함할 수 있다. 논문의 Figure 1에서 보여지듯, 델타 디버깅(Delta Debugging)과 구조적 차이(Structural Differencing) 알고리즘을 사용하여 테스트 통과에 필수적이지 않은 변경 사항을 제거하고 1-minimal 패치를 생성한다.

### 실험 결과

#### 주요 데이터셋 및 설정
- **대상 프로그램**: 16개의 오픈 소스 C 프로그램 (Webserver, Media player, Text processing tool 등). 총 125만 라인의 코드.
- **결함 유형**: 무한 루프, 세그멘테이션 오류, 버퍼 오버플로우, 정수 오버플로우, 포맷 스트링 취약점 등 8개 유형.
- **환경**: 쿼드 코어 3GHz 머신.
![Figure 7](img/Pasted%20image%2020251124143411.png)
![Figure 9](img/Pasted%20image%2020251124143438.png)
#### 핵심 성능 지표
- **성공률**: 100번의 시험(trial) 중 평균 77%의 성공률을 보였다. (Figure 7 참조)
- **소요 시간**: 성공적인 수리를 찾는 데 평균 357초가 소요되었다.
- **확장성**: 탐색 시간은 프로그램의 전체 크기보다는 가중치 경로(Weighted Path)의 길이에 따라 선형 이하(Sub-linear)로 증가하는 경향을 보였다. (Figure 9 참조)

#### 수리 품질 및 보안
- **Fuzz Testing**: 100,000건의 무작위 Fuzz 입력과 Exploit 변형 입력을 사용하여 수리된 프로그램을 테스트한 결과, 새로운 취약점이 도입되지 않았으며 수리가 단순한 입력 암기가 아님을 확인했다.
- **Closed-loop System**: 침입 탐지 시스템(IDS)과 결합된 시나리오에서, 수리 과정으로 인한 서비스 중단이나 기능 저하는 미미한 수준이었다.

### 결론
GenProg는 유전 프로그래밍을 활용하여 실제 소프트웨어의 버그를 효율적으로 수정할 수 있음을 입증했다. 이 기술은 오류 위치 추정(Fault Localization)을 통해 탐색 공간을 줄이고, 기존 코드를 재사용함으로써 높은 성공률을 달성했다. 생성된 패치는 가독성이 높고 기능 저하가 적으며, 향후 소프트웨어 개발 및 유지보수 프로세스의 자동화를 위한 중요한 발판을 마련했다.