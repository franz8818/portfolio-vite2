import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './navbar/navbar.jsx'
import Aside from './aside/aside.jsx'
import './index.css'
import './reset.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div className='layout'>
    
    <App />
    <Aside />
    <Navbar />
    
    </div>
    
  </React.StrictMode>,
)
