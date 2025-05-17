import { TodoHeading } from "./TodoHeading.jsx";
import { TodoInput } from "./TodoInput.jsx";
import { TodoItems } from "./TodoItems.jsx";

const DeleteTodo = ({ deleteHandler }) => {
  return (
    <div className="delete-todo">
      <button type="reset" onClick={deleteHandler}>
        <img
          src="./src/assets/delete-icon.png"
          alt="delete-icon"
          style={{ height: "30px" }}
        />
      </button>
    </div>
  );
};

export const Todo = ({ todo, dispatch }) => {
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
        removeTask={(id) =>
          dispatch({ type: "remove-task", taskId: id, todoId: todo.id })
        }
        toggle={(id) =>
          dispatch({ type: "toggle-task", taskId: id, todoId: todo.id })
        }
      />
    </div>
  );
};
