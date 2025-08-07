const Footer = () => {
  let styles = {
    background: 'linear-gradient(to bottom, #4d4d4dff, #000000)',
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0',
    width: '100%',
    bottom: '0',
  }
  
  return (
    <div style={{background: 'black', width: '100%', margin: '0', padding: '0' }}>
      <footer style = {styles}>
        <div className="footer-container">
            <ul className="footer-ul">
                <li className="li-footer">FAQs</li>
                <li className="li-footer">Defensa al Consumidor</li>
                <li className="li-footer">Legales</li>
                <li className="li-footer">Botón de Arrepentimiento</li>
            </ul>
        </div>
        <div className="footer-container">
          <ul className="footer-ul-social">
            <li className="li-footer-social">
              <i class="fa-brands fa-facebook fa-xl fa-primary-color: green"></i>
            </li>
            <li className="li-footer-social">
              <i class="fa-brands fa-instagram fa-xl"></i>
            </li>
            <li class="li-footer-social">
              <i class="fa-brands fa-x-twitter fa-xl"></i>
            </li>
            <li class="li-footer-social">
              <i class="fa-brands fa-tiktok fa-xl"></i>
            </li>
          </ul>
      </div>
    </footer>
    <p className="copyright">&copy; 2025 - Martin Lemberger</p>
    </div>
    
  )
}

export default Footer