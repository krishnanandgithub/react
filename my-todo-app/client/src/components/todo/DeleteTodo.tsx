import React from "react";
import { Action } from "../../model/types";

export const DeleteTodo:React.FC<{deleteHandler:React.Dispatch<Action>}> = ({ deleteHandler }) => {
  return (
    <div className="delete-todo">
      <img
        src="./src/assets/square_cross.png"
        alt="delete-icon"
        style={{ height: "30px" }}
        onClick={deleteHandler}
      />
    </div>
  );
};
