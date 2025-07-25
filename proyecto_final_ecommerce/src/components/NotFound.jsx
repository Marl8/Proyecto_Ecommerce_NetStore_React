import "./styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-subtitle">Ups... Trago no encontrado 🍷</p>
        <p className="notfound-text">
          Parece que algunas botellas se perdieron entre las estanterías. Pero tenemos muchas más... aguardá unos minutos.
        </p>
      </div>
    </div>
  );
};

export default NotFound;