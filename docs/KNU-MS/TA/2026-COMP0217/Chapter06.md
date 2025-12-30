## 1. Introduction to Program Modules in Java

[cite_start]대규모 프로그램을 개발하고 유지보수하는 가장 좋은 방법은 프로그램을 작고 단순한 조각, 즉 modules로 구성하는 것이다[cite: 20, 21]. [cite_start]이 접근 방식은 divide and conquer라고 불린다[cite: 21]. [cite_start]Java 프로그램은 프로그래머가 작성한 methods와 classes, 그리고 Java Application Programming Interface 등에서 제공되는 predefined methods와 classes를 조합하여 구성된다[cite: 31]. [cite_start]관련된 classes는 일반적으로 packages로 그룹화되어 프로그램 내로 import하여 재사용할 수 있다[cite: 32].

[cite_start]Methods는 프로그램의 작업을 독립적인 단위로 분리하여 모듈화하는 것을 돕는다[cite: 36]. [cite_start]Method 본문의 문장들은 한 번만 작성되며, 다른 methods로부터 숨겨져 있고, 프로그램 내 여러 위치에서 재사용될 수 있다[cite: 38, 39, 40]. [cite_start]이는 소프트웨어 재사용성을 높이고 디버깅과 유지보수를 용이하게 한다[cite: 43, 45].

[cite_start]Method 호출은 계층적인 boss-method/worker-method 관계와 유사하다 [cite: 48, 59][cite_start]. caller(boss)는 worker(called method)에게 작업을 수행하고 결과를 보고하도록 요청한다[cite: 49]. [cite_start]Boss method는 worker method가 작업을 수행하는 구체적인 구현 세부 사항을 알지 못하며, 이러한 구현 세부 사항의 은닉(hiding)은 좋은 소프트웨어 공학을 촉진한다[cite: 50, 52].

![PDF p.7: Hierarchical boss-method/worker-method relationship]

## 2. static Methods, static Fields and Class Math

[cite_start]때때로 method는 특정 object의 내용에 의존하지 않는 작업을 수행한다[cite: 63]. [cite_start]이러한 methods는 class 전체에 적용되며 static method 또는 class method라고 알려져 있다[cite: 64, 65]. [cite_start]Method를 static으로 선언하려면 method 선언의 반환 유형 앞에 keyword static을 배치한다 [cite: 67][cite_start]. static method를 호출할 때는 `ClassName.methodName(arguments)` 형식을 사용한다[cite: 68, 69].

[cite_start]Class Math는 일반적인 수학 계산을 수행하기 위한 static methods의 모음을 제공한다[cite: 70]. [cite_start]주요 Math methods에는 `abs(x)`, `ceil(x)`, `cos(x)`, `exp(x)`, `floor(x)`, `log(x)`, `max(x, y)`, `min(x, y)`, `pow(x, y)`, `sin(x)`, `sqrt(x)`, `tan(x)` 등이 있다[cite: 73, 76, 77, 78, 82, 83, 85, 87, 108, 113, 116, 119].

![PDF p.9: Math class methods]

[cite_start]Math class는 일반적인 수학 상수를 위한 fields인 `Math.PI`와 `Math.E`를 포함한다[cite: 124, 125, 126]. [cite_start]이들은 public, final, static으로 선언된다 [cite: 127][cite_start]. public은 다른 classes에서 사용할 수 있게 하며, final은 값이 초기화된 후 변경될 수 없음을 의미한다 [cite: 128, 129][cite_start]. static fields(class variables)는 class의 모든 objects가 공유하는 하나의 복사본만을 가진다[cite: 133, 134]. [cite_start]반면 instance variable은 class의 각 object마다 별도의 메모리 공간을 가진다[cite: 132].

[cite_start]Main method가 static으로 선언되는 이유는 JVM이 class의 객체가 생성되지 않은 상태에서 main method를 호출해야 하기 때문이다[cite: 138, 139].

## 3. Declaring Methods with Multiple Parameters

[cite_start]Method는 콤마로 구분된 리스트를 통해 여러 개의 parameters를 가질 수 있다[cite: 142]. [cite_start]Method 호출 시에는 method 선언에 있는 각 parameter에 대해 하나의 argument가 있어야 하며, 각 argument는 대응하는 parameter의 type과 일치해야 한다[cite: 143, 144].

![PDF p.16: Programmer-declared method maximum with three double parameters]

## 4. Notes on Declaring and Using Methods

[cite_start]Method를 호출하는 세 가지 방법이 있다[cite: 251].
1. [cite_start]같은 class 내의 다른 method를 호출할 때는 method 이름만 사용한다[cite: 252].
2. [cite_start]객체를 참조하는 변수 뒤에 점(.)과 method 이름을 붙여 해당 객체의 method를 호출한다[cite: 253, 255].
3. [cite_start]Class 이름 뒤에 점(.)을 붙여 class의 static method를 호출한다[cite: 256].

[cite_start]Non-static method는 같은 class의 모든 method와 fields를 직접 조작할 수 있다[cite: 258]. [cite_start]반면 static method는 같은 class의 다른 static methods만 직접 호출할 수 있고 static fields만 직접 조작할 수 있다[cite: 259].

[cite_start]Method에서 제어를 호출자에게 반환하는 방법은 세 가지가 있다[cite: 264].
1. [cite_start]프로그램 흐름이 method의 닫는 중괄호에 도달했을 때[cite: 265].
2. [cite_start]`return;` 문이 실행될 때[cite: 266, 267].
3. [cite_start]`return expression;` 문이 실행되어 결과를 반환할 때[cite: 268, 269].

## 5. Method-Call Stack and Activation Records

[cite_start]Stack 데이터 구조는 접시 더미와 유사한 후입선출(LIFO) 구조이다[cite: 274, 275, 278]. [cite_start]항목을 맨 위에 놓는 것을 push, 맨 위에서 제거하는 것을 pop이라 한다[cite: 276, 277]. [cite_start]프로그램이 method를 호출할 때, 호출된 method가 호출자에게 복귀하기 위한 return address가 program-execution stack에 push된다[cite: 282, 283].

[cite_start]이 stack은 method 호출 시 사용되는 local variables를 위한 메모리도 포함하며, 이를 activation record 또는 stack frame이라고 한다[cite: 284, 285]. [cite_start]Stack에 저장할 수 있는 activation records보다 더 많은 method 호출이 발생하면 stack overflow 오류가 발생한다[cite: 286].

## 6. Argument Promotion and Casting

[cite_start]Argument promotion은 argument의 값을 method가 예상하는 parameter type으로 변환하는 것이다[cite: 289, 290]. [cite_start]Java의 promotion rules는 허용되는 변환을 명시하며, 일반적으로 더 작은 범위의 타입에서 더 큰 범위의 타입으로의 변환(예: int에서 double로)은 데이터 손실 없이 수행된다[cite: 292, 296].

![PDF p.24: Promotions allowed for primitive types]

## 7. Java API Packages

[cite_start]Java는 많은 predefined classes를 packages라는 카테고리로 그룹화하여 제공한다[cite: 302]. [cite_start]주요 패키지로는 `java.applet`, `java.awt` (GUI), `java.io` (입출력), `java.lang` (기본 언어 클래스), `java.net` (네트워크), `java.sql` (데이터베이스), `java.util` (유틸리티), `javax.swing` (Swing GUI) 등이 있다[cite: 308, 311, 313, 316].

## 8. Case Study: Random-Number Generation

[cite_start]시뮬레이션과 게임에는 element of chance가 필요하다[cite: 320, 321]. [cite_start]Java는 `java.util` 패키지의 `Random` class와 `Math` class의 static method `random`을 제공한다[cite: 322, 323]. [cite_start]`Random` class는 pseudorandom numbers를 생성하며, 현재 시간을 seed로 사용하여 난수 생성기를 초기화한다[cite: 324, 325]. [cite_start]`nextInt(int n)` method는 0부터 n-1까지의 값을 반환한다[cite: 327, 328].

[cite_start]일반화된 난수 스케일링 및 이동 공식은 다음과 같다[cite: 502].
`number = shiftingValue + randomNumbers.nextInt(scalingFactor);`
[cite_start]여기서 `shiftingValue`는 시작 값을, `scalingFactor`는 범위 내의 숫자의 개수를 의미한다[cite: 504].

[cite_start]연속적이지 않은 값들의 집합에서 난수를 선택할 때는 다음 공식을 사용한다[cite: 506].
`number = shiftingValue + differenceBetweenValues * randomNumbers.nextInt(scalingFactor);`

[cite_start]디버깅 시 정확히 같은 순서의 난수를 반복하기 위해 `Random` 객체 생성 시 `seedValue`를 제공할 수 있다[cite: 509, 510].
[cite_start]`Random randomNumbers = new Random(seedValue);`[cite: 511, 512].

![PDF p.31: Shifted and scaled random integers code example]

## 9. Scope of Declarations

[cite_start]Scope는 프로그램 내에서 선언된 개체를 이름으로 참조할 수 있는 영역이다[cite: 519].
1. [cite_start]Parameter 선언의 scope는 해당 method의 본문이다[cite: 521].
2. [cite_start]Local-variable 선언의 scope는 선언된 지점부터 해당 블록의 끝까지이다[cite: 522].
3. [cite_start]Method나 field의 scope는 class 본문 전체이다[cite: 524].
[cite_start]Method 내의 local variable이 class의 field와 같은 이름을 가질 경우, local variable이 field를 가린다(shadow)[cite: 546].

![PDF p.39: Scope class demonstrating scopes of a field and local variables]

## 10. Method Overloading

[cite_start]Method overloading은 같은 class 내에 같은 이름을 가진 methods를 여러 개 선언하는 것이다[cite: 640, 641]. [cite_start]단, 이들은 반드시 서로 다른 parameter sets를 가져야 한다[cite: 642]. [cite_start]컴파일러는 호출 시 argument의 수, 타입, 순서를 검사하여 적절한 method를 선택한다[cite: 643]. [cite_start]이를 통해 유사한 작업을 수행하지만 다른 타입이나 개수의 입력값을 처리하는 methods를 만들 수 있다[cite: 644].

[cite_start]Overloaded methods는 서로 다른 return types를 가질 수 있지만, return type만으로는 method를 구분할 수 없다[cite: 735, 736]. [cite_start]즉, 서명(signature)이 동일하고 반환 타입만 다른 경우 컴파일 오류가 발생한다[cite: 737].

![PDF p.46: Overloaded method declarations with identical signatures cause compilation errors]

## 11. GUI and Graphics Case Study (Optional)

Java의 `Graphics` methods를 사용하여 화면에 도형을 그릴 수 있다. [cite_start]`drawRect(x, y, width, height)`는 사각형을 그리며, `drawOval(x, y, width, height)`은 bounding rectangle 내에 접하는 타원을 그린다[cite: 783, 785, 787].

[cite_start]컴퓨터 화면의 색상은 RGB 값(Red, Green, Blue)으로 정의되며, `java.awt` 패키지의 `Color` class를 사용한다[cite: 940, 941]. [cite_start]`Color` class는 `Color.BLACK`, `Color.BLUE` 등 13개의 미리 정의된 static Color objects를 제공한다[cite: 942]. [cite_start]또한 `new Color(r, g, b)` 생성자를 사용하여 사용자 정의 색상을 만들 수 있다[cite: 945].

[cite_start]채워진 도형을 그리기 위해 `fillRect`와 `fillOval` methods를 사용하며, 그리기 색상을 설정하기 위해 `setColor` method를 사용한다[cite: 947, 948]. [cite_start]일반적으로 이러한 그리기 작업은 `JPanel`을 상속받은 class의 `paintComponent(Graphics g)` method 내에서 수행된다[cite: 823, 950].

![PDF p.55: Drawing a smiley face using colors and filled shapes]