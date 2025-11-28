# Raspberry Pi 5 기반 커스텀 sLM 배포 절차
## Raspberry Pi 5 설치 및 실행
[Raspberry Pi Imager](https://www.raspberrypi.com/software/) 실행
![](img/Pasted%20image%2020251128170221.png)
64-bit 선택
![](img/Pasted%20image%2020251128170332.png)
설치할 저장소 선택(Micro SD card)
![](img/Pasted%20image%2020251128170356.png)
원하는 Custom 진행
![](img/Pasted%20image%2020251128170622.png)
![](img/Pasted%20image%2020251128170843.png)
![](img/Pasted%20image%2020251128170856.png)
![](img/Pasted%20image%2020251128171049.png)
![](img/Pasted%20image%2020251128171106.png)
![](img/Pasted%20image%2020251128171118.png)
![](img/Pasted%20image%2020251128171556.png)
![](img/Pasted%20image%2020251128175022.png)
## Raspberry Pi 5 환경 설정
### 1. OS bit 수 확인 및 업데이트
Ollama는 64-bit OS에서 정상 작동하므로 OS 버전 확인
```bash
uname -m
```
![](img/Pasted%20image%2020251128175054.png)
패키지 리스트 업데이트 및 업그레이드
```bash
sudo apt update && sudo apt ugrade
```
![](img/Pasted%20image%2020251128175900.png)
### 2. Ollama 설치
Ollama 설치 스크립트 실행
```bash
curl -fsSL https://ollama.com/install.sh | sh
```
### 3. 서비스 상태 확인
설치 후 Ollama가 백그라운드에서 동작중인지 확인
```bash
systemctl status ollama
```
## PC에서 Raspberry Pi 5로 학습된 모델 전송
학습된 모델을 gguf 포맷으로 변환하여 Raspberry Pi 5로 전송
- USB: 망
- `scp`

## Modelfile 작성 및 Ollama 모델 빌드
