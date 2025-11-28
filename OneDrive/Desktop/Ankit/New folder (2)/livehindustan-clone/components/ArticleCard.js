import Image from 'next/image'

export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded shadow overflow-hidden hover:shadow-md transition">
      <div className="w-full h-48 relative">
        <Image src={article.urlToImage || '/placeholder.png'} alt={article.title} fill className="object-cover"/>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{article.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{article.description}</p>
      </div>
    </div>
  )
}
