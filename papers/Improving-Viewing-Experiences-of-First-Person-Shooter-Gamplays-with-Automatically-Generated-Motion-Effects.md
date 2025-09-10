---
title: "Improving Viewing Experiences of First-Person Shooter Gameplays with Automatically-Generated Motion Effects"
date: "2021-05-08"
description: "컴퓨터 비전과 딥러닝을 이용해 FPS 게임 영상에서 모션 효과를 자동 생성하여 시청 경험을 향상시키는 방법을 제안한 논문입니다."
keywords: ["First Person Shooter", "Gameplay", "Viewing Experience", "Motion Effect", "Automatic Generation", "Motion Chair", "Deep Learning", "Computer Vision", "Haptics", "User Study", "4D Experience", "Machine Learning"]
tags: ["First Person Shooter", "Gameplay", "Viewing Experience", "Motion Effect", "Automatic Generation", "Motion Chair", "Deep Learning", "Computer Vision", "Haptics", "User Study", "4D Experience", "Machine Learning"]
authors: ["gyeore_yun", "sangyun_han", "hyoseung_lee", "seungmoon_choi"]
---

# Improving Viewing Experiences of First-Person Shooter Gameplays with Automatically-Generated Motion Effects

## 논문 정보

- **제목 (Title)**: Improving Viewing Experiences of First-Person Shooter Gameplays with Automatically-Generated Motion Effects
- **저자 (Authors) 및 소속 (Affiliations)**: 
    - 윤겨레 (포항공과대학교)
    - 한상윤 (포항공과대학교)
    - 이효승 (포항공과대학교)
    - 최승문 (포항공과대학교)
- **학회 또는 저널명 (Conference or Journal Name)**: CHI Conference on Human Factors in Computing Systems (CHI '21)
- **제출일 또는 발행일 (Submission or Publication Date)**: 2021년 5월 8일
- **키워드 (Keywords)**: First Person Shooter, Gameplay, Viewing Experience, Motion Effect, Automatic Generation, Motion Chair, Deep Learning, Computer Vision, Haptics, User Study, 4D Experience, Machine Learning
- **초록 (Abstract)**:
    최근 수백만 명의 사람들이 e스포츠 경기장이나 집에서 비디오 게임 플레이를 시청하는 것을 즐깁니다. 본 연구는 다감각 자극을 제시하여 게임 플레이 관람객 또는 시청자 경험을 향상시키는 방법을 모색합니다. 모션 체어를 사용하여, 1인칭 슈팅(FPS) 게임 플레이를 시청하는 사람들에게 시청각 스트림으로부터 자동 생성된 모션 효과를 제공합니다. 이 모션 효과는 게임 캐릭터의 움직임과 총기 발사 액션을 표현합니다. 우리는 컴퓨터 비전 기술과 딥러닝을 사용하여 개발된 이러한 모션 효과의 계산 알고리즘을 설명합니다. 사용자 연구를 통해, 모션 효과를 제공하는 우리의 방법이 FPS 게임 플레이의 시청 경험을 크게 향상시킨다는 것을 입증합니다. 이 논문의 기여는 FPS 게임을 위해 통합된 모션 합성 알고리즘과 다감각 게임 플레이 경험의 이점에 대한 실험적 증거에 있습니다.
- **주요 연구 내용 (Main Research Content/Methodology)**:
    - **캐릭터 움직임 모션 효과 (ME-MOV) 생성**: 비디오 시퀀스에서 컴퓨터 비전 기술(Optical Flow, RANSAC 등)을 이용해 1인칭 시점의 카메라 모션을 추정하고, 이를 기반으로 캐릭터의 움직임(이동, 회전)을 표현하는 모션 효과를 생성함.
    - **총기 격발 모션 효과 (ME-GUN) 생성**: 오디오 신호에서 딥러닝 모델(DNN)을 이용해 플레이어 캐릭터의 총기 격발음을 탐지하고, 총기 반동을 모방하여 사전에 설계된 프로파일을 통해 역동적인 모션 효과를 생성함.
    - **실시간 처리를 위한 성능 최적화**: GPGPU 가속을 이용한 Optical Flow 추정과 RANSAC 파라미터 조절 등을 통해 캐릭터 움직임 모션 생성 알고리즘의 연산 속도를 비디오 게임 재생에 적합하도록 실시간에 가깝게 향상시킴.
    - **사용자 경험 평가**: 24명의 참가자를 대상으로 네 가지 조건(모션 없음, ME-MOV, ME-GUN, 둘을 결합한 ME-COM)에서 FPS 게임 플레이 영상을 시청하게 하여 집중도, 피로도, 즐거움, 몰입감 등을 평가하는 사용자 연구를 수행함.
- **주요 결과 및 결론 (Key Findings and Conclusion)**:
    - **즐거움 및 몰입감 향상**: 제안된 모든 모션 효과(ME-MOV, ME-GUN, ME-COM)는 모션이 없는 경우(NONE)에 비해 시청자의 즐거움과 몰입감을 통계적으로 유의미하게 향상시킴.
    - **결합 효과(ME-COM)의 우수성**: 움직임과 총기 격발 효과를 결합한 ME-COM은 단일 효과만 제공했을 때보다 몰입감, 조화로움, 선호도 측면에서 가장 높은 평가를 받으며 시너지 효과를 보임.
    - **집중도 유지 및 피로도 증가**: 모션 효과는 시청자의 게임 플레이 이해나 집중을 방해하지 않았으나, 없는 경우보다 더 높은 수준의 피로도를 유발하는 것으로 나타남.
    - **알고리즘의 효과성 입증**: 사용자 연구를 통해, 제안된 자동 모션 생성 알고리즘이 FPS 게임 플레이 시청 경험을 전반적으로 개선할 수 있음을 실험적으로 입증함.
- **기여점 (Contributions)**:
    - **FPS 게임을 위한 통합 모션 합성 알고리즘 제안**: FPS 게임의 핵심 요소인 캐릭터 움직임과 총기 격발을 위한 두 가지 모션 효과 자동 생성 알고리즘을 설계하고 통합함.
    - **다감각 게임 플레이 경험의 이점에 대한 실험적 증거 제시**: 사용자 연구를 통해 자동 생성된 모션 효과가 FPS 게임 플레이 시청 경험의 즐거움과 몰입감을 향상시킨다는 실증적 증거를 제공함.
    - **실시간 처리가 가능한 모션 효과 생성 파이프라인**: 기존 연구를 개선하여 비디오 게임 재생에 적합하도록 실시간에 가까운 성능으로 모션 효과를 생성하는 방법을 구현하고 그 성능을 입증함.
- **DOI (Digital Object Identifier)**: 10.1145/3411764.3445358
- **기타 식별 가능한 정보**:
    - **연구 분야**: Human-Computer Interaction (HCI), 4D 경험, 다감각 미디어(Mulsemedia)
    - **대상**: 1인칭 슈팅(FPS) 게임 플레이 영상 시청자
    - **데이터셋**: Overwatch 게임 플레이 영상 (직접 녹화 및 YouTube), Unreal Engine으로 제작한 FPS 게임 영상

<!-- truncate -->

## 요약

### 서론 (Introduction)

비디오 게임을 플레이하는 것만큼 다른 사람의 플레이를 시청하는 e스포츠 관람 문화가 전 세계적으로 큰 인기를 얻고 있다. 동시에 모션, 진동, 바람 등의 물리적 효과를 제공하는 4D 플랫폼(예: 4D 영화관)의 사용이 증가하고 있다. 이 연구는 두 트렌드를 결합하여, e스포츠 시청 경험을 향상시키고자 한다. 게임 플레이에서 나오는 시청각 스트림을 실시간으로 분석하여 자동으로 모션 효과를 생성하는 접근법을 제안한다. 이는 게임 개발사가 직접 4D 효과를 설계해야 하는 수동 방식보다 확장성과 경제성 측면에서 큰 이점을 가진다. 본 연구에서는 특히 FPS(1인칭 슈팅) 게임에 초점을 맞춰, 캐릭터의 **움직임**과 **총기 격발**이라는 두 가지 핵심 행동을 강조하는 모션 효과가 시청자의 몰입 경험을 향상시킬 것이라는 가설을 세우고 이를 검증한다.

### 본론 (Main Content)

#### 캐릭터 움직임 모션 효과 (ME-MOV) 생성

캐릭터의 움직임을 표현하는 모션 효과(ME-MOV)는 게임 화면의 시각적 변화, 즉 1인칭 카메라의 움직임을 분석하여 생성된다. 이 연구는 기존의 카메라 모션 추정 알고리즘을 FPS 게임 환경에 맞게 최적화했다.

알고리즘의 주요 단계는 다음과 같다.
1.  **Optical Flow 추정**: 연속된 두 비디오 프레임 간의 픽셀 움직임을 계산한다. 계산 병목 현상을 해결하기 위해 GPGPU 가속이 가능한 Nvidia Optical Flow SDK를 사용하여 처리 속도를 크게 향상시켰다.
2.  **특징점 추출 및 아웃라이어 제거**: FAST 알고리즘으로 영상의 특징점(코너)을 빠르게 추출하고, RANSAC 기법을 사용하여 배경의 움직임과 관련 없는 객체(아웃라이어)를 제거함으로써 순수한 카메라의 움직임만을 분리한다.
3.  **모션 커맨드 변환**: 추정된 카메라의 선형 가속도와 각속도를 Washout 필터를 통해 3-DoF(Roll, Pitch, Heave) 모션 체어가 실행할 수 있는 명령으로 변환한다.

이러한 최적화를 통해 일부 테스트 영상에서 30fps 이상의 실시간에 가까운 처리 성능을 달성했다.

#### 총기 격발 모션 효과 (ME-GUN) 생성

총기 격발을 표현하는 모션 효과(ME-GUN)는 게임의 오디오 스트림을 분석하여 생성된다. 특정 캐릭터(본 연구에서는 Overwatch의 '맥크리')의 총소리를 정확하게 탐지하기 위해 딥러닝 모델(DNN)을 사용했다.

알고리즘의 주요 단계는 다음과 같다.
1.  **데이터 수집 및 레이블링**: YouTube에서 수집한 게임 플레이 영상에서 총기 발사 시점을 수동으로 레이블링하여 총소리와 비-총소리 데이터셋을 구축했다.
2.  **DNN 모델 학습 및 탐지**: 구축된 데이터셋으로 DNN 분류기를 학습시켰다. 오탐지를 줄이고 정확한 시점에 효과를 제공하기 위해, 소프트맥스 함수의 기본 임계값(0.5) 대신 매우 높은 임계값(0.995)을 사용했다. 이 모델은 기존의 음향 심리 특징 기반 탐지기보다 높은 정확도를 보였다.
3.  **모션 프로파일 렌더링**: 총소리가 탐지되면, 사전에 설계된 모션 프로파일이 실행된다. 이 프로파일은 총의 반동을 모방하며, 주로 의자를 뒤로 젖히는 **Pitch** 동작으로 구성된다. 연속 발사 시에는 동작이 겹치면서 더 강하고 다채로운 느낌을 주기 위해 무작위적인 **Roll** 동작이 추가된다.

#### 사용자 연구 (User Study)

제안된 모션 효과의 효용성을 검증하기 위해 24명의 참가자와 함께 사용자 연구를 진행했다. 참가자들은 1분 길이의 Overwatch 플레이 영상을 네 가지 조건 하에 시청했다.
-   **NONE**: 모션 효과 없음 (기준선)
-   **ME-MOV**: 캐릭터 움직임 효과만 제공
-   **ME-GUN**: 총기 격발 효과만 제공
-   **ME-COM**: 두 효과를 결합하여 제공

연구 결과, 모션 효과가 제공된 모든 조건(ME-MOV, ME-GUN, ME-COM)은 기준선(NONE)에 비해 **즐거움(Enjoyment)**과 **몰입감(Immersion)**을 유의미하게 향상시켰다. 특히 두 효과를 결합한 **ME-COM** 조건이 몰입감, 영상과의 조화(Harmony), 그리고 전반적인 **선호도(Preference)**에서 가장 높은 점수를 받아 시너지 효과가 있음을 확인했다. 한편, 모션 효과는 시청자의 게임 상황 이해나 **집중(Concentration)**에는 영향을 미치지 않았지만, 더 높은 **피로도(Fatigue)**를 유발하는 것으로 나타났다.

### 결론 (Conclusion)

이 연구는 FPS 게임 플레이의 시청각 스트림으로부터 캐릭터의 움직임과 총기 격발을 표현하는 모션 효과를 자동으로 생성하는 두 가지 알고리즘을 성공적으로 제안하고 구현했다. 사용자 연구를 통해, 제안된 모션 효과가 시청자의 즐거움과 몰입감을 크게 향상시키며, 특히 두 효과를 결합했을 때 가장 긍정적인 경험을 제공한다는 실증적인 증거를 확보했다. 이는 수동 제작의 부담 없이 다양한 게임 콘텐츠에 적용 가능한 4D 시청 경험을 제공할 수 있는 가능성을 열었다. 향후 연구로는 다른 게임 캐릭터와 다양한 게임 내 이벤트(점프, 피격 등)에 대한 모션 효과를 추가하고, 장시간 시청 시의 피로도 문제를 해결하는 방향을 제시했다. 이 연구의 기여는 FPS 게임에 특화된 통합 모션 합성 알고리즘과 다감각적 경험의 이점을 실험적으로 검증한 데에 있다.