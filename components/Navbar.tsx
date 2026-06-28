'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppContext } from '@/contexts/AppContext';

const NAV_LINKS = [
  { label: 'about',    href: '/#about-me' },
  { label: 'projects', href: '/#projects' },
  { label: 'stack',    href: '/#stack' },
  { label: 'services', href: '/#services' },
  { label: 'contact',  href: '/#contact' },
  { label: 'blog',     href: '/blog' },
] as const;

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6"  x2="21" y2="6"  />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

const SECTION_IDS = ['about-me', 'projects', 'stack', 'services', 'contact'];

export default function Navbar() {
  const { theme, toggleTheme } = useAppContext();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isBlog = pathname.startsWith('/blog');

  // Scroll-spy: tracks which section is currently in view
  useEffect(() => {
    if (isBlog) {
      setActiveSection('');
      return;
    }

    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isBlog]);

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled || menuOpen
            ? 'bg-background border-b border-border'
            : 'bg-transparent',
        ].join(' ')}
      >
        <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="Inicio" />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/blog'
                  ? isBlog
                  : !isBlog && link.href === `/#${activeSection}`;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    'font-mono text-xs px-3 py-1.5 rounded-sm transition-colors',
                    isActive
                      ? 'text-accent glow'
                      : 'text-muted hover:text-primary',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
              className="h-7 px-2.5 font-mono text-xs border border-border text-muted hover:border-accent/50 hover:text-accent transition-colors cursor-pointer rounded-sm"
            >
              {theme === 'dark' ? '[☀]' : '[◗]'}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-muted hover:text-primary hover:bg-surface transition-colors cursor-pointer"
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background animate-slide-down">
            <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === '/blog'
                    ? isBlog
                    : !isBlog && link.href === `/#${activeSection}`;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={[
                      'font-mono text-sm px-2 py-2.5 rounded-lg hover:bg-surface transition-colors flex items-center gap-2',
                      isActive ? 'text-accent glow' : 'text-muted hover:text-accent',
                    ].join(' ')}
                  >
                    <span className="text-accent">›</span>
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-14" />
    </>
  );
}
