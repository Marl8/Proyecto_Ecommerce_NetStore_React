import { Link } from "react-router-dom";
import logo from "../assets/netstore_logo1.svg";
import { useContext } from "react";
import CartContext from "../context/CartContext.jsx";
import Cart from "./Cart.jsx";
import NavAuth from "./NavAuth.jsx";

const Nav = () => {

  const { cart, setCartOpen, isAuthenticated } = useContext(CartContext)

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
        <li className="li-contacto">
          <Link className="link" to={"/contacto"}>
            Contacto
          </Link>
        </li>
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
          onClose={() => {
            setCartOpen(false);
          }}
        />
        {
          isAuthenticated ? (<NavAuth/>) : 
          (
          <>
            <li className= 'boton-login'>
              <Link className='link' to={"/Login"}>
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
