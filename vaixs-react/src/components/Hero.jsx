import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="inicio" className="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      padding: '6rem 0'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.1), transparent 50%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}
        >
          <motion.span
            className="hero-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: 100,
              fontSize: '0.9rem',
              letterSpacing: 2,
              marginBottom: '2rem',
              color: '#10b981'
            }}
          >
            BIENVENIDO A VAIXS
          </motion.span>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: 'clamp(3rem, 10vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              fontFamily: "'Space Grotesk', sans-serif"
            }}
          >
            Transformamos<br />
            Ideas en<br />
            <span style={{
              background: 'linear-gradient(135deg, #10b981, #34d399)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Soluciones Digitales</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: '1.2rem',
              color: '#b0b0c0',
              maxWidth: 700,
              margin: '0 auto 2.5rem',
              lineHeight: 1.6
            }}
          >
            Convertimos tu visión en software funcional, innovador y alineado<br />
            a los objetivos de tu negocio.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              marginBottom: '4rem'
            }}
          >
            <a 
              href="#servicios" 
              className="btn btn-primary"
              style={{
                background: 'linear-gradient(135deg, #10b981, #34d399)',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
              }}
            >
              Nuestros Servicios <FiArrowRight />
            </a>
            <a 
              href="#productos" 
              className="btn btn-outline"
              style={{
                background: 'transparent',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              Ver Productos <FiArrowRight />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;