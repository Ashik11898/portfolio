import React from 'react'

const FooterSection = ({openLoginPopup}) => {

  return (
    <div>FooterSection <button onClick={()=>openLoginPopup()}>Click me</button></div>
  )
}

export default FooterSection