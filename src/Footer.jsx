import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer 
      className="pt-16" 
      style={{ backgroundColor: '#374151', color: '#d1d5db' }}
    >
      <div className="max-w-7xl mx-auto container">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-500 pb-12">
          
          {/* Logo + Social */}
          <div className="space-y-5">
            <Link to="/">
              <img 
                src="/logo/logo-removebg-preview.png" 
                alt="GTM Finance" 
                className="h-20 w-auto"
                style={{ filter: 'drop-shadow(0 2px 8px #1a1a2e44)' }}
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Professional financial planning and mortgage broking services to secure your future.
            </p>
            <div className="flex flex-row items-center space-x-6 mt-4">
              <a 
                href="https://www.instagram.com/gtmfinance/" 
                className="hover:scale-110 transition-transform hover:drop-shadow-[0_0_6px_#e1306c]" 
                style={{ color: '#e1306c' }}
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a 
                href="https://www.linkedin.com/company/gtm-finance" 
                className="hover:scale-110 transition-transform hover:drop-shadow-[0_0_6px_#0a66c2]" 
                style={{ color: '#0a66c2' }}
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a 
                href="https://m.facebook.com/profile.php?id=435081580362637" 
                className="hover:scale-110 transition-transform hover:drop-shadow-[0_0_6px_#1877f3]" 
                style={{ color: '#1877f3' }}
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pl-8 md:pl-16">
            <h3 
              className="text-xl font-semibold mb-4 tracking-wide uppercase" 
              style={{ color: 'var(--accent-primary, #4f8cff)' }}
            >
              Quick Links
            </h3>
            <div className="flex flex-col gap-1 text-base">
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-blue-400 hover:translate-x-1 transition-all"
              >
                About
              </Link>
              <a 
                href="/#services" 
                className="text-gray-300 hover:text-blue-400 hover:translate-x-1 transition-all"
              >
                Services
              </a>
              <a 
                href="/#resources" 
                className="text-gray-300 hover:text-blue-400 hover:translate-x-1 transition-all"
              >
                Resources
              </a>
              <a 
                href="/#contact" 
                className="text-gray-300 hover:text-blue-400 hover:translate-x-1 transition-all"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 
              className="text-xl font-semibold mb-6 tracking-wide uppercase" 
              style={{ color: 'var(--accent-primary, #4f8cff)' }}
            >
              Contact Info
            </h3>
            <div className="space-y-3 text-base">
              <div className="flex items-center gap-3">
                <MapPin size={20} style={{ color: 'var(--accent-primary, #4f8cff)' }} />
                <span>1-3 Theobald Street, Thornbury, VIC 3071</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} style={{ color: 'var(--accent-primary, #4f8cff)' }} />
                <a href="tel:1300486346" className="hover:text-blue-400 transition-colors">1300 486 346</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} style={{ color: 'var(--accent-primary, #4f8cff)' }} />
                <a href="mailto:lopeye@gtmfinance.com.au" className="hover:text-blue-400 transition-colors">admin@gtmfinance.com.au</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col items-start space-y-6">
          {/* Legal */}
          <div className="space-y-3 text-sm leading-relaxed">
            <br />
            <p>GTM Finance Pty Ltd ATF GTM Finance is a Corporate Authorised Representative (#001284748) of Platinum Wealth Advisory ABN 57 677 078 250 (AFSL 558788)</p>
            <div className="space-y-2 mt-3">
              <p></p>
                
              <a href="/team/fsg.pdf" className="block hover:text-blue-400 transition-colors text-blue-200">View Financial Services</a>
              <p></p>
                
              <a href="/team/pp.pdf" className="block hover:text-blue-400 transition-colors text-blue-200">View Privacy Policy</a>
            </div>
          </div>

          {/* Copyright and Credits */}
          <div className="w-full border-t border-gray-500 pt-6 pb-4 text-center mb-6">
            <p className="text-sm font-medium tracking-wide text-gray-300 mb-2">
              Copyright © 2025 GTM Finance. All rights reserved. ABN 5725 0815 625.
            </p>
            <p className="text-base font-medium text-gray-200 mb-3">
              made by <a href="https://aicexpert.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors underline">AICE XPERT</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
