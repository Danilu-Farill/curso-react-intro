import React from 'react';
import '../style/TodoSearch.css';

function TodoSearch({serchValue, setSearchValue}) {
    return (
      <>
      <input placeholder="Hacer formulario con react"
      value={serchValue}
        onChange={(e)=> {
          console.log("hola")
          setSearchValue(e.target.value);
        }
      }/>
      </>
    )
  };
  
  export { TodoSearch }
// export default TodoSearch;
