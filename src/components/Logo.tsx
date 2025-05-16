import React from 'react';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'text-primary-600' }) => {
  return (
    <div className="flex items-center w-full justify-center md:justify-start gap-2">
      <img 
        src="logo.png"
        alt="Kitchen World and Designer Logo" 
        className="h-10 w-10 md:h-12 md:w-12 mr-2 drop-shadow-lg bg-white rounded-full p-1 border border-primary-200 shadow-md flex-shrink-0"
      />
      <span className="font-serif font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl text-primary-700 tracking-tight drop-shadow-sm text-center md:text-left whitespace-nowrap flex flex-wrap items-center gap-x-1">
        Kitchen World and Designer
      </span>
    </div>
  );
};

export default Logo;