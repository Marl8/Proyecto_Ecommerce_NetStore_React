import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./styles/WhatsApp.css";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Botón flotante */}
      <div className="whatsapp-button" onClick={toggleChat}>
        <FaWhatsapp size={28} />
      </div>

      {/* Modal de chat */}
      {isOpen && (
        <div className="whatsapp-modal">
          <div className="chat-header">
            <span>Soporte</span>
            <button className="btn-close" onClick={toggleChat}>✕</button>
          </div>
          <div className="chat-body">
            <p>¡Hola! ¿En qué podemos ayudarte?</p>
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Escribe tu mensaje..." />
            <button>Enviar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;
