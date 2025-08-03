import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const LogOut = () => {

    const {setIsAuth, setRol} = useContext(AuthContext)

  const logOut = ()=>{
    setIsAuth(false);
    setRol('');
    localStorage.removeItem('isAuth');
    localStorage.removeItem('rol');
  }

  return (
    <li className="link logout-container">
      <button className="navButton" onClick={logOut}>
        <i className="fa-solid fa-right-from-bracket"></i>
      </button>
    </li>
  )
}

export default LogOut