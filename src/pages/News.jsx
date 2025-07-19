import React from 'react'
import { Link } from 'react-router-dom'
import { newsArticles } from '../data/newsData'

const News = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Berita Desa Kamal
          </h1>
          <p className="text-lg opacity-90 mb-2">
            Informasi Terkini dari Desa Kamal
          </p>
          <p className="text-base opacity-75">
            Kecamatan Arjasa • Kabupaten Jember • Jawa Timur
          </p>
        </div>
      </div>

      {/* News Articles - Menampilkan semua 4 berita */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Semua Berita
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kumpulan berita dan informasi terkini dari Desa Kamal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsArticles.map(article => (
              <article key={article.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{article.icon}</div>
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded-full">{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 mb-3 leading-tight">
                  <Link 
                    to={`/news/${article.id}`}
                    className="hover:text-green-600 transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <Link 
                  to={`/news/${article.id}`}
                  className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors"
                >
                  Baca Selengkapnya →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Sorotan Utama
            </h2>
            <p className="text-gray-600">
              Berita terpilih yang paling penting untuk masyarakat
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{newsArticles[0].icon}</span>
                  <div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {newsArticles[0].category}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{newsArticles[0].date}</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  <Link 
                    to={`/news/${newsArticles[0].id}`}
                    className="hover:text-green-600 transition-colors"
                  >
                    {newsArticles[0].title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {newsArticles[0].excerpt}
                </p>
                
                <Link 
                  to={`/news/${newsArticles[0].id}`}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-medium transition-colors inline-block"
                >
                  Baca Artikel Lengkap
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-3">{newsArticles[0].icon}</div>
                  <p className="text-sm">{newsArticles[0].title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News