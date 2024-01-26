import './CreateToDoButton.css'
import { MdOutlineNoteAdd } from "react-icons/md";


export function CreateButton ({setOpenModal}) {
    return (
            <div className='button_container'>
                <button className='buttonOpenModal' onClick={() => setOpenModal(state => !state)}><MdOutlineNoteAdd /></button>        
            </div>
    )
}