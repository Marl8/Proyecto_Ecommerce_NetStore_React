import { useContext } from "react";
import "./style/Admin.css";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import FormNewProduct from "../components/FormNewProduct";
import AdminContext from "../context/AdminContext.jsx";
import { useNavigate } from "react-router-dom";

const Admin = () => {

  const {products, loading, open, setOpen, agregarProducto, deleteProduct} = useContext(AdminContext)
  const navigate = useNavigate();

  return (
    <div className="container">
      {loading ? (<p>Cargando...</p>) 
      : (
        <>
          <Header/>
          <div className="title-admin-container">
            <h1 className="title-admin">Panel Administrativo</h1>
            <div className="buttons-container">
              <button className='button' onClick={()=> {
                setOpen(!open)
              }}>
                Agregar producto nuevo
              </button>
              {open && (<FormNewProduct onAgregar={agregarProducto}/>)}
            </div>            
          </div>
          <ul className="list">
            {products.map((product) => (
              <li key={product.id} className="listItem">
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  className="listItemImage"
                />
                <span className="span-name">{product.nombre}</span>
                <span>$ {product.precio}</span>
                <div className="buttons-admin-container">
                  <button className="edit-button" onClick={()=>{
                    setOpen(false)
                    navigate(`/admin/edit/${product.id}`)
                    }}>
                    Editar
                  </button>
                  <button className="delete-button" onClick={()=> 
                    deleteProduct(product.id)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <Footer/>
        </>
      )}
    </div>
  );
};

export default Admin;
