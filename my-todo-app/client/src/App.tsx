import { useEffect, useReducer } from "react";
import { Todo } from "./components/todo/Todo.js";
import { ourReducer } from "./state/ourReducer.js";
import "./App.css";
import { TodoInput } from "./components/todo/TodoInput.js";
import { TodoList } from "./model/types.js";

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
        handleSubmit={(title: string) => dispatch({ type: "add-todo", title })}
      />
      {state.todos.map((todo: TodoList) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default Todos;
