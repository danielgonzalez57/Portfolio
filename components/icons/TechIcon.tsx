interface TechIconProps {
  name?: string;
  size?: number;
  className?: string;
}

const COLORS: Record<string, string> = {
  vue:   '#4FC08D',
  rag:   '#1ED760',
  mysql: '#4479A1',
};

// Real brand SVGs live in /public/icons/tech/<key>.svg
const SVG_ICONS = new Set([
  'react', 'nextjs', 'typescript', 'javascript', 'angular', 'astro',
  'nodejs', 'nestjs', 'springboot', 'postgresql', 'mongodb', 'git',
  'docker', 'claude', 'notion', 'java', 'python', 'n8n', 'gemini',
]);

function VueIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2 3h4l6 10.5L18 3h4L12 21 2 3z" fill="#4FC08D" />
      <path d="M6 3h3.5L12 8 14.5 3H18L12 13 6 3z" fill="#35495E" />
    </svg>
  );
}

function RagIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#1ED760" strokeWidth="1.5" aria-hidden="true">
      <circle cx="5" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M6.6 7.2L10 10.6M6.6 16.8L10 13.4M14 10.6l3.4-3.4M14 13.4l3.4 3.4" strokeLinecap="round" />
    </svg>
  );
}

function FallbackIcon({ name, size = 20 }: { name: string; size?: number }) {
  const letter = name.charAt(0).toUpperCase();
  const color = COLORS[name.toLowerCase()] ?? '#1ED760';
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke={color} strokeWidth="1.5" />
      <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="monospace" fill={color}>
        {letter}
      </text>
    </svg>
  );
}

export default function TechIcon({ name, size = 20, className }: TechIconProps) {
  const key = (name ?? '').toLowerCase();

  let node: React.ReactNode;
  if (SVG_ICONS.has(key)) {
    // eslint-disable-next-line @next/next/no-img-element -- local trusted SVG, next/image blocks SVG optimization
    node = <img src={`/icons/tech/${key}.svg`} width={size} height={size} alt="" style={{ width: size, height: size }} />;
  } else if (key === 'vue') {
    node = <VueIcon size={size} />;
  } else if (key === 'rag') {
    node = <RagIcon size={size} />;
  } else {
    node = <FallbackIcon name={key} size={size} />;
  }

  return <span className={className}>{node}</span>;
}
