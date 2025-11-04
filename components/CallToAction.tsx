
import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const CallToAction: React.FC = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=94775002886&text=Hello%20KayJay%20Security%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  return (
    <section className="bg-kayjay-blue text-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Secure Your Peace of Mind Today
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          Partner with Sri Lanka's most trusted security provider. Our experts are ready to create a tailored solution that brings you confidence and total protection.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/request-a-quote"
            className="inline-flex items-center justify-center bg-kayjay-gold text-kayjay-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 w-full sm:w-auto"
          >
            <FaPaperPlane className="mr-3" />
            Request a Free Quote
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-600 transition-colors w-full sm:w-auto"
          >
            <FaWhatsapp className="mr-3" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
