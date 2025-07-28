import './App.css'
import Home from './layouts/Home.jsx'
import NotFound from './components/NotFound.jsx'
import Contacto from './layouts/Contacto.jsx'
import Acerca from './layouts/Acerca.jsx'
import Login from './layouts/Login.jsx'
import DetalleProducto from './layouts/DetalleProducto.jsx'
import RutaProtegida from './auth/RutasProtegidas.jsx'
import Admin from './layouts/Admin.jsx'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([]);
  const [isAuthenticated, setIsAuth] = useState(false)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element= {<Home cart={cart} setCart={setCart} products={products} setProducts={setProducts} isAuthenticated={isAuthenticated}/>}/>
          <Route path='/contacto' element={<Contacto cart={cart} setCart={setCart} isAuthenticated={isAuthenticated}/>}/>
          <Route path='/nosotros' element={<Acerca cart={cart} setCart={setCart} isAuthenticated={isAuthenticated}/>}/>
          <Route path='/producto/:id' element={<DetalleProducto cart={cart} setCart={setCart} isAuthenticated={isAuthenticated}/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/admin' element={<RutaProtegida isAuthenticated={isAuthenticated}> <Admin cart={cart} setCart={setCart} isAuthenticated={isAuthenticated}/> </RutaProtegida>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
