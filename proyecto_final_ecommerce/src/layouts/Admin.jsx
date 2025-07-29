import { useState, useEffect, useContext } from "react";
import "./style/Admin.css";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import CartContext from "../context/CartContext.jsx";

const Admin = () => {

  const {products, setProducts, loading, setLoading} = useContext(CartContext)

  const [form, setForm] = useState({ id: null, name: "", price: "" });
  

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setProducts(data);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [setProducts, setLoading]);

  return (
    <div className="container">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <Header/>
          <div className="title-admin-container">
            <h1 className="title-admin">Panel Administrativo</h1>
          </div>
          <div className="form-container">
            <form className="form">
              <input
                type="text"
                name="name"
                placeholder="Nombre del producto"
                className="input"
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Precio del producto"
                className="input"
                required
              />
              <button type="submit" className="button">
                {form.id ? "Editar" : "Crear"}
              </button>
            </form>
          </div>
          <div className="list-container">

          </div>
          <ul className="list">
            {products.map((product) => (
              <li key={product.id} className="listItem">
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  className="listItemImage"
                />
                <span>{product.nombre}</span>
                <span>${product.precio}</span>
                <div>
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
