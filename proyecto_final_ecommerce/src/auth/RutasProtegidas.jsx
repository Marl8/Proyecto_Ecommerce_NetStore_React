import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

/**
 * @Param isAuthenticated - booleano
 * @Param clindren - componente al cual debe redirigirse si esta logueado. 
 * 
 * El Navigate redirige cuando se renderiza a diferencia del useNavigate que lo hace
 * en la lógica sin que se renderize el componente (por ejemplo en una función que luego
 * sea utilizada por un evento e un botón). 
 * */

function RutaProtegida({ children }) {
  const {isAuthenticated} = useContext(CartContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }  
  return children;
}

export default RutaProtegida;

