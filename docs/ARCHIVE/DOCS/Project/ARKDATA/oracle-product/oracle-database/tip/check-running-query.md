---
description: 실행 중인 Query를 조회할 때 사용한다.
---

# Check Running Query

```sql
SELECT A.STATUS,         -- 상태
       A.USERNAME,       -- 접속 계정명
       A.SID,            -- SID 
       A.SERIAL#,        -- 시리얼번호 
       B.SQL_TEXT      -- 실행중인 쿼리 내용
FROM V$SESSION A, V$SQLAREA B
WHERE A.SQL_HASH_VALUE = B.HASH_VALUE AND A.SQL_ADDRESS = B.ADDRESS;
```
