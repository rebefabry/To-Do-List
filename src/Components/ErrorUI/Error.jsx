import './Error.css'
import RobotError from '../../Images/RobotError.png'

export const Error = () => {
  return (
    <div>
        <p className='Error_Message'>Chale, se rompió</p>
        <img className='Error_Img' src={RobotError} alt="Error"/>
    </div>
  )
}
