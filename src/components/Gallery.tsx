import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Briefcase, Camera, Film, Instagram, Play, Sparkles } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';
import { colors, containerStyle, gradients, sectionStyle, sectionTitleStyle } from '../styles/theme';
import { getCloudinaryPoster } from '../utils/videoPoster';

type GalleryProps = {
  onNavigate: (sectionId: string) => void;
};

const UGC_SAMPLE_VIDEOS = [
  'https://res.cloudinary.com/dy4gf9krq/video/upload/v1753301322/TODOS_BLACK_wzc84j.mp4',
  'https://res.cloudinary.com/dy4gf9krq/video/upload/v1753301308/L%C3%A1piz_l%C3%A1ser_facialb_2_qzckk0.mp4',
  'https://res.cloudinary.com/dy4gf9krq/video/upload/v1753301323/Glucometro_1_nikgna.mp4'
];

// ---------- Card wrappers ----------

type CardShellProps = {
  onClick: () => void;
  gridArea?: string;
  minHeight?: string;
  children: React.ReactNode;
  delay?: number;
};

const CardShell: React.FC<CardShellProps> = ({ onClick, gridArea, minHeight, children, delay = 0 }) => (
  <motion.div
    onClick={onClick}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -6 }}
    style={{
      gridArea,
      minHeight,
      background: 'white',
      borderRadius: '1.25rem',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
      border: '1px solid rgba(226, 232, 240, 0.6)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}
  >
    {children}
  </motion.div>
);

const CardLabel: React.FC<{
  icon: React.ReactNode;
  category: string;
  count: string;
  title: string;
  description: string;
  isMobile: boolean;
  size?: 'compact' | 'default' | 'wide';
}> = ({ icon, category, count, title, description, isMobile, size = 'default' }) => (
  <div
    style={{
      padding: isMobile
        ? '1rem 1.15rem 1.15rem'
        : size === 'compact'
        ? '1rem 1.15rem 1.15rem'
        : '1.25rem 1.5rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      flex: 1
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '0.15rem'
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontSize: '0.7rem',
          fontWeight: 700,
          color: colors.primary,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        {icon}
        {category}
      </div>
      <span
        style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          color: colors.textMuted,
          background: colors.surfaceSoft,
          padding: '0.2rem 0.55rem',
          borderRadius: '2rem'
        }}
      >
        {count}
      </span>
    </div>
    <h3
      style={{
        fontSize: size === 'wide' ? (isMobile ? '1.35rem' : '1.75rem') : isMobile ? '1.15rem' : '1.35rem',
        fontWeight: 800,
        color: colors.text,
        margin: 0,
        lineHeight: 1.15
      }}
    >
      {title}
    </h3>
    <p
      style={{
        color: colors.textMuted,
        fontSize: isMobile ? '0.85rem' : '0.9rem',
        lineHeight: 1.5,
        margin: 0
      }}
    >
      {description}
    </p>
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.3rem',
        marginTop: '0.5rem',
        color: colors.primary,
        fontSize: '0.8rem',
        fontWeight: 700
      }}
    >
      Explorar
      <ArrowUpRight size={14} />
    </div>
  </div>
);

// ---------- Preview panels ----------

const PhotoPreview: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: isMobile ? '220px' : '200px',
      overflow: 'hidden'
    }}
  >
    <img
      src={require('../utils/desierto.webp')}
      alt="Fotografía destacada"
      loading="lazy"
      decoding="async"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        transition: 'transform 0.6s ease'
      }}
    />
    {/* Overlay gradient */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)',
        pointerEvents: 'none'
      }}
    />
    {/* Mini photo strip */}
    <div
      style={{
        position: 'absolute',
        bottom: '1rem',
        left: '1rem',
        display: 'flex',
        gap: '0.4rem'
      }}
    >
      {[
        require('../utils/bailarina.webp'),
        require('../utils/Aguila.webp'),
        require('../utils/iglesia.webp')
      ].map((src, i) => (
        <div
          key={i}
          style={{
            width: isMobile ? '38px' : '50px',
            height: isMobile ? '38px' : '50px',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            border: '2px solid white',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
          }}
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      ))}
    </div>
    {/* Category chip */}
    <div
      style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        color: colors.text,
        padding: '0.35rem 0.75rem',
        borderRadius: '2rem',
        fontSize: '0.7rem',
        fontWeight: 800,
        display: 'flex',
        alignItems: 'center',
        gap: '0.3rem'
      }}
    >
      <Camera size={12} color={colors.primary} />
      Portfolio
    </div>
  </div>
);

const UGCPreview: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: isMobile ? '180px' : '160px',
      background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      padding: '0.85rem',
      overflow: 'hidden',
      flex: 1
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
            width: '26px',
            height: '26px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)'
          }}
        >
          <Play size={12} color="white" fill="white" />
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

const ProductionsPreview: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: isMobile ? '180px' : '160px',
      overflow: 'hidden'
    }}
  >
    <img
      src={require('../utils/cargahonor.webp')}
      alt="Producciones"
      loading="lazy"
      decoding="async"
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}
    />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.55) 0%, rgba(118, 75, 162, 0.55) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
        }}
      >
        <Play size={26} color={colors.primary} fill={colors.primary} />
      </div>
    </div>
    <div
      style={{
        position: 'absolute',
        top: '0.6rem',
        right: '0.6rem',
        background: 'rgba(255, 255, 255, 0.95)',
        color: colors.primary,
        padding: '0.2rem 0.55rem',
        borderRadius: '1rem',
        fontSize: '0.65rem',
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem'
      }}
    >
      <Film size={11} />
      Cine
    </div>
  </div>
);

const ExperiencePreview: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      flex: 1,
      minHeight: isMobile ? '200px' : '220px',
      background: gradients.primary,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <div
      aria-hidden
      style={{
        position: 'absolute',
        top: '-40px',
        left: '-40px',
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        background: 'rgba(245, 158, 11, 0.4)',
        filter: 'blur(30px)'
      }}
    />
    <div
      aria-hidden
      style={{
        position: 'absolute',
        bottom: '-30px',
        right: '-30px',
        width: '160px',
        height: '160px',
        borderRadius: '50%',
        background: 'rgba(236, 72, 153, 0.35)',
        filter: 'blur(30px)'
      }}
    />

    <div
      style={{
        display: 'flex',
        gap: isMobile ? '0.5rem' : '0.75rem',
        zIndex: 1,
        alignItems: 'center',
        padding: '0 1rem',
        maxWidth: '100%'
      }}
    >
      {[
        { Icon: Briefcase, label: 'Alcaldía', year: '2025', color: '#fbbf24' },
        { Icon: Instagram, label: 'Concejo', year: '2026', color: 'white', big: true },
        { Icon: Award, label: 'Jhonatan', year: '2026', color: '#f9a8d4' }
      ].map(({ Icon, label, year, color, big }, i) => (
        <motion.div
          key={i}
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
          style={{
            flex: 1,
            maxWidth: '110px',
            borderRadius: '18px',
            background: big ? 'rgba(255, 255, 255, 0.28)' : 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
            padding: isMobile ? '0.75rem 0.5rem' : '0.85rem 0.6rem',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: big ? '0 12px 30px rgba(0, 0, 0, 0.2)' : '0 6px 15px rgba(0, 0, 0, 0.12)',
            transform: big ? 'scale(1.05)' : 'scale(1)'
          }}
        >
          <Icon size={big ? 28 : 22} color={color} />
          <div style={{ color: 'white', fontSize: isMobile ? '0.65rem' : '0.72rem', fontWeight: 700, textAlign: 'center', lineHeight: 1.15 }}>
            {label}
          </div>
          <div style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.6rem', fontWeight: 600 }}>
            {year}
          </div>
        </motion.div>
      ))}
    </div>

    <div
      style={{
        position: 'absolute',
        top: '0.6rem',
        left: '0.6rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.3rem',
        color: 'white',
        fontSize: '0.65rem',
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}
    >
      <Sparkles size={11} />
      2025 → 2026
    </div>

    <div
      style={{
        position: 'absolute',
        top: '0.6rem',
        right: '0.6rem',
        background: 'rgba(255, 255, 255, 0.95)',
        color: colors.primary,
        padding: '0.2rem 0.55rem',
        borderRadius: '1rem',
        fontSize: '0.65rem',
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}
    >
      New
    </div>
  </div>
);

// ---------- Section ----------

export const Gallery: React.FC<GalleryProps> = ({ onNavigate }) => {
  const isMobile = useIsMobile();

  return (
    <section style={sectionStyle(isMobile)}>
      <div style={containerStyle}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '2.5rem' : '3.5rem'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
              color: colors.primary,
              padding: '0.35rem 0.85rem',
              borderRadius: '2rem',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '0.85rem',
              border: '1px solid rgba(102, 126, 234, 0.2)'
            }}
          >
            <Sparkles size={12} />
            Mi trabajo
          </div>
          <h2 style={sectionTitleStyle(isMobile)}>Explora mi mundo creativo</h2>
        </motion.div>

        {/* Bento grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gridTemplateAreas: isMobile
              ? `"exp" "ugc" "prod" "foto"`
              : `"exp exp ugc" "exp exp prod" "foto foto foto"`,
            gap: isMobile ? '1rem' : '1.25rem'
          }}
        >
          {/* Experience — featured big */}
          <CardShell onClick={() => onNavigate('experience')} gridArea="exp" delay={0}>
            <ExperiencePreview isMobile={isMobile} />
            <CardLabel
              isMobile={isMobile}
              icon={<Briefcase size={12} />}
              category="Experiencia"
              count="3 cargos · 2 premios"
              title="Comunicación institucional y política"
              description="Concejo de Calarcá, Alcaldía y comunicación personal del concejal Jhonatan Doncel Pachón."
              size="wide"
            />
          </CardShell>

          {/* UGC — top right */}
          <CardShell onClick={() => onNavigate('ugc')} gridArea="ugc" delay={0.1}>
            <UGCPreview isMobile={isMobile} />
            <CardLabel
              isMobile={isMobile}
              icon={<Play size={12} fill={colors.primary} />}
              category="Contenido UGC"
              count="7 reels"
              title="Contenido auténtico"
              description="Reels de producto y marcas."
              size="compact"
            />
          </CardShell>

          {/* Productions — middle right */}
          <CardShell onClick={() => onNavigate('productions')} gridArea="prod" delay={0.2}>
            <ProductionsPreview isMobile={isMobile} />
            <CardLabel
              isMobile={isMobile}
              icon={<Film size={12} />}
              category="Detrás de cámaras"
              count="3 proyectos"
              title="Producciones audiovisuales"
              description="Sonido, arte y producción."
              size="compact"
            />
          </CardShell>

          {/* Photography — wide bottom */}
          <CardShell onClick={() => onNavigate('photography')} gridArea="foto" delay={0.3}>
            <PhotoPreview isMobile={isMobile} />
            <CardLabel
              isMobile={isMobile}
              icon={<Camera size={12} />}
              category="Fotografía"
              count="100+ trabajos"
              title="Naturaleza, retratos y territorio"
              description="Naturaleza, retratos, wallpapers e inmobiliaria — desde el Quindío hasta la Tatacoa."
              size="wide"
            />
          </CardShell>
        </div>
      </div>
    </section>
  );
};
