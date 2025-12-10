# Data Fetching Strategy

This project uses Next.js `getStaticProps` with Incremental Static Regeneration (ISR) for page data.

## Method Used
- The home page uses `getStaticProps` to read `public/news.json` at build time and includes a `revalidate` interval (60 seconds).
- The article pages use `getStaticPaths` (pre-building known pages) and `getStaticProps` with `fallback: 'blocking'` so pages not generated yet will be generated at request time.

## Why this approach
- Better performance (pre-rendered HTML for fast page loads and SEO benefits).
- ISR provides freshness: build once, and update content automatically when `revalidate` interval triggers the background regeneration.

## Tradeoffs
- Pros:
  - Fast initial load and good for search engines.
  - Reduces server load compared to server-side-only rendering.
- Cons:
  - Not strictly real-time; users may see slightly stale content within the revalidate window.
  - For live data feeds (e.g., breaking news), server-side rendering or client-side fetching is better if immediate updates are required.

## Alternatives
- `getServerSideProps`: Always rendered on each request — good for real-time updated data, but has higher latency and server cost.
- Client-side fetching: Useful for live updates, but loses server-side SEO unless used in conjunction with SSG/SSR.

## How to replace with remote API
- The local `pages/api/news` route can be updated to fetch from NewsAPI or another external source.
- For sensitive API keys, use server-side fetching or environment variables and avoid exposing keys to the client.
