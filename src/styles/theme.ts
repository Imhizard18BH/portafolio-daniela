export const colors = {
  primary: '#667eea',
  primaryDark: '#764ba2',
  accent: '#B19CD9',
  text: '#2D3748',
  textMuted: '#718096',
  textSoft: '#4A5568',
  border: '#E2E8F0',
  surface: '#ffffff',
  surfaceSoft: '#f7fafc'
};

export const gradients = {
  primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  background: 'linear-gradient(135deg, #b6c8a9 0%, #a8edea 50%, #fed6e3 100%)',
  accent: 'linear-gradient(135deg, #B19CD9 0%, #FFB6C1 100%)',
  award: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  overlay: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
  overlayDeep: 'linear-gradient(transparent, rgba(0,0,0,0.85))'
};

export const shadows = {
  card: '0 10px 30px rgba(0, 0, 0, 0.1)',
  cardHover: '0 12px 35px rgba(0, 0, 0, 0.15)',
  soft: '0 4px 15px rgba(0, 0, 0, 0.1)',
  micro: '0 2px 8px rgba(0, 0, 0, 0.1)'
};

export const fonts = {
  sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
};

export const gradientText = {
  background: gradients.primary,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
} as const;

export const sectionStyle = (isMobile: boolean) => ({
  padding: isMobile ? '3rem 1rem' : '5rem 2rem',
  background: 'transparent'
});

export const containerStyle = {
  maxWidth: '1200px',
  margin: '2rem auto',  
};

export const sectionTitleStyle = (isMobile: boolean) => ({
  fontSize: isMobile ? '2rem' : '2.5rem',
  fontWeight: 800,
  textAlign: 'center' as const,
  marginBottom: isMobile ? '2rem' : '3rem',
  color: colors.text
});

export const ctaButtonStyle = (isMobile: boolean) => ({
  background: gradients.primary,
  color: 'white',
  padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
  border: 'none',
  borderRadius: '2rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  fontSize: isMobile ? '1rem' : '1.1rem'
});
