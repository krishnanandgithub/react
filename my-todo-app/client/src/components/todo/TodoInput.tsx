import {  useState } from "react";
import React from "react";

export const TodoInput: React.FC<{
  handleSubmit: (title: string) => void;
  placeholder?: string;
}> = ({ handleSubmit, placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const submitHandler = (event:React.KeyboardEvent<HTMLInputElement>) => {
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
