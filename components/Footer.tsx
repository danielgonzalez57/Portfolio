import { profile } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-muted">
            {profile.role}
          </span>
        </div>

        <p className="font-mono text-xs text-muted">
          © {year} · built with{' '}
          <span className="text-accent">Next.js</span>
          {' + '}
          <span className="text-accent">Tailwind</span>
        </p>
      </div>
    </footer>
  );
}
