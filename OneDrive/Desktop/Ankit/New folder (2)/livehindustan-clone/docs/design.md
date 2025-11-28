# Design Document (Short)

This project is a simplified clone of LiveHindustan's front page, built using Next.js and TailwindCSS. The objective is to reproduce the look-and-feel of a news portal home page while focusing on the following priorities:

- Fast performance and SEO (server-side prerendering + ISR)
- Responsive layout for desktop & mobile
- Reusable, accessible components (Header, ArticleCard, Article pages)
- A simple mocked data source to keep the demo self-contained

Key Goals:
- Display top stories prominently and provide a "Latest" sidebar for quick reads.
- Implement dynamic pages for articles using Next's routing.
- Show how to integrate SEO metadata and structured data for improved search visibility.

Target Users & Use Case:
- Users visiting the homepage to quickly see the day's top stories and quickly navigate to detailed articles.

Constraints:
- This is a learning/demo project (data uses a mock JSON) and doesn't cover publisher-specific CMS workflows or ad placement logic.

Design tradeoffs:
- Using ISR (revalidate) provides a balance of performance and content freshness. Real-time streaming would require server-side rendering or client-side fetching but at the expense of speed.
