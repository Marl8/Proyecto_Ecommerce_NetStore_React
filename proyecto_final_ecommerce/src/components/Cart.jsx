import './styles/styleCart.css'
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const Cart = ({onClose}) => {

  const { cart, isCartOpen, borrarProducto, vaciarCarrito } = useContext(CartContext)
  
  return (
    <div className={`cart-drawer ${isCartOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h3>Carrito de Compras</h3>
        <button onClick={onClose} className="close-button">
          ✕
        </button>
      </div>
      <div className="cart-content">
        {cart.length === 0 ? (
          <p style={{ color: "red", textAlign: "center" }}>
            El carrito está vacío.
          </p>
        ) : (
          <ul className="cart-item">
            {cart.map((item, index) => (
              <div>
                <li key={index} style={{ color: "black" }}>
                  <div className='cart-item-view'>
                    <p>{item.nombre} - $ {item.precio}</p>
                    Cantidad: {item.cantidad}
                  <button onClick={() => borrarProducto(item)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  </div> 
                </li>
              </div>
            ))}
          </ul>
        )}
      </div>
      <div className="vaciar-btn">
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      </div>
    </div>
  );
};

export default Cart;
