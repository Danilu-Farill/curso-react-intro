import React from "react";
import { TodoIcon } from "./TodoIcon.js";

function DeleteTodo(props) {
    return(
      <>
        <TodoIcon type="delete" color="gray" onClick={props.onDelete} />
      </>
    );
}

export { DeleteTodo};