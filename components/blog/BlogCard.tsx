import Link from 'next/link';
import TagBadge from '@/components/TagBadge';
import type { BlogPost } from '@/types';

const CATEGORY_STYLES: Record<string, string> = {
  carrera:     'text-blue-400 border-blue-400/30 bg-blue-400/5',
  proyectos:   'text-accent border-accent/30 bg-accent/5',
  tecnología:  'text-purple-400 border-purple-400/30 bg-purple-400/5',
  vida:        'text-orange-400 border-orange-400/30 bg-orange-400/5',
};

function getCategoryStyle(category: string): string {
  return CATEGORY_STYLES[category] ?? 'text-muted border-border';
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-AR', {
    year:  'numeric',
    month: 'long',
    day:   'numeric',
  });
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col h-full border border-border rounded-xl bg-surface hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
    >
      {/* Top accent line */}
      <div className="h-0.5 bg-linear-to-r from-accent/0 via-accent/40 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span
            className={`font-mono text-[0.65rem] border rounded-sm px-1.5 py-0.5 tracking-widest ${getCategoryStyle(post.category)}`}
          >
            {post.category}
          </span>
          <span className="font-mono text-[0.65rem] text-muted/50">
            {formatDate(post.date)}
          </span>
          <span className="font-mono text-[0.65rem] text-muted/50">
            · {post.readTime} min
          </span>
        </div>

        {/* Title */}
        <h2 className="font-bold text-lg text-primary group-hover:text-accent transition-colors mb-2 leading-snug">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-4 flex-1">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        )}

        {/* Read more */}
        <div className="flex items-center gap-1.5 font-mono text-xs text-muted group-hover:text-accent transition-colors">
          <span>leer más</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}
