import React from 'react'

const ContentList = ({data}) => {
  let {company,role,duration,projects,location}=data
  // const allTechnologies = projects.flatMap(company => company.technologies);
  const allResponsibility = projects.flatMap(company => company.responsibilities);

    
  return (
    <div className='experince-parent'>
        <div className='experince-company'>{company}</div>
        <div className='experince-role'>{role}</div>
        <ul className='experince-list'>{allResponsibility.map((data, index) => (<li key={index}>{data}</li>))}</ul>
        <div className='working-period'>{duration} - <b>{location}</b></div> 
        {/* <>
            <b>Technologies</b>
            <div className='tech-list'>{allTechnologies.map((data, index) => (<div key={index} >{data},</div>))}</div>
        </> */}
       

        
    </div>
  )
}

export default ContentList