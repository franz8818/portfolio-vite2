import React from 'react';
import './info.css'


function Info() {

  return (
    <>
      {/* Título Sobre Mí */}
      <section className='content_page content_about'>
        <header className='about_header'>
          <h2 className='about_title'>Sobre <span className="title_color">Mí</span></h2>
        </header>

        {/* Sobre Mí */}
        <section className='about_personal-info'>

          <article className='personal-info_bio'>
            <p className='personal-info_description'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ipsam, sed adipisci officia possimus quibusdam minus quaerat blanditiis? Ex laudantium, eligendi alias enim consectetur quae vitae odit beatae nesciunt quod?
              Qui repellat ipsum expedita sapiente pariatur laborum voluptate dolore quas voluptates. Doloremque, vitae voluptatem earum, aliquid fuga iusto dolore suscipit maxime quaerat illo quibusdam quidem numquam, nisi deserunt incidunt voluptatibus.
            </p>
          </article>

          <div className='personal-info_data'>
            <ul className='personal-info_list'>
              <li className='personal-info_option'>
                <span className='personal-info_title'>Ubicación</span>
                <span className='personal-info_value'>Medellin, Colombia</span>
              </li>
              <li>
                <span className='personal-info_title'>Correo electronico</span>
                <span className='personal-info_value'>franz8818@gmail.com</span>
              </li>
              <li>
                <span className='personal-info_title'>Teléfono</span>
                <span className='personal-info_value'>+57 316 270 2385 </span>
              </li>
            </ul>
          </div>

        </section>

        <section className='about_services'>
          <header className='services_header'>
            <h3 className='services'>
              Lo que <span className="title_color">hago</span>
            </h3>
          </header>

          <div className='service_container'>

            <article className='services_service'>
             
              <div className='service_icon'>
                <i className='fa-solid fa-code'></i>
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
              <i className="fa-solid fa-laptop-code"></i>
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
                <i className='fa-solid fa-circle-user'></i>
              </div>

              <div className='service_content'>
                <h4 className='service-title'>UX/UI</h4>
                <p className='service_description'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate sed vitae consectetur accusamus saepe aliquid eos quo ducimus, autem in assumenda pariatur repudiandae quisquam quia ipsam beatae, odit illo.
                  Dolorem eligendi rem eveniet placeat ut et dolor, consequatur necessitatibus debitis a voluptatibus labore tempore facere exercitationem sed excepturi magnam iste molestiae consectetur, minus at, id ex beatae? Quasi, corporis!
                  Minima ipsum iure, voluptatem error ab ullam dicta corporis harum ipsa laudantium doloremque rerum voluptatibus fuga, quibusdam nisi. Obcaecati possimus aperiam reiciendis iusto officiis ex doloremque beatae maiores dolorum eligendi.
                  Minus molestias eos voluptas! Dolores esse quasi iusto tempora quo velit unde, nostrum autem corrupti hic incidunt asperiores dicta animi tempore laudantium praesentium vitae quis. Rerum dignissimos accusantium quisquam vitae!
                  Deserunt alias animi cum debitis accusamus, id corporis in ducimus quo vero non voluptate quis illum necessitatibus minus quibusdam beatae voluptatibus reiciendis quidem veritatis provident dolorem fuga. Nobis, perspiciatis quos!
                  Itaque illum obcaecati voluptas hic iure odit magni deleniti, veritatis laboriosam exercitationem commodi fugiat dignissimos dicta iusto? Mollitia quam provident accusamus optio maxime, sint culpa sunt assumenda magni repellat qui.
                  Esse, eos modi consequatur nesciunt odio sunt quam possimus nam vel repudiandae corrupti laudantium rem? Accusantium veniam porro in sint iste? Eum, soluta ab? Eum assumenda in accusantium amet fuga?
                  Quisquam cupiditate sint accusamus perferendis numquam beatae omnis excepturi incidunt eveniet dolorum, ad accusantium voluptas veritatis similique quos, asperiores velit voluptate. Distinctio, sequi non dolorem enim consequuntur aspernatur error tempora.
                  Ratione minima assumenda aperiam repudiandae sapiente. Quos, maiores ea obcaecati laboriosam earum excepturi minima dolores, odit praesentium veritatis aperiam fugit adipisci eius iste at nam temporibus autem dolore dolorem ullam.
                  Pariatur aliquam quaerat numquam similique, veniam architecto commodi illo. Sed modi reiciendis quos facilis! Vitae adipisci fuga eos illum magni. Laborum quos maxime incidunt natus suscipit aut expedita quis impedit.

                </p>
              </div>

            </article>



          </div>

        </section>


      </section>
    </>
  )
}

export default Info
