import React from "react";
import { TodoIcon } from "./TodoIcon.js";

function CompleteTodo(props) {
    return(
    <>
    <TodoIcon type="check" color={props.completed ?'blueviolet' : 'gray'} onClick={props.onCompleted} />
    </>
    );
}

export { CompleteTodo};