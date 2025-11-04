import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaCommentDots, FaTimes } from 'react-icons/fa';

const ActionButton: React.FC<{
  href: string;
  ariaLabel: string;
  label: string;
  delay: number;
  isOpen: boolean;
  children: React.ReactNode;
}> = ({ href, ariaLabel, label, delay, isOpen, children }) => (
  <a
    href={href}
    aria-label={ariaLabel}
    target={href.startsWith('http') ? '_blank' : '_self'}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    className={`flex items-center gap-4 group transition-all duration-300 ease-in-out ${
      isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
    }`}
    style={{ transitionDelay: isOpen ? `${delay}ms` : '0ms' }}
  >
    <div className="bg-white text-kayjay-blue text-sm font-semibold px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
      {label}
    </div>
    <div className="p-3 rounded-full bg-kayjay-blue text-white shadow-lg transition-transform transform group-hover:scale-110">
      {children}
    </div>
  </a>
);

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fabRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = "https://api.whatsapp.com/send?phone=94775002886&text=Hello%20KayJay%20Security%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.";
  const phoneUrl = "tel:+94112522302";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fabRef.current && !fabRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={fabRef} className="fixed bottom-[72px] right-4 z-50">
      <div className="relative flex flex-col items-end">

        {/* Secondary Buttons Container */}
        <div className="absolute bottom-full mb-4 flex flex-col items-end gap-4">
          <ActionButton
            href={phoneUrl}
            ariaLabel="Call us"
            label="Call Us"
            delay={100}
            isOpen={isOpen}
          >
            <FaPhoneAlt className="h-6 w-6" />
          </ActionButton>

          <ActionButton
            href={whatsappUrl}
            ariaLabel="Chat with us on WhatsApp"
            label="Chat on WhatsApp"
            delay={50}
            isOpen={isOpen}
          >
            <FaWhatsapp className="h-6 w-6" />
          </ActionButton>
        </div>

        {/* Main FAB */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close contact options" : "Open contact options"}
          aria-expanded={isOpen}
          className="p-4 rounded-full bg-kayjay-gold text-kayjay-blue shadow-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kayjay-gold transition-all duration-300 transform hover:scale-110"
        >
          <div className="relative h-7 w-7 flex items-center justify-center">
            <FaCommentDots className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
            <FaTimes className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;