
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { searchableContent, SearchableContent } from '../data/searchableContent';
import { PhoneIcon, MailIcon, FacebookIcon, InstagramIcon, SearchIcon, ChevronDownIcon, CloseIcon, MenuIcon } from './icons';
import { SearchHighlight } from './SearchHighlight';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { 
    name: 'Our Solutions', 
    path: '/solutions',
    megaMenu: [
      {
        heading: 'Core Services',
        links: [
          { name: 'Manned Guard Services', path: '/solutions' },
          { name: 'Security Personnel', path: '/security-personnel' },
          { name: 'Electronic Security', path: '/solutions' },
        ]
      },
      {
        heading: 'Specialized Solutions',
        links: [
          { name: 'KAYJAY Cash Management', path: '/cash-management' },
          { name: 'Cash Transit & Management', path: '/cash-transit' },
        ]
      },
      {
        heading: 'Group Companies',
        links: [
          { name: 'KayJay Prime Movers', path: '/prime-movers' },
        ]
      }
    ]
  },
  { name: 'Why Choose Us', path: '/why-kayjay' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact Us', path: '/contact' },
];

// Assuming your logo is named 'logo.svg' and is in the 'public' folder.
const LOGO_PATH = '/logo.svg';

/**
 * Calculates the Levenshtein distance between two strings.
 * This is used for fuzzy string matching to account for typos.
 */
const levenshteinDistance = (a: string, b: string): number => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

  for (let i = 0; i <= a.length; i++) {
    matrix[0][i] = i;
  }

  for (let j = 0; j <= b.length; j++) {
    matrix[j][0] = j;
  }

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,        // deletion
        matrix[j - 1][i] + 1,        // insertion
        matrix[j - 1][i - 1] + indicator, // substitution
      );
    }
  }

  return matrix[b.length][a.length];
};


const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(null);
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
  const [isOverlayRendered, setIsOverlayRendered] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchableContent[]>([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Effect for search overlay
  useEffect(() => {
    if (isSearchOverlayOpen) {
      document.body.style.overflow = 'hidden';
      // After mounting, trigger the transition for a smooth entry animation
      requestAnimationFrame(() => {
        setIsOverlayRendered(true);
      });
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'auto';
      setIsOverlayRendered(false); // Reset on close
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSearchOverlayOpen]);

  // Effect for click outside desktop search and mega menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsResultsVisible(false);
      }
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    const lowerCaseTerm = term.toLowerCase().trim();
    setSearchTerm(term);

    if (lowerCaseTerm.length > 0) {
      const searchWords = lowerCaseTerm.split(/\s+/).filter(Boolean);

      const results = searchableContent.filter(item => {
        const content = `${item.title} ${item.keywords} ${item.description}`
          .toLowerCase()
          .replace(/[^\w\s]/g, ' ');
        
        // Quick check for exact phrase match
        if (content.includes(lowerCaseTerm)) {
          return true;
        }

        const contentWords = [...new Set(content.split(/\s+/).filter(Boolean))];

        return searchWords.every(searchWord =>
          contentWords.some(contentWord => {
            const distance = levenshteinDistance(searchWord, contentWord);
            // Allow more mistakes for longer words: 0 for len < 4, 1 for len 4-7, 2 for len > 7
            const threshold = searchWord.length > 7 ? 2 : searchWord.length > 3 ? 1 : 0;
            return distance <= threshold;
          })
        );
      });
      setSearchResults(results);
      setIsResultsVisible(true);
    } else {
      setSearchResults([]);
      setIsResultsVisible(false);
    }
  };
  
  const closeSearch = () => {
      setIsSearchOverlayOpen(false);
      setIsResultsVisible(false);
      setSearchTerm('');
      setSearchResults([]);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSubMenu(null);
  };

  const toggleMobileSubMenu = (name: string) => {
    setOpenMobileSubMenu(prev => (prev === name ? null : name));
  };

  const SearchResultsList = () => (
    <>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map(result => (
            <li key={result.path}>
              <Link to={result.path} onClick={closeSearch} className="block p-4 hover:bg-kayjay-light-gray transition-colors">
                <div className="font-bold text-kayjay-green">
                   <SearchHighlight text={result.title} highlight={searchTerm} />
                </div>
                <p className="text-sm text-gray-600">
                   <SearchHighlight text={result.description} highlight={searchTerm} />
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-8 text-center text-gray-500">No results found for "{searchTerm}".</div>
      )}
    </>
  );

  return (
    <>
      <header className="sticky top-[-44px] hover:top-0 md:top-[-44px] z-40 w-full transition-all duration-300 ease-in-out">
        {/* Top Bar */}
        <div className="bg-kayjay-dark-gray text-white h-[44px]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
            <div className="flex items-center space-x-4 text-sm">
              <a href="tel:+94722249254" className="flex items-center space-x-2 hover:text-kayjay-gold transition-colors">
                <PhoneIcon className="h-4 w-4" />
                <span>+94 (72) 224 9254</span>
              </a>
              <a href="mailto:marketing@kayjay-group.com" className="hidden sm:flex items-center space-x-2 hover:text-kayjay-gold transition-colors">
                <MailIcon className="h-4 w-4" />
                <span>marketing@kayjay-group.com</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {/* Desktop Search Bar */}
              <div className="relative" ref={searchContainerRef}>
                 <div className="flex items-center">
                   <input
                     type="text"
                     value={searchTerm}
                     onChange={handleSearchChange}
                     onFocus={() => searchTerm.length > 0 && setIsResultsVisible(true)}
                     placeholder="Search..."
                     className="w-48 lg:w-56 pl-4 pr-10 py-2 border border-gray-500 bg-gray-600 text-white rounded-full focus:ring-kayjay-gold focus:border-kayjay-gold focus:bg-gray-700 transition-all duration-300 text-sm"
                   />
                   <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                     <SearchIcon className="h-5 w-5" />
                   </button>
                 </div>
                 {isResultsVisible && searchTerm.length > 0 && (
                   <div className="absolute top-full mt-2 w-96 max-h-96 overflow-y-auto bg-white rounded-md shadow-2xl border z-50">
                     <SearchResultsList />
                   </div>
                 )}
              </div>
              <div className="flex items-center space-x-4">
                  <a href="https://web.facebook.com/kayjaysecurity" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-kayjay-gold transition-colors"><FacebookIcon className="h-5 w-5" /></a>
                  <a href="https://www.instagram.com/kayjay_security/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-kayjay-gold transition-colors"><InstagramIcon className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div id="main-nav" className="bg-kayjay-green shadow-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex-shrink-0">
                <NavLink to="/" className="flex items-center space-x-2 sm:space-x-3">
                  <img src={LOGO_PATH} alt="KayJay Security Logo" className="h-9 sm:h-10 w-auto" />
                  <span className="text-white text-base sm:text-xl md:text-2xl font-extrabold tracking-tight sm:tracking-wider">
                     KAYJAY SECURITY
                  </span>
                </NavLink>
              </div>
              
              {/* Desktop Menu */}
              <nav className="hidden lg:flex items-center space-x-6">
                {navLinks.map((link) => (
                  link.megaMenu ? (
                    <div key={link.name} className="relative" ref={megaMenuRef}>
                      <button
                        onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                        className="text-white hover:text-kayjay-gold px-2 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center focus:outline-none"
                        aria-haspopup="true"
                        aria-expanded={isMegaMenuOpen}
                      >
                        {link.name}
                        <ChevronDownIcon className={`h-4 w-4 ml-1 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-3xl pt-4 transition-all duration-300 ease-in-out ${isMegaMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}`}>
                        <div className="bg-white rounded-lg shadow-2xl p-8 grid grid-cols-3 gap-8">
                          {link.megaMenu.map(section => (
                            <div key={section.heading}>
                              <h3 className="font-bold text-kayjay-green mb-4">{section.heading}</h3>
                              <ul className="space-y-3">
                                {section.links.map(subLink => (
                                  <li key={subLink.name}>
                                    <Link 
                                      to={subLink.path} 
                                      onClick={() => setIsMegaMenuOpen(false)}
                                      className="text-gray-600 hover:text-kayjay-gold transition-colors text-sm"
                                    >
                                      {subLink.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        `hover:text-kayjay-gold px-2 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-colors ${
                          isActive ? 'text-kayjay-gold' : 'text-white'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )
                ))}
              </nav>

              <div className="hidden lg:flex items-center">
                <Link to="/request-a-quote" className="bg-kayjay-gold text-kayjay-green font-bold py-2 px-5 rounded-full text-sm hover:bg-yellow-400 transition-transform transform hover:scale-105">
                  Request a Quote
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center space-x-2">
                 <button onClick={() => setIsSearchOverlayOpen(true)} aria-label="Search website" className="text-white hover:text-kayjay-gold p-2">
                  <SearchIcon className="h-5 w-5" />
                </button>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-white">
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

           {/* Mobile Menu Panel */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-kayjay-green border-t border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  link.megaMenu ? (
                    <div key={link.name}>
                      <button 
                        onClick={() => toggleMobileSubMenu(link.name)}
                        className="w-full flex justify-between items-center text-left text-white hover:text-kayjay-gold px-3 py-2 rounded-md text-base font-bold uppercase tracking-wider transition-colors"
                      >
                        <span>{link.name}</span>
                        <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${openMobileSubMenu === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      {openMobileSubMenu === link.name && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-kayjay-gold/50">
                          {link.megaMenu.map(section => (
                            <div key={section.heading} className="py-2">
                              <h3 className="font-semibold text-kayjay-gold mb-2 px-2 text-sm uppercase tracking-wider">{section.heading}</h3>
                              <ul className="space-y-1">
                                {section.links.map(subLink => (
                                  <li key={subLink.name}>
                                    <Link 
                                      to={subLink.path} 
                                      onClick={closeMobileMenu}
                                      className="block text-white hover:text-kayjay-gold hover:bg-gray-700/50 px-2 py-2 rounded-md"
                                    >
                                      {subLink.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={closeMobileMenu}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        `hover:text-kayjay-gold block px-3 py-2 rounded-md text-base font-bold uppercase tracking-wider ${
                          isActive ? 'text-kayjay-gold' : 'text-white'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )
                ))}
                <div className="pt-4 px-3">
                    <Link to="/request-a-quote" onClick={closeMobileMenu} className="block w-full text-center bg-kayjay-gold text-kayjay-green font-bold py-2 px-5 rounded-full text-base hover:bg-yellow-400 transition-colors">
                      Request a Quote
                    </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Search Overlay for Mobile */}
      {isSearchOverlayOpen && (
        <div className={`fixed inset-0 bg-black z-50 flex items-start justify-center p-4 pt-[15vh] transition-opacity duration-300 ease-in-out ${isOverlayRendered ? 'bg-opacity-80' : 'bg-opacity-0'}`}>
          <div 
            className={`relative bg-white w-full max-w-2xl rounded-lg shadow-xl transition-all duration-300 ease-in-out ${isOverlayRendered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} 
            role="dialog" 
            aria-modal="true"
          >
            <div className="p-4">
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <SearchIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <input
                      ref={searchInputRef}
                      type="search"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      placeholder="Search KayJay Security..."
                      className="block w-full border border-gray-300 rounded-full py-3 pl-14 pr-14 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kayjay-gold"
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                      <button onClick={closeSearch} className="text-gray-500 hover:text-kayjay-green p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kayjay-green">
                          <CloseIcon className="h-6 w-6" />
                          <span className="sr-only">Close search</span>
                      </button>
                  </div>
              </div>
            </div>
            
            {searchTerm.length > 0 && (
                 <div className="max-h-[50vh] overflow-y-auto border-t border-gray-200">
                    <SearchResultsList />
                </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
