import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {CartProvider} from './context/CartContext.jsx'
import {AuthProvider} from './context/AuthContext.jsx'
import {AdminProvider} from './context/AdminContext.jsx'
import { BrowserRouter as Router} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <Router>
          <AdminProvider>
            <App/>
            <ToastContainer/>
          </AdminProvider>
        </Router>
      </CartProvider>
    </AuthProvider>    
  </StrictMode>,
)
