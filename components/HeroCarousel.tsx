
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Slide {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: '/images/hero-slide-1.jpg',
    alt: 'A vigilant security guard from Sri Lanka\'s No.1 private security company monitoring a surveillance system',
    title: 'Trusted Security Company Provider in Sri Lanka',
    subtitle: 'KayJay Security',
    description: 'With over 45 years of trusted security excellence, we are the pioneering brand of security & surveillance in Sri Lanka, providing top security solutions for your peace of mind.',
  },
  {
    image: '/images/hero-slide-2.jpg',
    alt: 'An armored cash transit vehicle from a top security provider in Sri Lanka',
    title: 'Integrated Security Solutions',
    subtitle: 'Manpower Meets Technology',
    description: 'We offer fully integrated security services in Sri Lanka, from highly-trained professional security guards to advanced electronic systems, tailored to your specific needs.',
  },
  {
    image: '/images/hero-slide-3.jpg',
    alt: 'A professional team handling cash management in a secure facility in Sri Lanka',
    title: 'Cash Management Experts',
    subtitle: 'Secure & Reliable',
    description: 'Our ISO 9001:2015 certified division provides end-to-end cash transit and management services, safeguarding your assets at every step as a trusted security provider in Sri Lanka.',
  },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(nextSlide, 5000);
    return () => resetTimeout();
  }, [currentSlide, nextSlide, resetTimeout]);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  }

  return (
    <section 
      className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden" 
      aria-roledescription="carousel"
      aria-label="Promotional content"
      onMouseEnter={resetTimeout}
      onMouseLeave={() => {
          resetTimeout();
          timeoutRef.current = window.setTimeout(nextSlide, 5000);
      }}
    >
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'}`}
            aria-hidden={index !== currentSlide}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
          >
            <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-kayjay-green bg-opacity-60"></div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4">
        <div className="relative w-full max-w-4xl mx-auto">
           {slides.map((slide, index) => (
               <div key={index} className={`transition-all duration-700 ease-in-out w-full ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`} aria-hidden={index !== currentSlide}>
                <h2 className="text-4xl md:text-6xl font-extrabold text-kayjay-gold">{slide.subtitle}</h2>
                <p className="mt-4 text-lg md:text-2xl font-bold">
                  {slide.title}
                </p>
                <p className="mt-6 text-md md:text-lg max-w-3xl mx-auto text-gray-200">
                  {slide.description}
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/request-a-quote" className="bg-kayjay-gold text-kayjay-green font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 w-full sm:w-auto">
                    Get a Quotation
                  </Link>
                  <Link to="/solutions" className="border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-kayjay-green transition-colors w-full sm:w-auto">
                    Our Solutions
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 z-30 p-2 text-white bg-black/30 rounded-full hover:bg-black/50" aria-label="Previous slide">
          <FaChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 z-30 p-2 text-white bg-black/30 rounded-full hover:bg-black/50" aria-label="Next slide">
          <FaChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
              <button 
                key={index} 
                onClick={() => goToSlide(index)} 
                className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-kayjay-gold' : 'bg-white/50 hover:bg-white/80'}`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide}
              ></button>
          ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
