# LiveHindustan Clone (Next.js + Tailwind)

A simplified front-page clone of LiveHindustan using Next.js with TailwindCSS. It uses a mock JSON API to avoid requiring API keys.

## Features
- Next.js (pages, getStaticProps with ISR)
- Dynamic routing for article pages
- Image optimization with Next.js `Image`
- TailwindCSS
- Responsive layout (mobile + desktop)
- Head metadata and basic structured data for SEO

## Setup & Run

1. Install dependencies

```powershell
npm install
```

2. Run the dev server

```powershell
npm run dev
```

Open http://localhost:3000

## Why ISR?
We use getStaticProps with `revalidate` (ISR) because news pages can be pre-rendered for performance and rebuilt in the background when content updates, providing a good balance between fast page loads and fresh content.

## Deployment & environment
Set `NEXT_PUBLIC_SITE_URL` to your site (e.g. `https://my-site.domain`) if you want correct Open Graph and structured data URLs.

## Notes & Next Steps
- You can connect the `pages/api/news` route to a real news API (e.g., NewsAPI) to fetch live data and replace `public/news.json`.
- Add more pages and improve styling to match LiveHindustan closely (breaking sections, categories, and language support).

## Folder structure
- `pages/` – Next.js pages (home, article pages)
- `components/` – UI components
- `public/news.json` – Mock JSON data
- `styles/` – global CSS and tailwind
 - `docs/` – Additional documentation (design, layout, tests, AI reflection)

## Notes
This is a simplified version focusing on the front-page layout, image optimization, dynamic routes, and responsive design.

---

## Design Document (Short)
This clone aims to mimic the landing/home experience of LiveHindustan, focusing on: 
- Top stories grid (hero and additional cards)
- Latest posts sidebar (quick links)
- Article detail pages with images, metadata, and content

Design Goals:
- Responsive and fast (static generation with ISR)
- Accessible: meaningful alt text on images and structured metadata
- Simple, maintainable component structure with TailwindCSS

### Wireframe / Sketch
If you want to attach a sketch image, add it under `public/` and link here. For now, here's a simple ASCII wireframe:

----------------------------------------------------
| HEADER (branding / nav)                           |
----------------------------------------------------
| TOP STORIES (Main hero) | LATEST (side column)   |
| (large image + title)    | - Latest article 1     |
|--------------------------| - Latest article 2     |
| Grid of cards (2-column) | - Latest article 3     |
| (small image + title)    | - ...                  |
----------------------------------------------------
| Footer                                            |
----------------------------------------------------
```
----------------------------------------------------
| HEADER (branding / nav)                           |
----------------------------------------------------
| TOP STORIES (Main hero) | LATEST (side column)   |
| (large image + title)    | - Latest article 1     |
|--------------------------| - Latest article 2     |
| Grid of cards (2-column) | - Latest article 3     |
| (small image + title)    | - ...                  |
----------------------------------------------------
| Footer                                            |
----------------------------------------------------
```

Add your hand-drawn screenshot file (e.g., `public/wireframe.png`) and reference the path here.

## Additional documentation
For a detailed breakdown of the design and development choices, see the `docs` folder:

- `docs/design.md` — Short design document
- `docs/wireframe.md` — Wireframe and sketch instructions
- `docs/layout-decisions.md` — Why columns, sections, and visual hierarchy were chosen
- `docs/data-fetching.md` — Data fetching strategy and tradeoffs
- `docs/code-explanation.md` — Code structure and key components
- `docs/challenges.md` — Challenges encountered and solutions
- `docs/testing-edge-cases.md` — Tests and edge cases
- `docs/ai-reflection.md` — AI assistance and reflections

### Layout decisions
- Columns: A two-column main layout (`md:grid-cols-3` where the main area spans 2 columns, sidebar spans 1). This mimics news portal layouts where the main stories take visual priority and a smaller column lists latest items.
- Highlighting top stories: Cards with larger images and bold titles in the left/center visually emphasize top stories. The top-most hero is still a card and uses a larger image.
- Grid for additional stories: A simple grid provides readability and balances visual space on larger screens while collapsing to single column on mobile.

### Data-fetching strategy
- Method: `getStaticProps` with ISR (`revalidate: 60` for pages). 
	- Justification: News pages benefit from pre-rendering for performance and SEO, while ISR keeps content fresh without the overhead of per-request server rendering.
	- Tradeoffs:
		- Pros: Fast page loads, SEO-friendly, reduced server costs.
		- Cons: There's a small delay (until revalidation) for newly-published content to appear if real-time display is critical. For strictly real-time feeds, `getServerSideProps` could be used but at higher runtime cost.

### Data model for each article
Example article object (as used in `public/news.json`):

```json
{
	"id": 1,
	"title": "Delhi witnesses heavy rainfall creating major traffic snarls",
	"description": "Heavy rainfall ...",
	"content": "In the evening, the city ...",
	"urlToImage": "https://images.unsplash.com/...",
	"publishedAt": "2025-11-28"
}
```

Minimum fields used:
- id: number/string used for routing
- title: string
- description: string (short summary)
- content: detailed body
- urlToImage: optional; fallback to `public/placeholder.png`
- publishedAt: date string

### Code Explanation
- Components created:
	- `Header` (components/Header.js): Top navigation bar with brand and links.
	- `ArticleCard` (components/ArticleCard.js): A single card used in the home grid with optimized image and truncated text.
	- Pages: `pages/index.js` (Home), `pages/articles/[id].js` (Article detail), `pages/api/news.js` (mock API).
- Data handling:
	- Home page (`index.js`) uses `getStaticProps` to load `public/news.json` at build time and revalidates periodically.
	- Article page (`pages/articles/[id].js`) uses `getStaticPaths` and `getStaticProps` for static pre-rendering of article pages (blocking fallback).

### Error handling & fallback behavior
- No image: `Image` uses a fallback (`/placeholder.png`) if `urlToImage` isn't present.
- No articles / empty array: Home page shows the fallback message `No news available.` (see test case below)
- API fetch failure: With the current SSG approach, failed builds show an error; if using client-side or API route, a graceful UI would display a "No news available" message and optionally a retry button.

### Challenges faced and solutions
- Image sizing with `next/image`: balancing layout while preserving aspect ratio — solved by using container with fixed height and `object-cover`.
- Responsive structure across different screen sizes — Tailwind CSS grid and responsive classes simplified this.
- Testing behavior without a real API: I used a local `public/news.json` and `pages/api/news` mock route for local testing.

AI help & challenges: AI helped to bootstrap many components and code snippets; the produced code was then reviewed, adapted, and corrected where necessary (see Reflection section). I verified code by running `npm run dev` and checking the site manually.

### Tests & Edge cases
Examples and test instructions to validate edge cases and layout behavior.

1) If an article has no image
	 - Behavior: The card and article page will show `/public/placeholder.png`.
	 - How to test: Edit `public/news.json`, remove `urlToImage` for an article, restart dev server, open that article.

2) No articles returned (API returns [] or file empty)
	 - Behavior: The home page will show `No news available.` in the main area; the sidebar will show nothing.
	 - How to test: replace `public/news.json` with `{ "articles": [] }` and re-run `npm run dev`.

3) Long titles and layout behavior
	 - Behavior: Titles are truncated or wrap based on container width; Tailwind classes keep a consistent layout with `line-clamp` on cards.
	 - Testing: Add long title strings in `news.json` and check how it wraps across different screen sizes. If needed, `line-clamp` or `truncate` can limit length.

4) Loading / error states
	 - Approach: With SSG (getStaticProps) there is no runtime loading UI. If you choose to fetch client-side, add a loading spinner and error fallback.
	 - Example client-side fallback using SWR/React hooks (short snippet):

```jsx
import useSWR from 'swr'
const fetcher = url => fetch(url).then(res => res.json())
function useNews() {
	const { data, error } = useSWR('/api/news', fetcher)
	return { articles: data?.articles || [], isLoading: !error && !data, isError: error }
}
```

### What I'd improve if given more time
- Add unit tests and integration tests.
- Add a more robust fallback/error UI and client-side fetch path for live updates.
- Implement category pages and pagination.
- Make the layout more faithful to the real LiveHindustan: multiple sections (regional, national) and header nav with language toggles.

### AI Use & Reflection
- Which parts were AI-assisted:
	- Initial project scaffolding and tailwind integration
	- Component boilerplate (Header, ArticleCard)
	- Example `getStaticProps`/`getStaticPaths` and ISR patterns
	- Layout and Tailwind class suggestions
- Where AI suggestions were wrong or suboptimal:
	- Some code needed refactoring to match the desired accessibility and fallback behaviors.
	- Suggestions around image optimizations sometimes forgot explicit domains in `next.config.js`.
	- A few CSS utility suggestions required small manual adjustments to correctly implement responsive behavior.
- How I verified and corrected AI-generated snippets:
	- Ran the dev server (`npm run dev`) and inspected the page in browser.
	- Adjusted tailwind classes and added container sizes / image fallbacks.
	- Verified the dynamic routes and tested fallback behavior.

### Running and Testing (Summary)
1. Install and dev:
```powershell
cd "C:\Users\dubey\OneDrive\Desktop\Ankit\New folder (2)\livehindustan-clone"
npm install
npm run dev
```
2. Visit http://localhost:3000
3. Try article details, e.g. http://localhost:3000/articles/1
4. Test edge cases by editing `public/news.json` and watch how the UI changes.

---

If you want, I can:
- Replace mock JSON with a NewsAPI config (add API key and fetch code)
- Add a client-side fetch fallback for near real-time updates
- Add unit tests and automated screen tests for layout on multiple viewport sizes

Let me know which next step you'd like. 


