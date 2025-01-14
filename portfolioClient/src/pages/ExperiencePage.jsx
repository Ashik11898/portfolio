import React from 'react'
import TitleComponent from '../components/TitleComponent'
import { RESUME_JSON } from '../constants'
import ProjectList from '../components/ProjectList'

const ExperiencePage = () => {
  const HEADING = ["5.4 years of", "Experience"]
 const list = RESUME_JSON.experience
  return (
    <div className='section-space'>
        <TitleComponent text={HEADING} />
        <ProjectList data={list} isExperience/>
    </div>
  )
}

export default ExperiencePage