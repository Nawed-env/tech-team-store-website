  import React from 'react'
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
  import Navbar from './components/Navbar'
  import Footer from './components/Footer'
  import WhatsAppFloat from './components/WhatsAppFloat'
  import Home from './pages/Home'
  import About from './pages/About'
  import PrivacyPolicy from './pages/PrivacyPolicy'
  import TermsConditions from './pages/TermsConditions'

  export default function App() {
    return (
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </BrowserRouter>
    )
  }
