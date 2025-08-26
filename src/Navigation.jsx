import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className="fixed w-full z-50 transition-all duration-300"
      style={{ 
        backgroundColor: isScrolled ? 'rgba(26, 32, 44, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid #4a5568' : 'none',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto container">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/logo/logo-removebg-preview.png" 
                alt="GTM Finance" 
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`nav-link ${isScrolled ? 'scrolled' : 'transparent'}`}>Home</Link>
              <Link to="/about" className={`nav-link ${isScrolled ? 'scrolled' : 'transparent'}`}>About</Link>
              <Link to="/financial-planning" className={`nav-link ${isScrolled ? 'scrolled' : 'transparent'}`}>Financial Planning</Link>
              <Link to="/mortgage-broking" className={`nav-link ${isScrolled ? 'scrolled' : 'transparent'}`}>Mortgage Broking</Link>
              <Link to="/contact" className={`nav-link ${isScrolled ? 'scrolled' : 'transparent'}`}>Contact</Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.a 
              href="https://calendly.com/lopeyegtmfinance/20min?back=1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-6 py-3"
            >
              Schedule Meeting
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`nav-link ${isScrolled ? 'scrolled' : 'transparent'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mobile-nav"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="mobile-nav-link">Home</Link>
              <Link to="/about" className="mobile-nav-link">About</Link>
              <Link to="/financial-planning" className="mobile-nav-link">Financial Planning</Link>
              <Link to="/mortgage-broking" className="mobile-nav-link">Mortgage Broking</Link>
              <Link to="/contact" className="mobile-nav-link">Contact</Link>
              
              {/* Mobile actions container */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-600 mt-4">
                <a href="https://calendly.com/lopeyegtmfinance/20min?back=1" target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 text-center mr-3">
                  Schedule Meeting
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
