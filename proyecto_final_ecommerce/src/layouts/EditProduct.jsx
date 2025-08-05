import { useContext } from "react"
import { useParams } from "react-router-dom";
import FormEditionProduct from "../components/FormEditionProduct"
import AdminContext from "../context/AdminContext.jsx";
import NotFound from "../components/NotFound.jsx";

const EditProduct = () => {

    const {editProduct, products}= useContext(AdminContext);
    const {id} = useParams();
    
    const selected = products.find(p => String(p.id) == String(id));

    if (!selected) {
    return <NotFound/>;
    }    

return (
    <div>
        <FormEditionProduct onEdit={editProduct} productSelected={selected}/>
    </div>
)
}

export default EditProduct