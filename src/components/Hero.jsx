import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Selamat Datang di
            <span className="block text-yellow-300">Desa Kamal</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            Desa yang kaya akan budaya, tradisi, dan keindahan alam. 
            Temukan pesona wisata, layanan pemerintahan, dan kehangatan masyarakat Kamal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Jelajahi Wisata
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Layanan Desa
            </button>
          </div>
        </div>
      </div>
      
      {/* Statistics Section */}
      <div className="relative bg-white bg-opacity-10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold">2,500+</div>
              <div className="text-sm opacity-80">Penduduk</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">15</div>
              <div className="text-sm opacity-80">RT/RW</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">8</div>
              <div className="text-sm opacity-80">Destinasi Wisata</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">50+</div>
              <div className="text-sm opacity-80">UMKM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero