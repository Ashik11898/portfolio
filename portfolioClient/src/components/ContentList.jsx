import React from 'react'

const ContentList = ({data}) => {
  let {company,role,duration,projects,location}=data
  // const allTechnologies = projects.flatMap(company => company.technologies);
  const allResponsibility = projects.flatMap(company => company.responsibilities);
  const projectName = projects.flatMap(project => project.name);
  const Projects = projects.map((data,ind)=>(
                  <div key={ind}>
                    <div className='experince-role centerCss_text' style={{color:"#fff",marginTop:"20px"}}>{data.name}</div>
                    <ul className='experince-list'>{data.responsibilities.map((data, index) => (<li key={index}>{data}</li>))}</ul>
                  </div>))

    
  return (
    <div className='experince-parent'>
        <div className='experince-company'>{company}</div>
        <div className='experince-role'>{role}</div>
        <>{Projects}</>
        <div className='working-period'>{duration} - <b>{location}</b></div> 
        {/* <>
            <b>Technologies</b>
            <div className='tech-list'>{allTechnologies.map((data, index) => (<div key={index} >{data},</div>))}</div>
        </> */}
       

        
    </div>
  )
}

export default ContentList