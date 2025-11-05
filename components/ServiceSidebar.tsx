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
  const activeStyle: React.CSSProperties = {
    backgroundColor: '#0A2342',
    color: '#D4AF37',
    fontWeight: '700',
  };

  return (
    <aside className="w-full md:w-64 lg:w-72 flex-shrink-0 md:sticky top-32" data-aos="fade-right">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-kayjay-blue mb-4 border-b-2 border-kayjay-gold pb-2">Our Solutions</h3>
        <nav>
          <ul className="space-y-2">
            {serviceLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.path === '/solutions'}
                  style={({ isActive }) => (isActive ? activeStyle : {})}
                  className="flex justify-between items-center w-full px-4 py-3 text-left text-sm font-semibold text-gray-700 hover:bg-kayjay-blue hover:text-white rounded-md transition-colors duration-200 group"
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      <FaChevronRight className={`h-3 w-3 text-kayjay-gold transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                    </>
                  )}
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
