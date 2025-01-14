import React from 'react'
import TitleComponent from '../components/TitleComponent'
import { RESUME_JSON } from '../constants'
import ProjectList from '../components/ProjectList'

const ProjectsPage = () => {
    const HEADING = "RECENT PROJECTS"
    const list = RESUME_JSON.experience
    
  return (
    <>
        <TitleComponent text={HEADING}/>
        <ProjectList data={list}/>
    </>
  )
}

export default ProjectsPage