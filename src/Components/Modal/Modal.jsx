import React from 'react'
import ReactDOM  from 'react-dom'
import './Modal.css'

export const Modal = ({children}) => {
  return ReactDOM.createPortal(
      <div className='Modal_Background'>
        {children}
      </div>,
    document.getElementById('modal')
  )
}
