# Ritesh Pandey — Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS. Showcases experience, projects, achievements, certifications, and research interests.

Live at [riteshpandey.com.np](https://www.riteshpandey.com.np).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode
- Vercel Analytics & Speed Insights

## Getting started

This project uses [pnpm](https://pnpm.io) as its package manager.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project structure

- `src/app/` — routes (App Router), including `sitemap.ts`, `robots.ts`, and `opengraph-image.tsx`
- `src/components/sections/` — homepage sections (hero, about, experience, projects, etc.)
- `src/lib/data/` — content as data (projects, experience, skills, site config)

## Scripts

- `pnpm dev` — start the dev server
- `pnpm build` — production build
- `pnpm start` — run the production build
- `pnpm lint` — lint the codebase

## Deployment

Deployed on [Vercel](https://vercel.com).
