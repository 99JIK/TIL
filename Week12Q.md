학번 :                     이름 :
---
#### 1. 아래의 문장을 참(O) / 거짓(X)으로 판단하시오. (각 1점)
- 동시성(Concurrency)이란 두 작업이 동시에 진척을 보이는 상태를 의미하며, 병렬성(Parallelism)이란 실제로 동일한 시간에 동시에 실행되는 것을 의미한다. (     )
- 객체 참조를 `final`로 선언하면 참조 자체를 변경할 수 없을 뿐만 아니라, 참조된 객체 내부의 데이터도 변경할 수 없게 된다. (     )
- `wait()`, `notify()`, `notifyAll()` 메서드는 `Thread` 클래스의 메서드이다. (     )
- `ExecutorService`의 `shutdown()` 메서드는 새로운 작업 수락을 중단하지만, 이미 제출된 기존 작업들의 실행은 계속 유지한다. (     )
---
#### 2. 아래 문장에서 빈칸에 들어갈 알맞은 용어를 적으시오. (각 1점)
- 높은 우선순위 스레드가 지속적으로 유입되어 낮은 우선순위 스레드의 실행이 무한이 연기되는 현상을 (             )(이)라 하고, 두 개 이상의 스레드가 서로 상대방이 가진 락을 기다리며 영원히 진행할 수 없는 상태를 (             )(이)라 한다.
- 자바의 `Runnable` 상태는 OS 레벨에서 Ready 상태와 `Running` 상태로 나뉘며, `Ready` 상태의 스레드가 프로세서에 할당되어 `Running` 상태로 전이되는 과정을 (             )(이)라 한다.
- 스레드가 해당 객체의 모니터 락을 획득하지 않은 상태에서 `wait()`이나 `notify()`를 호출하면 (             ) 예외가 발생한다.
---
#### 3. 아래 프로그램의 수행 결과를 적으시오. (1점)
```java
import java.util.concurrent.*;
public class ExecutorQuiz {
	public static void main(String[] args) throws InterruptedException {
		ExecutorService executor = Executors.newSingleThreadExecutor();
		executor.execute(()->System.out.print("A "));
		executor.execute(()->System.out.print("B "));
		executor.shutdown();
		executor.awaitTermination(1, TimeUnit.MINUTES);
		System.out.print("Done");
	}
}
```
**수행 결과:**
```


```
---
#### 4. 빈칸 (A), (B)를 채워 프로그램을 완성하시오. (각 1점)
> 다음 코드는 `ArrayBlockingQueue`를 사용한 동기화 버퍼이다. 큐가 가득 차면 자리가 날 때까지 대기하며 값을 넣고, 큐가 비어 있으면 값이 들어올 때까지 대기하며 값을 꺼낸다.
```java
import java.util.concurrent.ArrayBlockingQueue;
public class BlockingBufferQuiz {
    private final ArrayBlockingQueue<Integer> buffer = new ArrayBlockingQueue<>(1);
    public void blockingPut(int value) throws InterruptedException {
        buffer.__(A)__(value); // 큐가 가득 차면 자리가 날 때까지 대기하며 값을 넣음
    }
    public int blockingGet() throws InterruptedException {
        return buffer.__(B)__(); // 큐가 비어있으면 값이 들어올 때까지 대기하며 값을 꺼냄
    }
}
```
(A) = \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, (B) = \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_