
import './App.css'
import Addtodo from './components/Addtodo'
import Todolist from './components/Todolist'
import { useState } from 'react'


function App() {
    const[list ,setlist]=useState([
        {
            id: 101,
        data: "todo 2",
            finished:false
        },

        {
            id: 102,
          data: "todo 2",
             finished:true
        }
    ])
  return (
    <>
      <Addtodo updatelist={(el) => {
        setlist([
          ...list, {
            id: list.length,
            data: el,
            finished: false
          }
        ])
      }}/>
      <Todolist list={list}/> 
      
  </>
  )
}

export default App
