# Challenges & How I Overcame Them

## Notable challenges

1. Images & Next.js `Image` component
- Next's `Image` requires host domains be whitelisted in `next.config.js`. I added `images.unsplash.com` and `via.placeholder.com` to `images.domains`.
- Maintaining aspect ratios while keeping the responsive design was handled by creating container divs with fixed heights and `object-cover` on images.

2. No real API while developing
- Without a real news provider API, I mocked `public/news.json` and a simple API route `pages/api/news.js` for local testing.
- This made it easy to simulate changes and edge cases (e.g., missing fields, empty arrays).

3. Balancing SEO with modern SSR/SSG approaches
- I chose ISR for a balance between SEO improved (due to pre-rendered HTML) and freshness. Adding `meta` tags in `Head` and JSON-LD provided additional SEO benefits.

4. Accessibility & truncation of text
- `line-clamp` is used on cards to keep consistent layout and prevent overflow; long titles are allowed to wrap naturally on the article page to preserve meaning.

## AI-assisted tasks and manual verification
- Several boilerplate files and components were initially scaffolded using AI-generated snippets. I reviewed every AI-generated code block, tested it locally, and updated it for type/syntax or styling corrections.

## Other challenges
- Handling environment variables for canonical URLs: added `NEXT_PUBLIC_SITE_URL` to ensure OG URLs and structured data point to the correct host when deployed.
- Ensuring fallback UI is present when no articles available — added instructions for testing and fallback message.

## Summary
- I leveraged the tools available (Next/React, Tailwind) to keep implementation modular and straightforward. AI helped speed up scaffolding, but manual tests and adjustments were essential for correctness and responsive behavior.
