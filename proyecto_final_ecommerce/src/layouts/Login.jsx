import './style/Login.css'

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-form-container'>
        <h2 className='login-title'>LOGIN</h2>
        <form className='form-login'>
          <label className='form-login-label'>Username</label>
          <input className='login-input' type="text" placeholder='Username'/>
          <label className='form-login-label'>Password</label>
          <input className='login-input' type="password" placeholder='Password'/>
          <button className='button-login'>Ingresar</button>
        </form>
      </div>
    </div>
  )
}

export default Login