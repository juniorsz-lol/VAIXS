import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      nombre: '',
      email: '',
      empresa: '',
      mensaje: ''
    });
  };

  return (
    <section id="contacto" className="contact" style={{
      background: 'linear-gradient(135deg, rgba(74, 158, 255, 0.05), rgba(124, 58, 237, 0.05))',
      padding: '6rem 0'
    }}>
      <div className="container">
        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start'
        }}>
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">CONTACTO</span>
            <h2 style={{
              fontSize: '2rem',
              margin: '1rem 0'
            }}>
              Transformamos ideas en soluciones digitales innovadoras
            </h2>
            <p style={{
              color: '#b0b0c0',
              marginBottom: '2rem'
            }}>
              Impulsamos el éxito de tu negocio con tecnología de vanguardia.
            </p>

            <div className="contact-details">
              {[
                { icon: <FiMail />, text: 'info@vaixs.net' },
                { icon: <FiPhone />, text: '+ (591) 68523589' },
                { icon: <FiMapPin />, text: 'Cochabamba, Bolivia' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                    color: '#b0b0c0'
                  }}
                >
                  <span style={{ color: '#4a9eff', fontSize: '1.2rem' }}>{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: 20,
              padding: '2rem'
            }}
          >
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 10,
                  color: 'white',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 10,
                  color: 'white',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                name="empresa"
                placeholder="Empresa"
                value={formData.empresa}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 10,
                  color: 'white',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <textarea
                name="mensaje"
                rows="4"
                placeholder="Cuéntanos sobre tu proyecto"
                value={formData.mensaje}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 10,
                  color: 'white',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-full"
              style={{
                width: '100%',
                justifyContent: 'center'
              }}
            >
              Enviar mensaje <FiSend />
            </button>
          </motion.form>
        </div>
      </div>

      <style jsx="true">{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;