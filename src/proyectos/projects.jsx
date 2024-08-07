import React from 'react';
import './projects.css';

function Projects() {

  return (
    <>
      {/* Título Curriculum */}
      <section className='content_page content_proyects'>

        <header className='proyects_header'>
          <h1 className='proyects_title'>Proyectos </h1>
        </header>

        <div className='proyects_container'>

          <nav className='portfolio_navbar'>
            <ul className='portfolio_menu'>
              <li className='portfolio_option portfolio_option--active'>
                <a href='#' className='portfolio_link'>Todo</a>
              </li>
              <li className='portfolio_option'>
                <a href='#' className='portfolio_link'>Front-End</a>
              </li>
              <li className='portfolio_option'>
                <a href='#' className='portfolio_link'>Mobile</a>
              </li>
              <li className='portfolio_option'>
                <a href='#' className='portfolio_link'>Landing Page</a>
              </li>
              <li className='portfolio_option'>
                <a href='#' className='portfolio_link'>e-mail</a>
              </li>
              <li className='portfolio_option'>
                <a href='#' className='portfolio_link'>Back-end</a>
              </li>
              <li className='portfolio_option'>
                <a href='#' className='portfolio_link'>Full Stack</a>
              </li>
            </ul>
          </nav>

        </div>

        <section className='portfolio_gallery'>

          <figure className='gallery_item'>
            <div className='gallery_container_image'>
              <a href='#' className='gallery_link'>
                <img className='gallery_image' src="src/assets/img/galeria-1.jpg" alt="Proyecto-1" />
              </a>
            </div>

            <figcaption className='gallery_title'>Where 2</figcaption>
            <i className='gallery_icon fa-solid fa-user-group'></i>
            <span className='gallery_category'>Full Stack</span>
          </figure>

          <figure className='gallery_item'>
            <div className='gallery_container_image'>
              <a href='#' className='gallery_link'>
                <img className='gallery_image' src="src/assets/img/galeria-2.jpg" alt="Proyecto-1" />
              </a>
            </div>

            <figcaption className='gallery_title'>Where 2</figcaption>
            <i className='gallery_icon fa-solid fa-user-group'></i>
            <span className='gallery_category'>Full Stack</span>
          </figure>

          <figure className='gallery_item'>
            <div className='gallery_container_image'>
              <a href='#' className='gallery_link'>
                <img className='gallery_image' src="src/assets/img/galeria-3.jpg" alt="Proyecto-1" />
              </a>
            </div>

            <figcaption className='gallery_title'>Where 2</figcaption>
            <i className='gallery_icon fa-solid fa-user-group'></i>
            <span className='gallery_category'>Full Stack</span>
          </figure>

          <figure className='gallery_item'>
            <div className='gallery_container_image'>
              <a href='#' className='gallery_link'>
                <img className='gallery_image' src="src/assets/img/galeria-4.jpg" alt="Proyecto-1" />
              </a>
            </div>

            <figcaption className='gallery_title'>Where 2</figcaption>
            <i className='gallery_icon fa-solid fa-user-group'></i>
            <span className='gallery_category'>Full Stack</span>
          </figure>

          <figure className='gallery_item'>
            <div className='gallery_container_image'>
              <a href='#' className='gallery_link'>
                <img className='gallery_image' src="src/assets/img/galeria-5.jpg" alt="Proyecto-1" />
              </a>
            </div>

            <figcaption className='gallery_title'>Where 2</figcaption>
            <i className='gallery_icon fa-solid fa-user-group'></i>
            <span className='gallery_category'>Full Stack</span>
          </figure>

          <figure className='gallery_item'>
            <div className='gallery_container_image'>
              <a href='#' className='gallery_link'>
                <img className='gallery_image' src="src/assets/img/galeria-6.jpg" alt="Proyecto-1" />
              </a>
            </div>

            <figcaption className='gallery_title'>Where 2</figcaption>
            <i className='gallery_icon fa-solid fa-user-group'></i>
            <span className='gallery_category'>Full Stack</span>
          </figure>

        </section>

      </section>

    </>
  )
}

export default Projects
