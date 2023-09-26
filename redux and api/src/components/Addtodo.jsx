import React, { useState } from 'react'

const Addtodo = ({updatelist}) => {
    const[input,setinput]=useState("")
  return (
      <div>
          <input type="text"
              placeholder='add your todd'
              value={input}

              onChange={(e) => {
              setinput(e.target.value)
          }} />
          
          <button onClick={()=> (updatelist(input))}>Add todo</button>
    </div>
  )
}

export default Addtodo