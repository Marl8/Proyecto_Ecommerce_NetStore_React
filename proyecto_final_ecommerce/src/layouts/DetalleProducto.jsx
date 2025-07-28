import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import NotFound from '../components/NotFound.jsx'
import load from '../assets/loading.gif'

const DetalleProducto = ({cart, setCart, isAuthenticated}) => {

const {id} = useParams();
const [product, setProduct] = useState(null)
const [loading, setLoading] = useState(true);

useEffect(()=>{ 
  const findById = async()=>{
    try {
      const response = await fetch('/data/products.json');
      const result = await response.json();
      setTimeout(()=>{
        const prod = result.find(prod => prod.id === parseInt(id))
        setProduct(prod);
        setLoading(false);
      }, 250) 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
findById();
}, [id]);

if(loading){
  return <div><img src={load} alt="Imagen Cargando"/> </div>
}

  return (
    <>
      {
      // Redendizado opcional si existe el producto lo muestra y sino muestra el NotFound  
      product ? (
        <div className='home-container'>
          <Header cart={cart} setCart={setCart} isAuthenticated={isAuthenticated}/>
            <div className='home-main'>
              <h1>Detalle del Producto</h1>
              <p>{product.id}</p>
              <p>{product.nombre}</p>
            </div>
          <Footer/>
        </div>      
      ) : (
        <NotFound/>
      )
    }
  </>  
  )
}

export default DetalleProducto