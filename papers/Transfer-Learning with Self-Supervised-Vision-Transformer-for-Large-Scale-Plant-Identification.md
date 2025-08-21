---
title: "Transfer Learning with Self-Supervised Vision Transformer for Large-Scale Plant Identification"
date: "2024-01-01"
description: "자기지도 학습 Vision Transformer를 사용한 대규모 식물 식별을 위한 전이학습 연구"
keywords:
  [
    "Transfer Learning",
    "Self-Supervised Learning",
    "Vision Transformer",
    "Plant Identification",
    "Large-Scale Classification",
    "Computer Vision",
    "Deep Learning",
    "Machine Learning",
  ]
tags:
  [
    "Transfer Learning",
    "Self-Supervised Learning",
    "Vision Transformer",
    "Plant Identification",
    "Large-Scale Classification",
    "Computer Vision",
    "Deep Learning",
    "Machine Learning",
  ]
authors:
  ["mingle_xu", "yongchae_jeong", "dong_sun_park", "sook_yoon", "jaesu_lee"]
---

# Transfer Learning with Self-Supervised Vision Transformer for Large-Scale Plant Identification

## 논문 정보

- **제목 (Title)**: Transfer Learning with Self-Supervised Vision Transformer for Large-Scale Plant Identification
- **저자 (Authors) 및 소속 (Affiliations)**:
  - Mingle Xu, Yongchae Jeong, Dong Sun Park (전북대학교 전자공학부, 지능로봇코어연구소)
  - Sook Yoon (목포대학교 컴퓨터공학과)
  - Jaesu Lee (농촌진흥청)
- **학회 또는 저널명 (Conference or Journal Name)**: CLEF 2022: Conference and Labs of the Evaluation Forum, CEUR Workshop Proceedings (CEUR-WS.org)
- **제출일 또는 발행일 (Submission or Publication Date)**: 2022년 9월 5일
- **초록 (Abstract)**:
  본 논문은 수백만 개의 이미지와 80,000개의 클래스를 포함하는 대규모 데이터셋을 사용하여 식물을 식별하는 PlantCLEF2022 챌린지를 위한 연구 노트이다. 클래스당 평균 이미지가 약 36개에 불과하여 소수 샷(few-shot) 이미지 분류 문제로 간주될 수 있다. 이 문제를 해결하기 위해, 기존의 지도 학습 방식의 합성곱 신경망(CNN)을 사용하는 대신 자기지도 학습(self-supervised learning)으로 사전 학습된 비전 트랜스포머(Vision Transformer, ViT)를 활용하는 전이 학습 전략을 제안한다. 제안된 방법은 챌린지에서 MA-MRR 0.62692를 달성하여 1위를 차지했으며, 이는 2위보다 0.019, 3위보다 0.116 높은 수치이다. 또한, 사전 학습된 모델이 식물 질병 인식과 같은 다른 식물 관련 다운스트림 작업에도 효과적임을 실험적으로 입증하였다.
- **키워드 (Keywords)**: plant identification, image classification, transfer learning, computer vision, self-supervised, vision transformer
- **주요 연구 내용 (Main Research Content/Methodology)**:
  - **문제 정의**: PlantCLEF2022 챌린지의 대규모(80,000 클래스) 및 소수 샷(클래스당 평균 36개 이미지) 식물 식별 문제를 해결한다.
  - **접근법**: 기존의 지도 학습 방식 CNN 대신, 자기지도 학습으로 사전 학습된 비전 트랜스포머(ViT)를 전이 학습에 사용한다. 이는 CNN의 귀납적 편향(inductive bias)이 없어 더 높은 모델 용량을 가지며, 자기지도 학습을 통해 특정 작업에 종속되지 않는 범용적인 특징 추출기를 얻을 수 있다는 장점이 있다.
  - **모델**: ImageNet에서 사전 학습된 ViT 기반의 Masked Autoencoder(MAE) 모델(ViT-Large)을 PlantCLEF2022의 'trusted' 데이터셋(약 288만 이미지, 8만 클래스)을 사용하여 파인튜닝(fine-tuning)했다.
  - **관측 단위(Observation-level) 분류**: 챌린지는 단일 이미지가 아닌, 동일한 식물에 대한 여러 이미지를 포함하는 '관측(observation)' 단위로 분류를 요구한다. 이를 위해 각 이미지의 예측 점수를 통합하는 전략(`single-highest`, `multi-sorted` 등)을 분석하고 적용했다.
- **주요 결과 및 결론 (Key Findings and Conclusion)**:
  - PlantCLEF2022 챌린지에서 80 에포크(epoch) 학습으로 MA-MRR 점수 0.62692를 기록하며 1위를 차지했다.
  - 학습을 100 에포크까지 연장하고 'multi-sorted' 통합 전략을 사용했을 때 성능은 MA-MRR 0.64079까지 향상되었다.
  - 'multi-sorted' 전략이 'single-highest' 전략보다 약간 더 나은 성능을 보여, 여러 이미지를 통합하는 관측 단위 분류의 잠재력을 입증했다.
  - 본 연구에서 파인튜닝된 모델은 PlantVillage 등 공개 식물 질병 데이터셋에서 ImageNet 사전 학습 모델보다 더 빠르고 높은 정확도를 달성하여, 식물 관련 다운스트림 작업에 효과적인 기반 모델이 될 수 있음을 보였다.
- **기여점 (Contributions)**:
  - 대규모 소수 샷 식물 식별 문제에 대해 자기지도 학습 기반 ViT 전이 학습의 효과와 우수성을 입증했다.
  - PlantCLEF2022 챌린지에서 1위를 차지하며 제안 방법의 실용성을 증명했다.
  - PlantCLEF2022 데이터셋으로 학습된 모델이 식물 질병 인식 등 다른 식물 관련 연구에 기여할 수 있는 강력한 사전 학습 모델임을 보였다.
  - 연구에 사용된 코드와 사전 학습된 모델을 공개하여 커뮤니티의 후속 연구를 촉진했다.
- **DOI (Digital Object Identifier)**: 제공되지 않음
- **기타 식별 가능한 정보**: 연구 분야: 컴퓨터 비전, 전이 학습, 식물 식별

<!-- truncate -->

## 요약

### 서론 (Introduction)

본 연구는 PlantCLEF2022 챌린지의 대규모 식물 식별 문제를 다룬다. 이 챌린지는 80,000개의 방대한 클래스를 포함하지만 클래스당 평균 이미지 수는 약 36개로 매우 적어 '소수 샷 학습(few-shot learning)'의 성격을 띤다. 기존의 이미지 분류에서는 ImageNet과 같은 대규모 데이터셋에서 지도 학습 방식으로 사전 학습된 합성곱 신경망(CNN)을 전이 학습에 사용하는 것이 일반적이다. 하지만 이 방식은 두 가지 약점이 있다. 첫째, 지도 학습으로 얻은 특징은 특정 작업에 편향될 수 있어, 성격이 다른 데이터셋(예: 세분화된 식물 이미지)에 적용할 때 성능이 저하될 수 있다. 둘째, CNN은 이동 불변성(translation invariance)과 같은 귀납적 편향을 내재하여 모델의 표현 용량이 제한될 수 있다.

이러한 문제를 해결하기 위해, 본 연구에서는 최근 컴퓨터 비전 분야에서 주목받는 자기지도 학습(Self-Supervised Learning, SSL)과 비전 트랜스포머(Vision Transformer, ViT)를 결합한 새로운 전이 학습 전략을 제안한다. ViT는 CNN의 귀납적 편향 없이 전역적인 어텐션(global attention)을 통해 더 높은 모델 용량을 확보할 수 있으며, SSL은 레이블 없이 데이터 자체의 구조를 학습하여 특정 작업에 국한되지 않는 범용적인 특징을 추출할 수 있다. 본 연구에서는 ImageNet에서 자기지도 방식으로 사전 학습된 Masked Autoencoder (MAE) 모델을 PlantCLEF2022 데이터셋에 파인튜닝하여 그 효과를 검증한다.

### 자료 및 평가 지표 (Material and Evaluation Metric)

- **학습 데이터셋**: PlantCLEF2022 데이터셋은 전문가가 검증한 'trusted' 데이터셋과 웹에서 수집한 'web' 데이터셋으로 구성된다. 본 연구에서는 레이블의 신뢰도가 높은 'trusted' 데이터셋(2,885,052개 이미지, 80,000개 클래스)만을 파인튜닝에 사용했다. 이 데이터셋은 실제 야외 환경에서 촬영되어 조명, 배경, 시점, 크기 등이 매우 다양하며, 잎, 꽃, 열매, 서식지 등 다양한 식물 부위를 포함하는 특징이 있다.
- **테스트 데이터셋 및 관측 단위 분류**: 테스트 데이터셋은 26,868개의 '관측(observation)'에 해당하는 55,306개의 이미지로 구성된다. '관측'이란 특정 식물 개체를 의미하며, 하나의 관측에 대해 여러 장의 사진이 촬영될 수 있다. 따라서 평가는 이미지 단위가 아닌 관측 단위로 이루어진다.
- **평가 지표**: 평가는 Macro Averaged Mean Reciprocal Rank (MA-MRR)를 사용한다. 각 관측에 대해 상위 30개의 예측 순위 목록을 제출하며, 정답 클래스가 목록의 몇 번째 순위에 처음 등장하는지를 기반으로 점수를 계산한다. 모든 관측을 첫 번째 순위에서 정확히 맞히면 MA-MRR은 1이 된다.
  $$ MA-MRR = \frac{1}{N}\sum*{n=1}^{N}\frac{1}{O*{n}}\sum*{i=1}^{O*{n}}\frac{1}{rank\_{i}} $$
    여기서 $N$은 클래스 수, $O_n$은 클래스 $n$의 관측 수, $rank_i$는 $i$번째 관측에 대한 정답의 순위이다.

### 방법론 (Method)

- **모델 및 파인튜닝**: ImageNet-1k 데이터셋에서 자기지도 방식으로 사전 학습된 ViT-Large 기반의 MAE 모델을 사용했다. MAE는 이미지의 패치 일부를 무작위로 마스킹하고, 보이는 패치만 인코더에 입력하여 전체 이미지를 복원하도록 학습하는 모델이다. 파인튜닝 시에는 디코더를 제거하고 인코더 뒤에 분류기를 추가한다. 파인튜닝은 4개의 RTX 3090 GPU를 사용하여 100 에포크 동안 진행했으며, AdamW 옵티마이저, MixUp 및 CutMix 데이터 증강 기법을 적용했다.
- **관측 단위 통합 전략**: 관측에 포함된 여러 이미지의 개별 예측 결과를 최종 예측 하나로 통합하기 위해 다음 세 가지 전략을 분석했다.
  1.  **Single-random**: 관측 내 이미지 중 하나를 무작위로 선택하여 그 예측을 최종 결과로 사용한다.
  2.  **Single-highest**: 관측 내 모든 이미지 중 최상위(top-1) 예측 점수가 가장 높은 이미지의 예측을 최종 결과로 사용한다.
  3.  **Multi-sorted**: 관측 내 모든 이미지의 모든 예측 점수(상위 30개)를 한데 모아 점수 순으로 정렬하고, 중복 클래스를 제거한 후 상위 30개를 최종 결과로 사용한다.

### 실험 및 결과 (Submissions and Results)

챌린지 마감 전까지 80 에포크 학습을 완료하고 `single-highest` 전략을 사용하여 제출한 결과, MA-MRR 0.62692를 달성하여 2위(0.60781), 3위(0.51043) 팀과 현격한 차이로 1위를 차지했다. 성능은 학습 에포크가 증가함에 따라 꾸준히 향상되는 경향을 보였다.

챌린지 마감 후, 100 에포크까지 학습을 계속하고 통합 전략을 비교한 결과, `single-highest` 전략은 0.63668, `multi-sorted` 전략은 0.64079의 MA-MRR을 기록했다. 이는 여러 이미지의 정보를 종합하는 `multi-sorted` 방식이 더 효과적임을 시사한다.

### 논의 및 결론 (Discussions and Conclusion)

본 연구는 자기지도 학습으로 사전 학습된 ViT를 대규모 식물 식별에 적용하는 간단하면서도 강력한 전이 학습 전략을 제시하고, PlantCLEF2022 챌린지에서 압도적인 성능으로 1위를 차지함으로써 그 효과를 입증했다. 이 전략은 CNN의 귀납적 편향에서 벗어나 더 강력한 모델 용량을 제공하고, 자기지도 학습을 통해 더 일반화된 특징 공간을 학습한다는 점에서 기존의 지도 학습 기반 CNN 접근법보다 우수하다.

또한, PlantCLEF2022 데이터셋으로 파인튜닝된 모델이 PlantVillage와 같은 다른 공개 식물 질병 데이터셋에서도 뛰어난 성능(더 빠른 수렴 속도와 높은 정확도)을 보이는 것을 확인했다. 이는 본 연구에서 제안한 모델이 식물 질병 인식, 잡초 분류 등 다양한 식물 관련 다운스트림 작업의 성능을 향상시키는 데 기여할 수 있는 강력한 기초 모델이 될 수 있음을 의미한다. 연구팀은 관련 커뮤니티의 발전을 위해 코드와 사전 학습된 모델을 공개했다.

본 논문은 GRAD0732 Final Report를 준비하며 정진영님이 Sub paper로 준비한 논문의 내용을 숙지하기 위해 정리했다.
