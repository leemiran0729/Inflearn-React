# JSX 알아보기

- 원래 리액트에서 화면 그리는 방식

  ```javascript
  const myelement = React.createElement("h1", {}, "Hello!");

  ReactDOM.render(myelement, document.getElementById("root"));
  ```

  - React.createElement API 사용하여 엘리먼트 생성 -> 객체됨
  - 이 엘리먼트가 In-memory에 저장됨
  - ReactDOM.render 함수 사용하여 실제 웹 브라우저에 그려짐

- JSX는 위 과정을 쉽게 사용가능하게 함

  - JSX로 작성하면 Babel이 createElement 사용하여 변환해줌

- JSX 규칙
  - 태그는 꼭 닫혀야함
  - 최상위 태그로 두 개 이상의 태그는 감싸줘야함
  - 자바스크립트 값을 JSX내부에서 사용원할 시 {}로 감싸줘야함
  - class 대신 className 사용
