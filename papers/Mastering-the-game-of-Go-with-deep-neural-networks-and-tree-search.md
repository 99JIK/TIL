---
title: "Mastering the game of Go with deep neural networks and tree search"
date: "2016-01-28"
description: "딥마인드의 알파고가 심층 신경망과 몬테카를로 트리 탐색을 결합하여 프로 바둑 기사를 이긴 방법을 설명하는 논문"
keywords:
  [
    "Go",
    "Deep Neural Networks",
    "Tree Search",
    "Reinforcement Learning",
    "Supervised Learning",
    "Monte Carlo Tree Search",
    "Value Networks",
    "Policy Networks",
    "Machine Learning",
    "AlphaGo",
    "Game AI",
    "Computer Vision",
    "DYETEC PROJ 2",
  ]
tags:
  [
    "Go",
    "Deep Neural Networks",
    "Tree Search",
    "Reinforcement Learning",
    "Supervised Learning",
    "Monte Carlo Tree Search",
    "Value Networks",
    "Policy Networks",
    "Machine Learning",
    "AlphaGo",
    "Game AI",
    "Computer Vision",
    "DYETEC PROJ 2",
  ]
authors:
  [
    "david_silver",
    "aja_huang",
    "chris_j_maddison",
    "arthur_guez",
    "laurent_sifre",
    "george_van_den_driessche",
    "julian_schrittwieser",
    "ioannis_antonoglou",
    "veda_panneershelvam",
    "marc_lanctot",
    "sander_dieleman",
    "dominik_grewe",
    "john_nham",
    "nal_kalchbrenner",
    "ilya_sutskever",
    "timothy_lillicrap",
    "madeleine_leach",
    "koray_kavukcuoglu",
    "thore_graepel",
    "demis_hassabis",
  ]
---

# 심층 신경망과 트리 탐색을 이용한 바둑 마스터

## 논문 정보

- **제목 (Title)**: 심층 신경망과 트리 탐색을 이용한 바둑 마스터 (Mastering the game of Go with deep neural networks and tree search)
- **저자 (Authors) 및 소속 (Affiliations)**:
  - David Silver (Google DeepMind)
  - Aja Huang (Google DeepMind)
  - Chris J. Maddison (Google DeepMind)
  - Arthur Guez (Google DeepMind)
  - Laurent Sifre (Google DeepMind)
  - George van den Driessche (Google DeepMind)
  - Julian Schrittwieser (Google DeepMind)
  - Ioannis Antonoglou (Google DeepMind)
  - Veda Panneershelvam (Google DeepMind)
  - Marc Lanctot (Google DeepMind)
  - Sander Dieleman (Google DeepMind)
  - Dominik Grewe (Google DeepMind)
  - John Nham (Google)
  - Nal Kalchbrenner (Google DeepMind)
  - Ilya Sutskever (Google)
  - Timothy Lillicrap (Google DeepMind)
  - Madeleine Leach (Google DeepMind)
  - Koray Kavukcuoglu (Google DeepMind)
  - Thore Graepel (Google DeepMind)
  - Demis Hassabis (Google DeepMind)
- **학회 또는 저널명 (Conference or Journal Name)**: Nature
- **제출일 또는 발행일 (Submission or Publication Date)**: 2016년 1월 28일

<!-- truncate -->

- **초록 (Abstract)**:
  바둑은 거대한 탐색 공간과 어려운 형세 판단 때문에 오랫동안 인공지능에게 가장 어려운 고전 게임으로 여겨져 왔다. 본 논문에서는 가치망(value networks)으로 바둑판의 형세를 평가하고 정책망(policy networks)으로 수를 선택하는 새로운 접근법을 소개한다. 이 심층 신경망들은 인간 전문가 기보를 이용한 지도학습과 자가 대국을 통한 강화학습의 새로운 조합으로 훈련되었다. 이 신경망들은 별도의 탐색 없이도, 수천 번의 무작위 자가 대국을 시뮬레이션하는 최신 몬테카를로 트리 탐색 프로그램 수준의 기력을 보여주었다. 또한 몬테카를로 시뮬레이션과 가치망, 정책망을 결합한 새로운 탐색 알고리즘을 소개한다. 이 탐색 알고리즘을 사용하여 우리 프로그램 알파고(AlphaGo)는 다른 바둑 프로그램들을 상대로 99.8%의 승률을 기록했으며, 유럽 챔피언을 5대 0으로 이겼다. 이는 컴퓨터 프로그램이 정식 크기의 바둑에서 인간 프로 기사를 이긴 최초의 사례로, 이전에는 적어도 10년은 더 걸릴 것으로 생각되었던 업적이다.
- **주요 연구 내용 (Main Research Content/Methodology)**:
  - **심층 신경망 활용**: 바둑판의 형세 평가를 위한 '가치망(value network)'과 다음 수 선택을 위한 '정책망(policy network)'이라는 두 가지 심층 합성곱 신경망(deep convolutional neural networks)을 도입했다.
  - **독창적인 훈련 파이프라인**: 인간 전문가 기보를 활용한 지도학습(Supervised Learning)으로 정책망을 초기 훈련하고, 이후 정책망이 자체 대국을 통해 학습하는 강화학습(Reinforcement Learning)으로 성능을 더욱 향상시켰다.
  - **자가 대국 데이터셋 생성**: 강화학습으로 개선된 정책망의 자가 대국(self-play)을 통해 3,000만 개의 고유한 포지션으로 구성된 새로운 데이터셋을 생성하고, 이를 가치망 훈련에 사용하여 과적합(overfitting) 문제를 해결했다.
  - **신경망과 MCTS의 결합**: 정책망이 제안하는 유망한 수들을 중심으로 탐색의 폭을 좁히고, 가치망과 빠른 롤아웃(rollout) 시뮬레이션 결과를 결합하여 형세를 정밀하게 평가하는 새로운 몬테카를로 트리 탐색(MCTS) 알고리즘을 개발했다.
- **주요 결과 및 결론 (Key Findings and Conclusion)**:
  - **압도적인 성능**: 알파고는 다른 최상위 바둑 프로그램들과의 대결에서 495전 494승(승률 99.8%)을 기록했다.
  - **프로 기사 격파**: 유럽 바둑 챔피언인 판 후이(Fan Hui) 2단과의 공식 5번기에서 5대 0으로 완승하여, 핸디캡 없이 프로 기사를 이긴 최초의 컴퓨터 프로그램이 되었다.
  - **가치망의 유효성 입증**: 몬테카를로 롤아웃 시뮬레이션 없이 가치망만으로 형세를 평가했을 때에도 다른 모든 바둑 프로그램을 능가하는 성능을 보여, 가치망이 기존 방식의 효과적인 대안이 될 수 있음을 증명했다.
  - **하이브리드 평가 방식의 우수성**: 가치망 평가와 롤아웃 평가를 결합한 방식(mixing parameter $\lambda=0.5$)이 가장 좋은 성능을 보였으며, 이는 두 메커니즘이 상호 보완적임을 시사한다.
  - **AI의 새로운 가능성 제시**: 심층 신경망과 트리 탐색의 결합을 통해 바둑이라는 AI의 오랜 난제를 해결함으로써, 다른 해결하기 어려워 보였던 AI 분야에서도 인간 수준의 성능을 달성할 수 있다는 가능성을 열었다.
- **기여점 (Contributions)**:
  - **고성능 바둑 평가 함수 개발**: 심층 신경망을 기반으로 바둑의 복잡한 형세를 효과적으로 평가하는 '가치망'과 유망한 수를 선택하는 '정책망'을 최초로 개발했다.
  - **새로운 학습 패러다임 제시**: 대규모 지도학습과 강화학습(자가 대국)을 결합한 독창적인 훈련 파이프라인을 통해 전문가 수준을 뛰어넘는 모델을 성공적으로 구축했다.
  - **효율적인 탐색 알고리즘 통합**: 심층 신경망의 정적인 평가(static evaluation)와 몬테카를로 롤아웃의 동적인 시뮬레이션(dynamic simulation)을 성공적으로 결합한 새로운 MCTS 탐색 알고리즘을 도입했다.
- **DOI (Digital Object Identifier)**: 10.1038/nature16961
- **기타 식별 가능한 정보**:
  - **연구 분야**: 인공지능 (Artificial Intelligence), 머신러닝 (Machine Learning)
  - **연구 대상**: 바둑 (Game of Go)
  - **데이터셋**: KGS Go Server, 자가 대국 데이터셋 (Self-play dataset)

## 요약

### 서론 (Introduction)

바둑은 체스보다 탐색 공간이 훨씬 넓고($b\approx250, d\approx150$) 복잡하여 기존의 AI 접근법으로는 정복하기 어려운 영역으로 간주되었다. 이전의 인공지능은 탐색 깊이를 줄이기 위한 '형세 평가'와 탐색 폭을 줄이기 위한 '정책'을 사용했지만, 바둑의 복잡성 때문에 효과적인 평가 함수나 정책을 만드는 데 한계가 있었다. 본 연구는 심층 합성곱 신경망을 사용하여 이 문제를 해결하는 '알파고'를 제안한다. 알파고는 인간의 직관과 유사하게 바둑판을 이미지처럼 처리하여 형세를 평가하는 '가치망'과 다음 수를 예측하는 '정책망'을 핵심으로 하며, 이를 몬테카를로 트리 탐색(MCTS)과 결합하여 인간 프로 기사 수준을 뛰어넘는 기력을 달성했다.

### 본론 (Main Content)

#### 신경망 훈련 파이프라인 (Neural Network Training Pipeline)

알파고의 핵심인 신경망들은 여러 단계의 머신러닝 파이프라인을 통해 훈련되었다.

1. **지도학습 정책망 ($p_{\sigma}$)**: KGS Go 서버의 인간 전문가 기보 3,000만 개를 학습하여 다음 수를 예측하는 13계층 정책망을 훈련했다. 이 SL 정책망은 기존 연구보다 높은 57.0%의 예측 정확도를 달성했다.

2. **강화학습 정책망 ($p_{\rho}$)**: SL 정책망을 초기 가중치로 사용하여, 정책망이 자신(의 이전 버전)과 대국하며 승률을 극대화하는 방향으로 학습하는 정책 경사(policy gradient) 강화학습을 수행했다. 이렇게 훈련된 RL 정책망은 SL 정책망을 상대로 80% 이상의 승률을 기록했으며, 탐색 없이도 기존의 강한 바둑 프로그램인 Pachi를 85%의 승률로 이겼다.

3. **가치망 ($v_{\theta}$)**: RL 정책망의 자가 대국 결과를 예측하도록 훈련된 신경망이다. 단일 게임 내의 연속된 수들은 상관관계가 높아 과적합을 유발할 수 있으므로, 3,000만 개의 서로 다른 자가 대국 게임에서 각각 하나의 포지션만 추출하여 비상관(uncorrelated) 데이터셋을 구축했다. 이 가치망은 RL 정책망을 이용한 몬테카를로 롤아웃보다 15,000배나 적은 계산으로 비슷한 수준의 정확도를 보였다.

#### MCTS 탐색 알고리즘

알파고는 정책망과 가치망을 MCTS에 결합하여 탐색을 수행한다.

- **탐색 단계 (Selection & Expansion)**: 탐색 트리에서는 정책망($p_{\sigma}$)이 제공하는 사전 확률(prior probability)을 이용해 유망한 수를 더 많이 탐색하고, 방문 횟수가 일정 기준을 넘으면 노드를 확장한다.
- **평가 단계 (Evaluation)**: 리프 노드(leaf node)에 도달하면, 두 가지 방식으로 형세를 평가한다. 첫째는 가치망($v_{\theta}$)을 통한 빠른 평가이고, 둘째는 가벼운 패턴 기반의 '빠른 롤아웃 정책'($p_{\pi}$)을 이용해 게임 끝까지 시뮬레이션하는 것이다. 이 두 평가 결과는 가중치 $\lambda$를 통해 결합된다 ($V(s_{L})=(1-\lambda)v_{\theta}(s_{L})+\lambda z_{L}$).
- **갱신 단계 (Backup)**: 평가 결과를 트리의 상위 노드들로 전파하여 각 수의 가치(action-value)를 갱신한다.
- 이 모든 과정은 CPU와 GPU를 활용한 비동기 병렬 처리를 통해 효율적으로 수행되었다.

### 결론 (Conclusion)

알파고는 심층 신경망과 트리 탐색의 결합을 통해 바둑이라는 AI의 오랜 난제를 해결했다. 지도학습으로 인간의 지식을 습득하고 강화학습을 통한 자가 대국으로 그 지식을 넘어선 알파고의 접근 방식은, 특정 도메인에 고도로 특화된 기존의 AI와 달리 범용적인 학습 방법론의 가능성을 보여주었다. 유럽 챔피언 판 후이를 5-0으로 꺾은 성과는 AI가 복잡하고 직관적인 영역에서도 인간의 능력을 넘어설 수 있음을 입증했으며, 이는 앞으로 다른 과학 및 현실 세계의 문제 해결에 중요한 발판이 될 것이다.

---

**📝 안내**: 이 문서는 DYETEC Project 2를 기획하기 위해 읽은 논문입니다.