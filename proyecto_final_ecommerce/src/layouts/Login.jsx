import './style/Login.css'
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext  from '../context/AuthContext';

const Login = () => {

  // Se inicializa para garantiza que las funciones existan y no sean UNIFINED (aunque hagan nada)
  const {setIsAuth, isAuthenticated, rol, setRol = ()=>{}, errors, setErrors } = useContext(AuthContext);
  
  const navigate = useNavigate();
  
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  // 1. Si el usuario ya está autenticado, lo redirigimos
  useEffect(() => {
    if (isAuthenticated) {
      // Si ya está autenticado, redirigir según el rol
      navigate(rol === 'admin' ? '/admin' : '/');
    }
  }, [isAuthenticated, rol, navigate])


  // 2. Lógica del Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!username){
      validationErrors.username = 'Username es requerido';  
    }
    if (!password){
        validationErrors.password = 'Password es requerido';
    } 

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const res = await fetch('data/users.json');
      const users = await res.json();

      const foundUser = users.find((user) => user.username === username && user.password === password);

      if (!foundUser) {
        setErrors({username: 'Credenciales inválidas'});
      } else {
        console.log('User role:', foundUser.role);
        setRol(foundUser.role);
        setIsAuth(true);
        setErrors('')
      }
    } catch (err) {
      console.error('Error fetching users:', err);
      setErrors({ username: 'Algo salió mal. Por favor, inténtalo de nuevo más tarde.' });
    }
  }

  // 3. Si está autenticado, no renderiza el formulario (el useEffect lo redirige)
  if (isAuthenticated) {
    return null; 
  }

  return (
    <div className='login-container'>
      <div className='login-form-container'>
        <h2 className='login-title'>LOGIN</h2>
        <form onSubmit={handleSubmit} className='form-login'>
          
          <label className='form-login-label'>Username</label>
          <input className='login-input' type="text" value={username}
          onChange={(e) => setUsername(e.target.value)} placeholder='Username'/>
          
          {errors.username && (
          <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {errors.username}
          </div>)}

          <label className='form-login-label'>Password</label>
          <input className='login-input' value={password}
          onChange={(e) => setPassword(e.target.value)}type="password" placeholder='Password'/>
          
          {errors.password && (
          <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {errors.password}
          </div>
        )}    

          <button type="submit" className='button-login'>Ingresar</button>
        </form>
      </div>
    </div>
  )
}

export default Login