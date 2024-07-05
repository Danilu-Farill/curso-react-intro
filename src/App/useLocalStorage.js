import React from "react";

function useLocalStorage(itemName, valueInitial) {//DEBE EMPEZAR EN USE PORQUE REACT ASÍ LO PIDE

  const [item, setItem] = React.useState(valueInitial); //este es el estado inicial de mi hook
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(()=>{
    setTimeout(()=> {
      try {
        const localStorageItem = localStorage.getItem(itemName);
      let parseItem;
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(valueInitial));
        parseItem=valueInitial;
      } else {
        parseItem = JSON.parse(localStorageItem);
        setItem(parseItem)
      };
  
      setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true)
      }
    }, 2000)    
  }, []);  
  
  const savedItemLocalStorage = (newItem) =>{
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }
    
  return {
    item,
    savedItemLocalStorage,
    loading,
    error
  };//SOLO RETORNA LO QUE ESTOY NECESITANDO EN App EL SAVE Y EL TODO(AQUÍ SE LLAMA ITEM)
};

export { useLocalStorage};