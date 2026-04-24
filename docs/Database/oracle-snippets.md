---
title: Oracle 자주 쓰는 SQL 스니펫
description: Tablespace·Running Query·Character Set·SCN·Partition·DDL 조회 등 Oracle 운영 중 반복적으로 꺼내 쓰는 쿼리 모음.
tags: [oracle, sql, reference]
sidebar_position: 1
last_update:
  date: 2026-04-23
---

# Oracle 자주 쓰는 SQL 스니펫

## Context

Oracle DB 운영·장애 대응 중 필요할 때 꺼내 쓰는 쿼리 모음. 환경에 따라 스키마명·객체명만 바꿔 바로 실행.

## Tablespace 사용량 확인

테이블스페이스별 총 용량·사용량·여유량·사용률을 한 번에 본다.

```sql
SELECT SUBSTR(SUB_QUERY.TABLESPACE_NAME, 1, 30) TABLESPACE,
       ROUND(SUM(SUB_QUERY.TOTAL1) / 1024 / 1024, 1) AS "TOTAL_MB",
       ROUND(SUM(SUB_QUERY.TOTAL1) / 1024 / 1024, 1)
         - ROUND(SUM(SUB_QUERY.SUM1) / 1024 / 1024, 1) AS "USED_MB",
       ROUND(SUM(SUB_QUERY.SUM1) / 1024 / 1024, 1) AS "FREE_MB",
       ROUND(
         (ROUND(SUM(SUB_QUERY.TOTAL1) / 1024 / 1024, 1)
          - ROUND(SUM(SUB_QUERY.SUM1) / 1024 / 1024, 1))
         / ROUND(SUM(SUB_QUERY.TOTAL1) / 1024 / 1024, 1) * 100,
         2
       ) AS "USED_%"
FROM (
  SELECT TABLESPACE_NAME, 0 TOTAL1, SUM(BYTES) SUM1, MAX(BYTES) MAXB, COUNT(BYTES) CNT
  FROM   DBA_FREE_SPACE
  GROUP BY TABLESPACE_NAME
  UNION
  SELECT TABLESPACE_NAME, SUM(BYTES) TOTAL1, 0, 0, 0
  FROM   DBA_DATA_FILES
  GROUP BY TABLESPACE_NAME
) SUB_QUERY
GROUP BY SUB_QUERY.TABLESPACE_NAME
ORDER BY TABLESPACE;
```

## 실행 중인 쿼리 조회

현재 DB에서 실행 중인 SQL과 세션 정보를 본다.

```sql
SELECT A.STATUS,       -- 상태
       A.USERNAME,     -- 접속 계정
       A.SID,
       A.SERIAL#,
       B.SQL_TEXT      -- 실행 중인 쿼리 본문
FROM   V$SESSION A,
       V$SQLAREA B
WHERE  A.SQL_HASH_VALUE = B.HASH_VALUE
AND    A.SQL_ADDRESS    = B.ADDRESS;
```

## Character Set 확인

NLS 설정 중 데이터베이스 Character Set을 확인한다.

```sql
SELECT * FROM NLS_DATABASE_PARAMETERS
WHERE  PARAMETER = 'NLS_CHARACTERSET';
```

## Log Sequence 별 시작 SCN

아카이브 로그 각각의 시작 SCN을 조회한다. 복구 시점 판별에 쓰인다.

```sql
SELECT SEQUENCE#, FIRST_CHANGE#
FROM   V$LOG_HISTORY;
```

## Range Partition 테이블 생성

키 값을 기준으로 범위 분할된 테이블 템플릿.

```sql
CREATE TABLE <TB>(
  ...
  CONSTRAINT <CSTRNT> PRIMARY KEY (<COL>, ...)
)
PARTITION BY RANGE (<RANGECOL>)
(
  PARTITION <PTTN>     VALUES LESS THAN (<VALUE>),
  ...
  PARTITION <MAX_PTTN> VALUES LESS THAN (MAXVALUE)
);
```

## 테이블 DDL 메타데이터 조회

특정 스키마·테이블의 DDL을 메타데이터에서 꺼내온다. 스키마 이관 시 유용.

```sql
SELECT DBMS_METADATA.GET_DDL('TABLE', TABLE_NAME, OWNER)
FROM   ALL_TABLES
WHERE  OWNER      = '<SCHEMA>'
AND    TABLE_NAME = '<OBJECT>';
```
