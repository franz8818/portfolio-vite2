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
            <a className="menu_link" href='proyectos.jsx'>
              <i className='menu_icon fa-solid fa-briefcase'></i>
              <span className='menu_overlay'>Proyectos</span>
            </a>
          </li>

          <li className='menu_option'>
            <a className="menu_link" href='App.jsx'>
              <i className='menu_icon fa-solid fa-graduation-cap'></i>
              <span className='menu_overlay'>Estudios</span>
            </a>
          </li>

          <li className='menu_option'>
            <a className="menu_link" href='App.jsx'>
              <i className='menu_icon fa-brands fa-github'></i>
              <span className='menu_overlay'>GitHub</span>
            </a>
          </li>
          
          <li className='menu_option'>
            <a className="menu_link" href='App.jsx'>
              <i className='menu_icon fa-brands fa-linkedin'></i>
              <span className='menu_overlay'>LinkedIn</span>
            </a>
          </li>

        </ul>
        
    </>
  )
}

export default Navbar
