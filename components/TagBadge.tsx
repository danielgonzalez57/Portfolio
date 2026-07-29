import TechIcon from '@/components/icons/TechIcon';

// Only tags with a real logo available in TechIcon get an icon — the rest stay plain text.
export const TAG_ICON_MAP: Record<string, string> = {
  'vue.js':      'vue',
  'nest.js':     'nestjs',
  'nestjs':      'nestjs',
  'next.js':     'nextjs',
  'nextjs':      'nextjs',
  'react':       'react',
  'typescript':  'typescript',
  'javascript':  'javascript',
  'angular':     'angular',
  'astro':       'astro',
  'node.js':     'nodejs',
  'nodejs':      'nodejs',
  'spring boot': 'springboot',
  'postgresql':  'postgresql',
  'mongodb':     'mongodb',
  'git':         'git',
  'docker':      'docker',
  'claude':      'claude',
  'notion':      'notion',
  'java':        'java',
  'python':      'python',
  'n8n':         'n8n',
  'rag':         'rag',
  'gemini':      'gemini',
};

export default function TagBadge({ tag }: { tag: string }) {
  const iconKey = TAG_ICON_MAP[tag.toLowerCase()];
  return (
    <span className="inline-flex items-center gap-1 font-mono text-[0.65rem] border border-border rounded-sm px-2 py-0.5 text-muted/70 tracking-wide">
      {iconKey && <TechIcon name={iconKey} size={11} className="shrink-0 inline-flex" />}
      {tag}
    </span>
  );
}
