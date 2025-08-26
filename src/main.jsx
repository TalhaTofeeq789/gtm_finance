import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import FinancialPlanning from './FinancialPlanning.jsx'
import MortgageBroking from './MortgageBroking.jsx'
import Contact from './Contact.jsx'
import ScrollToTop from './ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/financial-planning" element={<FinancialPlanning />} />
        <Route path="/mortgage-broking" element={<MortgageBroking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </StrictMode>,
)
