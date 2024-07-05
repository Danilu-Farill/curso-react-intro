// import { TodoSearch } from '../component/TodoSearch.js';
// import { TodoList } from '../component/TodoList.js';
// import { TodoCounter } from '../component/TodoCounter.js';
// import { TodoItem } from '../component/TodoItem.js';
// import { CreateButton } from '../component/CreateButton.js';

// function AppUi(todosComplete, totalTodos, searchValue, setSearchValue, todosSearch, onCompletedTodos, onDeleteTodos){
//     return(
//         <>  
//         <TodoCounter complete={todosComplete} total= {totalTodos} />
  
//         <TodoSearch 
//         serchValueProps={searchValue}
//         setSearchValue={setSearchValue}//SINO TIENE EL NOMBRE IGUAL AL PRINCIPIO ME DA ERROR
//         />
  
//         <TodoList>
//           {todosSearch.map(item => (
//             <TodoItem 
//             key={item.text}
//             list={item.text}
//             completed={item.complete}
//             todoItemCompleted={() => onCompletedTodos(item.text)}
//             todoItemDelete={() => onDeleteTodos(item.text)}
//             />
//           ))}
//         </TodoList>
  
//         <CreateButton/>
        
//       </>
//     );
// };

// export { AppUi };

// //COMPONENTES DE LA INTERFAZ