학번 :                     이름 :
---
#### 1. 아래의 문장을 참(O) / 거짓(X)으로 판단하시오. (각 1점)
- `List` 인터페이스는 순서가 유지되며 중복 원소를 허용하지만, `Set` 인터페이스는 중복 원소를 허용하지 않는다. (     )
- `Map` 인터페이스는 `Collection` 인터페이스로부터 파생된 하위 인터페이스이다. (     )
- `ArrayList`는 기본적으로 모든 연산이 동기화되어 멀티스레드 환경에 안전하다. (     )
- `Collections.binarySearch()` 메서드는 리스트가 정렬되어 있지 않아도 정상적으로 동작한다. (     )
---
#### 2. 아래 문장에서 빈칸에 들어갈 알맞은 용어를 적으시오. (각 1점)
- 컬렉션은 기본 타입을 직접 다룰 수 없으므로, `int`를 `Integer`로 자동 변환하는 것을 (             )(이)라 하고, 반대로 `Integer`를 `int`로 자동 변환하는 것을 (             )(이)라 한다.
- `Collections.copy(dest, src)` 메서드에서 `dest`의 크기가 `src`보다 작으면 (             ) 예외가 발생한다.
- `Stack` 클래스에서 원소를 제거하지 않고 top에 있는 원소의 참조만 확인하는 메서드는 (             )이다.
---
#### 3. 아래 프로그램의 수행 결과를 적으시오. (1점)
```java
import java.util.*;
public class CollectionQuiz {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("C"); list.add("A"); list.add("B"); list.add("A");
        Collections.sort(list);
        System.out.println(list);
        Set<String> set = new HashSet<>(list);
        System.out.println(set.size());
    }
}
```
**수행 결과:**
```


```
---
#### 4. 빈칸 (A), (B)를 채워 프로그램을 완성하시오. (각 1점)
> 다음 코드는 `HashMap`을 사용하여 학생 이름과 점수를 저장한 뒤,  
> 특정 키의 존재 여부를 확인하고, 해당 키에 대응하는 값을 가져오는 프로그램이다.
```java
import java.util.*;
public class MapQuiz {
    public static void main(String[] args) {
        Map<String, Integer> scores = new HashMap<>();
        scores.put("Kim", 90); scores.put("Lee", 85); scores.put("Park", 95);
        if (scores.__(A)__("Lee")) {
            int value = scores.__(B)__("Lee");
            System.out.println("Lee의 점수: " + value);
        }
    }
}
```
출력 결과: `Lee의 점수: 85`
(A) = \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, (B) = \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_