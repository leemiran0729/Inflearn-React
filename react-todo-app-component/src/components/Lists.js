import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

  const handleEnd = (result) => {
    //onDragEnd는 result 값을 가져올 수 있음
    // 드래그앤드롭 도착지가 없으면 return
    if (!result.desination) return;
    const newTodoData = [...todoData];
    //변경시키려는 아이템을 기존 todoData에서 삭제
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);
    //변경하려는 아이템을 도착 index에 넣음
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      key={data.id}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      className={`${
                        snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
                      } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
                    >
                      <div className="items-center">
                        <input
                          type="checkbox"
                          defaultChecked={false}
                          onChange={() => handleCompletedChange(data.id)}
                        />
                        <span
                          className={
                            data.completed ? "line-through" : undefined
                          }
                        >
                          {data.title}
                        </span>
                      </div>
                      <div className="items-center">
                        <button
                          className="px-4 py-2 float-right"
                          onClick={() => handleClick(data.id)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
