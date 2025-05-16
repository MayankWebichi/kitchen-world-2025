import React from 'react';
import SectionTitle from './common/SectionTitle';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const Leadership: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-primary-50 to-white min-h-[80vh]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Our Leadership"
          subtitle="Meet the visionary behind Kitchen World & Designer"
        />
        
        <div className="mt-12 flex flex-col lg:flex-row gap-12 items-center">
          {/* CEO Image */}
          <div className="lg:w-1/3 w-full flex justify-center">
            <div className="relative aspect-[3/4] w-72 overflow-hidden rounded-3xl shadow-2xl border-4 border-primary-200 bg-white/30 backdrop-blur-lg animate-fadeIn">
              <img
                src="images/leader.jpeg"
                alt="Vipin Sharma - CEO"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500 rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-3xl font-extrabold drop-shadow-lg">Vipin Sharma</h3>
                <p className="text-white/90 text-lg font-medium">Founder & CEO</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-white hover:text-primary-400 transition-colors hover:scale-110 transform" aria-label="LinkedIn">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://www.instagram.com/kitchen_world_and_designers/" className="text-white hover:text-pink-400 transition-colors hover:scale-110 transform" aria-label="Instagram">
                    <Instagram size={24} />
                  </a>
                  <a href="mailto:info@kitchenworld.com" className="text-white hover:text-yellow-300 transition-colors hover:scale-110 transform" aria-label="Email">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* CEO Bio */}
          <div className="lg:w-2/3 w-full space-y-6">
            <h3 className="text-3xl font-bold text-primary-700">Meet Vipin Sharma</h3>
            <p className="text-neutral-700 text-lg">
              Founder & CEO of Kitchen World and Designer, Vipin Sharma brings 15+ years of expertise in modular kitchens and interiors. Renowned for blending functionality with style, he has led 500+ successful projects across Rajasthan.
            </p>
            <blockquote className="pl-6 pr-2 py-4 border-l-8 border-primary-400 bg-primary-50/60 italic text-primary-800 rounded-xl shadow-inner my-4 text-lg font-medium animate-fadeIn">
              <span className="text-2xl mr-2 align-top text-primary-400">“</span>
              Great design transforms spaces—and lives.
            </blockquote>
            <div className="pt-2">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/80 rounded-full text-primary-700 shadow-md border border-primary-100 font-semibold">Certified Interior Designer</span>
                <span className="px-4 py-2 bg-white/80 rounded-full text-primary-700 shadow-md border border-primary-100 font-semibold">Design Excellence Award</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;