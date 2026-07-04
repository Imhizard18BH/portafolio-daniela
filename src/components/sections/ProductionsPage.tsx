import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useIsMobile } from '../../hooks/useIsMobile';
import {
  colors,
  containerStyle,
  gradients,
  sectionStyle,
  sectionTitleStyle,
  shadows
} from '../../styles/theme';
import { productions, Production } from '../../data/productions';

export const ProductionsPage: React.FC = () => {
  const isMobile = useIsMobile();

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: isMobile ? '1.5rem' : '2rem'
  };

  const cardStyle = {
    background: 'white',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: shadows.card,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
    display: 'block'
  };

  const renderCardContent = (production: Production) => (
    <>
      <div style={{ position: 'relative' }}>
        <img
          src={production.thumbnail}
          alt={production.title}
          loading="lazy"
          decoding="async"
          style={{
            width: '100%',
            height: isMobile ? '200px' : '350px',
            objectFit: 'cover'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '50%',
            padding: isMobile ? '0.75rem' : '1rem',
            opacity: 0.8
          }}
        >
          <Play size={isMobile ? 24 : 32} color="white" />
        </div>
      </div>

      <div style={{ padding: isMobile ? '1rem' : '1.5rem' }}>
        <h3
          style={{
            fontSize: isMobile ? '1.2rem' : '1.4rem',
            fontWeight: 600,
            marginBottom: '0.75rem',
            color: colors.text,
            margin: '0 0 0.75rem 0'
          }}
        >
          {production.title}
        </h3>
        <p
          style={{
            fontSize: isMobile ? '0.95rem' : '1.05rem',
            fontWeight: 500,
            color: colors.primary,
            marginBottom: '1rem',
            lineHeight: 1.4,
            margin: '0 0 1rem 0'
          }}
        >
          {production.role}
        </p>
        <div
          style={{
            display: 'inline-block',
            background: gradients.primary,
            color: 'white',
            padding: '0.25rem 0.75rem',
            borderRadius: '1rem',
            fontSize: '0.8rem',
            fontWeight: 600,
            textTransform: 'uppercase'
          }}
        >
          Producción
        </div>
      </div>
    </>
  );

  return (
    <section style={sectionStyle(isMobile)}>
      <div style={containerStyle}>
        <motion.h2
          style={sectionTitleStyle(isMobile)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Producciones
        </motion.h2>

        <div style={gridStyle}>
          {productions.map((production, index) => {
            const content = renderCardContent(production);
            const motionProps = {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.5, delay: index * 0.1 },
              whileHover: { scale: 1.02, y: -5 }
            };

            return production.link ? (
              <motion.a
                key={production.id}
                href={production.link}
                target="_blank"
                rel="noopener noreferrer"
                style={cardStyle}
                {...motionProps}
              >
                {content}
              </motion.a>
            ) : (
              <motion.div key={production.id} style={cardStyle} {...motionProps}>
                {content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
