import React from 'react'

const Destination = () => {
  const destinations = [
    {
      id: 1,
      name: "Situs Duplang",
      description: "Situs megalitikum terluas dan unggulan di Desa Kamal dengan berbagai batuan purbakala seperti menhir, dolmen (meja batu), dan batu kenong dalam suasana pedesaan yang asri.",
      image: "/images/situs-duplang.jpg"
    },
    {
      id: 2,
      name: "Situs Klanceng",
      description: "Terletak di halaman balai desa Kamal, situs ini menjadi tempat pengumpulan puluhan batu kenong yang ditemukan di sekitar desa.",
      image: "/images/situs-klanceng.jpg"
    },
    {
      id: 3,
      name: "Situs Kendal",
      description: "Melengkapi situs megalitikum lainnya, Situs Kendal menyimpan berbagai artefak dari masa lampau yang menjadi saksi peradaban ribuan tahun lalu.",
      image: "/images/situs-kendal.jpg"
    },
    {
      id: 4,
      name: "Kamal View",
      description: "Panorama persawahan hijau dengan latar belakang kemegahan lereng Gunung Argopuro. Pemandangan yang tenang dan sejuk, cocok untuk melepas penat.",
      image: "/images/kamal-view.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Destinasi Wisata
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8">
            Desa Kamal
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-4">
            Jelajahi Situs Megalitikum & Keindahan Alam
          </p>
          <p className="text-base opacity-75">
            Kecamatan Arjasa • Kabupaten Jember • Jawa Timur
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mengapa Desa Kamal Istimewa?
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Desa Kamal menawarkan pengalaman unik dengan peninggalan sejarah megalitikum 
              yang langka dan pemandangan alam yang memukau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">🗿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Situs Megalitikum</h3>
              <p className="text-gray-600 leading-relaxed">
                Peninggalan zaman batu besar dengan menhir, dolmen, dan batu kenong 
                yang menjadi saksi peradaban ribuan tahun lalu
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">🏔️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kamal View</h3>
              <p className="text-gray-600 leading-relaxed">
                Panorama persawahan hijau yang memukau dengan latar belakang 
                kemegahan lereng Gunung Argopuro di kejauhan
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">🌾</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wisata Edukasi</h3>
              <p className="text-gray-600 leading-relaxed">
                Pembelajaran sejarah dan arkeologi yang menarik sambil menikmati 
                suasana pedesaan yang asri dan tenang
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Destinasi Utama
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empat destinasi wisata utama yang wajib dikunjungi di Desa Kamal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map(destination => (
              <div key={destination.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:text-gray-600 transition-colors">
                    <div className="text-center">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {destination.name.includes('Situs') ? '🗿' : '🏔️'}
                      </div>
                      <span className="text-sm font-medium bg-white px-3 py-1 rounded-full shadow-sm">
                        {destination.name}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {destination.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Highlight */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Situs Duplang
              </h2>
              <h3 className="text-xl text-green-600 font-semibold mb-6">
                Situs Megalitikum Terluas di Jember
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Situs Duplang adalah destinasi utama wisata sejarah di Desa Kamal. 
                Di sini Anda dapat menyaksikan langsung peninggalan peradaban 
                megalitikum yang berusia ribuan tahun dalam suasana pedesaan yang asri.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-xl">🗿</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Menhir</h4>
                    <p className="text-gray-600">Batu tegak yang digunakan untuk upacara ritual dan penanda spiritual</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-xl">⚱️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Dolmen (Meja Batu)</h4>
                    <p className="text-gray-600">Struktur batu datar sebagai tempat pemujaan dan aktivitas ritual</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-xl">🥁</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Batu Kenong</h4>
                    <p className="text-gray-600">Batu berlubang yang menghasilkan bunyi khas saat dipukul</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-8xl mb-6">🗿</div>
                  <h4 className="text-2xl font-bold text-gray-700 mb-2">Situs Duplang</h4>
                  <p className="text-gray-500">Megalitikum Desa Kamal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Destination