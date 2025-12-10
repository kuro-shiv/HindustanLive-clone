# Layout Decisions

This document explains the visual and structural choices used for the LiveHindustan clone.

## Column layout & sections
- The main content area uses a three-column grid on large screens (`grid` with `md:grid-cols-3`) with the primary content spanning two columns and the sidebar occupying one column.
  - Why: This mirrors common news site patterns — important news gets visual priority while the right-side column lists quick-access links (Latest, small widgets, etc.).

## Sections & content hierarchy
- Top Stories / Hero: A single story with a larger image and title at the top-left of the main area.
- Grid for additional stories: 2-column card grid beneath the hero for readability and balanced typography.
- Latest Sidebar: A vertical list of smaller links for quick browsing.
- Footer: Small footer at page bottom with basic site information.

## How Top Stories are highlighted
- Visual treatment: larger images, bolder headlines, and prominent positioning for the hero.
- Cards have slightly larger images and `font-semibold` for headlines.
- The hero isn't a separate component but a large card; this keeps the implementation simpler but would be split out as `Hero` in a production version.

## Responsiveness
- On small screens (< md) the grid collapses into a single column with the top story and article cards stacked vertically.
- Sidebars become content sections that appear after the main content on mobile.

## Accessibility & Visual Considerations
- Images have alt text where possible (derived from headline or `alt` prop). Fallback `placeholder.png` available when `urlToImage` is missing.
- Color contrast for the header (red background with white text) to mimic the LiveHindustan brand.
- Interactive elements include `Link` for navigation so keyboard users can navigate seamlessly.

## Future Layout Improvements
- Add a dedicated `Hero` component with more precise aspect ratio control.
- Add multi-column regions to mimic LiveHindustan’s more complex page structure (e.g., sports, business, entertainment sections).
