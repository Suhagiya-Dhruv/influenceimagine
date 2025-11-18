import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone } from "lucide-react"
import logo from '../../images/png-2.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/services', label: 'SERVICES' },
    { path: '/portfolio', label: 'PORTFOLIO' },
    { path: '/blog', label: 'BLOG' },
  ]

  return (
    <header id="top"
      className="fixed top-5 left-0 w-full z-[9999] flex justify-center items-center"
      style={{
        fontFamily: 'var(--font-gilroy)',
        textTransform: 'uppercase',
        fontWeight: 600,
      }}
    >

      <style>{`
        .cta-button {
          padding: 1.125rem 1.25rem;
          border-radius: 1.125rem;
          color: black;
          font-size: 16px;
          font-family: var(--font-gilroy);
          font-weight: 600;
          flex-shrink: 0;
          cursor: pointer;
          width: max-content;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(255, 255, 255, 0.15);
        }
        .cta-button:hover {
          transform: scale(1.04);
        }
      `}</style>

      <nav
        className={`flex justify-between items-center w-[88%] px-8 py-6 rounded transition-all duration-300 ${
          isScrolled ? 'shadow-xl' : ''
        }`}
        style={{
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(10px)',
          border: '1px solid transparent',
          borderImage:
            'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.24) 50%, rgba(255,255,255,0)) 1',
          color: 'var(--foreground)',
        }}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-100px h-16 object-contain" />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center space-x-8">

          {/* Nav links */}
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium tracking-wide transition-colors ${
                location.pathname === link.path
                  ? 'text-[#ffce1b]'
                  : 'text-white hover:text-[#ffce1b]'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Divider */}
          <div className="h-8 w-px bg-white/40"></div>

          {/* Phone Number + Icon */}
          <a
            href="tel:+919023989489"
            className="flex items-center space-x-2 text-white hover:text-[#ffce1b] transition"
          >
            <Phone className="w-5 h-5" />
            <span className="text-lg font-medium tracking-wide">
              +91 90239 89489
            </span>
          </a>

          {/* CTA BUTTON */}
          <Link
            to="/contact"
            className="cta-button bg-[#ffce1b] px-5 py-2 font-semibold text-sm transition-all"
          >
            Get Started Now →
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="bg-black absolute top-full left-0 right-0 md:hidden pb-4 px-6 rounded-b-xl border-t border-gray-300/20 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 text-sm font-medium tracking-wide border-b border-gray-800 ${
                  location.pathname === link.path
                    ? 'text-[#ffce1b]'
                    : 'text-white hover:text-[#ffce1b]'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Phone Number */}
            <a
              href="tel:+9023989489"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 mt-4 text-white hover:text-[#ffce1b]"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm tracking-wide">+91 9023989489</span>
            </a>

            {/* Mobile Contact Button */}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="cta-button block mt-4 bg-[#ffce1b] px-6 py-3 rounded-lg font-semibold text-center shadow-lg transition-all"
            >
              Get started Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
