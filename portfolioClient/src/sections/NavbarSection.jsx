import React,{useState,useEffect} from 'react'
import { FiHome } from "react-icons/fi";
import { LuFolder } from "react-icons/lu";
import { FiBriefcase } from "react-icons/fi";
import { TbTool } from "react-icons/tb";
import { LiaPhoneSolid } from "react-icons/lia";

const NavbarSection = ( {onScrollToSection,currentComponent }) => {

  const [selectedIcon, setSelectedIcon] = useState('blog');

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
    setSelectedIcon(icon);
    onScrollToSection(icon)
    
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
      </div>
    </div>
  );



}

export default NavbarSection