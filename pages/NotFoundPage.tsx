import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <Seo
        title="Page Not Found"
        description="The page you were looking for could not be found on the KayJay Security website."
      />
      <div className="bg-white text-kayjay-dark-gray py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
          <FaExclamationTriangle className="mx-auto h-24 w-24 text-kayjay-gold mb-8" />
          <h1 className="text-6xl md:text-8xl font-extrabold text-kayjay-blue">404</h1>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-kayjay-blue">Page Not Found</h2>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
            We're sorry, but the page you are looking for does not exist. It might have been moved, renamed, or is temporarily unavailable.
          </p>
          <div className="mt-10">
            <Link 
              to="/" 
              className="inline-block bg-kayjay-gold text-kayjay-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;