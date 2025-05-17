import { createContext, useEffect, useReducer, useState } from "react";
import { Todo } from "./Todo.jsx";
import { ourReducer } from "./ourReducer.jsx";
import "./App.css";
import { TodoInput } from "./TodoInput.jsx";

export const TodosContext = createContext(null);

const Todos = () => {
  
  useEffect(() => {
    fetch("http://localhost:8000/api/todos")
    .then((d) => d.json())
    .then((d) => {
      dispatch({ type: "init-todos", todoApp: d });
    });
  }, []);
  
  const [state, dispatch] = useReducer(ourReducer, { todos: [] });
  return (
    <div className="todos">
      <h1>Create Your Todos</h1>
      <TodoInput
        placeholder="Add a todo..."
        handleSubmit={(todo) => dispatch({ type: "add-todo", todo })}
      />
      {state.todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default Todos;
