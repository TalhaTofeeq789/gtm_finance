import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, MapPin, Phone, Mail, X } from 'lucide-react'

import Navigation from './Navigation'
import Footer from './Footer'
import { Grid, Card, CardContent, Typography, Avatar, Box } from '@mui/material';

function About() {
  const navigate = useNavigate()
  const [showCalendly, setShowCalendly] = useState(false)

  // Smooth scroll function
  const scrollToAboutSection = () => {
    const aboutSection = document.getElementById('about-section')
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)'
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg" style={{ color: '#1e40af' }}>
              LIVE FOR TODAY AND FOR TOMORROW
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#1e3a8a' }}>
              We can give you the best of both worlds.
            </p>
            <motion.button
              onClick={scrollToAboutSection}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                color: '#ffffff'
              }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Us Content Section */}
      <section id="about-section" className="py-20" style={{ backgroundColor: '#f0f9ff' }}>
        <div className="w-full max-w-4xl mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-extrabold mb-4 tracking-tight border-b-4 pb-2 pl-1"
              style={{
                width: 'fit-content',
                color: '#1e40af',
                borderColor: '#1e40af'
              }}
            >
              About Us
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="space-y-12 text-lg leading-relaxed mt-6 pl-1"
              style={{ color: '#374151' }}
            >
              <p>
                You've worked hard to build a successful career and a lifestyle you're proud of. You earn good money, and you're ready to take the next step in achieving your financial goals—without compromising the lifestyle you value. After all, isn't that what it's all about?
              </p>
              <br />
              <p>
                At <span className="font-semibold" style={{ color: '#1e40af' }}>GTM Finance</span>, we specialize in turning your ambitious goals into a clear, actionable financial plan that aligns with your life today and your aspirations for the future.
              </p>
              <p>
                Whether you're looking to renovate or purchase a holiday home, start investing, retire early, reduce your tax burden, launch a business, or indulge in multiple unforgettable international holidays each year, we're here to make it happen.
              </p>
              <br />
              <p>
                At <span className="font-semibold" style={{ color: '#1e40af' }}>GTM Finance</span>, we pride ourselves on being personal and proactive. Our expert team will guide you every step of the way, leveraging our proven strategies to help you create the future you've envisioned. Let's build the life you deserve—together.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section with Material-UI */}
      <section className="py-20" style={{ backgroundColor: '#f0f9ff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold" style={{ color: '#1e40af' }}>
              Our Team
            </motion.h2>
          </motion.div>
          <Grid container spacing={6} justifyContent="center" alignItems="stretch" sx={{ maxWidth: '1400px', margin: '0 auto' }}>
            {/* Team Member 1 */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    color: 'white',
                    borderRadius: 6,
                    boxShadow: 8,
                    border: 'none',
                    width: '100%',
                    maxWidth: { xs: '100%', sm: 380, md: 420 }, // responsive width
                    minHeight: { xs: 400, sm: 420 },            // keeps card tall
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: { xs: 2, sm: 3, md: 4 }                  // responsive padding
                  }}
                >
                  <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Avatar
                      src="/team/picture1-modified.png"
                      alt="Lopeye Oyekanmi"
                      sx={{
                        width: { xs: 160, sm: 200, md: 240 },  // avatar scales smoothly
                        height: { xs: 160, sm: 200, md: 240 },
                        bgcolor: '#1e293b',
                        boxShadow: 6
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      gutterBottom
                      sx={{
                        color: 'white',
                        fontSize: { xs: '1.4rem', sm: '1.7rem', md: '2rem' }, // larger again
                        wordBreak: 'break-word'
                      }}
                    >
                      Lopeye Oyekanmi
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#60a5fa',
                        fontWeight: 500,
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
                      }}
                    >
                      Founder & Principal Adviser
                    </Typography>
                  </CardContent>
                </Card>

              </motion.div>
            </Grid>
            {/* Team Member 2 */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    color: 'white',
                    borderRadius: 6,
                    boxShadow: 8,
                    border: 'none',
                    width: '100%',
                    maxWidth: { xs: '100%', sm: 380, md: 420 }, // responsive width
                    minHeight: { xs: 400, sm: 420 },            // keeps consistent height
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: { xs: 2, sm: 3, md: 4 }                  // responsive padding
                  }}
                >
                  <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Avatar
                      src="/team/picture4.jpg"
                      alt="Modupe Oyekanmi"
                      sx={{
                        width: { xs: 160, sm: 200, md: 240 },   // avatar scales on screen size
                        height: { xs: 160, sm: 200, md: 240 },
                        bgcolor: '#1e293b',
                        boxShadow: 6
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      gutterBottom
                      sx={{
                        color: 'white',
                        fontSize: { xs: '1.4rem', sm: '1.7rem', md: '2rem' }, // responsive font
                        wordBreak: 'break-word'
                      }}
                    >
                      Modupe Oyekanmi
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#60a5fa',
                        fontWeight: 500,
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
                      }}
                    >
                      Mortgage Broker
                    </Typography>
                  </CardContent>
                </Card>

              </motion.div>
            </Grid>
            {/* Team Member 3 */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    color: 'white',
                    borderRadius: 6,
                    boxShadow: 8,
                    border: 'none',
                    width: '100%',
                    maxWidth: { xs: '100%', sm: 380, md: 420 }, // responsive width
                    minHeight: { xs: 400, sm: 420 },            // keeps consistent height
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: { xs: 2, sm: 3, md: 4 }                  // responsive padding
                  }}
                >
                  <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Avatar
                      src="/team/ev.png"
                      alt="Evelyne Albrecht"
                      sx={{
                        width: { xs: 160, sm: 200, md: 240 },   // responsive avatar sizing
                        height: { xs: 160, sm: 200, md: 240 },
                        bgcolor: '#1e293b',
                        boxShadow: 6
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      gutterBottom
                      sx={{
                        color: 'white',
                        fontSize: { xs: '1.4rem', sm: '1.7rem', md: '2rem' }, // responsive font size
                        wordBreak: 'break-word'
                      }}
                    >
                      Evelyne Albrecht
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#60a5fa',
                        fontWeight: 500,
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
                      }}
                    >
                      Compliance Officer
                    </Typography>
                  </CardContent>
                </Card>

              </motion.div>
            </Grid>
          </Grid>
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
            <motion.div variants={fadeInUp}>
              <motion.button
                onClick={() => setShowCalendly(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <Calendar size={20} />
                Schedule a Meeting
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto container">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Visit Our Office
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Located in the heart of Thornbury, we're easily accessible and ready to meet with you in person.
            </p>
          </div>

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

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default About
