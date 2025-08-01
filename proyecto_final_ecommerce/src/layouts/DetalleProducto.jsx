import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import CartContext from "../context/CartContext"
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import NotFound from '../components/NotFound.jsx'
import load from '../assets/loading.gif'
import './style/DetalleProducto.css'

const DetalleProducto = () => {

  const {addToCart, cantidad, setCantidad}= useContext(CartContext);

  const increase = () => setCantidad((prod) => (prod < product.stock ? prod + 1 : prod));
  const decrease = () => setCantidad((prod) => (prod > 1 ? prod - 1 : 1));

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
          <Header/>
            <div className='home-main'>
              <h1>Detalle del Producto</h1>
              <div className="container-style-details">
                <div className='detalle-img'>
                  <img src={product.imagen} alt="Imagen del Producto" />
                </div>
                <p className="p-styles"><strong>Código de Producto:</strong> {product.id}</p>
                <p className="p-styles"><strong> Nombre del Producto:</strong> {product.nombre}</p>
                <p className="p-styles"><strong>Precio: $</strong> {product.precio}</p>
                <p className="p-styles"><strong>Categoria:</strong> {product.categoria}</p>
                <div className="cantidadContainer">
                  <button className="cant-button" onClick={decrease}>
                    -
                  </button>
                  <span>{cantidad}</span>
                  <button className="cant-button" onClick={increase}>
                    +
                  </button>
                </div>
                <button className="boton-compra">Comprar</button>
                <button className="boton-add-cart" onClick={() => {
                  addToCart(product, cantidad);
                  setCantidad(1);
                }}>Agregar al Carrito</button>
              </div>              
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