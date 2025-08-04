import CartContext from "../context/CartContext.jsx";
import { useContext, useEffect, useState } from 'react';
import loading from '../assets/loading.gif'
import NotFound from './NotFound';
import Product from './Product';
import Buscador from "./Buscador.jsx";
import { useQuery } from "../hooks/useQuery.jsx";


const GalleryProducts = () => {
  const { products, error, cargando } = useContext(CartContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const query = useQuery();
  const search = query.get("search"); 

  useEffect(() => {
    if (search) {
      const filtered = products.filter(p => 
        p?.nombre?.toLowerCase().startsWith(search.toLowerCase()));
      console.log('Productos filtrados: ' + filtered)  
      setFilteredProducts(filtered);
    }
  }, [search, products]);

  if (error) {
    return <NotFound />;
  }

  const productsToDisplay = search ? filteredProducts : products;

  return (
    <>
      <div className="gallery-search-container">
        <h2 className="title-gallery">Nuestros productos</h2>
        <Buscador/>
      </div>      
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
        {cargando ? (
          <img src={loading} alt='loading' />
        ) : (
          productsToDisplay.length > 0 ? (
            productsToDisplay.map(producto => (
              <Product key={producto.id} producto={producto}/>
            ))
          ) : (
            <p style={{textAlign:'center'}}>No se encontraron productos</p>
          )
        )}
      </div>
    </>
  );
};

export default GalleryProducts;