'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      setVisible(total - scrollPos < 250);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Volver arriba"
      className={[
        'group fixed bottom-6 right-6 z-40 flex items-center gap-2',
        'font-mono text-xs px-3 py-2 rounded-sm cursor-pointer',
        'border border-accent/40 bg-background/85 backdrop-blur-md text-accent',
        'hover:bg-accent hover:text-background hover:border-accent',
        'transition-[opacity,transform,color,background-color,border-color,box-shadow] duration-500 ease-out',
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none',
      ].join(' ')}
      style={{
        boxShadow: visible ? '0 0 16px rgba(30,215,96,0.15)' : 'none',
      }}
    >
      <span className="text-muted/60 group-hover:text-background/60 transition-colors">$</span>
      <span>cd ~/top</span>
      <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
    </button>
  );
}
