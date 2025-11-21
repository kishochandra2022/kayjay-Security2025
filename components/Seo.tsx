

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
  const currentUrl = window.location.href;
  const siteOrigin = window.location.origin; // Get the base origin (e.g., https://kayjaysecurity.com)

  const defaultImage = '/images/og-default.jpg'; 
  
  // Construct an absolute URL for the image
  // new URL() handles both relative and already absolute imageUrls correctly.
  const finalAbsoluteImage = imageUrl 
    ? new URL(imageUrl, siteOrigin).href 
    : new URL(defaultImage, siteOrigin).href;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalAbsoluteImage} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalAbsoluteImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};

export default Seo;