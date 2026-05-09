import type { Profile, Project, Service, StackCategory } from '@/types';

// TODO: Update all fields with your real information
export const profile: Profile = {
  name: 'Daniel',
  handle: 'jarvis_404',
  role: 'Full-Stack Developer | IA-Native Developer',
  bio: 'Construyo aplicaciones web modernas con foco en rendimiento, buena UX y código limpio. Me apasiona el ecosistema JavaScript/TypeScript y las arquitecturas escalables.',
  location: 'Venezuela',
  email: 'danielsrkt@gmail.com',
  avatar: '/images/profile/perfil1.png',
  cv: '/CV.pdf',
  social: [
    {
      label: 'GitHub',
      href: 'https://github.com/danielgonzalez57',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/daniel-gonzalez-651125241/',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:danielsrkt@gmail.com',
      icon: 'email',
    },
  ],
};

export const projects: Project[] = [
  {
    id: 'chat-ia',
    title: 'chat-IA',
    description:
      'Aplicación de chat con IA usando Next.js 15, streaming de respuestas, soporte de documentos PDF/DOCX, autenticación con NextAuth y base de datos Prisma.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Prisma', 'NextAuth', 'AI'],
    github: 'https://github.com/jarvis404/chat-ia', // TODO: Update
    demo: undefined,
    featured: true,
    status: 'live',
  },
  {
    id: 'app-rifas',
    title: 'App Rifas',
    description:
      'Sistema de gestión de rifas con administración de participantes, generación de números, y panel de control. Backend robusto con validaciones.',
    tags: ['React', 'Node.js', 'TypeScript', 'REST API'],
    github: 'https://github.com/jarvis404/app-rifas', // TODO: Update
    demo: undefined,
    featured: true,
    status: 'live',
  },
  {
    id: 'shop',
    title: 'E-Commerce Shop',
    description:
      'Plataforma de e-commerce con catálogo de productos, carrito, checkout y administración de inventario. Diseño mobile-first.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
    github: 'https://github.com/jarvis404/shop', // TODO: Update
    demo: undefined,
    featured: true,
    status: 'wip',
  },
  {
    id: 'supplement-backend',
    title: 'Supplement API',
    description:
      'API REST para gestión de suplementos alimenticios. Endpoints para productos, stock, y pedidos con autenticación JWT.',
    tags: ['Node.js', 'TypeScript', 'REST API', 'JWT'],
    github: 'https://github.com/jarvis404/supplement-backend', // TODO: Update
    demo: undefined,
    featured: false,
    status: 'live',
  },
];

export const stack: StackCategory[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'React',        icon: 'react',      primary: true },
      { name: 'Next.js',      icon: 'nextjs',     primary: true },
      { name: 'TypeScript',   icon: 'typescript', primary: true },
      { name: 'Tailwind CSS', icon: 'tailwind',   primary: true },
      { name: 'Angular',      icon: 'angular' },
      { name: 'Astro',        icon: 'astro' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js',   icon: 'nodejs',   primary: true },
      { name: 'Prisma',    icon: 'prisma',   primary: true },
      { name: 'REST APIs', icon: 'api',      primary: true },
      { name: 'NextAuth',  icon: 'nextauth' },
      { name: 'JWT',       icon: 'jwt' },
    ],
  },
  {
    label: 'Base de datos',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql', primary: true },
      { name: 'MySQL',      icon: 'mysql' },
      { name: 'SQLite',     icon: 'sqlite' },
    ],
  },
  {
    label: 'Herramientas',
    items: [
      { name: 'Git',     icon: 'git',     primary: true },
      { name: 'Docker',  icon: 'docker',  primary: true },
      { name: 'VS Code', icon: 'vscode',  primary: true },
      { name: 'Figma',   icon: 'figma' },
      { name: 'Postman', icon: 'postman' },
    ],
  },
];

export const services: Service[] = [
  {
    id: 'web-apps',
    title: 'Aplicaciones Web',
    description:
      'Apps full-stack a medida con Next.js y React. Desde dashboards hasta plataformas SaaS, optimizadas para rendimiento y SEO.',
    icon: 'web',
    features: ['Next.js / React', 'Auth & Base de datos', 'Deploy en Vercel'],
  },
  {
    id: 'apis',
    title: 'APIs & Backends',
    description:
      'APIs REST robustas con Node.js, autenticación JWT, validación y documentación. Integración con bases de datos y servicios externos.',
    icon: 'api',
    features: ['REST / Endpoints', 'JWT & Roles', 'PostgreSQL / Prisma'],
  },
  {
    id: 'landing',
    title: 'Landing & E-commerce',
    description:
      'Landing pages que convierten y tiendas online con catálogo, carrito y pasarela de pago. Diseño mobile-first y carga ultrarrápida.',
    icon: 'landing',
    features: ['Mobile-first', 'SEO optimizado', 'Pagos integrados'],
  },
  {
    id: 'mvp',
    title: 'MVP & Prototipos',
    description:
      'Lanzá tu idea en semanas, no meses. Stack moderno, código limpio y listo para escalar cuando tu producto crezca.',
    icon: 'mvp',
    features: ['Entrega rápida', 'Código escalable', 'Iteración ágil'],
  },
];
