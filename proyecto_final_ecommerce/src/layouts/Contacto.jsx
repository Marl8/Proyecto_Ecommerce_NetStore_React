import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

const Contacto = ({cart, setCart}) => {
  return (
    <div className='home-container'>
      <Header cart={cart} setCart={setCart}/>
      <div className='home-main'>
        <h1>Contacto</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default Contacto