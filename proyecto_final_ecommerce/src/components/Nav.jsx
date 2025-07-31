import { NavLink } from "react-router-dom";
import logo from "../assets/netstore_logo1.svg";
import { useContext } from "react";
import CartContext from "../context/CartContext.jsx";
import AuthContext from "../context/AuthContext.jsx";
import Cart from "./Cart.jsx";
import NavAuth from "./NavAuth.jsx";

const Nav = () => {

  const { cart, setCartOpen } = useContext(CartContext)
  const { isAuthenticated } = useContext(AuthContext);

  const cartCount = cart.length;

  return (
    <nav style={{ backgroundColor: "black", color: "white" }}>
      <ul>
        <li className="li-img">
          <NavLink className="link" to={"./"}>
            <img src={logo} alt="Imagen de tienda" />
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to={"/"} style={({ isActive }) => ({
            color: isActive ? '#8fd3fe' : 'white'})}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to={"/nosotros"} style={({ isActive }) => ({
            color: isActive ? '#8fd3fe' : 'white'})}>
            Acerca de
          </NavLink>
        </li>
        <li className="li-contacto">
          <NavLink className="link" to={"/contacto"} style={({ isActive }) => ({
            color: isActive ? '#8fd3fe' : 'white'})}>
            Contacto
          </NavLink>
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
              <NavLink className='link' to={"/Login"}>
                Login
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
