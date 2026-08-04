// Sanity document shapes
export type PortableTextBlock = any; // simplified for frontend mock

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  color?: string; // optional per-category color override
}

export interface Author {
  _id: string;
  name: string;
  bio?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  featuredImage: { url: string; alt: string };
  category: Category;
  author: Author;
  publishedAt: string; // ISO date
  body: PortableTextBlock[]; // portable text
  lang: 'es' | 'en';
}

export const author: Author = {
  _id: "author-1",
  name: "Carlos Rivera",
  bio: "Periodista, desarrollador y escritor. Explorando la intersección entre la tecnología, las ciudades y la cultura contemporánea."
};

export const categories: Record<string, Category> = {
  cultura: { _id: "cat-1", title: "Cultura", slug: { current: "cultura" } },
  tecnologia: { _id: "cat-2", title: "Tecnología", slug: { current: "tecnologia" } },
  literatura: { _id: "cat-3", title: "Literatura", slug: { current: "literatura" } },
  ciudad: { _id: "cat-4", title: "Ciudad", slug: { current: "ciudad" } },
  opinion: { _id: "cat-5", title: "Opinión", slug: { current: "opinion" } }
};

export const mockPosts: Post[] = [
  {
    _id: "post-1",
    title: "El declive de la ciudad peatonal en la era del viaje algorítmico",
    slug: { current: "declive-ciudad-peatonal" },
    excerpt: "Cómo las aplicaciones de navegación están rediseñando sutilmente nuestras ciudades y erosionando la experiencia del paseante ciego.",
    featuredImage: { 
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80", 
      alt: "Ciudad vista desde arriba" 
    },
    category: categories.ciudad,
    author,
    publishedAt: "2024-05-12T08:00:00Z",
    lang: "es",
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'La ciudad moderna fue diseñada para perderse. O al menos, eso creían los flâneurs del siglo XIX. Hoy, perderse requiere un esfuerzo activo. Un acto de rebeldía.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'La tiranía de la eficiencia' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Cuando delegamos nuestra navegación a un algoritmo, no solo perdemos el sentido de la orientación, sino la posibilidad del descubrimiento.' }] },
      { _type: 'block', style: 'blockquote', children: [{ _type: 'span', text: '"La línea recta es la ruina del explorador urbano. Un mapa digital no nos muestra la ciudad, nos muestra un túnel hacia nuestro destino."' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Deberíamos reconsiderar el valor de la fricción en nuestra experiencia diaria.' }] }
    ]
  },
  {
    _id: "post-2",
    title: "El fin de la memoria escrita: IA y la externalización del pensamiento",
    slug: { current: "fin-memoria-escrita-ia" },
    excerpt: "Delegar la redacción a modelos de lenguaje no es solo una cuestión de pereza; es una reconfiguración de cómo estructuramos la realidad.",
    featuredImage: { 
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80", 
      alt: "Ordenador y tecnología" 
    },
    category: categories.tecnologia,
    author,
    publishedAt: "2024-05-10T14:30:00Z",
    lang: "es",
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Escribir no es registrar el pensamiento previo; escribir es el acto mismo de pensar. Cuando delegamos este acto, delegamos nuestra agencia cognitiva.' }] }
    ]
  },
  {
    _id: "post-3",
    title: "Borges y la base de datos infinita",
    slug: { current: "borges-y-base-de-datos" },
    excerpt: "Por qué La Biblioteca de Babel sigue siendo la metáfora más precisa para entender Internet y nuestro pánico al ruido de la información.",
    featuredImage: { 
      url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80", 
      alt: "Libros y literatura" 
    },
    category: categories.literatura,
    author,
    publishedAt: "2024-05-08T09:15:00Z",
    lang: "es",
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'El problema de la biblioteca total no es la falta de respuestas, sino la incapacidad de distinguir la verdad del ruido.' }] }
    ]
  },
  {
    _id: "post-4",
    title: "La estética del aburrimiento",
    slug: { current: "estetica-del-aburrimiento" },
    excerpt: "En defensa de los espacios vacíos, las interfaces crudas y el silencio visual en una era de saturación hiper-estimulante.",
    featuredImage: { 
      url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=80", 
      alt: "Cultura y calma" 
    },
    category: categories.cultura,
    author,
    publishedAt: "2024-05-05T11:00:00Z",
    lang: "es",
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'El diseño moderno tiene terror al vacío. Cada pixel debe estar justificado.' }] }
    ]
  },
  {
    _id: "post-5",
    title: "Arquitectura hostil codificada",
    slug: { current: "arquitectura-hostil-codificada" },
    excerpt: "Los dark patterns no son errores de usabilidad; son el equivalente digital de los bancos con púas anti-vagabundos.",
    featuredImage: { 
      url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80", 
      alt: "Arquitectura urbana" 
    },
    category: categories.opinion,
    author,
    publishedAt: "2024-05-01T07:45:00Z",
    lang: "es",
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'La hostilidad no siempre se manifiesta en concreto y metal.' }] }
    ]
  },
  {
    _id: "post-6",
    title: "Manifiesto por un código literario",
    slug: { current: "manifiesto-codigo-literario" },
    excerpt: "Programar es escribir para ser leído por humanos y ejecutado por máquinas. Debemos reivindicar la belleza del código fuente.",
    featuredImage: { 
      url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80", 
      alt: "Código fuente" 
    },
    category: categories.tecnologia,
    author,
    publishedAt: "2024-04-28T16:20:00Z",
    lang: "es",
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Un buen código debe leerse como buena prosa.' }] }
    ]
  },
  {
    _id: "post-7",
    title: "El café de filtro como ritual moderno",
    slug: { current: "cafe-filtro-ritual" },
    excerpt: "Cómo la lentitud impuesta por una V60 se convirtió en el último reducto de espiritualidad matutina para el trabajador remoto.",
    featuredImage: { 
      url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80", 
      alt: "Café de filtro" 
    },
    category: categories.cultura,
    author,
    publishedAt: "2024-04-20T08:30:00Z",
    lang: "es",
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Hay virtud en esperar cuatro minutos para una taza de café.' }] }
    ]
  },
  {
    _id: "post-8",
    title: "La falacia del fundador solitario",
    slug: { current: "falacia-fundador-solitario" },
    excerpt: "Desmontando el mito de Silicon Valley y por qué la narrativa del genio aislado es destructiva para la innovación real.",
    featuredImage: { 
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80", 
      alt: "Trabajo en equipo" 
    },
    category: categories.opinion,
    author,
    publishedAt: "2024-04-15T10:15:00Z",
    lang: "es",
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Ningún software revolucionario fue escrito en un vacío absoluto.' }] }
    ]
  }
];
