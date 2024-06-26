import React from 'react'
import ReactDOM from 'react-dom/client'
import Aside from './aside/aside.jsx'
import Navbar from './navbar/navbar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='layout'>
    <Aside />
    <Navbar />
    </div>
  </React.StrictMode>,
)
