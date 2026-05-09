'use client';

import { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTransition({ children, className }: PageTransitionProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={className}
      style={
        ready
          ? { animation: 'slide-in-right 0.65s cubic-bezier(0.16, 1, 0.3, 1) both' }
          : { opacity: 0 }
      }
    >
      {children}
    </div>
  );
}
