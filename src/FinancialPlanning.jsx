import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Shield, 
  TrendingUp, 
  PiggyBank, 
  Home, 
  GraduationCap, 
  Heart, 
  Building, 
  Calculator,
  Umbrella,
  BookOpen,
  CreditCard,
  Users,
  Calendar,
  Phone,
  ArrowLeft
} from 'lucide-react'
import Navigation from './Navigation'
import Footer from './Footer'

function FinancialPlanning() {
  const navigate = useNavigate()
  const [selectedService, setSelectedService] = useState(null)

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

  const services = [
    {
      icon: Shield,
      title: "Trusts",
      description: "Protect and manage your assets with our comprehensive trust structures and strategies.",
      detailedContent: {
        title: "How a Financial Adviser Can Help with Trusts",
        content: `Trusts are a valuable tool for managing wealth and protecting assets, particularly for high-net-worth individuals and businesses. However, establishing and managing trusts requires careful planning and expert advice to ensure they align with your financial goals and comply with regulations.

A financial adviser can provide tailored guidance on the best trust structures for your needs, assist with setting up and managing the trust, and ensure it integrates seamlessly into your overall financial plan. Whether for personal wealth management or business purposes, professional advice can help you make the most of this flexible tool.`
      }
    },
    {
      icon: Calculator,
      title: "Cashflow Management",
      description: "Optimize your cash flow with strategic planning and budgeting solutions.",
      detailedContent: {
        title: "How a Financial Adviser Can Help with Cashflow Management",
        content: `Effective cashflow management is essential for building financial stability, achieving your goals, and maintaining long-term wealth. Whether you're managing personal finances or overseeing a business, understanding and optimizing your cashflow is key to making informed financial decisions.

A financial adviser can provide expert guidance to help you understand your cashflow patterns, create strategies to optimize income and expenses, and ensure your financial resources are working effectively toward your goals. Professional advice ensures your cashflow is aligned with your financial plan, providing clarity and peace of mind`
      }
    },
    {
      icon: Umbrella,
      title: "Insurance Risk Protection",
      description: "Comprehensive insurance solutions to protect you and your family from unforeseen risks.",
      detailedContent: {
        title: "How a Financial Adviser Can Help with Insurance Risk Protection",
        content: `Protecting your financial future is essential for achieving peace of mind and securing your loved ones against unforeseen circumstances. Insurance risk protection can help shield your income, assets, and family from unexpected events, but understanding the right coverage for your needs can be overwhelming. Superannuation can also be an option to be able to fund most of these covers making it accessible to most people.

A financial adviser can guide you through selecting the appropriate coverage, including:

Life Cover – Financial support for your loved ones in the event of your passing.
Total Permanent Disability (TPD) Cover – A safety net if you are unable to work due to a permanent disability.
Income Protection – Ensures you receive a portion of your income if you're unable to work due to illness or injury.
Critical Illness Cover – Provides a lump sum payment if diagnosed with a serious medical condition.

With expert advice, you can feel confident your insurance policies provide comprehensive coverage aligned with your personal or business needs.`
      }
    },
    {
      icon: PiggyBank,
      title: "Retirement Planning",
      description: "Secure your retirement with tailored strategies and investment planning.",
      detailedContent: {
        title: "How a Financial Adviser Can Help with Retirement Planning",
        content: `Retirement planning is about more than just choosing a retirement age—it's about ensuring you have the financial resources to support the lifestyle you want. Your retirement age isn't fixed; it depends on how much income you'll need to live comfortably and how prepared you are to achieve those goals.

A financial adviser can help you determine your desired retirement lifestyle, assess your current savings and investments, and create a strategy to build the income required for your retirement. With tailored advice, you'll have a clear path to achieve financial independence and retire on your terms`
      }
    },
    {
      icon: Building,
      title: "Tax Advice & Planning",
      description: "Minimize your tax obligations with expert advice and strategic planning.",
      detailedContent: {
        title: "How a Financial Adviser Can Help with Tax Advice & Planning",
        content: `Tax planning is an essential part of managing your finances effectively, ensuring you're not only meeting your obligations but also minimizing your tax liabilities. In Australia, the structure through which you operate—whether as a sole trader, partnership, trust, or company—can significantly impact your tax outcomes.

A financial adviser can help you navigate these structures, identify the most tax-efficient option for your situation, and integrate it into your broader financial plan. Whether you're an individual, a business owner, or a high-net-worth individual, expert advice can help you optimize your tax strategy and achieve your financial goals.

Key Structures in Australia:

Sole Trader – Simple setup with personal income taxed at individual rates.
Partnership – Shared tax responsibility between partners.
Trusts – Flexible distributions and potential tax benefits for beneficiaries.
Companies – Lower corporate tax rates and potential asset protection benefits.

With professional advice, you can determine the best structure to suit your specific needs and ensure compliance with Australian tax laws.`
      }
    },
    {
      icon: TrendingUp,
      title: "Superannuation Planning",
      description: "Maximize your superannuation benefits with strategic contributions and investment choices.",
      detailedContent: {
        title: "How a Financial Adviser Can Help with Superannuation Planning",
        content: `Superannuation is a cornerstone of retirement planning, offering a tax-efficient way to grow your wealth for the future. Choosing the right type of superannuation fund is critical, as it impacts fees, investment options, and the time required to manage your fund.

A financial adviser can help you navigate the different superannuation options—industry funds, retail funds, and Self-Managed Super Funds (SMSFs)—to find the one that best suits your financial goals, lifestyle, and preferences. With expert guidance, you'll be equipped to make informed decisions and maximize your retirement savings.

Key Differences Between Superannuation Options

Industry Funds:
- Fees: Low to moderate, often run on a not-for-profit basis.
- Investment Options: Limited but simple, with predefined investment options.
- Time to Manage: Minimal, as the fund is managed for you.

Retail Funds:
- Fees: Typically higher due to administration and management costs.
- Investment Options: Wide variety of managed and custom investment choices.
- Time to Manage: Minimal, but requires some level of monitoring.

SMSFs:
- Fees: Can be high due to setup, audit, and administration costs.
- Investment Options: Full control over investments, including property and shares.
- Time to Manage: High, as you are responsible for compliance and management.

How We Can Help

• Choosing the Right Fund: Assess your goals, risk tolerance, and preferences to select the most suitable fund.
• Investment Strategy: Develop a tailored strategy to grow your super effectively.
• Ongoing Support: Provide ongoing advice to ensure your super remains aligned with your retirement goals and adjusts to changes in circumstances.`
      }
    },
    {
      icon: Users,
      title: "Small Business Advice",
      description: "Comprehensive financial advice tailored specifically for small business owners.",
      detailedContent: {
        title: "How a Financial Adviser Can Help with Small Business Advice",
        content: `Running a small business isn't just about operations—it's about making smart financial decisions that protect your assets and optimize tax efficiency. Choosing the right business structure is crucial, as it affects liability, taxation, and overall financial flexibility.

A financial adviser can help you assess whether a sole trader, partnership, company, or trust is the best option for your business. The right structure can provide stronger asset protection, reduce tax liabilities, and create opportunities for future growth.

Beyond structuring, an adviser can assist with cash flow management, business succession planning, and strategies to legally minimize tax obligations. With expert guidance, you can ensure that your business is set up to thrive financially while safeguarding your personal and business assets.`
      }
    },
    {
      icon: Home,
      title: "Property Planning",
      description: "Strategic property investment advice to build your wealth through real estate.",
      detailedContent: {
        title: "How a Financial Adviser Can Help with Property Planning",
        content: `Property investment can be a powerful wealth-building tool, but success depends on strategic planning and financial structuring. Whether you're looking to build a property portfolio, optimize tax benefits, or create long-term financial security, professional guidance can help maximize your returns.

A financial adviser can assist with key property investment strategies, including:

• Positive Gearing: Generating rental income that exceeds property expenses, providing additional cash flow and long-term capital growth.
• Negative Gearing: Utilizing tax benefits when rental income is lower than expenses, allowing deductions against taxable income.
• Depreciation Benefits: Claiming tax deductions on a property's declining value to improve after-tax returns.
• Leverage Through Equity: Using the equity in an existing property to borrow against another property, expanding your portfolio without requiring large cash reserves.
• Debt Recycling: Converting non-deductible home loan debt into tax-deductible investment debt, helping to improve tax efficiency and cash flow.

By structuring your property investments effectively, you can enhance tax benefits, improve cash flow, and build long-term wealth through a diversified real estate portfolio.`
      }
    },
    {
      icon: TrendingUp,
      title: "Investment Planning & Portfolio Management",
      description: "Professional investment strategies and ongoing portfolio management services.",
      detailedContent: {
        title: "How a Financial Adviser Can Help with Investment Planning & Portfolio Management",
        content: `A strong investment strategy is essential for building wealth, generating passive income, and securing long-term financial stability. The right portfolio should be diversified across multiple asset classes to balance risk and maximize returns.

A financial adviser can help you create a tailored investment plan, selecting a mix of traditional assets like shares and property, as well as alternative investments such as credit/debt funds, private equity, and mortgage funds. These investment options provide unique advantages:

• Credit/Debt Funds: Offer stable income with lower volatility compared to equities.
• Private Equity: Provides access to high-growth opportunities not available in public markets.
• Mortgage Funds: Generate consistent returns backed by property-secured loans.

By diversifying across these asset types, your portfolio can benefit from reduced risk, steady income streams, and long-term capital growth. Ongoing portfolio management ensures your investments remain aligned with market conditions and financial objectives.`
      }
    },
    {
      icon: Heart,
      title: "Estate Planning",
      description: "Protect your legacy with comprehensive estate planning and wealth transfer strategies.",
      detailedContent: {
        title: "How a Financial Adviser Can Help with Estate Planning",
        content: `Estate planning is about more than just writing a will—it ensures your wealth is protected, efficiently distributed, and structured to minimize tax burdens for your beneficiaries. A well-planned estate strategy can safeguard assets, provide for loved ones, and ensure your wishes are carried out smoothly.

A financial adviser can help you navigate key estate planning tools, including:

• Testamentary Trusts: A trust established through your will that offers tax benefits and asset protection for beneficiaries, particularly useful for families with young children or significant wealth.
• Super Proceeds Trusts: A specialized trust designed to receive superannuation death benefits, ensuring tax-effective distribution, particularly for non-dependent beneficiaries.

By integrating these strategies into your estate plan, you can minimize tax liabilities, protect assets from legal risks, and provide financial security for future generations. A financial adviser ensures your estate is structured in the most effective way to align with your goals.`
      }
    },
    {
      icon: GraduationCap,
      title: "Investment & Education Bonds",
      description: "Tax-effective investment solutions for education and long-term wealth building.",
      detailedContent: {
        title: "Investment & Education Bonds",
        content: `Investment and education bonds are effective wealth-building tools that offer tax-efficient growth and structured savings for long-term financial goals. Whether you're planning for a child's education or seeking a tax-effective investment strategy, these bonds provide flexibility and security.

A financial adviser can help you maximize the benefits of these bonds, including:

• Education Bonds: A structured way to save for future education costs, allowing tax-effective withdrawals for school and university expenses.
• Investment Bonds: Designed for long-term investing, these bonds provide deferred individual tax advantages, making them an attractive option for wealth accumulation.
• Estate Planning Benefits: Investment bonds can be structured to bypass probate, ensuring a smooth transfer of wealth to beneficiaries.
• Regular Contribution Strategies: Setting up automated contributions to take advantage of compounding and ensure consistent growth over time.

By incorporating investment and education bonds into your financial plan, you can build long-term wealth, secure future education funding, and create a lasting financial legacy.`
      }
    },
    {
      icon: CreditCard,
      title: "Debt Management",
      description: "Strategic debt consolidation and management to improve your financial position.",
      detailedContent: {
        title: "Debt Management",
        content: `Managing debt effectively is key to achieving financial stability and long-term success. Whether it's reducing high-interest debt, structuring loans more efficiently, or creating a plan to pay off liabilities faster, the right strategy can save you money and reduce financial stress.

A financial adviser can help you take control of your debt by:

• Creating a Debt Reduction Plan: Structuring repayments strategically to minimize interest and free up cash flow.
• Consolidating & Refinancing Loans: Identifying opportunities to lower interest rates and streamline debts for better financial efficiency.
• Using Financial Tracking Tools: Implementing apps and software that link expenses, set financial goals, and allow both you and your adviser to monitor progress in real-time.
• Building a Sustainable Budget: Aligning your income, expenses, and savings goals to maintain financial discipline and prevent future debt issues.

With expert advice and tracking tools, you can eliminate debt faster, improve cash flow, and stay on track with your financial goals while ensuring long-term financial security.`
      }
    },
    {
      icon: Building,
      title: "SMSF Strategies & Advice",
      description: "Self-Managed Super Fund setup, compliance, and investment strategies.",
      detailedContent: {
        title: "SMSF Strategies & Advice",
        content: `A Self-Managed Super Fund (SMSF) provides greater control and flexibility over your retirement savings compared to traditional superannuation funds. With the right strategy, an SMSF can be a powerful tool for wealth creation, tax efficiency, and asset protection.

A financial adviser can help you explore key SMSF strategies, including:

• Limited Recourse Borrowing Arrangements (LRBA): Use your SMSF to invest in property while leveraging borrowed funds, with limited risk to other SMSF assets.
• Purchasing a Business Premises: Business owners can buy commercial property through their SMSF and lease it back to their business, offering tax and cash flow advantages.
• Greater Investment Flexibility: Unlike industry and retail super funds, an SMSF allows direct investment in real estate, private equity, collectibles, and more, providing a tailored approach to wealth-building.

By structuring your SMSF correctly, you can maximize tax efficiency, improve asset protection, and gain greater control over your retirement investments. A financial adviser ensures your SMSF remains compliant and aligned with your long-term financial goals.`
      }
    },
    {
      icon: Shield,
      title: "Wealth Preservation Strategies",
      description: "Protect and preserve your wealth for future generations with proven strategies.",
      detailedContent: {
        title: "Wealth Preservation Strategies",
        content: `Building wealth is important, but preserving it for the long term is just as critical. Effective wealth preservation strategies ensure financial security, protect against market volatility, and provide consistent income throughout retirement.

A financial adviser can help you implement strategies that safeguard your assets while generating sustainable income, including:

• Lifetime Annuities: A secure way to convert savings into a predictable, long-term income stream, providing financial stability and reducing longevity risk.
• Income-Producing Assets: Investments such as dividend-paying shares, rental properties, and fixed-income securities that generate passive income while preserving capital.
• Diversification & Risk Management: Spreading investments across different asset classes to protect against downturns and market fluctuations.

By structuring your wealth preservation strategy correctly, you can enjoy financial security, generate reliable income, and safeguard assets for future generations. A financial adviser ensures your portfolio is designed to sustain wealth while meeting your lifestyle needs.`
      }
    },
    {
      icon: BookOpen,
      title: "Lifestyle Planning",
      description: "Align your financial goals with your desired lifestyle and life stages.",
      detailedContent: {
        title: "How a Financial Adviser Can Help with Lifestyle Planning",
        content: `Planning for major life events—whether it's buying your first home, investing in property, starting a business, funding private school education, or relocating overseas—requires careful financial preparation. A structured plan ensures you can achieve these milestones while maintaining financial stability.

A financial adviser can help you:

• Buy Your First Home: Assess affordability, secure financing, and create a savings strategy for a deposit and other costs.
• Invest in Property: Develop a strategy for building wealth through real estate while managing cash flow, tax implications, and loan structures.
• Start a Business: Plan for funding, risk management, and tax-efficient structuring to ensure long-term business success.
• Fund Private School Education: Establish a long-term savings plan to manage tuition fees and related expenses while balancing other financial priorities.
• Relocate Overseas: Navigate financial considerations such as currency exchange, tax obligations, and asset management to ensure a smooth transition.

With expert guidance, you can confidently work toward your lifestyle goals while maintaining financial security and long-term wealth growth.`
      }
    }
  ]

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
              FINANCIAL <span className="text-blue-400">PLANNING</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Comprehensive wealth strategies and investment planning to secure your financial future.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center items-center mt-8"
            >
              <motion.a 
                href="https://calendly.com/lopeyegtmfinance/20min?back=1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule a Meeting</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              OUR FINANCIAL PLANNING SERVICES
            </h2>
            <p className="text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
              We can give you the best of both worlds. Our comprehensive financial planning services 
              are designed to help you achieve your financial goals and secure your future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid / Service Detail */}
      <section id="services-section" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!selectedService ? (
            // Services Grid View
            <>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-4 mb-16"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Explore Our Financial Planning Services
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Comprehensive solutions tailored to your unique financial goals and circumstances
                </p>
              </motion.div>

              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer"
                    onClick={() => handleServiceClick(service)}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 bg-blue-600 rounded-full">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-sm font-semibold text-white leading-tight">{service.title}</h3>
                      <p className="text-gray-300 text-xs leading-relaxed">{service.description}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-auto text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 text-xs"
                      >
                        Explore →
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </>
          ) : (
            // Service Detail View
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              {/* Back Button */}
              <motion.button
                onClick={handleBackClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Services</span>
              </motion.button>

              {/* Service Detail Content */}
              <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-blue-600 rounded-full">
                    <selectedService.icon className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-white">
                    {selectedService.title}
                  </h1>
                </div>

                <h2 className="text-2xl font-semibold text-white mb-6">
                  {selectedService.detailedContent.title}
                </h2>

                <div className="prose prose-lg max-w-none">
                  {selectedService.title === "Superannuation Planning" ? (
                    // Special rendering for Superannuation Planning with table
                    <div>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Superannuation is a cornerstone of retirement planning, offering a tax-efficient way to grow your wealth for the future. Choosing the right type of superannuation fund is critical, as it impacts fees, investment options, and the time required to manage your fund.
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        A financial adviser can help you navigate the different superannuation options—industry funds, retail funds, and Self-Managed Super Funds (SMSFs)—to find the one that best suits your financial goals, lifestyle, and preferences. With expert guidance, you'll be equipped to make informed decisions and maximize your retirement savings.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Key Differences Between Superannuation Options
                      </h3>
                      
                      {/* Comparison Table */}
                      <div className="overflow-x-auto mb-6">
                        <table className="w-full border-collapse border border-slate-600 bg-slate-700 rounded-lg">
                          <thead>
                            <tr className="bg-slate-600">
                              <th className="border border-slate-500 px-4 py-3 text-left text-white font-semibold">Feature</th>
                              <th className="border border-slate-500 px-4 py-3 text-left text-white font-semibold">Industry Funds</th>
                              <th className="border border-slate-500 px-4 py-3 text-left text-white font-semibold">Retail Funds</th>
                              <th className="border border-slate-500 px-4 py-3 text-left text-white font-semibold">SMSFs</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-slate-500 px-4 py-3 text-white font-medium">Fees</td>
                              <td className="border border-slate-500 px-4 py-3 text-gray-300">Low to moderate, often run on a not-for-profit basis.</td>
                              <td className="border border-slate-500 px-4 py-3 text-gray-300">Typically higher due to administration and management costs.</td>
                              <td className="border border-slate-500 px-4 py-3 text-gray-300">Can be high due to setup, audit, and administration costs.</td>
                            </tr>
                            <tr className="bg-slate-750">
                              <td className="border border-slate-500 px-4 py-3 text-white font-medium">Investment Options</td>
                              <td className="border border-slate-500 px-4 py-3 text-gray-300">Limited but simple, with predefined investment options.</td>
                              <td className="border border-slate-500 px-4 py-3 text-gray-300">Wide variety of managed and custom investment choices.</td>
                              <td className="border border-slate-500 px-4 py-3 text-gray-300">Full control over investments, including property and shares.</td>
                            </tr>
                            <tr>
                              <td className="border border-slate-500 px-4 py-3 text-white font-medium">Time to Manage</td>
                              <td className="border border-slate-500 px-4 py-3 text-gray-300">Minimal, as the fund is managed for you.</td>
                              <td className="border border-slate-500 px-4 py-3 text-gray-300">Minimal, but requires some level of monitoring.</td>
                              <td className="border border-slate-500 px-4 py-3 text-gray-300">High, as you are responsible for compliance and management.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-4">
                        How We Can Help
                      </h3>
                      
                      <ul className="text-gray-300 space-y-3 mb-4">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <div>
                            <strong className="text-white">Choosing the Right Fund:</strong> Assess your goals, risk tolerance, and preferences to select the most suitable fund.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <div>
                            <strong className="text-white">Investment Strategy:</strong> Develop a tailored strategy to grow your super effectively.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <div>
                            <strong className="text-white">Ongoing Support:</strong> Provide ongoing advice to ensure your super remains aligned with your retirement goals and adjusts to changes in circumstances.
                          </div>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    // Default rendering for other services
                    selectedService.detailedContent.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-300 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))
                  )}
                </div>

                {/* Book Meeting Button */}
                {(selectedService.title === "Trusts" || 
                  selectedService.title === "Cashflow Management" || 
                  selectedService.title === "Retirement Planning" || 
                  selectedService.title === "Tax Advice & Planning" || 
                  selectedService.title === "Superannuation Planning" ||
                  selectedService.title === "Small Business Advice" ||
                  selectedService.title === "Property Planning" ||
                  selectedService.title === "Investment Planning & Portfolio Management" ||
                  selectedService.title === "Estate Planning" ||
                  selectedService.title === "Investment & Education Bonds" ||
                  selectedService.title === "Debt Management" ||
                  selectedService.title === "SMSF Strategies & Advice" ||
                  selectedService.title === "Wealth Preservation Strategies" ||
                  selectedService.title === "Lifestyle Planning") && (
                  <div className="mt-8 pt-6 border-t border-slate-700">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Book a Complimentary Meeting
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {selectedService.title === "Trusts" && 
                        "If you're interested in exploring how a trust could work for you or your business, we invite you to schedule a complimentary consultation. Let's discuss your needs and how we can help."
                      }
                      {selectedService.title === "Cashflow Management" && 
                        "Want to take control of your cashflow? We offer a complimentary consultation to discuss your unique needs and provide tailored solutions for better cashflow management."
                      }
                      {selectedService.title === "Retirement Planning" && 
                        "Curious about when you can afford to retire and how to get there? Schedule a complimentary consultation to discuss your retirement goals and build a strategy tailored to your needs."
                      }
                      {selectedService.title === "Tax Advice & Planning" && 
                        "Looking to optimize your tax planning and structure? Schedule a complimentary consultation to review your options and develop a strategy tailored to your financial situation."
                      }
                      {selectedService.title === "Superannuation Planning" && 
                        "Want to maximize your superannuation benefits and choose the right fund for your needs? Schedule a complimentary consultation to discuss your superannuation strategy and retirement goals."
                      }
                      {selectedService.title === "Small Business Advice" && 
                        "If you're looking to protect your assets, reduce tax obligations, and maximize business growth, schedule a complimentary consultation today."
                      }
                      {selectedService.title === "Property Planning" && 
                        "If you're ready to develop a smart property investment strategy, schedule a complimentary consultation today."
                      }
                      {selectedService.title === "Investment Planning & Portfolio Management" && 
                        "If you want to build a diversified portfolio and optimize your investment strategy, schedule a complimentary consultation today."
                      }
                      {selectedService.title === "Estate Planning" && 
                        "If you want to protect your assets and ensure a smooth transfer of wealth, schedule a complimentary consultation today."
                      }
                      {selectedService.title === "Investment & Education Bonds" && 
                        "If you want to explore tax-efficient investment options and plan for future education expenses, schedule a complimentary consultation today."
                      }
                      {selectedService.title === "Debt Management" && 
                        "If you want to take control of your debt and create a clear financial plan, schedule a complimentary consultation today."
                      }
                      {selectedService.title === "SMSF Strategies & Advice" && 
                        "If you want to take control of your super and explore SMSF strategies, schedule a complimentary consultation today."
                      }
                      {selectedService.title === "Wealth Preservation Strategies" && 
                        "If you want to secure your wealth and create a long-term income strategy, schedule a complimentary consultation today."
                      }
                      {selectedService.title === "Lifestyle Planning" && 
                        "If you're planning for a major lifestyle change and want to ensure financial success, schedule a complimentary consultation today."
                      }
                    </p>
                    <motion.a 
                      href="https://calendly.com/lopeyegtmfinance/20min?back=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Schedule a Meeting</span>
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      {!selectedService && (
        <section className="py-20 bg-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Schedule a Consultation Today!
              </h2>
              <p className="text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
                Book a No-Obligation 30 Minute Consultation with GTM Finance and take the first step 
                towards securing your financial future.
              </p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.a 
                  href="https://calendly.com/lopeyegtmfinance/20min?back=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule a Meeting</span>
                </motion.a>
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

export default FinancialPlanning
