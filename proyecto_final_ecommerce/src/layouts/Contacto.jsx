import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import WhatsAppChat from '../components/WhatsAppChat.jsx'
import "./style/Contacto.css";

const Contacto = () => {
  return (
    <div className='home-container'>
      <Header/>
      <div className='main-container'>
        <h1 className='contacto-title'>Contacto</h1>
        <form className="container-style-contacto contacto-container">
          <div className="form-container-contacto">
            <label className="form-label-contacto">Nombre:</label>
            <input
              type="text"
              className="form-input"
              name="nombre"
              required
            />
          </div>
          <div className="form-container-contacto">
            <label className="form-label-contacto">Apellido:</label>
            <input
              type="text"
              className="form-input"
              name="precio"
              required
            />
          </div> 

          <div className="form-container-contacto">
            <label className="form-label-contacto">Email:</label>
            <input
              type="email"
              className="form-input"
              name="precio"
              required
              min="0"
            />
          </div>

          <div className="form-container-contacto">
            <label className="form-label-contacto">Comentario:</label>
            <textarea
              className="form-textarea"
              name="descripcion"
              required
            />
          </div>
          <button className="contacto-btn">
            Enviar
          </button>
        </form>
      </div>
      <WhatsAppChat/>
      <Footer/>
    </div>
  )
}

export default Contacto