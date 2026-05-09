import type { Profile, Project, StackCategory } from '@/types';

// TODO: Update all fields with your real information
export const profile: Profile = {
  name: 'Daniel',
  handle: 'jarvis_404',
  role: 'Full-Stack Developer',
  bio: 'Construyo aplicaciones web modernas con foco en rendimiento, buena UX y código limpio. Me apasiona el ecosistema JavaScript/TypeScript y las arquitecturas escalables.',
  location: 'Argentina',
  email: 'daniel@email.com', // TODO: Update
  avatar: '/images/profile/perfil1.png',
  cv: '/cv.pdf', // TODO: Add your CV to public/
  social: [
    {
      label: 'GitHub',
      href: 'https://github.com/jarvis404', // TODO: Update
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/daniel', // TODO: Update
      icon: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:daniel@email.com', // TODO: Update
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
      { name: 'React', primary: true },
      { name: 'Next.js', primary: true },
      { name: 'TypeScript', primary: true },
      { name: 'Tailwind CSS', primary: true },
      { name: 'Angular' },
      { name: 'Astro' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', primary: true },
      { name: 'Prisma', primary: true },
      { name: 'REST APIs', primary: true },
      { name: 'NextAuth' },
      { name: 'JWT' },
    ],
  },
  {
    label: 'Base de datos',
    items: [
      { name: 'PostgreSQL', primary: true },
      { name: 'MySQL' },
      { name: 'SQLite' },
    ],
  },
  {
    label: 'Herramientas',
    items: [
      { name: 'Git', primary: true },
      { name: 'Docker', primary: true },
      { name: 'VS Code', primary: true },
      { name: 'Figma' },
      { name: 'Postman' },
    ],
  },
];
