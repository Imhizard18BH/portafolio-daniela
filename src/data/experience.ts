export type Stat = {
  label: string;
  value: string;
  hint: string;
};

export type IGVideoRef = {
  url: string;
  label: string;
  highlight?: boolean;
};

export type Recognition = {
  titulo: string;
  premio: string;
  entidad: string;
  embedUrl: string;
  descripcion: string;
  tipo: 'Ganadora' ;
};

export const consejoVideos: IGVideoRef[] = [
  { url: 'https://www.instagram.com/p/DVcZssMEQ3m/', label: 'Reel destacado' },
  { url: 'https://www.instagram.com/p/DWrTthnR3ox/', label: 'Reel destacado' },
  { url: 'https://www.instagram.com/p/DYufmc8RC_p/', label: 'Reel destacado' },
  { url: 'https://www.instagram.com/p/DZfZU5qOADK/', label: 'Reel destacado' }
];

export const consejoStats: Stat[] = [
  { label: 'Views totales', value: '85K+', hint: 'Enero → Junio 2026' },
  { label: 'Nuevos seguidores', value: '+81', hint: 'desde diciembre' },
  { label: 'Contenido publicado', value: '60+', hint: '19 reels · 41 posts' },
  { label: 'Alcance no-seguidores', value: 'hasta 75%', hint: 'de las views' }
];

export type MonthlyMetric = {
  month: string;
  year: number;
  views: string;
  viewsGrowth?: string;
  viewsGrowthLabel?: string;
  nonFollowerViews: string;
  nonFollowerViewsGrowth?: string;
  nonFollowerViewsGrowthLabel?: string;
  followers: number;
  followersGrowth?: number;
  followersGrowthLabel?: string;
  reels: number;
  posts: number;
};

export const consejoMonthlyMetrics: MonthlyMetric[] = [
  {
    month: 'Enero',
    year: 2026,
    views: '13K',
    viewsGrowth: '+114%',
    viewsGrowthLabel: 'vs. diciembre',
    nonFollowerViews: '45%',
    nonFollowerViewsGrowth: '+82%',
    nonFollowerViewsGrowthLabel: 'vs. diciembre',
    followers: 908,
    followersGrowth: 6,
    followersGrowthLabel: 'vs. diciembre',
    reels: 3,
    posts: 8
  },
  {
    month: 'Marzo',
    year: 2026,
    views: '20K',
    viewsGrowth: '+6%',
    viewsGrowthLabel: 'vs. febrero',
    nonFollowerViews: '68%',
    nonFollowerViewsGrowth: '+28%',
    nonFollowerViewsGrowthLabel: 'vs. febrero',
    followers: 939,
    followersGrowth: 19,
    followersGrowthLabel: 'vs. febrero',
    reels: 3,
    posts: 7
  },
  {
    month: 'Abril',
    year: 2026,
    views: '25K',
    viewsGrowth: '+28%',
    viewsGrowthLabel: 'vs. marzo',
    nonFollowerViews: '75%',
    nonFollowerViewsGrowth: '+41%',
    nonFollowerViewsGrowthLabel: 'vs. marzo',
    followers: 950,
    followersGrowth: 10,
    followersGrowthLabel: 'vs. marzo',
    reels: 2,
    posts: 8
  },
  {
    month: 'Mayo',
    year: 2026,
    views: '10K',
    nonFollowerViews: '46%',
    followers: 962,
    followersGrowth: 12,
    followersGrowthLabel: 'vs. abril',
    reels: 5,
    posts: 10
  },
  {
    month: 'Junio',
    year: 2026,
    views: '17K',
    viewsGrowth: '+67%',
    viewsGrowthLabel: 'vs. mayo',
    nonFollowerViews: '56%',
    nonFollowerViewsGrowth: '+100%',
    nonFollowerViewsGrowthLabel: 'vs. mayo',
    followers: 977,
    followersGrowth: 12,
    followersGrowthLabel: 'vs. mayo',
    reels: 6,
    posts: 8
  }
];

export const viralReels: string[] = [
  'https://www.instagram.com/p/DaLHeqFRV2n/',
  'https://www.instagram.com/p/DaDrpvixfBU/',
  'https://www.instagram.com/p/DaD2JW3kURT/',
  'https://www.instagram.com/p/DWhkqaPhZye/',
  'https://www.instagram.com/p/DZ8B9igREoj/',
  'https://www.instagram.com/p/DY3K25IRSv8/',
  'https://www.instagram.com/p/DVHns3oEayk/',
  'https://www.instagram.com/p/DaYC7uVxzzD/',
  'https://www.instagram.com/p/DYGXsUlRP2H/'
];

export const doncelStats: Stat[] = [
  { label: 'Views totales', value: '67K+', hint: 'Enero → Junio 2026' },
  { label: 'Nuevos seguidores', value: '+27', hint: 'desde diciembre' },
  { label: 'Contenido publicado', value: '31', hint: '18 reels · 13 posts' },
  { label: 'Alcance no-seguidores', value: 'hasta 56%', hint: 'de las views' }
];

export const doncelMonthlyMetrics: MonthlyMetric[] = [
  {
    month: 'Enero',
    year: 2026,
    views: '4K',
    viewsGrowth: '+35%',
    viewsGrowthLabel: 'vs. diciembre',
    nonFollowerViews: '30%',
    followers: 2088,
    followersGrowth: 8,
    followersGrowthLabel: 'vs. diciembre',
    reels: 1,
    posts: 2
  },
  {
    month: 'Febrero',
    year: 2026,
    views: '8K',
    viewsGrowth: '+100%',
    viewsGrowthLabel: 'vs. enero',
    nonFollowerViews: '40%',
    nonFollowerViewsGrowth: '+33%',
    nonFollowerViewsGrowthLabel: 'vs. enero',
    followers: 2094,
    followersGrowth: 6,
    followersGrowthLabel: 'vs. enero',
    reels: 1,
    posts: 2
  },
  {
    month: 'Marzo',
    year: 2026,
    views: '11K',
    viewsGrowth: '+37%',
    viewsGrowthLabel: 'vs. febrero',
    nonFollowerViews: '56%',
    nonFollowerViewsGrowth: '+40%',
    nonFollowerViewsGrowthLabel: 'vs. febrero',
    followers: 2100,
    followersGrowth: 6,
    followersGrowthLabel: 'vs. febrero',
    reels: 1,
    posts: 1
  },
  {
    month: 'Abril',
    year: 2026,
    views: '13K',
    viewsGrowth: '+17%',
    viewsGrowthLabel: 'vs. marzo',
    nonFollowerViews: '39%',
    followers: 2100,
    followersGrowth: 2,
    followersGrowthLabel: 'vs. marzo',
    reels: 2,
    posts: 4
  },
  {
    month: 'Mayo',
    year: 2026,
    views: '20K',
    viewsGrowth: '+47%',
    viewsGrowthLabel: 'vs. abril',
    nonFollowerViews: '41%',
    nonFollowerViewsGrowth: '+55%',
    nonFollowerViewsGrowthLabel: 'vs. abril',
    followers: 2100,
    followersGrowth: 2,
    followersGrowthLabel: 'vs. abril',
    reels: 8,
    posts: 2
  },
  {
    month: 'Junio',
    year: 2026,
    views: '11K',
    nonFollowerViews: '41%',
    followers: 2100,
    followersGrowth: 3,
    followersGrowthLabel: 'vs. mayo',
    reels: 5,
    posts: 2
  }
];

export const doncelFeaturedPosts: string[] = [
  'https://www.instagram.com/p/DUWDh7mFlfF/',
  'https://www.instagram.com/p/DY5uz16lhS_/',
  'https://www.instagram.com/p/DVPhuw8Fmhi/'
];

export const alcaldiaFeaturedPosts: string[] = [
  'https://www.instagram.com/p/DS0EQlgEcsC/',
  'https://www.instagram.com/p/DRNOOXGkUX4/',
  'https://www.instagram.com/p/DRId-QJEkrn/',
  'https://www.instagram.com/p/DQm-FaGEnBE/'
];

export const alcaldiaLogros: string[] = [
  'Liderazgo del proyecto "Quédate y enamórate de Calarcá"',
  'Continuidad y expansión de una campaña municipal de gran alcance',
  'Producción de contenido audiovisual promocional del municipio',
  'Fortalecimiento de la imagen institucional en redes sociales',
  'Trabajo directo con la administración local en comunicación estratégica'
];

export const consejoLogros: string[] = [
  'Rediseño completo de la identidad visual y estilo gráfico de la marca',
  'Diseño y gestión de la parrilla de contenidos mensual',
  'Edición de video para reels institucionales y coberturas de sesión',
  'Gestión mediática y acompañamiento comunicativo a concejales',
  'Consolidación de un formato de reels con voz propia del Concejo'
];

export const doncelLogros: string[] = [
  'Estrategia de comunicación personal del concejal en redes',
  'Producción y edición de contenido político para audiencias locales',
  'Cobertura de sesiones y actividades legislativas',
  'Construcción de vocería digital cercana al ciudadano'
];

export const recognitions: Recognition[] = [
  {
    titulo: 'Mejor Magazín',
    premio: 'Premios Corte Final',
    entidad: 'Universidad Católica de Pereira',
    embedUrl: 'https://www.instagram.com/p/C61D_0KrJt-/embed/',
    descripcion:
      'Reconocimiento como mejor magazín en los Premios Corte Final, otorgado por la Universidad Católica de Pereira.',
    tipo: 'Ganadora'
  },
  {
    titulo: 'Mejor Videoclip',
    premio: 'Premios Te Muestra',
    entidad: 'Universidad del Quindío',
    embedUrl: 'https://www.instagram.com/p/DVWMJ4mkYWF/embed/',
    descripcion:
      'Ganadora a mejor videoclip en los Premios Te Muestra, otorgados por la Universidad del Quindío.',
    tipo: 'Ganadora'
  }
];
