export const TodoItem = ({ task, id, done, toggle, removeTask }) => {
  const getStyle = (status) =>
    status
      ? {
          textDecoration: "line-through",
          color: "darkgray",
          fontStyle: "italic",
        }
      : { textDecoration: "none" };

  return (
    <div className="todo-item" onClick={() => toggle(id)}>
      <div className="task" style={getStyle(done)}>
        {task}
      </div>
      <div className="remove-button">
        <button type="reset" onClick={() => removeTask(id)}>
          <img
            src="./src/assets/delete-icon.png"
            alt="delete-icon"
            style={{ height: "20px" }}
          />
        </button>
      </div>
    </div>
  );
};
