
import React, { useEffect } from 'react';
// FIX: Outlet is a react-router-dom v6 component. Removing for v5 compatibility.
// import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import WhatsAppButton from './WhatsAppButton';

declare const AOS: any; // Declare AOS to be available globally

// FIX: Added children to props for React.FC as it is no longer implicit.
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 800, // Animation duration
          once: true,    // Animate elements only once
          offset: 100,   // Offset (in px) from the original trigger point
        });
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "KayJay Security",
      "description": "As Sri Lanka's No.1 security service provider with over 45 years of trusted security excellence, we provide professional security guards and top security solutions across the nation.",
      "url": "https://www.kayjay-group.com", // Placeholder URL
      "logo": "https://www.kayjay-group.com/logo.png", // Placeholder URL
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+94-11-252-2302",
        "contactType": "customer service",
        "areaServed": "LK"
      },
      "address": {
          "@type": "PostalAddress",
          "streetAddress": "618, Aluthmawatha Road",
          "addressLocality": "Colombo",
          "postalCode": "15",
          "addressCountry": "LK"
      },
      "sameAs": [
        "https://web.facebook.com/kayjaygroup/",
        "https://www.instagram.com/kayjay_security/"
      ]
    };

    const scriptId = 'json-ld-organization-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      // FIX: Property 'type' does not exist on type 'HTMLElement'.
      // Correctly handle script type by using the 'type' property on HTMLScriptElement.
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema, null, 2);
  }, []);

  return (
    <div className="bg-kayjay-light-gray text-kayjay-dark-gray font-sans flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;