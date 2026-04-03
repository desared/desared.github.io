# desared.github.io

Personal portfolio website for Desared Osmanllari (Data Scientist), live at [desared.com](https://desared.com).

**Stack:** Next.js 16 (App Router, static export) · TypeScript · Tailwind CSS v4 · shadcn/ui · Firebase Firestore · EN/DE bilingual

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export to ./out/
npm run lint
```

## Architecture

Single-page app with a dynamic project detail route:

- **`src/app/page.tsx`** — composes all portfolio sections
- **`src/app/projects/[slug]/`** — static project detail pages (slugs from `src/data/projects.ts`)
- **`src/data/translations.ts`** — all EN/DE UI text
- **`src/data/projects.ts`** — project detail data (descriptions, links, tags)
- **`src/lib/i18n.tsx`** — language context, persists to localStorage
- **`src/lib/firebase.ts`** — Firestore client for contact form submissions

Theme: dark with emerald accent (`#34d399`), configured via `@theme inline` in `src/app/globals.css`.

## Deployment

Pushes to `master` trigger `.github/workflows/nextjs.yml`, which builds and deploys to GitHub Pages. The `public/CNAME` maps to desared.com.
