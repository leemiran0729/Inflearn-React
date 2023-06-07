# JSX key 속성 이해하기

- key가 없을 경우

```javascript
<ul>
  <li>1</li>
  <li>2</li>
</ul>

<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

- 기존 뒤에 추가하는 경우는 React가 추가됨을 확인하고 3만 업데이트

```javascript
<ul>
  <li>1</li>
  <li>2</li>
</ul>

<ul>
  <li>3</li>
  <li>1</li>
  <li>2</li>
</ul>
```

- 반면, 기존 앞에 추가하는 경우, React는 이를 인식 못 하고 3, 1, 2를 차례대로 업데이트해서 1, 2를 새로 그림

- 이런 경우를 방지하기 위해 key를 사용하여 식별가능하게 함

- 유니크하게 식별해야하는데 배열의 index를 사용하게 되면 매번 바뀌게 됨 -> 식별 어려움
