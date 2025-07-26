import {useState, useEffect} from 'react'
import loading from '../assets/loading.gif'
import NotFound from './NotFound';
import Product from './Product';

const GalleryProducts = ({products, setProducts, addToCart}) => {
  const [cargando, setCarga] = useState(true)
  const [error, setError] = useState(false)


  useEffect(()=>{
    const findProducts = async () =>{
      try{
        const response = await fetch('/data/products.json')
        const result = await response.json();
        setTimeout(()=>{
          setProducts(result)
          setCarga(false)
        },1000)
      } catch (error) {
        console.error('Error fetching data:', error);
        setCarga(false);
        setError(true);
      }
    }
    findProducts();
  }, [setProducts])

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