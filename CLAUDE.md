# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **personal portfolio website** for Desared Osmanllari (Data Scientist), built with Next.js 16 and deployed on GitHub Pages at desared.com.

**Technology Stack:**
- Next.js 16 (App Router) with static export
- TypeScript
- Tailwind CSS v4 (dark theme) — uses `@theme inline` syntax, **not** `tailwind.config.ts`
- shadcn/ui (Button, Card, Badge, Input, Textarea, Label) — New York style, Slate base
- Lucide React (icons)
- Google Fonts via `next/font` (Inter + JetBrains Mono)
- Firebase Firestore (contact form backend)
- Bilingual support (English/German)

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev
# Visit http://localhost:3000

# Production build (static export to ./out/)
npm run build

# Lint
npm run lint
```

## Deployment

Pushes to `master` trigger a GitHub Actions workflow (`.github/workflows/nextjs.yml`) that builds and deploys to GitHub Pages. The CNAME file in `public/` maps to desared.com.

## Architecture

### Project Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout (fonts, metadata, LanguageProvider)
│   ├── page.tsx                      # Main page composing all sections
│   ├── globals.css                   # Tailwind + CSS variables (dark theme)
│   └── projects/[slug]/
│       ├── page.tsx                  # Static params + server wrapper
│       └── project-detail-client.tsx # Client-side project detail view
├── components/
│   ├── ui/                           # shadcn/ui primitives
│   ├── navigation.tsx                # Fixed nav with terminal branding + language switcher
│   ├── hero.tsx
│   ├── about.tsx                     # 3 cards (bio, founder, links)
│   ├── portfolio.tsx                 # Project grid linking to /projects/[slug]
│   ├── talks.tsx                     # Invited talks
│   ├── skills.tsx                    # Certs, tech stack, languages
│   ├── contact.tsx                   # Contact form + social links
│   ├── footer.tsx
│   └── scroll-to-top.tsx
├── lib/
│   ├── utils.ts                      # shadcn cn() utility
│   ├── firebase.ts                   # Firebase config + Firestore init
│   ├── i18n.tsx                      # Language context provider + useLanguage hook
│   └── theme.tsx                     # ThemeProvider + useTheme hook (dark/light, persists to localStorage)
└── data/
    ├── translations.ts               # All EN/DE UI text content
    └── projects.ts                   # Project detail data (descriptions, links, tags)
```

### Key Patterns

- **Single page app**: All sections are composed in `src/app/page.tsx`
- **i18n**: Client-side language switching via React context (`src/lib/i18n.tsx`), persists to localStorage. Translations typed as `(typeof translations)[Lang]` — avoid indexing with `["en"]` directly
- **Content split**: UI text in `src/data/translations.ts` (EN/DE); project detail data in `src/data/projects.ts`
- **Project detail pages**: Static routes generated via `generateStaticParams` in `src/app/projects/[slug]/page.tsx`
- **Static export**: `next.config.ts` has `output: "export"` and `images: { unoptimized: true }`
- **Theme**: Light/dark toggle via `src/lib/theme.tsx` (`useTheme` hook), defaults to dark, persists to localStorage. CSS variables in `globals.css` with emerald accent (#34d399)
- **Tailwind v4**: Configure via `@theme inline` in `globals.css`, not `tailwind.config.ts`

### Contact Form

The contact form submits to Firebase Firestore (project: `portfolio-contact-form-feb09`) and sends a notification webhook to Make.com. All client-side — no API routes needed.

## File Editing Guidelines

### When Updating Content
1. Edit `src/data/translations.ts` — both EN and DE entries
2. Content is typed; TypeScript will catch missing translations

### When Updating Styles
1. Use Tailwind utility classes in components
2. Global styles/CSS variables in `src/app/globals.css`
3. shadcn/ui components can be customized in `src/components/ui/`

### When Adding Images
1. Place images in `public/images/`
2. Reference as `/images/filename.ext` in components
3. Use Next.js `<Image>` component for optimization hints

### When Adding shadcn/ui Components
```bash
npx shadcn@latest add <component-name>
```
