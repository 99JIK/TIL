## V-Model
![](img/Pasted%20image%2020251222140420.png)
SW 개발 프로세스 중 하나로 Waterfall model의 확장이다.
Waterfall과 달리 코딩 단계에서 위쪽으로 꺾여 알파벳 V자 모양으로 진행된다.
### Verification Step
#### 요구사항 분석
개발될 시스템에 대한 요구사항은 시스템 사용자의 필요를 분석하여 얻는다.
이상적인 시스템이 수행할 기능에 대해 고민하는 단계(어떻게 설계되고 구현될 것인지에 대한 사항은 다루지 않음)이다.
- 기능적 요구사항
- 물리적 요구사항
- 인터페이스 요구사항
- 성능 요구사항
- 데이터 요구사항
- 보안 요구사항 등
위 항목들을 기록한다.
#### 시스템 설계
요구사항 문서를 검토해 개발될 시스템에 대해 분석 및 이해한다.
시스템 엔지니어는 요구사항의 구현 가능성과 필요한 기술을 파악한다.
이 과정을 거처 SW specification document가 생성된다.
기술서에는 비즈니스 시나리오의 예시, Sample window, 이해를 위한 보고서, Entity diagram, Data dictionary 등이 산출된다.
#### 아키텍처 설계
Computer Architecture + SW Architecture 설계 단계를 합쳐 고수준 설계라 부른다.
아키텍처를 선택해 만들어지는 Baseline은 일반적으로 모든 구현될 모듈 항목과 그 간략한 기능을 정의하고, 모듈 간 인터페이스, 관계, 의존성을 기술하며, 필요한 DB table, Architecture diagram, 적용 기술 내역을 기술한다.
#### 모듈 설계
모듈 설계를 다른 말로 저수준 설계라고 부른다.
아키텍처 설계 단계에서 정의된 모듈 항목을 더 세분하여 각각의 모듈에 대한 기술을 작성하며, 이를 이용해 프로그래머들이 코딩을 시작할 수 있도록 만들어 준다.
각 모듈의 기능 로직을 Pseudocode를 이용해 기술하고 API 명세를 통해 관련 이슈를 포함해 각 묘듈의 모든 Interface 상세 사항을 기술하며, 각 모듈의 에러 코드와 메세지, 각 모듈의 입출력, 모듈에서 사용하는 DB table의 구조와 Attribute별 타입과 크기를 기술한다.
이 단계에서 단위 테스트를 위한 케이스와 절차가 설계된다.
### Validation Step
#### 단위 테스트
테스트 프로세스의 첫 단계로, 에러를 줄이기 위한 의도로 작성된 코드에 대한 분석을 진행하며 효율적으로 작성되었는지, 합의된 코딩 표준을 준수하는 지 검증(Whitebox test)한다.
#### 통합 테스트
각각의 모듈들을 통합해, 컴포넌트 간 인터페이스와 상호작용 상 오류를 발견하는 작업을 수행(Blackbox test)한다.
아키텍처 설계 단계에서 준비된 TC를 사용하여 테스트가 진행된다.
#### 시스템 테스트
실제 구현된 시스템과 계획된 Specification을 서로 비교하는 작업이다.
때로 자동화 도구를 이용하여 자동화된다.
#### 인수 테스트
시스템을 배포하거나 사용할만한 준비가 되었는지에 대해 평가한다.
반드시 최종 단계 테스팅이라곤 할 수 없다.
사용자 인수 테스팅, 운영상 인수 테스팅 등의 전형적인 형태가 있다.
## X in the Loop
- MIL, Model in the loop: 컨트롤러를 모델로 시뮬레이션
- SIL, Software in the loop: 모델을 변환한 코드 기반의 시뮬레이션
- PIL, Processor in the loop: 실제 컨트롤러 프로세서에서 코드 실행(Without I/O)
- HIL, Hardware in the loop: 실제 컨트롤러 하드웨어와 I/O를 포함한 테스트
- Controller: Control system
- Plant: Mechatronic system
### Model in the Loop
![](img/Pasted%20image%2020251222144853.png)
MIL은 Control model을 사용해 Plant model과 함께 시뮬레이션 하는 방식이다.
일반적으로 Simulink에서 제어 모델을 작성, 동일한 Simulink diagram 내에서 물리 시스템 모델과 직접 연결해 테스트를 수행한다.
모델의 변경이 즉시 테스트될 수 있어 개발 속도가 매우 빠르다.
### Software in the Loop
![](img/Pasted%20image%2020251222145030.png)
Controller model이 실제 C, C++ 코드로 변환되어 시뮬레이션에 통합된다.
Autocoding이나 Handcoding을 통해 구현될 수 있으며, 주로 코드 검증을 위한 과정이다.
코드 변환 과정에서 발생하는 문제점을 발견 및 수정하는 것이 가능하다.
### Process in the Loop
![](img/Pasted%20image%2020251222145209.png)
시뮬레이션 환경이 아닌 실제 Microprocessor에 배포하여 실행한다.
하지만 I/O는 실제 HW가 아닌 JTAG, 고속 통신 버스를 통해 Plant simulation과 연결된다.
이 단계에서는 코드 배포 및 실행을 반복해야 하므로 개발 속도가 더욱 느려진다.
### Hardware in the Loop
![](img/Pasted%20image%2020251222145303.png)
Contoller가 최종 Controller HW에 완전히 배포되며, Plant model은 Real-time simulation environment에서 실행된다. 이 Simulation environment는 Controller가 실제 Plant에 연결된 것처럼 동작하도록 I/O 신호를 조작하여 구현된다.
실제 Application environment와 가장 유사한 Test environment를 제공해