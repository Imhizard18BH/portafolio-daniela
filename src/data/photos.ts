export type Photo = {
  id: number;
  src: string;
  title: string;
  category?: string;
  type?: 'image' | 'video';
  size?: 'small' | 'medium' | 'large';
};

export type PortadaTandas = {
  naturaleza: Photo[];
  bailarines: Photo[];
  jeep: Photo[];
  norcasia: Photo[];
  buenaventura: Photo[];
  murillo: Photo[];
  otros: Photo[];
};

export const portadaTandas: PortadaTandas = {
  naturaleza: [
    { id: 1, src: require('../utils/Aguila.webp'), title: 'ukumari', size: 'large' },
    { id: 2, src: require('../utils/cebras.webp'), title: 'ukumari', size: 'small' },
    { id: 3, src: require('../utils/elefante1.webp'), title: 'ukumari', size: 'medium' },
    { id: 4, src: require('../utils/elefante2.webp'), title: 'ukumari', size: 'small' },
    { id: 5, src: require('../utils/elefante3.webp'), title: 'ukumari', size: 'large' },
    { id: 6, src: require('../utils/elefantes.webp'), title: 'ukumari', size: 'medium' },
    { id: 7, src: require('../utils/girafa.webp'), title: 'ukumari', size: 'large' },
    { id: 8, src: require('../utils/lemur.webp'), title: 'ukumari', size: 'small' },
    { id: 9, src: require('../utils/loro rojo.webp'), title: 'ukumari', size: 'medium' },
    { id: 10, src: require('../utils/loros1.webp'), title: 'ukumari', size: 'small' },
    { id: 11, src: require('../utils/loros2.webp'), title: 'ukumari', size: 'small' },
    { id: 12, src: require('../utils/mono.webp'), title: 'ukumari', size: 'large' },
    { id: 13, src: require('../utils/mono2.webp'), title: 'ukumari', size: 'large' },
    { id: 14, src: require('../utils/mono3.webp'), title: 'ukumari', size: 'small' },
    { id: 15, src: require('../utils/toros.webp'), title: 'ukumari', size: 'large' },
    { id: 16, src: require('../utils/zuricata.webp'), title: 'ukumari', size: 'medium' },
    { id: 17, src: require('../utils/barranquero1.jpeg'), title: 'ukumari', size: 'medium' },
    { id: 18, src: require('../utils/barranquero2.jpeg'), title: 'ukumari', size: 'medium' },
    { id: 19, src: require('../utils/colibrie.jpeg'), title: 'ukumari', size: 'medium' }
  ],
  bailarines: [
    { id: 17, src: require('../utils/ana1.webp'), title: 'Y lo aprendi de ti', size: 'large' },
    { id: 18, src: require('../utils/ana2.webp'), title: 'Y lo aprendi de ti', size: 'medium' },
    { id: 19, src: require('../utils/ana3.webp'), title: 'Y lo aprendi de ti', size: 'small' },
    { id: 20, src: require('../utils/ana4.webp'), title: 'Y lo aprendi de ti', size: 'medium' },
    { id: 21, src: require('../utils/ana5.webp'), title: 'Y lo aprendi de ti', size: 'large' },
    { id: 22, src: require('../utils/ana6.webp'), title: 'Y lo aprendi de ti', size: 'small' },
    { id: 23, src: require('../utils/ana7.webp'), title: 'Y lo aprendi de ti', size: 'medium' },
    { id: 24, src: require('../utils/bailarin.webp'), title: 'Y lo aprendi de ti', size: 'large' },
    { id: 25, src: require('../utils/bailarina.webp'), title: 'Y lo aprendi de ti', size: 'medium' },
    { id: 26, src: require('../utils/baileluna.webp'), title: 'Y lo aprendi de ti', size: 'medium' },
    { id: 27, src: require('../utils/trio.webp'), title: 'Y lo aprendi de ti', size: 'large' }
  ],
  jeep: [
    { id: 28, src: require('../utils/burro.webp'), title: 'Yipao', size: 'medium' },
    { id: 29, src: require('../utils/cafe1.webp'), title: 'Yipao', size: 'small' },
    { id: 30, src: require('../utils/cafe2.webp'), title: 'Yipao', size: 'large' },
    { id: 31, src: require('../utils/cafe3.webp'), title: 'Yipao', size: 'medium' },
    { id: 32, src: require('../utils/costales.webp'), title: 'Yipao', size: 'small' },
    { id: 33, src: require('../utils/puente.webp'), title: 'Viaje', size: 'large' }
  ],
  norcasia: [
    { id: 34, src: require('../utils/canoa.webp'), title: 'Norcasia', size: 'large' },
    { id: 35, src: require('../utils/norcasia.webp'), title: 'Norcasia', size: 'large' }
  ],
  buenaventura: [
    { id: 36, src: require('../utils/canoa2.webp'), title: 'Buenaventura', size: 'medium' },
    { id: 37, src: require('../utils/pescador.webp'), title: 'Buenaventura', size: 'large' },
    { id: 38, src: require('../utils/pescador2.webp'), title: 'Buenaventura', size: 'medium' },
    { id: 39, src: require('../utils/aves.webp'), title: 'Buenaventura', size: 'large' }
  ],
  murillo: [
    { id: 40, src: require('../utils/ciclista.webp'), title: 'murillo', size: 'large' },
    { id: 41, src: require('../utils/frailejon1.webp'), title: 'murillo', size: 'medium' },
    { id: 42, src: require('../utils/frailejon2.webp'), title: 'murillo', size: 'small' },
    { id: 43, src: require('../utils/murillo.webp'), title: 'murillo', size: 'large' }
  ],
  otros: [
    { id: 44, src: require('../utils/desierto.webp'), title: 'Tatacoa', size: 'large' },
    { id: 45, src: require('../utils/niña.webp'), title: 'MiraValle', size: 'medium' },
    { id: 46, src: require('../utils/Foto Guarda.webp'), title: 'Retrato', size: 'small' },
    { id: 47, src: require('../utils/iglesia.webp'), title: 'Pijao', size: 'large' },
    { id: 48, src: require('../utils/iglesia2.webp'), title: 'Jardin', size: 'medium' },
    { id: 49, src: require('../utils/iglesia3.webp'), title: 'Manizales', size: 'small' },
    { id: 50, src: require('../utils/lights1.jpeg'), title: 'Manizales', size: 'medium' },
    { id: 51, src: require('../utils/lights2.jpeg'), title: 'Manizales', size: 'medium' }
  ]
};

export const photos: Photo[] = [
  // RETRATO
  { id: 101, src: require('../utils/bailarina.webp'), category: 'retrato', title: 'Bailarina' },
  { id: 102, src: require('../utils/Foto Guarda.webp'), category: 'retrato', title: 'Foto Guarda' },
  { id: 103, src: require('../utils/niña.webp'), category: 'retrato', title: 'Niña' },
  { id: 104, src: require('../utils/baileluna.webp'), category: 'retrato', title: 'Baile Luna' },
  { id: 105, src: require('../utils/trio.webp'), category: 'retrato', title: 'Trío' },
  { id: 106, src: require('../utils/ana1.webp'), category: 'retrato', title: 'Ana 1' },
  { id: 107, src: require('../utils/ana2.webp'), category: 'retrato', title: 'Ana 2' },
  { id: 108, src: require('../utils/ana3.webp'), category: 'retrato', title: 'Ana 3' },
  { id: 109, src: require('../utils/ana4.webp'), category: 'retrato', title: 'Ana 4' },
  { id: 110, src: require('../utils/ana5.webp'), category: 'retrato', title: 'Ana 5' },
  { id: 111, src: require('../utils/ana6.webp'), category: 'retrato', title: 'Ana 6' },
  { id: 112, src: require('../utils/ana7.webp'), category: 'retrato', title: 'Ana 7' },
  { id: 113, src: require('../utils/bailarin.webp'), category: 'retrato', title: 'Bailarín' },

  // NATURALEZA
  { id: 201, src: require('../utils/canoa.webp'), category: 'naturaleza', title: 'Canoa' },
  { id: 202, src: require('../utils/canoa2.webp'), category: 'naturaleza', title: 'Canoa 2' },
  { id: 203, src: require('../utils/desierto.webp'), category: 'naturaleza', title: 'Desierto' },
  { id: 204, src: require('../utils/norcasia.webp'), category: 'naturaleza', title: 'Norcasia' },
  { id: 205, src: require('../utils/frailejon1.webp'), category: 'naturaleza', title: 'Frailejón 1' },
  { id: 206, src: require('../utils/frailejon2.webp'), category: 'naturaleza', title: 'Frailejón 2' },
  { id: 207, src: require('../utils/Aguila.webp'), category: 'naturaleza', title: 'Águila' },
  { id: 208, src: require('../utils/aves.webp'), category: 'naturaleza', title: 'Aves' },
  { id: 209, src: require('../utils/cebras.webp'), category: 'naturaleza', title: 'Cebras' },
  { id: 210, src: require('../utils/elefante1.webp'), category: 'naturaleza', title: 'Elefante 1' },
  { id: 211, src: require('../utils/elefante2.webp'), category: 'naturaleza', title: 'Elefante 2' },
  { id: 212, src: require('../utils/elefante3.webp'), category: 'naturaleza', title: 'Elefante 3' },
  { id: 213, src: require('../utils/elefantes.webp'), category: 'naturaleza', title: 'Elefantes' },
  { id: 214, src: require('../utils/girafa.webp'), category: 'naturaleza', title: 'Jirafa' },
  { id: 215, src: require('../utils/lemur.webp'), category: 'naturaleza', title: 'Lemur' },
  { id: 216, src: require('../utils/loro rojo.webp'), category: 'naturaleza', title: 'Loro Rojo' },
  { id: 217, src: require('../utils/loros1.webp'), category: 'naturaleza', title: 'Loros 1' },
  { id: 218, src: require('../utils/loros2.webp'), category: 'naturaleza', title: 'Loros 2' },
  { id: 219, src: require('../utils/mono.webp'), category: 'naturaleza', title: 'Mono' },
  { id: 220, src: require('../utils/mono2.webp'), category: 'naturaleza', title: 'Mono 2' },
  { id: 221, src: require('../utils/mono3.webp'), category: 'naturaleza', title: 'Mono 3' },
  { id: 222, src: require('../utils/toros.webp'), category: 'naturaleza', title: 'Toros' },
  { id: 223, src: require('../utils/zuricata.webp'), category: 'naturaleza', title: 'Suricata' },

  // INMOBILIARIA
  { id: 301, src: require('../utils/Cocina.webp'), category: 'inmobiliaria', title: 'Cocina' },
  { id: 302, src: require('../utils/Comedor.webp'), category: 'inmobiliaria', title: 'Comedor' },
  { id: 303, src: require('../utils/Foto1.webp'), category: 'inmobiliaria', title: 'Interior Moderno' },
  { id: 304, src: require('../utils/Foto13.webp'), category: 'inmobiliaria', title: 'Espacio Elegante' },
  { id: 305, src: require('../utils/Piscina .webp'), category: 'inmobiliaria', title: 'Piscina' },
  {
    id: 306,
    src: 'https://res.cloudinary.com/dy4gf9krq/video/upload/v1753304742/Video_belmonte_1_l2cxoy.mov',
    category: 'inmobiliaria',
    title: 'Sala Moderna',
    type: 'video'
  },

  // WALLPAPER
  { id: 401, src: require('../utils/ciclista.webp'), category: 'wallpaper', title: 'Ciclista' },
  { id: 402, src: require('../utils/iglesia.webp'), category: 'wallpaper', title: 'Iglesia' },
  { id: 403, src: require('../utils/iglesia2.webp'), category: 'wallpaper', title: 'Iglesia 2' },
  { id: 404, src: require('../utils/iglesia3.webp'), category: 'wallpaper', title: 'Iglesia 3' },
  { id: 405, src: require('../utils/trasteo.webp'), category: 'wallpaper', title: 'Trasteo' },
  { id: 406, src: require('../utils/pescador.webp'), category: 'wallpaper', title: 'Pescador' },
  { id: 407, src: require('../utils/burro.webp'), category: 'wallpaper', title: 'Burro' },
  { id: 408, src: require('../utils/cafe1.webp'), category: 'wallpaper', title: 'Café 1' },
  { id: 409, src: require('../utils/cafe2.webp'), category: 'wallpaper', title: 'Café 2' },
  { id: 410, src: require('../utils/cafe3.webp'), category: 'wallpaper', title: 'Café 3' },
  { id: 411, src: require('../utils/costales.webp'), category: 'wallpaper', title: 'Costales' },
  { id: 412, src: require('../utils/puente.webp'), category: 'wallpaper', title: 'Puente' }
];

export const filterCategories = [
  { id: 'portada', label: 'Portada' },
  { id: 'wallpaper', label: 'Wallpaper' },
  { id: 'retrato', label: 'Retrato' },
  { id: 'naturaleza', label: 'Naturaleza' },
  { id: 'inmobiliaria', label: 'Inmobiliaria' }
];

export const tandaLabels: Record<keyof PortadaTandas, string> = {
  naturaleza: 'Naturaleza',
  bailarines: 'Y Lo aprendi de ti',
  jeep: 'Jeep',
  norcasia: 'Norcasia',
  buenaventura: 'Buenaventura',
  murillo: 'Murillo',
  otros: 'Otros'
};

export const tandaBadgeLabel: Record<keyof PortadaTandas, string> = {
  naturaleza: 'Naturaleza',
  bailarines: 'Retrato',
  jeep: 'Wallpaper',
  norcasia: 'Norcasia',
  buenaventura: 'Buenaventura',
  murillo: 'Murillo',
  otros: 'Otros'
};

export const tandaBadgeColor: Record<keyof PortadaTandas, string> = {
  naturaleza: 'rgba(34, 197, 94, 0.9)',
  bailarines: 'rgba(168, 85, 247, 0.9)',
  jeep: 'rgba(249, 115, 22, 0.9)',
  norcasia: 'rgba(59, 130, 246, 0.9)',
  buenaventura: 'rgba(16, 185, 129, 0.9)',
  murillo: 'rgba(236, 72, 153, 0.9)',
  otros: 'rgba(156, 163, 175, 0.9)'
};
