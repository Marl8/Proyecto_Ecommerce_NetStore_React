import { useState } from "react";
import {Link} from 'react-router-dom';
import "./styles/styleProductos.css";


const Product = ({producto, addToCart}) => {
  const [cantidad, setCantidad] = useState(1);


  const increase = () =>
    setCantidad((prod) => (prod < producto.stock ? prod + 1 : prod));
  const decrease = () => setCantidad((prod) => (prod > 1 ? prod - 1 : 1));

  return (
    <section className="card">
      <div className="imganContainer">
        <img src={producto.imagen} alt="Imagen del Producto" className="imagen" />
      </div>

      <h3 className="nombre">{producto.nombre}</h3>
      <p className="precio">${producto.precio}</p>
      <p className="stock">{producto.stock}</p>

      <div className="cantidadContainer">
        <button className="product-Button" onClick={decrease}>
          -
        </button>
        <span>{cantidad}</span>
        <button className="product-Button" onClick={increase}>
          +
        </button>
      </div>
      <button onClick={() => {
        addToCart(producto, cantidad);
        setCantidad(1);
      }}>
        Agregar al carrito
      </button>     
      <Link to={`/producto/${producto.id}`} className="product-Button">Ver más</Link>
    </section>
  );
};

export default Product;
