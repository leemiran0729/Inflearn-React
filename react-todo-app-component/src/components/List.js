import React, { useState } from "react";

const List = React.memo(
  ({ id, title, completed, todoData, setTodoData, provided, snapshot }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleClick = (id) => {
      let newTodoData = todoData.filter((data) => data.id !== id);
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    };

    const handleCompletedChange = (id) => {
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    };

    const onHandleChange = (e) => {
      setEditedTitle(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.title = editedTitle;
        }
        return data;
      });
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
      setIsEditing(false);
    };

    if (isEditing) {
      return (
        <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded bg-gray-100">
          <div className="items-center">
            <form onSubmit={handleSubmit}>
              <input
                value={editedTitle}
                onChange={onHandleChange}
                className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
              />
            </form>
          </div>
          <div className="items-center">
            <button
              className="px-4 py-2 float-right"
              onClick={() => setIsEditing(false)}
            >
              X
            </button>
            <button
              type="submit"
              className="px-4 py-2 float-right"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div
          key={id}
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          className={`${
            snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
          } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
        >
          <div className="items-center">
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => handleCompletedChange(id)}
            />
            <span className={completed ? "line-through" : undefined}>
              {title}
            </span>
          </div>
          <div className="items-center">
            <button
              className="px-4 py-2 float-right"
              onClick={() => handleClick(id)}
            >
              X
            </button>
            <button
              className="px-4 py-2 float-right"
              onClick={() => setIsEditing(true)}
            >
              Edit!!!
            </button>
          </div>
        </div>
      );
    }
  }
);

export default List;
