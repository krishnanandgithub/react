import { TodoHeading } from "./TodoHeading.jsx";
import { TodoInput } from "./TodoInput.jsx";
import { TodoItems } from "./TodoItems.jsx";
import { DeleteTodo } from "./DeleteTodo.jsx";
import React from "react";
import { Action, State, TodoList } from "../../model/types.js";

export const Todo:React.FC<{todo:TodoList, dispatch:React.Dispatch<Action>}> = ({ todo, dispatch }) => {
  return (
    <div className="todo-app">
      <div className="todo-header">
        <TodoHeading title={todo.title} />
        <DeleteTodo
          deleteHandler={() => {
            dispatch({ type: "delete-todo", todoId: todo.id });
          }}
        />
      </div>
      <TodoInput
        handleSubmit={(task) =>
          dispatch({ type: "add-task", task, todoId: todo.id })
        }
      />
      <TodoItems
        items={todo.tasks}
        removeTask={(id:number) =>
          dispatch({ type: "remove-task", taskId: id, todoId: todo.id })
        }
        toggle={(id:number) =>
          dispatch({ type: "toggle-task", taskId: id, todoId: todo.id })
        }
      />
    </div>
  );
};
