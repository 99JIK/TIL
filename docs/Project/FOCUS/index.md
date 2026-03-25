---
description: Facial Observation & Concentration Understanding System
---

# FOCUS

**F**acial **O**bservation & **C**oncentration **U**nderstanding **S**ystem

웹캠을 통해 사용자의 얼굴을 실시간으로 분석하여 학습 집중도를 측정하는 웹 애플리케이션.

- **GitHub**: https://github.com/99JIK/FOCUS_KNU_2025_COMP0738
- **언어**: JavaScript
- **소속**: 경북대학교 2025_COMP0738_Team6
- **최종 업데이트**: 2026-02-04

---

## 주요 기능

- **실시간 집중도 측정**: 얼굴 인식을 통한 집중도 점수 산출
- **3가지 학습 모드**:
  - 일반 모드: 집중도 측정만 진행
  - 비간섭 모드: 집중도 저하 시 부드러운 팝업 알림
  - 간섭 모드: 집중도 저하 시 경고음과 함께 자동 일시정지
- **퀴즈 시스템**: 영상 시청 후 이해도 측정
- **설문조사**: UX Engagement 및 인지 부하(Cognitive Load) 측정
- **결과 리포트**: 학습 결과를 이메일로 전송

## 집중도 측정 방식

Google MediaPipe Face Landmarker를 활용하여 다음 지표를 실시간 분석:

- 시선(Gaze) 방향
- 머리 방향 (Yaw, Pitch, Roll)
- 눈 깜빡임(EAR)
- 입 벌림(MAR)
- 표정 변화

캘리브레이션: 영상 시청 전 3초간 정면 응시로 기준 상태 측정

## 기술 스택

| 항목 | 내용 |
|------|------|
| 얼굴 분석 | Google MediaPipe Face Landmarker |
| 프론트엔드 | JavaScript |
| 집중도 알고리즘 | Gaze + Head Pose + EAR + MAR 복합 지표 |
