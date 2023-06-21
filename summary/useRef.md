# ref

- 리액트에서는 ref라는 것을 이용해서 DOM을 선택

  - 클래스 컴포넌트: React.createRef
  - 함수형 컴포넌트: useRef

- DOM 직접 선택해야하는 경우의 예

  - 엘리먼트 크기를 가져와야할 때
  - 스크롤의 위치를 가져와야할 때
  - 엘리먼트의 포커스를 설정해줘야할 때

- useRef 사용법

  - useRef() 이용해서 Ref 객체를 만듦
  - 이 객체를 특정 DOM에 ref값으로 설정
  - Ref객체.current 값으로 특정 DOM 가리킴

  ```javascript
  const ref = useRef();

  ...
  <div className="..." ref={ref}>
  </div>
  ```
