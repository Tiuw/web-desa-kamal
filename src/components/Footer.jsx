import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Desa Kamal</h3>
            <p className="text-gray-300 mb-4">
              Desa yang kaya akan budaya, tradisi, dan keindahan alam. 
              Melayani masyarakat dengan sepenuh hati untuk kemajuan bersama.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">YouTube</span>
                📺
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Beranda</Link></li>
              <li><Link to="/profile" className="text-gray-300 hover:text-white">Profil Desa</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white">Berita</Link></li>
              <li><Link to="/destination" className="text-gray-300 hover:text-white">Wisata</Link></li>
              <li><Link to="/infografis" className="text-gray-300 hover:text-white">Infografis</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 Jl. Desa Kamal No. 123</p>
              <p>📞 (0331) 123-4567</p>
              <p>✉️ info@desakamal.id</p>
              <p>🕐 Sen-Jum: 08:00-16:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Desa Kamal. Semua hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer