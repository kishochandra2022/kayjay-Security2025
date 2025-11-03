
import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import Seo from '../components/Seo';
import { FaCheck, FaShieldAlt, FaUserShield, FaThLarge, FaHandshake } from 'react-icons/fa';

const HomePage: React.FC = () => {
  return (
    <div>
      <Seo
        title="Sri Lanka’s No.1 Security Company | Over 45 Years of Trusted Protection"
        description="Providing reliable and professional security services in Sri Lanka for over 45 years. As the top security solutions provider, we are your trusted partner in safety and protection."
        imageUrl="https://picsum.photos/1200/630?random=10"
      />
      
      {/* Hero Section */}
      <HeroCarousel />

      {/* Why KayJay Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-kayjay-blue">Why Choose Sri Lanka's No.1 Security Service Provider?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6" data-aos="zoom-in" data-aos-delay="0">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-light-gray text-kayjay-blue mb-6">
                <FaShieldAlt className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrated Security Solutions</h3>
              <p className="text-gray-600">Combining professional security guards with electronic systems to deliver effective, high-quality security solutions.</p>
            </div>
            <div className="p-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-light-gray text-kayjay-blue mb-6">
                <FaUserShield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trained Personnel</h3>
              <p className="text-gray-600">Well-trained, professional security guards, vetted and certified for your peace of mind.</p>
            </div>
            <div className="p-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-light-gray text-kayjay-blue mb-6">
                <FaThLarge className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Spectrum of Services</h3>
              <p className="text-gray-600">Top security solutions including surveillance, access control, guard services, cash transit & more.</p>
            </div>
            <div className="p-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-light-gray text-kayjay-blue mb-6">
                <FaHandshake className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted By Sri Lanka's Top Businesses</h3>
              <p className="text-gray-600">The trusted security provider for a wide range of public & private sector clients across Sri Lanka.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Intro Video Section */}
      <section className="py-20 bg-kayjay-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold">Experience Our Commitment in Action</h2>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                    A glimpse into the professionalism and dedication that define KayJay Security.
                </p>
            </div>
            <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                <div className="rounded-lg shadow-2xl overflow-hidden aspect-video">
                    <video
                        className="w-full h-full object-cover"
                        src="https://www.w3schools.com/html/mov_bbb.mp4" 
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-label="Promotional video for KayJay Security"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="bg-kayjay-light-gray py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-kayjay-blue mb-4">Our Promise of Protection</h2>
            <p className="text-lg text-gray-700 mb-6">At KayJay, Sri Lanka's leading private security company, we are built on a foundation of trust and a commitment to excellence. Our promise is simple yet profound.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCheck className="h-6 w-6 text-kayjay-gold mr-3 flex-shrink-0" />
                <span className="text-xl font-semibold">Integrity.</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="h-6 w-6 text-kayjay-gold mr-3 flex-shrink-0" />
                <span className="text-xl font-semibold">Security.</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="h-6 w-6 text-kayjay-gold mr-3 flex-shrink-0" />
                <span className="text-xl font-semibold">Peace of Mind.</span>
              </div>
            </div>
            <Link to="/contact" className="mt-8 inline-block bg-kayjay-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors">
              Contact Us Today
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
             <img src="https://picsum.photos/600/400?random=1" alt="A KayJay professional security guard on duty" className="rounded-lg shadow-2xl w-full h-96 object-cover" loading="lazy"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
