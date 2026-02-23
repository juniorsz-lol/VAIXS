import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiCloud } from 'react-icons/fi';

const ServicesHighlight = () => {
  const services = [
    {
      icon: <FiCode />,
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos, responsivos y optimizados para SEO que convierten visitantes en clientes.'
    },
    {
      icon: <FiSmartphone />,
      title: 'Apps Móviles',
      description: 'Desarrollamos aplicaciones nativas y multiplataforma para iOS y Android con experiencias excepcionales.'
    },
    {
      icon: <FiCloud />,
      title: 'Soluciones Cloud',
      description: 'Implementamos infraestructura en la nube escalable y segura con AWS, Azure y Google Cloud.'
    }
  ];

  return (
    <section className="services-highlight" style={{
      background: 'rgba(20, 20, 31, 0.5)',
      padding: '6rem 0'
    }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">NUESTRO ENFOQUE</span>
          <h2 className="section-title">Creamos Software que Escala</h2>
          <p className="section-description">
            Desarrollamos aplicaciones web, móviles y cloud robustas, seguras y listas para crecer a largo plazo.
          </p>
        </motion.div>

        <div className="highlight-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="highlight-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: 20,
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem',
                color: '#4a9eff'
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '1rem'
              }}>{service.title}</h3>
              <p style={{
                color: '#b0b0c0',
                fontSize: '0.95rem'
              }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        @media (max-width: 768px) {
          .highlight-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesHighlight;