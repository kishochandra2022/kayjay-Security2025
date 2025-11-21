
import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ServiceSidebar from '../components/ServiceSidebar';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <Seo
        title="Page Not Found"
        description="The page you were looking for could not be found on the KayJay Security website."
      />
      
      <div className="bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16 py-16 md:py-24">
                <ServiceSidebar />
                <main className="flex-1 min-w-0">
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg text-center" data-aos="zoom-in">
                        <FaExclamationTriangle className="mx-auto h-24 w-24 text-kayjay-gold mb-8" />
                        <h1 className="text-6xl md:text-8xl font-extrabold text-kayjay-green">404</h1>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-kayjay-green">Page Not Found</h2>
                        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
                            We're sorry, but the page you are looking for does not exist. It might have been moved, renamed, or is temporarily unavailable.
                        </p>
                        <div className="mt-10">
                            <Link 
                            to="/" 
                            className="inline-block bg-kayjay-gold text-kayjay-green font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105"
                            >
                            Go to Homepage
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
