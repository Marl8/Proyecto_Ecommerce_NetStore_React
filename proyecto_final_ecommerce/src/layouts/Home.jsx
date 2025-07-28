import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import GalleryProducts from '../components/GalleryProducts.jsx'
import logo from '../assets/netstore_logo.svg'
import { handleAddToCart } from '../utils/handleAddToCart.js'

const Home = ({products, setProducts, cart, setCart, isAuthenticated}) => {

  return (
    <div className='home-container'>
      <Header cart={cart} setCart={setCart} isAuthenticated={isAuthenticated}/>
      <div className='home-main'>
        <div style={{background:'linear-gradient(to right, #ffeeee, #ddefbb)', padding: 0, margin: 0}} >
          <img src={logo} style={{margin: '1rem'}} width="50%"  alt="Logo de la tienda" />
        </div>
        <GalleryProducts products={products} setProducts={setProducts} addToCart={(product, cantidadItems)=> {handleAddToCart(cart, setCart, product, cantidadItems)}}/>  
      </div>
      <Footer/>
    </div>
  )
}

export default Home