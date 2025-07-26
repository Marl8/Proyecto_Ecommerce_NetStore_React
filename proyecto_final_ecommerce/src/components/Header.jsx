import Nav from '../components/Nav.jsx'

const Header = ({cart, setCart}) => {
  return (
    <div className='nav-container'>
      <Nav cart={cart} setCart={setCart}/>
    </div>
  )
}

export default Header