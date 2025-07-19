import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { newsArticles } from '../data/newsData'

const Home = () => {
  // Ambil 3 berita terbaru untuk ditampilkan di home
  const latestNews = newsArticles.slice(0, 3)

  return (
    <div>
      <Hero />
      
      {/* Jelajahi Desa Section - Minimalist Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Jelajahi Desa Kamal
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan keindahan dan kekayaan budaya Desa Kamal
            </p>
          </div>
          
          {/* Minimalist 4 Button Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Profil Desa Button */}
            <Link 
              to="/profile"
              className="group text-center p-8 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Profil Desa</h3>
              <p className="text-sm text-gray-600">Informasi lengkap tentang desa</p>
            </Link>

            {/* Wisata Button */}
            <Link 
              to="/destination"
              className="group text-center p-8 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="text-4xl mb-4">🗿</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Wisata</h3>
              <p className="text-sm text-gray-600">Situs megalitikum & alam</p>
            </Link>

            {/* Berita Button */}
            <Link 
              to="/news"
              className="group text-center p-8 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Berita</h3>
              <p className="text-sm text-gray-600">Informasi terkini dari desa</p>
            </Link>

            {/* Infografis Button */}
            <Link 
              to="/infografis"
              className="group text-center p-8 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Infografis</h3>
              <p className="text-sm text-gray-600">Data & visualisasi desa</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section - Using Dynamic Data */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Berita Terkini
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Update terbaru tentang perkembangan dan kegiatan di Desa Kamal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map(article => (
              <article key={article.id} className="bg-white p-6 rounded-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{article.icon}</div>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  <Link 
                    to={`/news/${article.id}`}
                    className="hover:text-green-600 transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/news"
              className="inline-block px-6 py-2 text-green-600 border border-green-600 rounded hover:bg-green-600 hover:text-white transition-colors"
            >
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </section>

      {/* Maps Section - Minimalist Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Lokasi Desa Kamal
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan lokasi Desa Kamal dan berbagai fasilitas penting di sekitar desa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Container */}
            <div>
              <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-5xl mb-3">🗺️</div>
                  <h3 className="text-lg font-medium mb-1">Peta Desa Kamal</h3>
                  <p className="text-sm">Kecamatan Arjasa, Jember</p>
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Cara Menuju Desa Kamal</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Dari Jember: 1 jam perjalanan</li>
                  <li>Akses transportasi umum tersedia</li>
                  <li>Parkir luas di kantor desa</li>
                  <li>Akses jalan beraspal baik</li>
                </ul>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded font-medium transition-colors">
                Buka di Google Maps
              </button>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Alamat Lengkap</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Desa Kamal, Kecamatan Arjasa<br/>
                  Kabupaten Jember<br/>
                  Jawa Timur, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home