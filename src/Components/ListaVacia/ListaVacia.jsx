import './ListaVacia.css'
import RobotPc from '../../Images/RobotPc.png'


export const ListaVacia = () => {
  return (
    <div>
        <p className='First_Task'>Crea tu primera task!</p>
        <img className='Create_Img' src={RobotPc} alt="Crea una task"/>
    </div>
  )
}
