import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">{title}</h2>
      <p className="text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>
      <div className="w-24 h-1 bg-primary-600 mx-auto mt-6"></div>
    </div>
  );
};

export default SectionTitle;