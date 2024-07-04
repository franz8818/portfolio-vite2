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
        </section>

      </section>
    </>
  )
}

export default Info
