---
title: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces"
date: "2023-12-01"
description: "선택적 상태 공간(Selective State Space)을 사용하여 선형 시간 복잡도로 시퀀스를 모델링하는 Mamba 아키텍처를 제안한 논문"
keywords:
  [
    "Mamba",
    "Selective State Spaces",
    "Linear Time Complexity",
    "Sequence Modeling",
    "State Space Models",
    "Efficient Attention",
    "Long Sequence Processing",
    "Deep Learning",
    "Machine Learning",
  ]
tags:
  [
    "Mamba",
    "Selective State Spaces",
    "Linear Time Complexity",
    "Sequence Modeling",
    "State Space Models",
    "Efficient Attention",
    "Long Sequence Processing",
    "Deep Learning",
    "Machine Learning",
  ]
authors: ["albert_gu", "tri_dao"]
---

# Mamba: Linear-Time Sequence Modeling with Selective State Spaces

## 논문 정보

- **제목 (Title)**: Mamba: Linear-Time Sequence Modeling with Selective State Spaces
- **저자 (Authors) 및 소속 (Affiliations)**:
  - Albert Gu (Machine Learning Department, Carnegie Mellon University)
  - Tri Dao (Department of Computer Science, Princeton University)
- **학회 또는 저널명 (Conference or Journal Name)**: arXiv preprint (arXiv:2312.00752v2 \[cs.LG\])
- **제출일 또는 발행일 (Submission or Publication Date)**: 2024년 5월 31일 (v2)
<!-- truncate -->

- **초록 (Abstract)**:
  기반 모델은 현재 딥 러닝의 흥미로운 응용 프로그램 대부분을 구동하며, 거의 보편적으로 트랜스포머 아키텍처와 핵심 어텐션 모듈을 기반으로 한다. 선형 어텐션, 게이트 컨볼루션 및 순환 모델, 구조화된 상태 공간 모델(SSM)과 같은 많은 준이차 시간 아키텍처가 긴 시퀀스에 대한 트랜스포머의 계산 비효율성을 해결하기 위해 개발되었지만, 언어와 같은 중요한 양식에서는 어텐션만큼 좋은 성능을 보이지 못했다. 본 연구에서는 이러한 모델의 주요 약점이 내용 기반 추론을 수행할 수 없다는 점을 확인하고 몇 가지 개선 사항을 제시한다. 첫째, SSM 매개변수를 입력의 함수로 만들어 이산적인 양식에서의 약점을 해결하고, 모델이 현재 토큰에 따라 시퀀스 길이 차원을 따라 정보를 선택적으로 전파하거나 잊도록 허용한다. 둘째, 이러한 변경으로 인해 효율적인 컨볼루션을 사용할 수 없게 되지만, 순환 모드에서 하드웨어 인식 병렬 알고리즘을 설계한다. 이러한 선택적 SSM을 어텐션이나 MLP 블록조차 없는 단순화된 엔드투엔드 신경망 아키텍처(Mamba)에 통합한다. Mamba는 빠른 추론(트랜스포머보다 5배 높은 처리량)과 시퀀스 길이에 대한 선형 확장을 즐기며, 실제 데이터에서 최대 백만 길이 시퀀스까지 성능이 향상된다. 일반적인 시퀀스 모델 백본으로서 Mamba는 언어, 오디오, 유전체학과 같은 여러 양식에서 최첨단 성능을 달성한다. 언어 모델링에서 Mamba-3B 모델은 동일한 크기의 트랜스포머를 능가하고 사전 훈련 및 다운스트림 평가 모두에서 두 배 크기의 트랜스포머와 일치한다.
- **주요 연구 내용 (Main Research Content/Methodology)**:
  - 기존 상태 공간 모델(SSM)의 한계점인 내용 기반 선택 능력 부재를 해결하기 위해 **선택적 SSM (Selective SSMs)**을 제안. 이는 SSM의 파라미터($\Delta, B, C$)를 입력에 따라 동적으로 변화시켜, 관련 정보는 선택적으로 전파하고 불필요한 정보는 필터링하도록 설계.
  - 선택 메커니즘으로 인해 기존의 효율적인 컨볼루션 연산 사용이 불가해진 문제를 해결하기 위해, GPU 메모리 계층 구조(SRAM, HBM)를 고려한 **하드웨어 인식 병렬 알고리즘**을 개발. 이는 순환 모드(scan)로 계산되지만, 확장된 상태를 GPU의 효율적인 메모리(SRAM)에서만 구체화하고 재계산(recomputation) 기법을 활용하여 메모리 IO를 최적화.
  - 선택적 SSM을 통합한 단순하고 동종적(homogenous)인 신경망 아키텍처 **Mamba**를 제안. 이는 기존 H3 아키텍처와 트랜스포머의 MLP 블록 설계를 결합하여 어텐션 없이 구성.
- **주요 결과 및 결론 (Key Findings and Conclusion)**:
  - Mamba는 시퀀스 길이에 대해 **선형적으로 확장**되며, 트랜스포머 대비 **5배 빠른 추론 속도**를 달성.
  - 언어, 오디오, 유전체학 등 다양한 시퀀스 데이터에서 **최첨단(SOTA) 성능**을 보임. 특히 최대 백만 길이의 시퀀스에서도 성능 향상을 확인.
  - 언어 모델링에서 Mamba-3B는 동일 크기의 트랜스포머보다 우수하며Wz, 두 배 큰 트랜스포머와 동등한 성능을 보임.
  - 합성 데이터(Selective Copying, Induction Heads)에서 우수한 성능 및 일반화 능력을 입증하여 선택 메커니즘의 효과를 확인함.
  - 선택적 SSM은 기존 LTI SSM의 단점을 극복하고, 내용 기반 추론을 가능하게 하여 다양한 데이터 유형, 특히 텍스트나 DNA와 같은 이산적 데이터에서 효과적임.
- **기여점 (Contributions)**:
  1.  입력 의존적인 파라미터를 통해 SSM이 시퀀스 정보를 선택적으로 처리할 수 있도록 하는 **선택 메커니즘(selection mechanism)** 도입.
  2.  선택 메커니즘을 효율적으로 계산하기 위한 **하드웨어 인식 병렬 알고리즘(scan)** 개발.
  3.  선택적 SSM을 핵심으로 하는 어텐션 및 MLP 블록이 없는 단순하고 효과적인 **Mamba 아키텍처** 설계.
- **DOI (Digital Object Identifier)**: arXiv:2312.00752v2 (논문은 arXiv 제출본으로, 공식 DOI는 아님)
- **기타 식별 가능한 정보**:
  - 연구 분야: 기계 학습 (Machine Learning), 심층 학습 (Deep Learning), 순차 데이터 모델링 (Sequence Modeling)
  - 코드 및 사전 학습된 체크포인트 공개: https://github.com/state-spaces/mamba

## 요약

### 서론 (Introduction)

최근 딥러닝 기반 모델(Foundation Models, FMs)은 트랜스포머 아키텍처와 그 핵심인 어텐션 메커니즘에 크게 의존하고 있다. 어텐션은 컨텍스트 내 정보를 밀도 높게 처리하여 복잡한 데이터를 모델링하는 데 효과적이지만, 유한한 컨텍스트 윈도우 외부를 모델링하지 못하고 시퀀스 길이에 대해 이차적으로 계산량이 증가하는 근본적인 단점이 있다. 이를 해결하기 위해 선형 어텐션, 게이트 컨볼루션, 순환 신경망(RNN), 구조화된 상태 공간 모델(SSMs) 등 다양한 준이차 시간 아키텍처가 제안되었으나, 특히 언어와 같은 중요한 데이터 유형에서 어텐션만큼의 성능을 보여주지는 못했다. 최근 SSMs는 유망한 대안으로 부상하여 긴 의존성 모델링에 강점을 보이며 특정 벤치마크에서 우수한 성능을 달성했지만, 텍스트와 같이 정보 밀도가 높은 이산적 데이터 모델링에는 상대적으로 약했다. 본 연구는 이러한 기존 모델들의 핵심 약점이 내용 기반 추론(content-based reasoning) 능력의 부재라고 진단하고, 이를 개선하기 위한 새로운 접근 방식을 제시한다.

### 선택적 상태 공간 모델 (Selective State Space Models)

본 연구는 기존 SSM의 한계를 극복하기 위해 **선택적 상태 공간 모델(Selective SSMs, S6 모델로도 지칭)**을 제안한다.

1.  **선택 메커니즘 (Selection Mechanism)**:
    기존 SSM은 파라미터가 시간에 따라 변하지 않는 선형 시불변(Linear Time-Invariant, LTI) 시스템으로, 입력 내용에 따라 정보를 선택적으로 처리하는 데 한계가 있었다. 이를 해결하기 위해 SSM의 주요 파라미터($\Delta, B, C$)를 현재 입력 토큰의 함수로 만들어($s_B(x)$, $s_C(x)$, $s_\Delta(x)$) 모델이 시퀀스를 따라 정보를 선택적으로 전파하거나 망각할 수 있도록 한다. 이는 합성 과제(Selective Copying, Induction Heads)에서 LTI 모델의 실패를 통해 동기 부여되었으며, 시퀀스 모델링에서 컨텍스트를 효율적으로 압축하는 핵심 원리로 '선택성'을 제안한다. 특히, $\Delta$ 파라미터는 RNN의 게이트 메커니즘과 유사한 역할을 하며 정보 흐름을 제어한다.

2.  **하드웨어 인식 병렬 알고리즘 (Hardware-aware Algorithm)**:
    입력 의존적 파라미터는 기존 SSM의 효율적인 컨볼루션 연산 사용을 불가능하게 만든다. 이 문제를 해결하기 위해 순환적 계산(scan) 방식을 사용하되, GPU 메모리 계층(SRAM, HBM)을 효율적으로 활용하는 하드웨어 인식 알고리즘을 설계했다. 주요 기법은 다음과 같다:

    - **커널 퓨전 (Kernel Fusion)**: SSM 파라미터 로딩, 이산화, 순환 계산, 최종 출력 계산 단계를 하나의 커널로 통합하여 HBM과 SRAM 간의 데이터 전송을 최소화한다.
    - **병렬 스캔 (Parallel Scan)**: 순차적인 순환 계산을 병렬화한다.
    - **재계산 (Recomputation)**: 역전파에 필요한 중간 상태들을 저장하는 대신 재계산하여 메모리 사용량을 최적화한다.
      결과적으로, 제안된 선택적 스캔 계층은 최적화된 트랜스포머 구현(예: FlashAttention)과 유사한 메모리 요구량을 가진다.

3.  **Mamba 아키텍처 (Simplified SSM Architecture)**:
    선택적 SSM을 기반으로 한 Mamba 아키텍처는 기존 H3 아키텍처와 트랜스포머의 MLP 블록의 설계를 결합하여 단순화된 단일 블록을 반복적으로 쌓는 동종적(homogenous) 구조를 가진다. 각 블록은 입력 차원을 확장하는 선형 투영, SiLU/Swish 활성화 함수, 선택적 SSM, 그리고 출력 투영으로 구성된다. 표준 정규화(LayerNorm)와 잔차 연결이 함께 사용된다.

### 실험 결과 (Empirical Evaluation)

Mamba는 다양한 데이터 유형과 과제에서 그 효과를 입증했다.

- **합성 과제 (Synthetic Tasks)**:

  - **선택적 복사 (Selective Copying)**: Mamba는 관련 토큰을 선택적으로 기억하고 무관한 토큰을 필터링하여 이 과제를 쉽게 해결하는 반면, LTI 모델들은 어려움을 겪는다.
  - **귀납적 헤드 (Induction Heads)**: Mamba는 이 과제를 완벽하게 해결하며, 훈련 시 보았던 시퀀스 길이보다 훨씬 긴(최대 100만 토큰 이상) 시퀀스에서도 일반화 성능을 유지한다.

- **언어 모델링 (Language Modeling)**:

  - **스케일링 법칙 (Scaling Laws)**: Pile 데이터셋에서 1.3B 파라미터까지의 모델 크기에 대해 Transformer++와 동등하거나 우수한 사전 훈련 손실(perplexity)을 보이며, 다른 어텐션-프리 모델들을 능가한다. 특히 시퀀스 길이가 길어질수록 Mamba의 강점이 두드러진다.
  - **다운스트림 평가 (Downstream Evaluations)**: 다양한 제로샷 평가에서 동일 크기의 공개 모델(Pythia, RWKV 등)보다 우수한 성능을 보였으며, 종종 두 배 큰 모델과 필적하는 결과를 달성했다.

- **DNA 염기서열 모델링 (DNA Modeling)**:

  - HG38 인간 유전체 데이터셋에서 사전 훈련 시, 모델 크기 및 컨텍스트 길이에 따른 스케일링에서 HyenaDNA와 Transformer++보다 우수한 성능을 보였다. 특히, Mamba는 컨텍스트 길이가 백만까지 증가함에 따라 성능이 지속적으로 향상된 반면, HyenaDNA는 그렇지 못했다.
  - 유인원 종 분류 과제에서 더 긴 컨텍스트를 효과적으로 활용하여 높은 정확도를 달성했다.

- **오디오 모델링 및 생성 (Audio Modeling and Generation)**:

  - YouTubeMix 데이터셋을 사용한 장문맥 자기회귀 사전훈련에서 SaShiMi (S4+MLP) 모델보다 우수한 성능을 보였으며, 컨텍스트 길이가 증가함에 따라 성능 향상이 지속되었다. (단, 이 실험에서는 복소수 파라미터 사용)
  - SC09 음성 생성 벤치마크에서 Mamba-UNet은 훨씬 큰 GAN 및 확산 기반 모델들을 포함한 기존 SOTA 모델들보다 우수한 자동 평가 지표를 달성했다.

- **효율성 벤치마크 (Speed and Memory Benchmarks)**:
  - Mamba의 핵심 연산인 선택적 스캔은 시퀀스 길이 2K 이상에서 FlashAttention-2보다 빠르며, 표준 PyTorch 스캔 구현보다 최대 20-40배 빠르다.
  - Mamba는 KV 캐시가 없어 더 큰 배치 크기를 사용할 수 있으므로, 유사한 크기의 트랜스포머보다 4-5배 높은 추론 처리량을 달성한다.
  - 훈련 시 메모리 사용량은 최적화된 트랜스포머와 비슷하다.

### 모델 분석 (Model Ablations)

- **아키텍처 및 SSM 계층**: Mamba 블록은 H3와 유사한 성능을 보이면서 더 단순하다. LTI 모델들(S4, Hyena) 간의 성능 차이는 미미한 반면, 선택적 SSM(S6)으로의 변경은 성능을 크게 향상시킨다.
- **선택적 파라미터**: $\Delta$가 가장 중요한 선택적 파라미터이며, $B, C$를 함께 선택적으로 만들면 시너지 효과가 발생한다.
- **SSM 상태 차원 $N$**: $B, C$가 선택적일 때, SSM 상태 차원 $N$을 증가시키면 파라미터/FLOPs 비용 증가 대비 큰 폭의 성능 향상을 얻을 수 있다.

### 논의 및 결론 (Discussion and Conclusion)

Mamba는 구조화된 상태 공간 모델에 선택 메커니즘을 도입하여, 시퀀스 길이에 선형적으로 확장하면서 내용 기반 추론을 가능하게 한다. 단순한 어텐션-프리 아키텍처에 통합되어 다양한 영역에서 기존의 강력한 트랜스포머 모델과 동등하거나 이를 능가하는 최첨단 결과를 달성했다. 선택 메커니즘은 이산적 데이터(텍스트, DNA)에 대한 기존 LTI SSM의 약점을 극복하지만, 반대로 LTI SSM이 강점을 보이는 연속적 데이터(오디오 파형 일부)에서는 성능이 저하될 수 있는 트레이드오프가 존재한다. 향후 연구로는 더 큰 모델 크기로의 확장, 다양한 다운스트림 작업에 대한 적용 가능성 탐구 등이 있다. Mamba는 특히 긴 컨텍스트를 요구하는 유전체학, 오디오, 비디오와 같은 새로운 양식의 기반 모델을 구축하는 데 강력한 후보가 될 수 있으며, 일반적인 시퀀스 모델 백본으로서의 잠재력을 보여준다.
