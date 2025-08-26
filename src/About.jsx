import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, MapPin, Phone, Mail } from 'lucide-react'
import Navigation from './Navigation'
import Footer from './Footer'

function About() {
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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url("/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              LIVE FOR TODAY <span className="text-blue-400">AND FOR TOMORROW</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              We can give you the best of both worlds.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Us Content Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
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
              className="text-4xl font-extrabold mb-4 text-blue-400 tracking-tight border-b-4 border-blue-400 pb-2 pl-1"
              style={{ width: 'fit-content' }}
            >
              About Us
            </motion.h2>
            <motion.div 
              variants={fadeInUp} 
              className="space-y-12 text-lg leading-relaxed text-gray-300 mt-6 pl-1"
            >
              <p>
                You've worked hard to build a successful career and a lifestyle you're proud of. You earn good money, and you're ready to take the next step in achieving your financial goals—without compromising the lifestyle you value. After all, isn't that what it's all about?
              </p>
              <p>
                At <span className="text-blue-400 font-semibold">GTM Finance</span>, we specialize in turning your ambitious goals into a clear, actionable financial plan that aligns with your life today and your aspirations for the future.
              </p>
              <p>
                Whether you're looking to renovate or purchase a holiday home, start investing, retire early, reduce your tax burden, launch a business, or indulge in multiple unforgettable international holidays each year, we're here to make it happen.
              </p>
              <p>
                At <span className="text-blue-400 font-semibold">GTM Finance</span>, we pride ourselves on being personal and proactive. Our expert team will guide you every step of the way, leveraging our proven strategies to help you create the future you've envisioned. Let's build the life you deserve—together.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-white">
              Our Team
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Team Member Card */}
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col items-center text-center bg-[#232946] rounded-2xl shadow-xl p-8 border border-blue-900"
            >
              <div className="mb-6">
                <div className="w-44 h-44 rounded-full overflow-hidden mx-auto shadow-2xl border-4 border-blue-700 bg-slate-800">
                  <img 
                    src="/team/picture1.png" 
                    alt="Lopeye Oyekanmi" 
                    className="w-full h-full object-cover"
                    style={{ objectFit: 'cover', objectPosition: 'center center', transform: 'scale(1.1)' }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Lopeye Oyekanmi</h3>
              <p className="text-base font-medium text-blue-400">Founder & Principal Adviser</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center text-center bg-[#232946] rounded-2xl shadow-xl p-8 border border-blue-900"
            >
              <div className="mb-6">
                <div className="w-44 h-44 rounded-full overflow-hidden mx-auto shadow-2xl border-4 border-blue-700 bg-slate-800">
                  <img 
                    src="/team/picture2.png" 
                    alt="Modupe Oyekanmi" 
                    className="w-full h-full object-cover"
                    style={{ objectFit: 'cover', objectPosition: 'center center', transform: 'scale(1.0)' }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Modupe Oyekanmi</h3>
              <p className="text-base font-medium text-blue-400">Mortgage Broker</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center bg-[#232946] rounded-2xl shadow-xl p-8 border border-blue-900"
            >
              <div className="mb-6">
                <div className="w-44 h-44 rounded-full overflow-hidden mx-auto shadow-2xl border-4 border-blue-700 bg-slate-800">
                  <img 
                    src="/team/ev.jpg" 
                    alt="Evelyne Albrecht" 
                    className="w-full h-full object-cover"
                    style={{ objectFit: 'cover', objectPosition: 'center top', transform: 'scale(1.2)' }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Evelyne Albrecht</h3>
              <p className="text-base font-medium text-blue-400">Compliance Officer</p>
            </motion.div>
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
            <motion.div variants={fadeInUp}>
              <motion.a 
                  href="https://calendly.com/lopeyegtmfinance/20min?back=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                >
                  <Calendar size={20} />
                  Schedule a Meeting
                </motion.a>
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
                        lopeye@gtmfinance.com.au
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.2864476394386!2d144.99657921531716!3d-37.76084897976168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2s1%2F3%20Theobald%20St%2C%20Thornbury%20VIC%203071%2C%20Australia!5e0!3m2!1sen!2s!4v1629789455165!5m2!1sen!2s"
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

export default About
