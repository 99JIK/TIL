# Raspberry Pi 5 기반 sLM 배포 및 운용 매뉴얼
## 1. 개요
본 문서는 Raspberry Pi 5 Edge Device 환경에서 경량회된 sLM(Small Language Model)을 빌드, 배포 및 운용하기 위한 표준 절차를 기술한다. 본 가이드는 데이터 수집부터 Pruning, LoRA Fine Tuning, Quantization을 거쳐 On-Device 환경에서 최종 구동까지의 전 과정을 포함한다.
## 2. 시스템 요구사항
### 2.1. 하드웨어
- Edge Device: Raspberry Pi 5(RAM 16GB 권장) - ARM Cortex-A76 8-Core 기반
- Storage: Micro SD Card(OS 구동용), USB 3.0 이상 저장장치(Model file 전송 및 스왑용)
- Power: 5V/5A 전용 어댑터(고부하 추론 시 안정적인 전원 공급 필수)
- Interface: 키보드, 마우스, 모니터
### 2.2. 소프트웨어
- OS: Raspberry Pi OS Bookworm(64-bit 필수)
- Runtime: Python 3.11.x ~ 3.12.x
- Inference Engine: Ollama(v0.13.0 이상, ARM64 Build)
- Model Build: llama.cpp(Build 2025.9 이상), PyTorch 2.0.0+, Transformers 4.35.0+
- Traning Env: Google Colab Pro(A100 GPU) 혹은 이에 준하는 GPU 서버
## 3. 모델 경량화 및 최적화
이 단계는 GPU 리소스가 확보된 서버(또는 Google Colab)에서 수행한다.
### 3.1. 환경 구성 및 모델 준비
1. Storage Mount: Google Drive나 Local Storage 경로를 확보한다.
2. Model Download: Hugging Face Token 인증 후 google/gemma-3-4b-it Model과 Tokenizer를 다운로드 한다.
	- Note: torch.float16 Data type 및 device_map="auto" 설정을 사용하여 Memory 효율을 확보한다.
### 3.2. 구조적 프루닝
데이터 기반 분석을 통해 FFN 뉴런과 Attention Head의 중요도를 측정하고 제거한다.
- Activation Pruning: src/pruning/activation/ 내 Script를 실행한다.
  SwiGLU 활성화 패턴을 분석한다.
- Magnitude Pruning: src/pruning/magnitude/ 내 Script를 실행한다.
  가중치 L2 Norm 기반 중요도를 산출한다.
- Gradient Pruning: src/pruning/gradient/ 내 Script를 실행한다.
  역전파 Gradient 크기 기반 민감도를 측정한다.
- Setting: 각 스크립트 상단의 PRUNE_RATIO를 조정하여 경량화 강도를 결정한다.
- 
## Raspberry Pi 5 설치 및 실행
[Raspberry Pi Imager](https://www.raspberrypi.com/software/) 실행 혹은 해당하는 [Raspberry Pi OS](https://www.raspberrypi.com/software/operating-systems/)를 다운로드 받아 설치한다.
![](img/Pasted%20image%2020251128170221.png)
Ollama는 64-bit 에서 정상작동하므로 64-bit를 선택한다.
![](img/Pasted%20image%2020251128170332.png)
설치할 저장소를 선택한다.
![](img/Pasted%20image%2020251128170356.png)
원하는 Custom을 진행한다.
Raspberry Pi Connect를 사용하면 주변기기 없이 원격 접속으로 쉽게 진행이 가능하다. 
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
Ollama는 64-bit OS에서 정상 작동하므로 OS 버전을 확인한다
```bash
uname -m
```
![](img/Pasted%20image%2020251128175054.png)
패키지 리스트 업데이트 및 업그레이드를 진행한다.
```bash
sudo apt update && sudo apt ugrade
```
![](img/Pasted%20image%2020251128175900.png)
### 2. Ollama 설치
Ollama 설치 스크립트 실행
```bash
curl -fsSL https://ollama.com/install.sh | sh
```
![](img/Pasted%20image%2020251128180451.png)
### 3. 서비스 상태 확인
설치 후 Ollama가 백그라운드에서 동작중인지 확인
```bash
systemctl status ollama
```
![](img/Pasted%20image%2020251128180521.png)
## PC에서 Raspberry Pi 5로 학습된 모델 전송
학습된 모델을 gguf 포맷으로 변환하여 Raspberry Pi 5로 전송
- USB
![](img/Pasted%20image%2020251128183632.png)
![](img/Pasted%20image%2020251128183803.png)
- `scp`
```bash
scp ./<path>/<model>.gguf <pi_user>@<ip_address>:/home/<pi_user>
```
## Modelfile 작성 및 Ollama 모델 빌드
```bash
nano Modelfile
```
![](img/Pasted%20image%2020251128184038.png)![](img/Pasted%20image%2020251128184046.png)
```bash
FROM /home/<pi_user>/<model>.gguf
```
![](img/Pasted%20image%2020251128184200.png)
![](img/Pasted%20image%2020251128184220.png)
```bash
ollama create <model> -f Modelfile
```
![](img/Pasted%20image%2020251128184345.png)
![](img/Pasted%20image%2020251128184814.png)
## 모델 실행 및 테스트
### 터미널 대화 모드 실행
```bash
ollama run <model>
```
![](img/Pasted%20image%2020251128185130.png)
실행 후 프롬프트가 뜨면 질문을 입력하여 확인할 수 있다.
### API 모드 실행
