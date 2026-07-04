import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';
import {
  containerStyle,
  sectionStyle,
  sectionTitleStyle,
  gradients,
  colors,
  shadows
} from '../../styles/theme';
import {
  filterCategories,
  photos,
  portadaTandas,
  tandaBadgeColor,
  tandaBadgeLabel,
  tandaLabels,
  Photo,
  PortadaTandas
} from '../../data/photos';
import { getCloudinaryPoster } from '../../utils/videoPoster';

type FilterId = 'portada' | 'wallpaper' | 'retrato' | 'naturaleza' | 'inmobiliaria';

const filterButtonBase = (isMobile: boolean) => ({
  background: 'white',
  border: `2px solid ${colors.border}`,
  borderRadius: isMobile ? '1.5rem' : '2rem',
  padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
  color: colors.textSoft,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  fontWeight: 500,
  fontSize: isMobile ? '0.8rem' : '0.95rem'
});

const filterButtonActive = {
  background: gradients.primary,
  borderColor: colors.primary,
  color: 'white',
  transform: 'translateY(-2px)',
  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
};

export const PhotographyPage: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeFilter, setActiveFilter] = useState<FilterId>('portada');
  const [hoveredPhoto, setHoveredPhoto] = useState<string | null>(null);

  const filteredPhotos = useMemo(
    () => (activeFilter === 'portada' ? [] : photos.filter((p) => p.category === activeFilter)),
    [activeFilter]
  );

  const renderInmobiliariaGrid = () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile
          ? 'repeat(auto-fit, minmax(150px, 1fr))'
          : 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: isMobile ? '1rem' : '1.5rem'
      }}
    >
      {filteredPhotos.map((item, index) => (
        <motion.div
          key={item.id}
          style={{
            position: 'relative',
            borderRadius: isMobile ? '0.5rem' : '0.75rem',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: 'white',
            boxShadow: shadows.soft,
            aspectRatio: item.type === 'video' ? '9/16' : '1'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          whileHover={{ scale: 1.03, boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)' }}
          onMouseEnter={() => setHoveredPhoto(item.id.toString())}
          onMouseLeave={() => setHoveredPhoto(null)}
        >
          {item.type === 'video' ? (
            <div style={{ position: 'relative', height: '100%', width: '100%' }}>
              <video
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                controls
                preload="none"
                playsInline
                poster={getCloudinaryPoster(item.src)}
              >
                <source src={item.src} type="video/mp4" />
              </video>
              <div
                style={{
                  position: 'absolute',
                  top: isMobile ? '0.5rem' : '0.75rem',
                  right: isMobile ? '0.5rem' : '0.75rem',
                  background: 'rgba(239, 68, 68, 0.9)',
                  color: 'white',
                  padding: isMobile ? '0.2rem 0.5rem' : '0.25rem 0.75rem',
                  borderRadius: isMobile ? '0.75rem' : '1rem',
                  fontSize: isMobile ? '0.7rem' : '0.75rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)'
                }}
              >
                VIDEO
              </div>
            </div>
          ) : (
            <>
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: isMobile ? '0.5rem' : '0.75rem',
                  right: isMobile ? '0.5rem' : '0.75rem',
                  background: 'rgba(59, 130, 246, 0.9)',
                  color: 'white',
                  padding: isMobile ? '0.2rem 0.5rem' : '0.25rem 0.75rem',
                  borderRadius: isMobile ? '0.75rem' : '1rem',
                  fontSize: isMobile ? '0.7rem' : '0.75rem',
                  fontWeight: 600,
                  textTransform: 'capitalize'
                }}
              >
                {item.category}
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: 'white',
                  padding: isMobile ? '0.75rem' : '1rem',
                  transform:
                    hoveredPhoto === item.id.toString() ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <h4 style={{ margin: 0, fontSize: isMobile ? '0.9rem' : '1rem', fontWeight: 600 }}>
                  {item.title}
                </h4>
              </div>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );

  const renderMasonry = (tandaName: keyof PortadaTandas, fotos: Photo[], tandaIndex: number) => (
    <div
      style={{
        columns: isMobile ? 2 : tandaName === 'jeep' ? 3 : 4,
        columnGap: isMobile ? '0.5rem' : '1rem',
        columnFill: 'balance'
      }}
    >
      {fotos.map((foto, index) => (
        <motion.div
          key={foto.id}
          style={{
            breakInside: 'avoid',
            marginBottom: isMobile ? '0.5rem' : '1rem',
            position: 'relative',
            borderRadius: isMobile ? '6px' : '8px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: 'white',
            boxShadow: shadows.micro,
            display: 'inline-block',
            width: '100%'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: tandaIndex * 0.2 + index * 0.05 }}
          whileHover={{ scale: 1.02, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)', zIndex: 10 }}
          onMouseEnter={() => setHoveredPhoto(foto.id.toString())}
          onMouseLeave={() => setHoveredPhoto(null)}
        >
          <img
            src={foto.src}
            alt={foto.title}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: isMobile ? '0.5rem' : '0.6rem',
              right: isMobile ? '0.5rem' : '0.6rem',
              background: tandaBadgeColor[tandaName],
              color: 'white',
              padding: isMobile ? '0.2rem 0.5rem' : '0.25rem 0.6rem',
              borderRadius: '0.75rem',
              fontSize: isMobile ? '0.6rem' : '0.7rem',
              fontWeight: 600,
              textTransform: 'capitalize',
              backdropFilter: 'blur(10px)'
            }}
          >
            {tandaBadgeLabel[tandaName]}
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: gradients.overlayDeep,
              color: 'white',
              padding: isMobile ? '0.75rem' : '1rem',
              transform:
                hoveredPhoto === foto.id.toString() || isMobile
                  ? 'translateY(0)'
                  : 'translateY(100%)',
              transition: 'transform 0.3s ease'
            }}
          >
            <h4
              style={{
                margin: 0,
                fontSize: isMobile ? '0.8rem' : '0.9rem',
                fontWeight: 600,
                lineHeight: 1.2
              }}
            >
              {foto.title}
            </h4>
            {foto.size === 'large' && !isMobile && (
              <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.75rem', opacity: 0.9, fontWeight: 400 }}>
                Fotografía destacada
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderGrid = (tandaName: keyof PortadaTandas, fotos: Photo[]) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: isMobile ? '0.75rem' : '1rem',
        gridAutoRows: 'min-content'
      }}
    >
      {fotos.map((foto, index) => (
        <motion.div
          key={foto.id}
          style={{
            position: 'relative',
            borderRadius: isMobile ? '0.4rem' : '0.6rem',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: 'white',
            boxShadow: shadows.micro,
            aspectRatio: '1'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          whileHover={{ scale: 1.03 }}
          onMouseEnter={() => setHoveredPhoto(foto.id.toString())}
          onMouseLeave={() => setHoveredPhoto(null)}
        >
          <img
            src={foto.src}
            alt={foto.title}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: isMobile ? '0.4rem' : '0.6rem',
              right: isMobile ? '0.4rem' : '0.6rem',
              background: tandaBadgeColor[tandaName],
              color: 'white',
              padding: isMobile ? '0.15rem 0.4rem' : '0.2rem 0.6rem',
              borderRadius: isMobile ? '0.6rem' : '0.75rem',
              fontSize: isMobile ? '0.6rem' : '0.7rem',
              fontWeight: 600,
              textTransform: 'capitalize'
            }}
          >
            {tandaBadgeLabel[tandaName]}
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: gradients.overlay,
              color: 'white',
              padding: isMobile ? '0.6rem' : '0.8rem',
              transform:
                hoveredPhoto === foto.id.toString() ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 0.3s ease'
            }}
          >
            <h4 style={{ margin: 0, fontSize: isMobile ? '0.8rem' : '0.9rem', fontWeight: 600 }}>
              {foto.title}
            </h4>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderPortada = () => (
    <div>
      {(Object.entries(portadaTandas) as Array<[keyof PortadaTandas, Photo[]]>).map(
        ([tandaName, fotos], tandaIndex) => (
          <motion.div
            key={tandaName}
            style={{ marginBottom: isMobile ? '3rem' : '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: tandaIndex * 0.2 }}
          >
            <h3
              style={{
                fontSize: isMobile ? '1.5rem' : '2.2rem',
                fontWeight: 700,
                color: colors.text,
                marginBottom: isMobile ? '1.5rem' : '2.5rem',
                textAlign: 'center',
                textTransform: 'capitalize'
              }}
            >
              {tandaLabels[tandaName]}
            </h3>
            {tandaName === 'naturaleza' || tandaName === 'bailarines' || tandaName === 'jeep'
              ? renderMasonry(tandaName, fotos, tandaIndex)
              : renderGrid(tandaName, fotos)}
          </motion.div>
        )
      )}
    </div>
  );

  const renderGenericGrid = () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile
          ? 'repeat(auto-fit, minmax(140px, 1fr))'
          : 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: isMobile ? '0.75rem' : '1rem'
      }}
    >
      {filteredPhotos.map((photo, index) => (
        <motion.div
          key={photo.id}
          style={{
            position: 'relative',
            borderRadius: isMobile ? '0.4rem' : '0.6rem',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: 'white',
            boxShadow: shadows.micro,
            aspectRatio: '1'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          whileHover={{ scale: 1.03, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)' }}
          onMouseEnter={() => setHoveredPhoto(photo.id.toString())}
          onMouseLeave={() => setHoveredPhoto(null)}
        >
          <img
            src={photo.src}
            alt={photo.title}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: isMobile ? '0.4rem' : '0.6rem',
              right: isMobile ? '0.4rem' : '0.6rem',
              background: 'rgba(59, 130, 246, 0.9)',
              color: 'white',
              padding: isMobile ? '0.15rem 0.4rem' : '0.2rem 0.6rem',
              borderRadius: isMobile ? '0.6rem' : '0.75rem',
              fontSize: isMobile ? '0.6rem' : '0.7rem',
              fontWeight: 600,
              textTransform: 'capitalize'
            }}
          >
            {photo.category}
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: gradients.overlay,
              color: 'white',
              padding: isMobile ? '0.6rem' : '0.8rem',
              transform: hoveredPhoto === photo.id.toString() ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 0.3s ease'
            }}
          >
            <h4 style={{ margin: 0, fontSize: isMobile ? '0.8rem' : '0.9rem', fontWeight: 600 }}>
              {photo.title}
            </h4>
          </div>
        </motion.div>
      ))}
    </div>
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
          Fotografía
        </motion.h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: isMobile ? '0.5rem' : '1rem',
            marginBottom: isMobile ? '2rem' : '3rem',
            flexWrap: 'wrap'
          }}
        >
          {filterCategories.map((category) => (
            <button
              key={category.id}
              style={{
                ...filterButtonBase(isMobile),
                ...(activeFilter === category.id ? filterButtonActive : {})
              }}
              onClick={() => setActiveFilter(category.id as FilterId)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {activeFilter === 'portada'
          ? renderPortada()
          : activeFilter === 'inmobiliaria'
          ? renderInmobiliariaGrid()
          : renderGenericGrid()}
      </div>
    </section>
  );
};
