'use client';

import { useEffect, useRef, useState } from 'react';

export function useInView() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) { setInView(true); return; }

    let cancelled = false;
    const show = () => { if (!cancelled) setInView(true); };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
          window.removeEventListener('scroll', onScroll);
        }
      },
      { threshold: 0 }
    );

    const onScroll = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        show();
        observer.disconnect();
        window.removeEventListener('scroll', onScroll);
      }
    };

    // If already in viewport at mount, fire on next frame so the keyframe runs
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      requestAnimationFrame(show);
      return () => { cancelled = true; };
    }

    observer.observe(el);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelled = true;
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { ref, inView };
}
