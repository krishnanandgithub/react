import React from "react";

export const TodoHeading:React.FC<{title:string| undefined}> = ({ title }) => (
  <div className="todo-heading">
    <h2>{title}</h2>
  </div>
);
