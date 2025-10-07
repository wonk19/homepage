import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/people', label: 'People' },
    { path: '/research', label: 'Research' },
    { path: '/publications', label: 'Publications' },
    { path: '/teaching', label: 'Teaching' },
    { path: '/resources', label: 'Resources' },
    { path: '/news', label: 'News & Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="nav-brand" onClick={closeMenu}>
            <span className="brand-text">Research Lab</span>
          </Link>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger ${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

