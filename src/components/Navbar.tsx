import React from 'react';
import { colors, gradientText } from '../styles/theme';

export type NavItem = {
  id: string;
  label: string;
};

type NavbarProps = {
  items: NavItem[];
  activeSection: string;
  onSectionChange: (id: string) => void;
};

const styles = {
  navbar: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '0.75rem 1rem'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column' as const,
    gap: '0.75rem'
  },
  logo: {
    fontSize: '1.2rem',
    fontWeight: 700,
    ...gradientText
  },
  links: {
    display: 'flex',
    gap: '0.5rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    flexWrap: 'wrap' as const,
    justifyContent: 'center'
  },
  link: {
    background: 'none',
    border: 'none',
    color: colors.text,
    fontWeight: 500,
    cursor: 'pointer',
    padding: '0.4rem 0.8rem',
    borderRadius: '0.5rem',
    transition: 'all 0.3s ease',
    fontSize: '0.8rem'
  },
  linkActive: {
    background: colors.accent,
    color: 'white',
    transform: 'translateY(-2px)'
  }
};

export const Navbar: React.FC<NavbarProps> = ({ items, activeSection, onSectionChange }) => (
  <nav style={styles.navbar}>
    <div style={styles.container}>
      <div style={styles.logo}>Maria Daniela Angel Posada</div>
      <ul style={styles.links}>
        {items.map((item) => (
          <li key={item.id}>
            <button
              style={{
                ...styles.link,
                ...(activeSection === item.id ? styles.linkActive : {})
              }}
              onClick={() => onSectionChange(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);
