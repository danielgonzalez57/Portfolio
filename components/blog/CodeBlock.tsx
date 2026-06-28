import { codeToHtml } from 'shiki';
import CopyButton from './CopyButton';

interface CodeBlockProps {
  code: string;
  language: string;
}

// Map our block languages to shiki grammar ids
const LANG_MAP: Record<string, string> = {
  typescript: 'typescript',
  ts: 'typescript',
  javascript: 'javascript',
  js: 'javascript',
  json: 'json',
  markdown: 'markdown',
  md: 'markdown',
  bash: 'bash',
  text: 'text',
};

export default async function CodeBlock({ code, language }: CodeBlockProps) {
  const lang = LANG_MAP[language] ?? 'text';

  const html = await codeToHtml(code, {
    lang,
    theme: 'github-dark-default',
  });

  return (
    <div className="rounded-xl overflow-hidden border border-border">
      {/* Code header */}
      <div className="flex items-center justify-between bg-surface border-b border-border px-4 py-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.65rem] text-muted tracking-widest">
            {language}
          </span>
          <CopyButton code={code} />
        </div>
      </div>

      {/* Highlighted code */}
      <div
        className="bg-background overflow-x-auto p-4 text-xs leading-relaxed
          [&_pre]:bg-transparent! [&_pre]:m-0 [&_pre]:p-0
          [&_code]:font-mono [&_code]:bg-transparent!"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
