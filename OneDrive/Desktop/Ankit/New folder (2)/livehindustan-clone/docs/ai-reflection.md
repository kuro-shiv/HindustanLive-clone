# AI Use & Reflection

This section documents where and how AI assisted in the project and what was corrected manually.

## Where AI helped
- Bootstrapped the project scaffolding (Next.js pages, Tailwind config, basic `package.json`).
- Generated initial component boilerplate (Header, ArticleCard) and short layout code.
- Suggested `getStaticProps` and ISR usage patterns.
- Proposed the JSON-LD schema structure and head tags.

## Where AI suggestions were wrong or needed adjustment
- Tailwind classes sometimes needed manual refinement to match intended spacing and alignment.
- Next.js `Image`: AI sometimes omitted adding allowed domains to `next.config.js`, which caused image loading errors during development.
- Some snippets used client-side fetch with no fallback; SSG/ISR were the right choice for a static-first strategy.

## How suggestions were verified or corrected
- Reviewed each AI-generated snippet for correctness and safety.
- Ran `npm run dev` and opened pages to visually confirm layout and behavior.
- Checked console for errors and fixed issues (e.g., domain settings, fallbacks).
- Reworked or simplified code where AI solutions were unnecessarily complex.

## Custom modifications beyond AI-provided code
- Added JSON-LD structured data to `articles/[id].js` and `index.js`.
- Created `pages/api/news.js` as a mock endpoint.
- Added an ASCII wireframe and docs splitting into separate `docs/*.md` files for clarity.

## Final note
AI accelerated development, but manual testing and deeper integration tweaking were essential for building a usable, responsive demo. The combination of AI + manual verification provided an efficient workflow for prototyping while ensuring correctness.
