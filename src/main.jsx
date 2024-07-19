import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App.jsx'
import Navbar from './navbar/navbar.jsx'
import Aside from './aside/aside.jsx'
import Info from './Sobre mí/info.jsx'
import Projects from './proyectos/projects.jsx'
import Cv from './estudios/cv.jsx'
import Contact from './contacto/contact.jsx';

import './index.css'
import './reset.css'
import './scroll.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>

      <div className='layout'>

        <aside className='layout_aside'>
          <Aside />
        </aside>

        <main className='layout_content'>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/info" element={<Info />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <nav className='layout_menu'>
          <Navbar />
        </nav>

      </div>

    </Router>
  </React.StrictMode>
)
