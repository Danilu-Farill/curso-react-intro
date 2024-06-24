// import { TodoCounter, TodoList, TodoItem } from './component/index';
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
  {text: "Lo sea", complete: true},
  {text: "Lo sea1", complete: false},
  {text: "Lo sea2", complete: false},
  {text: "Lo sea3", complete: false},
]

function App() {
  return (
    <>
      {/* <h2 style={styleTitle}>ESTILOS CON VARIABLES DECLARADAS</h2>
      <h2 style={{fontSize:'18px', background: 'blue'}}>ESTILOS CON DOBLE CORCHETE DE OBJETO</h2> */}

      {/* <h1> */}
        <TodoCounter complete={4} total= {8} />
      {/* </h1>  */}

      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(item => (
          <TodoItem 
          key={item.text}
          list={item.text}
          completed={item.complete}
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
