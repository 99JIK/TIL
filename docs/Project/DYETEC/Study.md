# 용융 방사(Melt Spinning) 공정-구조(Structure)-물성(Property) 관계 및 AI 모델링 기초

> Melt Spinning 공정의 Structure와 Property 관계를 이해하고, 이를 바탕으로 Inverse Design Model 개발에 도움이 될 정보를 정리한 문서이다.

## 방사(Spinning) 공정

### 물성

#### Melt Index

- MFI(Melt Flow Index)는 Polymer의 Molecular Weight에 대한 간접적 척도이자 용융 상태에서의 유동성(Fluidity)을 직접적으로 나타내는 지표이다.
    
- 특정 조건에서 10분 동안 Capillary Die를 통해 압출되는 Polymer의 Mass(g)로 정의된다.
    

### 공정 변수

#### Denier

- 섬유의 Linear Mass Density를 나타내는 단위로, 섬유 9,000미터당 Mass(g)로 정의된다.
- 섬유의 굵기를 나타낸다.
    

#### Spinbeam / Manifold Temp

- Spinbeam은 Polymer 칩을 녹여 Spinneret에 도달하기 전까지 용융 상태의 온도를 일정하게 유지하는 가열 구역이다.
    
- Manifold는 용융된 Polymer를 각 Spinneret 구멍으로 균일하게 분배하는 역할을 한다.
    

#### Godet Roller Speed / Temp

- Godet Roller는 Spinneret에서 압출된 Filament를 끌어당겨 연신(Drawing)하는 가열 롤러이다.
    
- 롤러 간의 속도 및 온도 차이는 최종 섬유의 기계적 물성을 결정하는 핵심 Variable이다.
    

#### Draw Ratio (DR)

- 연신 구역의 최종 속도를 초기 속도로 나눈 비율(`GR2_Speed / GR1_Speed`)로, 섬유에 가해지는 기계적 연신 정도를 나타낸다.
    
- **DR은 Independent Variable이 아니므로, 개별 롤러 속도와 DR을 모두 Model Feature로 사용하면 Multicollinearity를 유발할 수 있다.**
    

#### Final Roller Speed

- 최종적으로 완성된 실을 감는 Winder의 속도이다. 압출량과 함께 목표 Denier를 결정하는 데 중요한 역할을 한다.
    

### 물성

#### TENACITY (강도)

- 섬유가 끊어지기 전까지 견딜 수 있는 최대 Tensile Stress를 Denier로 나눈 값이다.
    

#### ELONGATION (신도)

- 섬유가 끊어지기 전까지 늘어날 수 있는 최대 비율(%)이다. Tenacity와는 일반적으로 Trade-off 관계에 있다.
    

#### CRYSTALLINITY (결정화도)

- Polymer 내에서 분자 사슬이 규칙적으로 배열된 Crystalline 영역의 비율이다. Tenacity, Stiffness, Thermal Stability 등에 직접적인 영향을 미친다.
    

## Artificial Intelligence & Machine Learning

### 2.1. 기본 개념: AI, ML, Deep Learning

- **AI**
    
    - 인간의 지능(학습, 추론, 문제 해결 등)을 모방하는 컴퓨터 시스템을 구축하는 포괄적인 학문 분야.
        
- **ML**
    
    - 명시적인 프로그래밍 없이, Data로 패턴을 학습하여 특정 작업을 수행하는 Model 구축하는 AI 핵심 분야
        
    - **핵심 원리**: Representation(Data 표현 및 평가) & Generalization(일반화)
        
- **Deep Learning**
    
    - 여러 계층(Layer)의 인공신경망(Artificial Neural Network, ANN)을 사용하여 복잡한 패턴을 학습하는 ML의 한 분야(Subset)
        

### 2.2. Machine Learning Model의 분류

- **학습 방식에 따른 분류 (By Supervision)**
    
    - **Supervised Learning (지도 학습)**: 정답(Label)이 있는 Data로 학습하여 예측 Model 생성
        
        - **Classification (분류)**, **Regression (회귀)**
            
    - **Unsupervised Learning (비지도 학습)**: Label이 없는 Data에서 숨겨진 Pattern이나 Structure 발견
        
        - **Clustering (군집화)**, **Dimension Reduction (차원 축소)**
	    
    - **Semi-supervised Learning (반지도 학습)**: Supervised + Unsupervised
            
    - **Reinforcement Learning (강화 학습)**: Agent가 환경과 상호작용하며 보상(Reward)을 최대화하는 방향으로 행동 학습
        

### 2.3. Modeling의 핵심 요소

#### Data

- Model의 성능을 결정하는 가장 중요한 요소
    
- **주요 이슈**:
    
    - **Sampling Noise / Bias**: Data가 모집단을 대표하지 못하는 문제
        
    - **Overfitting / Underfitting**: Model이 Training Data에만 과도하게 최적화(Overfitting)되거나, Data의 Pattern을 충분히 학습하지 못하는(Underfitting) 문제
        

#### Parameter와 Hyperparameter

- **Model Parameter**
    
    - Model이 **Data로부터 학습하는** 내부 Variable
        
    - 사용자가 직접 설정할 수 없으며, 학습 과정의 결과물이다.
        
    - **예**: Linear Regression의 계수(Coefficients), Neural Network의 가중치(Weights)
        
- **Hyperparameter**
    
    - Model의 **학습 과정을 제어하기 위해** 사용자가 직접 설정하는 외부 값
        
    - 최적의 Model 성능을 위해 Tuning 과정이 필요하다.
        
    - **예**: Learning Rate, Epochs 수, Hidden Layer의 수, k-NN의 k 값
        
    - **Tuning 기법**:
        
        - **Grid Search**: 지정된 모든 Hyperparameter 조합 탐색
            
        - **Random Search**: 지정된 범위 내에서 무작위로 조합 탐색
		    
        - **Bayesian Optimization**: 더 유망한 영역을 효율적으로 탐색하는 고급 기법