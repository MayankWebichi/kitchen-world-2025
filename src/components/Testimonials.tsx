import React, { useState, useEffect } from 'react';
import SectionTitle from './common/SectionTitle';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  project: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ekta Agarwal",
      location: "Bharatpur",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=200&q=80",
      rating: 5,
      text: "Very nice experience. Mr. Vipin is highly knowledgeable and skilled, explained all details about modular kitchen design. He was cooperative and understanding throughout the process. I am very happy to get my kitchen done from him!",
      project: "Modular Kitchen Design"
    },
    {
      id: 2,
      name: "Shalini Sharma",
      location: "Bharatpur",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&w=200&q=80",
      rating: 5,
      text: "Perfect place for your dream kitchen! The team listened to my ideas and delivered exactly what I wanted. Highly recommended for anyone looking for quality and style.",
      project: "Dream Kitchen Project"
    },
    {
      id: 3,
      name: "Manoj Ahir",
      location: "Bharatpur",
      image: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=200&q=80",
      rating: 4,
      text: "Nice place and good service. The staff was friendly and helped me choose the right options for my home. Satisfied with the experience.",
      project: "Kitchen Consultation"
    },
    {
      id: 4,
      name: "Satyendra Kumar",
      location: "Bharatpur",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=200&q=80",
      rating: 5,
      text: "Great service and support! The team was responsive and made sure everything was done on time. Will recommend to friends and family.",
      project: "Interior Design Support"
    },
    {
      id: 5,
      name: "Monika Dubey",
      location: "Bharatpur",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&w=200&q=80",
      rating: 5,
      text: "I got my kitchen, wardrobes and vanities done by the KITCHEN WORLD AND DESIGNERS for my residence. Simply outstanding works and specially timely commitment. The team did the work very efficiently throughout the whole process. The consultant was very helpful in guiding us on the modular kitchen and interior design and suggesting the best suitable options within our budget. His team is pro in creating a kitchen that you want. I would advise this to everyone. If anyone is watching for modular kitchen and interior design then Kitchen World and Designers is the only solution to your dreams come true. Perfectly matched our style. Outstanding service. No complaints at all.",
      project: "Full Home Modular & Interior"
    }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Client Testimonials"
          subtitle="What our clients say about their experience with us"
        />
        
        <div className="mt-12 relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="min-w-full px-4"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary-50">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-xl font-semibold text-neutral-800">{testimonial.name}</h3>
                            <p className="text-neutral-600">{testimonial.location}</p>
                          </div>
                        </div>
                        <Quote size={40} className="text-primary-100" />
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              size={20}
                              className={`${
                                i < testimonial.rating 
                                  ? "text-yellow-400 fill-yellow-400" 
                                  : "text-neutral-200"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-neutral-700 italic leading-relaxed">
                          "{testimonial.text}"
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-neutral-100">
                        <span className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                          {testimonial.project}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg text-neutral-800 hover:text-primary-600 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg text-neutral-800 hover:text-primary-600 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                disabled={isAnimating}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary-600 w-6' 
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;