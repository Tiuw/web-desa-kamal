import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Profile from './pages/Profile'
import News from './pages/News'
import Infografis from './pages/Infografis'
import Destination from './pages/Destination'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/news" element={<News />} />
            <Route path="/infografis" element={<Infografis />} />
            <Route path="/destination" element={<Destination />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App