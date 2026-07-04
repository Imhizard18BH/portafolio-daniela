import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Briefcase,
  Camera,
  Eye,
  Facebook,
  Film,
  Flame,
  Image as ImageIcon,
  Instagram,
  Megaphone,
  Sparkles,
  TrendingUp,
  Users
} from 'lucide-react';
import { useIsMobile } from '../../hooks/useIsMobile';
import {
  colors,
  containerStyle,
  gradientText,
  gradients,
  sectionStyle,
  sectionTitleStyle,
  shadows
} from '../../styles/theme';
import { IGEmbed } from '../shared/IGEmbed';
import {
  alcaldiaFeaturedPosts,
  alcaldiaLogros,
  consejoLogros,
  consejoMonthlyMetrics,
  consejoStats,
  consejoVideos,
  doncelFeaturedPosts,
  doncelLogros,
  doncelMonthlyMetrics,
  doncelStats,
  MonthlyMetric,
  recognitions,
  Stat,
  viralReels
} from '../../data/experience';

const socialPillStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  background: colors.surfaceSoft,
  color: colors.text,
  padding: '0.6rem 1rem',
  borderRadius: '2rem',
  textDecoration: 'none',
  fontSize: '0.85rem',
  fontWeight: 600,
  border: `1px solid ${colors.border}`,
  transition: 'all 0.3s ease'
};

const roleTagStyle: React.CSSProperties = {
  display: 'inline-block',
  background: gradients.primary,
  color: 'white',
  padding: '0.35rem 0.85rem',
  borderRadius: '1rem',
  fontSize: '0.75rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: '0.75rem'
};

const StatsGrid: React.FC<{ stats: Stat[]; isMobile: boolean }> = ({ stats, isMobile }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: isMobile ? '0.75rem' : '1rem',
      marginBottom: isMobile ? '1.5rem' : '2rem'
    }}
  >
    {stats.map((stat, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.08 }}
        style={{
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)',
          border: '1px solid rgba(102, 126, 234, 0.15)',
          borderRadius: '0.75rem',
          padding: isMobile ? '1rem' : '1.25rem',
          textAlign: 'center'
        }}
      >
        <TrendingUp size={isMobile ? 18 : 22} color={colors.primary} style={{ marginBottom: '0.4rem' }} />
        <div
          style={{
            fontSize: isMobile ? '1.4rem' : '1.75rem',
            fontWeight: 800,
            lineHeight: 1.1,
            ...gradientText
          }}
        >
          {stat.value}
        </div>
        <div style={{ fontSize: isMobile ? '0.75rem' : '0.85rem', fontWeight: 600, color: colors.text, marginTop: '0.3rem' }}>
          {stat.label}
        </div>
        <div style={{ fontSize: isMobile ? '0.65rem' : '0.7rem', color: colors.textMuted, marginTop: '0.2rem' }}>
          {stat.hint}
        </div>
      </motion.div>
    ))}
  </div>
);

const MonthCard: React.FC<{ metric: MonthlyMetric; isMobile: boolean; index: number }> = ({
  metric,
  isMobile,
  index
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    style={{
      minWidth: isMobile ? '220px' : '0',
      background: 'white',
      border: `1px solid ${colors.border}`,
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      scrollSnapAlign: 'start'
    }}
  >
    <div
      style={{
        background: gradients.primary,
        color: 'white',
        padding: '0.75rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <span style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {metric.month}
      </span>
      <span style={{ fontSize: '0.75rem', opacity: 0.85, fontWeight: 600 }}>{metric.year}</span>
    </div>

    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: colors.textMuted, fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
          <TrendingUp size={12} />
          Views
        </div>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: colors.text, lineHeight: 1 }}>
          {metric.views}
        </div>
        {metric.viewsGrowth && (
          <div style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 700, marginTop: '0.2rem' }}>
            {metric.viewsGrowth} <span style={{ color: colors.textMuted, fontWeight: 500 }}>{metric.viewsGrowthLabel}</span>
          </div>
        )}
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: colors.textMuted, fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
          <Eye size={12} />
          No-seguidores
        </div>
        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: colors.text }}>
          {metric.nonFollowerViews}
        </div>
        {metric.nonFollowerViewsGrowth && (
          <div style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 700, marginTop: '0.15rem' }}>
            {metric.nonFollowerViewsGrowth} <span style={{ color: colors.textMuted, fontWeight: 500 }}>{metric.nonFollowerViewsGrowthLabel}</span>
          </div>
        )}
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: colors.textMuted, fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
          <Users size={12} />
          Seguidores
        </div>
        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: colors.text }}>
          {metric.followers.toLocaleString('es-CO')}
        </div>
        {metric.followersGrowth !== undefined && (
          <div style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 700, marginTop: '0.15rem' }}>
            +{metric.followersGrowth} <span style={{ color: colors.textMuted, fontWeight: 500 }}>{metric.followersGrowthLabel}</span>
          </div>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          gap: '0.75rem',
          paddingTop: '0.5rem',
          borderTop: `1px solid ${colors.border}`,
          fontSize: '0.8rem',
          color: colors.textSoft
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
          <Film size={14} color={colors.primary} />
          {metric.reels}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
          <ImageIcon size={14} color={colors.primary} />
          {metric.posts}
        </span>
      </div>
    </div>
  </motion.div>
);

const LogrosList: React.FC<{ logros: string[]; isMobile: boolean }> = ({ logros, isMobile }) => (
  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
    {logros.map((logro, i) => (
      <li
        key={i}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.6rem',
          marginBottom: '0.6rem',
          color: colors.textSoft,
          fontSize: isMobile ? '0.9rem' : '0.95rem',
          lineHeight: 1.5
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: gradients.primary,
            marginTop: '0.55rem',
            flexShrink: 0
          }}
        />
        <span>{logro}</span>
      </li>
    ))}
  </ul>
);

export const ExperiencePage: React.FC = () => {
  const isMobile = useIsMobile();

  const cardStyle: React.CSSProperties = {
    background: 'white',
    borderRadius: '1.25rem',
    padding: isMobile ? '1.5rem' : '2.5rem',
    boxShadow: shadows.card,
    marginBottom: isMobile ? '2rem' : '3rem'
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
          Experiencia Laboral
        </motion.h2>

        {/* Alcaldía de Calarcá — Pasantía */}
        <motion.div
          style={{ ...cardStyle, position: 'relative', overflow: 'hidden' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {/* Decorative gradient orb */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f59e0b 0%, #10b981 100%)',
              opacity: 0.08,
              filter: 'blur(20px)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? '1rem' : '1.5rem',
                marginBottom: '1.5rem',
                flexWrap: 'wrap' as const
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                style={{
                  width: isMobile ? '64px' : '80px',
                  height: isMobile ? '64px' : '80px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #10b981 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 25px rgba(245, 158, 11, 0.35)',
                  flexShrink: 0
                }}
              >
                <Award size={isMobile ? 28 : 36} color="white" />
              </motion.div>

              <div style={{ flex: 1, minWidth: '200px' }}>
                <div
                  style={{
                    ...roleTagStyle,
                    background: 'linear-gradient(135deg, #f59e0b 0%, #10b981 100%)'
                  }}
                >
                  <Briefcase size={12} style={{ display: 'inline', marginRight: '0.35rem', verticalAlign: 'middle' }} />
                  Pasantía en Comunicaciones
                </div>
                <h3 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 800, color: colors.text, margin: '0 0 0.3rem 0', lineHeight: 1.15 }}>
                  Alcaldía Municipal de Calarcá
                </h3>
                <p style={{ color: colors.textMuted, fontSize: isMobile ? '0.85rem' : '0.95rem', margin: 0 }}>
                  2025
                </p>
              </div>
            </div>

            <p style={{ color: colors.textSoft, fontSize: isMobile ? '0.95rem' : '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Durante su pasantía en la Alcaldía Municipal de Calarcá, Maria Daniela lideró la
              continuidad del proyecto <strong style={{ color: colors.primary }}>"Quédate y enamórate de Calarcá"</strong>,
              una gran campaña de promoción territorial. Se encargó de la producción audiovisual,
              gestión de contenido en redes y el fortalecimiento de la identidad institucional del
              municipio.
            </p>

            {/* Project highlight card */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                borderRadius: '1rem',
                padding: isMobile ? '1rem' : '1.25rem 1.5rem',
                marginBottom: '1.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                flexWrap: 'wrap' as const
              }}
            >
              <div
                style={{
                  width: isMobile ? '40px' : '48px',
                  height: isMobile ? '40px' : '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #10b981 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Sparkles size={isMobile ? 20 : 24} color="white" />
              </div>
              <div style={{ flex: 1, minWidth: '160px' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#d97706' }}>
                  Proyecto liderado
                </div>
                <div style={{ fontSize: isMobile ? '1.05rem' : '1.2rem', fontWeight: 800, color: colors.text, marginTop: '0.1rem' }}>
                  Quédate y enamórate de Calarcá
                </div>
                <div style={{ fontSize: '0.85rem', color: colors.textMuted, marginTop: '0.15rem' }}>
                  Campaña de promoción y turismo municipal
                </div>
              </div>
            </div>

            <h4 style={{ fontSize: isMobile ? '1rem' : '1.15rem', fontWeight: 700, color: colors.text, margin: '0 0 0.75rem 0' }}>
              Logros y responsabilidades
            </h4>
            <LogrosList logros={alcaldiaLogros} isMobile={isMobile} />

            <h4
              style={{
                fontSize: isMobile ? '1rem' : '1.15rem',
                fontWeight: 700,
                color: colors.text,
                margin: '0 0 1rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Sparkles size={18} color="#f59e0b" />
              Publicaciones del proyecto
            </h4>
            <div
              style={{
                display: 'flex',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: isMobile ? '1.25rem' : '1.5rem'
              }}
            >
              {alcaldiaFeaturedPosts.map((url, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <IGEmbed embedUrl={`${url}embed/`} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Concejo de Calarcá */}
        <motion.div
          style={cardStyle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div style={roleTagStyle}>
            <Briefcase size={12} style={{ display: 'inline', marginRight: '0.35rem', verticalAlign: 'middle' }} />
            Comunicadora Social
          </div>
          <h3 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 800, color: colors.text, margin: '0 0 0.3rem 0' }}>
            Concejo Municipal de Calarcá
          </h3>
          <p style={{ color: colors.textMuted, fontSize: isMobile ? '0.85rem' : '0.95rem', margin: '0 0 1.25rem 0' }}>
            Enero 2026 — Actualidad
          </p>
          <p style={{ color: colors.textSoft, fontSize: isMobile ? '0.95rem' : '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Desde enero de 2026 Maria Daniela lidera la comunicación digital del Concejo de Calarcá,
            administrando la marca institucional en redes sociales. Renovó por completo el estilo
            gráfico, definió una parrilla estratégica de contenidos y consolidó la voz del Concejo
            frente a la ciudadanía.
          </p>

          <StatsGrid stats={consejoStats} isMobile={isMobile} />

          {/* Monthly timeline */}
          <h4
            style={{
              fontSize: isMobile ? '1rem' : '1.15rem',
              fontWeight: 700,
              color: colors.text,
              margin: '0.5rem 0 1rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <TrendingUp size={18} color={colors.primary} />
            Evolución mes a mes · 2026
          </h4>
          <div
            style={{
              display: isMobile ? 'flex' : 'grid',
              gridTemplateColumns: isMobile ? undefined : `repeat(${consejoMonthlyMetrics.length}, 1fr)`,
              gap: '1rem',
              overflowX: isMobile ? 'auto' : 'visible',
              scrollSnapType: isMobile ? 'x mandatory' : undefined,
              WebkitOverflowScrolling: 'touch',
              paddingBottom: isMobile ? '0.5rem' : 0,
              marginBottom: '2rem',
              marginLeft: isMobile ? '-1.5rem' : 0,
              marginRight: isMobile ? '-1.5rem' : 0,
              paddingLeft: isMobile ? '1.5rem' : 0,
              paddingRight: isMobile ? '1.5rem' : 0
            }}
          >
            {consejoMonthlyMetrics.map((metric, i) => (
              <MonthCard key={metric.month} metric={metric} isMobile={isMobile} index={i} />
            ))}
          </div>

          <h4 style={{ fontSize: isMobile ? '1rem' : '1.15rem', fontWeight: 700, color: colors.text, margin: '0 0 0.75rem 0' }}>
            Logros y responsabilidades
          </h4>
          <LogrosList logros={consejoLogros} isMobile={isMobile} />
          

            {/* Reels más virales */}
          <h4
            style={{
              fontSize: isMobile ? '1rem' : '1.15rem',
              fontWeight: 700,
              color: colors.text,
              margin: '0 0 1rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Flame size={18} color="#ef4444" />
            Reels más virales
          </h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: isMobile ? '1.25rem' : '1.5rem',
              marginBottom: '1.5rem'
            }}
          >
            {viralReels.map((url, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ position: 'relative' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-0.6rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #ef4444 0%, #f59e0b 100%)',
                    color: 'white',
                    padding: '0.25rem 0.85rem',
                    borderRadius: '1rem',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    zIndex: 2,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <Flame size={12} />
                  Viral
                </div>
                <IGEmbed embedUrl={`${url}embed/`} />
              </motion.div>
            ))}
          </div>

          
          <h4 style={{ fontSize: isMobile ? '1rem' : '1.15rem', fontWeight: 700, color: colors.text, margin: '0 0 1rem 0' }}>
            Publicaciones destacadas
          </h4>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: isMobile ? '1.25rem' : '1.5rem',
              marginBottom: '1.5rem'
            }}
          >
            {consejoVideos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  position: 'relative',
                  flex: isMobile ? '1 1 100%' : '1 1 320px',
                  maxWidth: isMobile ? '100%' : '400px'
                }}
              >
                {video.highlight && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-0.6rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: gradients.award,
                      color: 'white',
                      padding: '0.25rem 0.85rem',
                      borderRadius: '1rem',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      zIndex: 2,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    ★ {video.label}
                  </div>
                )}
                <IGEmbed embedUrl={`${video.url}embed/`} />
              </motion.div>
            ))}
          </div>

        

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href="https://www.instagram.com/concejo_calarca/"
              target="_blank"
              rel="noopener noreferrer"
              style={socialPillStyle}
            >
              <Instagram size={16} />
              @concejo_calarca
            </a>
            <a
              href="https://www.facebook.com/share/1JpEsYETJc/"
              target="_blank"
              rel="noopener noreferrer"
              style={socialPillStyle}
            >
              <Facebook size={16} />
              Facebook
            </a>
          </div>
        </motion.div>

        {/* Jhonatan Doncel */}
        <motion.div
          style={{ ...cardStyle, position: 'relative', overflow: 'hidden' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Decorative gradient orbs */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              background: gradients.primary,
              opacity: 0.08,
              filter: 'blur(20px)',
              pointerEvents: 'none'
            }}
          />
          <div
            aria-hidden
            style={{
              position: 'absolute',
              bottom: '-60px',
              left: '-60px',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: gradients.award,
              opacity: 0.06,
              filter: 'blur(20px)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Hero header for Jhonatan */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? '1rem' : '1.5rem',
                marginBottom: '1.5rem',
                flexWrap: 'wrap' as const
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
                style={{
                  width: isMobile ? '64px' : '80px',
                  height: isMobile ? '64px' : '80px',
                  borderRadius: '20px',
                  background: gradients.primary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 25px rgba(102, 126, 234, 0.35)',
                  flexShrink: 0
                }}
              >
                <Users size={isMobile ? 28 : 36} color="white" />
              </motion.div>

              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={roleTagStyle}>
                  <Briefcase size={12} style={{ display: 'inline', marginRight: '0.35rem', verticalAlign: 'middle' }} />
                  Comunicadora Personal
                </div>
                <h3
                  style={{
                    fontSize: isMobile ? '1.5rem' : '2rem',
                    fontWeight: 800,
                    color: colors.text,
                    margin: '0 0 0.3rem 0',
                    lineHeight: 1.15
                  }}
                >
                  Concejal Jhonatan Doncel Pachón
                </h3>
                <p style={{ color: colors.textMuted, fontSize: isMobile ? '0.85rem' : '0.95rem', margin: 0 }}>
                  Enero 2026 — Actualidad
                </p>
              </div>
            </div>

            <p style={{ color: colors.textSoft, fontSize: isMobile ? '0.95rem' : '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              En paralelo al Concejo, Maria Daniela gestiona la comunicación digital personal del
              concejal Jhonatan Doncel Pachón, produciendo contenido político cercano al ciudadano
              y construyendo una vocería digital coherente.
            </p>

            <StatsGrid stats={doncelStats} isMobile={isMobile} />

            {/* Monthly timeline Jhonatan */}
            <h4
              style={{
                fontSize: isMobile ? '1rem' : '1.15rem',
                fontWeight: 700,
                color: colors.text,
                margin: '0.5rem 0 1rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <TrendingUp size={18} color={colors.primary} />
              Evolución mes a mes · 2026
            </h4>
            <div
              style={{
                display: isMobile ? 'flex' : 'grid',
                gridTemplateColumns: isMobile ? undefined : `repeat(${doncelMonthlyMetrics.length}, 1fr)`,
                gap: '1rem',
                overflowX: isMobile ? 'auto' : 'visible',
                scrollSnapType: isMobile ? 'x mandatory' : undefined,
                WebkitOverflowScrolling: 'touch',
                paddingBottom: isMobile ? '0.5rem' : 0,
                marginBottom: '2rem',
                marginLeft: isMobile ? '-1.5rem' : 0,
                marginRight: isMobile ? '-1.5rem' : 0,
                paddingLeft: isMobile ? '1.5rem' : 0,
                paddingRight: isMobile ? '1.5rem' : 0
              }}
            >
              {doncelMonthlyMetrics.map((metric, i) => (
                <MonthCard key={metric.month} metric={metric} isMobile={isMobile} index={i} />
              ))}
            </div>

            {/* Áreas de trabajo — iconos */}
            <h4
              style={{
                fontSize: isMobile ? '1rem' : '1.15rem',
                fontWeight: 700,
                color: colors.text,
                margin: '0 0 1rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Sparkles size={18} color={colors.primary} />
              Áreas de trabajo
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                gap: isMobile ? '0.75rem' : '1rem',
                marginBottom: '1.75rem'
              }}
            >
              {[
                { icon: Film, label: 'Edición de video', color: '#ef4444' },
                { icon: Camera, label: 'Producción de contenido', color: '#8b5cf6' },
                { icon: Instagram, label: 'Gestión de redes', color: '#ec4899' },
                { icon: Megaphone, label: 'Vocería digital', color: '#f59e0b' }
              ].map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  whileHover={{ y: -4, boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
                  style={{
                    background: 'white',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '0.85rem',
                    padding: isMobile ? '0.85rem' : '1rem',
                    textAlign: 'center',
                    cursor: 'default',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div
                    style={{
                      width: isMobile ? '40px' : '48px',
                      height: isMobile ? '40px' : '48px',
                      borderRadius: '12px',
                      background: `${area.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.5rem'
                    }}
                  >
                    <area.icon size={isMobile ? 20 : 24} color={area.color} />
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? '0.75rem' : '0.85rem',
                      fontWeight: 600,
                      color: colors.text,
                      lineHeight: 1.3
                    }}
                  >
                    {area.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <h4 style={{ fontSize: isMobile ? '1rem' : '1.15rem', fontWeight: 700, color: colors.text, margin: '0 0 0.75rem 0' }}>
              Logros y responsabilidades
            </h4>
            <LogrosList logros={doncelLogros} isMobile={isMobile} />

            {/* Publicaciones destacadas de Jhonatan */}
            <h4
              style={{
                fontSize: isMobile ? '1rem' : '1.15rem',
                fontWeight: 700,
                color: colors.text,
                margin: '0 0 1rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Sparkles size={18} color={colors.primary} />
              Publicaciones destacadas
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: isMobile ? '1.25rem' : '1.5rem',
                marginBottom: '1.75rem'
              }}
            >
              {doncelFeaturedPosts.map((url, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <IGEmbed embedUrl={`${url}embed/`} />
                </motion.div>
              ))}
            </div>

            {/* Featured IG profile card */}
            <motion.a
              href="https://www.instagram.com/jhonnatandoncel/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, boxShadow: '0 15px 35px rgba(102, 126, 234, 0.25)' }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? '0.85rem' : '1.25rem',
                padding: isMobile ? '1rem' : '1.25rem 1.5rem',
                background: gradients.primary,
                borderRadius: '1rem',
                textDecoration: 'none',
                color: 'white',
                transition: 'all 0.3s ease',
                boxShadow: shadows.card,
                flexWrap: 'wrap' as const
              }}
            >
              <div
                style={{
                  width: isMobile ? '48px' : '56px',
                  height: isMobile ? '48px' : '56px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Instagram size={isMobile ? 24 : 28} color="white" />
              </div>
              <div style={{ flex: 1, minWidth: '150px' }}>
                <div style={{ fontSize: isMobile ? '0.7rem' : '0.75rem', opacity: 0.85, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Perfil que administro
                </div>
                <div style={{ fontSize: isMobile ? '1.1rem' : '1.35rem', fontWeight: 800, marginTop: '0.15rem' }}>
                  @jhonnatandoncel
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: isMobile ? '0.85rem' : '0.95rem',
                  fontWeight: 600
                }}
              >
                Ver perfil
                <ArrowRight size={16} />
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Reconocimientos */}
        <motion.h2
          style={{ ...sectionTitleStyle(isMobile), marginTop: isMobile ? '3rem' : '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Reconocimientos
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: isMobile ? '1.5rem' : '2rem'
          }}
        >
          {recognitions.map((rec, i) => (
            <motion.div
              key={i}
              style={{
                background: 'white',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: shadows.card
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            >
              <IGEmbed embedUrl={rec.embedUrl} height={560} />
              <div style={{ padding: isMobile ? '1.25rem' : '1.5rem' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: rec.tipo === 'Ganadora' ? gradients.award : gradients.primary,
                    color: 'white',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.75rem'
                  }}
                >
                  <Award size={12} />
                  {rec.tipo}
                </div>
                <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.4rem', fontWeight: 800, color: colors.text, margin: '0 0 0.3rem 0' }}>
                  {rec.titulo}
                </h3>
                <p style={{ color: colors.primary, fontSize: isMobile ? '0.9rem' : '1rem', fontWeight: 600, margin: '0 0 0.2rem 0' }}>
                  {rec.premio}
                </p>
                <p style={{ color: colors.textMuted, fontSize: isMobile ? '0.8rem' : '0.85rem', margin: '0 0 0.75rem 0' }}>
                  {rec.entidad}
                </p>
                <p style={{ color: colors.textSoft, fontSize: isMobile ? '0.85rem' : '0.9rem', lineHeight: 1.5, margin: 0 }}>
                  {rec.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
