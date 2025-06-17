const toggleTask = (state, { taskId, todoId }) => {
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

const addTasks = (state, { todoId, task }) => {
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

const addTodo = (state, { todo }) => {
  return {
    ...state,
    todos: [...state.todos, { id: Date.now(), title: todo, tasks: [] }],
  };
};

const deleteTodo = (state, { todoId }) => {
  return {
    ...state,
    todos: [...state.todos.filter(({ id }) => id !== todoId)],
  };
};

const removeTask = (state, { todoId, taskId }) => {
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

export const ourReducer = (state, action) => {
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
