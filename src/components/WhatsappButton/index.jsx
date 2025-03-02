import React from "react";
import { FaWhatsapp } from "react-icons/fa"; 
import "./WhatsappButton.css"; 

const WhatsappButton = () => {
  const whatsappLink = "https://wa.me/5547989293394"; 

  return (
    <a href={whatsappLink} className="whatsapp-button" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsappButton;
