import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  /**
   * El estado de autenticación (isAuth) solo vive en memoria (useState / context)
   * y no está persistido en ningún lugar como localStorage o sessionStorage.
   * Cuando el usuario refresca la página o accede directamente a una URL (por ejemplo,
   * escribiendo /admin en la barra de direcciones), todo el estado en memoria se pierde
   * porque React reinicia el ciclo de vida de la app.
   */

  const [isAuthenticated, setIsAuth] = useState(() => {
      return localStorage.getItem('isAuth') === 'true';
    });
  
  const [rol, setRol] = useState(() => {
    return localStorage.getItem('rol') || '';
  });

  useEffect(() => {
    localStorage.setItem('isAuth', isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem('rol', rol);
  }, [rol]);
  
  const [errors, setErrors] = useState({});

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, setIsAuth, 
      rol, setRol, 
      errors, setErrors
      }}>
					{children}
			</AuthContext.Provider>
  )
}

export default AuthContext