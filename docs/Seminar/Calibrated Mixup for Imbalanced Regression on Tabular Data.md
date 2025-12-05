**발표 주제**: 타블로 데이터의 불균형 회귀(Imbalanced Regression) 해결을 위한 Calibrated Mixup 프레임워크
**발표자**: Nathaniel Kang 연세대학교 박사후 연구원님
**날짜**: 2025.12.05
**핵심 키워드**: #ImbalancedRegression #TabularData #Mixup #Calibration #SNN

---

## 1. 연구 배경 & 문제 제기 (Why?)
> "이미지 데이터용 방법론(LDS/FDS)을 타블로 데이터에 그대로 쓰면 안 된다."

*  **현황**: 현실의 데이터(의료, 금융 등)는 타겟값(y)의 분포가 매우 불균형함(Skewed).
* **문제점**:
    *  표준 회귀 모델은 다수 클래스(평균 근처)에 편향되어 희귀하지만 중요한 값(Rare values)을 못 맞춤.
    *  기존 딥러닝 해결책(LDS, FDS 등)은 '분포 스무딩(Smoothing)'을 쓰는데, 이는 이미지의 공간적 연속성을 가정한 것임  36].
    *  **Tabular Data의 특성**: 특성 간 경계가 뚜렷하고 이질적(Heterogeneous)이라서, 무작위로 스무딩하면 정보가 뭉개짐  37, 85].
* **목표**: 타블로 데이터의 특성을 살리면서, 부족한 구간의 데이터를 '잘' 만들어내자.

## 2. 제안 방법론: Calibrated Mixup (How?)
> "데이터를 만들고(Mixup), 통계를 맞추고(Calibration), 위치를 잡는다(SNN)."

 이 논문의 핵심은 **Dual Refinement Strategy (이중 정제 전략)** 임. 단순히 Mixup으로 데이터를 뻥튀기하는 게 아니라, 생성된 데이터가 진짜 데이터처럼 보이게 만듦.

### Step 1. 전처리 (Binning & Target)
*  타겟 $y$를 $K$개의 구간(Bin)으로 나눔.
*  구간별 데이터 수의 중앙값(Median)을 기준으로 타겟 수($m_j$)를 정함  203].
*  많으면 줄이고(Undersampling), 적으면 채운다(Oversampling)  230].

### Step 2. 합성 데이터 생성 (Targeted Mixup)
 부족한 데이터를 채울 때 두 가지 방식으로 섞음 (Mixup)  235].
1.  **NC (Nearest Cell)**: 타겟값($y$)이 비슷한 이웃 구간 데이터끼리 섞음. (간단, 효율적)    238]
2.  **FS (Feature Similarity)**: 샴 네트워크(Siamese Net)로 학습된 임베딩 공간에서 특성이 비슷한 놈끼리 섞음. (복잡하지만 정교함)

### Step 3. 이중 정제 (Dual Refinement)
만들어진 데이터($\hat{x}$)에 가중치($w$)를 부여해서 옥석을 가림.

1.  **Global Statistical Calibration (전역적 통계 보정)**
    *  **목표**: 합성 데이터 뭉치의 평균과 분산이 원본 데이터 뭉치와 똑같아져야 함.
    *  **방법**: MMD(Maximum Mean Discrepancy) 개념을 차용해서 1차(평균), 2차(분산) 모멘트를 매칭시키는 제약조건을 검.
2.  **Local Structure Refinement (국소 구조 정제)**
    * **목표**: 통계가 맞아도 엉뚱한 위치(Manifold 밖)에 있으면 안 됨.  내 진짜 이웃들과 친해야 함.
    * **방법**: **SNN(Soft Nearest Neighbor) Loss**를 사용.  내 주변에 진짜 데이터가 없으면 페널티를 줘서 가중치를 낮춤.

## 3. 실험 결과 (Performance)
*  **데이터셋**: 7개 타블로 데이터 + 1개 이미지 데이터(IMDB-WIKI).
* **성능**:
    *  SOTA(LDS, FDS, RankSim 등) 대비 **MAE 10~20% 감소**.
    *  특히 **희귀값(Rare values, 상위 1% Tail)** 예측에서 압도적임 (바닐라 모델 대비 20-30% 성능 향상).
    *  이미지 데이터(IMDB-WIKI)에서도 FS 방식이 1등 함 (MAE 6.64) → 타블로뿐만 아니라 범용성 있음.
*  **호환성**: 기존 모델(LDS, FDS)의 전처리기로 써도 성능이 오름.

## 4. 토의 및 Q&A (Discussion)
* **Q: FS(Feature Similarity) 방식이 NC보다 항상 좋은가?**
    *  A: 성능은 FS가 대체로 좋지만, 샴 네트워크를 학습해야 해서 계산 비용이 비쌈. 가성비는 NC가 좋음.
* **Q: 왜 굳이 Calibration을 해야 하는가?**
    * A: Ablation Study 결과, Mixup만 하면 성능 향상이 크지 않음.  Calibration과 SNN을 모두 썼을 때 시너지가 나서 성능이 제일 좋았음.
* **Q: 한계점은?**
    * A: Binning 개수나 타겟 사이즈($\kappa$) 같은 하이퍼파라미터에 의존적임.  향후엔 데이터 밀도에 따라 자동으로 구간을 나누는 Adaptive Binning이 필요함.

---

## 나의 인사이트 (Takeaways)
1. **"Tabular는 Tabular답게 다뤄야 한다"**: 이미지용 방법론을 무지성으로 가져다 쓰면 안 됨. 타블로 데이터는 Discretize(구간화)하고 통계량(Moment)을 맞추는 접근이 훨씬 유효함.
2. **Data-Centric AI의 모범 사례**: 모델 구조를 바꾸는 게 아니라, 학습 데이터(Training Set)의 품질(Calibration + Structure)을 높여서 성능을 올림.
3. **활용 방안**: 현업에서 불균형 시계열 예측이나 이상치 탐지 회귀 문제를 풀 때, 이 논문의 전처리 방식(Mixup + SNN Filtering)을 적용해볼 만함.