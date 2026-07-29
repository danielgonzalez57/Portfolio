'use client';

import { useState, type FormEvent } from 'react';
import { profile } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import Toast from '@/components/Toast';

type SentMessage = {
  id: string;
  name: string;
  text: string;
};

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

function WhatsappIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5L2 22l5.13-1.35a9.96 9.96 0 0 0 4.91 1.29h.01c5.52 0 10-4.48 10-10s-4.49-9.94-10.01-9.94zm5.83 14.1c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2.01.89 2.16.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.2.72-.84.91-1.13.19-.29.39-.24.65-.14.27.1 1.68.79 1.97.93.29.15.48.22.55.34.07.13.07.72-.17 1.4z"/>
    </svg>
  );
}

const whatsappUrl = (text: string) =>
  `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`;

export default function Contact() {
  const { ref, inView } = useInView();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState<SentMessage[]>([]);
  const { copied: emailCopied, copy: copyEmail } = useCopyToClipboard();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const text = name.trim() ? `Hola, soy ${name.trim()}. ${message.trim()}` : message.trim();
    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer');

    setSent((prev) => [...prev, { id: crypto.randomUUID(), name: name.trim(), text: message.trim() }]);
    setMessage('');
  };

  const inputClass =
    'w-full bg-background border border-border rounded-lg px-3.5 py-2.5 text-sm text-primary placeholder:text-muted/50 font-mono focus:outline-none focus:border-accent/50 transition-colors';

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-28 reveal ${inView ? 'is-visible' : 'is-hidden'}`}
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

              {profile.whatsapp && (
                <a
                  href={whatsappUrl('Hola Daniel, vi tu portfolio y quiero conversar contigo.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <span className="font-mono text-xs text-accent mt-0.5">›</span>
                  <div>
                    <p className="text-xs text-muted font-mono mb-0.5">whatsapp</p>
                    <p className="text-sm text-primary group-hover:text-accent transition-colors flex items-center gap-1.5">
                      <WhatsappIcon />
                      Escríbeme directo
                    </p>
                  </div>
                </a>
              )}

              <button
                type="button"
                onClick={() => copyEmail(profile.email)}
                aria-label={`Copiar ${profile.email}`}
                className="flex items-start gap-3 group text-left w-full cursor-pointer"
              >
                <span className="font-mono text-xs text-accent mt-0.5">›</span>
                <div>
                  <p className="text-xs text-muted font-mono mb-0.5">email</p>
                  <p className="text-sm text-primary group-hover:text-accent transition-colors">
                    {profile.email}
                  </p>
                </div>
              </button>

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

          {/* Right: WhatsApp composer */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-muted mb-1.5">
                  nombre <span className="text-muted/50">(opcional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-muted mb-1.5">
                  mensaje
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Hola, me gustaría hablar sobre..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full font-mono text-sm border border-accent text-accent hover:bg-accent hover:text-background py-2.5 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <WhatsappIcon />
                Enviar por WhatsApp ↗
              </button>

              <p className="font-mono text-[0.7rem] text-muted/60 text-center">
                Se abre WhatsApp con tu mensaje listo — solo falta que le des enviar ahí.
              </p>
            </form>

            {sent.length > 0 && (
              <div className="mt-6 space-y-2 animate-slide-up">
                <p className="font-mono text-xs text-muted tracking-widest">// tu mensaje</p>
                {sent.map((m) => (
                  <div key={m.id} className="flex justify-end">
                    <div className="max-w-[85%] bg-accent/10 border border-accent/30 rounded-xl rounded-tr-sm px-4 py-2.5">
                      {m.name && (
                        <p className="font-mono text-[0.65rem] text-accent/70 mb-1">{m.name}</p>
                      )}
                      <p className="text-sm text-primary whitespace-pre-wrap">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Toast message={`Has copiado el email "${profile.email}"`} show={emailCopied} />
    </section>
  );
}
