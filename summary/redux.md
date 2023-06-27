# 리덕스란?

- Action: 간단한 자바스크립트 객체
  ```javascript
  {type: 'LIKE_ARTICLE'. articleId: 22}
  ```
  - type: 수행하는 작업의 유형
  - payload: redux 저장소에 일부 데이터를 보내는 데 사용
- Reducer: 애플리케이션 상태 변경 사항을 결정하고 업데이트된 상태를 반환하는 함수
  - 인수로 조치를 취하고 store 내부 상태를 업데이트
  - (previousState, action) => nextState
    - 이전 state과 action object를 받아 next state를 반환
- Store: 내부 상태를 변경하는 유일한 방법은 해당 상태에 대한 action을 전달!
