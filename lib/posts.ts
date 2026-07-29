import type { BlogPost } from '@/types';

export const posts: BlogPost[] = [
  {
    slug: 'trabajar-con-ia-como-equipo',
    title: 'Cómo trabajo con IA como si fuera un equipo completo',
    excerpt:
      'No uso IA para que piense por mí. La uso para mover más rápido lo que ya sé hacer. Este es el flujo de 4 pilares —SDD, memoria persistente, agent teams y code review automatizado— con el que coordino agentes como si fueran un equipo técnico.',
    date: '2026-06-28',
    category: 'tecnología',
    readTime: 8,
    blocks: [
      {
        type: 'quote',
        content:
          'No uso IA para que piense por mí. La uso para mover más rápido lo que ya sé hacer.',
      },
      {
        type: 'paragraph',
        content:
          'Llevo años desarrollando. Empecé sin IA, en mi etapa junior aprendí a debuggear, a leer errores, a entender por qué algo fallaba. Esa base es lo que me permite hoy usar IA de forma efectiva — porque sé cuándo se equivoca.',
      },
      {
        type: 'paragraph',
        content:
          'Este post explica el flujo que uso actualmente para desarrollar proyectos reales, coordinando agentes de IA como si fueran un equipo técnico.',
      },
      { type: 'divider' },
      {
        type: 'heading',
        level: 2,
        content: 'El problema que resuelve este flujo',
      },
      {
        type: 'paragraph',
        content:
          'Trabajar solo tiene un cuello de botella claro: el tiempo. Arquitectura, código, documentación, testing, code review — todo cae sobre una sola persona.',
      },
      {
        type: 'paragraph',
        content:
          'La solución no es hacer todo más rápido a mano. Es delegar bien.',
      },
      { type: 'divider' },
      {
        type: 'heading',
        level: 2,
        content: 'Los 4 pilares del flujo',
      },
      {
        type: 'heading',
        level: 3,
        content: '1. SDD — Spec-Driven Development',
      },
      {
        type: 'paragraph',
        content:
          'Todo parte de una especificación clara antes de escribir una sola línea de código. Una spec bien escrita define:',
      },
      {
        type: 'list',
        items: [
          'Qué hace el módulo',
          'Qué recibe (inputs)',
          'Qué devuelve (outputs)',
          'Qué errores puede lanzar',
          'Qué reglas de negocio aplica',
        ],
      },
      {
        type: 'code',
        language: 'markdown',
        content: `## Spec: AuthService.login()

**Input:**
- email: string (requerido, formato válido)
- password: string (requerido, mínimo 8 caracteres)

**Output:**
- accessToken: string (JWT, expira en 15min)
- refreshToken: string (JWT, expira en 7 días, httpOnly cookie)

**Errores:**
- 401 → credenciales inválidas
- 429 → demasiados intentos (rate limit)

**Reglas:**
- El password nunca se devuelve en ninguna respuesta
- El refreshToken se envía solo como cookie, nunca en el body
- Máximo 5 intentos fallidos antes de bloquear por 15 minutos`,
      },
      {
        type: 'paragraph',
        content:
          'Con esa spec, le doy el contexto al agente y genero el diseño técnico del módulo, el código base, los tests unitarios y la documentación. Si la spec cambia, el sistema se actualiza desde la raíz. No hay código huérfano ni documentación desincronizada.',
      },
      { type: 'divider' },
      {
        type: 'heading',
        level: 3,
        content: '2. Memoria persistente entre sesiones (Engram)',
      },
      {
        type: 'paragraph',
        content:
          'El problema de los agentes de IA es que no recuerdan. Cada sesión empieza desde cero. Engram resuelve esto guardando decisiones de arquitectura, convenciones del proyecto y el contexto acumulado entre sesiones.',
      },
      {
        type: 'code',
        language: 'json',
        content: `// engram-context.json
{
  "project": "Ticket Comedy",
  "stack": {
    "frontend": "Next.js 14 (App Router)",
    "backend": "Supabase",
    "auth": "Supabase Auth + RLS"
  },
  "decisions": [
    "Los pagos son manuales — confirmación por WhatsApp del admin",
    "No hay pasarela de pago integrada (contexto venezolano)",
    "RLS activo en todas las tablas públicas"
  ],
  "conventions": {
    "components": "PascalCase",
    "functions": "camelCase",
    "db_tables": "snake_case"
  }
}`,
      },
      {
        type: 'paragraph',
        content:
          'Al iniciar una nueva sesión, inyecto ese contexto. El agente no arranca desde cero — arranca desde donde lo dejé.',
      },
      { type: 'divider' },
      {
        type: 'heading',
        level: 3,
        content: '3. Agent Teams — Subagentes con roles',
      },
      {
        type: 'paragraph',
        content:
          'En lugar de pedirle todo a un solo agente, divido el trabajo por especialidad:',
      },
      {
        type: 'table',
        headers: ['Agente', 'Rol', 'Prompt base'],
        rows: [
          [
            'Architect',
            'Define estructura, relaciones, patrones',
            '“Actúa como arquitecto de software senior...”',
          ],
          [
            'Coder',
            'Implementa según la spec',
            '“Implementa siguiendo la spec adjunta, sin inventar...”',
          ],
          [
            'Docs',
            'Genera documentación técnica',
            '“Documenta este módulo en formato JSDoc + README...”',
          ],
          [
            'Tester',
            'Escribe tests unitarios e integración',
            '“Genera tests para este servicio usando Vitest...”',
          ],
        ],
      },
      {
        type: 'paragraph',
        content:
          'Cada agente tiene su propio contexto inyectado. No mezclo roles en el mismo hilo.',
      },
      {
        type: 'code',
        language: 'typescript',
        content: `// Ejemplo: prompt para el agente Coder
const coderPrompt = \`
Eres un desarrollador Full Stack senior especializado en NestJS y TypeScript.

Contexto del proyecto:
\${JSON.stringify(engramContext, null, 2)}

Spec del módulo a implementar:
\${moduleSpec}

Reglas:
- No inventes funcionalidad que no esté en la spec
- Si algo no está claro, pregunta antes de asumir
- Sigue las convenciones del proyecto definidas en el contexto
- Genera código listo para producción, no ejemplos
\`;`,
      },
      { type: 'divider' },
      {
        type: 'heading',
        level: 3,
        content: '4. GGA — Code Review automatizado',
      },
      {
        type: 'paragraph',
        content:
          'Antes de hacer commit, el código pasa por un agente revisor.',
      },
      {
        type: 'code',
        language: 'typescript',
        content: `// Prompt para el agente GGA (Code Review)
const reviewPrompt = \`
Eres un senior developer haciendo code review.

Revisa el siguiente código y reporta:
1. Bugs o errores lógicos
2. Vulnerabilidades de seguridad
3. Violaciones de las convenciones del proyecto
4. Código duplicado o innecesario
5. Casos edge no manejados

Sé directo. No elogies lo que está bien, solo reporta lo que hay que arreglar.

Código a revisar:
\${codeToReview}

Contexto del proyecto:
\${JSON.stringify(engramContext, null, 2)}
\`;`,
      },
      {
        type: 'paragraph',
        content:
          'El output es una lista de issues concretos, no comentarios genéricos.',
      },
      { type: 'divider' },
      {
        type: 'heading',
        level: 2,
        content: 'El flujo completo en la práctica',
      },
      {
        type: 'code',
        language: 'text',
        content: `1. Defino la spec del módulo (SDD)
        ↓
2. El agente Architect propone la estructura
        ↓
3. El agente Coder implementa contra la spec
        ↓
4. El agente Tester genera los tests
        ↓
5. GGA revisa el código antes del commit
        ↓
6. Actualizo el contexto en Engram
        ↓
7. El agente Docs documenta el módulo
        ↓
8. Commit + PR`,
      },
      {
        type: 'paragraph',
        content:
          'Cada paso tiene su propio agente con su propio prompt. El contexto fluye a través de Engram. Yo coordino, no ejecuto todo.',
      },
      { type: 'divider' },
      {
        type: 'heading',
        level: 2,
        content: '¿Consume más tokens este flujo?',
      },
      {
        type: 'paragraph',
        content:
          'Sí. Bastante más. Cada agente hace sus propias llamadas, Engram inyecta contexto en cada request, y si corren en paralelo se multiplica.',
      },
      {
        type: 'paragraph',
        content:
          'Pero el costo real no es en tokens — es en tiempo de setup. Este flujo brilla en proyectos con múltiples módulos y sesiones largas. Para un componente aislado, es overkill.',
      },
      {
        type: 'paragraph',
        content:
          'Mi regla: uso el flujo completo cuando el proyecto tiene más de 3 módulos interconectados. Para cosas pequeñas, SDD solo ya da el 80% del beneficio.',
      },
      { type: 'divider' },
      {
        type: 'heading',
        level: 2,
        content: 'Lo que aprendí',
      },
      {
        type: 'paragraph',
        content:
          'Empecé a programar sin IA. Eso me dio algo que no se puede saltear: saber qué está mal cuando el agente se equivoca.',
      },
      {
        type: 'paragraph',
        content:
          'La IA no reemplaza el criterio técnico. Lo amplifica. Un junior que no entiende lo que genera el agente va a commitear bugs con confianza. Un dev que ya sabe va a usarla como multiplicador.',
      },
      {
        type: 'quote',
        content:
          'Este flujo no es para que la IA piense por mí. Es para que yo pueda pensar en más cosas al mismo tiempo.',
      },
      { type: 'divider' },
      {
        type: 'paragraph',
        content:
          '¿Usas un flujo parecido? Cuéntame en LinkedIn o escríbeme directo.',
      },
    ],
  },
  {
    slug: 'clonarte-en-claude',
    title: 'Cómo clonarte en Claude en menos de 48 horas',
    excerpt:
      'Armé mi propio "clon" en Claude: un asistente que ya sabe quién soy, cómo pienso y con qué herramientas trabajo, en vez de repetirle el mismo contexto en cada chat. Esto es lo que hice, paso a paso.',
    date: '2026-07-29',
    category: 'tecnología',
    readTime: 6,
    tags: ['Claude'],
    blocks: [
      {
        type: 'quote',
        content:
          'Mi clon no reemplaza mi criterio. Lo extiende — pero solo porque le di el contexto correcto.',
      },
      {
        type: 'paragraph',
        content:
          'Estaba cansado de repetirle a Claude quién soy y cómo trabajo cada vez que abría un chat nuevo. Así que un fin de semana me senté a armar mi propio "clon": una versión de Claude que ya entiende mi contexto, mis reglas y mis herramientas, en vez de arrancar de cero cada vez. Esto fue lo que hice, en 6 pasos.',
      },
      { type: 'divider' },
      {
        type: 'heading',
        level: 2,
        content: 'Paso 1 — Escribí mi about-me.md',
      },
      {
        type: 'paragraph',
        content:
          'Lo primero que hice fue un archivo con quién soy, qué hago, qué valoro y cómo me comunico. Sin esto, cada respuesta salía genérica — Claude me trataba como a cualquier usuario, no como a mí.',
      },
      {
        type: 'code',
        language: 'markdown',
        content: `# about-me.md

## Quién soy
Full Stack Developer, 4+ años en JS/TS (Vue, React/Next.js, NestJS) y Java.
Enfoque IA-native: uso Claude Code + SDD para acelerar ciclos de desarrollo.

## Qué hago
Construyo productos web completos y automatizaciones con n8n + IA.

## Mis valores
- Código simple antes que código "inteligente"
- No fabricar información — si no sé algo, lo digo
- Preferir la solución aburrida que funciona sobre la elegante que rompe

## Mi estilo
Directo, técnico, sin relleno. Explico el "por qué", no solo el "qué".

## Qué importa
Que el código que entrego sea algo que yo mismo mantendría en 6 meses.`,
      },
      { type: 'divider' },
      {
        type: 'heading',
        level: 2,
        content: 'Paso 2 — Escribí mi CLONE.md',
      },
      {
        type: 'paragraph',
        content:
          'Después armé un segundo archivo, pero esta vez con las reglas de cómo debía pensar y responder el clon: qué priorizar, qué tono usar, qué hacer cuando no está seguro de algo. Esto fue lo que más noté en las respuestas — dejaron de sonar a "IA genérica" y empezaron a sonar más a mí.',
      },
      {
        type: 'code',
        language: 'markdown',
        content: `# CLONE.md

## Cómo debe pensar
- Priorizar precisión sobre velocidad de respuesta
- Si falta contexto, preguntar antes de asumir
- Nunca inventar código, links o datos que no puede verificar

## Reglas
- No usar emojis salvo que se pida explícitamente
- Respuestas cortas por defecto; expandir solo si se pide detalle
- Marcar claramente cuándo algo es una opinión vs. un hecho verificado

## Tono y estilo
Técnico, directo, sin relleno motivacional. Como hablarle a un colega senior.`,
      },
      { type: 'divider' },
      {
        type: 'heading',
        level: 2,
        content: 'Paso 3 — Empecé a trabajar en proyectos, no en chats sueltos',
      },
      {
        type: 'paragraph',
        content:
          'Dejé de abrir una conversación nueva para cada cosa y empecé a agrupar el trabajo dentro de Projects, con un objetivo y un plan claros. Ahí fue cuando noté la diferencia real: el contexto se acumulaba en vez de perderse cada vez que cerraba el chat.',
      },
      { type: 'divider' },
      {
        type: 'heading',
        level: 2,
        content: 'Paso 4 — Conecté mis herramientas',
      },
      {
        type: 'paragraph',
        content:
          'Un clon sin acceso a mis herramientas solo podía opinar. Conectado, podía actuar: leer un repo, revisar un documento, ver el estado real de algo antes de responder. Vía MCP (Model Context Protocol) conecté cosas como:',
      },
      {
        type: 'list',
        items: [
          'GitHub — leer issues, PRs, código real del repo',
          'Google Drive / Notion — mis propios documentos y notas',
          'Slack — contexto de conversaciones del equipo',
          'Sistemas internos vía API — datos específicos del proyecto',
        ],
      },
      { type: 'divider' },
      {
        type: 'heading',
        level: 2,
        content: 'Paso 5 — Definí mis "skills"',
      },
      {
        type: 'paragraph',
        content:
          'Documenté cómo escribo, cómo investigo y cómo estructuro un análisis o una automatización — capacidades reutilizables que no quería reexplicar cada vez. Una vez definidas, se invocan en vez de repetirse, como entrenar a alguien una sola vez en lugar de corregirlo todos los días.',
      },
      { type: 'divider' },
      {
        type: 'heading',
        level: 2,
        content: 'Paso 6 — Lo programé',
      },
      {
        type: 'paragraph',
        content:
          'Por último dejé revisiones y chequeos corriendo de forma recurrente, en vez de acordarme de pedirlos manualmente. Esa consistencia fue lo que terminó de hacer que el clon pasara de "útil a veces" a algo que uso todos los días.',
      },
      { type: 'divider' },
      {
        type: 'heading',
        level: 2,
        content: '¿Valió la pena?',
      },
      {
        type: 'paragraph',
        content:
          'Sí, pero con un matiz que aprendí en el camino: el clon no piensa por mí, actúa con mi criterio ya cargado. Cuando dejé el about-me.md y el CLONE.md sin tocar por un tiempo, empezó a responder con una versión vieja de mí — hay que mantenerlos, no escribirlos una vez y olvidarse.',
      },
      {
        type: 'quote',
        content: 'Yo + mi clon no fue magia. Fue contexto bien armado, mantenido con disciplina.',
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
