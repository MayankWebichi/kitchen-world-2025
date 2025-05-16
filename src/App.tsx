import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Leadership from './components/Leadership';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "Kitchen World & Designer | Transforming Spaces Since 2010";
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Services />
      <About />
      <Leadership />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;