# Code Explanation

This document explains how the code is structured and what components and pages have been created.

## Important files & directories
- `pages/` — Next.js pages
  - `index.js` — Home page. Uses `getStaticProps` (ISR) to load `public/news.json`.
  - `articles/[id].js` — Dynamic article pages. Uses `getStaticPaths` and `getStaticProps`.
  - `api/news.js` — Mock API route returning `public/news.json`.
  - `_app.js` — Global style and base Head element.
  - `_document.js` — Sets HTML `lang` attribute and more Head insertion points.

- `components/` — Reusable UI components
  - `Header.js` — Site navigation and logo.
  - `ArticleCard.js` — Card UI for articles.

- `public/news.json` — Mock JSON source used by `getStaticProps`.
- `styles/globals.css` — Tailwind base + utilities and a small clamp utility.

## Data model (Article object)
Each article object follows this interface in `public/news.json`:
```json
{
  "id": number | string,
  "title": string,
  "description": string,
  "content": string,
  "urlToImage": string | null,
  "publishedAt": string
}
```

## Component behavior
- `Header` — Top navigation and site branding.
- `ArticleCard` — Displays `urlToImage`, `title`, and the `description`, truncating long descriptions with `.line-clamp-3`.

## Dynamic routing
- Each article receives a static path (from `getStaticPaths` which reads `public/news.json`).
- `fallback: 'blocking'` is used to allow generating pages for IDs not pre-rendered during deployment.

## SEO & structured data
- Each page sets `<Head>` metadata (title, description, OG tags and canonical link).
- Articles include JSON-LD schema for `NewsArticle`.

## Extensibility
- Add more components: `Hero`, `SidebarWidget`, `CategoryList`.
- Replace `public/news.json` with an API call to a production CMS or News API.
