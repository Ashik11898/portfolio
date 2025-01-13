import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { LuTwitter } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { RESUME_JSON } from '../constants';


const DeveloperCard = () => {

  let {name,one_line}=RESUME_JSON.personal

  return (
    <div className='devcard-parent'>
        <div className='devcard-image'></div>
        <div className='dev-name'>{name}</div>
        <div className='dev-content'>{one_line}</div>
        <div className='dev-links'>
          <GrInstagram />
          <LuTwitter />
          <MdOutlineMail />
        </div>
    </div>
  )
}

export default DeveloperCard