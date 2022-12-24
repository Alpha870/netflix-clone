import './Profile.css'
import Header from '../../components/Header/Header'

const Profile = () => {
  return (
    <section className='section-profile' >
      <Header />
        <article className='article-profile'>
          <div className='div-profile'>
            <h3>Editar Perfil</h3>
            <h5>Plans</h5>
              <div className='div-interno'>
                <p>Netflix Standard</p>
                <button>Suscribirse</button>
                <p>Netflix Basic</p>
                <button>Suscribirse</button>
                <p>Netflix Premium</p>
                <button>Suscribirse</button>
              </div>
              <button className='salir-profile'>Salir</button>
          </div>
        </article>
    </section>
 
    )
}

export default Profile