import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Phone, Mail, X } from 'lucide-react'
import { TextField, Button, Box, Typography, Grid, CircularProgress } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import toast, { Toaster } from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Navigation from './Navigation'
import Footer from './Footer'
import { sendContactForm } from './emailService'

// Create Material UI dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6',
    },
    secondary: {
      main: '#64748b',
    },
    background: {
      default: '#1e293b',
      paper: '#334155',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cbd5e1',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#475569',
            '& fieldset': {
              borderColor: '#64748b',
            },
            '&:hover fieldset': {
              borderColor: '#3b82f6',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#3b82f6',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#cbd5e1',
          },
          '& .MuiOutlinedInput-input': {
            color: '#ffffff',
          },
        },
      },
    },
  },
});

function Contact() {
  const navigate = useNavigate()
  const [showCalendly, setShowCalendly] = useState(false)
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isContactSending, setIsContactSending] = useState(false)

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

  // Handle contact form input changes
  const handleContactInputChange = (e) => {
    const { name, value } = e.target
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle contact form submission
  const handleContactSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!contactForm.firstName || !contactForm.lastName || !contactForm.email || !contactForm.phone || !contactForm.message) {
      toast.error('Please fill in all fields', {
        style: {
          background: '#1e293b',
          color: '#ffffff',
          border: '1px solid #ef4444',
        },
      })
      return
    }

    setIsContactSending(true)

    try {
      await sendContactForm(contactForm)
      toast.success('Thank you! Your message has been sent successfully. We will get back to you soon.', {
        style: {
          background: '#1e293b',
          color: '#ffffff',
          border: '1px solid #22c55e',
        },
        duration: 5000,
      })
      
      // Reset form
      setContactForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      console.error('Error sending contact form:', error)
      toast.error('Sorry, there was an error sending your message. Please try again.', {
        style: {
          background: '#1e293b',
          color: '#ffffff',
          border: '1px solid #ef4444',
        },
      })
    } finally {
      setIsContactSending(false)
    }
  }

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
      <Navigation onScheduleClick={() => setShowCalendly(true)} />
      
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
              CONTACT US TODAY
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              We can give you the best of both worlds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
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

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="p-4 rounded-full inline-block" style={{ backgroundColor: 'var(--accent)' }}>
                <MapPin className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Visit Our Office</h3>
                <p style={{ color: 'var(--text-secondary)' }}>1-3 Theobald Street<br />Thornbury, VIC 3071</p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center space-y-4"
            >
              <div className="p-4 rounded-full inline-block" style={{ backgroundColor: 'var(--success)' }}>
                <Phone className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Call Us</h3>
                <a href="tel:1300486346" style={{ color: 'var(--text-secondary)' }} className="hover:opacity-75">1300 486 346</a>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center space-y-4"
            >
              <div className="p-4 rounded-full inline-block" style={{ backgroundColor: '#a855f7' }}>
                <Mail className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Email Us</h3>
                <a href="mailto:lopeye@gtmfinance.com.au" style={{ color: 'var(--text-secondary)' }} className="hover:opacity-75">admin@gtmfinance.com.au</a>
              </div>
            </motion.div>
          </div>

          {/* Centered Contact Form */}
          <div className="flex justify-center">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card w-full max-w-2xl"
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Send us a Message</h3>
              <ThemeProvider theme={darkTheme}>
                <Box component="form" onSubmit={handleContactSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={contactForm.firstName}
                        onChange={handleContactInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={contactForm.lastName}
                        onChange={handleContactInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={contactForm.email}
                    onChange={handleContactInputChange}
                    required
                    variant="outlined"
                  />

                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={contactForm.phone}
                    onChange={handleContactInputChange}
                    required
                    variant="outlined"
                  />

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={contactForm.message}
                    onChange={handleContactInputChange}
                    required
                    variant="outlined"
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isContactSending}
                    sx={{ 
                      py: 1.5,
                      bgcolor: '#3b82f6',
                      '&:hover': {
                        bgcolor: '#2563eb'
                      },
                      '&:disabled': {
                        bgcolor: '#6b7280'
                      }
                    }}
                  >
                    {isContactSending ? (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CircularProgress size={20} color="inherit" />
                        Sending...
                      </Box>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </Box>
              </ThemeProvider>
            </motion.div>
          </div>

          {/* Social Media Section */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <h3 className="text-lg font-semibold m-6" style={{ color: 'var(--text-primary)' }}>Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://www.instagram.com/gtmfinance/" className="social-link" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://www.linkedin.com/company/gtm-finance" className="social-link" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://m.facebook.com/profile.php?id=435081580362637" className="social-link" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

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

      {/* Toast Notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1e293b',
            color: '#ffffff',
            border: '1px solid #475569',
            borderRadius: '8px',
            fontSize: '14px',
            maxWidth: '400px',
          },
          success: {
            iconTheme: {
              primary: '#22c55e',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },
          },
        }}
      />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Contact
