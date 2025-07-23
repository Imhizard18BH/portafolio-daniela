import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Play } from 'lucide-react';

const SimpleApp = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
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
      fontSize: isMobile ? '3.5rem' : '5.5rem',
      fontWeight: 800,
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: 1.2
    },
    heroSubtitle: {
      fontSize: isMobile ? '1.1rem' : '1.5rem',
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
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
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

  // Navbar Component
  const Navbar = () => (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <div style={styles.logo}>
          Maria Daniela Angel Posada
        </div>
        <ul style={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                style={{
                  ...styles.navLink,
                  ...(activeSection === item.id ? styles.navLinkActive : {})
                }}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );

  // Hero Section
  const Hero = () => (
    <section style={styles.hero}>
      <div style={styles.heroContent}>
        <motion.h1 
          style={styles.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Daniela Ángel
        </motion.h1>
        
        <motion.p 
          style={styles.heroSubtitle}
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
              style={styles.socialIcon}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <social.icon size={isMobile ? 16 : 20} />
            </motion.a>
          ))}
        </motion.div>
        
        <motion.button
          style={styles.ctaButton}
          onClick={() => setActiveSection('photography')}
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
    const previewPhotos = [
      { id: 1, src: require('./utils/Aguila.webp'), category: 'naturaleza' },
      { id: 2, src: require('./utils/ana1.webp'), category: 'retrato' },
      { id: 3, src: require('./utils/cafe2.webp'), category: 'wallpaper' },
      { id: 4, src: require('./utils/Cocina.webp'), category: 'inmobiliaria' },
      { id: 5, src: require('./utils/elefante1.webp'), category: 'naturaleza' },
      { id: 6, src: require('./utils/bailarina.webp'), category: 'retrato' }
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
            Mi trabajo
          </motion.h2>
          
          <div style={styles.grid}>
            <motion.div
              style={styles.card}
              onClick={() => setActiveSection('photography')}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <img 
                src={require('./utils/mangelcaptures.webp')} 
                alt="Fotografía"
                style={styles.cardImage}
              />
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>Fotografía</h3>
                <p style={styles.cardDescription}>
                  Explora mi colección de fotografías de naturaleza, retratos, inmobiliaria y wallpapers.
                </p>
              </div>
            </motion.div>

            <motion.div
              style={styles.card}
              onClick={() => setActiveSection('productions')}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <img 
                src={require('./utils/cargahonor.webp')} 
                alt="Producciones"
                style={styles.cardImage}
              />
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>Producciones</h3>
                <p style={styles.cardDescription}>
                  Descubre mis trabajos como productora y asistente en diferentes proyectos audiovisuales.
                </p>
              </div>
            </motion.div>

            <motion.div
              style={styles.card}
              onClick={() => setActiveSection('ugc')}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <img 
                src={require('./utils/ugc.webp')} 
                alt="UGC"
                style={styles.cardImage}
              />
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>Contenido UGC</h3>
                <p style={styles.cardDescription}>
                  Mira mi trabajo creando contenido auténtico y atractivo para diferentes marcas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  // Photography Page
  const PhotographyPage = () => {
    const [activeFilter, setActiveFilter] = useState('portada');
    const [hoveredPhoto, setHoveredPhoto] = useState<string | null>(null);

    const filterCategories = [
      { id: 'portada', label: 'Portada' },
      { id: 'wallpaper', label: 'Wallpaper' },
      { id: 'retrato', label: 'Retrato' },
      { id: 'naturaleza', label: 'Naturaleza' },
      { id: 'inmobiliaria', label: 'Inmobiliaria' }
    ];

    // Tandas organizadas para la portada
    const portadaTandas = {
      naturaleza: [
        { id: 1, src: require('./utils/Aguila.webp'), title: 'ukumari', size: 'large' },
        { id: 2, src: require('./utils/cebras.webp'), title: 'ukumari', size: 'small' },
        { id: 3, src: require('./utils/elefante1.webp'), title: 'ukumari', size: 'medium' },
        { id: 4, src: require('./utils/elefante2.webp'), title: 'ukumari', size: 'small' },
        { id: 5, src: require('./utils/elefante3.webp'), title: 'ukumari', size: 'large' },
        { id: 6, src: require('./utils/elefantes.webp'), title: 'ukumari', size: 'medium' },
        { id: 7, src: require('./utils/girafa.webp'), title: 'ukumari', size: 'large' },
        { id: 8, src: require('./utils/lemur.webp'), title: 'ukumari', size: 'small' },
        { id: 9, src: require('./utils/loro rojo.webp'), title: 'ukumari', size: 'medium' },
        { id: 10, src: require('./utils/loros1.webp'), title: 'ukumari', size: 'small' },
        { id: 11, src: require('./utils/loros2.webp'), title: 'ukumari', size: 'small' },
        { id: 12, src: require('./utils/mono.webp'), title: 'ukumari', size: 'medium' },
        { id: 13, src: require('./utils/mono2.webp'), title: 'ukumari', size: 'large' },
        { id: 14, src: require('./utils/mono3.webp'), title: 'ukumari', size: 'small' },
        { id: 15, src: require('./utils/toros.webp'), title: 'ukumari', size: 'large' },
        { id: 16, src: require('./utils/zuricata.webp'), title: 'ukumari', size: 'medium' }
      ],
      bailarines: [
        { id: 17, src: require('./utils/ana1.webp'), title: 'Y lo aprendi de ti', size: 'large' },
        { id: 18, src: require('./utils/ana2.webp'), title: 'Y lo aprendi de ti', size: 'medium' },
        { id: 19, src: require('./utils/ana3.webp'), title: 'Y lo aprendi de ti', size: 'small' },
        { id: 20, src: require('./utils/ana4.webp'), title: 'Y lo aprendi de ti', size: 'medium' },
        { id: 21, src: require('./utils/ana5.webp'), title: 'Y lo aprendi de ti', size: 'large' },
        { id: 22, src: require('./utils/ana6.webp'), title: 'Y lo aprendi de ti', size: 'small' },
        { id: 23, src: require('./utils/ana7.webp'), title: 'Y lo aprendi de ti', size: 'medium' },
        { id: 24, src: require('./utils/bailarin.webp'), title: 'Y lo aprendi de ti', size: 'large' },
        { id: 25, src: require('./utils/bailarina.webp'), title: 'Y lo aprendi de ti', size: 'medium' },
        { id: 26, src: require('./utils/baileluna.webp'), title: 'Y lo aprendi de ti', size: 'medium' },
        { id: 27, src: require('./utils/trio.webp'), title: 'Y lo aprendi de ti', size: 'large' }
      ],
      jeep: [
        { id: 28, src: require('./utils/burro.webp'), title: 'Yipao', size: 'medium' },
        { id: 29, src: require('./utils/cafe1.webp'), title: 'Yipao', size: 'small' },
        { id: 30, src: require('./utils/cafe2.webp'), title: 'Yipao', size: 'large' },
        { id: 31, src: require('./utils/cafe3.webp'), title: 'Yipao', size: 'medium' },
        { id: 32, src: require('./utils/costales.webp'), title: 'Yipao', size: 'small' },
        { id: 33, src: require('./utils/puente.webp'), title: 'Viaje', size: 'large' }
      ],
      norcasia: [
        { id: 34, src: require('./utils/canoa.webp'), title: 'Norcasia', size: 'large' },
        { id: 35, src: require('./utils/norcasia.webp'), title: 'Norcasia', size: 'large' },
      ],
      buenaventura: [
        {id: 36, src: require('./utils/canoa2.webp'), title: 'Buenaventura', size: 'medium' },
        {id: 37, src: require('./utils/pescador.webp'), title: 'Buenaventura', size: 'large' },
        {id: 38, src: require('./utils/pescador2.webp'), title: 'Buenaventura', size: 'medium' },
        {id: 39, src: require('./utils/aves.webp'), title: 'Buenaventura', size: 'large' }
      ],
      murillo : [
        { id: 40, src: require('./utils/ciclista.webp'), title: 'murillo', size: 'large' },
        { id: 41, src: require('./utils/frailejon1.webp'), title: 'murillo', size: 'medium' },
        { id: 42, src: require('./utils/frailejon2.webp'), title: 'murillo', size: 'small' },
        { id: 43, src: require('./utils/murillo.webp'), title: 'murillo', size: 'large' }
      ],
      otros : [
        { id: 44, src: require('./utils/desierto.webp'), title: 'Tatacoa', size: 'large' },
        { id: 45, src: require('./utils/niña.webp'), title: 'MiraValle', size: 'medium' },
        { id: 46, src: require('./utils/Foto Guarda.webp'), title: 'Retrato', size: 'small' },
        { id: 47, src: require('./utils/iglesia.webp'), title: 'Pijao', size: 'large' },
        { id: 48, src: require('./utils/iglesia2.webp'), title: 'Jardin', size: 'medium' },
        { id: 49, src: require('./utils/iglesia3.webp'), title: 'Manizales', size: 'small' }
      ]
    };

    // Fotos existentes (para otros filtros)
    const photos = [
      // RETRATO
      { id: 101, src: require('./utils/bailarina.webp'), category: 'retrato', title: 'Bailarina' },
      { id: 102, src: require('./utils/Foto Guarda.webp'), category: 'retrato', title: 'Foto Guarda' },
      { id: 103, src: require('./utils/niña.webp'), category: 'retrato', title: 'Niña' },
      { id: 104, src: require('./utils/baileluna.webp'), category: 'retrato', title: 'Baile Luna' },
      { id: 105, src: require('./utils/trio.webp'), category: 'retrato', title: 'Trío' },
      { id: 106, src: require('./utils/ana1.webp'), category: 'retrato', title: 'Ana 1' },
      { id: 107, src: require('./utils/ana2.webp'), category: 'retrato', title: 'Ana 2' },
      { id: 108, src: require('./utils/ana3.webp'), category: 'retrato', title: 'Ana 3' },
      { id: 109, src: require('./utils/ana4.webp'), category: 'retrato', title: 'Ana 4' },
      { id: 110, src: require('./utils/ana5.webp'), category: 'retrato', title: 'Ana 5' },
      { id: 111, src: require('./utils/ana6.webp'), category: 'retrato', title: 'Ana 6' },
      { id: 112, src: require('./utils/ana7.webp'), category: 'retrato', title: 'Ana 7' },
      { id: 113, src: require('./utils/bailarin.webp'), category: 'retrato', title: 'Bailarín' },
      
      // NATURALEZA
      { id: 201, src: require('./utils/canoa.webp'), category: 'naturaleza', title: 'Canoa' },
      { id: 202, src: require('./utils/canoa2.webp'), category: 'naturaleza', title: 'Canoa 2' },
      { id: 203, src: require('./utils/desierto.webp'), category: 'naturaleza', title: 'Desierto' },
      { id: 204, src: require('./utils/norcasia.webp'), category: 'naturaleza', title: 'Norcasia' },
      { id: 205, src: require('./utils/frailejon1.webp'), category: 'naturaleza', title: 'Frailejón 1' },
      { id: 206, src: require('./utils/frailejon2.webp'), category: 'naturaleza', title: 'Frailejón 2' },
      { id: 207, src: require('./utils/Aguila.webp'), category: 'naturaleza', title: 'Águila' },
      { id: 208, src: require('./utils/aves.webp'), category: 'naturaleza', title: 'Aves' },
      { id: 209, src: require('./utils/cebras.webp'), category: 'naturaleza', title: 'Cebras' },
      { id: 210, src: require('./utils/elefante1.webp'), category: 'naturaleza', title: 'Elefante 1' },
      { id: 211, src: require('./utils/elefante2.webp'), category: 'naturaleza', title: 'Elefante 2' },
      { id: 212, src: require('./utils/elefante3.webp'), category: 'naturaleza', title: 'Elefante 3' },
      { id: 213, src: require('./utils/elefantes.webp'), category: 'naturaleza', title: 'Elefantes' },
      { id: 214, src: require('./utils/girafa.webp'), category: 'naturaleza', title: 'Jirafa' },
      { id: 215, src: require('./utils/lemur.webp'), category: 'naturaleza', title: 'Lemur' },
      { id: 216, src: require('./utils/loro rojo.webp'), category: 'naturaleza', title: 'Loro Rojo' },
      { id: 217, src: require('./utils/loros1.webp'), category: 'naturaleza', title: 'Loros 1' },
      { id: 218, src: require('./utils/loros2.webp'), category: 'naturaleza', title: 'Loros 2' },
      { id: 219, src: require('./utils/mono.webp'), category: 'naturaleza', title: 'Mono' },
      { id: 220, src: require('./utils/mono2.webp'), category: 'naturaleza', title: 'Mono 2' },
      { id: 221, src: require('./utils/mono3.webp'), category: 'naturaleza', title: 'Mono 3' },
      { id: 222, src: require('./utils/toros.webp'), category: 'naturaleza', title: 'Toros' },
      { id: 223, src: require('./utils/zuricata.webp'), category: 'naturaleza', title: 'Suricata' },
      
      // INMOBILIARIA
      { id: 301, src: require('./utils/Cocina.webp'), category: 'inmobiliaria', title: 'Cocina' },
      { id: 302, src: require('./utils/Comedor.webp'), category: 'inmobiliaria', title: 'Comedor' },
      { id: 303, src: require('./utils/Foto1.webp'), category: 'inmobiliaria', title: 'Interior Moderno' },
      { id: 304, src: require('./utils/Foto13.webp'), category: 'inmobiliaria', title: 'Espacio Elegante' },
      { id: 305, src: require('./utils/Piscina .webp'), category: 'inmobiliaria', title: 'Piscina' },
      { id: 306, src: require('./utils/Video belmonte  (1).MOV'), category: 'inmobiliaria', title: 'Sala Moderna', type : 'video'},

      // WALLPAPER
      { id: 401, src: require('./utils/ciclista.webp'), category: 'wallpaper', title: 'Ciclista' },
      { id: 402, src: require('./utils/iglesia.webp'), category: 'wallpaper', title: 'Iglesia' },
      { id: 403, src: require('./utils/iglesia2.webp'), category: 'wallpaper', title: 'Iglesia 2' },
      { id: 404, src: require('./utils/iglesia3.webp'), category: 'wallpaper', title: 'Iglesia 3' },
      { id: 405, src: require('./utils/trasteo.webp'), category: 'wallpaper', title: 'Trasteo' },
      { id: 406, src: require('./utils/pescador.webp'), category: 'wallpaper', title: 'Pescador' },
      { id: 407, src: require('./utils/burro.webp'), category: 'wallpaper', title: 'Burro' },
      { id: 408, src: require('./utils/cafe1.webp'), category: 'wallpaper', title: 'Café 1' },
      { id: 409, src: require('./utils/cafe2.webp'), category: 'wallpaper', title: 'Café 2' },
      { id: 410, src: require('./utils/cafe3.webp'), category: 'wallpaper', title: 'Café 3' },
      { id: 411, src: require('./utils/costales.webp'), category: 'wallpaper', title: 'Costales' },
      { id: 412, src: require('./utils/puente.webp'), category: 'wallpaper', title: 'Puente' }
    ];

    const filteredPhotos = activeFilter === 'portada' ? [] : photos.filter(photo => photo.category === activeFilter);
    
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
      }
    };

    const renderInmobiliariaGrid = () => {
      return (
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile 
            ? 'repeat(auto-fit, minmax(150px, 1fr))' 
            : 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: isMobile ? '1rem' : '1.5rem'
        }}>
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
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                aspectRatio: item.type === 'video' ? '9/16' : '1'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
              }}
              onMouseEnter={() => setHoveredPhoto(item.id.toString())}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              {item.type === 'video' ? (
                <div style={{ 
                  position: 'relative',
                  height: '100%',
                  width: '100%'
                }}>
                  <video
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover' as const
                    }}
                    controls
                    preload="metadata"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                  
                  <div style={{
                    position: 'absolute' as const,
                    top: isMobile ? '0.5rem' : '0.75rem',
                    right: isMobile ? '0.5rem' : '0.75rem',
                    background: 'rgba(239, 68, 68, 0.9)',
                    color: 'white',
                    padding: isMobile ? '0.2rem 0.5rem' : '0.25rem 0.75rem',
                    borderRadius: isMobile ? '0.75rem' : '1rem',
                    fontSize: isMobile ? '0.7rem' : '0.75rem',
                    fontWeight: 600,
                    backdropFilter: 'blur(10px)'
                  }}>
                    VIDEO
                  </div>
                  
                  <div 
                    style={{
                      position: 'absolute' as const,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                      color: 'white',
                      padding: isMobile ? '1rem' : '1.25rem',
                      transform: hoveredPhoto === item.id.toString() || isMobile ? 'translateY(0)' : 'translateY(100%)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <h4 style={{ 
                      margin: '0 0 0.5rem 0', 
                      fontSize: isMobile ? '1rem' : '1.1rem',
                      fontWeight: 600
                    }}>
                      {item.title}
                    </h4>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.85rem',
                      opacity: 0.9
                    }}>
                      <span>Inmobiliaria</span>
                      <span>📹</span>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <img 
                    src={item.src} 
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover' as const
                    }}
                  />
                  
                  <div style={{
                    position: 'absolute' as const,
                    top: isMobile ? '0.5rem' : '0.75rem',
                    right: isMobile ? '0.5rem' : '0.75rem',
                    background: 'rgba(59, 130, 246, 0.9)',
                    color: 'white',
                    padding: isMobile ? '0.2rem 0.5rem' : '0.25rem 0.75rem',
                    borderRadius: isMobile ? '0.75rem' : '1rem',
                    fontSize: isMobile ? '0.7rem' : '0.75rem',
                    fontWeight: 600,
                    textTransform: 'capitalize' as const
                  }}>
                    {item.category}
                  </div>
                  
                  <div 
                    style={{
                      position: 'absolute' as const,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                      color: 'white',
                      padding: isMobile ? '0.75rem' : '1rem',
                      transform: hoveredPhoto === item.id.toString() ? 'translateY(0)' : 'translateY(100%)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <h4 style={{ 
                      margin: 0, 
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      fontWeight: 600
                    }}>
                      {item.title}
                    </h4>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      );
    };

    const renderPortada = () => (
      <div>
        {Object.entries(portadaTandas).map(([tandaName, fotos], tandaIndex) => (
          <motion.div
            key={tandaName}
            style={{ marginBottom: isMobile ? '3rem' : '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: tandaIndex * 0.2 }}
          >
            <h3 style={{
              fontSize: isMobile ? '1.5rem' : '2.2rem',
              fontWeight: 700,
              color: '#2D3748',
              marginBottom: isMobile ? '1.5rem' : '2.5rem',
              textAlign: 'center',
              textTransform: 'capitalize'
            }}>
              {tandaName === 'naturaleza' ? 'Naturaleza' : 
              tandaName === 'bailarines' ? 'Y Lo aprendi de ti' : 
              tandaName === 'jeep' ? 'Jeep' :
              tandaName === 'norcasia' ? 'Norcasia' :
              tandaName === 'buenaventura' ? 'Buenaventura' :
              tandaName === 'murillo' ? 'Murillo' :
              'Otros'}
            </h3>

            {/* Grid especializado para las primeras 3 secciones */}
            {(tandaName === 'naturaleza' || tandaName === 'bailarines' || tandaName === 'jeep') ? (
              <div style={{
                columns: isMobile ? '2' : (tandaName === 'jeep' ? '3' : '4'),
                columnGap: isMobile ? '0.5rem' : '1rem',
                columnFill: 'balance'
              }}>
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
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                      display: 'inline-block',
                      width: '100%'
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: (tandaIndex * 0.2) + (index * 0.05) }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
                      zIndex: 10
                    }}
                    onMouseEnter={() => setHoveredPhoto(foto.id.toString())}
                    onMouseLeave={() => setHoveredPhoto(null)}
                  >
                    <img 
                      src={foto.src} 
                      alt={foto.title}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'cover' as const
                      }}
                    />
                    
                    <div style={{
                      position: 'absolute' as const,
                      top: isMobile ? '0.5rem' : '0.6rem',
                      right: isMobile ? '0.5rem' : '0.6rem',
                      background: tandaName === 'naturaleza' ? 'rgba(34, 197, 94, 0.9)' :
                                  tandaName === 'bailarines' ? 'rgba(168, 85, 247, 0.9)' :
                                  tandaName === 'jeep' ? 'rgba(249, 115, 22, 0.9)' :
                                  'rgba(156, 163, 175, 0.9)',
                      color: 'white',
                      padding: isMobile ? '0.2rem 0.5rem' : '0.25rem 0.6rem',
                      borderRadius: '0.75rem',
                      fontSize: isMobile ? '0.6rem' : '0.7rem',
                      fontWeight: 600,
                      textTransform: 'capitalize' as const,
                      backdropFilter: 'blur(10px)'
                    }}>
                      {tandaName === 'naturaleza' ? 'Naturaleza' : 
                       tandaName === 'bailarines' ? 'Retrato' : 
                       'Wallpaper'}
                    </div>
                    
                    <div 
                      style={{
                        position: 'absolute' as const,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
                        color: 'white',
                        padding: isMobile ? '0.75rem' : '1rem',
                        transform: hoveredPhoto === foto.id.toString() || isMobile ? 'translateY(0)' : 'translateY(100%)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <h4 style={{ 
                        margin: 0, 
                        fontSize: isMobile ? '0.8rem' : '0.9rem',
                        fontWeight: 600,
                        lineHeight: 1.2
                      }}>
                        {foto.title}
                      </h4>
                      {foto.size === 'large' && !isMobile && (
                        <p style={{
                          margin: '0.3rem 0 0 0',
                          fontSize: '0.75rem',
                          opacity: 0.9,
                          fontWeight: 400
                        }}>
                          Fotografía destacada
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: isMobile ? '0.75rem' : '1rem',
                gridAutoRows: 'min-content'
              }}>
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
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                      aspectRatio: '1'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <img 
                      src={foto.src} 
                      alt={foto.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover' as const
                      }}
                    />
                    
                    <div style={{
                      position: 'absolute' as const,
                      top: isMobile ? '0.4rem' : '0.6rem',
                      right: isMobile ? '0.4rem' : '0.6rem',
                      background: tandaName === 'norcasia' ? 'rgba(59, 130, 246, 0.9)' :
                                  tandaName === 'buenaventura' ? 'rgba(16, 185, 129, 0.9)' :
                                  tandaName === 'murillo' ? 'rgba(236, 72, 153, 0.9)' :
                                  'rgba(156, 163, 175, 0.9)',
                      color: 'white',
                      padding: isMobile ? '0.15rem 0.4rem' : '0.2rem 0.6rem',
                      borderRadius: isMobile ? '0.6rem' : '0.75rem',
                      fontSize: isMobile ? '0.6rem' : '0.7rem',
                      fontWeight: 600,
                      textTransform: 'capitalize' as const
                    }}>
                      {tandaName === 'norcasia' ? 'Norcasia' :
                      tandaName === 'buenaventura' ? 'Buenaventura' :
                      tandaName === 'murillo' ? 'Murillo' :
                      'Otros'}
                    </div>
                    
                    <div 
                      style={{
                        position: 'absolute' as const,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                        color: 'white',
                        padding: isMobile ? '0.6rem' : '0.8rem',
                        transform: hoveredPhoto === foto.id.toString() ? 'translateY(0)' : 'translateY(100%)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <h4 style={{ 
                        margin: 0, 
                        fontSize: isMobile ? '0.8rem' : '0.9rem',
                        fontWeight: 600
                      }}>
                        {foto.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    );
    // AGREGAR ESTE RETURN STATEMENT AQUÍ:
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
      
      <div style={filterStyles.filterContainer}>
        {filterCategories.map((category) => (
          <button
            key={category.id}
            style={{
              ...filterStyles.filterButton,
              ...(activeFilter === category.id ? filterStyles.filterButtonActive : {})
            }}
            onClick={() => setActiveFilter(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {activeFilter === 'portada' ? (
        renderPortada()
      ) : activeFilter === 'inmobiliaria' ? (
        renderInmobiliariaGrid()
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile 
            ? 'repeat(auto-fit, minmax(140px, 1fr))'
            : 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: isMobile ? '0.75rem' : '1rem'
        }}>
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
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                aspectRatio: '1'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
              }}
              onMouseEnter={() => setHoveredPhoto(photo.id.toString())}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              <img 
                src={photo.src} 
                alt={photo.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover' as const
                }}
              />
              
              <div style={{
                position: 'absolute' as const,
                top: isMobile ? '0.4rem' : '0.6rem',
                right: isMobile ? '0.4rem' : '0.6rem',
                background: 'rgba(59, 130, 246, 0.9)',
                color: 'white',
                padding: isMobile ? '0.15rem 0.4rem' : '0.2rem 0.6rem',
                borderRadius: isMobile ? '0.6rem' : '0.75rem',
                fontSize: isMobile ? '0.6rem' : '0.7rem',
                fontWeight: 600,
                textTransform: 'capitalize' as const
              }}>
                {photo.category}
              </div>
              
              <div 
                style={{
                  position: 'absolute' as const,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: 'white',
                  padding: isMobile ? '0.6rem' : '0.8rem',
                  transform: hoveredPhoto === photo.id.toString() ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <h4 style={{ 
                  margin: 0, 
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                  fontWeight: 600
                }}>
                  {photo.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  </section>
);
};

  // Productions Page
  const ProductionsPage = () => {
    const productions = [
      {
          id: 1,
          title: 'Carga Honor',
          role: 'Asistente de sonido documental Carga de honor',
          thumbnail: require('./utils/cargahonor.webp'),
          type: 'image',
          link: 'https://www.instagram.com/p/DIwwvTmywFO/'
        },
        {
          id: 2,
          title: 'Para Helena',
          role: 'Asistente de arte corto Para Helena',
          thumbnail: require('./utils/paraHelena.webp'),
          type: 'image',
          link: 'https://www.instagram.com/p/DC9rLKgvK2Y/'
        },
        {
          id: 3,
          title: 'Y lo aprendí de ti',
          role: 'Productora videoclip musical "Y lo aprendí de ti"',
          thumbnail: require('./utils/aprendideti.webp'),
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
                          height: isMobile ? '200px' : '350px',
                          objectFit: 'cover' as const
                        }}
                      />
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
                      <h3 style={{
                        fontSize: isMobile ? '1.2rem' : '1.4rem',
                        fontWeight: 600,
                        marginBottom: '0.75rem',
                        color: '#2D3748',
                        margin: '0 0 0.75rem 0'
                      }}>
                        {production.title}
                      </h3>
                      
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
      const ugcContent = [
        {
          id: 1,
          src: require('./utils/TODOS BLACK.mp4'),
          title: 'TODOS BLACK',
          type: 'video',
        },
        {
          id: 3,
          src: require('./utils/MASAJEADOR FRIO CALOR 2.mp4'),
          title: 'Masajeador Frío Calor',
          type: 'video',
        },
        {
          id: 4,
          src: require('./utils/Luces para bicicleta 3.mp4'),
          title: 'Luces para Bicicleta',
          type: 'video',
        },
        {
          id: 5,
          src: require('./utils/Lápiz láser facialb 2.mp4'),
          title: 'Lápiz Láser Facial',
          type: 'video',
        },
        {
          id: 6,
          src: require('./utils/Juguete pista de carros 3.mp4'),
          title: 'Juguete Pista de Carros',
          type: 'video',
        },
        {
          id: 7,
          src: require('./utils/Glucometro 1.mp4'),
          title: 'Glucómetro',
          type: 'video',
        }
      ];

      const getUGCGridStyle = () => {
        if (isMobile) {
          return {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
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
              Contenido UGC
            </motion.h2>
            
            <div style={getUGCGridStyle()}>
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
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                    aspectRatio: '9/16'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <div style={{ 
                    position: 'relative',
                    height: '100%',
                    width: '100%'
                  }}>
                    <video
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover' as const
                      }}
                      controls
                      preload="metadata"
                      playsInline // Importante para iOS
                      webkit-playsinline="true" // Para compatibilidad con Safari
                      muted
                      controlsList="nodownload" // Opcional: ocultar opción de descarga
                    >
                      <source src={content.src} type="video/mp4" />
                      Tu navegador no soporta la reproducción de videos.
                    </video>
                    
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                      color: 'white',
                      padding: isMobile ? '1rem' : '1.25rem'
                    }}>
                      <h3 style={{
                        fontSize: isMobile ? '1rem' : '1.1rem',
                        fontWeight: 600,
                        marginBottom: '0.5rem',
                        margin: '0 0 0.5rem 0'
                      }}>
                        {content.title}
                      </h3>
                      
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.85rem',
                        opacity: 0.9
                      }}>
                        <span>UGC Content</span>
                        <span>📱</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Call to Action */}
            <motion.div
              style={{
                textAlign: 'center',
                marginTop: isMobile ? '2rem' : '3rem'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button
                onClick={() => setActiveSection('contact')}
                style={{
                  ...styles.ctaButton,
                  fontSize: isMobile ? '1rem' : '1.1rem'
                }}
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
      )};

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
