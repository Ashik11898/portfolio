import React from 'react'
import TitleComponent from '../components/TitleComponent'
import Form from '../components/Form'
import { FIELDS } from '../constants'

const FormPage = () => {
    const HEADING = ["LET'S WORK", "TOGETHER"]

  return (
    <>
        <TitleComponent text={HEADING}/>
        <div style={{marginTop:"50px"}}><Form list={FIELDS}/></div>
    </>
  )
}

export default FormPage