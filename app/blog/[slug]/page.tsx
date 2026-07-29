import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PostContent from '@/components/blog/PostContent';
import TagBadge from '@/components/TagBadge';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { profile } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} · ${profile.handle}`,
    description: post.excerpt,
  };
}

const CATEGORY_STYLES: Record<string, string> = {
  carrera:    'text-blue-400 border-blue-400/30 bg-blue-400/5',
  proyectos:  'text-accent border-accent/30 bg-accent/5',
  tecnología: 'text-purple-400 border-purple-400/30 bg-purple-400/5',
  vida:       'text-orange-400 border-orange-400/30 bg-orange-400/5',
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-AR', {
    year:  'numeric',
    month: 'long',
    day:   'numeric',
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const categoryStyle =
    CATEGORY_STYLES[post.category] ?? 'text-muted border-border';

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors mb-10 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          volver al blog
        </Link>

        {/* Post header */}
        <header className="mb-10 animate-slide-up">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span
              className={`font-mono text-[0.65rem] border rounded-sm px-1.5 py-0.5 tracking-widest ${categoryStyle}`}
            >
              {post.category}
            </span>
            <span className="font-mono text-[0.65rem] text-muted/60">
              {formatDate(post.date)}
            </span>
            <span className="font-mono text-[0.65rem] text-muted/60">
              · {post.readTime} min de lectura
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-muted leading-relaxed">
            {post.excerpt}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {post.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          )}

          <div className="mt-6 border-t border-border pt-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center font-mono text-xs font-bold text-accent select-none">
              {profile.name[0]}
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">{profile.name}</p>
              <p className="font-mono text-xs text-muted">{profile.handle}</p>
            </div>
          </div>
        </header>

        {/* Post content */}
        <article className="animate-fade-in">
          <PostContent blocks={post.blocks} />
        </article>

        {/* Footer navigation */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            ver todos los posts
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
