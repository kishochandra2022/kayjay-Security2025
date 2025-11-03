import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { FaCheck } from 'react-icons/fa';

const CashTransitPage: React.FC = () => {
  return (
    <div>
      <Seo
        title="Secure Cash Transit Services in Sri Lanka"
        description="Secure your assets with our professional cash transit and management solutions. As a trusted security provider in Sri Lanka, we offer armed escorts, secure vehicles, and real-time tracking."
        imageUrl="https://picsum.photos/1200/630?random=5"
      />
      <PageHeader title="Cash Transit & Cash Management" subtitle="Secure solutions from a trusted security provider that safeguard your cash assets through every link of the chain." />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-kayjay-blue mb-4">Top Security Solutions for Cash Transit</h2>
              <p className="text-lg text-gray-700 mb-6">In a world where cash remains a critical medium of exchange, its safe handling and transport is non-negotiable. As a leading security company in Sri Lanka, we operate with strict protocols to minimize risk and ensure that cash reaches its destination securely, on time, every time.</p>
              <div className="space-y-4">
                  <div className="flex items-start">
                      <FaCheck className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Armed escort and secure couriers</span>
                  </div>
                  <div className="flex items-start">
                      <FaCheck className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Secure vehicles and transport logistics</span>
                  </div>
                  <div className="flex items-start">
                      <FaCheck className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Route planning with risk mitigation</span>
                  </div>
                  <div className="flex items-start">
                      <FaCheck className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Real-time tracking and monitoring</span>
                  </div>
                  <div className="flex items-start">
                      <FaCheck className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Protocols for handling anomalies or emergencies</span>
                  </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <img src="https://picsum.photos/800/600?random=5" alt="A secure armored vehicle for private security services in Sri Lanka" className="rounded-lg shadow-xl w-full h-96 object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-kayjay-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4">Secure Your Assets</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">Trust KayJay for reliable and secure cash management services. Contact us to discuss your specific needs.</p>
          <Link to="/request-a-quote" className="bg-kayjay-gold text-kayjay-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105">
            Get a Secure Quote
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CashTransitPage;