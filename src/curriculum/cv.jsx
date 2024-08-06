import React from 'react';
import './cv.css'
import certificadoImg from '../assets/img/certificado-1.png';

function Cv() {

  return (
    <>
      {/* Título Curriculum */}
      <section className='content_page content_resume'>

        <header className='resume_header'>
          <h1 className='resume_title'>Curriculum <span className="title_color">on-line</span></h1>
        </header>

        <div className='resume_container'>

          {/* Experiencias & Estudios - Caja izquierda */}
          <section className='resume_left'>

            <header className='resume_subheader'>
              <h2 className='resume_subtitle'>Experiencia</h2>
            </header>

            <div className='resume_timelines'>

              <article className='timelines_timeline'>

                <header className='timeline_header'>
                  <h4 className='timeline_year'>2023</h4>
                  <span className='timeline_company'>Luz inmobiliaria</span>
                </header>

                <div className="timeline_divider"></div>

                <div className='timeline_description'>
                  <h3 className='timeline_title'>Operador de drone</h3>
                  <p className='timeline_text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vitae.
                  </p>
                </div>

              </article>

              <article className='timelines_timeline'>

                <header className='timeline_header'>
                  <h4 className='timeline_year'>2023</h4>
                  <span className='timeline_company'>Luz inmobiliaria</span>
                </header>

                <div className="timeline_divider"></div>

                <div className='timeline_description'>
                  <h3 className='timeline_title'>Editor de vídeos</h3>
                  <p className='timeline_text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vitae.
                  </p>
                </div>

              </article>

              <article className='timelines_timeline'>

                <header className='timeline_header'>
                  <h4 className='timeline_year'>2022</h4>
                  <span className='timeline_company'>Macht Bikes</span>
                </header>

                <div className="timeline_divider"></div>

                <div className='timeline_description'>
                  <h3 className='timeline_title'>Gerente</h3>
                  <p className='timeline_text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vitae.
                  </p>
                </div>

              </article>

            </div>

            <header className='resume_subheader'>
              <h2 className='resume_subtitle'>Estudios</h2>
            </header>

            <div className='resume_timelines'>

              <article className='timelines_timeline'>

                <header className='timeline_header'>
                  <h4 className='timeline_year'>2023</h4>
                  <span className='timeline_company'>Luz inmobiliaria</span>
                </header>

                <div className="timeline_divider"></div>

                <div className='timeline_description'>
                  <h3 className='timeline_title'>Operador de drone</h3>
                  <p className='timeline_text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vitae.
                  </p>
                </div>

              </article>

              <article className='timelines_timeline'>

                <header className='timeline_header'>
                  <h4 className='timeline_year'>2023</h4>
                  <span className='timeline_company'>Luz inmobiliaria</span>
                </header>

                <div className="timeline_divider"></div>

                <div className='timeline_description'>
                  <h3 className='timeline_title'>Editor de vídeos</h3>
                  <p className='timeline_text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vitae.
                  </p>
                </div>

              </article>

              <article className='timelines_timeline'>

                <header className='timeline_header'>
                  <h4 className='timeline_year'>2022</h4>
                  <span className='timeline_company'>Macht Bikes</span>
                </header>

                <div className="timeline_divider"></div>

                <div className='timeline_description'>
                  <h3 className='timeline_title'>Gerente</h3>
                  <p className='timeline_text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vitae.
                  </p>
                </div>

              </article>

            </div>


          </section>

          {/* Habilidades - Caja derecha */}
          <section className='resume_right'>

            <header className='resume_subheader'>
              <h2 className='resume_subtitle'>Habilidades de <span className="subtitle_color">diseño</span></h2>
            </header>

            <div className='resume_skills'>

              <article className='skills_title'>
                <h4 className='skills_text'>Diseño web</h4>
                <span className='skills_number'>90%</span>
              </article>

              <div className='skills_progressbar'>
                <div className='skills_percentage skills_percentage-p1'></div>
              </div>

              <article className='skills_title'>
                <h4 className='skills_text'>Diseño mocups</h4>
                <span className='skills_number'>50%</span>
              </article>

              <div className='skills_progressbar'>
                <div className='skills_percentage skills_percentage-p2'></div>
              </div>

              <article className='skills_title'>
                <h4 className='skills_text'>Diseño logos</h4>
                <span className='skills_number'>60%</span>
              </article>

              <div className='skills_progressbar'>
                <div className='skills_percentage skills_percentage-p3'></div>
              </div>

            </div>

            <header className='resume_subheader'>
              <h2 className='resume_subtitle'>Habilidades de <span className="subtitle_color">código</span></h2>
            </header>

            <div className='resume_skills'>

              <article className='skills_title'>
                <h4 className='skills_text'>HTML & CSS</h4>
                <span className='skills_number'>90%</span>
              </article>

              <div className='skills_progressbar'>
                <div className='skills_percentage skills_percentage-p4'></div>
              </div>

              <article className='skills_title'>
                <h4 className='skills_text'>JavaScrpit</h4>
                <span className='skills_number'>80%</span>
              </article>

              <div className='skills_progressbar'>
                <div className='skills_percentage skills_percentage-p5'></div>
              </div>

              <article className='skills_title'>
                <h4 className='skills_text'>React</h4>
                <span className='skills_number'>60%</span>
              </article>

              <div className='skills_progressbar'>
                <div className='skills_percentage skills_percentage-p6'></div>
              </div>

            </div>

            <header className='resume_subheader'>
              <h2 className='resume_subtitle'>Conocimientos</h2>
            </header>

            <section className='resume_knowledges'>
              <ul className='knowledges_list'>
                <li className='knowledges_option'>Programación</li>
                <li className='knowledges_option'>Desarrolo web</li>
                <li className='knowledges_option'>Diseño web</li>
                <li className='knowledges_option'>Landing Page</li>
                <li className='knowledges_option'>Publicidad</li>
                <li className='knowledges_option'>Edición de vídeos</li>
              </ul>

            </section>

          </section>

        </div>

        <div className='resume_certificates'>

          <header className='resume_subheader'>
            <h2 className='resume_subtitle'>Certificados</h2>
          </header>

          <section className='certificates_container'>

            <article className='certificates_certificate'>
              <div className='certificate_logo'>
                <img src={certificadoImg} className='certificates_image' alt='Certificado' />
              </div>

              <div className='certificates_content'>
                <h4 className='certificates_title'> Full Stack 4Geeks Academy</h4>
                <span className='certificate_id'>ID: 823758</span>
                <span className='certificate_date'>10 de Mayo 2024</span>
              </div>
            </article>

            <article className='certificates_certificate'>
              <div className='certificate_logo'>
                <img src={certificadoImg} className='certificates_image' alt='Certificado' />
              </div>

              <div className='certificates_content'>
                <h4 className='certificates_title'> Full Stack 4Geeks Academy</h4>
                <span className='certificate_id'>ID: 823758</span>
                <span className='certificate_date'>10 de Mayo 2024</span>
              </div>
            </article>

            <article className='certificates_certificate'>
              <div className='certificate_logo'>
                <img src={certificadoImg} className='certificates_image' alt='Certificado' />
              </div>

              <div className='certificates_content'>
                <h4 className='certificates_title'> Full Stack 4Geeks Academy</h4>
                <span className='certificate_id'>ID: 823758</span>
                <span className='certificate_date'>10 de Mayo 2024</span>
              </div>
            </article>

            <article className='certificates_certificate'>
              <div className='certificate_logo'>
                <img src={certificadoImg} className='certificates_image' alt='Certificado' />
              </div>

              <div className='certificates_content'>
                <h4 className='certificates_title'> Full Stack 4Geeks Academy</h4>
                <span className='certificate_id'>ID: 823758</span>
                <span className='certificate_date'>10 de Mayo 2024</span>
              </div>
            </article>



          </section>

        </div>

      </section>

    </>
  )
}

export default Cv
