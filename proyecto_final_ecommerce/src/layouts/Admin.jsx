import { useState, useEffect } from "react";
import "./style/Admin.css";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const Admin = ({cart, setCart, isAuthenticated}) => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", price: "" });
  const [loading, setLoading] = useState(true);

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
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <Header cart={cart} setCart={setCart} isAuthenticated={isAuthenticated}/>
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
