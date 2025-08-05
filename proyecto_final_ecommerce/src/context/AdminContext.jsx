import { createContext, useState, useEffect, useContext } from "react";
import CartContext from "./CartContext";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

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
    Swal.fire({
    title: "Agregado",
    text: "Producto agregado correctamente!",
    icon: "success"
    });
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
      Swal.fire({
      title: "Actualizado",
      text: "Producto actualizado correctamente!",
      icon: "success"
      });
      navigate('/admin')
      cargarProductos()
    } catch (error) {
        console.log(error.message);        
    }
  }

  const deleteProduct = async (id) => {
  
    // Mostrar el Swal de confirmación
    const { isConfirmed } = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
      confirmButtonColor: "#d33",
    });

    if (isConfirmed) {
      try {
        const respuesta = await fetch(`${API_URI}/${id}`, {
          method: 'DELETE',
        });

        if (!respuesta.ok) {
          throw new Error('Error al eliminar');
        }
        Swal.fire({
          title: 'Eliminado',
          text: 'Producto eliminado correctamente!',
          icon: 'success',
        });
        cargarProductos();
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al eliminar el producto',
          icon: 'error',
        });
        console.error(error.message);
      }
    } else {
      console.log('Acción cancelada');
    }
  };
    

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
