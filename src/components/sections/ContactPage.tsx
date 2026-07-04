import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';
import {
  colors,
  containerStyle,
  gradients,
  sectionStyle,
  sectionTitleStyle,
  shadows
} from '../../styles/theme';
import { CONTACT_EMAIL, socialLinks } from '../../data/socialLinks';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormData = { name: '', email: '', subject: '', message: '' };

export const ContactPage: React.FC = () => {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState<FormData>(initialForm);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || 'Contacto desde el portafolio');
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const formStyle: React.CSSProperties = {
    maxWidth: isMobile ? '100%' : '600px',
    margin: '0 auto',
    background: 'white',
    borderRadius: '1rem',
    padding: isMobile ? '1.5rem' : '2rem',
    boxShadow: shadows.card
  };

  const formGroup: React.CSSProperties = {
    marginBottom: isMobile ? '1.25rem' : '1.5rem'
  };

  const label: React.CSSProperties = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 600,
    color: colors.text,
    fontSize: isMobile ? '0.9rem' : '1rem'
  };

  const input: React.CSSProperties = {
    width: '100%',
    padding: isMobile ? '0.7rem' : '0.75rem',
    border: `2px solid ${colors.border}`,
    borderRadius: '0.5rem',
    fontSize: isMobile ? '0.9rem' : '1rem',
    transition: 'border-color 0.3s ease',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const textarea: React.CSSProperties = {
    ...input,
    minHeight: isMobile ? '100px' : '120px',
    resize: 'vertical'
  };

  const submitButton: React.CSSProperties = {
    width: '100%',
    background: gradients.primary,
    color: 'white',
    padding: isMobile ? '0.9rem' : '1rem',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: isMobile ? '1rem' : '1.1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  return (
    <section style={sectionStyle(isMobile)}>
      <div style={containerStyle}>
        <motion.h2
          style={sectionTitleStyle(isMobile)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contáctame
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form style={formStyle} onSubmit={handleSubmit}>
            <div style={formGroup}>
              <label style={label} htmlFor="name">
                Nombre *
              </label>
              <input
                style={input}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Tu nombre completo"
              />
            </div>

            <div style={formGroup}>
              <label style={label} htmlFor="email">
                Email *
              </label>
              <input
                style={input}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="tu.email@ejemplo.com"
              />
            </div>

            <div style={formGroup}>
              <label style={label} htmlFor="subject">
                Asunto
              </label>
              <input
                style={input}
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Motivo de tu mensaje"
              />
            </div>

            <div style={formGroup}>
              <label style={label} htmlFor="message">
                Mensaje *
              </label>
              <textarea
                style={textarea}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Describe tu proyecto o consulta..."
              />
            </div>

            <motion.button
              type="submit"
              style={submitButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Mensaje
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3
            style={{
              textAlign: 'center',
              marginTop: '3rem',
              marginBottom: '1.5rem',
              color: colors.text,
              fontSize: '1.5rem'
            }}
          >
            Sígueme en mis redes
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: '1rem',
              marginTop: '2rem'
            }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'white',
                  borderRadius: '1rem',
                  padding: '1rem',
                  textAlign: 'center',
                  boxShadow: shadows.soft,
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  color: colors.text,
                  minWidth: isMobile ? 'auto' : '150px'
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <social.icon size={32} style={{ color: colors.primary, marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{social.label}</div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
