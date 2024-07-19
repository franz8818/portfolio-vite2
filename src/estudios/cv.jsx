import React from 'react';
import './cv.css'

function Cv() {

  return (
    <>
      {/* Título Curriculum */}
      <section className='content_page content_resume'>

        <header className='resume_header'>
          <h2 className='resume_title'>Curriculum <span className="title_color">on-line</span></h2>
        </header>

        <div className='resume_container'>

          {/* Experiencias & Estudios - Caja izquierda */}
          <section className='resume_left'>

            <header className='resume_subheader'>
              <h2 className='resume_subtitle'>Experiencia</h2>
            </header>

            <div className='resume_timelines'>

              <articles className='timelines_item'>

                <header className='timeline_header'>
                  <h4 className='timeline_year'>2023</h4>
                  <span className='timeline_company'>Luz inmobiliaria</span>
                </header>

                <di className="timeline_divider"></di>

                <div className='timeline_description'>
                  <h3 className='timeline_title'>Operador de drone</h3>
                  <p className='timeline_description'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vitae.
                  </p>
                </div>

                <header className='timeline_header'>
                  <h4 className='timeline_year'>2023</h4>
                  <span className='timeline_company'>Luz inmobiliaria</span>
                </header>

                <di className="timeline_divider"></di>

                <div className='timeline_description'>
                  <h3 className='timeline_title'>Editor de vídeos</h3>
                  <p className='timeline_description'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vitae.
                  </p>
                </div>
                
                <header className='timeline_header'>
                  <h4 className='timeline_year'>2022</h4>
                  <span className='timeline_company'>Macht Bikes</span>
                </header>

                <di className="timeline_divider"></di>

                <div className='timeline_description'>
                  <h3 className='timeline_title'>Editor de vídeos</h3>
                  <p className='timeline_description'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vitae.
                  </p>
                </div>

              </articles>

            </div>

            <header className='resume_subheader'>
              <h2 className='resume_subtitle'>Estudios</h2>
            </header>

          </section>

          {/* Habilidades - Caja derecha */}
          <section className='right'>

            <header className='resume_subheader'>
              <h2 className='resume_subtitle'>Habilidades de diseño</h2>
            </header>

            <header className='resume_subheader'>
              <h2 className='resume_subtitle'>Habilidades de código</h2>
            </header>

          </section>

        </div>

      </section>

    </>
  )
}

export default Cv
