import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Home, 
  Key, 
  FileText, 
  Building2, 
  Hammer, 
  PiggyBank, 
  Car, 
  Building, 
  Briefcase,
  Calendar,
  MapPin,
  Phone,
  ArrowLeft,
  X,
  ExternalLink
} from 'lucide-react'
import Navigation from './Navigation'
import Footer from './Footer'

function MortgageBroking() {
  const navigate = useNavigate()
  const [selectedService, setSelectedService] = useState(null)
  const [showCalendly, setShowCalendly] = useState(false)

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

  const residentialServices = [
    {
      icon: Home,
      title: "Home Loans",
      description: "Competitive home loan solutions for purchasing your dream property.",
      detailedContent: {
        title: "Home Loans",
        content: `Securing a home loan—whether for your first home or an investment property—requires careful planning and the right strategy. A mortgage broker can simplify the process, provide access to a wide range of lenders, and help structure your loan for long-term financial success.

A mortgage broker can assist by:

• First Home Buyers: Helping navigate government incentives, securing lower deposit options, and exploring guarantor loans to boost borrowing capacity without needing a large deposit.
• Investment Property Buyers: Structuring loans to maximize tax benefits, improve cash flow, and use equity from existing properties to fund new purchases.
• Loan Structuring & Pre-Approval: Assessing loan options to match your financial situation and securing pre-approval to strengthen your purchasing power.
• Bridging Loans: Assisting in financing the transition between selling an existing home and purchasing a new one without financial strain.
• Equity Utilization: Using existing property equity to increase borrowing capacity and fund additional property purchases or renovations.
• Comparing Lenders: Accessing a broad range of loan products to secure the most competitive rates and terms that suit your needs.

With professional guidance, you can maximize your borrowing power, access better loan terms, and confidently secure a home loan that aligns with your financial goals.`
      }
    },
    {
      icon: Key,
      title: "First Home Buyer",
      description: "Specialized assistance and guidance for first-time home buyers.",
      detailedContent: {
        title: "How a Mortgage Broker Can Help First Home Buyers Get Into the Property Market",
        content: `Buying your first home is an exciting milestone, but navigating the deposit requirements, loan options, and government incentives can be overwhelming. A mortgage broker can guide you through the process, helping you structure your finances and secure the best loan to get you into the property market sooner.

A mortgage broker can assist by:

• Saving for a Deposit: Developing a savings plan to build a deposit while exploring first-home buyer government incentives and grants.
• Using a Guarantor: Leveraging a family member as a guarantor to reduce the required deposit and avoid Lenders Mortgage Insurance (LMI), making homeownership more affordable.
• Low Deposit Loan Options: Helping you access loans with as little as 5% deposit, ensuring you can enter the market sooner.
• Understanding Loan Structures: Comparing lenders and products to secure the best interest rate and choosing between fixed, variable, or split loans.
• Government Schemes & Incentives: Guiding you through the First Home Owner Grant (FHOG), First Home Loan Deposit Scheme (FHLDS), and Stamp Duty Concessions to maximize your savings.
• Pre-Approval & Loan Application: Ensuring you have pre-approval in place, giving you confidence when making an offer on a property.

With the right strategy and professional guidance, you can get into the property market faster, secure the right loan, and confidently purchase your first home.`
      }
    },
    {
      icon: FileText,
      title: "Low Doc Loans",
      description: "Alternative documentation loans for self-employed and non-traditional borrowers.",
      detailedContent: {
        title: "How a Mortgage Broker Can Help with Low Doc Loans",
        content: `For self-employed individuals, freelancers, and business owners, securing a home loan can be challenging due to irregular income or limited financial documentation. A Low Doc Loan provides a flexible solution for borrowers who may not have traditional proof of income but still have the financial capacity to repay a mortgage.

A mortgage broker can assist by:

• Accessing Specialist Lenders: Connecting you with lenders who offer low doc loans tailored to self-employed and non-traditional income earners.
• Alternative Income Verification: Using bank statements, BAS statements, accountant declarations, or rental income to demonstrate financial strength.
• Deposit & LVR Requirements: Understanding the deposit needed and structuring the loan to avoid higher interest rates or Lenders Mortgage Insurance (LMI).
• Loan Structuring: Comparing lenders and helping secure the best low doc loan product based on your financial situation.
• Refinancing & Loan Consolidation: Assisting in restructuring existing debt or refinancing an existing mortgage under a low doc loan.

With expert guidance, you can secure a competitive low doc loan, access the property market, and manage homeownership on your terms.`
      }
    }
  ]

  const businessServices = [
    {
      icon: Hammer,
      title: "Construction Loans",
      description: "Financing solutions for construction and renovation projects.",
      detailedContent: {
        title: "How a Mortgage Broker Can Help with Construction Loans",
        content: `Building your dream home or an investment property requires a different type of financing than a standard home loan. Construction loans are designed to fund the various stages of building, ensuring you only pay interest on the amount drawn down as construction progresses. A mortgage broker can help you navigate this process and secure the right loan for your needs.

A mortgage broker can assist by:

• Understanding Construction Loan Stages: Ensuring you receive funding in progressive drawdowns aligned with key construction milestones, from land purchase to completion.
• Comparing Lenders & Loan Options: Finding the most competitive construction loan with favorable terms and flexible repayment options.
• Managing Interest Payments: Helping structure your loan so that you only pay interest on the funds drawn during construction, reducing upfront costs.
• Deposit & Valuation Requirements: Assisting with securing the right loan-to-value ratio (LVR) and understanding lender requirements for deposit and land value.
• Loan Conversion Post-Completion: Ensuring a smooth transition from a construction loan to a standard home loan once the build is complete.

With professional advice, you can secure the right construction loan, manage costs effectively, and bring your building project to life with confidence.`
      }
    },
    {
      icon: PiggyBank,
      title: "SMSF Loans",
      description: "Self-Managed Super Fund property investment loans.",
      detailedContent: {
        title: "How a Mortgage Broker Can Help with SMSF Loans",
        content: `A Self-Managed Super Fund (SMSF) Loan allows you to purchase residential or commercial property within your superannuation, providing a tax-effective way to grow wealth for retirement. However, SMSF loans have strict lending criteria and require careful structuring to remain compliant with superannuation laws. A mortgage broker can help simplify the process and secure the right loan for your fund.

A mortgage broker can assist by:

• Understanding SMSF Loan Rules: Ensuring compliance with Limited Recourse Borrowing Arrangements (LRBA), which restricts the lender's claim to the purchased asset only.
• Comparing Lenders & Loan Terms: SMSF loans have specialist lenders with varying interest rates and requirements. A broker can help find the most competitive loan to suit your fund.
• Residential & Commercial Property Investment: Helping SMSFs finance investment properties or purchase business premises that can be leased back to a company owned by fund members.
• Deposit & Loan Structuring: Advising on the minimum deposit required (often 20-30%) and ensuring your SMSF has the necessary cash flow to meet loan repayments.
• Loan Approval & Compliance: Assisting with SMSF trust structures, lender documentation, and ongoing compliance with superannuation regulations.

With expert guidance, you can successfully leverage your SMSF to invest in property while ensuring compliance and long-term wealth growth.`
      }
    },
    {
      icon: Building2,
      title: "Asset Finance",
      description: "Equipment and asset financing for business growth.",
      detailedContent: {
        title: "Asset Finance",
        content: `Asset finance provides a flexible way for businesses and individuals to acquire equipment, vehicles, or machinery without large upfront costs. Whether you're looking to upgrade business assets or secure personal equipment, the right asset finance strategy can help you achieve your goals while managing cash flow.

Here's how a mortgage broker can assist:

• Tailored Asset Finance Solutions: Match your specific needs with financing options for vehicles, machinery, office equipment, and more.
• Access to Specialist Lenders: Tap into a wide range of lenders offering competitive rates and flexible terms for asset financing.
• Loan Consolidation: If you have sufficient equity in your home loan, a broker can explore consolidating your loans to free up funds for asset purchases, often at a lower interest rate.
• Flexible Repayment Options: Structure repayments to align with your cash flow, ensuring affordability and flexibility.
• Preserve Working Capital: Asset finance allows you to invest in essential equipment without draining your cash reserves.
• Expert Guidance: A broker will manage the paperwork, lender negotiations, and ensure a seamless approval process, saving you time and effort.

By leveraging equity in your existing home loan or structuring standalone finance options, a mortgage broker helps you secure the funds you need while optimizing your financial position.`
      }
    },
    {
      icon: Car,
      title: "Car Loans",
      description: "Competitive vehicle financing for personal and business use.",
      detailedContent: {
        title: "Car Loans",
        content: `Buying a car—whether for personal use, business purposes, or as an investment—can be a significant financial decision. The right car loan can make this purchase more affordable and manageable while aligning with your financial goals. A mortgage broker simplifies the process and secures competitive financing tailored to your needs.

Here's how a mortgage broker can assist:

• Tailored Car Loan Options: Whether you're buying a new or used car, a broker can match you with the best loan terms for your situation.
• Access to Competitive Rates: Brokers have access to a wide range of lenders, including banks and non-bank lenders, to find the most favorable interest rates and terms.
• Flexible Loan Structures: Choose from repayment options that align with your budget, including balloon payments or extended terms to lower monthly repayments.
• Loan Consolidation for Car Purchases: If you have sufficient equity in your home loan, a broker can explore consolidating your car loan with your mortgage, potentially saving you money with a lower interest rate.
• Fast and Hassle-Free Approval: A broker handles the paperwork, negotiations, and lender communications, ensuring a smooth and efficient approval process.
• Pre-Approval for Confidence: Securing pre-approval allows you to shop for your car with confidence, knowing your financing is already in place.

With a mortgage broker's expertise, you can secure the right car loan that fits your financial plan and makes your car purchase simple and stress-free.`
      }
    },
    {
      icon: Building,
      title: "Commercial Property Loans",
      description: "Commercial real estate financing solutions.",
      detailedContent: {
        title: "Commercial Property Loans",
        content: `Purchasing or refinancing commercial property is a significant financial commitment that requires careful planning and the right loan structure. Whether you're looking to expand your business, invest in commercial real estate, or refinance an existing property, a mortgage broker can provide expert guidance and access to the best financing options.

Here's how a mortgage broker can assist:

• Tailored Loan Solutions: Find the right loan for purchasing, refinancing, or investing in retail, office, industrial, or mixed-use commercial properties.
• Access to Specialist Lenders: Brokers work with a wide range of lenders, including banks and non-bank lenders, to secure competitive interest rates and flexible terms.
• Loan Structuring: Create loan structures that align with your financial goals, such as interest-only periods, fixed or variable rates, and long-term repayment options.
• Equity Utilization: If you have existing equity in another property, a broker can help you leverage it to fund the purchase or reduce upfront costs.
• Cash Flow Optimization: Strategically structure loans to ensure repayment terms fit your business cash flow and operational needs.
• Complex Application Management: Commercial property loans often involve extensive documentation and valuation requirements. A broker simplifies the process, managing the paperwork and liaising with lenders.

With professional guidance, you can secure the right loan to expand your portfolio, grow your business, or make a sound commercial property investment.`
      }
    },
    {
      icon: Briefcase,
      title: "Business Loans",
      description: "Working capital and business expansion financing.",
      detailedContent: {
        title: "Business Loans",
        content: `A mortgage broker can play a pivotal role in securing the right funding to help your business thrive. Whether you're a small business owner, expanding an established enterprise, or starting something new, the right loan can provide the financial boost you need to achieve your goals.

Here's how a mortgage broker can assist:

• Tailored Loan Solutions: They assess your business needs and match you with loan products designed specifically for equipment purchases, working capital, or expansion. 
• Access to a Wide Range of Lenders: Mortgage brokers have access to a broad network of lenders, including specialist and non-bank lenders, offering flexibility and competitive rates.
• Flexible Repayment Structures: They'll help you find loans with repayment terms that fit your cash flow and operational needs.
• Navigating Complex Applications: Business loans often require extensive documentation. A mortgage broker ensures everything is prepared accurately and submitted efficiently.
• Commercial Property Loans: If you're looking to purchase or refinance business premises, they'll guide you through structuring the loan to optimize cash flow and long-term equity building.
• Strategic Financing Advice: From unsecured loans to secured loans leveraging business assets, they'll provide advice on the most appropriate options for your business goals.

With their expertise, a mortgage broker simplifies the borrowing process, allowing you to focus on running your business while they secure the funding you need.`
      }
    }
  ]

  // Combine all services for easier management
  const allServices = [...residentialServices, ...businessServices]

  const handleServiceClick = (service) => {
    setSelectedService(service)
    // Scroll to the top of the services section
    setTimeout(() => {
      const servicesSection = document.getElementById('services-section')
      if (servicesSection) {
        servicesSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }
    }, 100)
  }

  const handleBackClick = () => {
    setSelectedService(null)
    // Scroll to the top of the services section
    setTimeout(() => {
      const servicesSection = document.getElementById('services-section')
      if (servicesSection) {
        servicesSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }
    }, 100)
  }



  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)' }}>
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
      
      {/* Navigation */}
      <Navigation onScheduleClick={() => setShowCalendly(true)} />
      

      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)'
        }}
      >        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#1e40af' }}>
              MORTGAGE BROKING
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#374151' }}>
              Expert mortgage advice and competitive lending solutions for your property goals.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center items-center mt-8"
            >
              <motion.button 
                onClick={() => setShowCalendly(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
                style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }}
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule a Meeting</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="services-section" className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: '#1e40af' }}>
              EXPLORE OUR MORTGAGE BROKING SERVICES
            </h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto" style={{ color: '#374151' }}>
              Schedule a Session today! We provide comprehensive mortgage solutions 
              for both residential and business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {!selectedService ? (
        // Services Grid View
        <>
          {/* Residential Services Section */}
          <section className="py-16" style={{ backgroundColor: '#f8fafc' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-4 mb-12"
              >
                <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#1e40af' }}>
                  RESIDENTIAL
                </h3>
              </motion.div>

              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
              >
                {residentialServices.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="p-6 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer"
                    style={{ 
                      background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)', 
                      borderColor: '#e5e7eb',
                      color: 'white',
                      boxShadow: '0 4px 20px rgba(6, 182, 212, 0.3)'
                    }}
                    onClick={() => handleServiceClick(service)}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(10px)' }}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-white leading-tight">{service.title}</h4>
                      <p className="text-sm leading-relaxed text-white opacity-90">{service.description}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-auto font-semibold transition-colors duration-300 text-sm text-white"
                      >
                        Learn More →
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Business Services Section */}
          <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-4 mb-12"
              >
                <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#1e40af' }}>
                  BUSINESS
                </h3>
              </motion.div>

              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              >
                {businessServices.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="p-6 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer"
                    style={{ 
                      background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)', 
                      borderColor: '#e5e7eb',
                      color: 'white',
                      boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)'
                    }}
                    onClick={() => handleServiceClick(service)}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(10px)' }}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-sm font-semibold text-white leading-tight">{service.title}</h4>
                      <p className="text-xs leading-relaxed text-white opacity-90">{service.description}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-auto font-semibold transition-colors duration-300 text-xs text-white"
                      >
                        Explore →
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </>
      ) : (
        // Service Detail View
        <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Back Button */}
              <motion.button
                onClick={handleBackClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 mb-8 transition-colors duration-300 px-4 py-2 rounded-lg font-semibold"
                style={{ 
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
                  color: 'white' 
                }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Services</span>
              </motion.button>

              {/* Service Detail Content */}
              <div className="rounded-xl p-8 border" style={{ backgroundColor: '#f8fafc', borderColor: '#e5e7eb' }}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 rounded-full" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }}>
                    <selectedService.icon className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold" style={{ color: '#1e40af' }}>
                    {selectedService.title}
                  </h1>
                </div>

                <h2 className="text-2xl font-semibold mb-6" style={{ color: '#1e40af' }}>
                  {selectedService.detailedContent.title}
                </h2>

                <div className="prose prose-lg max-w-none">
                  {selectedService.detailedContent.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="leading-relaxed mb-4" style={{ color: '#374151' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Book Meeting Button */}
                <div className="mt-8 pt-6 border-t" style={{ borderColor: '#e5e7eb' }}>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e40af' }}>
                    Book a Complimentary Meeting
                  </h3>
                  <p className="mb-6" style={{ color: '#374151' }}>
                    {selectedService.title === "Home Loans" && 
                      "If you're looking to buy your first home or expand your property portfolio, schedule a complimentary consultation today to explore your loan options."
                    }
                    {selectedService.title === "First Home Buyer" && 
                      "If you're a first home buyer looking for expert guidance, schedule a complimentary consultation today to explore your loan options and deposit strategies."
                    }
                    {selectedService.title === "Low Doc Loans" && 
                      "If you're self-employed or have non-traditional income and need a flexible loan solution, schedule a complimentary consultation today."
                    }
                    {selectedService.title === "Construction Loans" && 
                      "If you're planning to build a home or investment property, schedule a complimentary consultation today to explore your construction loan options."
                    }
                    {selectedService.title === "SMSF Loans" && 
                      "If you're considering investing in property through your SMSF, schedule a complimentary consultation today to explore your loan options."
                    }
                    {selectedService.title === "Asset Finance" && 
                      "If you're looking to finance new assets or explore loan consolidation options to free up funds, schedule a complimentary consultation today and let us help you achieve your financial goals."
                    }
                    {selectedService.title === "Car Loans" && 
                      "Ready to purchase your car with confidence? Schedule a complimentary consultation today and let us help you find the perfect car loan."
                    }
                    {selectedService.title === "Commercial Property Loans" && 
                      "If you're planning to purchase or refinance a commercial property, schedule a complimentary consultation today to explore your loan options and develop a strategy tailored to your needs."
                    }
                    {selectedService.title === "Business Loans" && 
                      "If you're ready to take your business to the next level, schedule a complimentary consultation with us today to explore the right loan options for your needs."
                    }
                    {!["Home Loans", "First Home Buyer", "Low Doc Loans", "Construction Loans", "SMSF Loans", "Asset Finance", "Car Loans", "Commercial Property Loans", "Business Loans"].includes(selectedService.title) && 
                      `Ready to explore your ${selectedService.title.toLowerCase()} options? Schedule a complimentary consultation to discuss your specific needs and find the perfect financing solution.`
                    }
                  </p>
                  <motion.button 
                    onClick={() => setShowCalendly(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2"
                    style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }}
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Schedule a Meeting</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Call to Action Section - Only show when no service is selected */}
      {!selectedService && (
        <section className="py-20" style={{ backgroundColor: '#f8fafc' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: '#1e40af' }}>
                Schedule a Consultation Today!
              </h2>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#374151' }}>
                Book a No-Obligation 30 Minute Consultation with GTM Finance and find the 
                perfect mortgage solution for your needs.
              </p>
              <motion.div
                className="flex justify-center items-center"
              >
                <motion.button 
                  onClick={() => setShowCalendly(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
                  style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule a Meeting</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default MortgageBroking
