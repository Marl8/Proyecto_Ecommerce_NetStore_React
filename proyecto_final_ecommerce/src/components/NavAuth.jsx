import {Link} from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const NavAuth = () => {

  const {isAuthenticated, rol, setIsAuth, setRol} = useContext(CartContext)
  
  const logOut = ()=>{
    setIsAuth(false);
    setRol('');
    localStorage.removeItem('isAuth');
    localStorage.removeItem('rol');
  }
  
  return (
    <>
      <li className="link"> 
          {isAuthenticated && rol === 'admin'? 
            <Link className='link' to="/admin">{rol}</Link> : 
            <Link className='link' to="/">{rol}</Link>
          }
      </li>

      <li className="link">
        <button className="navButton" onClick={logOut}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </li>
    </>
  );
};

export default NavAuth;
