import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer" style={{
      background: 'rgba(10, 10, 15, 0.95)',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '4rem 0 2rem'
    }}>
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: '1.8rem',
              background: 'linear-gradient(135deg, #10b981, #34d399)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '0.5rem'
            }}>VAIXS</h2>
            <span style={{
              color: '#b0b0c0',
              fontSize: '0.8rem',
              letterSpacing: 2
            }}>VIRTUAL SOLUTIONS</span>
            <p style={{
              color: '#b0b0c0',
              marginTop: '1rem',
              fontSize: '0.9rem'
            }}>
              Transformamos ideas en soluciones digitales innovadoras que impulsan el éxito de tu negocio.
            </p>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 style={{
              fontSize: '1.1rem',
              marginBottom: '1.5rem'
            }}>Enlaces Rápidos</h4>
            <ul style={{ listStyle: 'none' }}>
              {['Inicio', 'Servicios', 'Productos', 'Contacto'].map((item, index) => (
                <li key={index} style={{ marginBottom: '0.8rem' }}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: '#b0b0c0',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={e => e.target.style.color = '#4a9eff'}
                    onMouseLeave={e => e.target.style.color = '#b0b0c0'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 style={{
              fontSize: '1.1rem',
              marginBottom: '1.5rem'
            }}>Servicios</h4>
            <ul style={{ listStyle: 'none' }}>
              {['Desarrollo Web', 'Apps Móviles', 'Soluciones Cloud', 'IA & ML'].map((item, index) => (
                <li key={index} style={{ marginBottom: '0.8rem' }}>
                  <a
                    href="#servicios"
                    style={{
                      color: '#b0b0c0',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={e => e.target.style.color = '#4a9eff'}
                    onMouseLeave={e => e.target.style.color = '#b0b0c0'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 style={{
              fontSize: '1.1rem',
              marginBottom: '1.5rem'
            }}>Contacto</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.8rem',
                color: '#b0b0c0'
              }}>
                <FiMail style={{ color: '#4a9eff', width: 20 }} />
                info@vaixs.net
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.8rem',
                color: '#b0b0c0'
              }}>
                <FiPhone style={{ color: '#4a9eff', width: 20 }} />
                + (591) 68523589
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.8rem',
                color: '#b0b0c0'
              }}>
                <FiMapPin style={{ color: '#4a9eff', width: 20 }} />
                Cochabamba, Bolivia
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            textAlign: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            color: '#b0b0c0',
            fontSize: '0.9rem'
          }}
        >
          <p>© 2026 Vaixs Todos los derechos reservados.</p>
        </motion.div>
      </div>

      <style jsx="true">{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;