import './aside.css'

function Aside() {

  return (
    <>
     

        {/* Barra lateral - info usuario */}
        <aside className='layout-aside'>

          <section className='aside-user-info'>

            {/* Información general usuario */}
            <div className='user-info_general'>

              <div className='user-info_container-image'>
                <img src='src/assets/img/1988.jpg' alt='User' />
              </div>

            </div>

            <h2>
              <div className='user-info_name'>Franz Seidel</div>
            </h2>

            <h4>
              <div className='user-info_job'>Diseñador Front-End</div>
            </h4>

            {/* Manú de navegación */}
            {/* Contacto */}
            {/* Botón de CV */}
            {/* Footer */}

          </section>

        </aside>


    </>
  )
}

export default Aside
