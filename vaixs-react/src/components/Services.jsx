import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiCloud, FiCpu, FiPenTool, FiTrendingUp } from 'react-icons/fi';

const Services = () => {
  const services = [
    { icon: <FiCode />, title: 'Desarrollo Web', description: 'Creamos sitios web modernos, responsivos y optimizados para SEO que convierten visitantes en clientes.' },
    { icon: <FiSmartphone />, title: 'Apps Móviles', description: 'Desarrollamos aplicaciones nativas y multiplataforma para iOS y Android con experiencias excepcionales.' },
    { icon: <FiCloud />, title: 'Soluciones Cloud', description: 'Implementamos infraestructura en la nube escalable y segura con AWS, Azure y Google Cloud.' },
    { icon: <FiCpu />, title: 'IA & Machine Learning', description: 'Integramos inteligencia artificial y aprendizaje automático para automatizar y optimizar procesos.' },
    { icon: <FiPenTool />, title: 'UI/UX Design', description: 'Diseñamos interfaces intuitivas y atractivas centradas en la experiencia del usuario.' },
    { icon: <FiTrendingUp />, title: 'Consultoría Tech', description: 'Asesoramos en arquitectura de software, transformación digital y mejores prácticas de desarrollo.' }
  ];

  return (
    <section id="servicios" className="services" style={{
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
          <span className="section-subtitle">LO QUE HACEMOS</span>
          <h2 className="section-title">Servicios de Desarrollo Profesional</h2>
          <p className="section-description">
            Ofrecemos servicios de desarrollo de software profesional para empresas de todos los tamaños
          </p>
        </motion.div>

        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: 20,
                padding: '2rem',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="service-icon" style={{
                width: 60,
                height: 60,
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: 15,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '2rem',
                color: '#10b981'
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontSize: '1.2rem',
                marginBottom: '1rem'
              }}>{service.title}</h3>
              <p style={{
                color: '#b0b0c0',
                fontSize: '0.95rem',
                lineHeight: 1.6
              }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;