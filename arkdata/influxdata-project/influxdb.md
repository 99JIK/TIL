# InfluxDB

## InfluxDB

* Open Source Time Series DataBase(TSDB)이다.
* 타 TSDB와 달리 SQL문과 유사한 Query를 지원한다.
* Go Lang으로 작성되었다.
* Google의 LevelDB를 사용한다.
* Continuous Queries를 지원한다.
* Schemaless Design이다.
* Rest API를 제공한다.
* 성능이 뛰어나다.

### Terminology Comparison

| RDBMS                       | InfluxDB    |
| --------------------------- | ----------- |
| Database                    | Database    |
| Table                       | Measurement |
| Column                      | Key         |
| Primary Key, Indexed Column | Tag Key     |
| SET of Index Entires        | Series      |

Measurement에 Data를 Point라는 틀에 맞게 저장한다.

* Tag Key: 구분자이며 String Type만 가능하다.
* Field Key: Data이다.
* Time Key: 자동으로 입력되는 시간 값이다.

### Installation

```bash
wget https://dl.influxdata.com/influxdb/releases/influxdb-1.8.10.x86_64.rpm

sudo yum localinstall influxdb-1.8.10.x86_64.rpm

systemctl start influxdb
systemctl status influxdb

### Show Retention Policy### 
Create Databaseuxdb
systemctl enable influxdb
```

### Command

#### Start InfluxDB

```bash
influx
```

#### Create Database

```sql
CREATE DATABASE <db_name>
```

#### Show Databases

```sql
SHOW DATABASES
```

Output Example

```sql
name: databases
name
----
_internal
JUNGIN
```

#### Create Retention Policy

Retention Policy는 일정 기간이 지난 Data를 삭제하는 정책이다.

각 Database 별로 다르게 지정 가능하다.

별도 설정을 하지 않을 경우 DB 생성 시 autogen이라는 기본 정책이 사용된다.

```sql
CREATE RETENTION POLICY "<policy_name>" ON "<database_name>" <duration_option> <replication_option> <shard_group_duration_option> [DEFALT]
```

#### Alter Retention Policy

```sql
ALTER RETENTION POLOCY "<policy_name>" ON "<database_name>" <option> [option] [option] ...
```

#### Delete Retention Policy

```sql
DROP RETENTION POLICY <policy_name> ON <database_name>
```

#### Show Retention Policy

```sql
SHOW RETENTION POLICIES
```

Output Example

```sql
name    duration shardGroupDuration replicaN default
----    -------- ------------------ -------- -------
autogen 0s       168h0m0s           1        true
```

* duration: Data 보존 기간
* shardGroupDuration: ShardGroup 적용 기간
* replicaN: Cluster에 저장되는 Data 복사본 개수
* default: 기본 정책 유무

#### Insert Data

```sql
INSERT <measurement_name>,<tag_name>=<tag_value>,...<tag_name>=<tag_value> <field_name>=<field_value>,...<field_name>=<field_value> <time_key(Optional)>
```

Tag Key, Field Key, Time Key 사이에 `,` 없이 사용한다.

`,` 뒤 공백을 붙일 수 없다.

#### Select Data

```sql
SELECT * FROM <measurement_name>
 
SELECT "<field_name>", "<field_name>"... FROM <measurement_name>
```

#### Delete Data

```sql
DELETE FROM <measurement_name> WHERE <conditional_statement>
```

#### Delete Measurement

```sql
DROP MEASUREMENT <measurement_name>
```

#### Delete Database

```sql
DROP DATABASE <database_name>
```
