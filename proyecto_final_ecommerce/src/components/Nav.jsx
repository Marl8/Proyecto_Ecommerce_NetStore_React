import {Link} from 'react-router-dom'
import logo from '../assets/icon-ecom.png'

const Nav = () => {
  return (
    <nav style={{backgroundColor: 'black', color: 'white'}}>
      <ul>
        <li className='li-img'>
          <Link className='link' to={'./'}>
            <img src={logo} alt="Imagen de tienda" />
          </Link>
        </li>
        <li><Link className='link' to={'./'}>Home</Link></li>
        <li><Link className='link' to={'./nosotros'}>Acerca de Nosotros</Link></li>
        <li><Link className='link' to={'./contacto'}>Contacto</Link></li>
        <li>
          <button className='btnCart-nav'>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav