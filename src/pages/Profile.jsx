import React from 'react'

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Profil Desa Kamal
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Mengenal Lebih Dekat Desa Kamal, Jember
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tentang Desa Kamal
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Desa Kamal merupakan salah satu desa di Kecamatan Kamal, Kabupaten Jember, 
                Provinsi Jawa Timur. Desa ini terletak di wilayah strategis dengan akses 
                transportasi yang baik dan memiliki potensi wisata yang menarik.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dengan luas wilayah sekitar 12,5 km² dan jumlah penduduk sekitar 2.500 jiwa, 
                Desa Kamal memiliki karakteristik masyarakat yang ramah dan gotong royong 
                yang tinggi dalam pembangunan desa.
              </p>
              
              {/* Statistics */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">2,500+</div>
                  <div className="text-sm text-gray-600">Penduduk</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">12.5</div>
                  <div className="text-sm text-gray-600">Km² Luas Wilayah</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">15</div>
                  <div className="text-sm text-gray-600">RT/RW</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">8</div>
                  <div className="text-sm text-gray-600">Destinasi Wisata</div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏘️</div>
                  <p className="text-gray-600">Foto Desa Kamal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Visi & Misi
            </h2>
            <div className="w-20 h-0.5 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">VISI</h3>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <p className="text-lg text-gray-700 leading-relaxed text-center italic">
                  "Terwujudnya Desa Kamal yang Maju, Mandiri, dan Sejahtera 
                  Berbasis Potensi Lokal dan Kearifan Budaya"
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">MISI</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-gray-700">
                    Meningkatkan kualitas pelayanan publik yang transparan dan akuntabel
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-gray-700">
                    Mengembangkan potensi ekonomi masyarakat melalui UMKM dan wisata
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-gray-700">
                    Membangun infrastruktur desa yang mendukung kesejahteraan masyarakat
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-gray-700">
                    Melestarikan budaya dan tradisi lokal sebagai identitas desa
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-gray-700">
                    Menciptakan lingkungan yang bersih, sehat, dan berkelanjutan
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Village Structure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Struktur Pemerintahan Desa
            </h2>
            <div className="w-20 h-0.5 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kepala Desa */}
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="w-24 h-24 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kepala Desa</h3>
              <p className="text-green-600 font-medium mb-2">H. Ahmad Suryanto</p>
              <p className="text-sm text-gray-600">Periode 2019-2025</p>
            </div>

            {/* Sekretaris Desa */}
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="w-24 h-24 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">📝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sekretaris Desa</h3>
              <p className="text-green-600 font-medium mb-2">Siti Aminah, S.Pd</p>
              <p className="text-sm text-gray-600">Administrasi & Pelayanan</p>
            </div>

            {/* Bendahara */}
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="w-24 h-24 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bendahara Desa</h3>
              <p className="text-green-600 font-medium mb-2">Budi Santoso, SE</p>
              <p className="text-sm text-gray-600">Keuangan Desa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Lokasi & Geografis
            </h2>
            <div className="w-20 h-0.5 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Desa Kamal terletak di lokasi strategis dengan akses yang mudah dijangkau
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Container */}
            <div className="lg:col-span-2">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-96 relative">
                {/* Google Maps Embed */}
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

            {/* Location Info */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Informasi Geografis</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">📍</span>
                    <div>
                      <p className="font-medium text-gray-900">Alamat Lengkap</p>
                      <p className="text-gray-600 text-sm">Desa Kamal, Kec. Kamal, Kab. Jember, Jawa Timur 68155</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">🏔️</span>
                    <div>
                      <p className="font-medium text-gray-900">Ketinggian</p>
                      <p className="text-gray-600 text-sm">45-120 mdpl</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">🌡️</span>
                    <div>
                      <p className="font-medium text-gray-900">Iklim</p>
                      <p className="text-gray-600 text-sm">Tropis, 24-32°C</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">📏</span>
                    <div>
                      <p className="font-medium text-gray-900">Luas Wilayah</p>
                      <p className="text-gray-600 text-sm">12,5 km²</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Batas Wilayah</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Utara: Desa Kemantren</li>
                  <li>• Selatan: Desa Tegalrejo</li>
                  <li>• Timur: Desa Suci</li>
                  <li>• Barat: Desa Tanggul</li>
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

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Hubungi Pemerintah Desa Kamal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Telepon</h3>
              <p className="text-gray-600">(0331) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✉️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@desakamal.jember.id</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🕐</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Jam Layanan</h3>
              <p className="text-gray-600">Senin - Jumat<br/>08:00 - 16:00 WIB</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile