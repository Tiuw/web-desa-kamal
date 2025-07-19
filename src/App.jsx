import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Destination from './pages/Destination'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Infografis from './pages/Infografis'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/infografis" element={<Infografis />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App