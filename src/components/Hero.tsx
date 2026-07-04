import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';
import { colors, ctaButtonStyle, gradientText } from '../styles/theme';
import { socialLinks } from '../data/socialLinks';

type HeroProps = {
  onCtaClick: () => void;
};

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const isMobile = useIsMobile();

  const styles = {
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative' as const,
      overflow: 'hidden',
      padding: isMobile ? '6rem 1rem 2rem' : '0 2rem'
    },
    content: {
      textAlign: 'center' as const,
      zIndex: 10,
      position: 'relative' as const,
      maxWidth: isMobile ? '100%' : '800px'
    },
    title: {
      fontSize: isMobile ? '3.5rem' : '5.5rem',
      fontWeight: 800,
      marginBottom: '1rem',
      lineHeight: 1.2,
      ...gradientText
    },
    subtitle: {
      fontSize: isMobile ? '1.1rem' : '1.5rem',
      color: colors.textMuted,
      marginBottom: '2rem',
      maxWidth: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: 1.4
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: isMobile ? '0.5rem' : '0.75rem',
      marginBottom: '2rem',
      flexWrap: 'wrap' as const
    },
    socialPill: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: isMobile ? '0.5rem 0.85rem' : '0.6rem 1.1rem',
      borderRadius: '2rem',
      background: 'rgba(255, 255, 255, 0.85)',
      color: colors.primary,
      border: '1px solid rgba(255, 255, 255, 0.5)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      fontWeight: 600,
      boxShadow: '0 4px 12px rgba(102, 126, 234, 0.1)'
    }
  };

  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <motion.h1
          style={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Daniela Angel
        </motion.h1>

        <motion.p
          style={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Fotógrafa profesional, productora audiovisual y creadora de contenido UGC
        </motion.p>

        <motion.div
          style={styles.socialIcons}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialPill}
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 20px rgba(102, 126, 234, 0.2)' }}
            >
              <social.icon size={isMobile ? 16 : 18} />
              <span>{social.label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.button
          style={ctaButtonStyle(isMobile)}
          onClick={onCtaClick}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver mi trabajo
        </motion.button>
      </div>
    </section>
  );
};
