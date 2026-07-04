import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Camera, Mail, Sparkles } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';
import { colors, gradientText, gradients } from '../styles/theme';
import { socialLinks } from '../data/socialLinks';

type HeroProps = {
  onCtaClick: () => void;
  onContactClick: () => void;
};

const HERO_IMAGES = [
  { src: require('../utils/desierto.webp'), alt: 'Tatacoa', translate: '-20px' },
  { src: require('../utils/bailarina.webp'), alt: 'Bailarina', translate: '0' },
  { src: require('../utils/Aguila.webp'), alt: 'Águila', translate: '0' },
  { src: require('../utils/frailejon1.webp'), alt: 'Frailejón', translate: '20px' }
];

const ROLES = ['Comunicadora social', 'Fotógrafa', 'Creadora UGC'];

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onContactClick }) => {
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: isMobile ? '6rem 1rem 3rem' : '5rem 2rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative background blobs */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-150px',
          right: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: gradients.accent,
          opacity: 0.15,
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: gradients.primary,
          opacity: 0.1,
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr',
          gap: isMobile ? '2.5rem' : '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* LEFT: Text content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
              color: colors.primary,
              padding: '0.35rem 0.85rem',
              borderRadius: '2rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              border: '1px solid rgba(102, 126, 234, 0.2)'
            }}
          >
            <Sparkles size={12} />
            Portafolio · 2026
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              color: colors.textMuted,
              fontSize: isMobile ? '1rem' : '1.15rem',
              margin: '0 0 0.25rem 0',
              fontWeight: 500
            }}
          >
            Hola, soy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: isMobile ? '3.5rem' : '5rem',
              fontWeight: 800,
              lineHeight: 1.05,
              margin: '0 0 1.25rem 0',
              ...gradientText
            }}
          >
            Daniela Angel
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{
              display: 'flex',
              gap: '0.4rem',
              flexWrap: 'wrap',
              marginBottom: '1.5rem'
            }}
          >
            {ROLES.map((role, i) => (
              <span
                key={i}
                style={{
                  padding: '0.3rem 0.75rem',
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '2rem',
                  fontSize: isMobile ? '0.75rem' : '0.8rem',
                  fontWeight: 600,
                  color: colors.textSoft
                }}
              >
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            style={{
              color: colors.textSoft,
              fontSize: isMobile ? '1rem' : '1.1rem',
              lineHeight: 1.6,
              margin: '0 0 2rem 0',
              maxWidth: '520px'
            }}
          >
            Cuento historias a través de la imagen, el video y las palabras. Trabajo entre
            lo <strong style={{ color: colors.primary }}>institucional</strong> y
            lo <strong style={{ color: colors.primary }}>creativo</strong> — del Concejo de Calarcá
            a las marcas.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}
          >
            <motion.button
              onClick={onCtaClick}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: gradients.primary,
                color: 'white',
                padding: isMobile ? '0.8rem 1.35rem' : '0.9rem 1.75rem',
                border: 'none',
                borderRadius: '2rem',
                fontWeight: 700,
                cursor: 'pointer',
                fontSize: isMobile ? '0.9rem' : '1rem',
                boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
              }}
            >
              Ver mi trabajo
              <ArrowRight size={isMobile ? 16 : 18} />
            </motion.button>

            <motion.button
              onClick={onContactClick}
              whileHover={{ scale: 1.03, y: -2, background: 'rgba(255, 255, 255, 0.95)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                color: colors.text,
                padding: isMobile ? '0.8rem 1.35rem' : '0.9rem 1.75rem',
                border: `1.5px solid ${colors.border}`,
                borderRadius: '2rem',
                fontWeight: 700,
                cursor: 'pointer',
                fontSize: isMobile ? '0.9rem' : '1rem'
              }}
            >
              <Mail size={isMobile ? 16 : 18} />
              Escríbeme
            </motion.button>
          </motion.div>

          {/* Social pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap'
            }}
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, boxShadow: '0 8px 20px rgba(102, 126, 234, 0.15)' }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 0.85rem',
                  background: 'white',
                  color: colors.textSoft,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '2rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <social.icon size={14} style={{ color: colors.primary }} />
                {social.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Photo mosaic + floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ position: 'relative', width: '100%' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: isMobile ? '0.6rem' : '0.85rem',
              aspectRatio: isMobile ? '1.1' : '0.9',
              maxWidth: isMobile ? '380px' : '100%',
              margin: '0 auto'
            }}
          >
            {HERO_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.03, y: -4, zIndex: 10 }}
                style={{
                  borderRadius: isMobile ? '0.75rem' : '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.12)',
                  transform: `translateY(${isMobile ? '0' : img.translate})`,
                  border: '3px solid white',
                  background: 'white'
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="eager"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    aspectRatio: '1'
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Floating badge: Award */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.5, delay: 0.9, type: 'spring' }}
            style={{
              position: 'absolute',
              top: isMobile ? '-10px' : '5%',
              left: isMobile ? '-8px' : '-8%',
              background: 'white',
              borderRadius: '1rem',
              padding: '0.6rem 0.85rem',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              zIndex: 5,
              border: '1px solid rgba(245, 158, 11, 0.2)'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Award size={18} color="white" />
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  color: '#d97706',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Ganadora
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: colors.text, lineHeight: 1.15 }}>
                Estamos lokos Lukas
              </div>
            </div>
          </motion.div>

          {/* Floating badge: Photos count */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 0.5, delay: 1.05, type: 'spring' }}
            style={{
              position: 'absolute',
              bottom: isMobile ? '-10px' : '5%',
              right: isMobile ? '-8px' : '-8%',
              background: 'white',
              borderRadius: '1rem',
              padding: '0.6rem 0.85rem',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              zIndex: 5,
              border: '1px solid rgba(102, 126, 234, 0.2)'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: gradients.primary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Camera size={18} color="white" />
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  color: colors.primary,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Fotografías
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: colors.text, lineHeight: 1.15 }}>
                100+ trabajos
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            color: colors.textMuted,
            fontSize: '0.7rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            zIndex: 1
          }}
        >
          Desliza para explorar
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            style={{
              width: '20px',
              height: '32px',
              border: `2px solid ${colors.textMuted}`,
              borderRadius: '12px',
              padding: '3px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                width: '3px',
                height: '6px',
                background: colors.textMuted,
                borderRadius: '2px'
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
