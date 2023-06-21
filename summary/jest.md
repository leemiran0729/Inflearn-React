# Jest 파일 구조 및 사용법

- 파일 구조
  - describe: 여러 관련 테스트를 그룹화하는 블록을 만듦
  - test = it : 개별 테스트를 수행하는 곳, 각 테스트를 작은 문장처럼 설명
    - it는 expect와 matcher로 구성
      - expect: 값을 테스트할 때 사용하는 함수
      - matcher: 다양한 방법으로 값을 테스트하도록 사용됨
  ```javascript
  test("two plus two is four", () => {
    expect(2 + 2).toBe(4);
  });
  ```
