import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";

const PopupWrap = ({children,closePopup}) => {
  return (
    <div className='popup-container'>
        <span className='close-icon' onClick={()=>closePopup()}><IoCloseCircleOutline fontSize={30}/></span>
        {children}
    </div>
  )
}

export default PopupWrap