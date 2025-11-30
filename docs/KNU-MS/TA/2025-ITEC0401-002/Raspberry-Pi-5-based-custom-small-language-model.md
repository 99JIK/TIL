# Raspberry Pi 5 기반 sLM 배포 및 운용 매뉴얼
## 1. 개요
본 문서는 Raspberry Pi 5 Edge Device 환경에서 경량화된 sLM(Small Language Model)을 빌드, 배포 및 운용하기 위한 표준 절차를 기술한다. 본 가이드는 데이터 수집부터 Pruning, LoRA Fine-Tuning, Quantization을 거쳐 On-Device 환경에서 최종 구동까지의 전 과정을 포함한다.
### 1.1. 프로젝트 파일구조
본 문서는 Google Drive에 파일들을 아래와 같은 기준으로 배치하였으며, 경로가 다를 경우 모든 Script의 내부 경로를 수정해야 한다.
```
drive/
└── MyDrive/
    └── smartfarm_pruning/
       └── 1st/
           ├── data/  # Pruning, LoRA, Test Datasets
           │    
           ├── models/ # Save each models
           │   ├── LoRA/
           │   │   ├── activation/
           │   │   ├── gradient/
           │   │   ├── magnitude/
           │   │   └── original/
           │   ├── pruned/    
           │   │   ├── activation/
           │   │   ├── gradient/
           │   │   └── magnitude/
           │   ├── quantized/   
           │   │   ├── activation/
           │   │   ├── activation_lora/
           │   │   ├── gradient/
           │   │   ├── gradient_lora/
           │   │   ├── lora/
           │   │   ├── magnitude/
           │   │   ├── magnitude_lora/
           │   │   └── original/
           │   └── original/
           │       └── gemma-3-4b-it/
           ├── results/ # Test Results
           │   ├── pruned/ 
           │   │   ├── activation/
           │   │   ├── gradient/
           │   │   └── magnitude/
           │   └── quantization/     
           │       ├── activation/
           │       ├── gradient/
           │       ├── lora/
           │       ├── magnitude/
           │       └── original/
           ├── src/ # Code of Scripts
           │   ├── pruning/
           │   │   ├── activation/
           │   │   ├── gradient/
           │   │   └── magnitude/
           │   ├── LoRA/
           │   ├── quantized/
				   |   |   ├── quantize.py
           │   └── utils/
           │       ├── data_loader.py
           │       ├── model_loader.py
           │       └── test.py
           ├── lora.py
           ├── lora_combine.ipynb
           └── requirements.txt
```
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
### 3.3. LoRA Fine-Tuning
Pruning으로 손실된 정보를 복구하기 위해 Low-Rank Adaptation(LoRA) 학습을 수행한다.
- Run Script: src/LoRA/LoRA_train.py(Pruned Model 18종에 대해 순차 학습을 자동화한 Script)
- Key Parameters
	- Rank(r): 16
	- Alpha: 32
	- Target Modules: q_proj, v_proj(안정성 확보)
	- Precision: BF16(FP16의 Overflow 문제 해결 및 Loss 수렴 안정화)
### 3.4. 모델 병합 및 양자화
1. Merge: src/qauntized/quantize.py를 실행하여 Base Model과 LoRA Adapter를 병합한다.
2. GGUF Transform and Quantization: llama.cpp를 사용하여 모델을 GGUF Format으로 변환하고 8-bit(q8_0) Quantization을 적용한다. 
   ```bash
   python convert_hf_to_gguf.py <model_path> --outfile <output_gguf> --outtype q8_0
   ```
   - Result: models/quantized/ 경로에 최종 .gguf 파일이 생성된다.
## 4. Raspberry Pi 배포
### 4.1. OS 설치 및 초기 설정
1. Imaging: [Raspberry Pi Imager](https://www.raspberrypi.com/software/)를 사용하여 SD 카드에 OS를 설치한다.
   ![](img/Pasted%20image%2020251128170221.png)![](img/Pasted%20image%2020251128170332.png)
   ![](img/Pasted%20image%2020251128170356.png)
2. OS Customization: Imager 설정 메뉴에서 OS Customisation을 진행한다.
	- Network Setting: Wireless LAN을 활성화하고 사용중인 Wi-Fi의 SSID와 비밀번호를 정확히 입력하여 부팅 직후 네트워크 접속 및 패키지 설치가 가능하게 설정한다.
	  ![](img/Pasted%20image%2020251128170622.png)
	  ![](img/Pasted%20image%2020251128170843.png)
	- Enable SSH: 원활한 원격 접속 및 파일 전송을 위해 Services 탭에서 SSH를 활성화한다.
	  ![](img/Pasted%20image%2020251128170856.png)
	- Enable Raspberry Pi Connect: 편의를 위해 Raspberry Pi Connect를 활성화한다.
	  ![](img/Pasted%20image%2020251128171049.png)
	- Installation Complete: 나머지 설정들을 진행하여 설치한다.
	  ![](img/Pasted%20image%2020251128171106.png)
	  ![](img/Pasted%20image%2020251128171118.png)
	  ![](img/Pasted%20image%2020251128171556.png)
	  ![](img/Pasted%20image%2020251128175022.png)
	  
3. Update Package: 부팅 후 Terminal에서 시스템을 최신 상태로 갱신한다.
   ``` Bash
   uname -m # aarch64 확인
   sudo apt update && sudo apt upgrade -y
   ```
   ![](img/Pasted%20image%2020251128175054.png)
   ![](img/Pasted%20image%2020251128175900.png)
### 4.2. Ollama 추론 엔진 구축
1. Install: 공식 Script를 통해 Ollama를 설치한다.
   ```bash
   curl -fsSL https://ollama.com/install.sh | sh
   ```
   ![](img/Pasted%20image%2020251128180451.png)
2. Check Status: Service Daemon이 정상 작동하는지 확인한다.
   ```bash
   systemctl status ollama
   ```
   ![](img/Pasted%20image%2020251128180521.png)
### 4.3. 모델 배포
1. Send Model: 생성한 .gguf 파일을 Raspberry Pi로 전송한다.
	1. scp
	   ```bash
	   scp ./<pruned_model>.gguf <pi_user>@<ip_address>:/home/<pi_user>/
	   ```
	2. USB Mount 후 이동
	   ![](img/Pasted%20image%2020251128183632.png)
	   ![](img/Pasted%20image%2020251128183803.png)
2. Write Modelfile: Model의 Metadata를 정의한다.
   ```bash
   nano Modelfile
   ```
   ![](img/Pasted%20image%2020251128184038.png)
   ```Dockerfile
   FROM /home/<pi_user>/<pruned_model>.gguf
   # PARAMETER ... # Parameter 설정
   # SYSTEM "..." # System Prompt 설정
   ```
   ![](img/Pasted%20image%2020251128184200.png)
3. Build Model: Ollama Library에 Model을 등록한다.
   ```bash
   ollama create <custom_model_name> -f Modelfile
   ```
   ![](img/Pasted%20image%2020251128184345.png)
## 5. 테스트 및 운영
### 5.1. CLI 기반 테스트
Terminal에서 즉시 모델을 Load하여 추론 성능을 확인한다.
```bash
olamam run <custom_model_name>
```
![](img/Pasted%20image%2020251128185130.png)
### 5.2. Python API 기반 테스트
대량의 질의응답 세트를 처리하고 추론 시간을 측정하기 위한 Python Script를 사용한다.
1. Config Virtual Environment: 독립적인 실행 환경을 생성한다.
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install ollama
   ```
2. Run Test Script
	- src/utils/test.py 내 MODEL_NAME, INPUT_FILE 변수를 수정하여 실행한다.
	  ```bash
	  python3 scr/utins/test.py
	  ```
	  변수 수정 예시
	  ```python
	MODEL_NAME = "model" 
	INPUT_FILE = "test_dataset.json"
	OUTPUT_FILE = "output_results.json"
	  ```
	  test_dataset.json 예시
	  ```json
	[
	  {
	    "instruction": "Why are my tomatoes not developing good growth?",
	    "output": "This usually happens during the ripening stage. Keep the environment steady and avoid sudden changes in watering or temperature."
	  }
	]
	  
	  ```

	- test.py 실행 전 Ollama Server가 Background에서 실행 중이여야 한다.
	  ```bash
	  systemctl status ollama # 확인
	  systemctl start ollama #실행
	  ```
  3. Check Results: 생성된 output_results.json 파일에서 각 질문에 대한 답변 및 inference_time_sec을 확인한다.
     output_result.json 예시
     ```json
	[
		{
	        "id": 1,
	        "question": "Why are my tomatoes experiencing leaf curling during the fruit development stage? Answer in short.",
	        "answer": "Try adjusting watering and ensure steady sunlight to keep your tomatoes healthy! 🍅",
	        "inference_time_sec": 9.9485
	    },
	    {
	        "id": 2,
	        "question": "Leaves green but wilting; leaves roll and drop; fruits may develop blossom-end rot symptoms. Answer in short.",
	        "answer": "Calcium deficiency; improve soil pH & watering.",
	        "inference_time_sec": 7.714
	    }
	]
     ```
