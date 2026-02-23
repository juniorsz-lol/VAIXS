import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesHighlight from './components/ServicesHighlight';
import BusinessSection from './components/BusinessSection';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import './styles/global.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <>
      <ParticleBackground />
      <motion.div
        style={{ 
          scaleX, 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: 3, 
          background: 'linear-gradient(135deg, #10b981, #34d399)',
          zIndex: 1001, 
          transformOrigin: '0%' 
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <ServicesHighlight />
        <BusinessSection />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;