'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about-me"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-28 reveal ${inView ? 'is-visible' : 'is-hidden'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Wide cinematic banner */}
        <div className="relative group mb-12">
          <div className="relative border border-accent/30 rounded-md overflow-hidden bg-surface banner-glow">
            {/* Title bar */}
            <div className="bg-background border-b border-accent/20 px-4 py-2.5 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
              </div>
              <span className="font-mono text-xs text-muted">~/daniel/personality.png</span>
            </div>

            {/* Banner image — wide cinematic */}
            <div className="relative w-full aspect-21/9 sm:aspect-21/8">
              <Image
                src="/images/profile/banner1.png"
                alt="Pixel art - Daniel en su setup"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                style={{ imageRendering: 'pixelated' }}
                priority={false}
              />
              {/* CRT scanlines */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.12) 2px,rgba(0,0,0,0.12) 3px)' }}
              />
              {/* Vignette */}
              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 100px rgba(0,0,0,0.55)' }} />
            </div>

            {/* Status bar */}
            <div className="bg-background border-t border-accent/20 px-4 py-2 flex items-center justify-between">
              <span className="font-mono text-xs text-accent flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block animate-pulse" />
                rendering...
              </span>
              <span className="font-mono text-[0.65rem] text-muted/50 hidden sm:inline">
                daniel@dev:~/setup$
              </span>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute -top-px -right-px w-6 h-6 border-t-2 border-r-2 rounded-tr-md border-accent/60 transition-all duration-700 ease-out group-hover:w-7 group-hover:h-7 group-hover:border-accent" />
          <div className="absolute -bottom-px -left-px w-6 h-6 border-b-2 border-l-2 rounded-bl-md border-accent/60 transition-all duration-700 ease-out group-hover:w-7 group-hover:h-7 group-hover:border-accent" />
        </div>

        {/* Content below banner */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

          {/* Left: heading + bio (2 cols) */}
          <div className="lg:col-span-2">
            <p className="font-mono text-xs text-accent tracking-widest glow mb-3">
              // 02. ABOUT_
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 leading-tight">
              Más allá del{' '}
              <span className="text-accent glow">código</span>
            </h2>

            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Full Stack Developer con 4+ años construyendo productos web completos — desde el diseño
                de arquitectura hasta el deploy en producción. Mi stack principal es
                JavaScript/TypeScript con Vue.js, React/Next.js, Angular, Node.js y NestJS, trabajando
                con bases de datos SQL y NoSQL en proyectos que exigen calidad y escalabilidad.
              </p>
              <p>
                Trabajo con un enfoque{' '}
                <span className="text-accent font-semibold">IA‑native</span>:
                integro herramientas como Claude Code y el proceso SDD (Spec‑Driven Development)
                para acelerar ciclos de desarrollo, reducir retrabajo y elevar la calidad del código.
                Cuando no estoy programando, me encontrás jugando, viendo películas, escuchando
                música o explorando las últimas novedades en IA.
              </p>
            </div>
          </div>

          {/* Right: Quick facts as vertical column */}
          <div className="flex flex-col gap-3 stagger-children">
            <div className="border border-border rounded-lg bg-surface px-4 py-3">
              <p className="font-mono text-[0.65rem] text-muted/60 tracking-widest mb-1">FOCUS</p>
              <p className="font-mono text-xs text-primary">Web full-stack</p>
            </div>
            <div className="border border-border rounded-lg bg-surface px-4 py-3">
              <p className="font-mono text-[0.65rem] text-muted/60 tracking-widest mb-1">VIBE</p>
              <p className="font-mono text-xs text-primary">Gaming · Cine · Música · IA</p>
            </div>
            <div className="border border-border rounded-lg bg-surface px-4 py-3">
              <p className="font-mono text-[0.65rem] text-muted/60 tracking-widest mb-1">LANG</p>
              <p className="font-mono text-xs text-primary">ES / EN</p>
            </div>
            <div className="border border-accent/30 rounded-lg bg-accent/5 px-4 py-3">
              <p className="font-mono text-[0.65rem] text-muted/60 tracking-widest mb-1">STATUS</p>
              <p className="font-mono text-xs text-accent flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Open to work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
