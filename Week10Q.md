학번 :                     이름 :

---
#### 1. 아래의 문장을 참/거짓을 판단하시오. (각 1점)
- Java의 `File` 클래스는 파일이나 디렉터리의 경로와 속성 정보를 관리할 뿐만 아니라, 파일의 내용을 직접 읽거나 쓸 수도 있다. (　　) 
- `Serializable` 인터페이스는 구현해야 할 메서드가 없는 Tagging Interface이다. (　　)
- Sequential-Access Text File은 특정 레코드만 제자리에서 수정하기 어려우므로, 일반적으로 파일 전체를 다시 작성하여 업데이트한다. (　　)
- Java 프로그램이 실행되면 `System.in`, `System.out`, `System.err` 세 가지 표준 스트림 객체가 자동으로 생성된다. (　　)
    
---
#### 2. 아래 문장에서 빈 칸에 들어갈 알맞은 용어를 적으시오. (각 1점)
- Java에서 데이터를 Binary 형식으로 입출력하는 스트림을 (             ) 기반 스트림이라 하고, 데이터를 문자의 시퀀스로 입출력하는 스트림을 (             ) 기반 스트림이라 한다.
- 순차 접근 텍스트 파일에서 형식화된 문자열을 파일에 출력할 때는 (             ) 클래스를, 파일로부터 데이터를 읽어올 때는 (             ) 클래스를 사용한다.
- ㅁ메모리에 있는 객체 전체를 Byte sequence로 변환하여 파일에 저장하거나 읽어오는 기능을 (             ) (이)라한다.
---
#### 3. 아래 프로그램의 수행 결과를 적으시오. (1점)

```java
import java.io.File;

public class FileQuiz {
    public static void main(String[] args) {
        File file = new File("test.txt");
        System.out.println(file.isAbsolute());
        File absFile = new File("/home/user/test.txt");
        System.out.println(absFile.isAbsolute());
        System.out.println(absFile.getName());
    }
}
```

**수행 결과**
```

```
---
#### 4. 빈칸 (A), (B)를 채워 프로그램을 완성하시오. (각 1점)
>다음 코드는 `Account` 객체를 파일에 직렬화하여 저장하는 프로그램이다. <br>`Account` 클래스가 직렬화를 지원하기 위한 인터페이스와 객체를 파일에 출력하기 위한 스트림 클래스를 채우시오.

```java
import java.io.*;
public class Account implements __(A)__ {
    private int id;
    private String name;
    public Account(int id, String name) {
        this.id = id;
        this.name = name;
    }
}
public class SerializeTest {
    public static void main(String[] args) throws IOException {
        __(B)__ out = new __(B)__(new FileOutputStream("accounts.ser"));
        out.writeObject(new Account(1, "Kim"));
        out.close();
    }
}
```
(A) = \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  (B) = \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_