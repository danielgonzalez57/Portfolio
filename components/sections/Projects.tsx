'use client';

import Link from 'next/link';
import { projects } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import type { Project } from '@/types';

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

const STATUS_LABELS: Record<Project['status'], string> = {
  live: 'live',
  wip: 'wip',
  archived: 'archived',
};

const STATUS_STYLES: Record<Project['status'], string> = {
  live:     'text-accent border-accent/40 bg-accent/5',
  wip:      'text-yellow-400 border-yellow-400/40 bg-yellow-400/5',
  archived: 'text-muted border-border',
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col border border-border rounded-xl bg-surface hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
      {/* Header */}
      <div className="p-5 pb-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className={`font-mono text-[0.65rem] border rounded-sm px-1.5 py-0.5 tracking-widest ${STATUS_STYLES[project.status]}`}
            >
              {STATUS_LABELS[project.status]}
            </span>
            {project.featured && (
              <span className="font-mono text-[0.65rem] border border-accent/20 rounded-sm px-1.5 py-0.5 text-accent/70 tracking-widest">
                featured
              </span>
            )}
          </div>
          <h3 className="font-mono font-bold text-primary group-hover:text-accent transition-colors text-lg">
            {project.title}
          </h3>
        </div>

        {/* Links */}
        <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} en GitHub`}
              className="w-7 h-7 flex items-center justify-center rounded-lg text-muted hover:text-accent hover:bg-background transition-colors"
            >
              <GithubIcon />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Demo de ${project.title}`}
              className="w-7 h-7 flex items-center justify-center rounded-lg text-muted hover:text-accent hover:bg-background transition-colors"
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="px-5 text-sm text-muted leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="p-5 pt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[0.65rem] border border-border rounded-sm px-2 py-0.5 text-muted/70 tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();

  const featured = projects.filter((p) => p.featured);
  const others   = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-28 reveal ${inView ? 'visible' : 'hidden'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-accent tracking-widest glow mb-3">
            // 03. PROJECTS_
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Lo que he construido
          </h2>
          <p className="text-muted max-w-xl">
            Proyectos reales que resuelven problemas reales. Del concepto al deployment.
          </p>
        </div>

        {/* Featured projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <p className="font-mono text-xs text-muted tracking-widest mb-4 mt-8">
              // otros proyectos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {others.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
