# 기술이전 명세서

## 제목: 행복·보통·우울 인식을 위한 영상 기반 감정분석 기법

---

## 1. 기술의 개요

본 기술은 영상 데이터에서 획득한 사용자의 얼굴 이미지를 실시간으로 분석하여, 행복(Happy)·보통(Neutral)·우울(Sad) 3가지 감정 상태를 인식 및 분류하는 인공지능 기반 노하우입니다.

**핵심 특징:**
- FACS(Facial Action Coding System) 기반 비침습적 감정 인식
- MediaPipe 얼굴 랜드마크(478개 포인트) 활용
- Action Unit(AU) 분석을 통한 감정 상태 분류
- 딥러닝 CNN 모델과의 앙상블 지원
- 개인정보 보호를 위한 좌표 기반 저장 방식

---

## 2. 핵심 구성 요소

### 2.1 이론적 기반

본 기술은 폴 에크만(Paul Ekman)의 얼굴 움직임 부호화 시스템(Facial Action Coding System, FACS)을 기반으로 합니다.

FACS는 얼굴 근육의 움직임을 Action Unit(AU)이라는 단위로 체계화한 해부학적으로 검증된 시스템으로, 감정 연구의 국제 표준입니다.

### 2.2 사용되는 Action Units

본 기술에서 행복 및 우울 감정 인식을 위해 탐지하는 AU는 다음과 같습니다:

| Action Unit | 영문명 | 설명 | 감정 연관성 |
|------------|--------|------|------------|
| **AU1** | Inner Brow Raiser | 내측 눈썹 올림 | 슬픔, 두려움 |
| **AU4** | Brow Lowerer | 눈썹 찌푸리기 | 슬픔, 분노 |
| **AU6** | Cheek Raiser | 뺨 올리기 | 행복 (진정한 미소) |
| **AU12** | Lip Corner Puller | 입꼬리 올리기 | 행복 (미소) |
| **AU15** | Lip Corner Depressor | 입꼬리 내리기 | 슬픔, 우울 |

### 2.3 감정 분류 로직

탐지된 AU의 조합과 강도를 통해 다음과 같이 감정을 인식합니다:

#### 행복(Happy)
- **주요 AU 조합**: AU6 (뺨 올림) + AU12 (입꼬리 올림)
- **가중치**: AU12 70%, AU6 30%
- **임계값**: 0.3 이상
- **특징**: Duchenne Smile(진정한 미소)를 위해 AU6와 AU12가 함께 활성화

#### 슬픔/우울(Sad)
- **주요 AU 조합**: AU1 (내측 눈썹 올림) + AU4 (눈썹 찌푸림) + AU15 (입꼬리 내림)
- **가중치**: AU15 50%, AU4 25%, AU1 25%
- **임계값**: 0.3 이상
- **특징**: 눈썹의 안쪽 상승과 입꼬리 하강이 동시에 발생

#### 보통(Neutral)
- **조건**: 모든 AU 활성화 강도가 0.15 미만
- **특징**: 표정 근육의 뚜렷한 움직임이 없는 중립 상태

---

## 3. 기술이전 대상

### 3.1 알고리즘 및 학습 모델

#### (1) 얼굴 특징점(Landmark) 추출 알고리즘
- **기술**: MediaPipe Face Mesh
- **추출 포인트**: 478개 얼굴 랜드마크 (3D 좌표)
- **구현 파일**: `src/models/au_extractor.py`
- **특징**:
  - 실시간 처리 가능 (20-30 FPS)
  - 마스크 착용 시에도 작동
  - 다중 얼굴 동시 처리 (최대 10명)

#### (2) FACS Action Unit 탐지 모델
- **측정 방식**: 기하학적 거리 기반 계산
- **구현 파일**: `src/models/au_extractor.py`
- **측정 알고리즘**:
  - AU1: 내측 눈썹과 위 눈꺼풀 간 수직 거리
  - AU4: 눈썹 중앙과 눈꺼풀 간 거리 (역수)
  - AU6: 눈 높이 감소율 (뺨 상승에 의한 눈 좁아짐)
  - AU12: 입꼏리 상승 + 입 너비 증가
  - AU15: 입꼏리 하강 + 입 너비 감소
- **정규화**: 얼굴 크기에 독립적 (눈 간격 기준 정규화)
- **출력**: 0.0 ~ 1.0 범위의 강도 값

#### (3) 감정 상태 분류 모델

방법 A: 규칙 기반 분류기 (Rule-based Classifier)
- **구현 파일**: `src/models/emotion_classifier.py`
- **분류 로직**:
  ```
  Happy_Score = AU12 × 0.7 + AU6 × 0.3
  Sad_Score = AU15 × 0.5 + AU4 × 0.25 + AU1 × 0.25

  if max(Happy_Score, Sad_Score) < 0.15:
      Emotion = Neutral
  else:
      Emotion = argmax(Happy_Score, Sad_Score)
  ```
- **시간적 평활화**: 5프레임 이동평균으로 떨림 방지

방법 B: 머신러닝 기반 분류기 (ML Classifier)
- **구현 파일**: `src/models/ml_emotion_classifier.py`
- **지원 알고리즘**:
  - Random Forest
  - Support Vector Machine (SVM)
  - Multi-Layer Perceptron (MLP)
- **입력 특징**: 5개 AU 값 (au1, au4, au6, au12, au15)
- **학습 방법**: `src/train_emotion_model.py`

방법 C: CNN 기반 직접 분류기 (Deep Learning)
- **구현 파일**: `src/models/cnn_emotion_classifier.py`
- **학습 스크립트**: `src/models/train_cnn.py`
- **지원 아키텍처**:
  - MobileNet V2 (가장 빠름, 14MB)
  - ResNet-18 (높은 정확도, 45MB)
  - EfficientNet-B0 (최고 정확도, 20MB)
- **입력**: 224×224 RGB 얼굴 이미지
- **출력**: 3-class 감정 확률 분포
- **전이 학습**: ImageNet 사전학습 가중치 활용

방법 D: 앙상블 분류기 (Ensemble)
- **구현 파일**: `src/models/ensemble_classifier.py`
- **결합 방식**: AU 기반(60%) + CNN 기반(40%) 가중 평균
- **장점**: 더 안정적이고 강건한 예측

#### (4) 학습된 모델 가중치 파일
- **ML 모델**: `models/emotion_classifier.pkl` (scikit-learn)
- **CNN 모델**: `models/cnn_emotion.pth` (PyTorch)
- **포맷**: 각각 pickle, PyTorch state_dict 형식

---

### 3.2 소스 코드

#### (1) 핵심 모델 구현 소스 코드

```
src/
├── models/
│   ├── face_detector.py          # 얼굴 검출 (MediaPipe BlazeFace)
│   ├── face_tracker.py           # 다중 얼굴 추적 (Centroid + IoU)
│   ├── au_extractor.py           # AU 추출 (Face Mesh + 기하학)
│   ├── au_storage.py             # AU 시계열 데이터 관리
│   ├── emotion_classifier.py     # 규칙 기반 감정 분류
│   ├── ml_emotion_classifier.py  # ML 기반 감정 분류
│   ├── cnn_emotion_classifier.py # CNN 기반 감정 분류
│   ├── ensemble_classifier.py    # 앙상블 분류기
│   ├── train_cnn.py              # CNN 학습 스크립트
│   └── emotion_analyzer.py       # 통합 감정 분석 시스템
│
└── utils/
    ├── config_loader.py          # 설정 파일 로더
    ├── landmark_storage.py       # 랜드마크 저장 (개인정보 보호)
    ├── landmark_viewer.py        # 저장 데이터 재생 뷰어
    ├── label_faces.py            # 얼굴 이미지 라벨링 도구
    └── data_labeling_tool.py     # AU 데이터 라벨링 도구
```

#### (2) 실행 프로그램
- `main.py`: 실시간 감정 분석 메인 프로그램
- `view_landmarks.py`: 저장된 랜드마크 재생 프로그램
- `extract_faces.py`: 사진에서 얼굴 추출 도구

#### (3) 관련 라이브러리 및 프레임워크 정보

**필수 의존성** (requirements.txt):
```
mediapipe>=0.10.0       # 얼굴 검출 및 랜드마크 추출
opencv-python>=4.8.0    # 영상 처리
numpy>=1.24.0           # 수치 계산
pyyaml>=6.0             # 설정 파일 로더
```

**선택적 의존성** (머신러닝 사용 시):
```
scikit-learn>=1.3.0     # ML 분류기 (Random Forest, SVM, MLP)
joblib>=1.3.0           # 모델 직렬화
torch>=2.0.0            # CNN 학습 및 추론
torchvision>=0.15.0     # CNN 전이 학습 모델
Pillow>=9.0.0           # 이미지 전처리
```

#### (4) 실행 환경 구축 가이드

**시스템 요구사항**:
- Python 3.8 이상
- Windows / macOS / Linux
- 웹캠 (실시간 분석 시)
- GPU (선택사항, CNN 학습 가속)

**설치 방법**:
```bash
# 1. Python 패키지 설치
pip install -r requirements.txt

# 2. (선택) GPU 가속을 위한 PyTorch CUDA 버전 설치
# CUDA 12.1 (RTX 40 시리즈)
pip install torch torchvision --index-url https://download.pytorch.org/whl/cu121

# CUDA 11.8 (RTX 30 시리즈)
pip install torch torchvision --index-url https://download.pytorch.org/whl/cu118
```

**실행 방법**:
```bash
# 실시간 감정 분석
python main.py

# CNN 모델 학습 (라벨링된 데이터 필요)
python -m src.models.train_cnn --data_dir data/labeled_faces --num_epochs 20

# 저장된 데이터 재생
python view_landmarks.py
```

---

### 3.3 기술 문서

#### (1) 시스템 아키텍처

```
[입력 단계]          [처리 단계]           [분석 단계]         [출력 단계]
웹캠/영상            얼굴 검출             AU 추출             감정 분류
    ↓                  ↓                     ↓                   ↓
프레임 입력    →   BlazeFace      →    Face Mesh      →   Classifier    →   결과 저장
(30 FPS)          (다중 얼굴)         (478 landmarks)     (AU → Emotion)    (JSON/CSV)
                      ↓
                  얼굴 추적
                  (Centroid + IoU)
```

**단계별 설명**:

1. 얼굴 검출 (Face Detection)
   - MediaPipe BlazeFace 사용
   - 다중 얼굴 동시 검출 (최대 10명)
   - 5m 거리까지 감지 가능
   - 15-30 FPS 처리 속도

2. 얼굴 추적 (Face Tracking)
   - Centroid + IoU(Intersection over Union) 기반
   - 프레임 간 ID 유지
   - 30프레임(1초) 안정성 검증
   - 최대 30프레임 일시 소실 허용

3. Action Unit 추출 (AU Extraction)
   - MediaPipe Face Mesh로 478개 랜드마크 추출
   - 기하학적 거리 계산
   - 얼굴 크기 정규화 (눈 간격 기준)
   - AU 강도 0.0~1.0 범위로 정량화

4. 감정 분류 (Emotion Classification)
   - 규칙 기반 / ML / CNN / 앙상블 중 선택
   - 시간적 평활화 (5프레임 이동평균)
   - 감정 강도 0-100% 출력

5. 데이터 저장 (Data Recording)
   - JSON: 478개 랜드마크 좌표 + 메타데이터
   - CSV: AU 시계열 데이터 + 감정 결과
   - InfluxDB 라인 프로토콜 지원

#### (2) 모델 학습 방법

**CNN 모델 학습 프로세스**:

```
[1단계] 데이터 수집
  - 웹캠으로 녹화 또는 공개 데이터셋 활용
  - 권장 데이터량: 각 감정당 300~1000장

[2단계] 얼굴 이미지 라벨링
  python -m src.utils.label_faces --input_dir data/faces_to_label

  폴더 구조:
  data/labeled_faces/
  ├── Neutral/
  ├── Happy/
  └── Sad/

[3단계] CNN 학습
  python -m src.models.train_cnn \
    --data_dir data/labeled_faces \
    --model_type mobilenet_v2 \
    --num_epochs 20 \
    --batch_size 32 \
    --device auto

[4단계] 모델 활성화
  config.yaml에서 use_cnn_classifier: true 설정
```

**하이퍼파라미터**:
- Learning Rate: 0.001 (Adam optimizer)
- Batch Size: 32 (GPU) / 16 (CPU)
- Epochs: 20-50
- Validation Split: 20%
- Data Augmentation: Horizontal Flip, Rotation, Color Jitter

#### (3) 설정 파일 (config.yaml)

시스템의 모든 동작 파라미터는 `config.yaml`에서 제어 가능:

```yaml
# 얼굴 검출
face_detection:
  min_detection_confidence: 0.5

# AU 추출
au_extraction:
  min_detection_confidence: 0.5
  min_tracking_confidence: 0.5

# 감정 분류
emotion_classification:
  use_ml_classifier: false      # ML 분류기 사용 여부
  use_cnn_classifier: false     # CNN 분류기 사용 여부
  use_ensemble: false           # 앙상블 모드
  smoothing_window: 5           # 시간적 평활화 윈도우

  # CNN 설정
  cnn_model_path: "models/cnn_emotion.pth"
  cnn_model_type: "mobilenet_v2"
  cnn_input_size: 224

# 녹화
recording:
  output_dir: "data/recordings"
  sample_rate: 10  # N프레임마다 저장 (30fps → 3fps)
```

---

## 4. 기술의 성능 및 사양

### 4.1 처리 성능

| 구성 요소 | 성능 (FPS) | 하드웨어 |
|----------|-----------|---------|
| 얼굴 검출 | 15-30 FPS | CPU (Intel i7) |
| AU 추출 (Simple 모드) | 20-30 FPS | CPU (Intel i7) |
| CNN 추론 (MobileNetV2) | 25-30 FPS | GPU (RTX 3080) |
| CNN 추론 (MobileNetV2) | 10-15 FPS | CPU (Intel i7) |
| 전체 파이프라인 | 15-25 FPS | CPU + GPU |

실시간 분석 시 초당 처리 프레임(FPS): 15-25 FPS 이상
**권장 하드웨어**: Intel i7 이상 CPU, NVIDIA RTX 20/30/40 시리즈 GPU (선택)

### 4.2 감정 분류 정확도

| 분류 방식 | 학습 데이터 | 검증 정확도 | 특징 |
|----------|-----------|----------|------|
| 규칙 기반 | 없음 | ~70-75% | FACS 이론 기반, 학습 불필요 |
| ML (Random Forest) | AU 라벨링 | ~75-85% | AU 데이터 필요 |
| CNN (MobileNetV2) | 900장 | ~80-90% | 얼굴 이미지 학습 |
| CNN (ResNet-18) | 3000장 | ~85-95% | 대규모 데이터 권장 |
| 앙상블 (AU+CNN) | 혼합 | ~85-92% | 가장 안정적 |

*정확도는 데이터셋 품질 및 촬영 환경에 따라 달라질 수 있습니다.

### 4.3 시스템 사양

**입력**:
- 해상도: 640×480 이상 권장
- 프레임률: 30 FPS
- 포맷: 웹캠 실시간 스트림 또는 동영상 파일

**출력**:
- 감정 라벨: Happy / Neutral / Sad
- 감정 강도: 0-100% (0.0-1.0)
- AU 값: 5개 AU × 0.0-1.0 범위
- 프레임별 478개 랜드마크 좌표 (선택적 저장)

**저장 포맷**:
- JSON: 프레임별 랜드마크 + 메타데이터
- CSV: 시계열 AU 데이터 + 감정 결과
- InfluxDB 라인 프로토콜: 시계열 DB 직접 import

### 4.4 CNN 학습 성능

| GPU | 학습 시간 (900장, 20 에폭) |
|-----|--------------------------|
| RTX 4090 | ~3분 |
| RTX 3080 | ~5분 |
| RTX 3060 | ~8분 |
| CPU (Intel i7) | ~60분 |

---

## 5. 개인정보 보호 조치

본 기술은 다음과 같은 개인정보 보호 원칙을 적용합니다:

1. **이미지 미저장**: 실제 얼굴 이미지를 저장하지 않음
2. **좌표 정규화**: 얼굴 영역 내 상대 좌표(0-1)로 변환하여 저장
3. **재현 가능성**: 저장된 좌표로 랜드마크 시각화 재생성 가능
4. **익명성**: 개인 식별이 불가능한 기하학적 특징만 저장

**저장 데이터 예시** (landmarks_YYYYMMDD_HHMMSS.json):
```json
{
  "timestamp": "2025-11-03T10:30:45.123",
  "face_id": 0,
  "normalized_landmarks": [[0.482, 0.236, -0.012], ...],  // 478개
  "aus": {"au1": 0.12, "au4": 0.08, "au6": 0.67, "au12": 0.73, "au15": 0.05},
  "emotion": "Happy",
  "confidence": 0.85
}
```

실제 이미지는 저장하지 않으며, 상대 좌표만 저장하여 개인을 식별할 수 없습니다.

---

## 6. 확장 가능성

### 6.1 추가 감정 지원

`config.yaml`에서 새로운 감정 정의를 추가하여 시스템 확장 가능:

```yaml
emotion_classification:
  emotion_definitions:
    Angry:        # 분노
      enabled: true
      au_rules:
        primary:
          au4: 0.4    # Brow Lowerer
          au7: 0.3    # Lid Tightener
        threshold: 0.4

    Surprised:    # 놀람
      enabled: true
      au_rules:
        primary:
          au1: 0.3    # Inner Brow Raiser
          au2: 0.3    # Outer Brow Raiser
          au5: 0.2    # Upper Lid Raiser
        threshold: 0.4
```

### 6.2 추가 Action Unit 구현

`au_extractor.py`에 새로운 AU 측정 메서드를 추가하여 확장 가능:
- AU2 (Outer Brow Raiser)
- AU5 (Upper Lid Raiser)
- AU7 (Lid Tightener)
- AU9 (Nose Wrinkler)
- AU10 (Upper Lip Raiser)
- AU17 (Chin Raiser)
- AU20 (Lip Stretcher)
- AU23 (Lip Tightener)
- AU25 (Lips Part)
- AU26 (Jaw Drop)

---

## 7. 활용 분야

1. **정신건강 모니터링**: 우울증, 불안 장애 조기 발견
2. **고객 만족도 분석**: 서비스 이용 중 감정 변화 추적
3. **교육 분야**: 학습자의 이해도 및 참여도 평가
4. **게임 및 엔터테인먼트**: 사용자 감정 기반 콘텐츠 조정
5. **인적자원 관리**: 면접 및 직원 만족도 평가
6. **텔레헬스**: 원격 진료 시 환자 상태 평가
7. **시장 조사**: 제품 반응 테스트

---

## 8. 기술의 장점

1. **비침습적**: 카메라만으로 측정 가능, 센서 부착 불필요
2. **실시간 처리**: 30FPS 영상에서 15-25 FPS 실시간 분석
3. **다중 피험자**: 최대 10명 동시 분석 가능
4. **개인정보 보호**: 이미지가 아닌 좌표만 저장
5. **확장 가능**: 새로운 감정 및 AU 추가 용이
6. **검증된 이론**: FACS 기반 과학적 접근
7. **경량화**: CPU만으로도 실시간 처리 가능
8. **플랫폼 독립적**: Windows, macOS, Linux 지원

---

## 9. 제한사항 및 개선 방향

### 현재 제한사항
1. 극단적 조명 조건에서 성능 저하 가능
2. 얼굴이 45도 이상 회전하면 랜드마크 추출 어려움
3. 안경, 마스크 착용 시 일부 AU 측정 제한

### 개선 방향
1. 적외선 카메라 지원으로 조명 독립성 확보
2. 3D 얼굴 모델링으로 회전 강건성 향상
3. 다중 카메라 융합으로 정확도 개선
4. 더 많은 감정 카테고리 확장 (6-7가지 기본 감정)
5. 시계열 분석을 통한 감정 변화 추적

---

## 10. 참고 문헌

1. Ekman, P., & Friesen, W. V. (1978). *Facial Action Coding System: A Technique for the Measurement of Facial Movement*. Consulting Psychologists Press.

2. Bazarevsky, V., Kartynnik, Y., Vakunov, A., Raveendran, K., & Grundmann, M. (2019). *BlazeFace: Sub-millisecond Neural Face Detection on Mobile GPUs*. arXiv:1907.05047

3. Lugaresi, C., et al. (2019). *MediaPipe: A Framework for Building Perception Pipelines*. arXiv:1906.08172

4. Ekman, P., & Friesen, W. V. (1971). *Constants across cultures in the face and emotion*. Journal of Personality and Social Psychology, 17(2), 124-129.

5. Cohn, J. F., Ambadar, Z., & Ekman, P. (2007). *Observer-based measurement of facial expression with the Facial Action Coding System*. The handbook of emotion elicitation and assessment, 203-221.

---

## 11. 기술 이전 체크리스트

### 소프트웨어
- [ ] 전체 소스 코드 (src/ 디렉토리)
- [ ] 실행 프로그램 (main.py, view_landmarks.py, extract_faces.py)
- [ ] 학습 스크립트 (train_cnn.py, train_emotion_model.py)
- [ ] 설정 파일 (config.yaml)
- [ ] 의존성 명세 (requirements.txt)

### 문서
- [ ] 기술 명세서 (본 문서)
- [ ] README.md (사용자 가이드)
- [ ] 시스템 아키텍처 다이어그램
- [ ] API 문서 (Python API 사용법)

### 모델 파일 (선택적)
- [ ] 사전학습 CNN 모델 (models/cnn_emotion.pth)
- [ ] 사전학습 ML 모델 (models/emotion_classifier.pkl)

### 데이터 샘플 (선택적)
- [ ] 샘플 라벨링 데이터 (data/labeled_faces/)
- [ ] 샘플 녹화 데이터 (data/recordings/)

### 환경 구축 지원
- [ ] 설치 가이드
- [ ] 실행 환경 테스트 스크립트
- [ ] 문제 해결 가이드

---

## 12. 기술 지원 및 문의

본 기술은 **경북대학교**가 보유하고 있으며, **주식회사 와이디자인랩**을 위해 개발되었습니다.

**기술 지원**:
- 시스템 통합 및 커스터마이징 지원
- 추가 감정 카테고리 개발
- 특정 응용 분야 최적화
- 학습 데이터 수집 및 라벨링 지원

**개발 환경**: Python 3.8+, MediaPipe, OpenCV, PyTorch
**라이선스**: 기술이전 계약에 따름
**개발 일자**: 2025년 11월

---

## 부록 A: 프로젝트 디렉토리 구조

```
HEAL/
├── config.yaml                      # 시스템 설정 파일
├── requirements.txt                 # Python 의존성
├── README.md                        # 사용자 가이드
├── 기술이전_명세서.md               # 본 문서
│
├── main.py                         # 메인 실행 프로그램
├── view_landmarks.py               # 랜드마크 뷰어
├── extract_faces.py                # 얼굴 추출 도구
│
├── src/
│   ├── models/
│   │   ├── face_detector.py        # 얼굴 검출
│   │   ├── face_tracker.py         # 얼굴 추적
│   │   ├── au_extractor.py         # AU 추출
│   │   ├── au_storage.py           # AU 저장소
│   │   ├── emotion_classifier.py   # 규칙 기반 분류
│   │   ├── ml_emotion_classifier.py # ML 분류
│   │   ├── cnn_emotion_classifier.py # CNN 분류
│   │   ├── ensemble_classifier.py  # 앙상블 분류
│   │   ├── train_cnn.py            # CNN 학습
│   │   └── emotion_analyzer.py     # 통합 시스템
│   │
│   └── utils/
│       ├── config_loader.py        # 설정 로더
│       ├── landmark_storage.py     # 랜드마크 저장
│       ├── landmark_viewer.py      # 랜드마크 뷰어
│       ├── label_faces.py          # 라벨링 도구
│       └── data_labeling_tool.py   # 데이터 라벨링
│
├── models/                         # 학습된 모델
│   ├── emotion_classifier.pkl      # ML 모델
│   └── cnn_emotion.pth            # CNN 모델
│
└── data/
    ├── labeled_faces/              # 라벨링된 얼굴
    │   ├── Neutral/
    │   ├── Happy/
    │   └── Sad/
    └── recordings/                 # 녹화 데이터
        ├── landmarks_*.json
        ├── timeseries_*.csv
        └── influxdb_*.txt
```

---

## 부록 B: 주요 API 사용 예제

### Python API 사용

```python
from src.models.emotion_analyzer import EmotionAnalyzer
import cv2

# 감정 분석기 초기화
analyzer = EmotionAnalyzer(
    enable_tracking=True,
    show_landmarks=True,
    landmark_mode='simple'
)

# 웹캠 열기
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # 프레임 분석
    results = analyzer.analyze(frame)
    # results = {
    #     face_id: {
    #         'bbox': [x1, y1, x2, y2],
    #         'aus': {'au1': 0.12, 'au4': 0.08, ...},
    #         'emotion': 'Happy',
    #         'confidence': 0.85
    #     }
    # }

    # 결과 시각화
    display_frame = analyzer.visualize(frame, results)
    cv2.imshow('Emotion Analysis', display_frame)

    # 통계 조회 (최근 5초)
    for face_id in results.keys():
        stats = analyzer.get_statistics(face_id, window_seconds=5.0)
        print(f"Face {face_id}: {stats['emotion_distribution']}")

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
```

---

**문서 작성일**: 2025년 11월 3일
**문서 버전**: 1.0
**기술 제공**: 경북대학교 소프트웨어 테스팅 연구실
**기술 이전 대상**: 주식회사 와이디자인랩
