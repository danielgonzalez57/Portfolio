'use client';

import { createPortal } from 'react-dom';

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Toast({ message, show }: { message: string; show: boolean }) {
  if (!show) return null;

  return createPortal(
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] animate-slide-up"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-2.5 bg-surface border border-accent/40 rounded-lg px-4 py-3 shadow-2xl">
        <span className="w-5 h-5 shrink-0 rounded-full bg-accent/15 text-accent flex items-center justify-center">
          <CheckIcon />
        </span>
        <p className="font-mono text-xs text-primary whitespace-nowrap">{message}</p>
      </div>
    </div>,
    document.body
  );
}
