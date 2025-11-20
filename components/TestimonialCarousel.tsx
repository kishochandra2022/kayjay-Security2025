
import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    company: "Brandix Finishing Ltd",
    text: "Management of Brandix Finishing would very much appreciate your continuous support to make Brandix Finishing a better place to work."
  },
  {
    company: "Majestic City - C.T. Land Development Limited",
    text: "We too would like to express our appreciation to Mr. D M C Dissanayake for his honesty and the integrity."
  },
  {
    company: "Ocean View Ltd",
    text: "We were able to take timely action to pump out the water and save the pumps and other electrical equipment."
  },
  {
    company: "John Keells Warehousing (Pvt) Ltd",
    text: "We appreciate the alertness of the said security officers and expect them to maintain such vigilance throughout."
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-kayjay-green text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-kayjay-gold">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-lg text-gray-300">Hear what our valued clients have to say about our services.</p>
        </div>

        <div className="relative max-w-4xl mx-auto h-80 sm:h-64 md:h-56" data-aos="fade-up" data-aos-delay="100">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
              }`}
            >
              <FaQuoteLeft className="text-4xl text-kayjay-gold mb-6 opacity-40" />
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl font-medium italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <footer className="text-lg font-bold text-kayjay-gold uppercase tracking-wide">
                  — {testimonial.company}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                index === currentIndex ? 'bg-kayjay-gold w-8' : 'bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
