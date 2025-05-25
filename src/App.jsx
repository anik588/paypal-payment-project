import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
import Developer from './pages/Developer'

export default function App() {
  return (
    <Router>
      {/* 🔄 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source
          src="https://res.cloudinary.com/db0f0qi8d/video/upload/v1748164129/z6vfxdruzq4x6cy4607u.mp4"
          type="video/mp4"
        />
      </video>

      {/* ✅ Layout wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen px-4 text-white">
        {/* Growable section */}
        <main className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-2xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-6 mb-4">
          <Developer />
        </footer>
      </div>
    </Router>
  )
}
