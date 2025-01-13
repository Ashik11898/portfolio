import React from 'react'
import { FiHome } from "react-icons/fi";
import { LuFolder } from "react-icons/lu";
import { FiBriefcase } from "react-icons/fi";
import { TbTool } from "react-icons/tb";
import { LiaPhoneSolid } from "react-icons/lia";

const NavbarSection = () => {
  return (
    <div className='navbar-parent'>
        <div className='navbar-box'>
          <FiHome />
          <LuFolder />
          <FiBriefcase />
          <TbTool />
          <LiaPhoneSolid />
        </div>
    </div>
  )
}

export default NavbarSection