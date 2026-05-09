import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/blog/BlogCard';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog · jarvis_404',
  description: 'Experiencias de vida laboral, proyectos y reflexiones sobre tecnología.',
};

const CATEGORIES = ['todos', 'carrera', 'proyectos', 'tecnología', 'vida'] as const;

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <div className="flex items-center gap-2 mb-2">
            <Link
              href="/"
              className="font-mono text-xs text-muted hover:text-accent transition-colors"
            >
              ← home
            </Link>
          </div>

          <p className="font-mono text-xs text-accent tracking-widest glow mb-3">
            // BLOG_
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Experiencias & proyectos
          </h1>
          <p className="text-muted max-w-xl leading-relaxed">
            Notas sobre mi vida como developer: proyectos que estoy construyendo,
            cosas que aprendí, y reflexiones sobre la industria.
          </p>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <span
              key={cat}
              className={`font-mono text-xs border rounded-sm px-3 py-1.5 cursor-default transition-colors ${
                cat === 'todos'
                  ? 'border-accent/40 text-accent bg-accent/5'
                  : 'border-border text-muted hover:border-accent/20 hover:text-primary'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Posts grid */}
        {posts.length === 0 ? (
          <div className="border border-dashed border-border rounded-xl px-6 py-12 text-center">
            <p className="font-mono text-xs text-muted">
              <span className="text-accent mr-2">›</span>
              Próximamente...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        {/* Note */}
        <div className="mt-12 border border-dashed border-border rounded-xl px-5 py-4">
          <p className="font-mono text-xs text-muted">
            <span className="text-accent mr-2">$</span>
            Escribo cuando tengo algo que valga la pena compartir. Sin cronograma fijo.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
