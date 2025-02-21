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

          <section className='contact_form-box'>

            <div className='contact_map'>
              {/* <iframe frameborder="0" marginheight="0" marignwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9821968830474!2d-75.38184222470969!3d6.133094027576386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e469f28acb535cb%3A0x82ee7b7256893f20!2sCra.%2055b%2C%20Rionegro%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1723243348828!5m2!1ses!2sco"></iframe> */}
            </div>

            <form className='contact_form'>

              <div className='form_container'>

                <section className='form_right'>

                  <div className='form_group'>
                    <input type='text' className='form_input' name='name' required placeholder='Nombre'></input>
                    <label for="name" className='form_label'>Nombre</label>
                  </div>

                  <div className='form_group'>
                    <input type='e-mail' className='form_input' name='e-mail' required placeholder='e-mail'></input>
                    <label for="email" className='form_label'>e-mail</label>
                  </div>

                  <div className='form_group'>
                    <input type='text' className='form_input' name='asunto' required placeholder='Asunto'></input>
                    <label for="subject" className='form_label'>Asunto</label>
                  </div>

                  <div className='form_group form_group--textarea'>
                    <textarea className='form_input form_input--textarea' name='message' required placeholder='Mensaje'></textarea>
                    <label for="message" className='form_label'></label>
                  </div>

                </section>

              </div>

              <input type='submit' className='form_button' value="Enviar Mensaje"></input>

              {/* <div className='contact_form-header'>
                <h3 className='form-header_subtitle'>¡Trabajemos <span className='subtitle_color'>juntos!</span> </h3>
              </div> */}

            </form>

          </section >

          <section className='contact_info'>

            <div className='contact_data'>
              <i className='contact_icon fa-solid fa-location-dot'></i>
              <h2 className='contact_subtitle'>Colombia</h2>
            </div>

            <div className='contact_data'>
              <i className='contact_icon fa-solid fa-phone'></i>
              <h2 className='contact_subtitle'>+57 316 270 23 85</h2>
            </div>

            <div className='contact_data'>
              <i className='contact_icon fa-solid fa-envelope'></i>
              <h2 className='contact_subtitle'>franz8818@gmail.com</h2>
            </div>

            <div className='contact_data'>
              <i className='contact_icon fa-solid fa-circle-check'></i>
              <h2 className='contact_subtitle'>Diseñador Front-end</h2>
            </div>

          </section>

        </div>

      </section >

    </>
  )
}

export default Contact
