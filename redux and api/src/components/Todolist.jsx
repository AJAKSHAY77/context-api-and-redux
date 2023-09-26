import React, { useState } from 'react'
import Todo from './Todo'

const Todolist = ({list}) => {
  
     
  return (
      <div>
          {list.map((el) => (<Todo key={el.id} isfinished={el.finished}  tododata={el.data}/>))}   
       
    </div>
  )
}

export default Todolist