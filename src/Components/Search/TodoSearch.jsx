import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../../Context/TodoContext';

export function Todoinput () {

    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    return (
            <input className='search' 
                placeholder="Buscar tarea a completar..."
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                    } 
                }
            />
    )
}