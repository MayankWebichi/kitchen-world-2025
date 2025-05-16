import React from 'react';
import { Twitch as Kitchen, Wind, PenTool, Flame, Package2, Award as Wardrobe } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group">
      <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-neutral-800">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Kitchen size={30} />,
      title: "Modular Kitchen Design",
      description: "Custom modular kitchen solutions designed for efficiency, style, and functionality to match your unique needs."
    },
    {
      icon: <Wind size={30} />,
      title: "Kitchen Chimney Solutions",
      description: "Premium kitchen chimneys with expert installation for a smoke and odor-free cooking experience."
    },
    {
      icon: <PenTool size={30} />,
      title: "Interior Design Services",
      description: "Comprehensive interior design services to transform your space with our expert designers."
    },
    {
      icon: <Flame size={30} />,
      title: "Cook Top Installation",
      description: "Professional installation of modern cook tops integrated seamlessly into your kitchen design."
    },
    {
      icon: <Package2 size={30} />,
      title: "Kitchen Organization",
      description: "Smart storage solutions including trays, baskets, and trolleys to maximize your kitchen space."
    },
    {
      icon: <Wardrobe size={30} />,
      title: "Wardrobe Design",
      description: "Custom-designed wardrobes that maximize storage while complementing your interior style."
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Our Services"
          subtitle="We provide a wide range of kitchen and interior design services"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;