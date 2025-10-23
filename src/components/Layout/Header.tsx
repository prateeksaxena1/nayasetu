import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../UI/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  }, [location]);
  
  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };
  
  const navigationItems = [
    { name: 'Home', link: '/' },
    { 
      name: 'About',
      submenu: [
        { name: 'Our Firm', link: '/about' },
        { name: 'Our Team', link: '/team' },
      ]
    },
    { name: 'Case Studies', link: '/case-studies' },
    { name: 'Resources', link: '/resources' },
    { name: 'Contact', link: '/contact' },
  ];
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://i.pinimg.com/736x/07/06/6c/07066c676a89eea0b5cd460a7d314000.jpg" 
              alt="Nayaysetu Logo" 
              className="h-16 w-auto"
            />
            <span className={`ml-3 font-poppins font-semibold text-2xl tracking-[0.2em] ${isScrolled ? 'text-nayaysetu' : 'text-white'}`}>
              NYAYASETU
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex space-x-8">
              {navigationItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.submenu ? (
                    <div className="flex items-center cursor-pointer">
                      <span 
                        className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-nayaysetu hover:text-nayaysetu-gold' : 'text-white hover:text-nayaysetu-gold'}`}
                        onClick={() => toggleSubmenu(item.name)}
                      >
                        {item.name}
                      </span>
                      <ChevronDown className={`ml-1 w-4 h-4 transition-colors duration-300 ${isScrolled ? 'text-nayaysetu' : 'text-white'}`} />
                      
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top-left z-50">
                        <ul>
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link 
                                to={subItem.link}
                                className="block px-4 py-2 text-sm text-nayaysetu hover:bg-nayaysetu hover:text-white"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={item.link}
                      className={`font-medium transition-colors duration-300 ${
                        isScrolled 
                          ? 'text-nayaysetu hover:text-nayaysetu-gold'
                          : 'text-white hover:text-nayaysetu-gold'
                      } ${location.pathname === item.link ? 'border-b-2 border-nayaysetu-gold' : ''}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="ml-8">
              <Button size="small">Free Consultation</Button>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-nayaysetu' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-nayaysetu' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 right-0 border-t">
          <ul className="px-4 py-2">
            {navigationItems.map((item, index) => (
              <li key={index} className="py-2">
                {item.submenu ? (
                  <div>
                    <div 
                      className="flex items-center justify-between py-2 px-4 text-nayaysetu hover:text-nayaysetu-gold cursor-pointer"
                      onClick={() => toggleSubmenu(item.name)}
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className={`w-4 h-4 ${activeSubmenu === item.name ? 'transform rotate-180' : ''}`} />
                    </div>
                    
                    {activeSubmenu === item.name && (
                      <ul className="pl-4 pb-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link 
                              to={subItem.link}
                              className="block py-2 px-4 text-sm text-nayaysetu hover:text-nayaysetu-gold"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={item.link}
                    className={`block py-2 px-4 text-nayaysetu hover:text-nayaysetu-gold ${
                      location.pathname === item.link ? 'font-semibold text-nayaysetu-gold' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="py-2 px-4">
              <Button className="w-full">Free Consultation</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;