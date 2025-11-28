# Raspberry Pi 5 기반 커스텀 sLM 배포 절차
## Raspberry Pi 5 환경 설정
### 1. OS bit 수 확인 및 업데이트
Ollama는 64-bit OS에서 정상 작동하므로 OS 버전 확인
```bash
uname -m
```
패키지 리스트 업데이트 및 업그레이드
```bash
sudo apt update && sudo apt ugrade
```
### 2. Ollama 설치
Ollama 설치 스크립트 실행
```bash
curl -fsSL https://ollama.com/install.sh | sh
```
### 3. 서비스 상태 확인

## PC에서 Raspberry Pi 5로 학습된 모델 전송
## Modelfile 작성 및 Ollama 모델 빌드
