import React from "react";
import { TodoItem } from "./TodoItem.jsx";
import { TodoTask } from "../../model/types.js";

export const TodoItems :React.FC<{items:TodoTask[],toggle:(id:number)=>void, removeTask:(id:number)=>void}>= ({ items, toggle, removeTask }) => {
  return (
    <div className="todo-items">
      {items.map(({ task, id, done }) => (
        <TodoItem
          key={id}
          id={id}
          task={task}
          done={done}
          toggle={toggle}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};
