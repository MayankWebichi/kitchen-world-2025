import React from 'react';
import { Award, MapPin, BookOpen, Shield } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem: React.FC<StatProps> = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-primary-600 mb-2">{icon}</div>
      <div className="text-3xl font-bold mb-1 text-neutral-800">{value}</div>
      <div className="text-neutral-600">{label}</div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="About Us"
          subtitle="Learn more about Kitchen World & Designer"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-neutral-800">Bharatpur's Trusted Modular Kitchen & Interior Experts</h3>
            <p className="text-neutral-600">
              Kitchen World and Designer delivers custom modular kitchens, wardrobes, and interior solutions in Bharatpur and nearby cities. With 13+ years of experience and 500+ projects, we blend innovative design, quality materials, and expert craftsmanship to create beautiful, functional spaces tailored to your lifestyle.
            </p>
            <div className="pt-2">
              <h4 className="text-xl font-semibold mb-4 text-neutral-800">Serving</h4>
              <div className="flex flex-wrap gap-3">
                {['Bharatpur', 'Deeg', 'Bayana', 'Kaman', 'Alwar', 'Mathura'].map((area) => (
                  <span key={area} className="px-4 py-2 bg-neutral-100 rounded-full text-neutral-700">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Image & Stats */}
          <div className="space-y-8">
            <div className="relative h-80 overflow-hidden rounded-lg shadow-md">
              <img
                src="https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?auto=compress&cs=tinysrgb&w=1200"
                srcSet="https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?auto=compress&cs=tinysrgb&w=600 600w, https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?auto=compress&cs=tinysrgb&w=1200 1200w"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 1200px"
                alt="Kitchen World & Designer workspace"
                className="w-full h-full object-cover responsive-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Professional Excellence</h4>
                  <p>Our showroom features the latest in kitchen design and technology</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatItem
                icon={<Award size={30} />}
                value="13+"
                label="Years of Experience"
              />
              <StatItem
                icon={<Shield size={30} />}
                value="500+"
                label="Projects Completed"
              />
              <StatItem
                icon={<BookOpen size={30} />}
                value="10+"
                label="Design Awards"
              />
              <StatItem
                icon={<MapPin size={30} />}
                value="6+"
                label="Cities Served"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;