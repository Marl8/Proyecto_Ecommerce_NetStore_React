import {NavLink} from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const NavAuth = () => {

  const {isAuthenticated, rol} = useContext(AuthContext)
  
  return (
    <>
      <li className="li-final"> 
          {isAuthenticated && rol === 'Admin'? 
            <NavLink className='link' to="/admin"  style={({ isActive }) => ({
            color: isActive ? '#8fd3fe' : 'white'})}>
              {rol}
            </NavLink> : 
            <NavLink className='link' to="/">
              {rol}
            </NavLink>
          }
      </li>
    </>
  );
};

export default NavAuth;
