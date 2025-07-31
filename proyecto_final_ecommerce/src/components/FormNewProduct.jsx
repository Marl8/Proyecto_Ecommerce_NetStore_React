import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import "./styles/FormStyles.css";

const FormNewProduct = ({ onAgregar }) => {
  const { errors, setErrors } = useContext(CartContext);
  const [product, setProduct] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
  });

  // 1. Validamos los campos
  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!product.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }
    if (!product.precio || product.precio <= 0) {
      nuevosErrores.precio = "El precio debe ser mayor a 0.";
    }
    if (!product.descripcion.trim() || product.descripcion.length < 10) {
      nuevosErrores.descripcion =
        "La descripción debe tener al menos 10 caracteres.";
    }
    setErrors(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // 2. Manejador del evento submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) {
      return;
    }
    onAgregar(product); // Llamada a la función para agregar el producto
    setProduct({ nombre: "", precio: "", descripcion: "" }); // Limpiar el formulario
    setErrors({}); // Limpiar Errores
  };

  // 3. Manejador del onchage para agregar los atributos al objeto producto
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <form className="container-style" onSubmit={handleSubmit}>
      <h2 className="form-title">Agregar Producto</h2>
      <div className="form-container">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-input"
          name="nombre"
          value={product.nombre}
          onChange={handleChange}
          required
        />
        {errors.nombre && <p style={{ color: "red" }}>{errors.nombre}</p>}
      </div>
      <div className="form-container">
        <label className="form-label">Precio:</label>
        <input
          type="number"
          className="form-input"
          name="precio"
          value={product.precio}
          onChange={handleChange}
          required
          min="0"
        />
        {errors.precio && <p style={{ color: "red" }}>{errors.precio}</p>}
      </div>

      <div className="form-container">
        <label className="form-label">Descripción:</label>
        <textarea
          className="form-textarea"
          name="descripcion"
          value={product.descripcion}
          onChange={handleChange}
          required
        />
        {errors.descripcion && (
          <p style={{ color: "red" }}>{errors.descripcion}</p>
        )}
      </div>
      <button className="button-form" type="submit">
        Agregar Producto
      </button>
    </form>
  );
};

export default FormNewProduct;
