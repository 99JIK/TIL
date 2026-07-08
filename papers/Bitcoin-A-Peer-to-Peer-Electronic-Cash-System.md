---
title: "Bitcoin: A Peer-to-Peer Electronic Cash System"
description: 중앙 금융기관의 신뢰 모델 탈피와 P2P 네트워크, 작업 증명을 통한 이중 지불 및 분산 합의 문제의 근본적 해결책을 제안한다.
authors:
  - name: Satoshi Nakamoto
year: 2008
venue: SSRN Electronic Journal
tags:
  - bitcoin
  - peer-to-peer
  - electronic-cash
  - proof-of-work
  - cryptography
  - merkle-tree
  - distributed-ledger
  - sybil-attack
relevance: middle
date: 0026-06-10
sidebar_label: Bitcoin
---

# Bitcoin: A Peer-to-Peer Electronic Cash System

> **Satoshi Nakamoto** · **2008** · **SSRN Electronic Journal**

> 관련도: 중 · 읽은 이유: 김경훈 교수님 과제, P2P 네트워크 작업 증명을 통한 이중 지불 및 분산 합의 문제 해결 방안 확인

:::tip Intuition
법적 강제력이나 중앙 기관의 보증 없이, 오직 전 세계 참여자들의 연산 자원과 수학적 증명만을 결합하여 신뢰를 자생적으로 창출하는 최초의 분산형 금융 장부 시스템이다.
:::

{/* truncate */}

## One-liner

중앙 금융기관의 개입 없이 P2P 네트워크, 타임스탬프 서버, 작업 증명 메커니즘을 융합하여 디지털 자산의 고질적 한계인 이중 지불 문제를 해결하는 비가역적 전자 화폐 시스템을 제안한다.

## Problem

기존 전자 결제는 중앙 집중식 금융기관이라는 신뢰받는 제3자에 전적으로 의존한다. 상호 신뢰 관계 및 법적 테두리를 전제하는 모델은 역설적으로 기관 내부의 보안 취약성을 낳고 거래 가역성으로 인한 분쟁 조정 비용을 발생시킨다. 이는 거래 수수료를 높여 소액 결제의 가능성을 원천 차단하며, 판매자를 사기로부터 보호하기 어렵게 만든다. 결과적으로 신뢰의 연쇄적 확산으로 인해 가상 통신 채널 상에서 제3자 없는 순수한 직접 거래를 구현하는 메커니즘이 부재한 상태이다.

## Core Idea

디지털 서명으로 소유권을 연쇄하는 프레임워크 위에 분산 타임스탬프 서버를 구축하여 거래의 시간적 순서를 계량적으로 증명한다. 중앙 통제관 대신 누적 연산량이 가장 많은 단일 역사를 전체 참여자가 공인하는 규칙을 도입함으로써 동시다발적인 분산 공유 자원 점유 문제를 해결한다.

## Method

### Electronic Coin & Double Spending
디지털 코인은 소유자의 서명이 연속적으로 이어진 사슬로 정의된다. 자산 이전 시 이전 거래의 해시값과 다음 소유자의 공개 키를 묶어 디지털 서명을 추가한다. 이때 발생하는 **Double Spending**은 동일한 잔고를 두 명 이상의 수신자에게 동시에 송금하여 승인을 받아내는 일종의 공유 자원 충돌 문제이다. 본 시스템은 시간상 가장 먼저 도달한 거래만 유효한 것으로 인정하고 이후의 시도는 무시하도록 설계되었으며, 이를 검증하기 위해 전제 거래 내역을 대중에 완전히 공개한다.

### Distributed Timestamp Server
특정 데이터가 해당 시점에 존재했음을 증명하기 위해 거래 블록의 해시를 신문 공고처럼 대중에 널리 발행하는 방식을 취한다. 각 타임스탬프는 자신의 해시 내에 이전 타임스탬프 정보를 포함시켜 사슬 모양의 체인을 형성하며, 이는 뒤이어 생성되는 블록들이 앞선 블록들의 역사적 존재를 지속적으로 강화하고 보증하는 구조를 만든다.

### Proof-of-Work
P2P 기반으로 타임스탬프 서버를 구현하기 위해 해시캐시 모델을 변형한 작업 증명을 도입한다. 블록 헤더를 SHA-256으로 해싱할 때 결과물의 앞자리가 규정된 개수의 0비트로 시작하도록 만족하는 **Nonce** 값을 찾아내는 과정이다. 특정 블록을 사후에 위조하려면 해당 블록뿐만 아니라 그 이후에 연결된 모든 후속 블록의 작업 증명을 공격자가 단독으로 다시 수행해야 하므로 컴퓨팅 비용 측면에서 변경이 불가능해진다. 이는 **One-CPU-One-Vote** 체제를 구현하여 IP 대량 할당을 통한 의사결정 왜곡을 방지한다.

### Network Mechanism & Longest Chain
네트워크 작동 절차는 다음과 같다. 거래가 브로드캐스트되면 각 노드는 이를 블록으로 수집하고 작업 증명을 수행한다. 해를 구한 노드가 블록을 전파하면, 다른 노드들은 거래의 유효성 및 이중 지불 여부를 검증한 뒤 해당 블록의 해시를 다음 블록의 이전 해시로 사용하여 합의를 표현한다. 동시 블록 생성으로 분기가 발생할 경우 노드들은 **Longest Chain**을 올바른 장부로 간주하고 연장한다. 정직한 노드들의 CPU 파워 합이 우세하다면 정직한 체인이 가장 빠르게 성장하여 분기를 흡수하고 지수적으로 공격 체인을 압도한다. 난이도는 시간당 평균 블록 생성 주기를 일정하게 유지하기 위해 이동 평균에 따라 자동 조정된다.

### Reclaiming Disk Space & SPV
지속적인 장부 누적으로 인한 저장 공간 문제를 해결하기 위해 거래 데이터를 **Merkle Tree** 구조로 해싱하여 블록 헤더에는 최종 루트 해시만 담는다. 충분한 블록 뒤에 묻힌 오래된 거래는 하위 브랜치를 가지치기하여 삭제할 수 있으며, 이로 인해 연간 블록 헤더 용량은 수십 메가바이트 수준으로 억제된다. 이를 통해 전체 장부를 다운로드하지 않고 최장 체인의 블록 헤더 사본과 해당 거래의 머클 경로만 보유하는 **Simplified Payment Verification** 노드 활성화가 가능해진다. 단, SPV 노드는 독자 검증이 불가능하므로 위조 블록 감지 시 풀 노드가 보내는 경고 알림에 따라 전체 데이터를 임시 다운로드하여 재확인하는 방어 전략이 요구된다.

### Privacy
모든 거래 내역이 공개 장부에 기록되므로 기존 금융의 정보 차단 모델은 불가능한다. 대신 대중에게 거래 규모와 시간은 노출하되, 공개 키와 실제 개인의 신원 간 연결 고리를 단절하는 방식으로 익명성을 확보한다. 방화벽을 강화하기 위해 매 거래마다 새로운 키 쌍을 사용할 것을 권장하나, 다중 입력 트랜잭션의 경우 동일 소유자임을 유추할 수 있는 일부 링크가 필연적으로 노출되는 한계가 존재한다.

## Results

정직한 노드가 다음 블록을 찾을 확률 $p$와 공격자가 찾을 확률 $q$ ($p > q$)의 경쟁을 이항 무작위 보행 및 도박꾼의 파산 문제로 모델링하여 분석했다. 거래 확인을 위해 수취인이 대기하는 블록의 개수 $z$가 누적됨에 따라, 공격자의 잠재적 진척도를 나타내는 포아송 분포 기대치 $\lambda = z \frac{q}{p}$ 하에서 공격자가 정직한 체인을 역전할 수 있는 확률은 지수적으로 감소함을 수학적으로 입증하였다. 연산력 격차가 미미하더라도 초기에 일시적인 도약에 성공하지 못하면 블록이 쌓일수록 위조 성공 확률은 영에 수렴한다.

## Key Figures
![Figure 1](img/Pasted%20image%2020260601121953.png)
- **Fig. 1**: 디지털 서명의 연쇄를 통한 코인의 소유권 이전과 검증 구조를 도식화한 그림
![Figure 2](img/Pasted%20image%2020260601122019.png)
- **Fig. 2**: 해시 체인 형태로 결합되어 시간적 존재성과 비가역성을 확보하는 타임스탬프 서버 메커니즘
![Figure 3](img/Pasted%20image%2020260601122038.png)
- **Fig. 3**: 머클 루트 해시만 남기고 하위 트리를 제거함으로써 전체 무결성을 보존하는 디스크 공간 회수 원리
![Figure 4](img/Pasted%20image%2020260601122108.png)
- **Fig. 4**: 전체 장부 없이 블록 헤더와 머클 브랜치 정보만으로 타 풀 노드에 의존하여 거래를 검증하는 SPV 프로세스

## Contribution vs Limitation

**저자 주장**
- 신뢰 기관 배제와 암호학적 증명 중심의 탈중앙화 전자 화폐 패러다임 정립
- 시계열적 타임스탬프와 연산력 기반 합의를 융합한 이중 지불의 수학적 해결
- 디스크 용량 최적화 및 경량화 검증 구조 설계를 통한 개인용 하드웨어 수용성 확보

**저자가 밝힌 한계**
- 정직한 다수가 과반수 연산 능력을 유지하지 못할 경우 전체 장부의 신뢰도가 붕괴함
- SPV 노드는 공격자가 일시적으로 네트워크를 압도하여 정교하게 조작된 트랜잭션을 전파할 때 사기 노출 위험도가 상승함
- 다중 입력 거래 수행 시 발생하는 공개 키 결합 현상으로 인해 완벽한 신원 익명성 유지가 저해됨

:::note 실제로 보이는 것
사토시 나카모토는 공격자가 합리적 경제 주체로서 시스템을 파괴하여 자산 가치를 폭락시키는 것보다 룰을 준수해 과반수의 채굴 보상을 독식하는 것이 이득이라는 게임 이론적 설계를 확신했다. 그러나 경제적 이윤 극대화가 목적이 아닌, 오직 재미나 시스템의 완전한 파괴, 정치적 마비를 목적으로 자본 손실을 감수하고 연산력을 투입하는 비합리적 주체의 전면적 공격 시나리오에 대해서는 프로토콜 내부적 방어 기제가 불충분하다는 맹점이 관측된다. 또한, 기술의 상용화 과정에서 개별 CPU 연산은 ASIC 전용 채굴기 및 거대 채굴 풀의 중앙화로 귀결되어 One-CPU-One-Vote라는 초기 분산 비전과 현실 간의 괴리가 뚜렷하게 나타난다.
:::

## Quotes

> "A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution." (p.1)
> "The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work." (p.1)
> "Proof-of-work is essentially one-CPU-one-vote." (p.3)
> "He ought to find it more profitable to play by the rules, such rules that favour him with more new coins than everyone else combined, than to undermine the system and the validity of his own wealth." (p.4)
> "The network is robust in its unstructured simplicity." (p.8)

## Idea Seeds

- 합리적 행위자 가정을 폐기하고, 경제적 파산을 감수하는 파괴적 공격 세력에 대응하기 위해 연산력 가중치 외에 네트워크 참여자들의 주관적 평판이나 가상 자산의 동결 자산 비중을 합의에 결합하는 방어 메커니즘 구상
- 주식 거래소의 시세 표시기 방식을 넘어서서, 트랜잭션의 입출력 관계 자체를 암호학적으로 난독화하는 링 서명 혹은 기밀 거래 기술을 프로토콜 기본 레이어에 이식하는 방안

## Open Questions

**이해하지 못한 것**
- 네트워크 전파 지연으로 인한 블록 분기 발생 시, 최장 체인 선택 규칙만으로 완전히 해소되지 않는 미시적 동기화 공백 기간 동안의 미결제 트랜잭션 처리 안정성 확보 수준
- 정직한 체인과 공격자 체인의 블록 생성 경쟁을 도박꾼이 무제한 신용을 가지고 본전에 도달하려는 확률 모델에 비유한 부분
- 포아송 분포의 기대값 $\lambda = z\frac{q}{p}$로 상정한 이유
- 지리적으로 떨어진 두 노드가 동시에 블록을 발견했을 때 네트워크가 일시적으로 쪼개져 가장 긴 체인만을 남겨, 반대쪽 분기에서 작업하던 노드들이 일제히 전환하는 동기화 메커니즘

## References

- **DOI**: [10.2139/ssrn.3440802](https://doi.org/10.2139/ssrn.3440802)
- **KR Translation**: [Hello, Tyeolrik](https://tyeolrik.github.io/journal/2020/07/29/journal-3-bitcoin-a-peer-to-peer-electronic-cash-system.html)
- **BibTeX key**: `nakamoto2008bitcoin`

```bibtex
@article{nakamoto2008bitcoin,
  title={Bitcoin: A Peer-to-Peer Electronic Cash System},
  author={Nakamoto, Satoshi},
  journal={SSRN Electronic Journal},
  year={2008},
  doi={10.2139/ssrn.3440802},
  url={[https://doi.org/10.2139/ssrn.3440802](https://doi.org/10.2139/ssrn.3440802)}
}
```