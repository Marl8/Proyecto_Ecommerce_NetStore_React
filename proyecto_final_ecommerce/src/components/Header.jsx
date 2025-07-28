import Nav from '../components/Nav.jsx'

const Header = ({cart, setCart, isAuthenticated}) => {
  return (
    <div className='nav-container'>
      <Nav cart={cart} setCart={setCart} isAuthenticated={isAuthenticated}/>
    </div>
  )
}

export default Header