import './App.css'
import Home from './layouts/Home.jsx'
import NotFound from './components/NotFound.jsx'
import Contacto from './layouts/Contacto.jsx'
import Acerca from './layouts/Acerca.jsx'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element= {<Home cart={cart} setCart={setCart} products={products} setProducts={setProducts}/>}/>
          <Route path='/contacto' element={<Contacto cart={cart} setCart={setCart}/>}/>
          <Route path='/nosotros' element={<Acerca cart={cart} setCart={setCart}/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
