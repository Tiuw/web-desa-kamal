import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const slides = [
    {
      title: "Selamat Datang di",
      highlight: "Desa Kamal",
      subtitle: "Desa yang kaya akan budaya, tradisi, dan keindahan alam megalitikum bersejarah",
      description: "Temukan pesona wisata, layanan pemerintahan modern, dan kehangatan masyarakat Kamal",
      bgGradient: "from-green-600 via-green-700 to-emerald-800",
      icon: "🏛️"
    },
    {
      title: "Jelajahi Wisata",
      highlight: "Situs Megalitikum",
      subtitle: "Situs bersejarah berusia ribuan tahun yang menjadi kebanggaan Jawa Timur",
      description: "Nikmati keindahan alam dan warisan budaya yang telah terpelihara dengan baik",
      bgGradient: "from-amber-600 via-orange-700 to-red-800",
      icon: "🗿"
    },
    {
      title: "Kopi Robusta",
      highlight: "Organik Kamal",
      subtitle: "Kopi premium bersertifikat organik dengan cita rasa khas Jember",
      description: "Dukung UMKM lokal dengan menikmati produk unggulan Desa Kamal",
      bgGradient: "from-amber-800 via-yellow-700 to-orange-800",
      icon: "☕"
    }
  ]

  const currentSlideData = slides[currentSlide]

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className={`relative h-screen bg-gradient-to-br ${currentSlideData.bgGradient} text-white overflow-hidden transition-all duration-1000`}>
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          
          {/* Floating Shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-yellow-300 opacity-20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-white opacity-10 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-10 w-8 h-8 bg-yellow-300 opacity-30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
        </div>

        {/* Main Content */}
        <div className="relative flex items-center h-full">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Text Content */}
              <div className={`text-left transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                {/* Badge */}
                <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <span className="text-xl mr-2">{currentSlideData.icon}</span>
                  <span className="text-sm font-medium">Kecamatan Arjasa • Kabupaten Jember</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                  {currentSlideData.title}
                  <span className="block text-yellow-300 mt-2 text-3xl md:text-5xl lg:text-6xl">
                    {currentSlideData.highlight}
                  </span>
                </h1>
                
                <h2 className="text-lg md:text-xl lg:text-2xl font-light mb-4 text-yellow-100">
                  {currentSlideData.subtitle}
                </h2>
                
                <p className="text-base md:text-lg lg:text-xl mb-8 opacity-90 leading-relaxed max-w-2xl">
                  {currentSlideData.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link 
                    to="/destination"
                    className="group bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center text-sm md:text-base"
                  >
                    <span className="mr-2">🗿</span>
                    Jelajahi Wisata
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  
                  <Link 
                    to="/profile"
                    className="group border-2 border-white hover:bg-white hover:text-green-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm md:text-base"
                  >
                    <span className="mr-2">🏛️</span>
                    Profil Desa
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>

                {/* Slide Indicators */}
                <div className="flex space-x-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-yellow-400 w-8' 
                          : 'bg-white opacity-50 hover:opacity-75'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <div className={`hidden lg:block transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="relative">
                  {/* Main Visual Card */}
                  <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="text-center">
                      <div className="text-8xl mb-6 animate-pulse">
                        {currentSlideData.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-yellow-200">
                        {currentSlideData.highlight}
                      </h3>
                      <p className="text-white opacity-80 leading-relaxed">
                        Temukan keunikan dan keindahan yang menawan
                      </p>
                    </div>
                  </div>

                  {/* Floating Cards */}
                  <div className="absolute -top-6 -left-6 bg-yellow-400 bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                    <div className="text-3xl">🎭</div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-green-400 bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                    <div className="text-3xl">🌾</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section - Separate from Hero */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group transform hover:scale-105 transition-all duration-300">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1">2,500+</div>
                <div className="text-sm opacity-80 font-medium">Jiwa Penduduk</div>
              </div>
            </div>
            
            <div className="group transform hover:scale-105 transition-all duration-300">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20">
                <div className="text-3xl mb-2">🏘️</div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1">15</div>
                <div className="text-sm opacity-80 font-medium">RT/RW Aktif</div>
              </div>
            </div>
            
            <div className="group transform hover:scale-105 transition-all duration-300">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20">
                <div className="text-3xl mb-2">🗿</div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1">4</div>
                <div className="text-sm opacity-80 font-medium">Situs Wisata</div>
              </div>
            </div>
            
            <div className="group transform hover:scale-105 transition-all duration-300">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20">
                <div className="text-3xl mb-2">🏪</div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1">50+</div>
                <div className="text-sm opacity-80 font-medium">UMKM Binaan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
        <svg className="w-6 h-6 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}

export default Hero