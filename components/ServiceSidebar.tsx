
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const serviceLinks = [
  { name: 'All Security Solutions', path: '/solutions' },
  { name: 'Security Personnel', path: '/security-personnel' },
  { name: 'Cash Transit & Management', path: '/cash-transit' },
  { name: 'KAYJAY Cash Management', path: '/cash-management' },
  { name: 'Expertise & Training', path: '/expertise' },
  { name: 'KayJay Prime Movers', path: '/prime-movers' },
];

const ServiceSidebar: React.FC = () => {
  return (
    <aside className="w-full md:w-64 lg:w-72 flex-shrink-0 md:sticky top-32" data-aos="fade-right">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-kayjay-green mb-4 border-b-2 border-kayjay-gold pb-2">Our Solutions</h3>
        <nav>
          <ul className="space-y-2">
            {serviceLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.path === '/solutions'}
                  className={({ isActive }) =>
                    `flex justify-between items-center w-full px-4 py-3 text-left text-sm rounded-md transition-colors duration-200 group ${
                      isActive
                        ? 'bg-kayjay-green text-kayjay-gold font-bold'
                        : 'font-semibold text-gray-700 hover:bg-kayjay-green hover:text-white'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <FaChevronRight className="h-3 w-3 text-kayjay-gold transition-opacity opacity-0 group-hover:opacity-100" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default ServiceSidebar;