'use client';

import { useState } from 'react';

function CopyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard not available — silently ignore
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? 'Copiado' : 'Copiar código'}
      className={`flex items-center gap-1.5 font-mono text-[0.65rem] tracking-widest px-2 py-1 rounded-sm border transition-colors cursor-pointer ${
        copied
          ? 'border-accent/40 text-accent'
          : 'border-transparent text-muted hover:text-accent hover:border-accent/30'
      }`}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      {copied ? 'copiado' : 'copy'}
    </button>
  );
}
