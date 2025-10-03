import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import WhatsAppChat from '../components/WhatsAppChat.jsx'
import cocteles from '../assets/Cocteles.png'

const Acerca = () => {
  return (
    <div className='home-container'>
      <Header />
      <div className='main-container'>
        <h1 style={{margin: '2.5rem', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)'}}>Acerca de Nosotros</h1>
        <img className='img-acerca-de'
          src={cocteles}
          alt="Imagen cocteles" 
          />
        <div className='acerca-text'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Suscipit saepe similique nisi ullam provident deserunt esse voluptatem odio impedit 
          exercitationem unde, iste ipsa corporis cupiditate vitae atque debitis sit iusto.
          </p>
        </div>
      </div>
      <WhatsAppChat/>
      <Footer/>
    </div>
  )
}

export default Acerca