# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **personal portfolio website** for Desared Osmanllari (Data Scientist), built with Next.js 16 and deployed on GitHub Pages at desared.com.

**Technology Stack:**
- Next.js 16 (App Router) with static export
- TypeScript
- Tailwind CSS (dark theme)
- shadcn/ui (Button, Card, Badge, Input, Textarea, Label)
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
│   ├── layout.tsx       # Root layout (fonts, metadata, LanguageProvider)
│   ├── page.tsx         # Main page composing all sections
│   └── globals.css      # Tailwind + CSS variables (dark theme)
├── components/
│   ├── ui/              # shadcn/ui primitives (button, card, badge, etc.)
│   ├── navigation.tsx   # Fixed nav with terminal branding + language switcher
│   ├── hero.tsx         # Hero section
│   ├── about.tsx        # About section (3 cards)
│   ├── portfolio.tsx    # Project grid
│   ├── talks.tsx        # Invited talks
│   ├── skills.tsx       # Technical expertise (certs, stack, languages)
│   ├── contact.tsx      # Contact form + social links
│   ├── footer.tsx       # Copyright
│   └── scroll-to-top.tsx
├── lib/
│   ├── utils.ts         # shadcn cn() utility
│   ├── firebase.ts      # Firebase config + Firestore init
│   └── i18n.tsx         # Language context provider + useLanguage hook
└── data/
    └── translations.ts  # All EN/DE content
```

### Key Patterns

- **Single page app**: All sections are composed in `src/app/page.tsx`
- **i18n**: Client-side language switching via React context (`src/lib/i18n.tsx`), persists to localStorage
- **All content** lives in `src/data/translations.ts` (both EN and DE)
- **Static export**: `next.config.ts` has `output: "export"` and `images: { unoptimized: true }`
- **Dark theme**: CSS variables defined in `globals.css` with emerald accent (#34d399)

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
