import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

const Products = () => {
  const clients = [
    'TECHOPLUS', 'JODE', 'MEDICAS', 'CARANAVI',
    'FERRERIA', 'SPORT & FITNESS', 'GOBIERNO MUNICIPAL'
  ];

  return (
    <section id="productos" className="products" style={{
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
          <span className="section-subtitle">NUESTRAS SOLUCIONES</span>
          <h2 className="section-title">Productos que Aceleran tu Transformación Digital</h2>
          <p className="section-description">
            Soluciones de software listas para usar que aceleran la transformación digital de tu empresa
          </p>
        </motion.div>

        <div className="products-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {/* Vaixs Torneos */}
          <motion.div
            className="product-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: 20,
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
          >
            <div className="product-header" style={{
              padding: '1.5rem',
              background: 'rgba(0, 0, 0, 0.2)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Vaixs Torneos</h3>
              <span className="product-tag" style={{ color: '#10b981', fontSize: '0.9rem' }}>
                Plataforma de gestión deportiva
              </span>
            </div>
            <div className="product-body" style={{ padding: '1.5rem' }}>
              <p style={{ color: '#b0b0c0', marginBottom: '1.5rem' }}>
                Sistema de gestión de torneos deportivos que facilita la organización, programación, seguimiento, acreditación de equipos y jugadores.
              </p>
              <div className="product-use-cases" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                {['Asociaciones', 'Torneos municipales', 'Torneos relámpagos', 'Campeonatos de Barrios'].map((item, i) => (
                  <span key={i} style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.3rem 1rem',
                    borderRadius: 50,
                    fontSize: '0.8rem'
                  }}>{item}</span>
                ))}
              </div>
              <a href="#" className="btn btn-outline btn-small">
                Más Información <FiArrowRight />
              </a>
            </div>
          </motion.div>

          {/* Vaixs Eventos */}
          <motion.div
            className="product-card large"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: 20,
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              gridColumn: 'span 2'
            }}
          >
            <div className="product-header" style={{
              padding: '1.5rem',
              background: 'rgba(0, 0, 0, 0.2)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Vaixs Eventos</h3>
              <span className="product-tag" style={{ color: '#10b981', fontSize: '0.9rem' }}>
                Gestión de eventos
              </span>
            </div>
            <div className="product-body" style={{ padding: '1.5rem' }}>
              <p style={{ color: '#b0b0c0', marginBottom: '1.5rem' }}>
                Plataforma para gestión de eventos con control de asistentes, inscripciones, venta de entradas y reportes.
              </p>
              
              <div className="features-list" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                {[
                  'Centraliza toda la gestión',
                  'Control en tiempo real',
                  'Reportes claros y rápidos',
                  'Se adapta a cualquier evento'
                ].map((feature, i) => (
                  <span key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#b0b0c0',
                    fontSize: '0.9rem'
                  }}>
                    <FiCheck style={{ color: '#10b981', fontSize: '0.8rem' }} />
                    {feature}
                  </span>
                ))}
              </div>

              {/* Dashboard Preview */}
              <div className="dashboard-preview" style={{
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: 10,
                padding: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div className="stats-row" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '1rem'
                }}>
                  {[
                    { value: '25', label: 'Total Eventos' },
                    { value: '1,230', label: 'Usuarios Registrados' },
                    { value: '4,750', label: 'Entradas Vendidas' },
                    { value: '$85.3k', label: 'Ingresos Totales' }
                  ].map((stat, i) => (
                    <div key={i} className="stat-box" style={{
                      textAlign: 'center',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: 8
                    }}>
                      <span className="stat-value" style={{
                        display: 'block',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: '#10b981'
                      }}>{stat.value}</span>
                      <span style={{ fontSize: '0.8rem', color: '#b0b0c0' }}>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="#" className="btn btn-primary btn-small">
                Más Información <FiArrowRight />
              </a>
            </div>
          </motion.div>

          {/* Sistema de Ventas */}
          <motion.div
            className="product-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: 20,
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
          >
            <div className="product-header" style={{
              padding: '1.5rem',
              background: 'rgba(0, 0, 0, 0.2)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Sistema de Ventas</h3>
              <span className="product-tag" style={{ color: '#10b981', fontSize: '0.9rem' }}>
                Gestión empresarial
              </span>
            </div>
            <div className="product-body" style={{ padding: '1.5rem' }}>
              <p style={{ color: '#b0b0c0', marginBottom: '1.5rem' }}>
                Herramienta de gestión empresarial para controlar procesos, reportes y operaciones en una sola plataforma.
              </p>

              <div className="features-list" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                {[
                  'Control total de ventas',
                  'Reduce errores y pérdidas',
                  'Gestiona clientes',
                  'Reportes claros',
                  'Escalable y adaptable'
                ].map((feature, i) => (
                  <span key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#b0b0c0',
                    fontSize: '0.9rem'
                  }}>
                    <FiCheck style={{ color: '#10b981', fontSize: '0.8rem' }} />
                    {feature}
                  </span>
                ))}
              </div>

              {/* Chart Preview */}
              <div className="chart-preview" style={{
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: 10,
                padding: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div className="chart-bars" style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '0.5rem',
                  height: 150
                }}>
                  {[60, 85, 110, 95, 130, 145, 120].map((height, i) => (
                    <div
                      key={i}
                      className="bar"
                      style={{
                        flex: 1,
                        height,
                        background: 'linear-gradient(135deg, #10b981, #34d399)',
                        borderRadius: '5px 5px 0 0'
                      }}
                    />
                  ))}
                </div>
              </div>

              <a href="#" className="btn btn-outline btn-small">
                Más Información <FiArrowRight />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Clients Section */}
        <motion.div
          className="clients-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Algunos de nuestros clientes</h3>
          <div className="clients-grid" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem'
          }}>
            {clients.map((client, index) => (
              <motion.span
                key={index}
                className="client"
                whileHover={{ color: '#10b981', scale: 1.1 }}
                style={{
                  color: '#b0b0c0',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
              >
                {client}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx="true">{`
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
          .product-card.large {
            grid-column: span 1 !important;
          }
          .stats-row {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .clients-grid {
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Products;