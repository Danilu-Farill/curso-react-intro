import './../style/TodoItem.css'
function TodoItem(props) {
    return (
      <>
        <li>
          <span className={`true Icon-check  ${props.completed && "Icon-check--active"}`}>V</span>
          <p className={`line-complete  ${props.completed && "line-complete-p"}`}>{props.list}</p>
          <span className='delete Icon-delete'>X</span>
        </li>
      </>
    )
  };

  export { TodoItem };

//   export default TodoItem;
