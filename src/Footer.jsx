import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react'

function Footer() {
  return (
    <footer 
      className="py-16" 
      style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
    >
      <div className="max-w-7xl mx-auto container">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12">
          
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
                <Instagram size={26} />
              </a>
              <a 
                href="https://www.linkedin.com/company/gtm-finance" 
                className="hover:scale-110 transition-transform hover:drop-shadow-[0_0_6px_#0a66c2]" 
                style={{ color: '#0a66c2' }}
              >
                <Linkedin size={26} />
              </a>
              <a 
                href="https://m.facebook.com/profile.php?id=435081580362637" 
                className="hover:scale-110 transition-transform hover:drop-shadow-[0_0_6px_#1877f3]" 
                style={{ color: '#1877f3' }}
              >
                <Facebook size={26} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pl-4 md:pl-8">
            <h3 
              className="text-xl font-semibold mb-4 tracking-wide uppercase" 
              style={{ color: 'var(--accent-primary, #4f8cff)' }}
            >
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 text-base">
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
                <a href="mailto:lopeye@gtmfinance.com.au" className="hover:text-blue-400 transition-colors">lopeye@gtmfinance.com.au</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col items-start space-y-6">
          {/* Copyright */}
          <p className="text-sm font-medium tracking-wide text-gray-400">
            © 2025 GTM Finance. All rights reserved.
          </p>

          {/* Legal */}
          <div className="w-full max-w-5xl bg-[#1e2235] rounded-lg p-8 text-left border border-gray-700">
            <h3 className="font-semibold text-lg mb-3 text-blue-300 tracking-wide uppercase">Legal</h3>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>ABN 57 250 815 625</p>
              <p>Credit Representative (#001284748) of Platinum Wealth Advisory ABN 57 677 078 250 (AFSL 558788)</p>
              <div className="space-y-2 mt-3">
                <a href="/team/fsg.pdf" className="block hover:text-blue-400 transition-colors text-blue-200">Financial Service Guide</a>
                <a href="/team/pp.pdf" className="block hover:text-blue-400 transition-colors text-blue-200">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
