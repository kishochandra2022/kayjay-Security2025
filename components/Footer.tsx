import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-kayjay-green text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
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

          {/* Head Office */}
          <div>
            <h3 className="text-lg font-bold text-kayjay-gold mb-4">Head Office</h3>
            <div className="space-y-2 text-sm text-gray-400">
                <p>618, Aluthmawatha Road, Colombo 15, Sri Lanka.</p>
                <div className="mt-2 rounded-md overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.297433890332!2d79.86593967499708!3d6.963691993033588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2585675555555%3A0x199343336a538260!2sKay%20Jay%20Group!5e0!3m2!1sen!2slk!4v1722442253389!5m2!1sen!2slk"
                        width="100%"
                        height="120"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="KayJay Security Head Office Location"
                    ></iframe>
                </div>
            </div>
          </div>
          
          {/* Corporate Office */}
          <div>
            <h3 className="text-lg font-bold text-kayjay-gold mb-4">Corporate Office</h3>
            <div className="space-y-2 text-sm text-gray-400">
                <p>No 337/A, Rajagiriya Rd, Nawala, Sri Lanka.</p>
                <div className="mt-2 rounded-md overflow-hidden">
                      <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.028972621003!2d79.90159297499616!3d6.88673399311101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a2b55555555%3A0x2db401a5573752e!2sKay%20Jay%20Security!5e0!3m2!1sen!2slk!4v1722442345631!5m2!1sen!2slk"
                          width="100%"
                          height="120"
                          style={{ border: 0 }}
                          allowFullScreen={false}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="KayJay Security Corporate Office Location"
                      ></iframe>
                </div>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-bold text-kayjay-gold mb-4">Get in Touch</h3>
            <div className="space-y-4 text-sm text-gray-400">
                <div>
                    <p className="font-semibold text-gray-300">Phone</p>
                    <a href="tel:+94722249254" className="block hover:text-white transition-colors">+94 (72) 224 9254 (Hotline)</a>
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