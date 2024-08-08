import React from 'react';
import './contact.css';

function Contact() {

  return (
    <>
      {/* Título Contacto */}
      <section className='content_page content_contact'>

        <header className='contact_header'>
          <h1 className='contact_title'>Contacto</h1>
        </header>

        <div className='contact_container'>

          <section className='contact_info'>

            <div className='contact_data'>
              <i className='fa-solid fa-location-dot'></i>
              <h2 className='contact_subtitle'>Colombia</h2>
            </div>

            <div className='contact_data'>
              <i className='fa-solid fa-phone'></i>
              <h2 className='contact_subtitle'>+57 316 270 23 85</h2>
            </div>

            <div className='contact_data'>
              <i className='fa-solid fa-envelope'></i>
              <h2 className='contact_subtitle'>franz8818@gmail.com</h2>
            </div>

            <div className='contact_data'>
              <i className='fa-solid fa-circle-check'></i>
              <h2 className='contact_subtitle'>Diseñador Front-end</h2>
            </div>

          </section>

          <section className='contact_form-box'>

            <div className='contact_map'></div>

            <header className='contact_form-header'>
              <h3 className='contact_subtitle'>¡Trabajemos <span className='subtitle_color'>juntos!</span> </h3>
            </header>

            <form className='contact_form'></form>

            <div className='form_container'>

              <section className='form_left'>

                <div className='form_group'>
                  <input type='text' className='form_input' name='name' required placeholder='Nombre'></input>
                  <label for="name" className='form_label'>Nombre</label>
                </div>

                <div className='form_group'>
                  <input type='e-mail' className='form_input' name='e-mail' required placeholder='email'></input>
                  <label for="email" className='form_label'>e-mail</label>
                </div>

                <div className='form_group'>
                  <input type='text' className='form_input' name='asunto' required placeholder='Asunto'></input>
                  <label for="subject" className='form_label'>Asunto</label>
                </div>

              </section>

            </div>


          </section >

          <div className='form_right'>

            <div className='form_group'>
              <textarea className='form_input form_input--textarea' name='message' required placeholder='Mensaje'></textarea>
              <label for="message" className='form_label'>Mensaje</label>
            </div>

          </div>

        </div>

      </section >


    </>
  )
}

export default Contact
