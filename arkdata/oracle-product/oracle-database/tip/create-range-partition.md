---
description: Range Partitioning Table을 생성할 때 사용한다.
---

# Create Range Partition

{% code fullWidth="false" %}
```sql
CREATE TABLE <TB>(
...
CONSTRAINT <CSTRNT> PRIMARY KEY(<COL>, ...)
)
PARTITION BY RANGE(<RANGECOL>)
(
PARTITION <PTTN> VALUES LESS THAN (<VALUE>),
...
PARTITION <MAX_PTTN> VALUES LESS THAN (MAXVALUE)
);
```
{% endcode %}
