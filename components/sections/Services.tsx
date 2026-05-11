'use client';

import { services } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import type { Service } from '@/types';

function WebIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <circle cx="6" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="8" cy="6.5" r="0.5" fill="currentColor" />
      <path d="M8 21h8M12 18v3" />
    </svg>
  );
}

function ApiIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  );
}

function LandingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function MvpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function ServiceIcon({ icon }: { icon: Service['icon'] }) {
  if (icon === 'web')     return <WebIcon />;
  if (icon === 'api')     return <ApiIcon />;
  if (icon === 'landing') return <LandingIcon />;
  if (icon === 'mvp')     return <MvpIcon />;
  return null;
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardDelay = 80  + index * 180;
  const iconDelay = cardDelay + 280;

  return (
    <article
      className="service-card group relative flex flex-col h-full border border-border rounded-xl bg-surface p-6 overflow-hidden hover:border-accent/40 hover:-translate-y-1 transition-[border-color,transform,box-shadow] duration-500 cursor-default"
      style={{ '--delay': `${cardDelay}ms`, '--icon-delay': `${iconDelay}ms` } as React.CSSProperties}
    >
      {/* Top scan line */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-accent/0 via-accent/70 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl"
        style={{ background: 'radial-gradient(ellipse at 90% 10%, rgba(30,215,96,0.11), transparent 65%)' }}
      />

      {/* Card number */}
      <span className="absolute top-4 right-5 font-mono text-xs text-muted/20 group-hover:text-accent/50 transition-colors duration-500 select-none">
        0{index + 1}
      </span>

      {/* Icon */}
      <div
        className="service-icon relative w-12 h-12 mb-5 flex items-center justify-center rounded-lg border border-accent/25 bg-accent/5 text-accent group-hover:bg-accent/15 group-hover:border-accent/60 group-hover:shadow-[0_0_22px_rgba(30,215,96,0.22)] transition-all duration-500"
        style={{ '--icon-delay': `${iconDelay}ms` } as React.CSSProperties}
      >
        <ServiceIcon icon={service.icon} />
      </div>

      {/* Title */}
      <h3 className="font-bold text-lg text-primary group-hover:text-accent transition-colors duration-300 mb-3 leading-snug">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
        {service.description}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-1.5">
        {service.features.map((feature, j) => (
          <li
            key={feature}
            className="service-feature flex items-center gap-2 font-mono text-xs text-muted"
            style={{ '--feat-delay': `${iconDelay + 100 + j * 65}ms` } as React.CSSProperties}
          >
            <span className="text-accent shrink-0">›</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-linear-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </article>
  );
}

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" ref={ref as React.RefObject<HTMLElement>} className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div
          className="mb-12 transition-all duration-700 ease-out"
          style={{
            opacity:   inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(22px)',
          }}
        >
          <p className="font-mono text-xs text-accent tracking-widest glow mb-3">
            // 05. SERVICES_
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Lo que puedo hacer por vos
          </h2>
          <p className="text-muted max-w-xl">
            Desde MVPs hasta plataformas completas. Tecnología moderna, código mantenible y
            entrega cuando se necesita.
          </p>
        </div>

        {/* Cards grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 services-grid${inView ? ' in-view' : ''}`}>
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-10 border border-dashed border-border rounded-xl px-5 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all duration-700 ease-out"
          style={{
            opacity:         inView ? 1 : 0,
            transform:       inView ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: inView ? '700ms' : '0ms',
          }}
        >
          <p className="font-mono text-xs text-muted">
            <span className="text-accent mr-2">$</span>
            ¿Tenés un proyecto en mente? Hablemos.
          </p>
          <a
            href="/#contact"
            className="font-mono text-xs border border-accent text-accent hover:bg-accent hover:text-background px-3 py-1.5 rounded-sm transition-all cursor-pointer shrink-0"
          >
            [Contactar ↓]
          </a>
        </div>
      </div>
    </section>
  );
}
