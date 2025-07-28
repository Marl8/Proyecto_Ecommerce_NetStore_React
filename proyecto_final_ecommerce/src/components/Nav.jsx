import { Link } from "react-router-dom";
import logo from "../assets/netstore_logo1.svg";
import { useState } from "react";
import Cart from "./Cart.jsx";
import NavAdmin from "./NavAdmin.jsx";

const Nav = ({ cart, setCart, isAuthenticated }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  const borrarProducto = (product) => {
    setCart((cart) => {
      /**
       * Si el producto existe y la cantidad del producto existente en el carrito es mayor a 1
       * entonces se resta 1 a la cantidad del producto existente en el carrito (por ejemplo hay seleccionadas 3
       * lapiceras en el carrito se borra 1 y quedan 2).
       * En caso contrario se devuelve un NULL.
       * Por último se filtran todos los productos distintos a NULL y nos quedarán todos los productos existentes en
       * el carrito de compras.
       */
      return cart
        .map((item) => {
          if (item.id === product.id && item.cantidad > 1) {
            return { ...item, cantidad: item.cantidad - 1 };
          } else if (item.id === product.id && item.cantidad === 1) {
            return null;
          } else {
            return item;
          }
        })
        .filter((item) => item != null);
    });
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const cartCount = cart.length;

  return (
    <nav style={{ backgroundColor: "black", color: "white" }}>
      <ul>
        <li className="li-img">
          <Link className="link" to={"./"}>
            <img src={logo} alt="Imagen de tienda" />
          </Link>
        </li>
        <li>
          <Link className="link" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to={"/nosotros"}>
            Acerca de
          </Link>
        </li>
        <li>
          <Link className="link" to={"/contacto"}>
            Contacto
          </Link>
        </li>
        {
        isAuthenticated ? (<NavAdmin />) : (
          <>
            <li className="nav-count-items">Items: {cartCount}</li>
            <li>
              <button
                className="btnCart-nav"
                onClick={() => {
                  setCartOpen(true);
                }}
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </li>
            <Cart
              cart={cart}
              vaciarCart={vaciarCarrito}
              borrarProducto={borrarProducto}
              isOpen={isCartOpen}
              onClose={() => {
                setCartOpen(false);
              }}
            />
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
