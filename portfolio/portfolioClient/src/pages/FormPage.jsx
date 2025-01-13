import React from 'react'
import TitleComponent from '../components/TitleComponent'
import Form from '../components/Form'
import { FIELDS } from '../constants'

const FormPage = () => {
    const HEADING = ["LET'S WORK", "TOGETHER"]

  return (
    <div className='section-space'>
        <TitleComponent text={HEADING}/>
        <Form list={FIELDS}/>
    </div>
  )
}

export default FormPage