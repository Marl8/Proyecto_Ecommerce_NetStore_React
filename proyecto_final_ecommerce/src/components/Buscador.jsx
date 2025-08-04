import { useState } from 'react';
import {useNavigate} from "react-router-dom";

const Buscador = () => {

  const [txtBuscador, setBuscador] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/?search=${txtBuscador}`)
        setBuscador("");
    }

    const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };
  
  return (
    <input type="text" 
    className="input-search"
    placeholder="Buscar Productos..."
    value={txtBuscador} onChange={(e) => setBuscador(e.target.value)} onKeyDown={handleKeyDown}/>
  )
}

export default Buscador