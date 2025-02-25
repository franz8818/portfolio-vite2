import React from 'react';
import './info.css'


function Info() {

  return (
    <>

      <section className='content_page content_about'>

        {/* Sobre Mí */}
        <section className='about_personal-info'>

          <header className='about_header'>
            <h2 className='about_title'>
              Sobre <span className="title_color">Mí</span>
            </h2>
          </header>

          <div className='personal-info_container'>

            <article className='personal-info_bio'>
              <p className='personal-info_description'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ipsam, sed adipisci officia possimus quibusdam minus quaerat blanditiis? Ex laudantium, eligendi alias enim consectetur quae vitae odit beatae nesciunt quod?
              </p>
            </article>

            <div className='personal-info_data'>
              <ul className='personal-info_list'>
                <li className='personal-info_option'>
                  <span className='personal-info_title'>Ubicación:</span>
                  <span className='personal-info_value'>Medellin, Colombia</span>
                </li>
                <li className='personal-info_option'>
                  <span className='personal-info_title'>correo:</span>
                  <span className='personal-info_value'>franz8818@gmail.com</span>
                </li>
                <li className='personal-info_option'>
                  <span className='personal-info_title'>Teléfono:</span>
                  <span className='personal-info_value'>+57 316 270 2385 </span>
                </li>
              </ul>
            </div>

          </div>

        </section>

        {/* Lo que hago */}
        <section className='about_services'>

          <header className='services_header'>
            <h2 className='services_title'>
              Lo que <span className="title_color">hago</span>
            </h2>
          </header>

          <div className='services_container'>

            <article className='services_service'>

              <div className='service_real-icon'>
                <i className='service_real-icon fa-solid fa-code'></i>
              </div>

              <div className='service_content'>
                <h4 className='service-title'>Diseño web</h4>
                <p className='service_description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

            </article>

            <article className='services_service'>

              <div className='service_icon'>
                <i className="service_real-icon fa-solid fa-laptop-code"></i>
              </div>

              <div className='service_content'>
                <h4 className='service-title'>Maquetación web</h4>
                <p className='service_description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

            </article>

            <article className='services_service'>

              <div className='service_icon'>
                <i className='service_real-icon fa-solid fa-circle-user'></i>
              </div>

              <div className='service_content'>
                <h4 className='service-title'>UX/UI</h4>
                <p className='service_description'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate sed vitae consectetur accusamus saepe aliquid eos quo ducimus, autem in assumenda pariatur repudiandae quisquam quia ipsam beatae, odit illo.
                </p>
              </div>

            </article>

            <article className='services_service'>

              <div className='service_icon'>
                <i className='service_real-icon fa-solid fa-circle-user'></i>
              </div>

              <div className='service_content'>
                <h4 className='service-title'>UX/UI</h4>
                <p className='service_description'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate sed vitae consectetur accusamus saepe aliquid eos quo ducimus, autem in assumenda pariatur repudiandae quisquam quia ipsam beatae, odit illo.
                </p>
              </div>

            </article>

          </div>

        </section>

        {/* Información extra */}
        {/* <section className='about_extra'>
          
          <header className='extra_header'>
            <h2 className='extra_title'>
              Información <span className='title_color'>Extra</span>
            </h2>
          </header>

          <div className='extra_container'>
            <article className='extra_info'>
              <i className='extra_icon fa-solid fa-heart'></i>
              <h4 className='extra_subtitle'>Clientes contentos</h4>
              <span className='extra_quantity'>375.000</span>
            </article>

            <article className='extra_info'>
              <i className='extra_icon fa-solid fa-clock'></i>
              <h4 className='extra_subtitle'>Horas de trabajo</h4>
              <span className='extra_quantity'>800</span>
            </article>

            <article className='extra_info'>
              <i className='extra_icon fa-solid fa-star'></i>
              <h4 className='extra_subtitle'>Valoración</h4>
              <span className='extra_quantity'>8</span>
            </article>
          </div>
        </section> */}

      </section>
    </>
  )
}

export default Info
