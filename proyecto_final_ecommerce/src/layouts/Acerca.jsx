import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

const Acerca = ({cart, setCart, isAuthenticated}) => {
  return (
    <div className='home-container'>
      <Header cart={cart} setCart={setCart} isAuthenticated={isAuthenticated}/>
      <div className='home-main'>
        <h1>Acerca de Nosotros</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default Acerca