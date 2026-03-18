import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Logo = () => (
  <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <img
      src="/logo.jpeg"
      alt="Tech Team Store Logo"
      style={{ width: 46, height: 46, borderRadius: '50%', objectFit: 'cover', border: '2px solid #249fda', background: 'white' }}
    />
    <div>
      <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '18px', color: 'white', lineHeight: 1.1 }}>
        Tech Team<span style={{ color: '#249fda' }}> Store</span>
      </div>
      <div style={{ fontSize: '11px', color: '#7ab3cc', letterSpacing: '0.5px' }}>Laptop Service Center</div>
    </div>
  </Link>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/privacy-policy', label: 'Privacy Policy' },
    { to: '/terms-conditions', label: 'Terms & Conditions' },
  ]

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: 'rgba(30,47,58,0.97)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(36,159,218,0.25)',
      transition: 'all 0.4s ease',
      padding: scrolled ? '10px 0' : '18px 0',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo />

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} style={{
              padding: '8px 15px', borderRadius: '8px', fontSize: '14px', fontWeight: '500',
              color: location.pathname === to ? '#249fda' : '#c8dde8',
              background: location.pathname === to ? 'rgba(36,159,218,0.12)' : 'transparent',
              border: location.pathname === to ? '1px solid rgba(36,159,218,0.3)' : '1px solid transparent',
              transition: 'all 0.2s',
            }}
            
              onMouseEnter={e => { if (location.pathname !== to) e.target.style.color = 'white' }}
              onMouseLeave={e => { if (location.pathname !== to) e.target.style.color = '#c8dde8' }}
            >{label}</Link>
          ))}
          <a href="tel:+919618986429" style={{
            marginLeft: '10px', padding: '10px 22px',
            background: 'linear-gradient(135deg, #249fda, #1a7fb5)',
            color: 'white', borderRadius: '8px', fontWeight: '700',
            fontSize: '14px', transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 15px rgba(36,159,218,0.35)'
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >📞 +91 96189 86429</a>
        </nav>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: 'white' }}
          className="hamburger" aria-label="Toggle menu">
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(30,47,58,0.98)', padding: '16px 24px 24px', borderTop: '1px solid rgba(36,159,218,0.2)', overflowX: 'hidden', width: '100%' }}>
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} style={{
              display: 'block', padding: '12px 0',
              color: location.pathname === to ? '#249fda' : '#c8dde8',
              fontSize: '16px', fontWeight: '500',
              borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>{label}</Link>
          ))}
          <a href="tel:+919618986429" style={{
            display: 'block', marginTop: '16px', padding: '12px',
            background: 'linear-gradient(135deg, #249fda, #1a7fb5)',
            color: 'white', borderRadius: '8px', fontWeight: '700',
            textAlign: 'center', fontSize: '16px'
          }}>📞 +91 96189 86429</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          header { width: 100vw !important; max-width: 100% !important; overflow-x: hidden !important; }

        }
      `}</style>
    </header>
  )
}
