# CLAUDE.md

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server with Turbopack (http://localhost:3000)
npm run build        # Production build
npm start            # Production server
npm run lint         # Next.js lint
npm run type-check   # TypeScript check (tsc --noEmit)
```

## Architecture

Next.js 15 App Router portfolio with 2 sections: main portfolio + blog.

**Stack:** Next.js 15, React 19, TypeScript 5.8 (strict), Tailwind CSS v4

**Design system:** Identical to chat-IA — dark/light theme via CSS variables, Geist fonts, `#1ED760` accent green, monospace UI tokens, `glow` class for accent highlights.

## Structure

```
app/
  page.tsx              # Main portfolio (single-page scroll)
  blog/
    page.tsx            # Blog listing
    [slug]/page.tsx     # Individual post
  api/contact/route.ts  # Contact form endpoint (add email provider)
  globals.css           # Design tokens + animations
  layout.tsx            # Root layout with fonts + AppProvider

components/
  Navbar.tsx            # Sticky nav + mobile menu + theme toggle
  Footer.tsx
  sections/
    Hero.tsx            # About me, photo, social links, CTA
    Projects.tsx        # Project cards grid
    Stack.tsx           # Tech stack by category
    Contact.tsx         # Contact info + form
  blog/
    BlogCard.tsx        # Post card for listing
    PostContent.tsx     # Block-based post renderer

contexts/
  AppContext.tsx         # Theme (dark/light) with localStorage

hooks/
  useInView.ts          # Intersection observer for scroll reveal

lib/
  data.ts               # Profile, projects, stack — UPDATE WITH YOUR INFO
  posts.ts              # Blog posts static content

types/index.ts          # Shared interfaces
```

## Personalization checklist

- `lib/data.ts` — Update name, bio, email, social links, projects, location
- `public/images/avatar.jpg` — Add your photo
- `public/cv.pdf` — Add your CV
- `app/layout.tsx` — Update metadata title/description
- `app/api/contact/route.ts` — Add email provider (e.g., Resend)

## Adding blog posts

Add new entries to `lib/posts.ts`. Each post uses a block-based content model:

```ts
{
  slug: 'my-post',
  title: 'Post title',
  excerpt: 'Short description',
  date: '2025-06-01',
  category: 'proyectos',
  readTime: 5,
  blocks: [
    { type: 'paragraph', content: '...' },
    { type: 'heading', level: 2, content: '...' },
    { type: 'code', language: 'typescript', content: '...' },
    { type: 'list', items: ['...', '...'] },
    { type: 'quote', content: '...' },
  ],
}
```
