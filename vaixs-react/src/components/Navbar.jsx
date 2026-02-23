import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#productos', label: 'Productos' },
    { href: '#contacto', label: 'Contacto' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        background: scrolled ? 'rgba(10, 10, 15, 0.95)' : 'rgba(10, 10, 15, 0.8)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        
        {/* Logo con X y textos */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: '15px'
        }}>
          {/* SVG de la X */}
          <svg width="70" height="50" viewBox="0 90 230 120" style={{ display: 'block' }}>
            <defs>
              <linearGradient id="greenTop" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#7FD84A', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#52C41A', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#3DA015', stopOpacity: 1 }} />
              </linearGradient>
              <filter id="shadowDeep" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
                <feOffset dx="0" dy="15" result="offsetblur"/>
                <feComponentTransfer in="offsetblur">
                  <feFuncA type="linear" slope="0.5"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <g filter="url(#shadowDeep)">
              {/* Barra izquierda - Parte superior de la X */}
              <g>
                <path d="M 90 80 L 130 150 L 170 80 L 150 80 L 130 115 L 110 80 Z" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="6" 
                      strokeLinejoin="round"/>
                <path d="M 90 80 L 95 90 L 125 140 L 130 150 Z" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="6" 
                      strokeLinejoin="round"/>
              </g>

              {/* Barra derecha */}
              <g>
                <path d="M 180 80 L 220 80 L 170 150 L 130 150 Z" fill="url(#greenTop)"/>
                <path d="M 180 80 L 170 90 L 120 160 L 130 150 Z" fill="#2E7D0E"/>
                <path d="M 220 80 L 230 90 L 180 160 L 170 150 Z" fill="#3DA015"/>
                <path d="M 180 80 L 220 80 L 230 90 L 170 90 Z" fill="#5BB91E"/>
                <path d="M 185 83 L 215 83 L 165 148 L 140 148 Z" fill="rgba(255,255,255,0.3)"/>
              </g>

              {/* Brazo abajo derecha */}
              <g>
                <path d="M 130 150 L 170 150 L 220 220 L 180 220 Z" fill="url(#greenTop)"/>
                <path d="M 130 150 L 120 160 L 170 230 L 180 220 Z" fill="#2E7D0E"/>
                <path d="M 170 150 L 180 160 L 230 230 L 220 220 Z" fill="#3DA015"/>
                <path d="M 180 220 L 220 220 L 230 230 L 170 230 Z" fill="#2E7D0E"/>
                <path d="M 135 148 L 165 148 L 215 218 L 190 218 Z" fill="rgba(255,255,255,0.3)"/>
              </g>

              {/* Brazo abajo izquierda */}
              <g>
                <path d="M 130 150 L 170 150 L 120 220 L 80 220 Z" fill="url(#greenTop)"/>
                <path d="M 130 150 L 120 160 L 70 230 L 80 220 Z" fill="#2E7D0E"/>
                <path d="M 170 150 L 180 160 L 130 230 L 120 220 Z" fill="#3DA015"/>
                <path d="M 80 220 L 120 220 L 130 230 L 70 230 Z" fill="#2E7D0E"/>
                <path d="M 135 148 L 165 148 L 115 218 L 90 218 Z" fill="rgba(255,255,255,0.3)"/>
              </g>
            </g>
          </svg>
          
          {/* Textos VAIXS y VIRTUAL SOLUTIONS */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            lineHeight: 1.2
          }}>
            <span style={{
              fontSize: '1.8rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #10b981, #34d399)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-0.5px'
            }}>VAIXS</span>
            <span style={{
              fontSize: '0.7rem',
              color: '#b0b0c0',
              letterSpacing: '2px'
            }}>VIRTUAL SOLUTIONS</span>
          </div>
        </div>

        {/* Menú de navegación */}
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <ul style={{
            display: 'flex',
            gap: '2.5rem',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    position: 'relative',
                    paddingBottom: '5px'
                  }}
                >
                  {item.label}
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: activeSection === item.href.substring(1) ? '100%' : 0,
                    height: 2,
                    background: 'linear-gradient(135deg, #10b981, #34d399)',
                    transition: 'width 0.3s ease'
                  }} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menú hamburguesa para móvil */}
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          style={{
            display: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: 'white'
          }}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Estilos responsive */}
      <style>{`
        @media (max-width: 768px) {
          div[onClick] {
            display: block !important;
          }
          ul {
            display: ${isOpen ? 'flex' : 'none'} !important;
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            height: calc(100vh - 80px);
            background: rgba(10, 10, 15, 0.95);
            backdrop-filter: blur(10px);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            margin: 0;
            padding: 0;
          }
          .logo svg {
            width: 50px;
            height: 35px;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;