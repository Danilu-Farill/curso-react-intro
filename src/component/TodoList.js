import '../style/TodoList.css';

function TodoList(props) {
    return (
      <>
        <div className='container_List'>
          <ul>
            {props.children}
          </ul>
        </div>
      </>
    )
  };
  
  export { TodoList };
//   export default TodoList;
