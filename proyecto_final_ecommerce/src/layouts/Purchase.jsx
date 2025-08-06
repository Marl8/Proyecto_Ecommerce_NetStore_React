import { useContext } from 'react'
import CartContext from '../context/CartContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppChat from '../components/WhatsAppChat.jsx'


const Purchase = () => {

  const { cart }= useContext(CartContext);
  console.log('Product en carrtito: ' + cart.length);
  

  return (
    <div className='home-container'>
      <Header/>
      <div className='main-container'>
        <h1 style={{marginBottom:'2rem'}}>Mi compra</h1> 
        
        {cart.length > 0 ?
          cart.map((item, index) => ( 
          <div key={index} className='purchase-container'>
            <div className="imagen-Container">
              <img src={item.imagen} alt="Imagen del Producto" className="imagen" />
            </div>
            <h3 className="nombre">{item.nombre}</h3>
            <p className="precio">$ {item.precio}</p>
            <p>Cantidad: {item.cantidad}</p>
          </div>
        )) : 
        <p style={{textAlign: 'center'}}> No se han agregado productos al carrito de compras. </p>
        }
      </div>  
      <div className='total-pago-container'>
        <p className='total'>
          Total a pagar: $ {cart.reduce((acum, item) => acum + item.precio * item.cantidad, 0)}
        </p>              
      </div>
      <div className="purchase-btn-container">
        <button className='pagar-btn'>Pagar</button>
      </div>
      <WhatsAppChat/>
      <Footer/> 
    </div>
  )
}

export default Purchase