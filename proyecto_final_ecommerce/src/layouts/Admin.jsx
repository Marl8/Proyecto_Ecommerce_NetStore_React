import { useState, useEffect } from "react";
import "./style/Admin.css";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import FormNewProduct from "../components/FormNewProduct";

const Admin = () => {

  //const [form, setForm] = useState({ id: null, name: "", price: "" });
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setProducts(data);
          setLoading(false);
        }, 400);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [setProducts, setLoading]);


  const agregarProducto = async (producto) =>{
        try{
            const respuesta = await fetch('https://682e2f0e746f8ca4a47c2dbd.mockapi.io/product',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
        })
        if(!respuesta.ok){
            throw new Error('Error al agregar producto')
        }
        const data = await respuesta.json()
        alert('Producto agregado correctamente')
        console.log(data)
        }catch(error){
            console.log(error.message);
            
        }
    }

  return (
    <div className="container">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <Header/>
          <div className="title-admin-container">
            <h1 className="title-admin">Panel Administrativo</h1>
            <button className='button' onClick={()=> setOpen(!open)}>
              Agregar producto nuevo
            </button>
            {open && (<FormNewProduct onAgregar={agregarProducto}/>)}
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
                  <button className="edit-button">Editar</button>

                  <button className="delete-button">Eliminar</button>
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
