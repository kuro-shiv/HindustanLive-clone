import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import Header from '../../components/Header'
import Script from 'next/script'

export default function ArticlePage({ article }) {
  if (!article) return <div>Article not found</div>

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "image": [article.urlToImage || `${siteUrl}/placeholder.png`],
    "datePublished": article.publishedAt,
    "author": [{"@type":"Person","name":"LiveHindustan Clone"}],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/articles/${article.id}`
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description || article.title} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description || article.title} />
        <meta property="og:image" content={article.urlToImage || `${siteUrl}/placeholder.png`} />
        <link rel="canonical" href={`${siteUrl}/articles/${article.id}`} />
      </Head>
      <Script id="ld-schema" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>

      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
        <div className="bg-white p-4 rounded shadow">
          <div className="w-full h-64 relative mb-4">
            <Image src={article.urlToImage || '/placeholder.png'} alt={article.title} fill className="object-cover rounded" />
          </div>

          <p className="text-sm text-gray-600 mb-2">{article.publishedAt}</p>
          <p>{article.content || article.description}</p>
        </div>
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'public', 'news.json')
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

  const paths = data.articles.map(a => ({ params: { id: a.id.toString() } }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'public', 'news.json')
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

  const article = data.articles.find(a => a.id.toString() === params.id)

  return {
    props: { article: article || null },
    revalidate: 60
  }
}
