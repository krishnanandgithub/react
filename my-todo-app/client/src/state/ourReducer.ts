import Todos from "../components/todo/Class_Based_Component";
import { Action, State } from "../model/types";

const toggleTask = (state: State, { taskId, todoId }: Action) => {
  const todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      return {
        ...todo,
        tasks: [
          ...todo.tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, done: !task.done };
            }
            return task;
          }),
        ],
      };
    }

    return todo;
  });

  return { ...state, todos };
};

const addTasks = (state: State, { todoId, task }: Action): State => {
  const todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      return {
        ...todo,
        tasks: [...todo.tasks, { id: Date.now(), task, done: false }],
      };
    }

    return todo;
  });

  return { ...state, todos };
};

const addTodo = (state: State, { title }: Action): State => {
  return {
    ...state,
    todos: [...state.todos, { id: Date.now(), title, tasks: [] }],
  };
};

const deleteTodo = (state: State, { todoId }: Action) => {
  return {
    ...state,
    todos: [...state.todos.filter(({ id }) => id !== todoId)],
  };
};

const removeTask = (state: State, { todoId, taskId }: Action) => {
  const todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      return {
        ...todo,
        tasks: [...todo.tasks.filter((task) => task.id !== taskId)],
      };
    }

    return todo;
  });

  return { ...state, todos };
};

export const ourReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "init-todos":
      return { ...state, ...action.todoApp };
    case "toggle-task":
      return toggleTask(state, action);
    case "add-task":
      return addTasks(state, action);
    case "add-todo":
      return addTodo(state, action);
    case "delete-todo":
      return deleteTodo(state, action);
    case "remove-task":
      return removeTask(state, action);
    default:
      return state;
  }
};
