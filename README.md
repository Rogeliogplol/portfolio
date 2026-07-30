# Rogelio García Peña Portfolio

Personal portfolio built with Astro and Tailwind CSS for a sober professional presentation focused on job search. Includes a persistent light/dark theme toggle.

## Stack

- Astro
- Tailwind CSS
- Vitest and Testing Library
- ESLint
- pnpm

## Project structure

```text
/
├── public/
├── src/
│   ├── components/
│   │   └── portfolio/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── package.json
└── vitest.config.ts
```

## Commands

| Command | Action |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start local development server |
| `pnpm build` | Build the production site into `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm test -- --run` | Run tests once |
| `pnpm lint` | Run ESLint |

## Content notes

The public homepage is written in Spanish and intentionally avoids publishing sensitive personal data such as a full birth date. Contact links are placeholders until real public profiles or email details are provided.

Portfolio content lives in `src/data/portfolio.ts`; presentation is split into Astro components under `src/components/portfolio/` and styled with Tailwind utility classes plus theme tokens/global base styles in `src/styles/global.css`.
