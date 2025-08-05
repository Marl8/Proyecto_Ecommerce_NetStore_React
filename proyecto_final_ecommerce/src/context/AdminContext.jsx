import { createContext, useState, useEffect, useContext } from "react";
import CartContext from "./CartContext";
import { useNavigate } from "react-router-dom";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {

  const {products, setProducts} = useContext(CartContext)

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
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
      navigate('/admin')
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
    <AdminContext.Provider
      value={{
        products, setProducts,
        open, setOpen,
        loading, setLoading,
        agregarProducto,
        editProduct,
        deleteProduct
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContext;
