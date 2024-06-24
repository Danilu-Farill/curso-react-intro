import '../style/TodoCounter.css';

function TodoCounter(props) { //o complete, total
  return (
    <>
    <h1>Has completado {props.complete} de {props.total} TODOS</h1>
    </>
  )
};

export { TodoCounter };
// export default TodoCounter;
