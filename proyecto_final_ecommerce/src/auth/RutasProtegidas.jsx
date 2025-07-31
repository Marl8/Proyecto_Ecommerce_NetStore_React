import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

/**
 * @Param isAuthenticated - booleano
 * @Param clindren - componente al cual debe redirigirse si esta logueado. 
 * 
 * El Navigate redirige cuando se renderiza a diferencia del useNavigate que lo hace
 * en la lógica sin que se renderize el componente (por ejemplo en una función que luego
 * sea utilizada por un evento e un botón). 
 * */

function RutaProtegida({ children }) {
  const {isAuthenticated} = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }  
  return children;
}

export default RutaProtegida;

