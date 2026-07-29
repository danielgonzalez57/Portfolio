import type { Profile, Project, Service, StackCategory } from '@/types';

// TODO: Update all fields with your real information
export const profile: Profile = {
  name: 'Daniel',
  handle: 'jarvis_404',
  role: 'Full-Stack Developer | IA-Native Developer',
  bio: 'Full Stack Developer con 4+ años construyendo productos web escalables — desde el diseño de arquitectura hasta el deploy en producción. Trabajo en el ecosistema JS/TS (Vue, React/Next.js, Angular, Node, NestJS) y en Java con Spring Boot, con un enfoque IA‑native: uso Claude Code, RAG y automatización de flujos con n8n para acelerar ciclos de desarrollo, construir asistentes internos y elevar la calidad del código.',
  location: 'Venezuela',
  email: 'danielsrkt@gmail.com',
  whatsapp: '584127170458',
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
    id: 'creditu',
    title: 'Creditu',
    description:
      'Plataforma SaaS de créditos hipotecarios full-stack (Vue + NestJS): gestión de operaciones, pre-calificación, simulación financiera y evaluación crediticia en tiempo real. Proyecto privado para el sector inmobiliario.',
    tags: ['Vue.js', 'Nest.js', 'TypeScript', 'Pinia', 'TypeORM', 'SSE'],
    github: undefined,
    demo: undefined,
    featured: true,
    status: 'live',
    details:
      'Plataforma SaaS privada para el sector hipotecario/inmobiliario, full-stack. Cubre todo el ciclo de una operación de crédito: desde el lead y la pre-calificación (flujo kanban) hasta la simulación financiera (cuotas, seguros, pie), la evaluación crediticia y la firma. Backend en NestJS con diseño orientado a dominios (deals, evaluations, simulations, documents, notifications), PostgreSQL + TypeORM, actualizaciones en tiempo real vía SSE con Redis pub/sub, y control de permisos granular por rol. Frontend en Vue 3 (Composition API), TypeScript, Pinia y TailwindCSS + Shadcn/ui.',
  },
  {
    id: 'supplemearth',
    title: 'SupplemEarth',
    description:
      'E-commerce en producción de suplementos alimenticios: SPA en Vue 3 + TypeScript que consume una API REST en NestJS, con carrito persistente, checkout con Stripe y panel de administración de productos, pedidos e inventario.',
    tags: ['Vue.js', 'TypeScript', 'Pinia', 'Vite', 'Tailwind', 'Stripe', 'Nest.js'],
    github: 'https://github.com/danielgonzalez57/e-commerce-frontend',
    demo: 'https://supplemearth.com/',
    featured: true,
    status: 'live',
    details:
      'Tienda online de suplementos en producción. Frontend SPA con Vue 3 (Composition API), TypeScript, Pinia y Vue Router, consumiendo una API REST en NestJS (hosteada en Railway) vía una capa de servicios con Axios. Autenticación JWT con roles (admin/usuario) y guards de ruta, carrito persistido en localStorage, checkout con Stripe, panel de administración de productos/pedidos/inventario, y rate limiting del lado del cliente en los formularios de auth. Desplegado en Vercel.',
  },
  {
    id: 'chat-ia',
    title: 'chat-IA',
    description:
      'Chat con IA tipo RAG sobre Next.js 15: ingesta de documentos PDF/DOCX, embeddings y recuperación de contexto para respuestas fundamentadas, con streaming, auth (NextAuth) y persistencia en Prisma.',
    tags: ['Next.js', 'React', 'TypeScript', 'RAG', 'Embeddings', 'Prisma', 'NextAuth'],
    github: 'https://github.com/danielgonzalez57/Chat-IA',
    demo: undefined,
    featured: true,
    status: 'live',
  },
  {
    id: 'ai-executive-assistant',
    title: 'Asistente Ejecutivo IA',
    description:
      'Agente de IA orquestado en n8n que gestiona correo y calendario: clasifica mensajes con un LLM, agenda reuniones sin conflictos de horario y da seguimiento a leads en el CRM. Scripts en Python para los pasos de procesamiento a medida.',
    tags: ['n8n', 'Python', 'IA', 'LLM', 'Automatización', 'Email', 'Calendar'],
    github: undefined,
    demo: undefined,
    featured: false,
    status: 'wip',
    details:
      'Asistente ejecutivo digital construido en n8n que se conecta al correo y al calendario de una persona u organización. Un LLM lee y clasifica correos automáticamente, detecta conflictos de horario antes de agendar reuniones, y da seguimiento a contactos y leads en el CRM — eliminando horas de trabajo manual repetitivo cada semana. Los nodos de n8n orquestan el flujo; los pasos de procesamiento y transformación de datos más específicos corren en scripts de Python. Mantiene siempre control humano en el loop: nunca envía un correo ni agenda un evento sin antes mostrar un borrador y pedir confirmación.',
    steps: [
      'Un correo entrante dispara el workflow en n8n.',
      'Un LLM lee y clasifica el mensaje (urgente, solicitud de reunión, lead, spam).',
      'Si es una solicitud de reunión, revisa el calendario y detecta conflictos de horario.',
      'Genera un borrador de respuesta o de evento — nunca actúa solo.',
      'Notifica a la persona con el borrador para aprobación humana.',
      'Al aprobar, envía el correo o agenda el evento y actualiza el lead en el CRM.',
    ],
    timeSaved: '~5-8 horas por semana',
    impact:
      'Por qué: la gestión manual de correo y agenda le come tiempo al equipo ejecutivo y hace que el seguimiento a leads sea inconsistente. Este asistente reduce el tiempo de respuesta, evita que se pierdan oportunidades por falta de seguimiento en el CRM, y libera horas para trabajo de mayor valor — sin quitarle el control a la persona sobre lo que se envía.',
  },
  {
    id: 'telegram-shop-bot',
    title: 'Chatbot Telegram para Tiendas',
    description:
      'Chatbot de Telegram para tiendas construido con n8n y scripts en Python — catálogo de productos, pedidos y atención al cliente automatizada con IA dentro de Telegram.',
    tags: ['n8n', 'Python', 'Telegram', 'IA', 'Automatización'],
    github: undefined,
    demo: undefined,
    featured: false,
    status: 'wip',
    details:
      'Chatbot de Telegram pensado para tiendas: permite a los clientes explorar el catálogo, hacer pedidos y resolver dudas de atención al cliente directamente dentro de Telegram, sin intervención manual. El flujo conversacional se orquesta en n8n, con scripts en Python para la lógica de negocio (catálogo, cálculo de pedidos) que no encaja en un nodo estándar. En desarrollo activo.',
    steps: [
      'El cliente escribe al bot de Telegram (trigger).',
      'Un LLM detecta la intención: consultar catálogo, hacer un pedido o resolver una duda.',
      'Si consulta el catálogo, responde con los productos disponibles desde la base de datos de la tienda.',
      'Si es un pedido, un script en Python calcula el total y arma el resumen.',
      'El bot confirma el pedido con el cliente y lo deja registrado para la tienda.',
    ],
    timeSaved: '~10+ horas por semana',
    impact:
      'Por qué: gran parte de la atención al cliente en tiendas pequeñas es repetitiva (catálogo, precios, estado de pedidos) y consume tiempo del equipo. Este bot atiende 24/7 sin sumar personal, responde en segundos y evita pedidos mal anotados a mano — mejorando la experiencia de compra y dejando al equipo libre para los casos que sí necesitan una persona.',
  },
];

export const stack: StackCategory[] = [
  {
    label: 'Lenguajes',
    items: [
      { name: 'JavaScript', icon: 'javascript', primary: true },
      { name: 'TypeScript', icon: 'typescript', primary: true },
      { name: 'Python',     icon: 'python',      primary: true },
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
      { name: 'Astro',        icon: 'astro' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js',     icon: 'nodejs',     primary: true },
      { name: 'NestJS',      icon: 'nestjs',     primary: true },
      { name: 'Spring Boot', icon: 'springboot' },
    ],
  },
  {
    label: 'IA & Automatización',
    items: [
      { name: 'n8n',              icon: 'n8n',    primary: true },
      { name: 'RAG / Embeddings', icon: 'rag',    primary: true },
      { name: 'Claude API',       icon: 'claude' },
      { name: 'Gemini API',       icon: 'gemini' },
    ],
  },
  {
    label: 'Base de datos',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql', primary: true },
      { name: 'MongoDB',    icon: 'mongodb' },
      { name: 'MySQL',      icon: 'mysql' },
    ],
  },
  {
    label: 'Herramientas',
    items: [
      { name: 'Claude',  icon: 'claude',  primary: true },
      { name: 'Git',     icon: 'git',     primary: true },
      { name: 'Docker',  icon: 'docker' },
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
    title: 'Integración IA & Automatización',
    description:
      'Integro capacidades de IA en productos reales: chatbots con RAG (recuperación de contexto sobre documentos propios), automatización de flujos con n8n y scripts en Python, y asistentes internos conectados a email, calendario y CRM.',
    icon: 'api',
    features: ['RAG · Embeddings · Claude API', 'Automatización con n8n · Python', 'Asistentes internos & chatbots'],
  },
];
