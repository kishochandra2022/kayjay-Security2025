
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  imageUrl?: string;
  type?: string;
}

const Seo: React.FC<SeoProps> = ({ 
  title, 
  description, 
  keywords, 
  imageUrl, 
  type = 'website' 
}) => {
  const siteName = "KayJay Security";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const siteUrl = window.location.href;
  const defaultImage = '/images/og-default.jpg'; // Updated to local placeholder
  const finalImage = imageUrl || defaultImage;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
};

export default Seo;
