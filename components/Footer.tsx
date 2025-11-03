
import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-kayjay-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-kayjay-gold mb-4">KayJay Security</h3>
            <p className="text-gray-400 text-sm">
              Sri Lanka's No.1 security service provider with over 45 years of trusted security excellence. We provide professional security guards and top security solutions across the nation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-kayjay-gold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Our Solutions</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-kayjay-gold mb-4">Contact Info</h3>
            <address className="not-italic text-sm text-gray-400 space-y-2">
              <p>618, Aluthmawatha Road, Colombo 15, Sri Lanka</p>
              <p>Phone: <a href="tel:+94112522302" className="hover:text-white transition-colors">+94 (11) 252 2302</a></p>
              <p>Email: <a href="mailto:sales@kayjay-group.com" className="hover:text-white transition-colors">sales@kayjay-group.com</a></p>
            </address>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold text-kayjay-gold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/kayjaygroup/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/kayjay_security/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-20 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} KayJay Security Services (Pvt) Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
