import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import "../components/styles/FormStyles.css";

const Contacto = () => {
  return (
    <div className='home-container'>
      <Header/>
      <div className='home-main'>
        <h1>Contacto</h1>
        <form className="container-style contacto-container">
          <div className="form-container">
            <label className="form-label">Nombre:</label>
            <input
              type="text"
              className="form-input"
              name="nombre"
              required
            />
          </div>
          <div className="form-container">
            <label className="form-label">Apellido:</label>
            <input
              type="text"
              className="form-input"
              name="precio"
              required
            />
          </div> 

          <div className="form-container">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-input"
              name="precio"
              required
              min="0"
            />
          </div>

          <div className="form-container">
            <label className="form-label">Comentario:</label>
            <textarea
              className="form-textarea"
              name="descripcion"
              required
            />
          </div>
          <button className="button-form contacto-btn">
            Enviar
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Contacto