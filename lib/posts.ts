import type { BlogPost } from '@/types';

export const posts: BlogPost[] = [
  {
    slug: 'de-cero-a-fullstack',
    title: 'De cero a full-stack: mi camino como developer',
    excerpt:
      'Cómo empecé en el mundo del desarrollo, los errores que cometí, las tecnologías que aprendí, y lo que nadie te dice cuando estás empezando.',
    date: '2025-04-10',
    category: 'carrera',
    readTime: 6,
    blocks: [
      {
        type: 'paragraph',
        content:
          'Cuando arranqué en el desarrollo de software, nadie me dijo que el camino iba a ser tan no-lineal. Esperaba algo tipo "aprender HTML → aprender JS → conseguir trabajo". La realidad fue bastante más caótica, y creo que eso es lo que hace que valga la pena contarlo.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Los primeros pasos',
      },
      {
        type: 'paragraph',
        content:
          'Empecé con tutoriales de YouTube como cualquier otro. HTML, CSS básico, formularios. La sensación de que algo que vos escribís aparece en el navegador es adictiva. Pero el problema con los tutoriales es que cuando terminás uno, no sabés qué hacer a continuación.',
      },
      {
        type: 'paragraph',
        content:
          'Mi error más grande al principio fue tutorial-hopping: empezar un curso, no terminarlo, empezar otro, repetir. Tardé mucho en darme cuenta de que la única forma de aprender a programar es programando proyectos reales, con problemas reales.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'El salto a JavaScript',
      },
      {
        type: 'paragraph',
        content:
          'JavaScript me rompió la cabeza al principio. El asincronismo, los callbacks, el this que cambia dependiendo del contexto. Pero cuando hice click con las Promises y después con async/await, todo empezó a tener más sentido.',
      },
      {
        type: 'quote',
        content:
          'La programación no se aprende leyendo. Se aprende escribiendo código que falla, entendiéndolo, y arreglándolo.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'React y el mundo moderno',
      },
      {
        type: 'paragraph',
        content:
          'Cuando llegué a React, fue otro nivel. El modelo mental de componentes, estado, y efectos tardó semanas en encajar. Pero una vez que lo hizo, no podía imaginarme buildear UIs de otra forma.',
      },
      {
        type: 'list',
        items: [
          'Empezá con proyectos pequeños y completalos',
          'No memorices sintaxis, entendé los conceptos',
          'Leer código de otros es tan importante como escribir el tuyo',
          'Contribuí a proyectos open source, aunque sea documentación',
          'El imposter syndrome nunca desaparece del todo, aprendé a vivir con él',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Hoy trabajo con Next.js, TypeScript, Prisma, y un montón de tecnologías que hace dos años ni sabía que existían. El camino fue largo y nada recto, pero cada proyecto fallido me enseñó más que cualquier tutorial.',
      },
    ],
  },
  {
    slug: 'building-chat-ia',
    title: 'Building chat-IA: arquitectura, decisiones y lo que aprendí',
    excerpt:
      'Un breakdown técnico de cómo construí un chat con IA desde cero: streaming, autenticación, documentos, diseño del sistema, y los obstáculos que me encontré en el camino.',
    date: '2025-05-01',
    category: 'proyectos',
    readTime: 8,
    blocks: [
      {
        type: 'paragraph',
        content:
          'chat-IA nació de una idea simple: quería un chat con IA que pudiera analizar mis documentos. Terminar construyendo un sistema completo con autenticación, historial de conversaciones, streaming, y soporte de PDFs fue todo un viaje.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'El stack elegido',
      },
      {
        type: 'paragraph',
        content:
          'Para este proyecto usé Next.js 15 con App Router, React 19, TypeScript strict, Tailwind CSS v4, Prisma con PostgreSQL, y NextAuth v5. Todo en un solo repositorio. La elección de Next.js fue natural: maneja el frontend y el backend en el mismo repo, tiene soporte nativo para streaming, y el App Router facilita mucho la arquitectura de layouts y rutas.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'El mayor desafío: streaming',
      },
      {
        type: 'paragraph',
        content:
          'Implementar el streaming de respuestas de la IA fue lo más complejo. No podía hacer un simple fetch y esperar la respuesta completa, porque con respuestas largas el usuario esperaría mucho tiempo sin feedback. La solución fue usar Server-Sent Events (SSE) desde el API route y leerlos con ReadableStream en el cliente.',
      },
      {
        type: 'code',
        language: 'typescript',
        content: `// app/api/chat/route.ts
const stream = new ReadableStream({
  async start(controller) {
    for await (const chunk of completion) {
      const text = chunk.choices[0]?.delta?.content ?? '';
      controller.enqueue(encoder.encode(text));
    }
    controller.close();
  },
});

return new Response(stream, {
  headers: { 'Content-Type': 'text/event-stream' },
});`,
      },
      {
        type: 'heading',
        level: 2,
        content: 'Autenticación con NextAuth v5',
      },
      {
        type: 'paragraph',
        content:
          'NextAuth v5 cambió bastante respecto a v4. La configuración es más explícita y el sistema de adapters es más limpio. Integrar el Prisma Adapter para persistir sesiones y usuarios fue directo, aunque la documentación de la beta tiene algunos huecos que tuve que resolver leyendo issues en GitHub.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Lo que haría diferente',
      },
      {
        type: 'list',
        items: [
          'Extraería el sistema de design tokens a un archivo separado desde el día uno',
          'Agregaría tests end-to-end con Playwright desde el inicio',
          'Usaría un job queue para el procesamiento de documentos pesados',
          'Implementaría rate limiting en los API routes desde el principio',
        ],
      },
      {
        type: 'quote',
        content:
          'El diseño del sistema importa más que la implementación. Es más fácil reescribir código que cambiar la arquitectura.',
      },
    ],
  },
  {
    slug: 'nextjs-15-react-19-workflow',
    title: 'Next.js 15 + React 19: lo que cambió en mi workflow',
    excerpt:
      'Las novedades de Next.js 15 y React 19 que más impacto tuvieron en cómo desarrollo día a día: Server Components, Turbopack, nuevo compilador, y más.',
    date: '2025-05-08',
    category: 'tecnología',
    readTime: 5,
    blocks: [
      {
        type: 'paragraph',
        content:
          'Con la llegada de Next.js 15 y React 19 a stable, hay cambios que afectan directamente cómo estructuro mis proyectos. Algunos son quality-of-life improvements, otros cambian el modelo mental por completo.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Turbopack en dev mode',
      },
      {
        type: 'paragraph',
        content:
          'El salto de velocidad en el servidor de desarrollo con Turbopack es real. En proyectos medianos, el hot reload pasó de ~800ms a ~150ms en mi máquina. No es un benchmark científico, pero la diferencia se siente en el día a día.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'React 19: el compilador cambia todo',
      },
      {
        type: 'paragraph',
        content:
          'El nuevo compilador de React (antes conocido como React Forget) automatiza la memorización. Ya no necesito pensar en cuándo usar useMemo o useCallback para evitar re-renders innecesarios. El compilador lo infiere automáticamente.',
      },
      {
        type: 'code',
        language: 'typescript',
        content: `// Antes: tenías que pensar en esto
const handleSubmit = useCallback(() => {
  // ...
}, [deps]);

// Ahora: el compilador lo optimiza automáticamente
const handleSubmit = () => {
  // ...
};`,
      },
      {
        type: 'heading',
        level: 2,
        content: 'Server Actions maduros',
      },
      {
        type: 'paragraph',
        content:
          'Los Server Actions en Next.js 15 son production-ready. Los uso para mutations de formularios, operaciones de base de datos directas desde componentes, y cualquier cosa que necesite correr en el servidor sin crear un API route explícito.',
      },
      {
        type: 'list',
        items: [
          'Turbopack estable: dev server significativamente más rápido',
          'React 19 compiler: menos boilerplate de memorización',
          'Server Actions: mutations sin API routes explícitos',
          'Partial Prerendering: mejor estrategia de renderizado híbrido',
          'use() hook: manejo más limpio de Promises en componentes',
        ],
      },
      {
        type: 'paragraph',
        content:
          'El ecosistema Next.js sigue evolucionando rápido. La clave es no intentar adoptar todo de una vez, sino ir incorporando las novedades que realmente resuelven problemas en tus proyectos actuales.',
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
