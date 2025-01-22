import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { LuFolder } from "react-icons/lu";
import { FiBriefcase } from "react-icons/fi";
import { TbTool } from "react-icons/tb";
import { LiaPhoneSolid } from "react-icons/lia";
import { IoMdLogIn } from "react-icons/io";
import { BiEdit } from "react-icons/bi";

const NavbarSection = ( {onScrollToSection,currentComponent,showInputScreen }) => {

  const [selectedIcon, setSelectedIcon] = useState('blog');
  const navigate =useNavigate();

  useEffect(() => {
    // Find the key where the value is true
    const activeSection = Object.keys(currentComponent).find(
      (key) => currentComponent[key]
    );

    if (activeSection) {
      setSelectedIcon(activeSection);
    }
  }, [currentComponent]);

  const handleIconClick = (icon) => {
    if(icon !== "login"){
      setSelectedIcon(icon);
      onScrollToSection(icon)
      
    }
    else{
      navigate("/login")
    }
   
   
    
  };

  const renderIcon = (IconComponent, iconName) => (
    <IconComponent
      className={selectedIcon === iconName ? 'selected' : ''}
      onClick={() => handleIconClick(iconName)}
    />
  );

  return (
    <div className='navbar-parent'>
      <div className="navbar-box">
        {renderIcon(FiHome, 'blog')}
        {renderIcon(LuFolder, 'skills')}
        {renderIcon(FiBriefcase, 'projects')}
        {renderIcon(TbTool, 'experience')}
        {renderIcon(LiaPhoneSolid, 'form')}
        {/* {!showInputScreen && renderIcon(IoMdLogIn , 'login')}
        {showInputScreen && renderIcon(BiEdit , 'edit')} */}

        
      </div>
    </div>
  );



}

export default NavbarSection