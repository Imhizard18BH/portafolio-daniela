import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar, NavItem } from './components/Navbar';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { PhotographyPage } from './components/sections/PhotographyPage';
import { ProductionsPage } from './components/sections/ProductionsPage';
import { UGCPage } from './components/sections/UGCPage';
import { ExperiencePage } from './components/sections/ExperiencePage';
import { ContactPage } from './components/sections/ContactPage';
import { fonts, gradients } from './styles/theme';

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Inicio' },
  { id: 'photography', label: 'Fotografía' },
  { id: 'productions', label: 'Producciones' },
  { id: 'ugc', label: 'UGC' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'contact', label: 'Contacto' }
];

const containerStyle: React.CSSProperties = {
  minHeight: '100vh',
  background: gradients.background,
  fontFamily: fonts.sans
};

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'photography':
        return <PhotographyPage />;
      case 'productions':
        return <ProductionsPage />;
      case 'ugc':
        return <UGCPage onContactClick={() => setActiveSection('contact')} />;
      case 'experience':
        return <ExperiencePage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <>
            <Hero onCtaClick={() => setActiveSection('photography')} />
            <Gallery onNavigate={setActiveSection} />
          </>
        );
    }
  };

  return (
    <div style={containerStyle}>
      <Navbar items={NAV_ITEMS} activeSection={activeSection} onSectionChange={setActiveSection} />
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

export default Portfolio;
