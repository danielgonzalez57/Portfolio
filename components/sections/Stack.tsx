'use client';

import { stack } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import TechIcon from '@/components/icons/TechIcon';

export default function Stack() {
  const { ref, inView } = useInView();

  const languages  = stack.find(c => c.label === 'Lenguajes');
  const categories = stack.filter(c => c.label !== 'Lenguajes');

  return (
    <section
      id="stack"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-28 reveal ${inView ? 'is-visible' : 'is-hidden'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-accent tracking-widest glow mb-3">
            // 04. STACK_
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Herramientas que uso
          </h2>
          <p className="text-muted max-w-xl">
            El stack que domino y con el que construyo proyectos día a día.
          </p>
        </div>

        {/* Lenguajes — horizontal badge row */}
        {languages && (
          <div className="mb-8">
            <p className="font-mono text-xs text-muted/60 tracking-widest mb-3 uppercase">
              {languages.label}
            </p>
            <div className="flex flex-wrap gap-2.5 stagger-children">
              {languages.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/30 bg-accent/5 text-primary hover:border-accent/60 hover:bg-accent/10 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                >
                  <TechIcon name={item.icon} size={18} className="shrink-0 inline-flex" />
                  <span className="font-mono text-sm font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Separator */}
        <div className="border-t border-dashed border-border mb-8" />

        {/* Stack grid — 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {categories.map((category) => (
            <div key={category.label}>
              <p className="font-mono text-xs text-muted/60 tracking-widest mb-3 uppercase">
                {category.label}
              </p>
              <div className="flex flex-col gap-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className={[
                      'flex items-center gap-2.5 px-3 py-2 rounded-lg border transition-all duration-300 cursor-default',
                      item.primary
                        ? 'border-accent/20 bg-accent/5 text-primary hover:border-accent/50 hover:bg-accent/10 hover:-translate-y-0.5'
                        : 'border-border bg-surface text-muted hover:border-accent/30 hover:text-primary hover:-translate-y-0.5',
                    ].join(' ')}
                  >
                    <TechIcon name={item.icon} size={18} className="shrink-0 inline-flex" />
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
            <span className="text-primary">Next.js</span>,{' '}
            <span className="text-primary">Spring Boot</span>,{' '}
            <span className="text-primary">Temas de IA</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
