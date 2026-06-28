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
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
