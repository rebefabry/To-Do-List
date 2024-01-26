import React from 'react'
import { TodoContext } from "../../Context/TodoContext";
import './TodoForm.css'
import RobotHappy from '../../Images/RobotHappyBg.png'



function TodoForm () {

    const {addTodo, setOpenModal} = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

  return (
    <form onSubmit={onSubmit}>
        <label>Escribe tu nueva task</label>
        <textarea placeholder='Buscar hijos al colegio' value={newTodoValue} onChange={onChange} />
        <div className='Button-container'>
            <button type="submit" className='Form-button Form-Button--add'>Agregar</button>
            <img className='Modal_Img' src={RobotHappy} alt="Happy Assistant Robot"/>
            <button type="button" onClick={onCancel} className='Form-button Form-button--cancel'>Cancelar</button>
        </div>
    </form>
  )
}

export default TodoForm;

// <img src={RobotHappy} alt="Happy Assistant Robot" /> //
