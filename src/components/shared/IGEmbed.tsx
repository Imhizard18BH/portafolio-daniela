import React from 'react';
import { colors } from '../../styles/theme';

type IGEmbedProps = {
  embedUrl: string;
  height?: number;
  title?: string;
};

export const IGEmbed: React.FC<IGEmbedProps> = ({
  embedUrl,
  height = 620,
  title = 'Instagram embed'
}) => (
  <div
    style={{
      background: colors.surfaceSoft,
      borderRadius: '0.75rem',
      overflow: 'hidden',
      border: `1px solid ${colors.border}`
    }}
  >
    <iframe
      src={embedUrl}
      title={title}
      width="100%"
      height={height}
      loading="lazy"
      frameBorder={0}
      scrolling="no"
      allowTransparency
      allow="encrypted-media"
      style={{ display: 'block', border: 'none' }}
    />
  </div>
);
