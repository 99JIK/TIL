---
description: Oracle에서 Character Set을 확인할 때 사용한다.
---

# Check Character Set

{% code fullWidth="false" %}
```sql
SELECT * FROM NLS_DATABASE_PARAMETERS WHERE PARAMETER = 'NLS_CHARACTERSET';
```
{% endcode %}
