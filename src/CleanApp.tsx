import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Mail, Camera, Video, Users, Play, Heart } from 'lucide-react';

const SimpleApp = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Hook para detectar cambios de pantalla
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #b6c8a9 0%, #a8edea 50%, #fed6e3 100%)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    },
    navbar: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '0.75rem 1rem',
      '@media (min-width: 768px)': {
        padding: '1rem 2rem'
      }
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column' as const,
      gap: '0.75rem',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        gap: '0'
      }
    },
    logo: {
      fontSize: '1.2rem',
      fontWeight: 700,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      '@media (min-width: 768px)': {
        fontSize: '1.5rem'
      }
    },
    navLinks: {
      display: 'flex',
      gap: '0.5rem',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      flexWrap: 'wrap' as const,
      justifyContent: 'center',
      '@media (min-width: 768px)': {
        gap: '2rem',
        flexWrap: 'nowrap'
      }
    },
    navLink: {
      background: 'none',
      border: 'none',
      color: '#2D3748',
      fontWeight: 500,
      cursor: 'pointer',
      padding: '0.4rem 0.8rem',
      borderRadius: '0.5rem',
      transition: 'all 0.3s ease',
      fontSize: '0.8rem',
      '@media (min-width: 768px)': {
        padding: '0.5rem 1rem',
        fontSize: '1rem'
      }
    },
    navLinkActive: {
      background: '#B19CD9',
      color: 'white',
      transform: 'translateY(-2px)'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative' as const,
      overflow: 'hidden',
      padding: '6rem 1rem 2rem',
      '@media (min-width: 768px)': {
        padding: '0 2rem'
      }
    },
    heroContent: {
      textAlign: 'center' as const,
      zIndex: 10,
      position: 'relative' as const,
      maxWidth: '100%',
      '@media (min-width: 768px)': {
        maxWidth: '800px'
      }
    },
    heroTitle: {
      fontSize: isMobile ? '2.5rem' : '4.5rem', // Más grande en desktop
      fontWeight: 800,
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: 1.2
    },
    heroSubtitle: {
      fontSize: isMobile ? '1rem' : '1.4rem', // También más grande en desktop
      color: '#718096',
      marginBottom: '2rem',
      maxWidth: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: 1.4
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.75rem',
      marginBottom: '2rem',
      flexWrap: 'wrap' as const,
      '@media (min-width: 768px)': {
        gap: '1rem'
      }
    },
    socialIcon: {
      width: '2.2rem',
      height: '2.2rem',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#667eea',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '@media (min-width: 768px)': {
        width: '2.5rem',
        height: '2.5rem'
      }
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '0.8rem 1.5rem',
      border: 'none',
      borderRadius: '2rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1rem',
      '@media (min-width: 768px)': {
        padding: '1rem 2rem',
        fontSize: '1.1rem'
      }
    },
    floatingElement: {
      position: 'absolute' as const,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #B19CD9 0%, #FFB6C1 100%)',
      opacity: 0.7,
      display: 'none',
      '@media (min-width: 768px)': {
        display: 'block'
      }
    },
    section: {
      padding: '3rem 1rem',
      background: 'transparent',
      '@media (min-width: 768px)': {
        padding: '5rem 2rem'
      }
    },
    container2: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: 800,
      textAlign: 'center' as const,
      marginBottom: '2rem',
      color: '#2D3748',
      '@media (min-width: 768px)': {
        fontSize: '2.5rem',
        marginBottom: '3rem'
      }
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', // 3 columnas fijas en desktop
      gap: isMobile ? '1.5rem' : '2rem',
      marginBottom: isMobile ? '2rem' : '3rem'
    },
    card: {
      background: 'white',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    cardImage: {
      width: '100%',
      height: '180px',
      objectFit: 'cover' as const,
      '@media (min-width: 768px)': {
        height: '200px'
      }
    },
    cardContent: {
      padding: '1rem',
      '@media (min-width: 768px)': {
        padding: '1.5rem'
      }
    },
    cardTitle: {
      fontSize: '1.1rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
      color: '#2D3748',
      '@media (min-width: 768px)': {
        fontSize: '1.25rem'
      }
    },
    cardDescription: {
      color: '#718096',
      lineHeight: 1.6,
      fontSize: '0.9rem',
      '@media (min-width: 768px)': {
        fontSize: '1rem'
      }
    },
    previewGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '0.75rem',
      '@media (min-width: 640px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem'
      },
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
    previewItem: {
      aspectRatio: '1',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    previewImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const
    },
    contactForm: {
      maxWidth: '100%',
      margin: '0 auto',
      background: 'white',
      borderRadius: '1rem',
      padding: '1.5rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      '@media (min-width: 768px)': {
        maxWidth: '600px',
        padding: '2rem'
      }
    },
    formGroup: {
      marginBottom: '1.25rem',
      '@media (min-width: 768px)': {
        marginBottom: '1.5rem'
      }
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: 600,
      color: '#2D3748',
      fontSize: '0.9rem',
      '@media (min-width: 768px)': {
        fontSize: '1rem'
      }
    },
    input: {
      width: '100%',
      padding: '0.7rem',
      border: '2px solid #E2E8F0',
      borderRadius: '0.5rem',
      fontSize: '0.9rem',
      transition: 'border-color 0.3s ease',
      outline: 'none',
      boxSizing: 'border-box' as const,
      '@media (min-width: 768px)': {
        padding: '0.75rem',
        fontSize: '1rem'
      }
    },
    textarea: {
      width: '100%',
      padding: '0.7rem',
      border: '2px solid #E2E8F0',
      borderRadius: '0.5rem',
      fontSize: '0.9rem',
      transition: 'border-color 0.3s ease',
      outline: 'none',
      minHeight: '100px',
      resize: 'vertical' as const,
      boxSizing: 'border-box' as const,
      '@media (min-width: 768px)': {
        padding: '0.75rem',
        fontSize: '1rem',
        minHeight: '120px'
      }
    },
    submitButton: {
      width: '100%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '0.9rem',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '@media (min-width: 768px)': {
        padding: '1rem',
        fontSize: '1.1rem'
      }
    },
    socialLinksSection: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1rem',
      marginTop: '2rem',
      '@media (min-width: 640px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem'
      }
    },
    socialLinkCard: {
      background: 'white',
      borderRadius: '1rem',
      padding: '1rem',
      textAlign: 'center' as const,
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      color: '#2D3748',
      minWidth: 'auto',
      '@media (min-width: 768px)': {
        minWidth: '150px'
      }
    }
  };

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'photography', label: 'Fotografía' },
    { id: 'productions', label: 'Producciones' },
    { id: 'ugc', label: 'UGC' },
    { id: 'contact', label: 'Contacto' }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      url: 'https://www.instagram.com/daniela_angel.2001/',
      label: 'Instagram Personal'
    },
    {
      icon: Instagram,
      url: 'https://www.instagram.com/mangelcaptures/',
      label: 'Instagram Fotografía'
    },
    {
      icon: Instagram,
      url: 'https://www.instagram.com/eroticbydaniela/',
      label: 'Emprendimiento'
    }
  ];

  // Navbar Component - Actualizado para mobile
  const Navbar = () => (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <div style={styles.logo}>Daniela Angel Posada</div>
        <ul style={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                style={{
                  ...styles.navLink,
                  ...(activeSection === item.id ? styles.navLinkActive : {})
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );

  // Hero Section - Con letra más grande
  const Hero = () => (
    <section style={styles.hero}>
      {/* Elementos flotantes solo en desktop */}
      {!isMobile && (
        <>
          <motion.div 
            style={{
              ...styles.floatingElement,
              width: '80px',
              height: '80px',
              top: '20%',
              left: '10%'
            }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            style={{
              ...styles.floatingElement,
              width: '60px',
              height: '60px',
              top: '60%',
              right: '15%'
            }}
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            style={{
              ...styles.floatingElement,
              width: '100px',
              height: '100px',
              bottom: '20%',
              left: '20%'
            }}
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 15, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </>
      )}
      
      <div style={styles.heroContent}>
        <motion.h1 
          style={styles.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Maria Daniela Angel Posada
        </motion.h1>

        <motion.p 
          style={styles.heroSubtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Comunicadora Social especializada en fotografía, producciones audiovisuales y contenido UGC.
        </motion.p>

        <motion.div 
          style={styles.socialIcons}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.socialIcon,
                textDecoration: 'none',
                color: '#667eea'
              }}
              title={social.label}
            >
              <social.icon size={isMobile ? 16 : 20} />
            </a>
          ))}
          <button
            onClick={() => setActiveSection('contact')}
            style={{
              ...styles.socialIcon,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white'
            }}
            title="Contacto"
          >
            <Mail size={isMobile ? 16 : 20} />
          </button>
        </motion.div>

        <motion.button
          onClick={() => setActiveSection('photography')}
          style={styles.ctaButton}
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

  // Gallery Section
  const Gallery = () => {
    const categories = [
      {
        id: 'photography',
        title: 'Fotografía',
        description: 'Capturando momentos únicos con una perspectiva creativa y técnica profesional.',
        icon: Camera,
        image: require('./utils/iglesia.jpg')
      },
      {
        id: 'productions',
        title: 'Producciones',
        description: 'Contenido audiovisual de alta calidad para marcas y proyectos personales.',
        icon: Video,
        image: require('./utils/paraHelena.jpg')
      },
      {
        id: 'ugc',
        title: 'UGC Content',
        description: 'Contenido auténtico generado por usuarios que conecta con audiencias reales.',
        icon: Users,
        image: require('./utils/erotic.jpg')
      }
    ];

    return (
      <section style={styles.section}>
        <div style={styles.container2}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mi Trabajo
          </motion.h2>

          <div style={styles.grid}>
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  style={styles.card}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveSection(category.id)}
                >
                  <img 
                    src={category.image} 
                    alt={category.title}
                    style={styles.cardImage}
                  />
                  <div style={styles.cardContent}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <IconComponent size={24} style={{ marginRight: '0.5rem', color: '#667eea' }} />
                      <h3 style={styles.cardTitle}>{category.title}</h3>
                    </div>
                    <p style={styles.cardDescription}>{category.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  // Photography Page - Arreglado para responsive
  const PhotographyPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);

    const filterCategories = [
      { id: 'all', label: 'Todas' },
      { id: 'inmobiliaria', label: 'Inmobiliaria' },
      { id: 'wallpaper', label: 'Wallpaper' },
      { id: 'retrato', label: 'Retrato' },
      { id: 'naturaleza', label: 'Naturaleza' }
    ];

    const photos = [
      // Retrato
      { 
        id: 1, 
        src: require('./utils/bailarina.jpg'), 
        category: 'retrato',
        title: 'Bailarina'
      },
      { 
        id: 2, 
        src: require('./utils/Foto Guarda.jpg'), 
        category: 'retrato',
        title: 'Foto Guarda'
      },
      { 
        id: 3, 
        src: require('./utils/niña.jpg'), 
        category: 'retrato',
        title: 'Niña'
      },
      { 
        id: 4, 
        src: require('./utils/pescador.jpg'), 
        category: 'retrato',
        title: 'Pescador'
      },
      
      // Naturaleza
      { 
        id: 5, 
        src: require('./utils/canoa.jpg'), 
        category: 'naturaleza',
        title: 'Canoa'
      },
      { 
        id: 6, 
        src: require('./utils/desierto.jpg'), 
        category: 'naturaleza',
        title: 'Desierto'
      },
      { 
        id: 7, 
        src: require('./utils/girafa.jpg'), 
        category: 'naturaleza',
        title: 'Jirafa'
      },
      { 
        id: 8, 
        src: require('./utils/norcasia.jpg'), 
        category: 'naturaleza',
        title: 'Norcasia'
      },
      { 
        id: 9, 
        src: require('./utils/toros.jpg'), 
        category: 'naturaleza',
        title: 'Toros'
      },
      
      // Inmobiliaria
      { 
        id: 10, 
        src: require('./utils/Cocina.jpg'), 
        category: 'inmobiliaria',
        title: 'Cocina'
      },
      { 
        id: 11, 
        src: require('./utils/Comedor.jpg'), 
        category: 'inmobiliaria',
        title: 'Comedor'
      },
      { 
        id: 12, 
        src: require('./utils/Foto1.jpg'), 
        category: 'inmobiliaria',
        title: 'Interior Moderno'
      },
      { 
        id: 13, 
        src: require('./utils/Foto13.jpg'), 
        category: 'inmobiliaria',
        title: 'Espacio Elegante'
      },
      { 
        id: 14, 
        src: require('./utils/Piscina .JPG'), 
        category: 'inmobiliaria',
        title: 'Piscina'
      },
      { 
        id: 15, 
        src: require('./utils/Foto1.jpg'), // Thumbnail del video
        category: 'inmobiliaria',
        title: 'Video Belmonte',
        videoSrc: require('./utils/Video belmonte  (1).MOV'),
        type: 'video'
      },
      
      // Wallpaper
      { 
        id: 16, 
        src: require('./utils/ciclista.jpg'), 
        category: 'wallpaper',
        title: 'Ciclista'
      },
      { 
        id: 17, 
        src: require('./utils/elefantes.jpg'), 
        category: 'wallpaper',
        title: 'Elefantes'
      },
      { 
        id: 18, 
        src: require('./utils/iglesia.jpg'), 
        category: 'wallpaper',
        title: 'Iglesia'
      },
      { 
        id: 19, 
        src: require('./utils/iglesia2.jpg'), 
        category: 'wallpaper',
        title: 'Iglesia 2'
      },
      { 
        id: 20, 
        src: require('./utils/iglesia3.jpg'), 
        category: 'wallpaper',
        title: 'Iglesia 3'
      },
      { 
        id: 21, 
        src: require('./utils/mono.jpg'), 
        category: 'wallpaper',
        title: 'Mono'
      },
      { 
        id: 22, 
        src: require('./utils/trasteo.jpg'), 
        category: 'wallpaper',
        title: 'Trasteo'
      }
    ];

    const filteredPhotos = activeFilter === 'all' 
      ? photos 
      : photos.filter(photo => photo.category === activeFilter);

    // Estilos adaptativos basados en el estado isMobile
    const filterStyles = {
      filterContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: isMobile ? '0.5rem' : '1rem',
        marginBottom: isMobile ? '2rem' : '3rem',
        flexWrap: 'wrap' as const
      },
      filterButton: {
        background: 'white',
        border: '2px solid #E2E8F0',
        borderRadius: isMobile ? '1.5rem' : '2rem',
        padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
        color: '#4A5568',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontWeight: 500,
        fontSize: isMobile ? '0.8rem' : '0.95rem'
      },
      filterButtonActive: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderColor: '#667eea',
        color: 'white',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
      },
      photoCard: {
        position: 'relative' as const,
        borderRadius: isMobile ? '0.5rem' : '0.75rem',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        background: 'white',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
      },
      photoOverlay: {
        position: 'absolute' as const,
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
        color: 'white',
        padding: isMobile ? '0.75rem' : '1rem',
        transform: 'translateY(100%)',
        transition: 'transform 0.3s ease'
      },
      photoOverlayVisible: {
        transform: 'translateY(0)'
      },
      categoryBadge: {
        position: 'absolute' as const,
        top: isMobile ? '0.5rem' : '0.75rem',
        right: isMobile ? '0.5rem' : '0.75rem',
        background: 'rgba(255, 255, 255, 0.9)',
        color: '#667eea',
        padding: isMobile ? '0.2rem 0.5rem' : '0.25rem 0.75rem',
        borderRadius: isMobile ? '0.75rem' : '1rem',
        fontSize: isMobile ? '0.7rem' : '0.75rem',
        fontWeight: 600,
        textTransform: 'capitalize' as const
      }
    };

    // Grid responsive dinámico
    const getGridStyle = () => {
      if (isMobile) {
        return {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.75rem'
        };
      } else if (window.innerWidth < 1024) {
        return {
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem'
        };
      } else {
        return {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        };
      }
    };

    return (
      <section style={styles.section}>
        <div style={styles.container2}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Fotografía
          </motion.h2>
          
          {/* Filtros */}
          <motion.div 
            style={filterStyles.filterContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filterCategories.map((filter, index) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                style={{
                  ...filterStyles.filterButton,
                  ...(activeFilter === filter.id ? filterStyles.filterButtonActive : {})
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Grid de fotos - Responsive arreglado */}
          <motion.div 
            style={getGridStyle()}
            layout
          >
            <AnimatePresence mode="wait">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  style={filterStyles.photoCard}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                  }}
                  onMouseEnter={() => setHoveredPhoto(photo.id)}
                  onMouseLeave={() => setHoveredPhoto(null)}
                >
                  <img 
                    src={photo.src} 
                    alt={photo.title}
                    style={{
                      width: '100%',
                      height: isMobile ? '200px' : '250px',
                      objectFit: 'cover' as const
                    }}
                  />
                  
                  {/* Indicador de video si es tipo video */}
                  {photo.type === 'video' && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(0, 0, 0, 0.6)',
                      borderRadius: '50%',
                      padding: isMobile ? '0.75rem' : '1rem',
                      zIndex: 2
                    }}>
                      <Play size={isMobile ? 24 : 32} color="white" />
                    </div>
                  )}
                  
                  {/* Badge de categoría */}
                  <div style={filterStyles.categoryBadge}>
                    {filterCategories.find(cat => cat.id === photo.category)?.label}
                  </div>
                  
                  {/* Overlay con título */}
                  <div 
                    style={{
                      ...filterStyles.photoOverlay,
                      ...(hoveredPhoto === photo.id ? filterStyles.photoOverlayVisible : {})
                    }}
                  >
                    <h4 style={{ 
                      margin: 0, 
                      fontSize: isMobile ? '0.9rem' : '1.1rem',
                      fontWeight: 600
                    }}>
                      {photo.title}
                      {photo.type === 'video' && ' 📹'}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Contador de fotos */}
          <motion.div
            style={{
              textAlign: 'center',
              marginTop: isMobile ? '1.5rem' : '2rem',
              color: '#718096',
              fontSize: isMobile ? '0.85rem' : '0.95rem'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Mostrando {filteredPhotos.length} de {photos.length} fotografías
          </motion.div>
        </div>
      </section>
    );
  };

  // Productions Page - También actualizado para responsive
  const ProductionsPage = () => {
    const productions = [
      {
        id: 1,
        title: 'Carga Honor',
        role: 'Asistente de sonido documental Carga de honor',
        thumbnail: require('./utils/cargahonor.jpg'),
        type: 'image',
        link: 'https://www.instagram.com/p/DIwwvTmywFO/'
      },
      {
        id: 2,
        title: 'Para Helena',
        role: 'Asistente de arte corto Para Helena',
        thumbnail: require('./utils/paraHelena.jpg'),
        type: 'image',
        link: 'https://www.instagram.com/p/DC9rLKgvK2Y/'
      },
      {
        id: 3,
        title: 'Y lo aprendí de ti',
        role: 'Productora videoclip musical "Y lo aprendí de ti"',
        thumbnail: require('./utils/aprendideti.jpg'),
        type: 'image',
        link: 'https://www.instagram.com/p/DJppsfjRUP0/'
      }
    ];

    const getProductionsGridStyle = () => {
      if (isMobile) {
        return {
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.5rem'
        };
      } else {
        return {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        };
      }
    };

    return (
      <section style={styles.section}>
        <div style={styles.container2}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Producciones
          </motion.h2>
          
          <div style={getProductionsGridStyle()}>
            {productions.map((production, index) => {
              const cardContent = (
                <>
                  <div style={{ position: 'relative' }}>
                    <img 
                      src={production.thumbnail} 
                      alt={production.title}
                      style={{
                        width: '100%',
                        height: isMobile ? '200px' : '250px',
                        objectFit: 'cover' as const
                      }}
                    />
                    {/* Overlay con icono de play */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(0, 0, 0, 0.6)',
                      borderRadius: '50%',
                      padding: isMobile ? '0.75rem' : '1rem',
                      opacity: 0.8
                    }}>
                      <Play size={isMobile ? 24 : 32} color="white" />
                    </div>
                  </div>
                  
                  <div style={{
                    padding: isMobile ? '1rem' : '1.5rem'
                  }}>
                    {/* Título del proyecto */}
                    <h3 style={{
                      fontSize: isMobile ? '1.2rem' : '1.4rem',
                      fontWeight: 600,
                      marginBottom: '0.75rem',
                      color: '#2D3748',
                      margin: '0 0 0.75rem 0'
                    }}>
                      {production.title}
                    </h3>
                    
                    {/* Rol/Cargo */}
                    <p style={{
                      fontSize: isMobile ? '0.95rem' : '1.05rem',
                      fontWeight: 500,
                      color: '#667eea',
                      marginBottom: '1rem',
                      lineHeight: 1.4,
                      margin: '0 0 1rem 0'
                    }}>
                      {production.role}
                    </p>
                    
                    {/* Badge de tipo */}
                    <div style={{
                      display: 'inline-block',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      textTransform: 'uppercase'
                    }}>
                      Producción
                    </div>
                  </div>
                </>
              );

              return production.link ? (
                <motion.a
                  key={production.id}
                  href={production.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'white',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {cardContent}
                </motion.a>
              ) : (
                <motion.div
                  key={production.id}
                  style={{
                    background: 'white',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {cardContent}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  // UGC Page
  const UGCPage = () => {
    const posts = [
      { id: 1, src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400', likes: 1234 },
      { id: 2, src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400', likes: 2341 },
      { id: 3, src: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400', likes: 987 },
      { id: 4, src: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400', likes: 3456 }
    ];

    return (
      <section style={styles.section}>
        <div style={styles.container2}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contenido UGC
          </motion.h2>
          
          <div style={styles.previewGrid}>
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                style={{...styles.previewItem, position: 'relative'}}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={post.src} 
                  alt={`UGC Post ${post.id}`}
                  style={styles.previewImage}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: 'white',
                  padding: '0.5rem',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}>
                  <Heart size={14} />
                  <span>{post.likes}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Contact Page
  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const subject = encodeURIComponent(formData.subject || 'Contacto desde el portafolio');
      const body = encodeURIComponent(
        `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
      );
      window.location.href = `mailto:daniela.angel.6273@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
      <section style={styles.section}>
        <div style={styles.container2}>
          <motion.h2 
            style={styles.sectionTitle}
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
            <form style={styles.contactForm} onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="name">Nombre *</label>
                <input
                  style={styles.input}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="email">Email *</label>
                <input
                  style={styles.input}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="tu.email@ejemplo.com"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="subject">Asunto</label>
                <input
                  style={styles.input}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Motivo de tu mensaje"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="message">Mensaje *</label>
                <textarea
                  style={styles.textarea}
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
                style={styles.submitButton}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>

          {/* Redes Sociales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 style={{ 
              textAlign: 'center', 
              marginTop: '3rem', 
              marginBottom: '1.5rem',
              color: '#2D3748',
              fontSize: '1.5rem'
            }}>
              Sígueme en mis redes
            </h3>
            
            <div style={styles.socialLinksSection}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialLinkCard}
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <social.icon size={32} style={{ color: '#667eea', marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                    {social.label}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'photography':
        return <PhotographyPage />;
      case 'productions':
        return <ProductionsPage />;
      case 'ugc':
        return <UGCPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <>
            <Hero />
            <Gallery />
          </>
        );
    }
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default SimpleApp;
