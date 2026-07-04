export type Production = {
  id: number;
  title: string;
  role: string;
  thumbnail: string;
  type: 'image' | 'video';
  link?: string;
};

export const productions: Production[] = [
  {
    id: 1,
    title: 'Carga Honor',
    role: 'Asistente de sonido documental Carga de honor',
    thumbnail: require('../utils/cargahonor.webp'),
    type: 'image',
    link: 'https://www.instagram.com/p/DIwwvTmywFO/'
  },
  {
    id: 2,
    title: 'Para Helena',
    role: 'Asistente de arte corto Para Helena',
    thumbnail: require('../utils/paraHelena.webp'),
    type: 'image',
    link: 'https://www.instagram.com/p/DC9rLKgvK2Y/'
  },
  {
    id: 3,
    title: 'Y lo aprendí de ti',
    role: 'Productora videoclip musical "Y lo aprendí de ti"',
    thumbnail: require('../utils/aprendideti.webp'),
    type: 'image',
    link: 'https://www.instagram.com/p/DJppsfjRUP0/'
  }
];
