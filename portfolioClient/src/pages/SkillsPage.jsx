import React from 'react'
import { RESUME_JSON } from '../constants'
import TitleComponent from '../components/TitleComponent'

const SkillsPage = () => {
    let skills = RESUME_JSON.technical_skills
    const HEADING ="Technical Skills"
  return (
    <>
        <TitleComponent text={HEADING}/>
        <div className='skill-block'>{skills.map((skill, index) => <div key={index} className='skill-item'>{skill}</div>)}</div>
    </>
  )
}

export default SkillsPage