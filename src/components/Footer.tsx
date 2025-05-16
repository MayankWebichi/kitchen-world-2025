import React from 'react';
import { Instagram, Facebook, Mail, Phone, Clock, MapPin, ArrowRight } from 'lucide-react';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8 animate-fade-in-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <p className="mt-4 text-neutral-400">
              Transforming spaces into beautiful, functional environments since 2010. Specializing in kitchen design, wardrobes, and interior solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/kitchen_world_and_designers/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 hover:scale-125 hover:text-pink-400"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/kwdbtp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 hover:scale-125 hover:text-blue-400"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="mailto:info@kitchenworld.com"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 hover:scale-125 hover:text-green-400"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-neutral-400 hover:text-white transition-all duration-300 inline-flex items-center hover:translate-x-2 transform"
                  >
                    <ArrowRight size={14} className="mr-2" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-neutral-400">
                  Opposite Calactrate, Rashaswami Satsang Road, Rajendra Nagar, Bharatpur 321001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">
                  <a href="tel:7014333801" className="hover:text-white transition-colors">
                    +91 7014333801
                  </a>
                  {', '}
                  <a href="tel:9460912762" className="hover:text-white transition-colors">
                    +91 9460912762
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">
                  Mon-Sat: 9:30 AM - 7:30 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-12 pt-8 text-center text-neutral-500 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary-500 via-pink-400 to-yellow-400 rounded-full blur-sm opacity-80"></div>
          <p>© {currentYear} Kitchen World & Designer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;