```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // 1) 원래 문제의 요구사항: 사용자 입력
        System.out.println("Enter a number :");
        Scanner in = new Scanner(System.in);
        int num = in.nextInt();
        Triangle t = new Triangle(num);
        t.print();
        // 2) 다양한 엣지 케이스 테스트
        int[] testCases = { 4, 1, 0, -3, 7, 10 };
        for (int n : testCases) {
            System.out.println("\n====== num = " + n + " ======");
            Triangle tri = new Triangle(n);
            tri.print();
            System.out.println("=======================");
        }
        in.close();
    }
}
```

```java
public class Main {
    public static void main(String[] args) {
        // 1) 문제에서 제시된 예제
        System.out.println("====== 문제 예제 ======");
        Product pr1 = new Product("Beer", 1300);
        Product pr2 = new Product("Together", -4500);  // 음수 → 10으로 기록됨
        System.out.println("pr2 생성 직후: " + pr2.toString());  // Together 10
        pr2.setPrice(4500);  // 정상 값으로 변경
        System.out.println("pr2 setPrice(4500) 후: " + pr2.toString());  // Together 4500
        System.out.println("pr1: " + pr1.toString());  // Beer 1300
        // 2) 엣지 케이스: 생성 시 price 값 다양하게
        System.out.println("\n====== 생성자 엣지 케이스 ======");
        Product p1 = new Product("과자", 1500);     // 정상
        Product p2 = new Product("음료", 0);        // 0 → 10으로 기록
        Product p3 = new Product("라면", -100);     // 음수 → 10으로 기록
        Product p4 = new Product("초콜릿", 1);      // 최소 양수
        Product p5 = new Product("명품가방", 9999999); // 큰 값
        System.out.println(p1);  // 과자 1500
        System.out.println(p2);  // 음료 10
        System.out.println(p3);  // 라면 10
        System.out.println(p4);  // 초콜릿 1
        System.out.println(p5);  // 명품가방 9999999
        // 3) 엣지 케이스: setPrice()로 값 변경
        System.out.println("\n====== setPrice 엣지 케이스 ======");
        Product p6 = new Product("사탕", 500);
        System.out.println("초기: " + p6);          // 사탕 500
        p6.setPrice(-999);                           // 음수 → 10
        System.out.println("setPrice(-999): " + p6); // 사탕 10
        p6.setPrice(0);                              // 0 → 10
        System.out.println("setPrice(0): " + p6);    // 사탕 10
        p6.setPrice(3000);                           // 정상
        System.out.println("setPrice(3000): " + p6); // 사탕 3000
        // 4) 엣지 케이스: setName() 변경
        System.out.println("\n====== setName 엣지 케이스 ======");
        Product p7 = new Product("원본이름", 2000);
        System.out.println("초기: " + p7);           // 원본이름 2000
        p7.setName("변경된이름");
        System.out.println("변경 후: " + p7);   // 변경된이름 2000
        // 5) get 함수 동작 확인
        System.out.println("\n====== getter 테스트 ======");
        Product p8 = new Product("우유", 2500);
        System.out.println("getName(): "  + p8.getName());   // 우유
        System.out.println("getPrice(): " + p8.getPrice());  // 2500
    }
}
```

```java
public class Main {
    public static void main(String[] args) {
        // 1) 문제에서 제시된 예제
        System.out.println("====== 문제 예제 ======");
        SalesList sl = new SalesList("GDHong");
        for (int i = 0; i < 5; i++) {
            sl.addSale(new Product("과자" + i, 2500 + 9 * i));
        }
        System.out.println(sl);
        System.out.println("Total Sales= " + sl.getTotalPay());
        System.out.println("Avg Price= "   + sl.getAvgPrice());
        System.out.println("Min Items= "   + sl.getMinPriceItem());
        // 2) 엣지 케이스: 빈 리스트
        System.out.println("\n====== 엣지 케이스: 빈 리스트 ======");
        SalesList empty = new SalesList("EmptyCustomer");
        System.out.println(empty);
        System.out.println("Total Sales= " + empty.getTotalPay());    // 0.0
        System.out.println("Avg Price= "   + empty.getAvgPrice());    // 0.0
        System.out.println("Min Items= "   + empty.getMinPriceItem()); // null
        // 3) 엣지 케이스: 제품 1개만 있을 때
        System.out.println("\n====== 엣지 케이스: 단일 제품 ======");
        SalesList single = new SalesList("SoloBuyer");
        single.addSale(new Product("우유", 3000));
        System.out.println(single);
        System.out.println("Total Sales= " + single.getTotalPay());   // 3000.0
        System.out.println("Avg Price= "   + single.getAvgPrice());   // 3000.0
        System.out.println("Min Items= "   + single.getMinPriceItem()); // 우유 3000
        // 4) 엣지 케이스: 음수/0 가격 → Product에서 10으로 보정됨
        System.out.println("\n====== 엣지 케이스: 잘못된 가격 입력 ======");
        SalesList invalid = new SalesList("BadPriceCust");
        invalid.addSale(new Product("공짜과자", 0));     // → 10
        invalid.addSale(new Product("음수상품", -500));  // → 10
        invalid.addSale(new Product("정상상품", 1200));
        System.out.println(invalid);
        System.out.println("Total Sales= " + invalid.getTotalPay());   // 10+10+1200=1220.0
        System.out.println("Avg Price= "   + invalid.getAvgPrice());   // 약 406.67
        System.out.println("Min Items= "   + invalid.getMinPriceItem()); // 공짜과자 10
        // 5) 엣지 케이스: 최소값이 여러 개 (맨 앞 것이 반환됨)
        System.out.println("\n====== 엣지 케이스: 동일 최소값 여러 개 ======");
        SalesList tie = new SalesList("TieCustomer");
        tie.addSale(new Product("A", 2000));
        tie.addSale(new Product("B", 500));   // 최소
        tie.addSale(new Product("C", 3000));
        tie.addSale(new Product("D", 500));   // 동일 최소 (뒤쪽)
        System.out.println(tie);
        System.out.println("Min Items= " + tie.getMinPriceItem()); // B 500 (먼저 나온 것)
        // 6) 엣지 케이스: 많은 제품 추가
        System.out.println("\n====== 엣지 케이스: 제품 100개 ======");
        SalesList many = new SalesList("BigBuyer");
        for (int i = 1; i <= 100; i++) {
            many.addSale(new Product("item" + i, i * 100));
        }
        System.out.println("제품 수: 100");
        System.out.println("Total Sales= " + many.getTotalPay()); // 100+...+10000 = 505000.0
        System.out.println("Avg Price= "   + many.getAvgPrice());    // 5050.0
        System.out.println("Min Items= "   + many.getMinPriceItem()); // item1 100
    }
}
```

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("====== 상속 검증 ======");
        verifyInheritance();
        // 1) 문제에서 제시된 예제
        System.out.println("\n====== 문제 예제 ======");
        TaxProduct p1 = new TaxProduct("Beer",  1500, 0.01);
        TaxProduct p2 = new TaxProduct("Apple", 1500, -0.20);  // 음수 → 0으로 보정
        System.out.println(p1.toString() + "\n" + p2);
        p2.setTaxRate(0.03);
        System.out.println(p2 + ", Tax = " + p2.getTax());
        // 2) 엣지 케이스: taxRate 경계값
        System.out.println("\n====== 엣지 케이스: taxRate 경계 ======");
        TaxProduct t1 = new TaxProduct("정상하한", 1000, 0.0);    // 0 → OK (0 이상)
        TaxProduct t2 = new TaxProduct("정상상한", 1000, 0.999);  // 1 미만 → OK
        TaxProduct t3 = new TaxProduct("초과",    1000, 1.5);    // 초과 → 0
        TaxProduct t4 = new TaxProduct("음수",    1000, -0.1);   // 음수 → 0

        System.out.println(t1 + ", Tax = " + t1.getTax());  // 정상하한 1000 0.0, Tax = 0.0
        System.out.println(t2 + ", Tax = " + t2.getTax());  // 정상상한 1000 0.999
        System.out.println(t3 + ", Tax = " + t3.getTax());  // 초과 1000 0.0
        System.out.println(t4 + ", Tax = " + t4.getTax());  // 음수 1000 0.0
        // 3) 엣지 케이스: price가 0 이하일 때 (부모 Product에서 10으로 보정)
        System.out.println("\n====== 엣지 케이스: price 보정 + tax ======");
        TaxProduct t5 = new TaxProduct("공짜", 0, 0.1);      // price → 10
        TaxProduct t6 = new TaxProduct("음수가격", -500, 0.2); // price → 10
        System.out.println(t5 + ", Tax = " + t5.getTax());    // 공짜 10 0.1, Tax = 1.0
        System.out.println(t6 + ", Tax = " + t6.getTax());    // 음수가격 10 0.2, Tax = 2.0
        // 4) 엣지 케이스: setTaxRate로 값 변경
        System.out.println("\n====== 엣지 케이스: setTaxRate 변경 ======");
        TaxProduct t7 = new TaxProduct("변경테스트", 2000, 0.05);
        System.out.println("초기: " + t7 + ", Tax = " + t7.getTax());  // 2000 * 0.05 = 100.0
        t8.setTaxRate(0.10);
        System.out.println("0.10으로 변경: " + t7 + ", Tax = " + t7.getTax()); // 200.0
        t8.setTaxRate(2.0);  // 범위 밖 → 0으로 보정
        System.out.println("2.0 시도: " + t8 + ", Tax = " + t7.getTax()); // 0.0
        t8.setTaxRate(-0.5); // 음수 → 0으로 보정
        System.out.println("-0.5 시도: " + t7 + ", Tax = " + t7.getTax()); // 0.0
        // 5) 엣지 케이스: 상속받은 setter/getter 사용
        System.out.println("\n====== 엣지 케이스: 상속 setter 동작 ======");
        TaxProduct t9 = new TaxProduct("상속테스트", 1000, 0.1);
        t9.setName("이름변경됨");      // Product의 setter
        t9.setPrice(5000);             // Product의 setter
        System.out.println("getName(): "    + t8.getName());     // 이름변경됨
        System.out.println("getPrice(): "   + t8.getPrice());    // 5000
        System.out.println("getTaxRate(): " + t8.getTaxRate());  // 0.1
        System.out.println("getTax(): "     + t8.getTax());      // 500.0
        System.out.println("toString(): "   + t8);               // 이름변경됨 5000 0.1
    }
    /* TaxProduct가 Product를 상속받았는지 검증 */
    public static void verifyInheritance() {
        TaxProduct tp = new TaxProduct("검증용", 100, 0.05);
        // 검증 1: instanceof
        boolean isProduct = tp instanceof Product;
        System.out.println("TaxProduct가 Product의 인스턴스? " + isProduct);
        // 검증 2: Polymorphism
        Product upcast = tp;
        System.out.println("Product 타입으로 업캐스팅 가능: " + (upcast != null));
        // 검증 3: 부모 클래스의 메소드 사용 가능 여부
        try {
            String name = tp.getName();     // Product에서 상속받은 메소드
            int price   = tp.getPrice();    // Product에서 상속받은 메소드
            System.out.println("부모 메소드 호출 성공 (name=" + name + ", price=" + price + ")");
        } catch (Exception e) {
            System.out.println("부모 메소드 호출 실패 → 상속 구현이 잘못됨!");
        }
        // 검증 4: 클래스 계층 정보 출력
        System.out.println("TaxProduct의 부모 클래스: " + TaxProduct.class.getSuperclass().getName());
        if (!isProduct || !TaxProduct.class.getSuperclass().equals(Product.class)) {
            System.err.println("TaxProduct가 Product를 상속받지 않음");
            System.exit(1);
        } else {
            System.out.println("상속 검증 통과");
        }
    }
}
```