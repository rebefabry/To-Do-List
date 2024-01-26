import './Loader.css'
import RobotLoader from '../../Images/RobotLoader.png'

export const Loader = () => {
  return (
    <div>
    <div className='loader'></div>
    <img className='Loader_Img' src={RobotLoader} alt="Cargando"/>
    </div>
  )
}
