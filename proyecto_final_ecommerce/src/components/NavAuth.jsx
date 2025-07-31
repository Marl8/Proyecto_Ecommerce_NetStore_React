import {NavLink} from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const NavAuth = () => {

  const {isAuthenticated, rol, setIsAuth, setRol} = useContext(AuthContext)
  
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
            <NavLink className='link' to="/admin"  style={({ isActive }) => ({
            color: isActive ? '#8fd3fe' : 'white'})}>
              {rol}
            </NavLink> : 
            <NavLink className='link' to="/"  style={({ isActive }) => ({
            color: isActive ? '#8fd3fe' : 'white'})}>
              {rol}
            </NavLink>
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
