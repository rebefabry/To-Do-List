import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../Context/TodoContext';

export function TodoTitle () {

    const {completedTodos, totalTodos} = React.useContext(TodoContext)

    return (
            <h1>
                Has completado <span className='title'>{completedTodos}</span> de <span className='title'>{totalTodos}</span> tareas.
            </h1>
    )
}