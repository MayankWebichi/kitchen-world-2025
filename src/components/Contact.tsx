import React, { useState } from 'react';
import SectionTitle from './common/SectionTitle';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle, Instagram, Facebook } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '917014333801';
    const message =
      `Name: ${formState.name}%0A` +
      `Email: ${formState.email}%0A` +
      `Phone: ${formState.phone}%0A` +
      `Service: ${formState.service}%0A` +
      `Message: ${formState.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Contact Us"
          subtitle="Get in touch for consultations, quotes, or any questions"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full text-primary-600 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">Visit Us</h4>
                    <p className="text-neutral-600 mt-1">
                      Opposite Calactrate, Rashaswami Satsang Road, 
                      <br />Rajendra Nagar, Bharatpur 321001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full text-primary-600 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">Call Us</h4>
                    <p className="text-neutral-600 mt-1">
                      <a href="tel:7014333801" className="hover:text-primary-600 transition-colors">+91 7014333801</a>
                      <br />
                      <a href="tel:9460912762" className="hover:text-primary-600 transition-colors">+91 9460912762</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full text-primary-600 mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">Business Hours</h4>
                    <p className="text-neutral-600 mt-1">
                      Monday - Saturday: 9:30 AM - 7:30 PM
                      <br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full text-primary-600 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">Email Us</h4>
                    <p className="text-neutral-600 mt-1">
                      <a href="mailto:info@kitchenworld.com" className="hover:text-primary-600 transition-colors" aria-label="Email Kitchen World & Designer">
                        info@kitchenworld.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <h4 className="font-medium text-neutral-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/kitchen_world_and_designers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-tr from-purple-600 to-pink-500 text-white p-3 rounded-full hover:opacity-90 transition-opacity"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/kwdbtp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:opacity-90 transition-opacity"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <div className="bg-white/90 p-8 rounded-3xl shadow-2xl border border-primary-100 animate-fadeIn backdrop-blur-lg relative overflow-hidden">
              <span className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-yellow-300 via-pink-200 to-primary-200 opacity-30 rounded-full blur-2xl animate-pulse"></span>
              <span className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-primary-300 via-pink-200 to-yellow-200 opacity-30 rounded-full blur-2xl animate-pulse animation-delay-600"></span>
              <h3 className="text-xl font-semibold text-neutral-800 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="modular-kitchen">Modular Kitchen</option>
                      <option value="wardrobe">Wardrobe</option>
                      <option value="interior">Interior Design</option>
                      <option value="chimney">Kitchen Chimney</option>
                      <option value="organization">Kitchen Organization</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className={`flex items-center justify-center space-x-2 w-full md:w-auto px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors`}
                  >
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
            
            {/* Google Maps */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-800 mb-6">Location</h3>
              <div className="h-80 w-full rounded-lg overflow-hidden">
                <iframe
                  title="Kitchen World & Designers Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7096.665266813975!2d77.49752187770994!3d27.208704500000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973a3056529f47f%3A0xae74af12c607098f!2sKitchen%20World%20%26%20Designers!5e0!3m2!1sen!2sin!4v1747377641049!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;