import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { todocontext } from './components/Context/Todocontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <todocontext.Provider>
      <App />
  </todocontext.Provider>
  
 
)
