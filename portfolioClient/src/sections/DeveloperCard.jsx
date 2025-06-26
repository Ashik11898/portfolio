import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { LuTwitter } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { RESUME_JSON } from '../constants';
import ownerImg from "../assets/images/owner.jpg"

const DeveloperCard = () => {

  let {name,one_line}=RESUME_JSON.personal

  return (
    <div className='devcard-parent'>
        <div className='devcard-image'><img src={ownerImg} alt="profile-image"/></div>
        <div className='dev-name'>{name}</div>
        <div className='dev-content'>{one_line}</div>
        <div className='dev-links'>
          <GrInstagram />
          <LuTwitter />
          <MdOutlineMail />
          <a href="https://www.linkedin.com/in/mohamed-ashik-9a2b431a4/"><FaLinkedin/></a>
        </div>
    </div>
  )
}

export default DeveloperCard
