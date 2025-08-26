import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react'
import Navigation from './Navigation'
import Footer from './Footer'

function Contact() {
  const navigate = useNavigate()

  // Redirect to home page on refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('redirectToHome', 'true')
    }

    const checkRedirect = () => {
      if (sessionStorage.getItem('redirectToHome') === 'true') {
        sessionStorage.removeItem('redirectToHome')
        navigate('/')
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    checkRedirect()

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [navigate])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40" style={{ zIndex: 2 }}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              CONTACT US <span className="text-blue-400">TODAY</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              We can give you the best of both worlds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.button>
              <motion.a 
                href="https://calendly.com/lopeyegtmfinance/20min?back=1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule a Meeting
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="max-w-7xl mx-auto container relative" style={{ zIndex: 10 }}>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-white">
              Get In Touch
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-3xl mx-auto text-gray-200">
              Ready to take control of your financial future? Contact us today for a free consultation.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--accent)' }}>
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Visit Our Office</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>1-3 Theobald Street<br />Thornbury, VIC 3071</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--success)' }}>
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Call Us</h3>
                  <a href="tel:1300486346" style={{ color: 'var(--text-secondary)' }} className="hover:opacity-75">1300 486 346</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#a855f7' }}>
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Email Us</h3>
                  <a href="mailto:lopeye@gtmfinance.com.au" style={{ color: 'var(--text-secondary)' }} className="hover:opacity-75">lopeye@gtmfinance.com.au</a>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/gtmfinance/" className="social-link" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    <Instagram style={{ color: 'var(--text-secondary)' }} size={20} />
                  </a>
                  <a href="https://www.linkedin.com/company/gtm-finance" className="social-link" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    <Linkedin style={{ color: 'var(--text-secondary)' }} size={20} />
                  </a>
                  <a href="https://m.facebook.com/profile.php?id=435081580362637" className="social-link" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    <Facebook style={{ color: 'var(--text-secondary)' }} size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      First Name
                    </label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="form-input w-full"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="form-input w-full"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-input w-full"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="form-input w-full"
                    placeholder="0400 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Service Interest
                  </label>
                  <select 
                    id="service" 
                    className="form-select w-full"
                  >
                    <option value="">Select a service</option>
                    <option value="financial-planning">Financial Planning</option>
                    <option value="mortgage-broking">Mortgage Broking</option>
                    <option value="both">Both Services</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="form-textarea w-full"
                    placeholder="Tell us about your financial goals..."
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Contact
