import { useState } from "react";

export const TodoInput = ({ handleSubmit, placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const submitHandler = (event) => {
    if (event.key === "Enter" && value) {
      handleSubmit(value);
      setValue("");
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={value}
        placeholder={placeholder || "Add a task"}
        onChange={handleChange}
        onKeyDown={submitHandler}
      />
    </div>
  );
};
