export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  status: 'live' | 'wip' | 'archived';
  /** Extended text shown in the "Ver detalles" modal for projects without a public link. */
  details?: string;
  /** Ordered steps the automation follows, shown as a numbered flow in the details modal. */
  steps?: string[];
  /** Approximate time the automation saves, shown as a highlighted stat (e.g. "~6 horas/semana"). */
  timeSaved?: string;
  /** Business rationale — why the automation exists and how it helps the company. */
  impact?: string;
}

export interface StackItem {
  name: string;
  icon?: string;
  primary?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'web' | 'api' | 'landing' | 'mvp';
  features: string[];
}

export interface StackCategory {
  label: string;
  items: StackItem[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'email' | 'web';
}

export interface Profile {
  name: string;
  handle: string;
  role: string;
  bio: string;
  location: string;
  email: string;
  /** E.164 format, digits only (no +, spaces or dashes), used to build wa.me links. */
  whatsapp?: string;
  avatar: string;
  social: SocialLink[];
  cv?: string;
}

export type ContentBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'heading'; level: 2 | 3; content: string }
  | { type: 'code'; language: string; content: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; content: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'divider' };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: number;
  /** Tech/tool tags shown with their icon when available (see TAG_ICON_MAP). */
  tags?: string[];
  blocks: ContentBlock[];
}
