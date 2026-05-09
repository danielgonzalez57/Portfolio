'use client';

import type { BlogPost } from '@/types';
import BlogCard from './BlogCard';

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <div className="border border-dashed border-border rounded-xl px-6 py-12 text-center">
        <p className="font-mono text-xs text-muted">
          <span className="text-accent mr-2">›</span>
          Próximamente...
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post, i) => (
        <div
          key={post.slug}
          className="h-full"
          style={{
            animation: `fade-up-card 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${120 + i * 110}ms both`,
          }}
        >
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
}
