import React from 'react'

const TitleComponent = ({text}) => {
    let textString = typeof text ==="string" ? text.split(" "):text
   
    
  return (
    <div className='role-name'>
        <p>{textString[0]}</p>
        <p>{textString[1]}</p>
    </div>

  )
}

export default TitleComponent