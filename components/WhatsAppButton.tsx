
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=94775002886&text=Hello%20KayJay%20Security%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-[72px] right-4 z-50 p-4 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-110"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
