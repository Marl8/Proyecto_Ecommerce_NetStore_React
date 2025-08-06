import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import GalleryProducts from '../components/GalleryProducts.jsx'
import WhatsAppChat from '../components/WhatsAppChat.jsx'
import logo from '../assets/netstore_logo.svg'

const Home = () => {

  return (
    <div className='home-container'>
      <Header/>
      <div className='home-main'>
        <div style={{background:'linear-gradient(to right, #ffeeee, #ddefbb)', padding: 0, margin: 0}}>
          <img src={logo} style={{margin: '1rem'}} width="50%"  alt="Logo de la tienda" />
        </div>
        <GalleryProducts/>  
      </div>
      <WhatsAppChat/>
      <Footer/>
    </div>
  )
}

export default Home