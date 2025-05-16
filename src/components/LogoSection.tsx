import React from 'react';

const LogoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-primary-50 to-yellow-50 flex justify-center items-center">
      <div className="relative max-w-md mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-primary-100 p-8 flex flex-col items-center animate-fadeIn">
        <div className="relative">
          <img
            src="logo.png"
            alt="Kitchen World & Designer Logo"
            className="h-32 w-32 md:h-40 md:w-40 object-contain rounded-2xl shadow-xl border-4 border-primary-200 animate-logo-bounce"
          />
          {/* Shine animation */}
          <span className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl">
            <span className="block w-1/3 h-full bg-gradient-to-t from-white/80 to-transparent absolute left-0 top-0 animate-logo-shine"></span>
          </span>
        </div>
        <h3 className="mt-6 text-2xl md:text-3xl font-serif font-extrabold text-primary-700 tracking-tight text-center drop-shadow-lg">
       
        </h3>
        <p className="mt-2 text-neutral-600 text-center max-w-xs">
          The mark of luxury, trust, and innovation in kitchen and interior design.
        </p>
      </div>
    </section>
  );
};

export default LogoSection; 