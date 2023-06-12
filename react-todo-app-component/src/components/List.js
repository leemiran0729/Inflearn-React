import React from "react";

export default function List({ todoData, setTodoData }) {
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  const handleCompletedChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div key={data.id}>
          <input
            type="checkbox"
            defaultChecked={false}
            onChange={() => handleCompletedChange(data.id)}
          />
          {data.title}
          <button onClick={() => handleClick(data.id)}>X</button>
        </div>
      ))}
    </div>
  );
}
