// import { TodoCounter, TodoList, TodoItem } from './component/index';
import { TodoSearch } from './component/TodoSearch.js';
import { TodoList } from './component/TodoList.js';
import { TodoCounter } from './component/TodoCounter.js';
import { TodoItem } from './component/TodoItem.js';
import { CreateButton } from './component/CreateButton.js';

import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

      <CreateButton/>
      
    </div>
  );
}

export default App;
