import React from 'react'

const Form = ({list}) => {
  return (
    <form >
        <div className='form-box'>
            {
                list.map((data)=>(
                    <div key={data.id}>
                        <p>{data.label}</p>
                        <input {...data} />
                    </div>
                ))
            }
        </div>
       <textarea rows="4" cols="50" defaultValue="Text here"></textarea>
       <input type="submit" value="submit" className='submit-btn'/>
    </form>
  )
}

export default Form