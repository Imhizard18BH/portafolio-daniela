import { Instagram } from 'lucide-react';
import { ComponentType } from 'react';

export type SocialLink = {
  icon: ComponentType<{ size?: number; style?: React.CSSProperties }>;
  url: string;
  label: string;
};

export const socialLinks: SocialLink[] = [
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

export const CONTACT_EMAIL = 'daniela.angel.6273@gmail.com';
