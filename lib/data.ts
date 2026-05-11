import type { Profile, Project, Service, StackCategory } from '@/types';

// TODO: Update all fields with your real information
export const profile: Profile = {
  name: 'Daniel',
  handle: 'jarvis_404',
  role: 'Full-Stack Developer | IA-Native Developer',
  bio: 'Full Stack Developer con 4+ años construyendo productos web escalables. Trabajo en el ecosistema JS/TS — Vue, React/Next.js, Angular, Node, NestJS — con un enfoque IA‑native que acelera ciclos de desarrollo y eleva la calidad del código.',
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
    label: 'Lenguajes',
    items: [
      { name: 'JavaScript', icon: 'javascript', primary: true },
      { name: 'TypeScript', icon: 'typescript', primary: true },
      { name: 'Java',       icon: 'java',       primary: true },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React.js',     icon: 'react',   primary: true },
      { name: 'Next.js',      icon: 'nextjs',  primary: true },
      { name: 'Vue.js',       icon: 'vue',     primary: true },
      { name: 'Angular',      icon: 'angular' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Astro',        icon: 'astro' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js',        icon: 'nodejs',     primary: true },
      { name: 'NestJS',         icon: 'nestjs',     primary: true },
      { name: 'Spring Boot',    icon: 'springboot' },
      { name: 'Prisma/TypeORM', icon: 'prisma' },
    ],
  },
  {
    label: 'Base de datos',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql', primary: true },
      { name: 'MongoDB',    icon: 'mongodb' },
      { name: 'MySQL',      icon: 'mysql' },
      { name: 'SQL Server', icon: 'sqlserver' },
    ],
  },
  {
    label: 'Herramientas',
    items: [
      { name: 'Claude',  icon: 'claude',  primary: true },
      { name: 'Git',     icon: 'git',     primary: true },
      { name: 'Docker',  icon: 'docker' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Notion',  icon: 'notion' },
    ],
  },
];

export const services: Service[] = [
  {
    id: 'web-apps',
    title: 'Aplicaciones Full Stack',
    description:
      'Desarrollo web completo con React/Next.js, Vue o Angular en frontend y Node.js/NestJS o Spring Boot en backend. Arquitecturas limpias, escalables y listas para producción.',
    icon: 'web',
    features: ['React · Vue · Angular', 'Node.js · NestJS · Spring Boot', 'PostgreSQL · MongoDB'],
  },
  {
    id: 'saas',
    title: 'SaaS & Productos Digitales',
    description:
      'Construyo productos SaaS desde cero: autenticación, roles, suscripciones, dashboards y paneles de administración. Código mantenible y arquitectura pensada para escalar.',
    icon: 'mvp',
    features: ['Auth & roles de usuario', 'Pagos y suscripciones', 'Dashboard & admin panel'],
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
    id: 'ia',
    title: 'Integración IA',
    description:
      'Integro capacidades de IA en productos reales: chatbots, automatización de flujos, procesamiento de documentos y asistentes internos. Enfoque IA-native con Claude API y SDD.',
    icon: 'api',
    features: ['Claude API · LLMs', 'Automatización de flujos', 'SDD & desarrollo acelerado'],
  },
];
