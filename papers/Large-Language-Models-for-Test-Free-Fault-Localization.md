---
title: Large Language Models for Test-Free Fault Localization
date: '2024-04-14'
description: 테스트 케이스 없이 사전 학습된 LLM의 표현과 양방향 어댑터 층을 결합하여 소스 코드만으로 결함 위치를 정확히 탐지하는 LLMAO 기법 제안
tags: [Fault Localization, Large Language Model, Software Engineering, Neural Network, Deep Learning]
authors:
- name: Aidan Z.H. Yang
- name: Ruben Martins
- name: Claire Le Goues
- name: Vincent J. Hellendoorn
---

## 논문 정보
- **제목**: Large Language Models for Test-Free Fault Localization
- **저자**: Aidan Z.H. Yang, Ruben Martins, Claire Le Goues, Vincent J. Hellendoorn (Carnegie Mellon University)
- **학회/저널**: 2024 IEEE/ACM 46th International Conference on Software Engineering (ICSE '24)
- **발행일**: 2024-04-14
- **DOI**: https://doi.org/10.1145/3597503.3623342
- **주요 연구 내용**: 기존 결함 위치 탐지(Fault Localization) 기술들이 테스트 커버리지에 의존하는 한계를 극복하기 위해, 대규모 언어 모델(LLM)과 양방향 어댑터(Bidirectional Adapter)를 결합한 테스트 프리(Test-Free) 방식인 **LLMAO**를 제안한다.
- **주요 결과 및 결론**: Defects4J 벤치마크에서 기존의 최신 머신러닝 기반 결함 탐지(MLFL) 기술들보다 Top-1 정확도는 2.3%~54.4%, Top-5 정확도는 14.4%~35.6% 향상된 성능을 보였으며, 모델 크기가 커질수록 성능이 비례하여 증가함을 확인했다.
- **기여점**: 테스트 케이스 없이 소스 코드의 자연어적 특성만을 학습하여 결함을 탐지하는 최초의 LLM 기반 접근법을 제시했으며, 기능적 버그뿐만 아니라 보안 취약점 탐지까지 일반화 가능함을 입증했다.
<!--truncate-->
## 요약

### 초록
본 논문은 소수의 예제만으로 새로운 작업에 적응하는 대규모 언어 모델(LLM)의 능력을 활용하여 라인 레벨(Line-level)의 결함 위치 탐지(Fault Localization, FL) 적용 가능성을 연구한다. LLM의 왼쪽에서 오른쪽으로(Left-to-right) 생성하는 특성을 극복하기 위해, LLM이 학습한 표현 위에 소규모의 양방향 어댑터 층(Bidirectional Adapter Layers)을 미세 조정하는 **LLMAO**를 제안한다. 이는 테스트 커버리지 정보 없이 버그 라인을 찾아내는 최초의 언어 모델 기반 접근법이다. 3억 5천만 개에서 160억 개의 파라미터를 가진 LLM을 미세 조정한 결과, 모델 크기가 커질수록 결함 탐지 성능이 일관되게 향상되었다. 실험 결과 LLMAO는 최신 MLFL 베이스라인보다 Top-1 결과에서 최대 54.4%, Top-5 결과에서 최대 35.6% 향상된 성능을 보였으며, 보안 취약점 탐지에도 적용 가능함을 확인했다.

### 서론
결함 위치 탐지(FL)는 디버깅의 핵심 단계로, 버그 수정 시간을 단축하는 것을 목표로 한다. 기존의 스펙트럼 기반(SBFL) 및 변이 기반(MBFL) 기술은 테스트 케이스의 실행 정보(커버리지, 실행 결과)에 전적으로 의존하므로, 데이터 중심의 결함이나 실행 시간 오류(Race condition 등) 탐지에 한계가 있으며 계산 비용이 높다. 최근 머신러닝 기반(MLFL) 기술 역시 테스트 커버리지 매트릭스나 SBFL 점수를 입력으로 사용하는 경우가 많다. 본 연구는 코드 생성에 탁월한 성능을 보이는 LLM이 소스 코드의 의미적 패턴을 깊이 이해하고 있다는 점에 착안하여, 테스트 케이스 없이 코드 자체만으로 결함을 탐지하는 새로운 방법을 제안한다.

### 배경
기존 SBFL 기법인 Ochiai 등은 통과/실패한 테스트 케이스의 커버리지 정보를 통계적으로 분석하여 의심도 점수를 계산한다. 반면, CodeGen과 같은 최신 코드 LLM은 이전 토큰들을 기반으로 다음 토큰을 예측하는 인과적 어텐션(Causal Attention) 메커니즘을 사용한다. 이는 코드 생성에는 유리하지만, 특정 라인의 결함 여부를 판단할 때 해당 라인 이후의 문맥(Suffix context) 정보를 활용하지 못한다는 한계가 있다. 이를 해결하기 위해 본 연구는 전체 파일의 문맥을 고려할 수 있는 양방향 처리 구조가 필요함을 강조한다.
![Figure 3](img/Pasted%20image%2020251124141827.png)
### 모델 아키텍처 / 방법론
LLMAO는 버그가 있는 프로그램을 입력받아 각 라인이 결함일 확률을 출력한다. (논문의 Figure 3 참조)

- **사전 학습된 LLM (Pretrained LLM)**: CodeGen 모델(350M, 6B, 16B 파라미터)을 사용하며, 가중치는 동결(Frozen)하여 업데이트하지 않는다. 입력 코드를 토큰화하여 모델에 주입하고, 각 라인의 끝을 나타내는 개행(Newline) 토큰의 최종 은닉 상태(Hidden states)를 추출한다.
- **차원 축소 (Dimension Reduction)**: LLM의 고차원 벡터(예: 6144차원)를 어댑터 층에 맞게 저차원(예: 512차원)으로 축소하는 선형 층을 둔다.
- **양방향 어댑터 (Bidirectional Adapter)**: LLM의 단방향성(Left-to-right)을 보완하기 위해, 미래의 토큰 정보까지 참조할 수 있는 양방향 트랜스포머 인코더(2개 층)를 추가한다. 이 층만이 학습 과정에서 업데이트된다.
- **예측 및 손실 함수**: 각 라인의 표상을 0과 1 사이의 값(결함 확률)으로 변환하는 시그모이드 활성화 함수를 거친다. 학습에는 이진 크로스 엔트로피 손실(Binary Cross-Entropy Loss)을 사용한다. 수식은 다음과 같다:
  $$\mathcal{L}_{CE} = - \sum [T \ln B + (1-T) \ln (1-B)]$$
  여기서 $T$는 실제 라벨(0 또는 1), $B$는 예측된 확률이다.
![Table 2](img/Pasted%20image%2020251124141952.png)
![Table 3](img/Pasted%20image%2020251124142033.png)
![Figure 6](img/Pasted%20image%2020251124141909.png)
### 실험 결과
- **주요 데이터셋**:
    - **Defects4J (Java)**: 395개의 실제 버그 및 수정 내역.
    - **BugsInPy (Python)**: 493개의 버그.
    - **Devign (C)**: 보안 취약점 데이터셋.
- **실험 설정**: 10-fold 교차 검증을 수행하였으며, CodeGen 모델 크기별(350M, 6B, 16B) 성능을 비교했다.
- **비교 결과**:
    - **Defects4J (Table 2)**: LLMAO(16B)는 Top-5 기준 183개의 버그를 탐지하여 Ochiai(99개), DeepFL(135개), TRANSFER-FL(160개)를 모두 능가했다. 특히 SBFL 대비 84.8%, SOTA MLFL 대비 14.4%의 성능 향상을 보였다.
    - **일반화 성능**: 학습에 사용되지 않은 새로운 프로젝트(Defects4J V2.0)에 대해서도 재학습 없이 우수한 성능을 유지했다.
    - **보안 취약점 (Table 3)**: 테스트 케이스가 없는 Devign 데이터셋에서도 Top-1 28.1%, Top-5 60.3%의 탐지율을 기록하여, 기능적 버그뿐만 아니라 보안 취약점 탐지에도 효과적임을 입증했다.
- **Ablation Study**: 양방향 어댑터를 제거하고 LLM 출력만 사용할 경우 성능이 급격히 하락(Top-5 21.5%)하여, 어댑터의 중요성을 확인했다. 또한 LLM의 크기가 클수록 성능이 향상되는 스케일링 법칙이 적용됨을 확인했다(Figure 6 ROC 곡선 참조).

### 결론
본 연구는 테스트 케이스나 복잡한 프로그램 분석 없이, 사전 학습된 LLM과 경량화된 양방향 어댑터만으로 최고 수준(SOTA)의 결함 위치 탐지 성능을 달성할 수 있음을 보였다. LLMAO는 언어 모델이 코드의 "부자연스러움(Unnaturalness)"을 통해 버그를 인지할 수 있다는 가설을 증명했으며, 특히 테스트 코드를 작성하기 어려운 보안 취약점 탐지나 초기 개발 단계에서의 활용 가능성을 시사한다. 향후 더 큰 모델과 데이터셋을 활용할 경우 성능이 더욱 향상될 잠재력이 있다.