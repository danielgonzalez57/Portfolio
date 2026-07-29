'use client';

import { useState } from 'react';
import type { BlogPost } from '@/types';
import BlogGrid from './BlogGrid';

const CATEGORIES = ['todos', 'carrera', 'proyectos', 'tecnología', 'vida'] as const;

export default function BlogExplorer({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<string>('todos');

  const filtered = active === 'todos' ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={cat === active}
            className={`font-mono text-xs border rounded-sm px-3 py-1.5 transition-colors cursor-pointer ${
              cat === active
                ? 'border-accent/40 text-accent bg-accent/5'
                : 'border-border text-muted hover:border-accent/20 hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      <BlogGrid posts={filtered} />
    </>
  );
}
