import React from 'react'

const ContentList = ({data}) => {
  let {company,role,duration,projects,location}=data
  const allTechnologies = projects.flatMap(company => company.technologies);
  const allResponsibility = projects.flatMap(company => company.responsibilities);
  console.log(data);
  console.log("allTechnologies",allTechnologies);
    
  return (
    <div className='experince-parent'>
        <div className='experince-box'>
            <b>{company}</b>
            <div><b>Position:- </b>{role}</div>
        </div>
        
        <div style={{marginTop:"10px"}}>{duration} - <b>{location}</b></div>
        <ul>{allResponsibility.map((data, index) => (<li key={index}>{data}</li>))}</ul>
        <>
            <b>Technologies</b>
            <div className='tech-list'>{allTechnologies.map((data, index) => (<div key={index} >{data},</div>))}</div>
        </>
       

        
    </div>
  )
}

export default ContentList