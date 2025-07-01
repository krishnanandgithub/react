type TodoTask = {
  id: number | undefined;
  task: string | undefined;
  done: boolean;
};

type TodoList = {
  id: number;
  title: string | undefined;
  tasks: TodoTask[];
};

type State = {
  todos: TodoList[];
};

type Action = {
  type: string;
  todoApp?: State;
  todoId?: number;
  taskId?: number;
  title?: string;
  task?: string;
};

export { TodoTask, TodoList, State, Action };
