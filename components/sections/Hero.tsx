'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { profile } from '@/lib/data';
import type { SocialLink } from '@/types';

function TypewriterHeading({ name }: { name: string }) {
  const prefix = "Hi, I'm ";
  const full = prefix + name;
  const [index, setIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const start = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setIndex(i => {
          if (i >= full.length) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return i;
          }
          return i + 1;
        });
      }, 75);
    }, 400);
    return () => {
      clearTimeout(start);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [full.length]);

  useEffect(() => {
    if (index < full.length) return;
    const t = setTimeout(() => setCursorVisible(false), 1800);
    return () => clearTimeout(t);
  }, [index, full.length]);

  const shown = full.slice(0, index);
  const shownPrefix = shown.slice(0, prefix.length);
  const shownName = shown.slice(prefix.length);

  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-3 leading-tight">
      {shownPrefix}
      <span className="text-accent glow">{shownName}</span>
      {cursorVisible && (
        <span className="text-accent animate-blink font-light">|</span>
      )}
    </h1>
  );
}

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

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <polyline points="19 12 12 19 5 12"/>
    </svg>
  );
}

function SocialIcon({ icon }: { icon: SocialLink['icon'] }) {
  if (icon === 'github')   return <GithubIcon />;
  if (icon === 'linkedin') return <LinkedinIcon />;
  if (icon === 'email')    return <EmailIcon />;
  return null;
}

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-3.5rem)] flex items-center py-16 sm:py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="order-2 lg:order-1 animate-slide-up">
            <p className="font-mono text-xs text-accent tracking-widest glow mb-6">
              // 01. HELLO, WORLD_
            </p>

            <TypewriterHeading name={profile.name} />

            <p className="font-mono text-lg text-muted mb-6">
              <span className="text-accent">›</span> {profile.role}
            </p>

            <p className="text-muted leading-relaxed mb-8 max-w-lg">
              {profile.bio}
            </p>

            {/* Info tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="font-mono text-xs border border-border rounded-sm px-2.5 py-1 text-muted">
                📍 {profile.location}
              </span>
              <span className="font-mono text-xs border border-border rounded-sm px-2.5 py-1 text-muted">
                ⚡ Open to work
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/#projects"
                className="font-mono text-sm border border-accent text-accent hover:bg-accent hover:text-background px-4 py-2 rounded-sm transition-all cursor-pointer"
              >
                [Ver proyectos ↓]
              </Link>
              {profile.cv && (
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm border border-border text-muted hover:border-accent/50 hover:text-accent px-4 py-2 rounded-sm transition-all cursor-pointer"
                >
                  [Descargar CV ↗]
                </a>
              )}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {profile.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.icon !== 'email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center gap-2 font-mono text-xs text-muted hover:text-accent border border-border hover:border-accent/40 px-3 py-2 rounded-sm transition-all"
                >
                  <SocialIcon icon={link.icon} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-3 border border-accent/20 rounded-2xl" />
              <div className="absolute -inset-6 border border-accent/8 rounded-3xl" />

              {/* Avatar container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-border bg-surface">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  className="object-cover z-10"
                  priority
                />
              </div>

              {/* Accent dot decoration */}
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-accent rounded-full" />
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-accent/50 rounded-full" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <a
            href="/#projects"
            className="flex flex-col items-center gap-2 text-muted/50 hover:text-accent transition-colors group"
            aria-label="Scroll to projects"
          >
            <span className="font-mono text-xs tracking-widest">scroll</span>
            <span className="group-hover:translate-y-1 transition-transform">
              <ArrowDownIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
