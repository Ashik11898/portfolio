import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { LuTwitter } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

const DeveloperCard = () => {
  return (
    <div className='devcard-parent'>
        <div className='devcard-image'></div>
        <div className='dev-name'>MOHAMED ASHIK </div>
        <div className='dev-content'>A Product Designer who has crafted countless user experiences.</div>
        <div className='dev-links'>
          <GrInstagram />
          <LuTwitter />
          <MdOutlineMail />
        </div>
    </div>
  )
}

export default DeveloperCard