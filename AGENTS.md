# AGENTS.md

## Purpose | 專案目的
- Build and maintain bgflow.net as an introduction portal.
- Current scope: homepage first, featuring links to two completed projects.
- Future scope: technical articles are planned, but not implemented by default.

## Current Product Scope | 目前範圍
- Keep homepage as the main entry.
- Keep these two featured project links visible unless user requests a change:
  - EasyTools: https://easytools.bgflow.net
  - AI Theater: https://ai-theater.bgflow.net
- Do not introduce article routing, collections, or CMS unless explicitly requested.

## Tech Stack | 技術棧
- Astro 6
- Tailwind CSS 4 (via Vite plugin)
- Static site deployment target: GitHub Pages (site: https://bgflow.net)

## Commands | 常用指令
- `npm run dev`: Start local development server.
- `npm run build`: Build production output.
- `npm run preview`: Preview production build locally.
- `npm run astro`: Run Astro CLI directly.

## Architecture Map | 架構地圖
- `src/pages/index.astro`: Homepage content and project entry links.
- `src/layouts/Layout.astro`: Shared page shell and base HTML.
- `src/consts.ts`: Site constants (title and URL).
- `src/styles/global.css`: Global styles entry.
- `astro.config.mjs`: Astro config and site URL.
- `tsconfig.json`: Path aliases (`@consts`, `@components/*`, `@layouts/*`, `@content/*`, `@styles/*`).

## Conventions | 專案慣例
- User-facing copy can be Traditional Chinese or bilingual.
- Keep code and identifiers in English.
- Prefer minimal Astro structure; only extract components when reuse is clear.
- Follow existing import alias conventions from `tsconfig.json`.
- Preserve existing behavior before visual refactors.

## Guardrails | 邊界規則
- Do not remove or replace the two current project links without explicit instruction.
- Do not invent test, lint, or CI commands that are not in `package.json`.
- Do not add article infrastructure preemptively.
- If asked to add article features, confirm requirements first:
  - content source (Markdown/MDX/CMS)
  - URL strategy (for example `/articles/[slug]`)
  - metadata and SEO needs
  - language strategy (Chinese-only or bilingual)

## Definition Of Done | 完成標準
- Changes match requested scope exactly.
- Homepage project-entry intent remains intact unless user asked otherwise.
- Commands in documentation match `package.json`.
- For structural changes, run `npm run build` before handoff when feasible.

## References | 參考
- Project overview: [README.md](README.md)
- Astro docs: https://docs.astro.build/
- Tailwind docs: https://tailwindcss.com/docs/