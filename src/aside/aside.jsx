import './aside.css'

function Aside() {

  return (
    <>
      <section className='aside_user-info'>
      
      {/* Info de usuario */}
        <div className='user-info_general'>
          
          <div className='user-info_container-image'>
            <img className='user-info_image' src='src/assets/img/1988.jpg' alt='User' />
          </div>


          <h2>
            <div className='user-info_name'>Franz Seidel</div>
          </h2>

          <h4>
            <div className='user-info_job'>Diseñador Front-End</div>
          </h4>

        </div>

        {/* Contacto */}
        <div className='user-info_contact'>
          <ul className='links_social'>

            <li className='social_option'>
              <a className='social_link' href='#'>
                <i className='social_icon fa-brands fa-github'></i>
              </a>
            </li>

            <li className='social_option'>
              <a className='social_link' href='#'>
                <i className='social_icon fa-brands fa-linkedin'></i>
              </a>
            </li>

            <li className='social_option'>
              <a className='social_link' href='#'>
                <i className='social_icon fa-brands fa-instagram'></i>
              </a>
            </li>

          </ul> 
        </div>

          {/* Botón de CV */}
          <div className='user-info_buttons'>
            <a className='user-info_btn' href='#'>Descargar CV</a>
          </div>

          {/* Footer */}
          <footer className='user-info_footer'>
            &copy; 2024 Made with React ♥︎
          </footer>


      </section>

    </>
  )
}

export default Aside
