---
description: Oracle Logdump에 관한 문서이다.
---

# Oracle Logdump

## 간단 명령어 정리

| 명령어                           | 설명                                   |
| ----------------------------- | ------------------------------------ |
| open ./dirdat/\<fullfilename> | trail file을 연다                       |
| nexttrail                     | 다음 trail file을 연다                    |
| fileheader on                 | Trail File Header를 출력한다              |
| ghdr on                       | Record Header를 출력한다                  |
| detail on                     | Column Information을 추가 출력한다          |
| detail Data                   | Hex값과 ASCII 값을 추가 출력한다               |
| reclen \<value>               | value만큼 recode data가 화면에 출력          |
| pos 0                         | 시작점으로 이동                             |
| n(next) \<value>              | 1 record 출력, value 있을 시 value만큼 출력한다 |
| count                         | Trail File의 정보를 출력한다                 |
| usertoken detail              | <p><br></p>                          |
| ggstoken detail               | <p><br></p>                          |
| headertoken detail            | <p><br></p>                          |
| filter rectype \<type>        | type인 Record만 표시한다                   |
