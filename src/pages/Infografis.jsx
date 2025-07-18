import React from 'react'

const Infografis = () => {
  const infographics = [
    {
      title: "Profil Demografi Desa",
      description: "Komposisi penduduk berdasarkan usia, jenis kelamin, pendidikan, dan mata pencaharian utama masyarakat Desa Kamal",
      type: "Demografi",
      icon: "👥"
    },
    {
      title: "Potensi Ekonomi & Komoditas",
      description: "Pemetaan kopi robusta, tembakau, hasil pertanian, dan peluang pengembangan ekonomi kreatif berbasis lokal",
      type: "Ekonomi",
      icon: "💰"
    },
    {
      title: "Infrastruktur & Fasilitas",
      description: "Kondisi jalan, irigasi, fasilitas kesehatan, pendidikan, dan rencana pembangunan infrastruktur desa",
      type: "Infrastruktur",
      icon: "🏗️"
    },
    {
      title: "Program Pembangunan",
      description: "Timeline pembangunan, anggaran desa, program prioritas, dan capaian pembangunan berkelanjutan",
      type: "Pembangunan",
      icon: "📋"
    },
    {
      title: "Kesehatan & Gizi Masyarakat",
      description: "Data stunting, program Posyandu, imunisasi, dan upaya peningkatan kesehatan masyarakat",
      type: "Kesehatan",
      icon: "🏥"
    },
    {
      title: "Lingkungan & Konservasi",
      description: "Pengelolaan sampah, konservasi air, program hijau, dan upaya pelestarian lingkungan desa",
      type: "Lingkungan",
      icon: "🌱"
    }
  ]

  const keyIndicators = [
    {
      category: "Ekonomi",
      items: [
        { label: "Sektor Pertanian", status: "Dominan", color: "text-green-600" },
        { label: "UMKM Aktif", status: "Berkembang", color: "text-blue-600" },
        { label: "Kopi Robusta", status: "Unggulan", color: "text-amber-600" }
      ]
    },
    {
      category: "Sosial",
      items: [
        { label: "Pendidikan Dasar", status: "Tersedia", color: "text-purple-600" },
        { label: "Layanan Kesehatan", status: "Memadai", color: "text-red-600" },
        { label: "Partisipasi Masyarakat", status: "Tinggi", color: "text-indigo-600" }
      ]
    },
    {
      category: "Lingkungan",
      items: [
        { label: "Kualitas Air", status: "Baik", color: "text-cyan-600" },
        { label: "Pengelolaan Sampah", status: "Terorganisir", color: "text-teal-600" },
        { label: "Area Hijau", status: "Terjaga", color: "text-emerald-600" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Data & Infografis
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6">
            Desa Kamal
          </h2>
          <p className="text-lg opacity-90 mb-2">
            Informasi Komprehensif Pembangunan Desa
          </p>
          <p className="text-base opacity-75">
            Kecamatan Arjasa • Kabupaten Jember • Jawa Timur
          </p>
        </div>
      </div>

      {/* Key Indicators Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Indikator Pembangunan Desa
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ringkasan kondisi terkini pembangunan di berbagai sektor
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {keyIndicators.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700 font-medium">{item.label}</span>
                      <span className={`font-semibold ${item.color}`}>{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Infographics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Koleksi Infografis
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Visualisasi data yang mudah dipahami untuk mendukung transparansi 
              dan partisipasi masyarakat dalam pembangunan desa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infographics.map((item, index) => (
              <div key={index} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-56 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="text-5xl mb-3">{item.icon}</div>
                    <span className="bg-white bg-opacity-90 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.type}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Highlights */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sorotan Data Terkini
            </h2>
            <p className="text-gray-600">
              Pencapaian dan perkembangan terbaru di Desa Kamal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Economic Highlights */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-2xl mr-3">💼</span>
                Ekonomi & Kewirausahaan
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                  <span className="font-medium text-gray-700">Kopi Robusta Premium</span>
                  <span className="text-amber-600 font-semibold">Komoditas Utama</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-medium text-gray-700">Tembakau Berkualitas</span>
                  <span className="text-green-600 font-semibold">Ekspor Potensial</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-700">UMKM Lokal</span>
                  <span className="text-blue-600 font-semibold">Terus Berkembang</span>
                </div>
              </div>
            </div>

            {/* Social Development */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-2xl mr-3">🤝</span>
                Pembangunan Sosial
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-700">Program Stunting</span>
                  <span className="text-purple-600 font-semibold">Prioritas Utama</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="font-medium text-gray-700">Layanan Posyandu</span>
                  <span className="text-red-600 font-semibold">Aktif Beroperasi</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                  <span className="font-medium text-gray-700">Partisipasi Warga</span>
                  <span className="text-indigo-600 font-semibold">Sangat Tinggi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fitur Interaktif
            </h2>
            <p className="text-gray-600">
              Akses informasi lebih mendalam dengan tools interaktif
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-bold mb-2">Dashboard Real-time</h3>
              <p className="text-sm opacity-90 mb-4">Monitor perkembangan desa secara langsung</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Akses Dashboard
              </button>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-lg font-bold mb-2">Peta Interaktif</h3>
              <p className="text-sm opacity-90 mb-4">Jelajahi wilayah dan fasilitas desa</p>
              <button className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Buka Peta
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-bold mb-2">Laporan Lengkap</h3>
              <p className="text-sm opacity-90 mb-4">Download laporan tahunan dan data statistik</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Infografis