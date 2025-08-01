import { useState, useEffect } from 'react';
import "./styles/FormStyles.css";

function FormEditionProduct({ productSelected, onEdit }) {
    const [product, setProduct] = useState(productSelected);

    useEffect(()=>{
        setProduct(productSelected)
    },[productSelected])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });

    };
    return (
        <form className="container-style" onSubmit={(e)=>{
            e.preventDefault()
            onEdit(product)
        }}>
            <h2 className="form-title">Editar Producto</h2>
            <div className="form-container">
                <label className="form-label label-new-product">Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    className="form-input"
                    value={product.nombre || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-container">
                <label className="form-label label-new-product">Precio:</label>
                <input
                    type="text"
                    name="precio"
                    className="form-input"
                    value={product.precio || ''}
                    onChange={handleChange}
                    required
                    min="0"
                />
            </div>
            <div className="form-container">
                <label className="form-label label-new-product">Stock:</label>
                <input
                    type="number"
                    name="stock"
                    className="form-input"
                    value={product.stock || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-container">
                <label className="form-label label-new-product">Imagen URL:</label>
                <input
                    type="text"
                    name="imagen"
                    className="form-input"
                    value={product.imagen || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-container">
                <label className="form-label label-new-product">Categoria:</label>
                <input
                    type="text"
                    name="categoria"
                    className="form-input"
                    value={product.categoria || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-container">
                <label className="form-label label-new-product">Descripcion:</label>
                <input
                    type="text"
                    name="descripcion"
                    className="form-input"
                    value={product.descripcion || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="button-form">Editar</button>
        </form>
    );
}
export default FormEditionProduct;