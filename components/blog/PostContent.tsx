import type { ContentBlock } from '@/types';

interface PostContentProps {
  blocks: ContentBlock[];
}

export default function PostContent({ blocks }: PostContentProps) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p
                key={index}
                className="text-muted leading-relaxed text-[0.95rem]"
              >
                {block.content}
              </p>
            );

          case 'heading':
            if (block.level === 2) {
              return (
                <h2
                  key={index}
                  className="text-xl font-bold text-primary mt-10 mb-2 font-mono"
                >
                  <span className="text-accent mr-2">##</span>
                  {block.content}
                </h2>
              );
            }
            return (
              <h3
                key={index}
                className="text-lg font-semibold text-primary mt-6 mb-2 font-mono"
              >
                <span className="text-accent/60 mr-2">###</span>
                {block.content}
              </h3>
            );

          case 'code':
            return (
              <div key={index} className="rounded-xl overflow-hidden border border-border">
                {/* Code header */}
                <div className="flex items-center justify-between bg-surface border-b border-border px-4 py-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="font-mono text-[0.65rem] text-muted tracking-widest">
                    {block.language}
                  </span>
                </div>
                <pre className="bg-background overflow-x-auto p-4">
                  <code className="font-mono text-xs text-muted leading-relaxed">
                    {block.content}
                  </code>
                </pre>
              </div>
            );

          case 'list':
            return (
              <ul key={index} className="space-y-2">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[0.95rem] text-muted">
                    <span className="font-mono text-accent shrink-0 mt-0.5">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            );

          case 'quote':
            return (
              <blockquote
                key={index}
                className="border-l-2 border-accent pl-5 py-1 italic text-muted"
              >
                <span className="font-mono text-accent mr-1 not-italic">&quot;</span>
                {block.content}
                <span className="font-mono text-accent ml-1 not-italic">&quot;</span>
              </blockquote>
            );

          case 'divider':
            return (
              <hr key={index} className="border-border" />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
