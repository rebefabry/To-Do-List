import React from "react";

export function useLocalStorage(itemName, initialValue){
    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
     setTimeout(() => {
      
      try {

        //throw new Error//
        const localStorageItem = localStorage.getItem(itemName)

        let parsedItem;

        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem)
        }

        setLoading(false)
          } catch(error){
          setLoading(false)
          setError(true)
        }
      }, 3000)
     }, []) 
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
  
    return {item, saveItem, loading, error}
  
  }
