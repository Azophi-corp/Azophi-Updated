import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Benefits from './components/sections/Benefits';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    document.title = 'Azophi | IT Consulting & Managed Services';
    
    // Add animation classes
    const stylesheet = document.createElement('style');
    stylesheet.textContent = `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fade-in {
        animation: fadeIn 1s ease forwards;
      }
    `;
    document.head.appendChild(stylesheet);
    
    return () => {
      document.head.removeChild(stylesheet);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;