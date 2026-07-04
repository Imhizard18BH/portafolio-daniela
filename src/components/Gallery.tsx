import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Megaphone, Play, Sparkles, Users } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';
import { colors, containerStyle, gradients, sectionStyle, sectionTitleStyle, shadows } from '../styles/theme';
import { getCloudinaryPoster } from '../utils/videoPoster';

type GalleryProps = {
  onNavigate: (sectionId: string) => void;
};

type GalleryCard = {
  id: string;
  title: string;
  description: string;
  image?: string;
  preview?: (isMobile: boolean) => React.ReactNode;
};

const UGC_SAMPLE_VIDEOS = [
  'https://res.cloudinary.com/dy4gf9krq/video/upload/v1753301322/TODOS_BLACK_wzc84j.mp4',
  'https://res.cloudinary.com/dy4gf9krq/video/upload/v1753301308/L%C3%A1piz_l%C3%A1ser_facialb_2_qzckk0.mp4',
  'https://res.cloudinary.com/dy4gf9krq/video/upload/v1753301323/Glucometro_1_nikgna.mp4'
];

const UGCPreview: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <div
    style={{
      width: '100%',
      height: isMobile ? '180px' : '200px',
      background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      padding: '0.75rem',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    {UGC_SAMPLE_VIDEOS.map((video, i) => (
      <div
        key={i}
        style={{
          flex: 1,
          aspectRatio: '9/16',
          maxHeight: '100%',
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
          transform: `translateY(${i === 1 ? '-6px' : '0'}) rotate(${i === 0 ? '-4deg' : i === 2 ? '4deg' : '0'})`,
          background: '#000',
          position: 'relative'
        }}
      >
        <img
          src={getCloudinaryPoster(video)}
          alt=""
          loading="lazy"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)'
          }}
        >
          <Play size={14} color="white" fill="white" />
        </div>
      </div>
    ))}
    <div
      style={{
        position: 'absolute',
        top: '0.6rem',
        right: '0.6rem',
        background: 'rgba(255, 255, 255, 0.95)',
        color: '#ec4899',
        padding: '0.2rem 0.55rem',
        borderRadius: '1rem',
        fontSize: '0.65rem',
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}
    >
      Reels
    </div>
  </div>
);

const ExperiencePreview: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <div
    style={{
      width: '100%',
      height: isMobile ? '180px' : '200px',
      background: gradients.primary,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    {/* Decorative blobs */}
    <div
      aria-hidden
      style={{
        position: 'absolute',
        top: '-40px',
        left: '-40px',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'rgba(245, 158, 11, 0.35)',
        filter: 'blur(20px)'
      }}
    />
    <div
      aria-hidden
      style={{
        position: 'absolute',
        bottom: '-30px',
        right: '-30px',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'rgba(236, 72, 153, 0.3)',
        filter: 'blur(15px)'
      }}
    />

    {/* Floating icon stack */}
    <div style={{ display: 'flex', gap: '0.6rem', zIndex: 1, alignItems: 'center' }}>
      {[
        { Icon: Briefcase, color: '#f59e0b', delay: 0 },
        { Icon: Megaphone, color: 'white', delay: 0.1, isCenter: true },
        { Icon: Award, color: '#fbbf24', delay: 0.2 }
      ].map(({ Icon, color, delay, isCenter }, i) => (
        <motion.div
          key={i}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 + delay }}
          style={{
            width: isCenter ? '68px' : '54px',
            height: isCenter ? '68px' : '54px',
            borderRadius: '18px',
            background: isCenter ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: isCenter ? '0 10px 25px rgba(0, 0, 0, 0.2)' : '0 6px 15px rgba(0, 0, 0, 0.15)'
          }}
        >
          <Icon size={isCenter ? 30 : 22} color={color} />
        </motion.div>
      ))}
    </div>

    {/* Badge */}
    <div
      style={{
        position: 'absolute',
        bottom: '0.7rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.3rem',
        background: 'rgba(255, 255, 255, 0.95)',
        color: colors.primary,
        padding: '0.25rem 0.7rem',
        borderRadius: '1rem',
        fontSize: '0.65rem',
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        zIndex: 2
      }}
    >
      <Users size={11} />
      3 experiencias
    </div>

    <div
      style={{
        position: 'absolute',
        top: '0.6rem',
        right: '0.6rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
        color: 'white',
        fontSize: '0.7rem',
        fontWeight: 700
      }}
    >
      <Sparkles size={12} />
      2025 → 2026
    </div>
  </div>
);

const cards: GalleryCard[] = [
  {
    id: 'photography',
    title: 'Fotografía',
    description: 'Explora mi colección de fotografías de naturaleza, retratos, inmobiliaria y wallpapers.',
    image: require('../utils/mangelcaptures.webp')
  },
  {
    id: 'productions',
    title: 'Producciones',
    description: 'Descubre mis trabajos como productora y asistente en diferentes proyectos audiovisuales.',
    image: require('../utils/cargahonor.webp')
  },
  {
    id: 'ugc',
    title: 'Contenido UGC',
    description: 'Mira mi trabajo creando contenido auténtico y atractivo para diferentes marcas.',
    preview: (isMobile) => <UGCPreview isMobile={isMobile} />
  },
  {
    id: 'experience',
    title: 'Experiencia',
    description: 'Mi trabajo como comunicadora social en el Concejo, Alcaldía y con el concejal Jhonatan Doncel.',
    preview: (isMobile) => <ExperiencePreview isMobile={isMobile} />
  }
];

export const Gallery: React.FC<GalleryProps> = ({ onNavigate }) => {
  const isMobile = useIsMobile();

  const grid = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
    gap: isMobile ? '1.5rem' : '2rem',
    marginBottom: isMobile ? '2rem' : '3rem'
  };

  const cardStyle = {
    background: colors.surface,
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: shadows.card,
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const cardImage = {
    width: '100%',
    height: isMobile ? '180px' : '200px',
    objectFit: 'cover' as const
  };

  const cardContent = {
    padding: isMobile ? '1rem' : '1.5rem'
  };

  const cardTitle = {
    fontSize: isMobile ? '1.1rem' : '1.25rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
    color: colors.text
  };

  const cardDescription = {
    color: colors.textMuted,
    lineHeight: 1.6,
    fontSize: isMobile ? '0.9rem' : '1rem'
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
          Mi trabajo
        </motion.h2>

        <div style={grid}>
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              style={cardStyle}
              onClick={() => onNavigate(card.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {card.preview ? (
                card.preview(isMobile)
              ) : (
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  style={cardImage}
                />
              )}
              <div style={cardContent}>
                <h3 style={cardTitle}>{card.title}</h3>
                <p style={cardDescription}>{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
