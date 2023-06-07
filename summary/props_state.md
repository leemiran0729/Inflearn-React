# State와 props

- State

  - 부모, 자녀 컴포넌트가 아닌 해당 컴포넌트 내부에서 데이터 전달 시 사용
  - state는 변경 가능
  - state가 변하면 re-render

- Props
  - 상속하는 부모 컴포넌트로부터 자녀 컴포넌트에 데이터 전달
  - props는 읽기 전용
  - 즉, 자녀 컴포넌트에서는 변하지 않고 부모 컴포넌트에서 변경해야함