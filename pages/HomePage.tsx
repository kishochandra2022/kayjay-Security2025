
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { 
    FaCheck, 
    FaShieldAlt, 
    FaUserShield, 
    FaThLarge, 
    FaHandshake, 
    FaTruck, 
    FaTv
} from 'react-icons/fa';
import BranchNetworkMap from '../components/BranchNetworkMap';
import TestimonialCarousel from '../components/TestimonialCarousel';

const ServiceCard: React.FC<{ title: string; description: string; path: string; icon: React.ReactNode; delay: number }> = ({ title, description, path, icon, delay }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full" data-aos="fade-up" data-aos-delay={delay}>
    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-green text-kayjay-gold mb-6 flex-shrink-0">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-kayjay-green mb-4 text-center">{title}</h3>
    <p className="text-gray-600 text-center flex-grow">{description}</p>
    <div className="mt-6 text-center">
      <Link to={path} className="font-bold text-kayjay-green hover:text-kayjay-gold transition-colors">
        Learn More &rarr;
      </Link>
    </div>
  </div>
);

const coreServices = [
    {
        title: "Security Personnel",
        description: "Highly-trained, professional security guards to protect your premises, assets, and people.",
        path: "/security-personnel",
        icon: <FaUserShield className="h-8 w-8" />,
    },
    {
        title: "Cash Management & Transit",
        description: "Secure armored vehicle services for cash-in-transit, ATM replenishment, and total cash management.",
        path: "/cash-transit",
        icon: <FaTruck className="h-8 w-8" />,
    },
    {
        title: "Electronic Security",
        description: "State-of-the-art CCTV systems, access control, and intrusion alarms for modern, layered security.",
        path: "/solutions",
        icon: <FaTv className="h-8 w-8" />,
    },
];


const HomePage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  return (
    <div>
      <Seo
        title="Top Security Company in Sri Lanka"
        description="KayJay Security is Sri Lanka's No.1 security service provider with over 45 years of experience. We offer professional security guards, secure cash transit (CIT), CCTV surveillance, and integrated security solutions for businesses and homes."
        keywords="security company sri lanka, private security services colombo, professional security guards, cash in transit sri lanka, best security firm sri lanka, cctv monitoring, corporate security services, industrial security guards, event security management"
        imageUrl="/images/og-home.jpg"
      />
      
      {/* Hero Video Section */}
      <section className="relative w-full overflow-hidden group bg-kayjay-dark-gray">
        <Link to="/solutions" aria-label="View our solutions" className="block cursor-pointer">
          <video
            ref={videoRef}
            className="w-full h-auto block"
            poster="/images/home-hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Promotional video for KayJay Security"
          >
            {/* 
              Using a more compressed and relevant video. 
              Ideally, a .webm version should also be provided for browsers that support it, as it offers better compression.
              e.g. <source src="/videos/kayjay-promo.webm" type="video/webm" />
            */}
            <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay to indicate interactivity */}
          <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-colors duration-300 z-10"></div>
        </Link>
      </section>

      {/* Why KayJay Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-kayjay-green">Why Choose Sri Lanka's No.1 Security Service Provider?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6" data-aos="zoom-in" data-aos-delay="0">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-light-gray text-kayjay-green mb-6">
                <FaShieldAlt className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrated Security Solutions</h3>
              <p className="text-gray-600">Combining professional security guards with electronic systems to deliver effective, high-quality security solutions.</p>
            </div>
            <div className="p-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-light-gray text-kayjay-green mb-6">
                <FaUserShield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trained Personnel</h3>
              <p className="text-gray-600">Well-trained, professional security guards, vetted and certified for your peace of mind.</p>
            </div>
            <div className="p-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-light-gray text-kayjay-green mb-6">
                <FaThLarge className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Spectrum of Services</h3>
              <p className="text-gray-600">Top security solutions including surveillance, access control, guard services, cash transit & more.</p>
            </div>
            <div className="p-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-light-gray text-kayjay-green mb-6">
                <FaHandshake className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted By Sri Lanka's Top Businesses</h3>
              <p className="text-gray-600">The trusted security provider for a wide range of public & private sector clients across Sri Lanka.</p>
            </div>
          </div>
        </div>
      </section>
      
       {/* Our Solutions Section */}
      <section className="py-20 bg-kayjay-light-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12" data-aos="fade-up">
                  <h2 className="text-3xl md:text-4xl font-bold text-kayjay-green">Explore Our Core Security Solutions</h2>
                  <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                      From manned guarding to advanced technological integrations, we provide comprehensive security services tailored to your needs.
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {coreServices.map((service, index) => (
                      <ServiceCard
                          key={service.title}
                          title={service.title}
                          description={service.description}
                          path={service.path}
                          icon={service.icon}
                          delay={index * 100}
                      />
                  ))}
              </div>
          </div>
      </section>

      {/* Our Promise Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-kayjay-green mb-4">Our Promise of Protection</h2>
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
            <Link to="/contact" className="mt-8 inline-block bg-kayjay-green text-white font-bold py-3 px-6 rounded-lg hover:bg-kayjay-green/90 transition-colors">
              Contact Us Today
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
             <img src="/images/home-promise.jpg" alt="A KayJay professional security guard on duty" className="rounded-lg shadow-2xl w-full h-96 object-cover" loading="lazy"/>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <BranchNetworkMap />

    </div>
  );
};

export default HomePage;
