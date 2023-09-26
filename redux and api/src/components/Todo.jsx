import React from 'react'

const Todo = ({tododata,isfinished}) => {
  return (
      <div>
          
          <input type='checkbox' checked={isfinished} />
          {tododata}
          <button>Edit</button>
          <button>Delete</button>
    </div>
  )
}

export default Todo