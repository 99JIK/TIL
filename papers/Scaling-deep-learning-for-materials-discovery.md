---
title: "Scaling deep learning for materials discovery"
date: "2023-11-29"
description: "딥러닝 모델의 규모를 확장하여 재료 발견의 효율성을 획기적으로 높이고, 220만 개의 새로운 안정적인 결정 구조를 발견한 연구"
keywords:
  [
    Materials Discovery,
    Deep Learning,
    Graph Neural Networks,
    Active Learning,
    Computational Materials Science,
    Density Functional Theory,
    Interatomic Potentials,
    Machine Learning,
    GNOME,
  ]
tags:
  [
    Materials Discovery,
    Deep Learning,
    Graph Neural Networks,
    Active Learning,
    Computational Materials Science,
    Density Functional Theory,
    Interatomic Potentials,
    Machine Learning,
    GNOME,
  ]
---

# Scaling deep learning for materials discovery

## 논문 정보

- **제목 (Title):** Scaling deep learning for materials discovery

- **저자 (Authors) 및 소속 (Affiliations):**

  - Amil Merchant (Google DeepMind)
  - Simon Batzner (Google DeepMind)
  - Samuel S. Schoenholz (Google DeepMind)
  - Muratahan Aykol (Google Research)
  - Gowoon Cheon (Google Research)
  - Ekin Dogus Cubuk (Google DeepMind)

- **학회 또는 저널명 (Conference or Journal Name):** Nature, Volume 624

- **제출일 또는 발행일 (Submission or Publication Date):** 2023년 11월 29일 (온라인 게재)

- **키워드 (Keywords):** materials discovery, deep learning, graph neural networks, active learning, computational materials science, density functional theory, interatomic potentials, GNOME

- **초록 (Abstract):** 새로운 기능성 재료의 발견은 청정에너지부터 정보 처리까지 다양한 기술 분야에서 근본적인 돌파구를 마련한다. 그러나 무기 결정 구조의 발견은 비용이 많이 들고 시간이 오래 걸리는 시행착오적 접근법에 의해 병목 현상을 겪어왔다. 본 연구는 대규모로 훈련된 그래프 신경망(GNN)이 전례 없는 수준의 일반화 능력을 보여주며 재료 발견의 효율성을 10배 향상시킬 수 있음을 입증한다. 이 효율성 향상을 통해 기존에 알려진 48,000개의 안정적인 결정 구조를 기반으로, 현재의 볼록 껍질(convex hull) 아래에 있는 220만 개의 새로운 구조를 발견했다. 이는 인류에게 알려진 안정적인 재료의 수를 10배나 확장한 것이다. 이 중 최종 볼록 껍질에 위치한 안정적인 발견들은 층상 재료 및 고체 전해질 후보 물질 스크리닝 시연과 같이 기술적 응용을 위해 공개될 예정이다. 발견된 안정적인 구조 중 736개는 이미 독립적으로 실험을 통해 구현된 바 있다. 또한, 수억 건의 제일원리 계산(first-principles calculations)을 통해 얻어진 대규모 데이터셋은 응축상 분자 동역학 시뮬레이션에 사용될 수 있는 매우 정확하고 견고한 학습된 원자간 전위(interatomic potentials) 모델과 이온 전도도의 제로샷(zero-shot) 예측 능력을 포함한 다운스트림 애플리케이션을 위한 모델링 역량을 열어주었다.

- **주요 연구 내용 (Main Research Content/Methodology):**

  - 그래프 신경망(GNN)을 활용하여 재료의 안정성을 예측하고 후보 물질을 필터링하는 대규모 활성 학습(active learning) 프레임워크 **'GNoME(Graph Networks for Materials Exploration)'**를 구축했다.
  - GNoME 프레임워크는 두 가지 파이프라인으로 구성된다:
    1. **구조 파이프라인(Structural pipeline):** 기존에 알려진 결정 구조를 기반으로 대칭성을 고려한 부분 치환(Symmetry-Aware Partial Substitutions, SAPS) 등 새로운 방법을 통해 다양한 후보 구조를 생성한다.
    2. **조성 파이프라인(Compositional pipeline):** 구조 정보 없이 화학 조성만을 입력으로 받아 안정성을 예측하고, 유망한 조성에 대해 초기 구조를 무작위로 생성(Ab initio random structure searching, AIRSS)한다.
  - GNN 모델이 필터링한 유망한 후보 물질들의 에너지를 밀도 범함수 이론(DFT) 계산을 통해 검증하고, 이 결과를 다시 GNN 모델 훈련 데이터로 활용하는 데이터 플라이휠(data flywheel)을 통해 모델의 예측 정확도를 반복적으로 향상시켰다.
  - 대규모 제일원리 계산 데이터셋을 활용하여, 특정 재료에 대한 데이터 없이도 에너지와 힘을 정확하게 예측할 수 있는 범용 **기계 학습 원자간 전위(MLIP)** 모델을 사전 훈련(pre-training)시켰다.

- **주요 결과 및 결론 (Key Findings and Conclusion):**

  - GNoME 프레임워크를 통해 기존 연구 대비 **안정적인 것으로 예측되는 220만 개의 새로운 결정 구조**를 발견했다. 이 중 381,000개는 새롭게 업데이트된 볼록 껍질(convex hull) 상에 위치하는 신물질이다.
  - 이는 인류에게 알려진 안정적인 결정의 수를 **약 10배 확장**한 성과이다.
  - GNN 모델의 안정성 예측 정확도(hit rate)는 활성 학습을 통해 구조 기반 예측에서 **80% 이상**, 조성 기반 예측에서 **33%**까지 향상되어 기존 연구(1%) 대비 획기적으로 개선되었다.
  - 훈련 데이터에 포함되지 않은 5개 이상의 원소로 구성된 화합물에 대해서도 정확한 예측을 하는 등, 모델이 데이터 규모가 커짐에 따라 **분포 외 일반화(out-of-distribution generalization)** 능력을 보였다.
  - 발견된 구조 중 **736개는 GNoME 프로젝트와 독립적으로 진행된 실험 연구를 통해 이미 합성**되었음이 확인되어, 예측의 신뢰성을 입증했다.
  - GNoME 데이터셋으로 사전 훈련된 원자간 전위 모델은 특정 물질에 대한 추가 훈련 없이도(zero-shot) 분자 동역학 시뮬레이션에서 전례 없는 정확도를 보였으며, 이를 통해 새로운 고체 전해질(superionic conductor)을 스크리닝하는 데 성공했다.

- **기여점 (Contributions):**

  - 딥러닝, 특히 GNN과 활성 학습을 대규모로 적용하여 재료 발견 프로세스의 효율성을 10배 이상 가속하는 GNoME 프레임워크를 개발했다.
  - 인류가 알고 있는 안정적인 무기 결정의 수를 10배 가까이 확장하여 재료 과학 분야에 방대한 데이터베이스를 제공했다.
  - 대규모 데이터 학습을 통해 딥러닝 모델이 훈련 데이터 분포를 넘어 새로운 화학 공간을 탐색할 수 있는 '창발적 일반화(emergent generalization)' 능력을 가질 수 있음을 실험적으로 증명했다.
  - 재료 발견 과정에서 생성된 방대한 제일원리 계산 데이터셋을 활용하여, 특정 시스템에 국한되지 않고 범용적으로 사용 가능한 고정밀 원자간 전위 모델 개발의 새로운 가능성을 제시했다.

- **DOI (Digital Object Identifier):** [https://doi.org/10.1038/s41586-023-06735-9](https://doi.org/10.1038/s41586-023-06735-9)

- **기타 식별 가능한 정보 (예: 연구 분야, 인용 정보 간략 언급 등):**
  - 연구 분야: 계산 재료 과학 (Computational Materials Science), 딥러닝 (Deep Learning)
  - 본 논문은 딥러닝, 특히 그래프 신경망(GNN)을 대규모로 활용하여 무기 결정(inorganic crystal) 발견 속도를 획기적으로 가속한 연구로, 'GNoME(Graph Networks for Materials Exploration)'라는 프레임워크를 제안했다.

<!-- truncate -->

## 요약

### 서론 (Introduction)

청정에너지, 반도체, 배터리 등 첨단 기술의 발전은 새로운 기능성 소재의 발견에 크게 의존한다. 그러나 전통적인 재료 발견 방식은 막대한 비용과 시간이 소요되는 실험적 시행착오에 의존해왔다. 이를 극복하기 위해 Materials Project(MP)와 같은 데이터베이스는 밀도 범함수 이론(DFT) 기반의 계산 과학을 활용해 왔지만, 이 역시도 탐색할 수 있는 화학 공간의 방대함 앞에서는 한계가 있었다. 본 연구는 언어, 비전 분야에서 데이터와 컴퓨팅 규모가 커짐에 따라 창발적인 예측 능력을 보여준 딥러닝의 성공에 착안하여, 재료 과학 분야에서도 딥러닝 모델의 규모를 확장함으로써 재료 발견의 패러다임을 전환하고자 한다.

### GNoME: 재료 탐색을 위한 그래프 신경망 (GNOME: Graph Networks for Materials Exploration)

본 연구의 핵심은 **GNoME**라는 대규모 활성 학습(active learning) 프레임워크이다. 이 프레임워크는 잠재적인 신물질 후보군을 효율적으로 생성하고, 그래프 신경망(GNN)을 이용해 안정성을 예측하여 유망한 후보만을 선별한 뒤, DFT 계산으로 검증하는 과정을 반복한다. 검증된 결과는 다시 GNN 모델의 훈련 데이터로 사용되어, 사이클이 반복될수록 모델의 정확도는 점점 높아진다.

후보 물질 생성은 두 가지 방식으로 다각화되었다:

1. **구조 파이프라인:** 기존에 알려진 결정 구조에서 이온을 치환하는 방식을 사용하되, 발견 가능성을 높이기 위해 치환 확률을 조정하고, '대칭성을 고려한 부분 치환(SAPS)'이라는 새로운 기법을 도입하여 탐색의 다양성을 극대화했다.

2. **조성 파이프라인:** 구조 정보 없이 화학 조성만으로 안정성을 예측하고, 유망한 조성에 대해 'ab initio random structure searching(AIRSS)' 기법을 통해 100개의 무작위 구조를 생성하여 DFT로 검증한다.

이러한 활성 학습 루프를 통해 GNoME 모델의 안정성 예측 정확도(hit rate)는 초기 1~6% 수준에서 최종적으로 구조 기반 예측은 **80% 이상**, 조성 기반 예측은 **33%**까지 비약적으로 향상되었다.

### 발견 결과 및 검증 (Discovery Results and Validation)

GNoME 프로젝트를 통해, 기존의 알려진 안정적인 물질 데이터베이스(MP 등) 대비 **220만 개의 새로운 안정적인 결정 구조**를 발견했다. 이 중 381,000개는 기존 물질들과의 에너지 경쟁에서 우위를 점하며 새롭게 업데이트된 볼록 껍질(convex hull)을 형성하는 신물질이다. 이는 인류가 알고 있던 안정적인 재료의 수를 약 10배 확장한 것이다.

특히 주목할 점은, 4개 이상의 원소로 구성된 복잡한 다원소계 화합물 공간에서 대규모 발견이 이루어졌다는 것이다. 이는 인간의 화학적 직관만으로는 탐색하기 어려운 영역을 딥러닝이 효과적으로 탐색할 수 있음을 보여준다.

발견된 물질들의 신뢰성은 여러 방식으로 검증되었다:

- **실험적 검증:** GNoME이 발견한 구조 중 **736개**는 프로젝트와 무관하게 다른 연구 그룹들에 의해 독립적으로 실험 합성된 물질과 일치했다.

- **고정밀 계산 검증:** 더 정확하지만 계산 비용이 높은 r²SCAN 범함수를 이용해 검증한 결과, 2원소 및 3원소 화합물의 **84%**가 여전히 안정성을 유지하는 것으로 나타났다.

### 다운스트림 응용: 범용 원자간 전위 모델 (Downstream Application: Universal Interatomic Potentials)

GNoME 프로젝트는 신물질 발견뿐만 아니라, 그 과정에서 생성된 방대한 양의 DFT 계산 데이터(이온이 완화되는 과정의 에너지 및 힘)라는 귀중한 자산을 남겼다. 연구진은 이 전례 없는 규모와 다양성을 갖춘 데이터셋을 활용하여, 특정 재료 시스템에 국한되지 않는 **범용 기계 학습 원자간 전위(MLIP)** 모델을 사전 훈련시켰다.

이 MLIP는 훈련 데이터셋의 크기가 커질수록 정확도가 거듭제곱 법칙(power law)에 따라 향상되는 스케일링 법칙을 보였다. 놀랍게도, 이 모델은 분자 동역학(MD) 시뮬레이션 데이터를 전혀 학습하지 않았음에도 불구하고, 한 번도 본 적 없는 조성의 물질에 대한 MD 시뮬레이션(이온 전도도 예측 등)을 **제로샷(zero-shot)**으로 매우 정확하게 수행했다. 이는 기존의 범용 포텐셜 모델들을 능가하는 성능이며, 심지어 해당 물질의 데이터로 직접 훈련시킨 최신 모델과도 비견될 만한 수준이다.

### 결론 (Conclusion)

본 연구는 대규모 딥러닝을 통해 재료 발견의 효율성을 획기적으로 높일 수 있음을 증명했다. GNoME 프레임워크는 인류가 아는 안정적인 결정의 수를 10배 확장했으며, 이 과정에서 생성된 방대한 데이터는 정확하고 견고하며 범용적인 원자간 전위 모델의 개발을 가능하게 했다. 특히, GNoME 모델이 훈련 데이터의 분포를 넘어 새로운 화학 공간을 탐색하고, 새로운 다운스트림 과제를 해결하는 '창발적 일반화' 능력은 딥러닝이 과학적 발견의 본질적인 '분포 외(out-of-distribution)' 문제를 해결할 수 있는 잠재력을 보여준다. 본 연구의 결과물은 향후 다양한 응용 분야에서 신물질 탐색을 근본적으로 가속하는 강력한 도구로 활용될 것이다.

본 문서는 KFS 논문을 준비하며 라스가 추천해 준 논문의 내용을 숙지하기 위해 정리했다.
