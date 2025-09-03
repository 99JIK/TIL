---
title: "Generative Adversarial Nets"
date: "2014-12-08"
description: "생성자와 판별자의 적대적 학습을 통해 새로운 데이터를 생성하는 프레임워크를 제안한 논문"
keywords:
  [
    "Generative Adversarial Nets",
    "GAN",
    "Generative Models",
    "Discriminative Models",
    "Unsupervised Learning",
    "Deep Learning",
    "Backpropagation",
    "Minimax Game",
    "Machine Learning",
    "Neural Networks",
    "Adversarial Training",
    "Computer Vision",
    "DYETEC PROJ 2",
  ]
tags:
  [
    "Generative Adversarial Nets",
    "GAN",
    "Generative Models",
    "Discriminative Models",
    "Unsupervised Learning",
    "Deep Learning",
    "Backpropagation",
    "Minimax Game",
    "Machine Learning",
    "Neural Networks",
    "Adversarial Training",
    "Computer Vision",
    "DYETEC PROJ 2",
  ]
authors:
  [
    "ian_j_goodfellow",
    "jean_pouget_abadie",
    "mehdi_mirza",
    "bing_xu",
    "david_warde_farley",
    "sherjil_ozair",
    "aaron_courville",
    "yoshua_bengio",
  ]
---

# 생성적 적대 신경망

## 논문 정보

- **제목 (Title)**: 생성적 적대 신경망 (Generative Adversarial Nets)
- **저자 (Authors) 및 소속 (Affiliations)**:
  - Ian J. Goodfellow (Université de Montréal)
  - Jean Pouget-Abadie (Université de Montréal)
  - Mehdi Mirza (Université de Montréal)
  - Bing Xu (Université de Montréal)
  - David Warde-Farley (Université de Montréal)
  - Sherjil Ozair (Université de Montréal)
  - Aaron Courville (Université de Montréal)
  - Yoshua Bengio (Université de Montréal)
- **학회 또는 저널명 (Conference or Journal Name)**: NIPS 2014 (Conference on Neural Information Processing Systems)
- **제출일 또는 발행일 (Submission or Publication Date)**: 2014-12-08

<!-- truncate -->

- **초록 (Abstract)**:
  본 논문은 적대적 과정을 통해 생성 모델을 추정하는 새로운 프레임워크를 제안한다. 이 프레임워크에서는 데이터 분포를 포착하는 생성 모델(G)과 샘플이 G가 아닌 실제 학습 데이터로부터 왔을 확률을 추정하는 판별 모델(D)이라는 두 가지 모델을 동시에 학습시킨다. G의 학습 절차는 D가 실수할 확률을 최대화하는 것이다. 이 프레임워크는 2인 미니맥스 게임(minimax two-player game)에 해당하며, 임의의 함수 G와 D 공간에서는 G가 학습 데이터 분포를 복원하고 D가 모든 곳에서 1/2이 되는 유일한 해가 존재한다. G와 D가 다층 퍼셉트론으로 정의될 경우, 전체 시스템은 역전파(backpropagation)를 통해 학습될 수 있다. 학습이나 샘플 생성 과정에서 마르코프 연쇄(Markov chains)나 전개된 근사 추론 네트워크가 전혀 필요하지 않다. 실험을 통해 생성된 샘플의 질적, 양적 평가를 통해 이 프레임워크의 잠재력을 입증한다.
- **주요 연구 내용 (Main Research Content/Methodology)**:
  - 적대적 과정을 통한 새로운 생성 모델 학습 프레임워크를 제안했다.
  - 데이터 분포를 학습하는 생성 모델(G)과 실제 데이터와 생성된 데이터를 구별하는 판별 모델(D)을 동시에 학습시킨다.
  - 생성자는 판별자를 속이는 것을 목표로 하고, 판별자는 실제와 가짜를 더 잘 구별하는 것을 목표로 하는 2인 미니맥스 게임으로 학습 과정을 공식화했다.
  - G와 D를 모두 다층 퍼셉트론으로 구성하여, 마르코프 연쇄나 복잡한 추론 과정 없이 오직 역전파만으로 전체 시스템을 학습할 수 있도록 설계했다.
  - G의 학습 초기 그래디언트 소실 문제를 해결하기 위해, $log(1-D(G(z)))$를 최소화하는 대신 $log(D(G(z)))$를 최대화하는 목적 함수를 대안으로 제시했다.
- **주요 결과 및 결론 (Key Findings and Conclusion)**:
  - 이론적으로 G와 D가 충분한 용량을 가지면, 학습 과정이 유일한 해($p_g = p_{data}$)에 도달함을 증명했다. 이 지점에서 D는 더 이상 실제 데이터와 생성된 데이터를 구별하지 못하고 항상 1/2을 출력한다.
  - 제안된 프레임워크는 기존 생성 모델들이 필요로 했던 마르코프 연쇄나 근사 추론 과정이 불필요하여 계산적으로 효율적이다.
  - MNIST, TFD, CIFAR-10 데이터셋에 대한 실험을 통해, 모델이 시각적으로 설득력 있는 샘플들을 생성함을 보였다.
  - 생성된 샘플의 품질은 기존의 우수한 생성 모델들과 비교하여 경쟁력이 있음을 확인했다.
  - GAN은 매우 날카로운(sharp) 분포나 퇴화된(degenerate) 분포도 표현할 수 있는 장점이 있다.
- **기여점 (Contributions)**:
  - 생성 모델 학습을 위한 '생성적 적대 신경망(GAN)'이라는 혁신적인 프레임워크를 최초로 제안했다.
  - 역전파 알고리즘만을 사용하여 전체 모델을 end-to-end으로 학습할 수 있게 하여, 생성 모델의 학습 과정을 크게 단순화했다.
  - 생성 모델의 학습 목표를 데이터 분포와 모델 분포 간의 젠슨-섀넌 발산(Jensen-Shannon divergence)을 최소화하는 것으로 이론적으로 규명했다.
- **DOI (Digital Object Identifier)**: 10.1145/3422622
- **기타 식별 가능한 정보**:
  - **연구 분야**: 비지도 학습 (Unsupervised Learning), 생성 모델 (Generative Models), 딥러닝 (Deep Learning)
  - **연구 대상**: 데이터로부터 샘플을 생성할 수 있는 새로운 방식의 심층 생성 모델 개발
  - **데이터셋**: MNIST, Toronto Face Database (TFD), CIFAR-10

## 요약

### 서론 (Introduction)

기존의 심층 생성 모델(deep generative models)은 최대 가능도 추정(maximum likelihood estimation) 등에서 발생하는 다루기 힘든 확률적 계산을 근사해야 하는 어려움이 있었다. 이로 인해 판별 모델(discriminative models)에 비해 성공 사례가 적었다. 본 연구는 이러한 어려움을 피하는 새로운 생성 모델 추정 절차인 '생성적 적대 신경망(Generative Adversarial Nets, GAN)'을 제안한다.

GAN의 핵심 아이디어는 두 개의 모델, 즉 생성 모델(G)과 판별 모델(D)을 서로 경쟁시키는 것이다. 이 관계는 위조지폐를 만들려는 '위조범 팀(G)'과 이를 탐지하려는 '경찰(D)'의 관계로 비유할 수 있다. 위조범은 경찰을 속일 만큼 정교한 위조지폐를 만들려고 노력하고, 경찰은 진짜와 가짜를 완벽하게 구별하려고 노력한다. 이러한 경쟁 과정은 두 모델 모두의 능력을 향상시키며, 결국에는 위조품이 진품과 구별할 수 없을 정도에 이르게 된다.

### 본론 (Main Content)

#### 적대적 신경망 프레임워크 (Adversarial Nets Framework)

GAN의 프레임워크는 두 개의 다층 퍼셉트론으로 구성된다.

1. **생성 모델 (Generator, G)**: 사전 분포 $p_z(z)$로부터 샘플링된 노이즈 벡터 $z$를 입력받아 데이터 공간의 샘플 $G(z)$를 출력하는 미분 가능한 함수이다. G의 목표는 실제 데이터와 유사한 샘플을 생성하여 D를 속이는 것이다.

2. **판별 모델 (Discriminator, D)**: 데이터 샘플 $x$를 입력받아 해당 샘플이 G가 생성한 가짜 데이터가 아닌, 실제 데이터 분포($p_{data}$)에서 왔을 확률을 출력한다.

이 두 모델은 다음의 가치 함수 $V(G, D)$에 대해 2인 미니맥스 게임을 수행한다.

$$ \min_G \max_D V(D, G) = \mathbb{E}_{x \sim p_{data}(x)}[\log D(x)] + \mathbb{E}_{z \sim p_z(z)}[\log(1 - D(G(z)))] $$

판별자 D는 실제 데이터와 생성된 데이터를 정확히 구별하도록 이 식을 최대화하고, 생성자 G는 D가 구별하지 못하도록 이 식을 최소화한다.

#### 이론적 결과 (Theoretical Results)

이론적으로 G와 D가 충분한 용량(capacity)을 가졌을 때, 이 미니맥스 게임에는 유일한 해가 존재한다. 그 해는 생성된 데이터의 분포($p_g$)가 실제 데이터 분포($p_{data}$)와 같아지는 지점, 즉 $p_g = p_{data}$이다. 이 최적점에서는 판별자 D가 어떤 샘플에 대해서도 실제인지 가짜인지 구별할 수 없게 되어 항상 0.5의 확률을 출력하게 된다 ($D(x) = 1/2$). 이는 G와 D의 게임이 두 분포 간의 젠슨-섀넌 발산(Jensen-Shannon divergence)을 최소화하는 과정과 동일함을 의미한다.

#### 학습 알고리즘 및 실험 (Training Algorithm and Experiments)

실제 학습은 D와 G를 번갈아 가며 최적화하는 방식으로 진행된다. 먼저 k 스텝 동안 D를 업데이트하여 현재 G가 생성하는 샘플과 실제 데이터를 잘 구별하도록 학습시킨다. 그 후, 1 스텝 동안 G를 업데이트하여 D를 더 잘 속이는 샘플을 생성하도록 학습시킨다. 이 과정 전체는 역전파를 통해 이루어지므로, 기존의 생성 모델들처럼 마르코프 연쇄와 같은 복잡한 기법이 필요 없다.

연구팀은 MNIST, Toronto Face Database (TFD), CIFAR-10 데이터셋을 사용하여 모델의 성능을 평가했다. 실험 결과, GAN이 생성한 샘플들은 시각적으로 매우 사실적이며, 기존의 다른 생성 모델들과 비교해도 경쟁력 있는 품질을 보여주었다.

### 결론 (Conclusion)

본 논문은 생성 모델 학습을 위한 새로운 패러다임인 GAN을 제시했다. GAN은 마르코프 연쇄가 필요 없고, 오직 역전파만으로 학습이 가능하며, 다양한 함수를 모델에 통합할 수 있는 계산적 장점을 가진다. 또한, 매우 날카로운(sharp) 데이터 분포도 효과적으로 모델링할 수 있다.

물론 단점도 존재한다. G와 D의 학습 균형을 잘 맞춰야 하는 불안정성("Helvetica 시나리오")이 대표적이다. 하지만 이 프레임워크는 조건부 생성 모델(Conditional GAN), 준지도 학습(Semi-supervised learning) 등으로 쉽게 확장될 수 있어 향후 연구의 가능성이 매우 크다. 이 연구는 생성 모델 분야에 큰 영향을 미쳤으며, 후속 연구들의 기반을 마련했다.

---

**📝 안내**: 이 문서는 DYETEC Project 2를 기획하기 위해 읽은 논문입니다.