import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-kayjay-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
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

          {/* Our Offices */}
          <div>
            <h3 className="text-lg font-bold text-kayjay-gold mb-4">Our Offices</h3>
            <div className="space-y-4 text-sm text-gray-400">
                <div>
                    <p className="font-semibold text-gray-300">Head Office</p>
                    <p>618, Aluthmawatha Road, Colombo 15, Sri Lanka.</p>
                    <a 
                        href="https://www.google.com/maps/search/?api=1&query=Kay+Jay+Group+Colombo+15" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-kayjay-gold hover:underline"
                    >
                        View on Map
                    </a>
                </div>
                <div>
                    <p className="font-semibold text-gray-300">Corporate Office</p>
                    <p>No 337/A, Rajagiriya Rd, Nawala, Sri Lanka.</p>
                     <a 
                        href="https://www.google.com/maps/search/?api=1&query=Kay+Jay+Security+Nawala" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-kayjay-gold hover:underline"
                    >
                        View on Map
                    </a>
                </div>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-bold text-kayjay-gold mb-4">Get in Touch</h3>
            <div className="space-y-4 text-sm text-gray-400">
                <div>
                    <p className="font-semibold text-gray-300">Phone</p>
                    <a href="tel:+94112522302" className="block hover:text-white transition-colors">+94 (11) 252 2302</a>
                    <a href="tel:+94112529242" className="block hover:text-white transition-colors">+94 (11) 252 9242</a>
                </div>
                 <div>
                    <p className="font-semibold text-gray-300">Email</p>
                    <a href="mailto:kayjay@kayjay-group.com" className="block hover:text-white transition-colors">kayjay@kayjay-group.com</a>
                    <a href="mailto:sales@kayjay-group.com" className="block hover:text-white transition-colors">sales@kayjay-group.com</a>
                </div>
                <div>
                    <p className="font-semibold text-gray-300">Follow Us</p>
                    <div className="flex space-x-4 mt-2">
                      <a href="https://web.facebook.com/kayjaygroup/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon className="h-5 w-5" /></a>
                      <a href="https://www.instagram.com/kayjay_security/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon className="h-5 w-5" /></a>
                    </div>
                </div>
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
