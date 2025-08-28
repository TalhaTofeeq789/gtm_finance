import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, Menu, ArrowRight, Shield, TrendingUp, Users, Calendar, Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Star, CheckCircle, Download, ChevronLeft, ChevronRight } from 'lucide-react'
import './App.css'
import Footer from './Footer'
import { sendDownloadInfo } from './emailService'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [typewriterText, setTypewriterText] = useState('')
  const [showSecondLine, setShowSecondLine] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)
  const [showCalendly, setShowCalendly] = useState(false)
  const [hoveredResource, setHoveredResource] = useState(null)
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const [selectedResource, setSelectedResource] = useState(null)
  const [isEmailSending, setIsEmailSending] = useState(false)
  const [downloadForm, setDownloadForm] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const fullText = "Take Control of Your "
  const secondLineText = "Financial Future"

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0
    const typingSpeed = 100 // milliseconds per character
    
    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typeInterval)
        // Show second line after first line is complete
        setTimeout(() => {
          setShowSecondLine(true)
          // Mark typing as complete after second line animation
          setTimeout(() => {
            setTypingComplete(true)
          }, secondLineText.length * 50 + 2000) // Wait for second line + extra time
        }, 300)
      }
    }, typingSpeed)

    return () => clearInterval(typeInterval)
  }, [])

  // Set permanent dark theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  }, [])

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle download button click
  const handleDownloadClick = (resource) => {
    setSelectedResource(resource)
    setShowDownloadModal(true)
  }

  // Handle form submission and download
  const handleDownloadSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!downloadForm.name || !downloadForm.phone || !downloadForm.email) {
      alert('Please fill in all fields')
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(downloadForm.email)) {
      alert('Please enter a valid email address')
      return
    }

    setIsEmailSending(true)

    try {
      // Send email notification using EmailJS
      await sendDownloadInfo(
        {
          name: downloadForm.name,
          email: downloadForm.email,
          phone: downloadForm.phone
        },
        selectedResource.title
      )
      
      console.log('Download notification email sent successfully')
      
      // Show success message
      alert('Thank you! Your download will start shortly. We have been notified of your download.')
      
      // Close modal and reset form
      setShowDownloadModal(false)
      setDownloadForm({ name: '', phone: '', email: '' })
      
      // Open the PDF in a new tab
      window.open(selectedResource.link, '_blank')
      
    } catch (error) {
      console.error('Failed to send email notification:', error)
      alert('Download started successfully! Note: Email notification may have failed, but your download is proceeding.')
      
      // Still allow download even if email fails
      setShowDownloadModal(false)
      setDownloadForm({ name: '', phone: '', email: '' })
      window.open(selectedResource.link, '_blank')
    } finally {
      setIsEmailSending(false)
    }
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setDownloadForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Animation variants for different entry effects
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } }
  }
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.8, ease: "easeOut" } }
  }
  const slideInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } }
  }
  const slideInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } }
  }
  const zoomIn = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.1, ease: "easeOut" } }
  }
  const rotateIn = {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 1.2, ease: "easeOut" } }
  }

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.6
      }
    }
  }

  // Resource cards data
  const resources = [
    {
      id: 1,
      cover: '/courses/cs2.jpg',
      title: 'Asset Classes & Investment Guide',
      desc: 'Learn the fundamentals of different investment options and how to build a diversified portfolio.',
      link: '/courses/guide_to_asset_classes_and_investing_fundamentals.pdf',
      btnClass: 'btn-download-blue',
    },
    {
      id: 2,
      cover: '/courses/cs1.jpg',
      title: 'Market Volatility Guide',
      desc: 'Understand how to navigate market ups and downs with confidence and strategic planning.',
      link: '/courses/navigating_market_volatility.pdf',
      btnClass: 'btn-download-green',
    },
    {
      id: 3,
      cover: '/courses/cs3.jpg',
      title: 'Saving & Budgeting Guide',
      desc: 'Master the art of budgeting and saving to build a strong financial foundation.',
      link: '/courses/saving_and_budgeting.pdf',
      btnClass: 'btn-download-purple',
    },
  ]

  // Reviews data
  const reviews = [
    {
      "name": "Bridgeta Dausi",
      "rating": 5,
      "review": "GTM Finance made securing my home loan a smooth and stress-free experience. Their team was professional, responsive, and always willing to explain things clearly. I'd like to give a special mention to Modupe, who went above and beyond to guide me through the process. Her patience, dedication, and attention to detail really stood out. I highly recommend GTM Finance to anyone looking for reliable support with their home loan."
    },
    {
      "name": "Stanley Ugochukwu",
      "rating": 5,
      "review": "GTM Finance is very reliable, efficient and professional. Without them my loan acquisition journey would have been a nightmare. I was guided every step of the way and had all the support and encouragement I needed to bring my financial dreams to fruition. I would highly recommend them to anyone seeking seamless financial advise, anytime and anyday. Kudos!"
    },
    {
      "name": "Nnaemeka Meribe",
      "rating": 5,
      "review": "Getting financial advice from GTM Finance is my best financial move ever. They have been meticulous, professional and reassuring in their dealings with me. It has been so far, so good and I recommend them without reservations."
    },
    {
      "name": "Chidinma Maudlyn Ejiogu",
      "rating": 5,
      "review": "Exceptional experience with the team at GTM Finance. Assisted in getting me a new loan product and still kept in touch when it was time to refinance. Willing to listen and always puts the customer first."
    },
    {
      "name": "James Owen",
      "rating": 5,
      "review": "After the collapse of my previous super management team, Lopeye was extremely helpful in helping me with my very limited knowledge to start again. As stressful as it may well be to deal with older people with very limited knowledge about investment. Lopeye continues to help with every issue that arises."
    },
    {
      "name": "Irol Caguimbal",
      "rating": 5,
      "review": "Lopeye's advice has broadened our financial knowledge and he directed us to the right direction. Their wealth of knowledge and experience and professionalism is second to none. Indeed highly recommended!!!"
    },
    {
      "name": "Michelle Taran",
      "rating": 5,
      "review": "Personable and easy to work with. Lopeye is able to adjust to personal goals and changing circumstances. We have really enjoyed working with him."
    },
    {
      "name": "Nadine Spencer",
      "rating": 5,
      "review": "Lopeye and I started working together last year. Personally I find the world of personal finance really daunting and very complicated, but Lopeye was/is there with me every step of the way. He is thoughtful, collaborative, an excellent communicator and very thorough. He helps me understand everything just that little bit better and is very patient with all my questions. Our sessions are always very energising and I walk away with a sense of empowerment."
    },
    {
      "name": "Chloe Thomson",
      "rating": 5,
      "review": "I owe my current financial situation of stability, certainty and flexibility to the GTM finance team. I would not trust anyone else, the way I trust the people in this company. So grateful to have found them and could not recommend high enough. I would recommend to everyone and anyone. These services are a must!"
    },
    {
      "name": "Navin Jay",
      "rating": 5,
      "review": "GTM Finance has helped me restructure my finances and help me achieve my savings goals for the last 2 years now! They are highly knowledgeable and is my go to for any financial related advice! Highly RECOMMENDED!"
    }
  ]

  // Helper function to get initials from name
  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase()
  }

  // Reviews navigation functions
  // Reviews pagination - show exactly 3 reviews at a time
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  // Get current reviews to display (exactly 3 at a time)
  const getCurrentReviews = () => {
    const startIndex = currentPage * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    return reviews.slice(startIndex, endIndex);
  };

  const goToPrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  const goToNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  // Check if arrows should be disabled
  const isLeftDisabled = currentPage === 0;
  const isRightDisabled = currentPage === totalPages - 1;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Calendly Modal */}
      {showCalendly && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999,
          background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
          onClick={() => setShowCalendly(false)}
        >
          <div style={{ position: 'relative', width: '90vw', maxWidth: 600, background: 'var(--bg-primary)', borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setShowCalendly(false)} style={{ position: 'absolute', top: 12, right: 12, background: 'none', border: 'none', color: '#fff', fontSize: 24, cursor: 'pointer', zIndex: 2 }}>
              <X size={28} />
            </button>
            <iframe
              src="https://calendly.com/lopeyegtmfinance/20min?hide_gdpr_banner=1"
              width="100%"
              height="600"
              style={{ border: 'none', borderRadius: 12, minHeight: 500 }}
              allowFullScreen
              title="Schedule Meeting"
            />
          </div>
        </div>
      )}

      {/* Download Modal */}
      {showDownloadModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999,
          background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
          onClick={() => setShowDownloadModal(false)}
        >
          <div style={{ 
            position: 'relative', 
            width: '90vw', 
            maxWidth: 500, 
            background: '#1a202c', 
            borderRadius: 16, 
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            padding: '2rem'
          }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowDownloadModal(false)} 
              style={{ 
                position: 'absolute', 
                top: 12, 
                right: 12, 
                background: 'none', 
                border: 'none', 
                color: '#fff', 
                fontSize: 24, 
                cursor: 'pointer', 
                zIndex: 2 
              }}
            >
              <X size={28} />
            </button>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Download Resource</h3>
              <p className="text-gray-300">Please provide your details to download "{selectedResource?.title}"</p>
            </div>

            <form onSubmit={handleDownloadSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={downloadForm.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={downloadForm.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={downloadForm.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowDownloadModal(false)}
                  className="flex-1 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isEmailSending}
                  className={`flex-1 px-6 py-3 text-white rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 ${
                    isEmailSending 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isEmailSending ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Download size={20} />
                      Download
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Navigation */}
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
              <img 
                src="/logo/logo-removebg-preview.png" 
                alt="GTM Finance" 
                className="h-16 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className={`nav-link ${isScrolled ? 'scrolled' : 'transparent'}`}>Home</a>
                <Link to="/about" className={`nav-link ${isScrolled ? 'scrolled' : 'transparent'}`}>About</Link>
                <Link to="/financial-planning" className={`nav-link ${isScrolled ? 'scrolled' : 'transparent'}`}>Financial Planning</Link>
                <Link to="/mortgage-broking" className={`nav-link ${isScrolled ? 'scrolled' : 'transparent'}`}>Mortgage Broking</Link>
                <Link to="/contact" className={`nav-link ${isScrolled ? 'scrolled' : 'transparent'}`}>Contact</Link>
              </div>
            </div>

            {/* CTA Button and Theme Toggle */}
            <div className="hidden md:flex items-center space-x-6">
              <motion.a 
                onClick={() => setShowCalendly(true)}
                whileHover={{ 
                  scale: 1.05,
                  color: "white"
                }}
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
              <a href="#home" className="mobile-nav-link">Home</a>
              <Link to="/about" className="mobile-nav-link">About</Link>
              <Link to="/financial-planning" className="mobile-nav-link">Financial Planning</Link>
              <Link to="/mortgage-broking" className="mobile-nav-link">Mortgage Broking</Link>
              <Link to="/contact" className="mobile-nav-link">Contact</Link>
              
              {/* Mobile actions container */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-600 mt-4">
                <a 
                  href="#"
                  onClick={e => { e.preventDefault(); setShowCalendly(true); }}
                  className="btn-primary flex-1 text-center mr-3"
                >
                  Schedule Meeting
                </a>
                
                {/* Mobile Theme Toggle */}
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="hero-section pt-16 relative overflow-hidden"
        style={{
          backgroundImage: 'url("/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40" style={{ zIndex: 2 }}></div>
        
        {/* Animated background particles */}
        <div className="absolute inset-0" style={{ zIndex: 3 }}>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 16 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 6,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <motion.div
          className="max-w-7xl mx-auto container py-20 relative"
          style={{ zIndex: 10 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <motion.div className="text-center space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="space-y-6"
            >
              {/* Main heading with typewriter effect */}
              <motion.div className="text-4xl lg:text-6xl font-bold text-white leading-tight min-h-[120px] lg:min-h-[200px]" variants={zoomIn}>
                <div className="relative">
                  {/* First line with typewriter effect */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1 }}
                    className="inline-block"
                  >
                    {typewriterText}
                    {/* Blinking cursor - only show while typing first line and not complete */}
                    {!typingComplete && typewriterText.length < fullText.length && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ 
                          duration: 1, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                        className="inline-block ml-1 text-white"
                      >
                        |
                      </motion.span>
                    )}
                  </motion.span>
                  
                  {/* Second line with dramatic entrance */}
                  <div className="block mt-2">
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.5, y: 20 }}
                      animate={showSecondLine ? { 
                        opacity: 1, 
                        scale: 1, 
                        y: 0,
                      } : {}}
                      transition={{ 
                        duration: 1.6, 
                        type: "spring",
                        stiffness: 120,
                        damping: 30
                      }}
                      className="text-white inline-block"
                    >
                      {showSecondLine && (
                        <>
                          {secondLineText.split('').map((char, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ 
                                delay: index * 0.09,
                                duration: 0.6
                              }}
                              className="inline-block"
                            >
                              {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                          ))}
                          {/* Final blinking cursor - only show when not complete */}
                          {!typingComplete && (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: [0, 1, 0, 1, 0, 1, 0] }}
                              transition={{ 
                                delay: secondLineText.length * 0.09 + 1,
                                duration: 2.5,
                                ease: "easeInOut" 
                              }}
                              className="inline-block ml-1 text-white"
                            >
                              |
                            </motion.span>
                          )}
                        </>
                      )}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
              
              {/* Subtitle with fade in */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, delay: 1.2 }}
                className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
              >
                We believe financial planning isn't just about numbers—it's about giving you clarity, 
                confidence, and a structured strategy to achieve your goals.
              </motion.p>
              
              {/* Animated buttons */}
              <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
                <motion.a 
                  onClick={() => setShowCalendly(true)}
                  whileHover={{ 
                    scale: 1.02,
                    color: "white",
                    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary text-lg px-8 py-4 relative overflow-hidden"
                  initial={{ rotateX: 90 }}
                  animate={{ rotateX: 0 }}
                  transition={{ duration: 1.8, delay: 2.2 }}
                >
                  <motion.span
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-2"
                  >
                    Schedule a Meeting <ArrowRight size={20} />
                  </motion.span>
                </motion.a>
                <motion.a 
                  href="#about"
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "#93c5fd"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-500"
                  initial={{ rotateX: -90 }}
                  animate={{ rotateX: 0 }}
                  transition={{ duration: 1.8, delay: 2.6 }}
                >
                  Learn More
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 relative"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)', position: 'relative' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(147, 197, 253, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
          }}></div>
        </div>
        
        <motion.div className="max-w-7xl mx-auto container relative z-10" variants={zoomIn}>
          <motion.div className="text-center space-y-6 mb-16" variants={slideInLeft}>
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-white">
              We Get It, Because We're Just Like You
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-3xl mx-auto text-gray-200">
              You've built a career you're proud of, and now it's time to take control of your financial future. 
              But knowing how to maximize wealth, minimize tax, and create financial security can feel overwhelming 
              without the right guidance.
            </motion.p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={fadeIn}>
            {/* Each about card */}
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                boxShadow: "0 15px 35px rgba(59, 130, 246, 0.2)"
              }}
              transition={{ duration: 0.4 }}
              className="relative group"
            >
              <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-8 text-center border border-gray-600 border-opacity-40 hover:border-blue-400 hover:border-opacity-60 transition-all duration-500 h-full">
                <motion.div 
                  whileHover={{ rotate: 180, scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-blue-600 bg-opacity-20 border border-blue-500 border-opacity-30"
                >
                  <Users className="text-blue-400" size={32} />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-xl font-semibold mb-4 text-white"
                >
                  Personal Approach
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-gray-300 leading-relaxed"
                >
                  We understand your unique situation and create tailored strategies that work for your lifestyle.
                </motion.p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                boxShadow: "0 15px 35px rgba(59, 130, 246, 0.2)"
              }}
              className="relative group"
            >
              <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-8 text-center border border-gray-600 border-opacity-40 hover:border-blue-400 hover:border-opacity-60 transition-all duration-500 h-full">
                <motion.div 
                  whileHover={{ rotate: 180, scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-blue-600 bg-opacity-20 border border-blue-500 border-opacity-30"
                >
                  <Shield className="text-blue-400" size={32} />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl font-semibold mb-4 text-white"
                >
                  Expert Guidance
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-gray-300 leading-relaxed"
                >
                  With years of experience, we provide professional advice you can trust for your financial journey.
                </motion.p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                boxShadow: "0 15px 35px rgba(59, 130, 246, 0.2)"
              }}
              className="relative group"
            >
              <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-8 text-center border border-gray-600 border-opacity-40 hover:border-blue-400 hover:border-opacity-60 transition-all duration-500 h-full">
                <motion.div 
                  whileHover={{ rotate: 180, scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-blue-600 bg-opacity-20 border border-blue-500 border-opacity-30"
                >
                  <TrendingUp className="text-blue-400" size={32} />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-xl font-semibold mb-4 text-white"
                >
                  Results Driven
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="text-gray-300 leading-relaxed"
                >
                  We focus on strategies that deliver real results and help you achieve your financial goals.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Services Overview */}
      <section 
        id="services" 
        className="py-20 relative"
        style={{
          backgroundImage: 'url("/bg-3.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="max-w-7xl mx-auto container relative" style={{ zIndex: 10 }}>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-white">
              Our Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-3xl mx-auto text-gray-200">
              Comprehensive financial solutions tailored to your needs
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              viewport={{ once: true }}
              className="card hover:shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--accent-light)' }}>
                  <TrendingUp style={{ color: 'var(--accent)' }} size={24} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Financial Planning</h3>
              </div>
              <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                Comprehensive wealth strategies, investment planning, and retirement preparation 
                to secure your financial future.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span style={{ color: 'var(--text-secondary)' }}>Wealth maximization strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span style={{ color: 'var(--text-secondary)' }}>Tax minimization planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span style={{ color: 'var(--text-secondary)' }}>Investment portfolio management</span>
                </li>
              </ul>
              <Link to="/financial-planning" className="btn-primary">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card hover:shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--accent-light)' }}>
                  <Shield style={{ color: 'var(--accent)' }} size={24} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Mortgage Broking</h3>
              </div>
              <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                Expert mortgage advice and competitive lending solutions to help you 
                achieve your property investment goals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span style={{ color: 'var(--text-secondary)' }}>Home loan comparisons</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span style={{ color: 'var(--text-secondary)' }}>Investment property financing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span style={{ color: 'var(--text-secondary)' }}>Refinancing opportunities</span>
                </li>
              </ul>
              <Link to="/mortgage-broking" className="btn-primary">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section 
        className="py-20 relative" 
        style={{
          // backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="max-w-7xl mx-auto container relative" style={{ zIndex: 10 }}>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-white">
              Free Resources & Guides
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-3xl mx-auto text-gray-200">
              Download our comprehensive guides to start your financial journey
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((res, idx) => (
              <motion.div
                key={res.id}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                onMouseEnter={() => setHoveredResource(res.id)}
                onMouseLeave={() => setHoveredResource(null)}
                className="card text-center hover:shadow-lg transition-shadow cursor-pointer relative overflow-hidden"
                style={{ minHeight: 500 }}
              >
                {/* Book Cover (default) */}
                <img
                  src={res.cover}
                  alt={res.title}
                  style={{
                    width: '100%',
                    height: 500,
                    objectFit: 'cover',
                    borderRadius: 12,
                    opacity: hoveredResource === res.id ? 0 : 1,
                    transition: 'opacity 0.7s',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    zIndex: 1
                  }}
                />
                {/* Content on hover */}
                <div
                  style={{
                    opacity: hoveredResource === res.id ? 1 : 0,
                    transition: 'opacity 0.4s',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: 500,
                    background: 'rgba(26,32,44,0.96)',
                    borderRadius: 12,
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 25,
                    padding: 24
                  }}
                >
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{res.title}</h3>
                  <p className="mb-4 text-sm" style={{ color: 'var(--text-secondary)' }}>{res.desc}</p>
                  <button 
                    onClick={() => handleDownloadClick(res)} 
                    className={res.btnClass}
                  >
                    Download PDF
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: 'url("/bg-2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="max-w-7xl mx-auto container relative" style={{ zIndex: 10 }}>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-white">
              What Our Clients Say
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-3xl mx-auto text-gray-200">
              Don't just take our word for it - hear from satisfied clients who've achieved their financial goals
            </motion.p>
          </motion.div>

          {/* Reviews Container with Arrow Navigation */}
          <div className="relative max-w-6xl mx-auto">
            {/* Left Arrow - Enhanced UI */}
            <button
              onClick={goToPrevious}
              disabled={isLeftDisabled}
              className={`absolute left-0 top-1/2 transform -translate-y-6 -translate-x-4 z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                isLeftDisabled 
                  ? 'bg-gray-700/40 text-gray-500 cursor-not-allowed opacity-30 blur-[1px] backdrop-blur-sm' 
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:scale-110 hover:shadow-2xl active:scale-95 backdrop-blur-sm border border-blue-500/30'
              }`}
              style={{ 
                left: '-28px',
                boxShadow: isLeftDisabled 
                  ? '0 4px 20px rgba(0,0,0,0.1)' 
                  : '0 8px 32px rgba(59, 130, 246, 0.4), 0 4px 16px rgba(0,0,0,0.2)'
              }}
            >
              <ChevronLeft size={28} strokeWidth={2.5} />
            </button>

            {/* Right Arrow - Enhanced UI */}
            <button
              onClick={goToNext}
              disabled={isRightDisabled}
              className={`absolute right-0 top-1/2 transform -translate-y-6 translate-x-4 z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                isRightDisabled 
                  ? 'bg-gray-700/40 text-gray-500 cursor-not-allowed opacity-30 blur-[1px] backdrop-blur-sm' 
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:scale-110 hover:shadow-2xl active:scale-95 backdrop-blur-sm border border-blue-500/30'
              }`}
              style={{ 
                right: '-28px',
                boxShadow: isRightDisabled 
                  ? '0 4px 20px rgba(0,0,0,0.1)' 
                  : '0 8px 32px rgba(59, 130, 246, 0.4), 0 4px 16px rgba(0,0,0,0.2)'
              }}
            >
              <ChevronRight size={28} strokeWidth={2.5} />
            </button>

            {/* Reviews Display - Exactly 3 reviews at a time */}
            <div 
              className="overflow-hidden pb-6" 
              style={{ 
                width: '100%',
                maxWidth: '1000px',
                margin: '0 auto'
              }}
            >
              <div className="grid grid-cols-3 gap-6">
                {getCurrentReviews().map((review, index) => (
                  <motion.div 
                    key={`${currentPage}-${index}`}
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ 
                      scale: 1.02, 
                      y: -8,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    transition={{ delay: index * 0.1 }}
                    className="card relative"
                    style={{ 
                      height: 'auto'
                    }}
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <p className="mb-6 italic text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      "{review.review}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold" 
                           style={{ 
                             backgroundColor: `hsl(${(currentPage * 3 + index) * 36}, 70%, 50%)`, 
                             color: 'white' 
                           }}>
                        {getInitials(review.name)}
                      </div>
                      <div>
                        <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                          {review.name}
                        </p>
                        <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                          Verified Client
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r text-white">
        <div className="max-w-7xl mx-auto container text-center">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold">
              Schedule a Consultation Today!
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl opacity-90 max-w-2xl mx-auto">
              Book a No-Obligation 30 Minute Consultation with GTM Finance
            </motion.p>
            <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
              <iframe
                src="https://calendly.com/lopeyegtmfinance/20min?embed_domain=localhost&embed_type=Inline"
                width="100%"
                height="550"
                style={{ 
                  border: 'none', 
                  borderRadius: '8px', 
                  background: 'transparent'
                }}
                allowFullScreen
                title="Schedule Meeting"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
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

          <div className="flex justify-center">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card w-full max-w-2xl"
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

      {/* Map Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto container">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Office Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--accent)' }}>
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Address</h4>
                      <p style={{ color: 'var(--text-secondary)' }}>
                        1-3 Theobald Street<br />
                        Thornbury, VIC 3071<br />
                        Australia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--success)' }}>
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Phone</h4>
                      <a href="tel:1300486346" style={{ color: 'var(--accent)' }} className="hover:opacity-75">
                        1300 486 346
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full" style={{ backgroundColor: '#a855f7' }}>
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Email</h4>
                      <a href="mailto:lopeye@gtmfinance.com.au" style={{ color: 'var(--accent)' }} className="hover:opacity-75">
                        
                        admin@gtmfinance.com.au
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.4566391492453!2d145.02429707504692!3d-37.75588973073136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64440a20c5be1%3A0xba61b672ba0aad86!2s1-3%20Theobald%20St%2C%20Thornbury%20VIC%203071%2C%20Australia!5e0!3m2!1sen!2s!4v1756291050617!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GTM Finance Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
