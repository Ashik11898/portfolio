import React from 'react'
import TitleComponent from '../components/TitleComponent'
import { RESUME_JSON } from '../constants'
import ProjectList from '../components/ProjectList'

const ProjectsPage = () => {
    const HEADING = "RECENT PROJECTS"
    const list = RESUME_JSON.experience
    
  return (
    <div className='section-space'>
        <TitleComponent text={HEADING}/>
        <ProjectList data={list}/>
    </div>
  )
}

export default ProjectsPage