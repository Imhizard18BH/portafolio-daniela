import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';
import {
  containerStyle,
  ctaButtonStyle,
  sectionStyle,
  sectionTitleStyle,
  shadows
} from '../../styles/theme';
import { ugcContent } from '../../data/ugc';
import { getCloudinaryPoster } from '../../utils/videoPoster';

type UGCPageProps = {
  onContactClick: () => void;
};

export const UGCPage: React.FC<UGCPageProps> = ({ onContactClick }) => {
  const isMobile = useIsMobile();

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: isMobile ? '1rem' : '1.5rem'
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
          Contenido UGC
        </motion.h2>

        <div style={gridStyle}>
          {ugcContent.map((content, index) => (
            <motion.div
              key={content.id}
              style={{
                position: 'relative',
                borderRadius: isMobile ? '0.75rem' : '1rem',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: 'white',
                boxShadow: shadows.cardHover,
                aspectRatio: '9/16'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)' }}
            >
              <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                <video
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  controls
                  preload="none"
                  playsInline
                  poster={getCloudinaryPoster(content.src)}
                  controlsList="nodownload nofullscreen"
                >
                  <source src={content.src} type="video/mp4" />
                  Tu navegador no soporta la reproducción de videos.
                </video>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ textAlign: 'center', marginTop: isMobile ? '2rem' : '3rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.button
            onClick={onContactClick}
            style={ctaButtonStyle(isMobile)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Contenido UGC
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
