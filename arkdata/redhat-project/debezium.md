---
description: Debezium에 관한 문서이다.
---

# Debezium

## What is Debezium

Debezium은 데이터베이스의 변경 사항을 캡처하여 애플리케이션이 이러한 변경 사항을 확인하고 이에 응답할 수 있도록 하는 분산 서비스 세트이다.

Debezium은 변경 이벤트 스트림의 각 데이터베이스 테이블 내의 모든 행 수준 변경 사항을 기록하고, 애플리케이션은 이러한 스트림을 읽어 변경 이벤트가 발생한 순서와 동일하게 확인한다.

## Debezium Architecture&#x20;

<figure><img src="../../.gitbook/assets/image (139).png" alt=""><figcaption><p>Debezium Architecture</p></figcaption></figure>

### Debezium Server

Debezium Server는 Source Database에서 다양한 Messaging Infrastructure로 Change Event를 Steaming하는 구성이 가능하고 즉시 사용 가능한 Application이다.

아래는 Debezium Server를 사용하는 CDC Pipeline의 Architecture이다.

<figure><img src="../../.gitbook/assets/image (138).png" alt=""><figcaption><p>Debezium Server</p></figcaption></figure>

Debezium Server는 Debezium Source Connector 중 하나를 사용해 Source DB의 Change Event를 Capture하도록 구성된다.

Change Event는 JSON / Apache Avro와 같은 형식으로 Serialization 할 수 있다.

### Debezium Engine

Debezium Engine을 사용하는 경우 Kafka Connect를 통해 실행되지 않고 사용자 정의 Java Application에 내장된 Library로 실행된다.

전체 Kafka, Kafka Connect Cluster를 배포할 필요 없이 Application 자체 내에서 Change Event를 사용하거나 대체 Messaging Broker로 Change Event를 Streaming할 수 있다.

## 지원하는 Source

* Oracle
* PostgreSQL
* MySQL
* Db2
* MongoDB
* SQL Server
* Cassandra
* Vitess
* Spanner
* JDBC
* Informix

### Oracle

Debezium for Oracle은 XStream API, OpenLogReplicator, LogMiner로 추출한다.

* XStream API는 OGG 라이선스가 있어야 사용할 수 있다.
* OpenLogReplicator는 별도의 제품이므로 직접 컴파일을 하여 사용할 수 있다.
  * Supplemental Logging을 통해 UPDATE, DELETE의 Before, After 값을 참조한다.
* LogMiner는 DB에 내장되어 있으나 DB에 부하를 많이 준다.
  * Oracle 19c부터 해당 옵션을 제거하였다.

DDL 추출을 지원하며 CREATE, ALTER, DROP을 지원한다.

일반적으로 Snapshot을 찍어 DB의 Schema들을 추출한다.

Debezium for Oracle은 Redo Log에서 DDL을 Parsing하여 Table Schema Change Event를 추적하고 적용한다.

### PostgreSQL

Debezium for PostgreSQL은 Decoderbufs, pgoutput으로 추출한다.

* Decoderbufs는 Protobuf를 기반으로 한다.
  * Debezium Community에서 관리하며 별도의 설치가 필요하다.
* pgoutput은 PostgreSQL 10+ 의 표준 Logical Decoding Output Plugin이다
  * PostgreSQL에 기본적으로 포함되어 있다.

DDL 추출을 지원하지 않는다.

Logical Decoding을 통해 Connector가 꺼져있는 상태에서도 변경 사항을 추출할 수 있다.

기본적으로 Oracle의 Redo Log와 같은 역할을 하는 WAL(Write Ahead Log)은 파일을 추가하며 더 이상 필요없다고 판단되면 WAL 파일을 제거한다.

하지만 Logical Decoding으로 대상을 걸어놓았을 경우 Logical Decoding으로 추출하지 않는 이상 WAL이 삭제되지 않아 변경 사항을 놓치지 않고 추출할 수 있다.

Debezium for PostgreSQL은 현재 UTF-8으로 Encoding된 DB만 지원한다.

### MySQL

Debezium for MySQL은 Oracle의 Redo Log의 역할을 하는 binlog를 읽어 추출한다.

DDL 중 CREATE, ALTER, DROP을 지원한다.

&#x20;
