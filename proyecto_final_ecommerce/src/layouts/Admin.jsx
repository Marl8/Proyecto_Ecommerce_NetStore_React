import { useState, useEffect, useContext } from "react";
import "./style/Admin.css";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import FormNewProduct from "../components/FormNewProduct";
import FormEditionProduct from "../components/FormEditionProduct.jsx";
import CartContext from "../context/CartContext.jsx";

const Admin = () => {

  const {products, setProducts} = useContext(CartContext)

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [openEditor, setOpenEditor] = useState(false);
  const [loading, setLoading] = useState(true);
  const API_URI =  import.meta.env.VITE_API_URI; // Variable de entorno

useEffect(() => {
  //fetch("/data/products.json")    
  fetch(API_URI)
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
  }, [setProducts, API_URI]);

  const cargarProductos = async()=>{
    try {
      const res = await fetch(API_URI)
      const data = await res.json()
      setProducts(data);
      setOpen(false);
    } catch (error) {
        console.log('Error al cargar productos ', error);
        
    }
  }


  const agregarProducto = async (product) =>{
    try{
      const respuesta = await fetch(API_URI,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    if(!respuesta.ok){
        throw new Error('Error al agregar producto')
    }
    const data = await respuesta.json()
    alert('Producto agregado correctamente')
    cargarProductos();
    console.log(data)
    }catch(error){
      console.log(error.message);        
    }
  }

  const editProduct = async(product) =>{
    try {
      const respuesta = await fetch(`${API_URI}/${product.id}`,
        {method:'PUT',
          headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
        })
      if(!respuesta.ok) {
        throw Error ('Error al actualizar el producto')
      }
      const data = await respuesta.json();
      console.log(data);              
      alert('Producto actualizado correctamente')
      setOpenEditor(false)
      setSelected(null)
      cargarProductos()
    } catch (error) {
        console.log(error.message);
        
    }
  }

  const deleteProduct = async (id)=>{
    const confirmar = window.confirm('Estas seguro de eliminar el producto?')
    if (confirmar) {
      try{
        const respuesta = await fetch(`${API_URI}/${id}`,{
            method:'DELETE',
        })
        if(!respuesta.ok){
          throw new Error('Error al eliminar');
        } 
        alert('Producto Eliminado correctamente');
        cargarProductos();
      }catch(error){
        alert('Hubo un problema al eliminar el producto')
        console.log(error.message);
      }
    }
  }

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
                setOpenEditor(false)
              }}>
                Agregar producto nuevo
              </button>
              {open && (<FormNewProduct onAgregar={agregarProducto}/>)}
              {openEditor && (<FormEditionProduct productSelected={selected} onEdit={editProduct}/>)}
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
                    setOpenEditor(true)
                    setOpen(false)
                    setSelected(product)}}>
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
