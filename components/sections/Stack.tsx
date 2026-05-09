'use client';

import { stack } from '@/lib/data';
import { useInView } from '@/hooks/useInView';

export default function Stack() {
  const { ref, inView } = useInView();

  return (
    <section
      id="stack"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-28 reveal ${inView ? 'visible' : 'hidden'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-accent tracking-widest glow mb-3">
            // 03. STACK_
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Herramientas que uso
          </h2>
          <p className="text-muted max-w-xl">
            El stack que domino y con el que construyo proyectos día a día.
          </p>
        </div>

        {/* Stack grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((category) => (
            <div key={category.label}>
              <p className="font-mono text-xs text-muted tracking-widest mb-3 uppercase">
                {category.label}
              </p>
              <div className="flex flex-col gap-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className={[
                      'flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors',
                      item.primary
                        ? 'border-accent/20 bg-accent/5 text-primary hover:border-accent/40'
                        : 'border-border bg-surface text-muted hover:border-accent/20 hover:text-primary',
                    ].join(' ')}
                  >
                    <span
                      className={`font-mono text-xs shrink-0 ${
                        item.primary ? 'text-accent' : 'text-muted/40'
                      }`}
                    >
                      $
                    </span>
                    <span className="font-mono text-xs">{item.name}</span>
                    {item.primary && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 border border-dashed border-border rounded-xl px-5 py-4">
          <p className="font-mono text-xs text-muted">
            <span className="text-accent mr-2">›</span>
            Siempre aprendiendo. Actualmente explorando:{' '}
            <span className="text-primary">React Native</span>,{' '}
            <span className="text-primary">tRPC</span>,{' '}
            <span className="text-primary">Rust</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
