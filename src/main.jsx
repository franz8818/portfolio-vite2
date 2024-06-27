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

      <main className='layout_content'>
        <App />
      </main>

      <aside className='layout_aside'>
        <Aside />
      </aside>

      <nav className='layout_menu'>
        <Navbar />
      </nav>
      
    </div>

  </React.StrictMode>,
)
