import React, { useEffect, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./reducers";
import axios from "axios";

type Props = {
  onIncrement: () => void;
  onDecrement: () => void;
};

interface Post {
  userId: number;
  id: number;
  title: string;
}

function App({ onIncrement, onDecrement }: Props) {
  const dispatch = useDispatch();

  const todos: string[] = useSelector((state: RootState) => state.todos);
  const counter = useSelector((state: RootState) => state.counter);
  const posts: Post[] = useSelector((state: RootState) => state.posts);
  const [todoValue, setTodoValue] = useState("");

  const fetchPosts = (): any => {
    return async function fetchPostsThunk(dispatch: any, getState: any) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({ type: "FETCH_POSTS", payload: response.data });
    };
  };

  useEffect(() => {
    //dispatch가 객체가 아닌 함수를 dispatch -> redux thunk로 해결하자!
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", text: todoValue });
    setTodoValue("");
  };

  return (
    <div className="App">
      Clicked: {counter} times
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
