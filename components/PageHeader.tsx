
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-kayjay-blue text-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-kayjay-gold">{title}</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;
