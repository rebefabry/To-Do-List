import { Todoinput } from "./Components/Search/TodoSearch";
import { TodoTitle } from "./Components/Title/TodoCounter";
import { TodoLists } from "./Components/List/TodoList";
import { TodoItems } from "./Components/ToDoItem/TodoItem";
import { CreateButton } from "./Components/Button/CreateToDoButton";
import { Loader } from "./Components/Loader/Loader";
import { Error } from "./Components/ErrorUI/Error";
import { ListaVacia } from "./Components/ListaVacia/ListaVacia";
import { TodoContext } from "./Context/TodoContext";
import React from "react";
import { Modal } from "./Components/Modal/Modal";
import TodoForm from "./Components/Form/TodoForm"
export function AppUI () {  
   const {loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext)
  return (
        <>
          <TodoTitle/>
          <Todoinput/>
              <TodoLists>
            {loading && <Loader/>}
            {error && <Error/>}
            {(!loading && !error &&
              (searchedTodos.length === undefined
              || searchedTodos.length === 0)) && <ListaVacia/>}

            {searchedTodos.map((todo) => 
            <TodoItems 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />)}
          </TodoLists>
    
          {(!loading && !error) && <CreateButton setOpenModal={setOpenModal}/>};
      
          {openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}
        </>
      );
}

