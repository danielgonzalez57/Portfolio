'use client';

import { useState, type FormEvent } from 'react';
import { profile } from '@/lib/data';
import { useInView } from '@/hooks/useInView';

type FormState = 'idle' | 'loading' | 'success' | 'error';

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function Contact() {
  const { ref, inView } = useInView();
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed');
      setFormState('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setFormState('error');
    }
  };

  const inputClass =
    'w-full bg-background border border-border rounded-lg px-3.5 py-2.5 text-sm text-primary placeholder:text-muted/50 font-mono focus:outline-none focus:border-accent/50 transition-colors';

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-28 reveal ${inView ? 'visible' : 'hidden'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-accent tracking-widest glow mb-3">
            // 06. CONTACT_
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Hablemos
          </h2>
          <p className="text-muted max-w-xl">
            Abierto a nuevas oportunidades, proyectos freelance o simplemente charlar sobre tecnología.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="border border-border rounded-xl bg-surface p-5 space-y-4">
              <p className="font-mono text-xs text-muted tracking-widest">// contacto directo</p>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-start gap-3 group"
              >
                <span className="font-mono text-xs text-accent mt-0.5">›</span>
                <div>
                  <p className="text-xs text-muted font-mono mb-0.5">email</p>
                  <p className="text-sm text-primary group-hover:text-accent transition-colors">
                    {profile.email}
                  </p>
                </div>
              </a>

              {profile.social.find((s) => s.icon === 'github') && (
                <a
                  href={profile.social.find((s) => s.icon === 'github')!.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <span className="font-mono text-xs text-accent mt-0.5">›</span>
                  <div>
                    <p className="text-xs text-muted font-mono mb-0.5">github</p>
                    <p className="text-sm text-primary group-hover:text-accent transition-colors flex items-center gap-1.5">
                      <GithubIcon />
                      danielgonzalez57
                    </p>
                  </div>
                </a>
              )}

              {profile.social.find((s) => s.icon === 'linkedin') && (
                <a
                  href={profile.social.find((s) => s.icon === 'linkedin')!.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <span className="font-mono text-xs text-accent mt-0.5">›</span>
                  <div>
                    <p className="text-xs text-muted font-mono mb-0.5">linkedin</p>
                    <p className="text-sm text-primary group-hover:text-accent transition-colors flex items-center gap-1.5">
                      <LinkedinIcon />
                      {profile.name}
                    </p>
                  </div>
                </a>
              )}
            </div>

            <div className="border border-dashed border-border rounded-xl px-5 py-4">
              <p className="font-mono text-xs text-muted">
                <span className="text-accent mr-2">$</span>
                Tiempo de respuesta promedio:{' '}
                <span className="text-primary">{'< 24h'}</span>
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {formState === 'success' ? (
              <div className="border border-accent/30 bg-accent/5 rounded-xl p-8 text-center animate-slide-up">
                <p className="font-mono text-accent text-lg glow mb-2">
                  ✓ Mensaje enviado
                </p>
                <p className="text-sm text-muted">
                  Gracias por escribir. Te respondo a la brevedad.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-4 font-mono text-xs text-muted hover:text-accent border border-border rounded-sm px-3 py-1.5 transition-colors cursor-pointer"
                >
                  [enviar otro ↩]
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-muted mb-1.5">
                      nombre
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-muted mb-1.5">
                      email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tu@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-muted mb-1.5">
                    mensaje
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Hola, me gustaría hablar sobre..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {formState === 'error' && (
                  <p className="font-mono text-xs text-red-400 border border-red-400/20 bg-red-400/5 rounded-lg px-3 py-2">
                    Error al enviar. Intentá de nuevo o escribime directamente por email.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full font-mono text-sm border border-accent text-accent hover:bg-accent hover:text-background py-2.5 rounded-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === 'loading' ? '[enviando...]' : '[Enviar mensaje ↗]'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
