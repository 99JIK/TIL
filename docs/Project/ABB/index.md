---
description: ABB 융합전공 프로젝트 모음
---

# ABB

ABB 융합전공 관련 프로젝트 모음

- **GitHub**: https://github.com/99JIK/ABB
- **언어**: Python
- **최종 업데이트**: 2026-02-12

---

## AU_BASED_EMOTION_ANALYSIS

MediaPipe Face Mesh 478개 랜드마크에서 15종 Action Unit을 기하학적으로 추출하고, Dense 모델로 3종 감정(Happy / Depressed / Neutral)을 실시간 분류하는 시스템.

### 주요 기능

- 실시간 웹캠 감정 분류 (최대 30명 동시 인식)
- IoU 기반 다중 얼굴 추적, 메인 얼굴 자동 선택
- 감정별 색상 UI (녹색 / 보라 / 회색)
- 헤드리스 모드 (API Only, 리소스 절약)
- FastAPI REST + WebSocket 스트리밍
- 트리거 시스템 (감정 변화, AU 임계치, 지속 시간)

### 기술 스택

| 항목 | 내용 |
|------|------|
| 얼굴 분석 | MediaPipe Face Mesh |
| 분류 모델 | TensorFlow Dense |
| API 서버 | FastAPI |

### Quick Start

```bash
cd AU_BASED_EMOTION_ANALYSIS
pip install -r requirements.txt
python realtime.py
```
