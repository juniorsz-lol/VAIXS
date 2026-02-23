import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const BusinessSection = () => {
  const features = [
    'Automatización de procesos',
    'Sistemas a medida',
    'Optimización continua',
    'Resultados medibles'
  ];

  return (
    <section className="business-section" style={{
      background: 'linear-gradient(135deg, rgba(74, 158, 255, 0.05), rgba(124, 58, 237, 0.05))',
      padding: '6rem 0'
    }}>
      <div className="container">
        <div className="business-content" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <motion.div
            className="business-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '1.5rem'
            }}>
              Potenciamos tu Negocio con <span className="gradient-text">Tecnología Moderna</span>
            </h2>
            <p style={{
              color: '#b0b0c0',
              fontSize: '1.1rem',
              marginBottom: '2rem'
            }}>
              Automatización, sistemas a medida y soluciones modernas que optimizan procesos y mejoran resultados.
            </p>

            <div className="business-features" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <FiCheckCircle style={{ color: '#4a9eff' }} />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="business-buttons" style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a href="#servicios" className="btn btn-primary">
                Nuestros Servicios
              </a>
              <a href="#productos" className="btn btn-outline">
                Ver Productos <FiArrowRight />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="business-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem'
            }}>
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="grid-item"
                  whileHover={{ scale: 1.05, borderColor: '#4a9eff' }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: 10,
                    height: 150,
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx="true">{`
        @media (max-width: 768px) {
          .business-content {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .business-features {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BusinessSection;