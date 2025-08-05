import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/FormModal.css";

function FormEditionProduct({ productSelected, onEdit }) {

  const [product, setProduct] = useState(productSelected);
  const navigate = useNavigate();

  useEffect(() => {
    setProduct(productSelected);
  }, [productSelected]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const onClose = ()=>{
    navigate('/admin');
  }

  return (
    <div className="modal-overlay">
      <form
      className="container-style"
      onSubmit={(e) => {
        e.preventDefault();
        onEdit(product);
      }}>
        <div className="modal-close-container">
          <button type="button" className="modal-close-button" onClick={onClose}>
        ✕
        </button>
        </div>
        <h2 className="form-title">Editar Producto</h2>
        <div className="form-container">
          <label className="form-label label-edit-product">Nombre:</label>
          <input
            type="text"
            name="nombre"
            className="form-input"
            value={product.nombre || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-container">
          <label className="form-label label-edit-product">Precio:</label>
          <input
            type="text"
            name="precio"
            className="form-input"
            value={product.precio || ""}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <div className="form-container">
          <label className="form-label label-edit-product">Stock:</label>
          <input
            type="number"
            name="stock"
            className="form-input"
            value={product.stock || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-container">
          <label className="form-label label-edit-product">Imagen URL:</label>
          <input
            type="text"
            name="imagen"
            className="form-input"
            value={product.imagen || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-container">
          <label className="form-label label-edit-product">Categoria:</label>
          <input
            type="text"
            name="categoria"
            className="form-input"
            value={product.categoria || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-container">
          <label className="form-label label-edit-product">Descripcion:</label>
          <textarea
            type="text"
            name="descripcion"
            className="form-input"
            style={{height: '10rem'}}
            value={product.descripcion || ""}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="button-form-modal">
          Editar
        </button>
    </form>
  </div>
  );
}
export default FormEditionProduct;
