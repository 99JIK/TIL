---
title: "SMALL LANGUAGE MODELS: SURVEY, MEASUREMENTS, AND INSIGHTS"
date: "2025-02-26"
description: "70개의 소형 언어 모델(SLM)에 대한 포괄적인 서베이로, 아키텍처, 데이터셋, 학습 알고리즘을 분석하고 온디바이스 성능을 벤치마킹하여 연구 방향을 제시한다."
keywords:
  [
    "Small Language Models",
    "Edge Artificial Intelligence",
    "On-device Inference",
    "Language Model Survey",
  ]
tags:
  [
    "Small Language Models",
    "Edge Artificial Intelligence",
    "On-device Inference",
    "Language Model Survey",
  ]
authors: ["Zhenyan Lu", "Xiang Li", "Dongqi Cai", "Rongjie Yi", "Fangming Liu", "Xiwen Zhang", "Nicholas D. Lane", "Mengwei Xu"]
---

## 논문 정보

- **제목**: SMALL LANGUAGE MODELS: SURVEY, MEASUREMENTS, AND INSIGHTS
- **저자**: Zhenyan Lu (Beijing University of Posts and Telecommunications), Xiang Li (Peng Cheng Laboratory), Dongqi Cai (Helixon Research), Rongjie Yi (Beijing University of Posts and Telecommunications), Fangming Liu (Beijing University of Posts and Telecommunications), Xiwen Zhang (Beijing University of Posts and Telecommunications), Nicholas D. Lane (University of Cambridge), Mengwei Xu (Beijing University of Posts and Telecommunications)
- **학회/저널**: arXiv
- **발행일**: 2025-02-26 (v3)
- **DOI**: arXiv:2409.15790
- **주요 연구 내용**: 1억~50억 파라미터 사이의 디코더-전용 트랜스포머 기반 소형 언어 모델(SLM) 70개를 대상으로 기술 혁신을 아키텍처, 학습 데이터셋, 학습 알고리즘 세 가지 축으로 분석함. 또한, 상식 추론, 수학, 인-컨텍스트 학습, 긴 컨텍스트 처리 등 다양한 영역에서 모델의 능력을 평가하고, 온디바이스 환경에서의 추론 지연 시간과 메모리 사용량을 벤치마킹함.
- **주요 결과 및 결론**: SLM의 성능은 2022년에서 2024년 사이에 LLM보다 빠르게 발전했으며, 모델 성능에는 아키텍처보다 데이터 품질이 더 결정적인 영향을 미침. 최신 SLM은 Chinchilla 법칙이 제안하는 것보다 훨씬 많은 토큰으로 '과잉 학습'되는 경향이 있으며, 이는 제한된 자원의 디바이스에 더 강력한 모델을 배포하기 위함임. 모델 아키텍처는 특히 추론의 프리필(prefill) 단계에서 지연 시간에 큰 영향을 줌.
- **기여점**: 최근 발표된 SLM들을 철저히 검토하고 핵심 혁신을 요약하며, 모델의 능력과 온디바이스 비용을 포괄적으로 벤치마킹함. 심층 분석을 통해 향후 SLM 연구에 기여할 수 있는 통찰력을 제공하고, 모든 결과와 벤치마크 도구를 공개하여 관련 연구를 촉진함.
<!--truncate-->

## 요약

### 초록

소형 언어 모델(SLM)은 최신 스마트 기기에서 널리 사용됨에도 불구하고, 주로 데이터 센터와 클라우드 환경에 배포되는 대형 언어 모델(LLM)에 비해 학문적 관심이 적었다. 이 논문은 1억에서 50억 개의 파라미터를 가진 트랜스포머 기반 디코더-전용 언어 모델에 초점을 맞춰, 70개의 최첨단 오픈소스 SLM을 조사한다. 아키텍처, 학습 데이터셋, 학습 알고리즘의 세 가지 축에 걸쳐 기술 혁신을 분석하고, 상식 추론, 수학, 인-컨텍스트 학습 및 긴 컨텍스트 처리 능력을 평가한다. 또한, 온디바이스에서의 추론 지연 시간과 메모리 사용량을 벤치마킹하고, 이 데이터를 심층 분석하여 해당 분야의 연구 발전을 위한 귀중한 통찰을 제공한다.

### 서론

언어 모델의 발전은 두 가지 경로로 나뉘고 있다. 하나는 수십만 개의 GPU를 사용하는 데이터 센터에서 인공 일반 지능(AGI)을 추구하는 LLM의 경로이고, 다른 하나는 데스크톱, 스마트폰 등 개인용 기기에서의 자원 효율적인 배포를 목표로 하는 SLM의 경로이다. SLM은 기계 지능을 민주화하여 누구나 쉽게 접근하고 저렴하게 사용할 수 있도록 하는 것을 목표로 한다. 그러나 SLM은 상업적으로 널리 통합되고 있음에도 불구하고 학계에서는 상대적으로 적은 주목을 받았다. 이 연구는 SLM에 대한 최초의 포괄적인 서베이로, 그 능력, 런타임 비용, 그리고 최근의 혁신들을 심도 깊게 다룬다.

### 모델 아키텍처 / 방법론

- **핵심 구조/방법**: 본 서베이에서 다루는 SLM들은 모두 디코더-전용 트랜스포머 아키텍처를 기반으로 한다. 논문은 이러한 모델들의 구성 요소를 통계적으로 분석하여 시간 경과에 따른 아키텍처 트렌드를 파악했다. 논문의 Figure 2에서 제시된 분석에 따르면, 최신 SLM 아키텍처는 특정 경향성을 보인다.
- **주요 구성 요소**:
  - **어텐션(Attention)**: 초기 모델에서 널리 쓰이던 Multi-Head Attention (MHA)가 점차 Group-Query Attention (GQA)로 대체되고 있다. 이는 계산 복잡도를 줄이면서 성능을 유지하기 위함이다.
  - **피드포워드 네트워크(FFN)**: 표준 FFN보다 게이트(gate) 레이어가 추가된 Gated FFN의 사용이 지배적으로 변했다. FFN의 중간 차원 비율(intermediate ratio)은 일반적으로 2에서 8 사이로 다양하게 설정된다.
  - **활성화 함수(Activation Function)**: 초기 ReLU에서 GELU로, 그리고 2024년 모델에서는 SiLU(Sigmoid Linear Unit)가 대세가 되었다.
    - **ReLU**: $max(0, x)$
    - **GELU**: $\frac{x}{2}(1+erf(\frac{x}{\sqrt{2}}))$
    - **SiLU**: $x \cdot \sigma(x) = \frac{x}{1+e^{-x}}$
  - **계층 정규화(Layer Normalization)**: 기존의 LayerNorm 대신 연산이 더 효율적인 RMSNorm이 점차 표준으로 자리 잡고 있다.
    - **RMS Norm**: $\frac{x}{\sqrt{\frac{1}{d}\Sigma_{i=1}^{d}x_{i}^{2}+\epsilon}} \cdot \gamma$
  - **어휘 크기(Vocabulary Size)**: 모델의 어휘 크기는 점차 증가하는 추세이며, 최신 모델들은 보통 50k 이상의 크기를 가진다.
- **주요 아키텍처 혁신**:
  - **파라미터 공유**: 임베딩과 최종 LM 헤드 레이어의 가중치를 공유하거나, 여러 트랜스포머 블록 간에 어텐션/FFN 가중치를 공유하여 파라미터 수를 줄인다.
  - **계층별 파라미터 스케일링**: OpenELM에서 사용된 기법으로, 각 트랜스포머 레이어의 헤드 수나 FFN 차원을 다르게 설정하여 파라미터 예산을 효율적으로 사용한다.

### 실험 결과

- **주요 데이터셋 및 성능**:

  - **학습 데이터셋**: 초기에는 `The Pile`이 널리 사용되었으나, 최근에는 `RefinedWeb`, `RedPajama`와 같이 모델 기반 필터링을 통해 품질을 높인 데이터셋(`FineWeb-Edu`, `DCLM-baseline`)이 더 좋은 성능을 보이는 것으로 나타났다 (논문의 Table 2). 데이터의 양보다 품질이 SLM 성능에 더 중요하며, 코딩 데이터가 추론 능력 향상에 도움을 준다고 여겨져 함께 사용되는 경우가 많다.
  - **학습 토큰 수**: 논문의 Figure 4에 따르면, 최신 SLM들은 Chinchilla 법칙이 제안하는 최적 비율보다 훨씬 많은 데이터(1.5T 토큰 이상)로 '과잉 학습'되는 경향이 있다. 이는 제한된 온디바이스 환경에서 성능을 극대화하기 위한 전략으로 분석된다.
  - **전반적인 능력**: 논문의 Figure 5에서 제시된 벤치마크 결과, 2022년에서 2024년까지 SLM의 성능은 상식 추론, 문제 해결, 수학 등 모든 영역에서 LLaMA-7B 시리즈의 개선 속도를 앞질렀다. 특히 Microsoft의 Phi 시리즈는 비공개 데이터셋으로 학습하여 가장 뛰어난 성능을 보였다.
  - **인-컨텍스트 학습(In-context Learning)**: Figure 6에 따르면, 대부분의 SLM은 인-컨텍스트 학습(5-shot)을 통해 제로샷 대비 평균 2.1%의 성능 향상을 보였다. 모델 크기가 클수록 이러한 경향이 더 뚜렷하게 나타났다.
  - **긴 컨텍스트(Long Context)**: Figure 7의 'Needle-In-A-Haystack' 테스트 결과, 모델 파라미터 크기가 긴 컨텍스트 처리 능력에 결정적이었다. Qwen2.5-3B와 같은 대형 SLM은 긴 컨텍스트에서도 거의 완벽한 정확도를 유지한 반면, 0.5B 크기의 모델들은 성능이 급격히 저하되었다. 또한, SLM에서도 '중간 분실(Lost in the Middle)' 현상이 관찰되었다.

- **온디바이스 런타임 비용**:
  - **추론 지연 시간**: 논문의 Figure 8에 따르면, 모델 크기 외에 FFN의 너비, 어휘 크기, 파라미터 공유 여부 등 아키텍처가 추론 속도에 큰 영향을 미치며, 이러한 영향은 병렬 처리가 많은 프리필 단계에서 더 두드러진다.
  - **메모리 사용량**: 메모리 사용량은 모델 크기와 선형적으로 비례하지만, 어휘 크기가 큰 모델(예: Bloom 시리즈)은 더 많은 메모리를 차지한다. 또한, 컨텍스트 길이가 길어지면 KV 캐시가 메모리의 80% 이상을 차지하게 된다.
  - **양자화(Quantization)**: 양자화는 특히 메모리 대역폭에 민감한 디코드 단계에서 더 큰 속도 향상 효과를 보인다. 3비트나 5비트 같은 불규칙한 비트 너비보다 하드웨어에 최적화된 4비트 양자화가 더 효율적이다 (Figure 9).
  - **하드웨어 영향**: Figure 10을 통해 GPU가 CPU보다 훨씬 빠르며, 특히 병렬성이 높은 프리필 단계에서 그 격차가 더 크다는 것을 확인했다. 스마트폰은 발열 문제로 인해 긴 추론 작업 시 성능이 불안정해지는 경향이 있다.

### 결론

이 논문은 SLM에 대한 포괄적인 분석을 통해 SLM의 성능이 빠르게 발전하고 있으며, 특히 데이터 품질의 중요성이 부각되고 있음을 보여준다. SLM은 제한된 온디바이스 환경에 배포되기 때문에, 학습 시간의 비용을 투자하여 '과잉 학습'시키는 전략이 효과적임이 드러났다. 향후 연구 방향으로는 특정 하드웨어에 최적화된 SLM 아키텍처를 공동 설계하는 것, 고품질 합성 데이터셋을 구축하는 것, 그리고 개인화된 서비스를 위한 지속적인 온디바이스 학습 방법 개발 등이 중요할 것으로 예상된다.
