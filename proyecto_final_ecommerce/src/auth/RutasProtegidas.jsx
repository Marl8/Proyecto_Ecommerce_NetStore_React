import { Navigate } from 'react-router-dom';

/**
 * @Param isAuthenticated - booleano
 * @Param clindren - componente al cual debe redirigirse si esta logueado.  
 * */

function RutaProtegida({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace /> // El replace impide que se pueda volver para atrás
  }
  return children;
}

export default RutaProtegida;