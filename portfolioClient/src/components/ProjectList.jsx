import React from 'react'
import img1 from "../assets/images/Mautourco-B2B.png"
import img2 from "../assets/images/truckonnect.png"
import img3 from "../assets/images/bayer.png"
import ContentList from './ContentList'


const ProjectList = ({data,isExperience}) => {
    
   let images = [img1,img2,img3]
    
    
  return (
    <div>
        {data.slice(0, 3).map((list, id) =>
            !isExperience ? (
            <div key={list.company + id} className="list-card">
                <div className="list-image-block"><img src={images[id]} alt="project-image" /></div>
                <div>
                    <p>{list.projects[0].name}</p>
                    <p>{list.company}</p>
                    <p>{list.location}</p>
                    <button>Show More</button>
                </div>
            </div>
            ) : <ContentList data={list}/>
        )}
    </div>

  )
}

export default ProjectList