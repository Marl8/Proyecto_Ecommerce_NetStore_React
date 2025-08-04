import Home from './layouts/Home.jsx'
import NotFound from './components/NotFound.jsx'
import Contacto from './layouts/Contacto.jsx'
import Acerca from './layouts/Acerca.jsx'
import Login from './layouts/Login.jsx'
import DetalleProducto from './layouts/DetalleProducto.jsx'
import RutaProtegida from './auth/RutasProtegidas.jsx'
import Admin from './layouts/Admin.jsx'
import Purchase from './layouts/Purchase.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import estilos
// import 'bootstrap/dist/css/bootstrap.min.css' -> Importa todo Bootstrap
import './custom-bootstrap.scss'; 

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/nosotros' element={<Acerca/>}/>
          <Route path='/producto/:id' element={<DetalleProducto/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/admin' element={<RutaProtegida> <Admin/> </RutaProtegida>} />
          <Route path='/purchase' element={<RutaProtegida> <Purchase/> </RutaProtegida>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
