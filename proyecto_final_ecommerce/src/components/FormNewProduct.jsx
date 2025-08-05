import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import "./styles/FormNewProduct.css";

const FormNewProduct = ({ onAgregar }) => {
  const { errors, setErrors } = useContext(CartContext);
  const [product, setProduct] = useState({
    nombre: "",
    precio: 0,
    stock: 0, 
    imagen: "", 
    categoria: "", 
    descripcion: ""
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
    if (!product.stock || product.stock <= 0) {
      nuevosErrores.stock = "El stock debe ser mayor a 0.";
    }
    if (!product.imagen.trim()) {
      nuevosErrores.imagen = "La imagen es obligatoria.";
    }
    if (!product.categoria.trim()) {
      nuevosErrores.categoria = "La categoria es obligatoria.";
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
    setProduct({ nombre: "", precio: 0, stock: 0, imagen: "", categoria: "", descripcion: "", }); // Limpiar el formulario
    setErrors({}); // Limpiar Errores
  };

  // 3. Manejador del onchage para agregar los atributos al objeto producto
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: (name === 'precio' || name === 'stock') ? Number(value) : value });
  };

  return (
    <form className="container-style-new-product" onSubmit={handleSubmit}>
      <h2 className="form-title">Agregar Producto</h2>
      <div className="form-container-new-product">
        <label className="form-label-prod lbl-new-product">Nombre:</label>
        <input
          type="text"
          className="form-input-new"
          name="nombre"
          value={product.nombre}
          onChange={handleChange}
          required
        />
        {errors.nombre && <p style={{ color: "red" }}>{errors.nombre}</p>}
      </div>
      <div className="form-container-new-product">
        <label className="form-label-prod lbl-new-product">Precio:</label>
        <input
          type="number"
          className="form-input-new"
          name="precio"
          value={product.precio}
          onChange={handleChange}
          required
          min="0"
        />
        {errors.precio && <p style={{ color: "red" }}>{errors.precio}</p>}
      </div>
      <div className="form-container-new-product">
        <label className="form-label-prod lbl-new-product">Stock:</label>
        <input
          type="number"
          className="form-input-new"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          required
          min="0"
        />
        {errors.stock && <p style={{ color: "red" }}>{errors.stock}</p>}
      </div>
      <div className="form-container-new-product">
        <label className="form-label-prod lbl-new-product">Imagen:</label>
        <input
          type="text"
          className="form-input-new"
          name="imagen"
          value={product.imagen}
          onChange={handleChange}
          required
        />
        {errors.imagen && <p style={{ color: "red" }}>{errors.imagen}</p>}
      </div>
      <div className="form-container-new-product">
        <label className="form-label-prod lbl-new-product">Categoria:</label>
        <input
          type="text"
          className="form-input-new"
          name="categoria"
          value={product.categoria}
          onChange={handleChange}
          required
        />
        {errors.categoria && <p style={{ color: "red" }}>{errors.categoria}</p>}
      </div>

      <div className="form-container-new-product">
        <label className="form-label-prod lbl-new-product">Descripción:</label>
        <textarea
          className="form-textarea-new"
          name="descripcion"
          value={product.descripcion}
          onChange={handleChange}
          required
        />
        {errors.descripcion && (
          <p style={{ color: "red" }}>{errors.descripcion}</p>
        )}
      </div>
      <button className="button-form-new-product" type="submit">
        Agregar Producto
      </button>
    </form>
  );
};

export default FormNewProduct;
