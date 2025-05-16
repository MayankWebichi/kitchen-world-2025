import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1920"
          srcSet="https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=600 600w, https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1200 1200w, https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1920 1920w"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 1920px"
          alt="Modern kitchen interior"
          className="w-full h-full object-cover responsive-img"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <h1 className="text-white font-serif text-3xl md:text-4xl lg:text-6xl font-bold mb-6 opacity-0 animate-fadeIn">
          Transforming Spaces Since 2010
        </h1>
        <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl mb-10 opacity-0 animate-fadeIn animation-delay-300">
          We create beautiful, functional kitchens and interiors that reflect your unique style and meet your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fadeIn animation-delay-600">
          <a
            href="#services"
            className="px-8 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors duration-300 touch-target"
            style={{ minWidth: 48, minHeight: 48 }}
          >
            Our Services
          </a>
          <a
            href="#portfolio"
            className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/30 transition-colors duration-300 touch-target"
            style={{ minWidth: 48, minHeight: 48 }}
          >
            View Portfolio
          </a>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 opacity-0 animate-fadeIn animation-delay-900">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-scrollIndicator"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;