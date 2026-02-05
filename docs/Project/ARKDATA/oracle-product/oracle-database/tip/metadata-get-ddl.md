---
description: Table의 DDL Metadata를 조회할 때 사용한다.
---

# METADATA GET DDL

```sql
SELECT DBMS_METADATA.GET_DDL ('TABLE', TABLE_NAME, OWNER)
FROM   ALL_TABLES
WHERE  OWNER      = '<SCHMEA>'
AND    TABLE_NAME = '<OBJECT>';
```
