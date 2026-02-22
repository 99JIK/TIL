---
description: AH! 소리 나게 쉬운 알고리즘 챌린지 플랫폼
---

# AHgorithm

**AH!** 소리 나게 쉬운 알고리즘 챌린지, **AHgorithm**.

Altruistic Hive 스터디 그룹을 위한 알고리즘 학습 챌린지 플랫폼.  
Baekjoon Online Judge 문제를 순차적으로 풀고, 팀원 간 학습 통계를 비교할 수 있다.

- **GitHub**: https://github.com/99JIK/AHgorithm
- **언어**: HTML / JavaScript
- **소속**: Altruistic Hive
- **최종 업데이트**: 2025-06-29

---

## 주요 기능

- **순차 문제 풀이**: 사용자별 진행 상태 추적, 순서대로 다음 문제 제시
- **힌트 시스템**: 카테고리, 문제 설명, 추천 검색 키워드 제공
- **포기 관리**: 포기한 문제 목록 저장 및 재도전 기능
- **통계 비교**: 전체 유저 평균 또는 특정 유저와 풀이 기록 비교
- **서약 기반 회원가입**: 부정행위 방지를 위한 타이핑 서약 시스템

## 기술 스택

| 항목 | 내용 |
|------|------|
| 프론트엔드 | HTML, Tailwind CSS, Vanilla JavaScript |
| 백엔드 | Google Apps Script (Spreadsheet DB) |
| 문제 출처 | Baekjoon Online Judge |
| 배포 | GitHub Pages |

## 아키텍처

```
index.html (SPA)
  └── Google Apps Script API
        └── Google Spreadsheet (사용자 / 문제 / 풀이 기록)
```

- 단일 HTML 파일로 구성된 SPA(Single Page Application)
- Google Spreadsheet를 데이터베이스로 활용, Apps Script로 REST API 제공
- 별도 서버 없이 완전히 서버리스로 동작

## 화면 구성

| 화면 | 설명 |
|------|------|
| 로그인 / 회원가입 | 서약 타이핑 포함 |
| 순차 풀이 | 다음 문제 카드, 힌트, 풀이 시작/완료/포기 |
| 포기한 문제 | 재도전 목록 |
| 통계 비교 | 나 vs 전체 유저 / 특정 유저 비교 |
