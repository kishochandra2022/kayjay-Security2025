
import React, { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, imageUrl }) => {
  useEffect(() => {
    const fullTitle = `${title} | KayJay Security`;
    const siteUrl = window.location.href;

    // Update title
    document.title = fullTitle;

    // Update meta tags using a helper
    setMetaTag('name', 'description', description);

    // Open Graph Tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', siteUrl);
    setMetaTag('property', 'og:site_name', 'KayJay Security');
    // Using a placeholder image, ideally this would be specific to the page
    setMetaTag('property', 'og:image', imageUrl || 'https://picsum.photos/1200/630?random=0');
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    
    // Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    // Using a placeholder image
    setMetaTag('name', 'twitter:image', imageUrl || 'https://picsum.photos/1200/630?random=0');
    
    // Set canonical URL
    setLinkTag('canonical', siteUrl);

  }, [title, description, imageUrl]);

  const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
    let element = document.querySelector(`meta[${attr}="${key}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attr, key);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
          element = document.createElement('link');
          element.setAttribute('rel', rel);
          document.head.appendChild(element);
      }
      element.setAttribute('href', href);
  };

  return null;
};

export default Seo;