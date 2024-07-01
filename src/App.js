// import { TodoCounter, TodoList, TodoItem } from './component/index';
import React from 'react';
import { TodoSearch } from './component/TodoSearch.js';
import { TodoList } from './component/TodoList.js';
import { TodoCounter } from './component/TodoCounter.js';
import { TodoItem } from './component/TodoItem.js';
import { CreateButton } from './component/CreateButton.js';

// const styleTitle = {
//   color: 'blue',
//   background: "yellow",
//   fontSize: 18
// }

const defaultTodos = [
  {text: "TODO NÚMERO 1", complete: false},
  {text: "LISTA NÚMERO 2", complete: false},
  {text: "PENDIENTE NÚMERO 3", complete: false},
  {text: "ANOTACIÓN NÚMERO 4", complete: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  //variables para hacer dinamico complete y total
  const todosComplete = todos.filter(todo => !!todo.complete).length;//doble negación para decir que estas trabajando  booleanos no afectan el resultado
  const totalTodos = todos.length;

  const todosSearch = todos.filter(todo => {
    const todoFilter = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoFilter.includes(searchText);
  });

  const onCompletedTodos = (valueText) => {
    const copyTodos = [...todos];
    const todosIndex = copyTodos.findIndex((todo) => 
      todo.text === valueText
    )
    copyTodos[todosIndex].complete = true;
    setTodos(copyTodos);
  };

  const onDeleteTodos = (valueText) => {
    const copyTodos = [...todos];
    const todosIndex = copyTodos.findIndex((todo) => 
      todo.text === valueText
    )
    copyTodos.splice(todosIndex, 1);
    setTodos(copyTodos);
  }

  return (
    <>
      {/* <h2 style={styleTitle}>ESTILOS CON VARIABLES DECLARADAS EN CASCADA</h2>
      <h2 style={{fontSize:'18px', background: 'blue'}}>ESTILOS CON DOBLE CORCHETE DE OBJETO EN LINEA</h2> */}

      <TodoCounter complete={todosComplete} total= {totalTodos} />

      <TodoSearch 
      serchValueProps={searchValue}
      setSearchValue={setSearchValue}//SINO TIENE EL NOMBRE IGUAL AL PRINCIPIO ME DA ERROR
      />

      <TodoList>
        {todosSearch.map(item => (
          <TodoItem 
          key={item.text}
          list={item.text}
          completed={item.complete}
          todoItemCompleted={() => onCompletedTodos(item.text)}
          todoItemDelete={() => onDeleteTodos(item.text)}

          />
        ))}
        {/* <TodoItem/>
        <TodoItem/>
        <TodoItem/> */}
      </TodoList>

      <CreateButton/>
      
    </>
  );
}

export default App;
