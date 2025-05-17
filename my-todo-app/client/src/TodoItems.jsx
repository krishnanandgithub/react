import { TodoItem } from "./TodoItem.jsx";

export const TodoItems = ({ items, toggle, removeTask }) => {
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
