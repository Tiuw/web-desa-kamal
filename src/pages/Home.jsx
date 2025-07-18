import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Jelajahi Desa Section - Simplified */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Side - Text */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
                Jelajahi Desa Kamal
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Temukan keindahan dan kekayaan budaya Desa Kamal. 
                Kenali lebih dekat profil desa kami dan nikmati pesona wisata yang memukau.
              </p>
            </div>
            
            {/* Right Side - Clean Buttons */}
            <div className="lg:w-1/2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end w-full">
              <Link 
                to="/profile"
                className="group px-8 py-4 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-md font-medium transition-all duration-300 text-center min-w-[140px]"
              >
                Profile Desa
              </Link>
              <Link 
                to="/destination"
                className="group px-8 py-4 bg-green-600 text-white hover:bg-green-700 rounded-md font-medium transition-all duration-300 text-center min-w-[140px]"
              >
                Wisata
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section - Minimalist */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Berita Terkini
            </h2>
            <div className="w-20 h-0.5 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="h-56 bg-gray-100"></div>
              <div className="p-8">
                <div className="text-sm text-green-600 font-medium mb-3">15 Juli 2025</div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 leading-tight">
                  Festival Budaya Kamal 2025
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Perayaan tahunan yang menampilkan seni dan budaya tradisional...
                </p>
              </div>
            </article>
            
            <article className="group bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="h-56 bg-gray-100"></div>
              <div className="p-8">
                <div className="text-sm text-green-600 font-medium mb-3">12 Juli 2025</div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 leading-tight">
                  Pembangunan Jalan Desa
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Proyek infrastruktur untuk meningkatkan akses transportasi...
                </p>
              </div>
            </article>
            
            <article className="group bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="h-56 bg-gray-100"></div>
              <div className="p-8">
                <div className="text-sm text-green-600 font-medium mb-3">10 Juli 2025</div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 leading-tight">
                  Program UMKM Desa
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Bantuan modal dan pelatihan untuk usaha mikro kecil menengah...
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Maps Section - Updated with Correct Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Lokasi Desa Kamal
            </h2>
            <div className="w-20 h-0.5 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Temukan lokasi Desa Kamal dan berbagai fasilitas penting di sekitar desa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Container - Updated with Correct Kamal Jember Location */}
            <div className="lg:col-span-2">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-96 relative">
                {/* Google Maps Embed - Kamal, Jember */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15797.033267207382!2d113.69921088715827!3d-8.160421999470131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695c3b9d7525f%3A0xa2e5e6c8c5b5e5b5!2sKamal%2C%20Jember%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1642123456789!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Desa Kamal, Jember"
                  className="absolute inset-0"
                ></iframe>
                
                {/* Fallback if map doesn't load */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-10" style={{display: 'none'}}>
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-gray-600">Peta Desa Kamal</p>
                    <p className="text-sm text-gray-500">Jember, Jawa Timur</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Info - Updated for Jember */}
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Cara Menuju Desa Kamal</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Dari Jember: 1 jam perjalanan</li>
                  <li>• Akses transportasi umum tersedia</li>
                  <li>• Parkir luas di kantor desa</li>
                  <li>• Akses jalan beraspal baik</li>
                </ul>
              </div>

              <a 
                href="https://maps.app.goo.gl/5ishf4SFotEcyi8M7"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home