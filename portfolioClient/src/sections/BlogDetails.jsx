import React from 'react'
import TitleComponent from '../components/TitleComponent'
import ContentComponent from '../components/ContentComponent'
import { RESUME_JSON } from '../constants'
const BlogDetails = () => {

  let {role,role_heading,experience}= RESUME_JSON.personal
  return (
    <div className='blog-parent'>
        <TitleComponent text={role[2]}/>
        <ContentComponent content={role_heading}/>
        <div className='experience-parent'>
        <div className='experience-box'>
            <div>+{experience}<p>YEARS OF EXPERIENCE</p></div>
            <div>+10<p>PROJECTS COMPLETED</p></div>
            <div>+20<p>WORLDWIDE CLIENTS</p></div>
        </div>
        <div className='blog-box'>
            <div className='blog-box-left centerCss'></div>
            <div className='blog-box-right centerCss'></div>
        </div>
        
    </div>
    </div>
  )
}

export default BlogDetails