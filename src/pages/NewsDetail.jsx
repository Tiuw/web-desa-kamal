import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { newsArticles } from '../data/newsData'

const NewsDetail = () => {
  const { id } = useParams()
  const article = newsArticles.find(item => item.id === parseInt(id))

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-gray-900 mb-4">Artikel Tidak Ditemukan</h1>
          <Link to="/news" className="text-green-600 hover:text-green-700">
            Kembali ke Berita
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-green-600">Beranda</Link>
            <span className="mx-2">/</span>
            <Link to="/news" className="hover:text-green-600">Berita</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{article.title}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{article.icon}</span>
              <div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime} baca</span>
                  <span>•</span>
                  <span>Oleh {article.author}</span>
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
              {article.title}
            </h1>
          </header>

          {/* Article Image Placeholder */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-64 md:h-80 flex items-center justify-center mb-8">
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-3">{article.icon}</div>
              <p className="text-sm">{article.title}</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-gray-600 mb-6 font-light leading-relaxed">
              {article.excerpt}
            </div>
            
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
          </div>

          {/* Share & Navigation */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Bagikan artikel:</span>
                <div className="flex gap-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm transition-colors">
                    Facebook
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-sm transition-colors">
                    WhatsApp
                  </button>
                  <button className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm transition-colors">
                    Copy Link
                  </button>
                </div>
              </div>
              
              <Link 
                to="/news"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-medium transition-colors"
              >
                Kembali ke Berita
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-medium text-gray-900 mb-8">Berita Terkait</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsArticles
              .filter(item => item.id !== article.id && item.category === article.category)
              .slice(0, 2)
              .map(relatedArticle => (
                <Link 
                  key={relatedArticle.id}
                  to={`/news/${relatedArticle.id}`}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{relatedArticle.icon}</span>
                    <div>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {relatedArticle.category}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{relatedArticle.date}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-3 leading-tight">
                    {relatedArticle.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {relatedArticle.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsDetail