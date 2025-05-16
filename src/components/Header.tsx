import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-lg py-2`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-2 md:py-0 gap-2 md:gap-0">
          <div className="flex items-center w-full md:w-auto justify-center md:justify-start">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'About', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-all duration-300 hover:scale-105 relative group overflow-hidden
                  ${isScrolled ? 'text-neutral-800 hover:text-primary-600' : 'text-white hover:text-neutral-200'}`}
                style={{ scrollBehavior: 'smooth' }}
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-3 rounded-full transition-all duration-300 ml-2 touch-target`
              + (isScrolled 
                ? ' bg-neutral-100 hover:bg-neutral-200' 
                : ' bg-white/20 backdrop-blur-sm hover:bg-white/30')}
            aria-label="Toggle menu"
            style={{ minWidth: 48, minHeight: 48 }}
          >
            {isMenuOpen ? (
              <X size={28} className={isScrolled ? 'text-neutral-800' : 'text-white'} />
            ) : (
              <Menu size={28} className={isScrolled ? 'text-neutral-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Backdrop for mobile drawer */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      <div
        className={`fixed inset-y-0 right-0 z-50 md:hidden w-4/5 max-w-xs bg-white rounded-l-2xl shadow-2xl flex flex-col pt-10 px-6 transition-transform duration-500 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none opacity-0'
        }`}
        style={{ transitionProperty: 'opacity, transform' }}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        <nav className="flex flex-col space-y-6 py-8 mt-8">
          {['Home', 'Services', 'About', 'Portfolio', 'Testimonials', 'Contact'].map((item, idx) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xl font-bold text-primary-700 hover:text-pink-500 transition-all duration-300 hover:translate-x-2 transform"
              style={{ animationDelay: `${0.1 * idx + 0.2}s` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="mt-auto pb-8 space-y-4">
          <a
            href="tel:7014333801"
            className="flex items-center justify-center space-x-2 px-4 py-3 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Phone size={18} />
            <span>Call Now: 7014333801</span>
          </a>
          <a
            href="https://wa.me/919460912762"
            className="flex items-center justify-center space-x-2 px-4 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <MessageCircle size={18} />
            <span>WhatsApp: 9460912762</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;