interface TechIconProps {
  name?: string;
  size?: number;
  className?: string;
}

const COLORS: Record<string, string> = {
  react:      '#61DAFB',
  nextjs:     '#ffffff',
  typescript: '#3178C6',
  tailwind:   '#06B6D4',
  angular:    '#DD0031',
  astro:      '#BC52EE',
  nodejs:     '#5FA04E',
  prisma:     '#2D3748',
  api:        '#1ED760',
  nextauth:   '#7C3AED',
  jwt:        '#FB7185',
  postgresql: '#4169E1',
  mysql:      '#4479A1',
  sqlite:     '#003B57',
  git:        '#F05032',
  docker:     '#2496ED',
  vscode:     '#007ACC',
  figma:      '#F24E1E',
  postman:    '#FF6C37',
};

function ReactIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23 23 20.46" aria-hidden="true">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function NextjsIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path d="M9.4 7.5h1.4v9h-1.4v-9zm5.5 0h1.4v6.5l-4.4-6.5H10.5v.6l5.4 8h.6V7.5z" fill="#000" />
    </svg>
  );
}

function TypescriptIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <path
        d="M9.5 11.5h-2v6h-1.6v-6H4v-1.4h5.5v1.4zm.7 4.5c.4.3 1 .5 1.6.5.7 0 1.1-.3 1.1-.7 0-.5-.4-.7-1.2-1-1.2-.4-1.8-1-1.8-1.9 0-1.1.9-1.9 2.3-1.9.6 0 1.1.1 1.5.3v1.4c-.4-.2-.9-.4-1.5-.4-.6 0-1 .3-1 .6 0 .4.4.6 1.3.9 1.2.4 1.8 1 1.8 2 0 1.2-.9 1.9-2.4 1.9-.7 0-1.3-.2-1.7-.4V16z"
        fill="#fff"
      />
    </svg>
  );
}

function TailwindIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C15.7 7.2 14.6 6 12 6zM7 12c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C10.7 13.2 9.6 12 7 12z"
        fill="#06B6D4"
      />
    </svg>
  );
}

function NodejsIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2 3 7v10l9 5 9-5V7l-9-5z"
        fill="#5FA04E"
      />
      <text x="12" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fontFamily="monospace" fill="#fff">JS</text>
    </svg>
  );
}

function PostgresIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="9" ry="6" fill="none" stroke="#4169E1" strokeWidth="2" />
      <ellipse cx="12" cy="12" rx="4" ry="6" fill="none" stroke="#4169E1" strokeWidth="1.5" />
      <line x1="3" y1="12" x2="21" y2="12" stroke="#4169E1" strokeWidth="1.5" />
    </svg>
  );
}

function GitIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="6" cy="6" r="2.5" fill="#F05032" />
      <circle cx="6" cy="18" r="2.5" fill="#F05032" />
      <circle cx="18" cy="12" r="2.5" fill="#F05032" />
      <line x1="6" y1="8.5" x2="6" y2="15.5" stroke="#F05032" strokeWidth="1.5" />
      <line x1="6" y1="9" x2="16" y2="11.5" stroke="#F05032" strokeWidth="1.5" />
    </svg>
  );
}

function DockerIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <g fill="#2496ED">
        <rect x="3"  y="11" width="3" height="3" rx="0.3" />
        <rect x="6.5" y="11" width="3" height="3" rx="0.3" />
        <rect x="10" y="11" width="3" height="3" rx="0.3" />
        <rect x="6.5" y="7.5" width="3" height="3" rx="0.3" />
        <rect x="10" y="7.5" width="3" height="3" rx="0.3" />
        <rect x="13.5" y="11" width="3" height="3" rx="0.3" />
        <path d="M21 12c-1-1-2-1-3-1l.5 1.5c.3 1-.2 2-1.2 2.5C16 16 13.5 16.5 11 16.5c-3 0-6-1-7-3-1 2 0 4 2 5 1.5.7 3.5 1 5.5 1 5 0 9-2 10.5-7z" />
      </g>
    </svg>
  );
}

function AngularIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 3 5l1.5 12L12 22l7.5-5L21 5 12 2z" fill="#DD0031" />
      <path d="M12 4 5 6l1 10 6 4 6-4 1-10-7-2zm-3 12 3-7 3 7h-1.5l-.6-1.5h-2l-.6 1.5H9zm2.4-3h1.2L12 11l-.6 2z" fill="#fff" />
    </svg>
  );
}

function AstroIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 7 19l5-3 5 3-5-17z" fill="#BC52EE" />
      <ellipse cx="12" cy="18" rx="6" ry="2" fill="none" stroke="#BC52EE" strokeWidth="1.5" />
    </svg>
  );
}

function VsCodeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17 2 9 11l-4-3-3 2v4l3 2 4-3 8 9 5-2V4l-5-2zm0 5v10l-5-5 5-5z" fill="#007ACC" />
    </svg>
  );
}

function PrismaIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 4 18a1 1 0 0 0 .5 1.4l9 2.5a1 1 0 0 0 1.3-.9L17 5a1 1 0 0 0-.6-1L13 2.2a1 1 0 0 0-1 0z" fill="currentColor" />
    </svg>
  );
}

function FallbackIcon({ name, size = 20 }: { name: string; size?: number }) {
  const letter = name.charAt(0).toUpperCase();
  const color = COLORS[name.toLowerCase()] ?? '#1ED760';
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke={color} strokeWidth="1.5" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fontFamily="monospace"
        fill={color}
      >
        {letter}
      </text>
    </svg>
  );
}

export default function TechIcon({ name, size = 20, className }: TechIconProps) {
  const key = (name ?? '').toLowerCase();

  const iconMap: Record<string, React.ReactNode> = {
    react:      <ReactIcon size={size} />,
    nextjs:     <NextjsIcon size={size} />,
    typescript: <TypescriptIcon size={size} />,
    tailwind:   <TailwindIcon size={size} />,
    nodejs:     <NodejsIcon size={size} />,
    postgresql: <PostgresIcon size={size} />,
    git:        <GitIcon size={size} />,
    docker:     <DockerIcon size={size} />,
    angular:    <AngularIcon size={size} />,
    astro:      <AstroIcon size={size} />,
    vscode:     <VsCodeIcon size={size} />,
    prisma:     <PrismaIcon size={size} />,
  };

  const node = iconMap[key] ?? <FallbackIcon name={key} size={size} />;
  return <span className={className}>{node}</span>;
}
