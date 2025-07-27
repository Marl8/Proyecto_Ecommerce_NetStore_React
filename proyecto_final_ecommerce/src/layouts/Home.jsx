import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import GalleryProducts from '../components/GalleryProducts.jsx'
import logo from '../assets/netstore_logo.svg'
import { useState } from 'react'

const Home = ({cart, setCart}) => {

    const [products, setProducts] = useState([]);

    const handleAddToCart =(product, cantidadItems)=>{
    // Si el producto existe devuelve el producto sino devuelve un NULL
    const productExist = cart.find(item => item.id === product.id)

    if(productExist){
      // Si el producto existe actualiza la cantidad
      setCart(cart.map((item) => item.id === product.id ? {...item, cantidad:item.cantidad+cantidadItems}: item ))
    }else{
      // Si el producto no existe significa que es el primero de su tipo en el carrito por lo cual la cantidad va a ser 1
      setCart([...cart,{...product, cantidad:cantidadItems} ])
    }
  }

  return (
    <div className='home-container'>
      <Header cart={cart} setCart={setCart}/>
      <div className='home-main'>
        <div style={{background:'linear-gradient(to right, #ffeeee, #ddefbb)', padding: 0, margin: 0}} >
          <img src={logo} style={{margin: '1rem'}} width="50%"  alt="Logo de la tienda" />
        </div>
        <GalleryProducts products={products} setProducts={setProducts} addToCart={handleAddToCart}/>  
      </div>
      <Footer/>
    </div>
  )
}

export default Home