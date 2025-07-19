import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { newsArticles } from '../data/newsData'

const Home = () => {
  // Menampilkan semua 4 berita di home
  const latestNews = newsArticles

  return (
    <div>
      <Hero />
      {/* Main Navigation - Government Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Portal Informasi Desa Kamal
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Akses informasi lengkap tentang pemerintahan, layanan, dan potensi Desa Kamal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Profil Desa */}
            <Link 
              to="/profile"
              className="group bg-white rounded-lg border border-gray-200 p-8 text-center hover:shadow-xl hover:border-green-300 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Profil Desa
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sejarah, visi misi, struktur pemerintahan dan informasi geografis desa
              </p>
              <div className="mt-4 inline-flex items-center text-sm text-green-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                Selengkapnya <span className="ml-1">→</span>
              </div>
            </Link>

            {/* Wisata */}
            <Link 
              to="/destination"
              className="group bg-white rounded-lg border border-gray-200 p-8 text-center hover:shadow-xl hover:border-amber-300 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🗿</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                Wisata Desa
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Situs megalitikum bersejarah dan destinasi wisata alam yang memukau
              </p>
              <div className="mt-4 inline-flex items-center text-sm text-amber-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                Jelajahi <span className="ml-1">→</span>
              </div>
            </Link>

            {/* Berita */}
            <Link 
              to="/news"
              className="group bg-white rounded-lg border border-gray-200 p-8 text-center hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">📰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Berita & Info
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Informasi terkini, pengumuman, dan perkembangan program desa
              </p>
              <div className="mt-4 inline-flex items-center text-sm text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                Baca Berita <span className="ml-1">→</span>
              </div>
            </Link>

            {/* Data & Infografis */}
            <Link 
              to="/infografis"
              className="group bg-white rounded-lg border border-gray-200 p-8 text-center hover:shadow-xl hover:border-purple-300 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Data & Statistik
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Visualisasi data demografi, ekonomi, dan pembangunan desa
              </p>
              <div className="mt-4 inline-flex items-center text-sm text-purple-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                Lihat Data <span className="ml-1">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section - Government Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-3">
                Berita & Pengumuman Terbaru
              </h2>
              <p className="text-gray-600">
                Update terkini tentang program dan kegiatan Pemerintah Desa Kamal
              </p>
            </div>
            <Link 
              to="/news"
              className="hidden md:inline-flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Lihat Semua
              <span className="ml-2">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestNews.map(article => (
              <article key={article.id} className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* News Header */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 text-center relative">
                  <div className="text-4xl mb-3">{article.icon}</div>
                  <div className="flex items-center justify-center gap-2 text-xs">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                      {article.date.split(' ')[0]} {article.date.split(' ')[1]}
                    </span>
                  </div>
                </div>
                
                {/* News Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 leading-tight group-hover:text-green-600 transition-colors">
                    <Link 
                      to={`/news/${article.id}`}
                      className="line-clamp-2"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <Link 
                    to={`/news/${article.id}`}
                    className="inline-flex items-center text-sm text-green-600 font-medium hover:text-green-700 group-hover:translate-x-1 transition-all duration-300"
                  >
                    Baca selengkapnya
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile View All Button */}
          <div className="text-center mt-8 md:hidden">
            <Link 
              to="/news"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Lihat Semua Berita
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Government Style */}
      <section className="py-16 bg-green-50 border-t border-green-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Desa Kamal dalam Angka
            </h2>
            <p className="text-gray-600">
              Data terkini pembangunan dan pelayanan di Desa Kamal
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">2,500+</div>
              <div className="text-sm text-gray-600 font-medium">Total Penduduk</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">15</div>
              <div className="text-sm text-gray-600 font-medium">RT/RW Aktif</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">4</div>
              <div className="text-sm text-gray-600 font-medium">Situs Wisata</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-sm text-gray-600 font-medium">UMKM Binaan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section - Government Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Lokasi & Kontak
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Informasi lokasi kantor desa dan cara menghubungi Pemerintah Desa Kamal
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map Container */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-80 flex items-center justify-center border border-gray-200">
                <div className="text-center text-gray-500">
                  <div className="text-5xl mb-4">🗺️</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">Peta Lokasi</h3>
                  <p className="text-sm">Kantor Desa Kamal</p>
                  <p className="text-xs text-gray-400 mt-1">Kecamatan Arjasa, Kabupaten Jember</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Informasi Kontak
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Alamat Kantor</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Jl. Raya Desa Kamal No. 123<br/>
                        Kec. Arjasa, Kab. Jember<br/>
                        Jawa Timur 68191
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                      <p className="text-gray-600 text-sm">(0331) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600 text-sm">info@desakamal.jember.id</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Jam Pelayanan</h4>
                      <p className="text-gray-600 text-sm">
                        Senin - Jumat: 08:00 - 16:00 WIB<br/>
                        Sabtu: 08:00 - 12:00 WIB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center">
                  <span className="mr-2">🗺️</span>
                  Buka di Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home