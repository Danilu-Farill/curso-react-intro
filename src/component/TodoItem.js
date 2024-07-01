import './../style/TodoItem.css'
import { CompleteTodo } from './CompleteTodo.js';
import { DeleteTodo } from './DeleteTodo.js';
function TodoItem(props) {
    return (
      <>
        <li>
          <CompleteTodo completed={props.completed} onCompleted={props.todoItemCompleted} />
          {/* <span className={`Icon Icon-check  ${props.completed && "Icon-check--active"}`} onClick={props.todoItemCompleted}>V</span> */}
          <p className={`line-complete  ${props.completed && "line-complete-p"}`}>{props.list}</p>
          {/* <span className='Icon Icon-delete' onClick={props.todoItemDelete}>X</span> */}
          <DeleteTodo todoItemDelete={props.todoItemDelete} onDelete={props.todoItemDelete} />
        </li>
      </>
    )
  };

  export { TodoItem };

//   export default TodoItem;
