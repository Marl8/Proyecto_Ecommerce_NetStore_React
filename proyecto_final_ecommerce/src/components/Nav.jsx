import { NavLink } from "react-router-dom";
import logo from "../assets/netstore_logo1.svg";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext.jsx";
import AuthContext from "../context/AuthContext.jsx";
import Cart from "./Cart.jsx";
import NavAuth from "./NavAuth.jsx";
import LogOut from "./LogOut.jsx";

const Nav = () => {
  const { cart, setCartOpen } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);
  const cartCount = cart.length;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ background: "linear-gradient(to bottom, #6c6c6cff, #000000)", color: "white" }}>
      <div className="nav-header">
        <button className="btn-toggle-menu" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      <div className={`nav-menu ${menuOpen ? "open" : "closed"}`}>
        <ul>
          <li className="li-img">
            <NavLink className="link" to={"/"}>
              <img src={logo} alt="Logo" />
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to={"/"} style={({ isActive }) => ({
              color: isActive ? '#0d6efd' : 'white'
            })}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to={"/nosotros"} style={({ isActive }) => ({
              color: isActive ? '#0d6efd' : 'white'
            })}>
              Acerca de
            </NavLink>
          </li>
          <li className={!isAuthenticated ? "li-final" : ''}>
            <NavLink className="link" to={"/contacto"} style={({ isActive }) => ({
              color: isActive ? '#0d6efd' : 'white'
            })}>
              Contacto
            </NavLink>
          </li>

          {isAuthenticated && <NavAuth />}

          <li className="cart-icon-container">
            <button
              className="btnCart-nav"
              onClick={() => setCartOpen(true)}
              aria-label={`Carrito (${cartCount} items)`}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </li>

          <Cart onClose={() => setCartOpen(false)} />

          {isAuthenticated ? (
            <>
              <li>
                <button className="btnUser-nav">
                  <i className="fa-solid fa-user-tie"></i>
                </button>
              </li>
              <LogOut />
            </>
          ) : (
            <li className='boton-login'>
              <NavLink className='link' to={"/Login"}>Login</NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;