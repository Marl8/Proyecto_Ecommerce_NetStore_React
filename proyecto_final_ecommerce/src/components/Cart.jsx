import './styles/styleCart.css'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';
import  AuthContext from '../context/AuthContext'; 

const Cart = ({onClose}) => {

  const { cart, isCartOpen, setCartOpen, borrarProducto, vaciarCarrito } = useContext(CartContext)
  const { isAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate();

  const compra = ()=>{ 
    isAuthenticated ? navigate('/purchase') : navigate('/login');
    setCartOpen(false);
  }
  
  return (
    <div className={`cart-drawer ${isCartOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h3>Carrito de Compras</h3>
        <button onClick={onClose} className="close-button">
          ✕
        </button>
      </div>
      <div className={cart.length === 0 ? "cart-content": 'cart-empty'}>
        {cart.length === 0 ? (
          <p style={{ color: "red", textAlign: "center" }}>
            El carrito está vacío.
          </p>
        ) : (
          <>
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
            <div className='total-pagar-container'>
              <p className='total-pagar'>
                Total a pagar: $ {cart.reduce((acum, item) => acum + item.precio * item.cantidad, 0)}
              </p>              
          </div>
          <div className="comprar-btn-container">
            <button className='comprar-btn' aria-label="Finalizar Compra" onClick={compra}>Finalizar Compra</button>
          </div>
        </>
        )}
      </div>
      <div className="vaciar-btn-container">
        <button className='vaciar-btn' aria-label="Vaciar carrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
      </div>
    </div>
  );
};

export default Cart;
