---
title: "TRINITY: A Fast Compressed Multi-attribute Data Store"
date: "2024-04-22"
description: "대용량 다중 속성 데이터를 효율적으로 저장하고 쿼리하기 위한 새로운 인메모리 데이터 저장소 TRINITY를 소개한 논문"
keywords:
  [
    "TRINITY",
    "MDTRIE",
    "Multi-attribute Data Store",
    "Compressed Data",
    "Real-time Analytics",
    "Space-filling Curves",
    "Morton Code",
    "Hierarchical Indexing",
    "Dynamic Data Structure",
    "Machine Learning",
  ]
tags:
  [
    "TRINITY",
    "MDTRIE",
    "Multi-attribute Data Store",
    "Compressed Data",
    "Real-time Analytics",
    "Space-filling Curves",
    "Morton Code",
    "Hierarchical Indexing",
    "Dynamic Data Structure",
    "Machine Learning",
  ]
authors: ["ziming_mao", "kiran_srinivasan", "anurag_khandelwal"]
---

# TRINITY: A Fast Compressed Multi-attribute Data Store

## 논문 정보

- 저자 (Authors) 및 소속 (Affiliations): Ziming Mao (UC Berkeley), Kiran Srinivasan (NetApp), Anurag Khandelwal (Yale)
- 학회 또는 저널명 (Conference or Journal Name): Nineteenth European Conference on Computer Systems (EuroSys '24)
- 제출일 또는 발행일 (Submission or Publication Date): 2024년 4월 22일-25일
- DOI (Digital Object Identifier): [https://doi.org/10.1145/3627703.3650072](https://doi.org/10.1145/3627703.3650072)
<!-- truncate -->

## 요약

### 초록 (Abstract)

속성(attribute)이 풍부한 기계 생성 데이터의 확산과 함께, 새로운 실시간 모니터링, 진단 및 시각화 도구는 여러 속성에 걸쳐 이러한 데이터를 동시에 수집하고 분석한다. 데이터의 엄청난 양으로 인해 애플리케이션은 효율적인 분석을 위해 저장 효율적이고 성능이 뛰어난 데이터 표현이 필요하다. 본 논문은 대량의 다중 속성 레코드에 걸쳐 쿼리 및 저장 효율성을 동시에 지원하는 시스템인 TRINITY를 제시한다. TRINITY는 새로운 동적이고 간결한 다차원 데이터 구조인 MDTRIE를 통해 이를 달성한다. MDTRIE는 새로운 모턴 코드(Morton code) 일반화, 다중 속성 쿼리 알고리즘 및 자체 색인 트라이(trie) 구조를 조합하여 이러한 목표를 달성한다. TRINITY의 실제 사용 사례에 대한 평가는 최신 시스템과 비교하여 다음을 지원함을 보여준다.

1. 7.2-59.6배 빠른 다중 속성 검색
2. OLAP 컬럼형 저장소와 비견되는 저장 공간 효율성 및 NoSQL 저장소 및 OLTP 데이터베이스보다 4.8-15.1배 낮은 저장 공간
3. NoSQL 저장소와 비견되는 포인트 쿼리 처리량 및 OLTP 데이터베이스 및 OLAP 컬럼형 저장소보다 1.7-52.5배 높은 처리량

### 주요 연구 내용 (Main Research Content/Methodology)

- MDTRIE (Multi-Dimensional Trie): TRINITY의 핵심은 MDTRIE라는 새로운 동적, 간결, 자체 색인 다차원 데이터 구조이다.
- 일반화된 모턴 코드 (Generalized Morton Encoding): 서로 다른 비트 너비를 가진 속성을 패딩 없이 인코딩하여 공간 효율성을 개선한다.
- 압축 노드 (Collapsed Nodes): MDTRIE 노드 중 단일 자식만 있는 경우, 해당 노드를 압축하여 $2^n$비트 대신 n 비트로 직접 값을 인코딩함으로써 저장 공간을 절약한다.
- 엇갈린 모턴 인코딩 (Staggered Morton Encoding): 일부 차원의 비트 인터리빙을 지연시켜 각 트라이 레벨에서 활성 차원(active dimensions)의 수를 최적화하여 저장 공간 효율성을 더욱 향상시킨다.
- 다차원 범위 쿼리 알고리즘: MDTRIE의 간결한 노드 표현을 활용하여 검색 범위와 데이터 분포를 기반으로 관련 없는 모턴 코드 범위를 효율적으로 제거하여 쿼리 속도를 높인다.
- 자체 색인 (Self-indexing) 기반 포인트 쿼리: 기본 키 인덱스를 트라이 구조 내에 내장하여 공간 효율성을 보장하고, 기본 키를 통해 데이터 포인트를 검색, 삽입, 제거할 수 있도록 지원한다.
- 분산 및 내결함성 아키텍처: MDTRIE를 분산 환경에 통합하여 데이터 파티셔닝(sharding), 병렬 쿼리 실행, 동시성 제어, 영속성 보장 등을 지원한다.

### 주요 결과 및 결론 (Key Findings and Conclusion)

TRINITY는 최신 시스템 대비 7.2-59.6배 빠른 다중 속성 검색을 지원한다.
OLAP 컬럼형 저장소와 유사한 저장 공간 효율성을 보이며, NoSQL 저장소 및 OLTP 데이터베이스보다 4.8-15.1배 낮은 저장 공간을 차지한다.
NoSQL 저장소와 유사한 포인트 쿼리 처리량을 보이며, OLTP 데이터베이스 및 OLAP 컬럼형 저장소보다 1.7-52.5배 높은 처리량을 달성한다.
MDTRIE의 최적화(압축 노드, 일반화된 모턴 인코딩, 엇갈린 모턴 인코딩)는 저장 공간과 쿼리 성능 모두에 크게 기여한다.
차원 수가 증가함에 따라 TRINITY의 저장 공간 및 포인트 쿼리 지연 시간은 선형적으로 증가한다.
결론적으로 TRINITY는 대량의 다중 속성 레코드에 대해 쿼리 효율성과 저장 효율성을 동시에 제공하는 압축 인메모리 데이터 저장소이다.

### 기여점 (Contributions)

다중 속성 범위 검색 및 효율적인 포인트 쿼리를 지원하는 동적, 간결, 자체 색인 다차원 데이터 구조인 MDTRIE의 설계.
MDTRIE를 활용하여 대규모 다중 속성 데이터셋을 저장하고 쿼리하는 분산 데이터 저장소 TRINITY의 설계 및 구현.
실제 워크로드에서 MDTRIE 및 TRINITY를 최신 데이터 구조 및 데이터 저장소와 비교 평가.
TRINITY 코드는 [https://github.com/Trinity-data-store/Trinity](https://github.com/Trinity-data-store/Trinity) 에서 조회 및 사용 가능하다.
기계 생성 데이터의 속성이 대부분 고정 너비를 가지므로, Morton 코드 기반 표현의 고정 비트 너비 제약은 대부분의 목표 애플리케이션에 허용된다.

### 요약

본 논문은 대용량의 다중 속성 기계 생성 데이터를 효율적으로 저장하고 쿼리하기 위한 새로운 인메모리 데이터 저장소인 TRINITY를 소개한다. 최근 사물 인터넷(IoT) 기기, 소셜 미디어 플랫폼, 네트워크 트래픽 로그 등 다양한 소스에서 생성되는 기계 생성 데이터는 그 양이 방대하고 여러 속성을 포함하고 있어 실시간 분석, 모니터링, 진단 및 시각화에 있어 심각한 문제를 야기한다. 특히, 이러한 데이터에 대한 분석의 적시성은 매우 중요하며, 데이터가 수집된 직후 그 가치가 가장 높기 때문에 방대한 양의 속성 풍부 데이터를 거의 실시간으로 쿼리할 수 있는 능력이 매우 중요하다.

기존 시스템들은 다중 속성 쿼리 및 저장 효율성 측면에서 한계를 보여왔다. 효율적인 다중 속성 쿼리를 지원하는 시스템은 큰 저장 오버헤드를 유발하는 추가적인 다중 속성 인덱스 구조를 활용하며 , 이는 대규모 데이터셋에서는 메모리 용량을 초과하여 확장성이 저하된다. 또한, 압축된 인메모리 데이터 구조에 대한 쿼리를 활용하는 시스템들은 기능(예: 효율적인 포인트 쿼리, 세밀한 인플레이스 업데이트, 다중 속성 쿼리 지원)을 절충한다.

TRINITY는 이러한 문제를 해결하기 위해 MDTRIE라는 새로운 동적, 간결, 자체 색인 다차원 데이터 구조를 제안한다. MDTRIE는 다음과 같은 혁신적인 특징을 갖는다:

일반화된 모턴 인코딩 (Generalized Morton Encoding): 전통적인 모턴 코드가 모든 차원의 비트 너비가 동일해야 하는 제약을 극복하고, 서로 다른 비트 너비를 가진 속성들을 패딩 없이 인코딩하여 공간 효율성을 극대화한다. 이는 MDTRIE가 다양한 실제 데이터셋에 적용될 수 있도록 한다.

압축 노드 (Collapsed Nodes): MDTRIE 내에서 단일 자식만 가지는 노드를 압축된 형태로 표현하여 희소한 데이터셋에서 저장 공간 낭비를 줄인다. 이는 노드당 필요한 비트 수를 크게 줄여 전반적인 저장 공간 효율성을 향상시킨다.

엇갈린 모턴 인코딩 (Staggered Morton Encoding): 각 차원의 비트 인터리빙 시작 시점을 유연하게 조절하여 각 트라이 레벨에서 "활성 차원"의 수를 최소화함으로써 저장 공간 효율성을 더욱 최적화한다.

효율적인 다차원 범위 쿼리 알고리즘: MDTRIE의 간결한 노드 표현을 활용하여 쿼리 검색 범위와 데이터 분포를 기반으로 관련 없는 서브트리를 효율적으로 제거한다. 이는 비트 연산을 통해 가속화되어 쿼리 지연 시간을 크게 줄인다.

자체 색인 (Self-indexing) 기반 포인트 쿼리: 기본 키 인덱스를 트라이 구조 내에 직접 내장하여 별도의 인덱스 구조 없이도 기본 키를 통한 데이터 검색, 삽입, 제거를 효율적으로 지원한다. 이는 추가적인 저장 오버헤드를 방지하고 성능 오버헤드를 최소화한다.

TRINITY는 MDTRIE를 분산 시스템 아키텍처에 통합하여 대규모 데이터셋을 처리할 수 있도록 설계되었다. 이는 데이터 파티셔닝, 병렬 쿼리 실행, 트리블록(treeblock) 단위의 읽기-쓰기 잠금을 통한 동시성 제어, 그리고 체크포인팅 및 쓰기 선행 로그(write-ahead log)를 통한 영속성 보장을 포함한다.

실제 워크로드에 대한 평가는 TRINITY의 우수성을 입증한다. TRINITY는 최신 시스템(Aerospike, TimescaleDB, ClickHouse)과 비교하여 다중 속성 검색에서 7.2-59.6배 빠른 성능을 보였다. 저장 공간 측면에서는 OLAP 컬럼형 저장소와 유사하거나 더 낮고, NoSQL 및 OLTP 데이터베이스보다 4.8-15.1배 낮은 효율성을 보여준다. 포인트 쿼리 처리량은 NoSQL 저장소와 유사하거나 더 높고, OLTP 및 OLAP 컬럼형 저장소보다 1.7-52.5배 높다. 이러한 결과는 TRINITY가 방대한 다중 속성 기계 생성 데이터를 위한 효율적이고 고성능의 솔루션임을 시사한다.

향후 연구는 가변 길이 데이터 유형(예: 문자열)에 대한 지원 확장, 힐베르트 코드(Hilbert code)와 같은 다른 공간 채움 곡선의 효율적인 알고리즘 구현, 그리고 레벨 오더링(level ordering) 트라이를 다차원 데이터에 적용하는 방안 등을 포함한다.
