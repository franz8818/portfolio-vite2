import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {

  return (
    <>
      {/* Manú de navegación */}

        <ul className='menu_list'>

          <li className='menu_option'>
            <Link className="menu_link" to='/'>
              <i className='menu_icon fa-solid fa-house'></i>
              <span className='menu_overlay'>Home</span> {/* Es un contenedor en línea. Sirve para aplicar estilo al texto o agrupar elementos en línea. */}
            </Link>
          </li>

          <li className='menu_option'>
            <Link className="menu_link" to='/info'> {/* Para navegar entre componente y componente utilizamos React Router y las etiqueta <link> y el to="" */}
              <i className='menu_icon fa-solid fa-user'></i>
              <span className='menu_overlay'>Sobre mí</span>
            </Link>
          </li>

          <li className='menu_option'>
            <Link className="menu_link" to='/projects'>
              <i className='menu_icon fa-solid fa-briefcase'></i>
              <span className='menu_overlay'>Proyectos</span>
            </Link>
          </li>

          <li className='menu_option'>
            <Link className="menu_link" to='/studys'>
              <i className='menu_icon fa-solid fa-graduation-cap'></i>
              <span className='menu_overlay'>Estudios</span>
            </Link>
          </li>

          <li className='menu_option'>
            <Link className="menu_link" to='/contact'>
              <i className="menu_icon fa-solid fa-envelope"></i>
              <span className='menu_overlay'>Contacto</span>
            </Link>
          </li>

        </ul>
        
    </>
  )
}

export default Navbar
