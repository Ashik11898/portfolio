import React from 'react'

const ContentComponent = ({content}) => {
  return (
    <>
    {content.map((data, index) => (
      <div key={index} className='role-summary'>{data}</div>
    ))}
  </>
  
  )
}

export default ContentComponent