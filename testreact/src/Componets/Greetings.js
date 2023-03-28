import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Greetings = () => {
  const [changeTxt,setChangeTxt] = useState(false)
  return (
    <div>
        <h1>Hello stokesy!!</h1>
        {!changeTxt && <Output>This is the first ever greeting</Output>}
        {changeTxt && <Output>Changed!!!</Output>}
        <button onClick={()=>{setChangeTxt(true)}}>Change Text!</button>
    </div>
  )
}

export default Greetings