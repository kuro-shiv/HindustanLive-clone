# Testing & Edge Cases

This file outlines the test cases and behaviors for the LiveHindustan clone.

## 1) No `urlToImage` provided
- Expected behavior:
  - Home card and article page show the placeholder image (public/placeholder.png).
  - No broken image or 404.
- How to test:
  - Remove `urlToImage` from an article in `public/news.json` and run the server.

## 2) No articles returned
- Expected behavior:
  - Home page should display a message like: "No news available." and the sidebar should be blank (or show a fallback message).
- How to test:
  - In `public/news.json`, change `articles: []` and verify the page message appears.

## 3) Long titles or long descriptions
- Expected behavior:
  - Cards use `line-clamp` to restrict visible lines for previews.
  - Titles on article pages should wrap and remain readable.
- How to test:
  - Replace `title` and/or `description` with a very long string and validate layout on mobile and desktop.

## 4) API fetch fails or client-side fetch failure
- Behavior in current SSG setup:
  - Build-time fetch errors cause build failure; the fix is to provide a default or fallback to display a message.
- Behavior using client-side fetch:
  - On fetch error, show `No news available` message and an error indicator; optionally a retry button.

## 5) Loading state
- If fetching data client-side, use a simple spinner or a skeleton placeholder in the main area.
- For SSG/ISR, pages are pre-rendered so loading states typically are not required for the initial content.

## 6) Invalid article ID
- Using `getStaticPaths` with `fallback: 'blocking'` means for unknown IDs, pages will render at request time.
- If the ID doesn't exist at all in the data, return 404 or show `Article not found` message.

## Example manual checks
1. Start dev server: `npm run dev`.
2. Visit main page and article pages.
3. Edit `public/news.json` to remove fields and see behavior.
4. Simulate empty articles array and check fallback.

## Notes about tests
- For a production-level app, write unit tests for components and integration tests for pages using tools like `Jest` and `React Testing Library`, and `cypress` for end-to-end checks.
