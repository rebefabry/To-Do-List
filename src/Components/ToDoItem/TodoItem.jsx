import './TodoItem.css'
import { AiOutlineCheck, AiTwotoneDelete } from 'react-icons/ai'

export function TodoItems(props){
    return (
        <li className='list'>
          <span className={`icon icon-done ${props.completed && "icon-done--active"}`} onClick={props.onComplete}> <AiOutlineCheck/></span>
          <p className={`text ${props.completed && "text-complete"}`}>{props.text}</p>
          <span className='icon icon-delete' onClick={props.onDelete}><AiTwotoneDelete/></span>
        </li>      
    )
  }