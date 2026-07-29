'use client';

import { useCallback, useState } from 'react';

export function useCopyToClipboard(resetDelay = 2200) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), resetDelay);
      } catch {
        // Clipboard not available — silently ignore
      }
    },
    [resetDelay]
  );

  return { copied, copy };
}
