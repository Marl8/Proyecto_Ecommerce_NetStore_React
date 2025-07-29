import CartContext from "../context/CartContext.jsx";
import { useContext } from 'react';
import loading from '../assets/loading.gif'
import NotFound from './NotFound';
import Product from './Product';

const GalleryProducts = () => {
  
  const {products, addToCart, error, cargando} = useContext(CartContext)
  
  if(error){
    return <NotFound/>
  }

  return (
    <>
      <h2 style={{padding: '1.5rem'}}>Nuestros productos</h2>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
          {
              cargando ? <img src={loading} alt='loading' /> :
              products.map(producto => (
                  <Product key={producto.id} producto={producto} addToCart= {addToCart}/>
              ))
          }
      </div>
    </>
  )
};

export default GalleryProducts