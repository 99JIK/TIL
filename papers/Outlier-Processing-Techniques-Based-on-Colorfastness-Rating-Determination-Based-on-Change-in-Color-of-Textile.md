---
title: "섬유의 변퇴색 기준 판정 내광성 등급 기반 이상치 처리 기법"
date: "2023-06-01"
description: "염색 공정 데이터의 비정규 분포 특성을 고려하여, 변퇴색 기준 판정 등급과의 차이를 이용한 이상치 처리 기번을 제안하고 예측 모델의 성능 향상을 입증한 논문"
keywords:
  [
    Outlier Detection,
    Lightfastness,
    Textile,
    Dyeing Process,
    Prediction Model,
    Machine Learning,
    Color Change,
    Data Analysis,
  ]
tags:
  [
    Outlier Detection,
    Lightfastness,
    Textile,
    Dyeing Process,
    Prediction Model,
    Machine Learning,
    Color Change,
    Data Analysis,
  ]
---

# 섬유의 변퇴색 기준 판정 내광성 등급 기반 이상치 처리 기법

## 논문 정보

- **제목 (Title)**: 섬유의 변퇴색 기준 판정 내광성 등급 기반 이상치 처리 기법
- **저자 (Authors) 및 소속 (Affiliations)**:
  - 이대규 (경북대학교 IT대학 컴퓨터학부)
  - 서강복 (경북대학교 IT대학 컴퓨터학부)
  - 김덕엽 (경북대학교 IT대학 컴퓨터학부)
  - 이우진 (경북대학교 IT대학 컴퓨터학부)
- **학회 또는 저널명 (Conference or Journal Name)**: 2023 한국컴퓨터종합학술대회 (KCC 2023)
- **제출일 또는 발행일 (Submission or Publication Date)**: 2023년 6월
- **키워드 (Keywords)**: 섬유, 변퇴색, 내광성 등급, 이상치 처리, 품질 관리, 색상 변화, 데이터 분석, 머신러닝, 염색 공정

<!-- truncate -->

- **초록 (Abstract)**:
  최근 섬유 산업에서 AI 활용이 생산 효율성 향상을 위해 점진적으로 증가하고 있다. 그러나 노동 집약적 산업 분야에서는 머신러닝 기법을 도입하기 위한 데이터 수집 및 관리 시스템이 종종 구성되지 않아 데이터에 이상치가 포함될 가능성이 있다. 수집된 데이터에 이상치가 포함되면 예측 모델의 성능이 저하될 수 있어 이상치 처리가 필요하다. 이를 해결하기 위해 본 논문에서는 변퇴색 기준 판정 내광성 등급과 수집된 내광성 등급을 비교하여 이상치 처리 기법을 제안한다. 이 기법을 예측 모델에 적용할 때 비교 모델 대비 내광성 등급 예측 성능이 향상됨을 보여준다.

- **주요 연구 내용 (Main Research Content/Methodology)**:

  - 섬유 염색 공정 데이터의 비정규 분포 특성을 고려한 이상치 처리 기법 개발
  - 변퇴색 기준 판정 내광성 등급과 수집된 내광성 등급 비교를 통한 이상치 분류
  - CIELAB 색상 공간을 활용한 변퇴색 계산 공식 개발
  - 제안된 기법의 예측 모델 성능 향상 효과 검증

- **주요 결과 및 결론 (Key Findings and Conclusion)**:

  - 제안된 이상치 처리 기법이 기존 방법 대비 우수한 성능을 보임
  - 내광성 등급 차이 절댓값 1.5를 초과하는 데이터 제거 시 최고 성능 달성
  - 정확도 94.953%로 기존 방법들을 크게 상회
  - 섬유 및 기타 노동 집약적 산업의 제품 제조 효율성 향상 가능성 제시

- **기여점 (Contributions)**:

  - 섬유 염색 공정 데이터의 비정규 분포 특성을 고려한 새로운 이상치 처리 기법 제안
  - 변퇴색 기준 판정을 통한 객관적 이상치 분류 방법 개발
  - 섬유 품질 관리 시스템의 자동화 및 정확도 향상
  - 노동 집약적 산업에서의 머신러닝 적용 가능성 확대

- **DOI (Digital Object Identifier)**: KCC 2023 학회 발표 논문
- **기타 식별 가능한 정보**:
  - 연구 분야: 섬유 공학, 머신러닝, 품질 관리, 데이터 분석
  - 학회: 2023 한국컴퓨터종합학술대회 (KCC 2023)
  - 연구 지원: 산업통상자원부 (P0022335), 교육부 및 한국연구재단 4단계 BK21 사업

## 요약

### 서론 (Introduction)

섬유 산업, 특히 염색 공정과 같이 공정 변수가 복잡한 분야에서는 정확한 데이터 수집이 어려워 수집된 데이터에 이상치가 포함되기 쉽다. 이러한 이상치는 예측 모델의 성능을 저해하므로 반드시 처리해야 한다. 그러나 염색 공정과 같은 특수 분야 데이터는 정규분포를 따르지 않는 경우가 많아, 일반적으로 사용되는 이상치 처리 기법으로는 효과적인 처리가 어렵다. 따라서 데이터 특성에 맞는 새로운 이상치 처리 방법이 필요하다. 본 논문에서는 섬유의 품질 지표 중 하나인 내광성 예측 모델의 성능을 높이기 위해, 변퇴색 기준 판정 등급을 활용한 이상치 처리 기법을 제안하고 그 효과를 입증하고자 한다.

### 연구 방법 (Methodology)

#### 데이터 구성

연구에는 총 5,546개의 섬유 염색 가공 공정 데이터가 사용되었다. 데이터는 392개의 공정 변수와 1개의 예측 대상 변수인 '내광성 등급'으로 구성된다. 내광성 등급은 1~5등급 및 중간 등급을 포함하여 총 9개 등급으로 나뉜다.

이 중 내광성에 직접적인 영향을 미치는 조제, 염료, 온도 등 40개의 주요 변수를 모델 학습에 사용하였다.
![](img/Outlier-Processing-Techniques-Based-on-Colorfastness-Rating-Determination-Based-on-Change-in-Color-of-Textile/Pasted%20image%2020250820125749.png)
수집된 내광성 등급 데이터는 특정 등급에 편중되어 정규분포를 따르지 않는 특성을 보인다 (그림 1).

#### 이상치 처리 기법

**변퇴색 기준 내광성 등급 계산**: 내광성 등급을 판정하는 표준 방식 중 하나로, 등급 측정 전후 시험편 간의 색상 차이(변퇴색, $\Delta E_F$)를 CIELAB 색차 기반의 수식(아래 참조)을 통해 계산하여 등급을 결정한다.

> $$ \Delta E*F = \sqrt{(\Delta L^\*)^2 + (\Delta C_F)^2 + (\Delta H_F)^2} $$ where) $$ \Delta H_F = \Delta H_K / [1 + (10 \cdot C_M / 1000)^2] $$ $$ \Delta C_F = \Delta C_K / [1 + (20 \cdot C_M / 1000)^2] $$ $$ \Delta H_K = \Delta h'*{ab} - D, \quad \Delta C*K = \Delta C'*{ab} - D $$ $$ D = (\Delta C'_{ab} \cdot C_M \cdot e^{-x}) / 100, \quad C_M = (C'_{ab,S} + C'_{ab,R}) / 2 $$ $$ x = \begin{cases} [(h_M - 280)/30]^2, & \text{if } |h_M - 280| \le 180 \\ [(360 - |h_M - 280|)/30]^2, & \text{if } |h_M - 280| > 180 \end{cases} $$ $$ h_M = \begin{cases} (h_{ab,S} + h*{ab,R})/2, & \text{if } |h*{ab,S} - h*{ab,R}| \le 180 \\ (h*{ab,S} + h*{ab,R})/2 + 180, & \text{if } |h*{ab,S} - h*{ab,R}| > 180 \text{ and } h*{ab,S} + h*{ab,R} < 360 \\ (h*{ab,S} + h*{ab,R})/2 - 180, & \text{if } |h*{ab,S} - h*{ab,R}| > 180 \text{ and } h*{ab,S} + h*{ab,R} \ge 360 \end{cases} $$ $L^*\_S, C^**{ab,S}, h*{ab,S}$ = CIELAB lightness, chroma, and hue of tested sample \\ $L^*\_R, C^**{ab,R}, h*{ab,R}$ = CIELAB lightness, chroma, and hue of untested sample --- $$ \Delta h'*{ab} = pq\sqrt{(\Delta E^_\_{ab})^2 - (\Delta L^_)^2 - (\Delta C^_*{ab})^2} $$ $$ \Delta C'*{ab} = C^\_\_{ab,S} - C^\*_{ab,R} $$ $$ \Delta E^_\_{ab} = \sqrt{(\Delta L^_)^2 + (\Delta a^_)^2 + (\Delta b^_)^2} $$ $$ \Delta L^_ = L^\_\_S - L^*\_R, \quad \Delta a^* = a^*\_S - a^*\_R, \quad \Delta b^* = b^*\_S - b^\*\_R $$ $$ m = h_{ab,S} - h*{ab,R} $$ $$ p = \begin{cases} 1, & \text{if } m \ge 0 \\ -1, & \text{if } m < 0 \end{cases}, \quad q = \begin{cases} 1, & \text{if } |m| \le 180 \\ -1, & \text{if } |m| > 180 \end{cases} $$ $$ h*{ab} = (\arctan(b^_/a^_) \times (180/\pi) + 360) \bmod 360 $$

**이상치 판정 기준 설정**: 실제 수집된 내광성 등급과 변퇴색 기준으로 계산된 내광성 등급을 비교한 결과, 약 57%의 데이터에서 두 등급 간 차이가 발생했다 (표 2).
![](img/Outlier-Processing-Techniques-Based-on-Colorfastness-Rating-Determination-Based-on-Change-in-Color-of-Textile/Pasted%20image%2020250820132111.png)
모든 불일치 데이터를 이상치로 보기 어렵기 때문에, 두 등급 간 차이의 절댓값을 기준으로 데이터를 제거해가며 예측 모델의 성능(정확도)을 측정했다.

성능 비교 결과, 등급 간 차이가 '1.5를 초과'하는 데이터를 제거했을 때 모델의 정확도가 가장 높게 나타났다 (그림 3). 따라서 본 연구에서는 이 기준을 이상치 판정 기준으로 설정하고 해당 데이터를 제거했다.
![](img/Outlier-Processing-Techniques-Based-on-Colorfastness-Rating-Determination-Based-on-Change-in-Color-of-Textile/Pasted%20image%2020250820132234.png)

### 주요 결과 및 결론 (Key Findings and Conclusion)

제안된 이상치 처리 기법의 성능을 검증하기 위해, AutoML 모델인 AutoGluon을 사용하여 예측 모델을 학습시키고 정확도를 비교했다. 성능 비교 결과는 표 3과 같다.
![](img/Outlier-Processing-Techniques-Based-on-Colorfastness-Rating-Determination-Based-on-Change-in-Color-of-Textile/Pasted%20image%2020250820132222.png)

실험 결과, 제안된 기법을 적용했을 때의 예측 정확도가 가장 높았으며, 이는 Z-score와 같은 일반적인 이상치 제거 기법보다도 우수한 성능이다. 이는 염색 공정 데이터가 정규분포를 따르지 않아 기존 기법이 제대로 작동하지 않는 반면, 본 논문에서 제안한 도메인 특화 기법이 효과적으로 이상치를 처리했기 때문이다.

### 결론 (Conclusion)

결론적으로, 본 연구는 변퇴색 기준 판정 등급과 실제 수집된 등급 간의 차이를 활용하여 이상치를 제거하는 기법을 제안했으며, 이를 통해 내광성 예측 모델의 성능을 크게 향상시킬 수 있음을 보였다. 이 기법은 섬유 산업뿐만 아니라, 데이터 수집 환경이 열악한 다른 노동 집약적 산업 분야에서 머신러닝 모델의 도입과 생산 효율성 증대에 기여할 수 있을 것으로 기대된다.
