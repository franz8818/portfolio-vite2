import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const getLinkClassName = ({ isActive }) => isActive ? "menu_link menu_link--active" : "menu_link";

  return (
    <ul className='menu_list'>
      <li className='menu_option'>
        <NavLink exact className={getLinkClassName} to='/'>
          <i className='menu_icon fa-solid fa-house'></i>
          <span className='menu_overlay'>Home</span>
        </NavLink>
      </li>
      <li className='menu_option'>
        <NavLink className={getLinkClassName} to='/info'>
          <i className='menu_icon fa-solid fa-user'></i>
          <span className='menu_overlay'>Sobre mí</span>
        </NavLink>
      </li>
      <li className='menu_option'>
        <NavLink className={getLinkClassName} to='/projects'>
          <i className='menu_icon fa-solid fa-briefcase'></i>
          <span className='menu_overlay'>Proyectos</span>
        </NavLink>
      </li>
      <li className='menu_option'>
        <NavLink className={getLinkClassName} to='/cv'>
          <i className='menu_icon fa-solid fa-clipboard-check'></i>
          <span className='menu_overlay'>CV on-line</span>
        </NavLink>
      </li>
      <li className='menu_option'>
        <NavLink className={getLinkClassName} to='/contact'>
          <i className="menu_icon fa-solid fa-envelope"></i>
          <span className='menu_overlay'>Contacto</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
