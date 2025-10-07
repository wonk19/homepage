import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import People from './pages/People'
import Research from './pages/Research'
import Publications from './pages/Publications'
import Teaching from './pages/Teaching'
import Resources from './pages/Resources'
import News from './pages/News'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router basename="/homepage">
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

