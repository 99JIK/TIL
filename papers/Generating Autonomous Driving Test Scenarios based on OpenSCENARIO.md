---
title: "Generating Autonomous Driving Test Scenarios based on OpenSCENARIO"
date: "2022-11-23"
description: "OpenSCENARIO 표준을 기반으로 파라미터 공간을 포함한 자율주행 테스트 시나리오를 자동 생성하고 Carla 플랫폼에서 검증하는 방법론을 제안한다."
tags: ["Autonomous Driving", "Simulation Test", "OpenSCENARIO", "Test Scenario", "Batch Scenario Generation"]
authors: ["He Chen", "Hongping Ren", "Rui Li", "Guang Yang", "Shanshan Ma"]
---

## 논문 정보
- **제목**: Generating Autonomous Driving Test Scenarios based on OpenSCENARIO
- **저자**: He Chen, Hongping Ren, Rui Li, Guang Yang (Institute of Software Chinese Academy of Sciences), Shanshan Ma (Electronics Standardization Institute)
- **학회/저널**: 2022 9th International Conference on Dependable Systems and Their Applications (DSA)
- **발행일**: 2022-11-23
- **DOI**: [10.1109/DSA56465.2022.00093](https://doi.org/10.1109/DSA56465.2022.00093)
- **주요 연구 내용**: 고정된 파라미터 값만 사용하는 기존 이산적 테스트의 한계를 극복하기 위해 OpenSCENARIO 표준 기반의 테스트 시나리오 구성 파일과 Python 스크립트를 활용하여 시나리오를 자동 생성한다. 도로, 날씨, 교통 참여자 요소를 기반으로 자율주행 운영 설계 도메인(ODD)에 부합하는 시나리오를 필터링하고 샘플링하는 프로세스를 포함한다.
- **주요 결과 및 결론**: 제안된 방법을 통해 구축된 테스트 시나리오는 Carla 시뮬레이션 플랫폼에서 정상적으로 실행되며 차선 유지 및 Cut-in 대응 기능을 성공적으로 검증한다. 자동화된 시나리오 구축 방식은 작성 과정을 단순화하고 구축 효율성을 크게 향상시킨다.
- **기여점**: OpenSCENARIO 1.2 표준을 준수하는 배치 시나리오 생성 프레임워크를 설계하여 테스트 커버리지를 확대한다. 파라미터 공간 정의와 ODD 기반 필터링 메커니즘을 통합하여 시뮬레이션 테스트의 신뢰성과 효율성을 동시에 확보한다.
<!--truncate-->
## 요약
### 초록
자율주행 기술의 발전에 따라 시뮬레이션 테스트는 효율성과 안전성 측면에서 중요한 검증 수단이 되고 있다. 본 논문은 OpenSCENARIO 기반의 자동 생성 방법론을 제안하여 파라미터 공간을 포함한 종합적인 테스트 환경을 구축한다. Carla 시뮬레이션 플랫폼을 통해 차선 유지 기능을 테스트함으로써 해당 방법이 시나리오 구축 효율을 높이고 시뮬레이션 요구사항을 충족함을 입증한다.
![Figure 1](img/Pasted%20image%2020260422121247.png)
### 서론
자율주행 시스템은 환경 인식, 경로 계획, 차량 제어 등 복잡한 알고리즘으로 구성되어 안전성과 신뢰성 확보가 필수적이다. 논문의 **Figure 1**은 자율주행 시뮬레이션 테스트의 전반적인 프로세스를 도식화하여 보여주며, 시뮬레이션 플랫폼과 AI 모델 간의 데이터 피드백 루프를 설명한다. 기존의 고정 파라미터 방식은 전체 파라미터 공간을 포괄하지 못하는 문제가 있어 이를 해결하기 위한 자동화된 시나리오 생성 기술이 요구된다.

### 배경
ASAM에서 제안한 OpenSCENARIO 표준은 교통 참여자의 동적 동작을 설명하는 데 특화되어 있다. **Figure 2**에 제시된 OpenSCENARIO의 기본 프레임워크는 FileHeader, ParameterDeclarations, Entities, Storyboard 등 6가지 주요 부분으로 구성된다. CARLA, 51Sim-One, VTD 등 많은 시뮬레이션 플랫폼이 이 표준을 지원하기 시작했으나, 실제 시나리오 파일을 효율적으로 생성하는 기술은 여전히 부족한 실정이다.
![Figure 3](img/Pasted%20image%2020260422121316.png)
![Figure 4](img/Pasted%20image%2020260422121340.png)
### 모델 아키텍처 / 방법론
- **핵심 구조**: 자율주행 테스트 시나리오 생성 경로는 논문의 **Figure 3**에 상세히 기술되어 있다. Autopilot 기능을 바탕으로 구성 파일을 빌드하고, 이를 통해 테스트 대상(DUT), 파라미터 공간, 구체적 시나리오를 생성한 뒤 ODD를 기반으로 필터링하여 시뮬레이션 플랫폼에서 실행한다.
- **주요 구성 요소**: 시나리오 구성 파일은 **Figure 4**와 같이 **Dut**(목적지, 목표 속도), **Scenarios**(맵, 액터, 실행 정보, 파라미터), **Oracles**(테스트 단언문)의 세 부분으로 나뉜다. 실행 정보는 트리 구조로 관리되며, **Sequence**와 **Parallel** 모드를 통해 하위 노드의 실행 논리를 제어한다.
- **수식 및 알고리즘**: 시나리오 필터링 시 안전 거리를 확보하기 위해 시간과 환경 조건에 따른 수식을 적용한다. 주간 시나리오의 경우 차선 변경 거리 $d$는 $d > (v_2 - v_1) \times 3$을 만족해야 하며, 야간의 경우 $d > (v_2 - v_1) \times 5$를 만족해야 한다. 여기서 $v_1$과 $v_2$는 각각 자차와 타차의 속도를 의미한다.
![Figure 7](img/Pasted%20image%2020260422121417.png)
![Figure 8, 9](img/Pasted%20image%2020260422121453.png)
### 실험 결과
- **주요 데이터셋 및 설정**: Carla 시뮬레이션 플랫폼을 사용하며, **Figure 7**에 정의된 자율주행 운영 설계 도메인(**ODD**) 구조에 따라 도로 구조, 기상 조건(구름 밀도, 비 강도 등), 교통 참여자 요소를 설정한다. 구체적으로 'Target vehicle cut-in' 시나리오를 구축하여 실험을 진행한다.
- **핵심 성능 지표**: **Figure 8**과 **Figure 9**는 각각 생성된 XML 형식의 OpenSCENARIO 파일과 실제 Carla 플랫폼에서 구동되는 차량 Cut-in 시나리오의 시각적 결과를 보여준다. **Table 2**에 기술된 파라미터 공간 범위를 보면 자차와 타차의 속도를 30~80km/h 범위에서 가변적으로 설정하여 테스트의 포괄성을 확보한다. 실험을 통해 자동 구축된 시나리오가 자율주행 알고리즘을 합리적으로 검증할 수 있음을 확인한다.

### 결론
본 논문은 OpenSCENARIO 표준을 활용하여 자율주행 테스트 시나리오를 자동으로 생성하는 체계적인 방법론을 제안하였다. 파라미터 공간과 ODD 기반 필터링을 도입함으로써 테스트 효율성과 커버리지를 개선하였고, Carla 플랫폼을 통해 그 실효성을 입증하였다. 향후에는 더욱 빠른 시나리오 생성 기술과 시나리오 언어 컴파일러 방향으로 연구를 지속하여 자율주행 기술 발전에 기여할 계획이다.