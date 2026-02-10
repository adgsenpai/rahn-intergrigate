import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash links (e.g. /#pricing)
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setIsOpen(false); // Close mobile menu
    if (href.startsWith('/#')) {
        e.preventDefault();
        const elementId = href.replace('/#', '');
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: elementId } });
        } else {
            const el = document.getElementById(elementId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-brand-slate/95 backdrop-blur-sm shadow-md py-2 border-b border-red-900/30' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer group">
            <div className="bg-brand-red p-1.5 rounded-lg group-hover:bg-red-500 transition-colors">
                 <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="ml-2 font-bold text-xl tracking-tight text-white">
              Rahn IntergriGate
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                    <div className="flex items-center text-sm font-medium text-gray-300 hover:text-brand-red transition-colors cursor-pointer pb-2 pt-2">
                        {item.label}
                        <ChevronDown className="ml-1 h-3 w-3" />
                    </div>
                ) : (
                    <Link 
                        to={item.href} 
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="flex items-center text-sm font-medium text-gray-300 hover:text-brand-red transition-colors"
                    >
                      {item.label}
                    </Link>
                )}
                
                {/* Dropdown */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 w-56 bg-brand-slate border border-red-900/30 shadow-2xl rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                    {item.dropdown.map(sub => (
                      <Link 
                        key={sub.label} 
                        to={sub.href} 
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-brand-red hover:text-white"
                      >
                          {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/login" className="text-sm font-medium text-white hover:text-red-400 transition-colors">
              Sign In
            </Link>
            <Link to="/register" className="bg-brand-red hover:bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg hover:shadow-red-500/30">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-brand-red">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-brand-slate absolute top-full left-0 w-full border-t border-red-900/30 shadow-xl h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-gray-800 last:border-0">
                {!item.dropdown ? (
                    <Link 
                        to={item.href} 
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-brand-red hover:bg-gray-900 rounded-md"
                    >
                    {item.label}
                    </Link>
                ) : (
                    <div className="px-3 py-3">
                        <div className="text-base font-medium text-brand-red mb-2">{item.label}</div>
                        <div className="pl-4 space-y-2 border-l border-gray-700">
                             {item.dropdown.map(sub => (
                                 <Link 
                                    key={sub.label}
                                    to={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-sm text-gray-400 hover:text-white"
                                 >
                                    {sub.label}
                                 </Link>
                             ))}
                        </div>
                    </div>
                )}
              </div>
            ))}
            <div className="mt-6 space-y-3 px-3">
              <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center text-gray-300 font-semibold py-2">
                  Sign In
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="block w-full text-center bg-brand-red text-white font-semibold py-3 rounded-lg shadow-md hover:bg-red-600">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;