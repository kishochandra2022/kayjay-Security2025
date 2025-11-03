
import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-4 right-4 z-50 p-3 rounded-full bg-kayjay-gold text-kayjay-blue shadow-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kayjay-gold transition-all duration-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
      }`}
    >
      <FaChevronUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTopButton;
