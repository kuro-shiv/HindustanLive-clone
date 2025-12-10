import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'
import ArticleCard from '../components/ArticleCard'
import Header from '../components/Header'
import Script from 'next/script'

export default function Home({ articles }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    'name': 'LiveHindustan Clone',
    'url': siteUrl
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>LiveHindustan - Clone</title>
        <meta name="description" content="LiveHindustan clone built with Next.js" />
        <meta property="og:title" content="LiveHindustan - Clone" />
        <meta property="og:description" content="A front page clone of LiveHindustan" />
      </Head>
      <Script id="ld-home" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Header />

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <section className="md:col-span-2">
            <h2 className="font-bold text-xl mb-4">Top Stories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {articles.slice(0, 6).map(article => (
                <Link key={article.id} href={`/articles/${article.id}`} className="block">
                  <ArticleCard article={article} />
                </Link>
              ))}
            </div>
          </section>

          <aside className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Latest</h3>
            <ul className="space-y-2">
              {articles.slice(0, 5).map(a => (
                <li key={a.id}>
                  <Link href={`/articles/${a.id}`} className="text-sm hover:underline">{a.title}</Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </main>

      <footer className="bg-white text-center p-4 border-t mt-8">© LiveHindustan Clone</footer>
    </div>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'news.json')
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

  return {
    props: {
      articles: data.articles
    },
    revalidate: 60 // ISR: rebuild every 60 seconds
  }
}
