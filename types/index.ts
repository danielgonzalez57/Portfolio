export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  status: 'live' | 'wip' | 'archived';
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
  blocks: ContentBlock[];
}
