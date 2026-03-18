import React, { useEffect, useRef, useState } from 'react'

const WHATSAPP_NUMBER = '919618986429'

const SERVICES = [
  { icon: '🔧', title: 'Chip-Level Repair', desc: 'Advanced BGA/SMD motherboard repairs using specialized equipment. We fix the root cause, not just symptoms.' },
  { icon: '🖥️', title: 'Screen Replacement', desc: 'Crystal-clear OEM-grade display replacements for all brands. Same-day service available.' },
  { icon: '🔋', title: 'Battery Replacement', desc: 'Genuine battery replacements restoring your laptop\'s full power backup for all models.' },
  { icon: '💾', title: 'Data Recovery', desc: 'Recover deleted, corrupted or lost data from any laptop or hard drive with a 90%+ success rate.' },
  { icon: '⌨️', title: 'Keyboard Repair', desc: 'Fix or replace faulty/sticky keys with genuine parts at the most competitive prices.' },
  { icon: '🖥', title: 'OS Installation', desc: 'Clean Windows/Linux installation, drivers setup, software optimization — quick and reliable.' },
  { icon: '🔌', title: 'Charging Port Fix', desc: 'Repair or replace faulty adapters and charging ports damaged by power fluctuations.' },
  { icon: '❄️', title: 'Cooling Service', desc: 'Fix overheating and shutdowns with comprehensive thermal servicing and fan replacement.' },
]

const BRANDS = ['Dell', 'HP', 'Lenovo', 'Apple', 'Asus', 'Acer', 'Samsung', 'Toshiba', 'MSI', 'HCL', 'Compaq', 'IBM']

const TESTIMONIALS = [
  { name: 'Rahul M.', rating: 5, text: 'My Lenovo laptop had a motherboard failure. They fixed it quickly and affordably. Excellent professional service!', location: 'Malakpet' },
  { name: 'Priya S.', rating: 5, text: 'Brought in my HP laptop with a cracked screen. Replaced within 2 hours at a great price. Highly recommend!', location: 'LB Nagar' },
  { name: 'Karthik R.', rating: 5, text: 'Outstanding chip-level repair work on my Dell XPS. No other center could fix it — these guys are experts.', location: 'Vanasthalipuram' },
  { name: 'Anjali T.', rating: 5, text: 'Data recovery was a success! Recovered all my files from a crashed hard drive. Lifesavers!', location: 'Hyderabad' },
]

const WHY_US = [
  { icon: '🏆', title: 'Certified Technicians', desc: 'Expert engineers with 8+ years average experience in chip-level and hardware repairs.' },
  { icon: '✅', title: 'Genuine Parts', desc: 'Only OEM-grade or original components used. 6-month warranty on all major repairs.' },
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Most repairs completed same day. We respect your time and deliver on promises.' },
  { icon: '💰', title: 'Transparent Pricing', desc: 'Free diagnosis. No hidden charges. You approve the cost before we start any work.' },
]

function ServiceCard({ icon, title, desc, delay }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (



    <div ref={ref} style={{

      background: 'white', borderRadius: '16px', padding: '28px 24px' ,overflow: 'hidden',
      border: '1px solid #c8dde8',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(30px)',
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, box-shadow 0.3s, border-color 0.3s`,
      cursor: 'default',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = '0 20px 50px rgba(36,159,218,0.15)'
        e.currentTarget.style.borderColor = '#249fda'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = '#c8dde8'
      }}
    >
      <div style={{ fontSize: '36px', marginBottom: '14px' }}>{icon}</div>
      <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '17px', marginBottom: '10px', color: '#1a2a35' }}>{title}</h3>
      <p style={{ fontSize: '14px', color: '#5a7080', lineHeight: 1.7 }}>{desc}</p>
    </div>
  )
}

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false)
  useEffect(() => { setTimeout(() => setHeroVisible(true), 100) }, [])

  return (
    <div  style={{ overflowX: 'hidden' }}>
          
      <img
        src="/laptopBanner.png"
        alt="Laptop Services"
        className="banner-image"
        style={{ width: '100%', height: 'auto', display: 'block', marginTop: '80px' }}
      />
      {/* ── HERO ── */}
      <section className="hero-section" style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e2f3a 0%, #304755 50%, #1a2a35 100%)',
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        paddingTop: '20px'
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-180px', right: '-180px', width: '550px', height: '550px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(36,159,218,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,165,0,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        {/* Grid pattern overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(36,159,218,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="hero-grid">
            {/* Left */}
            <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.8s ease' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(36,159,218,0.15)', border: '1px solid rgba(36,159,218,0.4)',
                borderRadius: '100px', padding: '6px 16px', marginBottom: '24px'
              }}>
                <span style={{ width: 8, height: 8, background: '#249fda', borderRadius: '50%', display: 'inline-block' }} />
                <span style={{ fontSize: '13px', color: '#249fda', fontWeight: 600 }}>Malakpet, Hyderabad</span>
              </div>

              <h1 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 62px)', color: 'white', lineHeight: 1.1, marginBottom: '20px' }}>
                Your Laptop's<br />
                <span style={{ background: 'linear-gradient(135deg, #249fda, #5ec0ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Trusted Repair
                </span><br />
                Expert
              </h1>

              <p style={{ fontSize: '17px', color: 'rgba(200,221,232,0.8)', lineHeight: 1.8, marginBottom: '36px', maxWidth: '480px' }}>
                Certified technicians. Genuine parts. Fast turnaround. We repair all major laptop brands with chip-level precision and a 6-month warranty.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I need laptop repair.`} target="_blank" rel="noopener noreferrer"
                  style={{ padding: '14px 28px', background: '#25D366', color: 'white', borderRadius: '10px', fontWeight: 700, fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 6px 20px rgba(37,211,102,0.35)', transition: 'transform 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >💬 WhatsApp Us</a>
                <a href="tel:+919618986429"
                  style={{ padding: '14px 28px', background: 'linear-gradient(135deg, #249fda, #1a7fb5)', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 600, fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.2s', boxShadow: '0 6px 20px rgba(36,159,218,0.35)' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >📞 Call Now</a>
              </div>

              <div style={{ marginTop: '40px', display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                {[['⭐ 4.9/5', 'Google Rating'], ['500+', 'Happy Clients'], ['6 Months', 'Repair Warranty']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '18px', color: 'white' }}>{n}</div>
                    <div style={{ fontSize: '12px', color: '#7ab3cc', marginTop: '2px' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateX(0)' : 'translateX(40px)', transition: 'all 1s ease 0.3s' }} className="hero-visual">
              <div style={{ background: 'rgba(36,159,218,0.07)', border: '1px solid rgba(36,159,218,0.2)', borderRadius: '24px', padding: '40px', backdropFilter: 'blur(10px)' }}>
                {/* Logo in hero card */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
                  <img src="/logo.jpeg" alt="Tech Team Store" style={{ width: 90, height: 90, borderRadius: '50%', objectFit: 'cover', border: '3px solid #249fda', boxShadow: '0 0 30px rgba(36,159,218,0.4)' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {[['🔧', 'Hardware Repair'], ['💾', 'Data Recovery'], ['🖥️', 'Screen Fix'], ['🔋', 'Battery Replace'], ['⌨️', 'Keyboard Fix'], ['❄️', 'Cooling Service']].map(([icon, label]) => (
                    <div key={label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(36,159,218,0.15)', borderRadius: '10px', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '20px' }}>{icon}</span>
                      <span style={{ fontSize: '13px', color: '#c8dde8', fontWeight: 500 }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section style={{ background: 'linear-gradient(135deg, #249fda, #1a7fb5)', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '30px', textAlign: 'center' }}>
            {[['500+', 'Laptops Repaired'], ['8+', 'Years Experience'], ['All', 'Major Brands'], ['6 Mo', 'Repair Warranty'], ['90%', 'Data Recovery Rate']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '34px', color: 'white', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', marginTop: '4px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: '90px 0', background: '#f0f6fa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ color: '#249fda', fontWeight: 700, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>What We Do</div>
            <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 42px)', color: '#1a2a35', marginBottom: '16px' }}>Complete Laptop Repair Services</h2>
            <p style={{ color: '#5a7080', fontSize: '16px', maxWidth: '520px', margin: '0 auto' }}>From chip-level motherboard repairs to screen replacements — we handle every issue with precision and care.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {SERVICES.map((s, i) => <ServiceCard key={s.title} {...s} delay={i * 60} />)}
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section style={{ padding: '60px 0', background: 'white', borderTop: '1px solid #c8dde8', borderBottom: '1px solid #c8dde8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p style={{ color: '#5a7080', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>We Repair All Major Brands</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {BRANDS.map(brand => (
              <div key={brand} style={{
                padding: '10px 22px', border: '1.5px solid #c8dde8', borderRadius: '100px',
                fontSize: '14px', fontWeight: 600, color: '#304755', background: '#f0f6fa',
                transition: 'all 0.2s', cursor: 'default'
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#249fda'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = '#249fda' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#f0f6fa'; e.currentTarget.style.color = '#304755'; e.currentTarget.style.borderColor = '#c8dde8' }}
              >{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: '90px 0', background: '#1e2f3a' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ color: '#249fda', fontWeight: 700, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Why Us</div>
            <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 42px)', color: 'white' }}>The Tech Team Store Difference</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {WHY_US.map(({ icon, title, desc }) => (
              <div key={title} style={{ background: 'rgba(36,159,218,0.06)', border: '1px solid rgba(36,159,218,0.15)', borderRadius: '16px', padding: '32px 26px', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(36,159,218,0.14)'; e.currentTarget.style.borderColor = 'rgba(36,159,218,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(36,159,218,0.06)'; e.currentTarget.style.borderColor = 'rgba(36,159,218,0.15)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{icon}</div>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '17px', color: 'white', marginBottom: '10px' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: '#7ab3cc', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '90px 0', background: '#f0f6fa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ color: '#249fda', fontWeight: 700, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Reviews</div>
            <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 42px)', color: '#1a2a35' }}>What Our Customers Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {TESTIMONIALS.map(({ name, rating, text, location }) => (
              <div key={name} style={{ background: 'white', borderRadius: '16px', padding: '28px', border: '1px solid #c8dde8', transition: 'box-shadow 0.3s, border-color 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 16px 40px rgba(36,159,218,0.12)'; e.currentTarget.style.borderColor = '#249fda' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#c8dde8' }}
              >
                <div style={{ color: '#f0a500', fontSize: '18px', marginBottom: '12px' }}>{'★'.repeat(rating)}</div>
                <p style={{ fontSize: '14px', color: '#5a7080', lineHeight: 1.75, marginBottom: '20px', fontStyle: 'italic' }}>"{text}"</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: '#1a2a35', fontFamily: 'Syne' }}>{name}</div>
                  <div style={{ fontSize: '12px', color: '#7ab3cc' }}>📍 {location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION & MAP ── */}
      <section style={{ padding: '90px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ color: '#249fda', fontWeight: 700, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Find Us</div>
            <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 42px)', color: '#1a2a35' }}>Visit Our Service Center</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '40px', alignItems: 'start' }} className="map-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: '📍', title: 'Address', content: '19/2 RT, 16-10-27/117, Municipal Colony, near Yashoda Hospital, Malakpet, Hyderabad, Telangana 500036' },
                { icon: '📞', title: 'Phone', content: '+91 96189 86429', href: 'tel:+919618986429' },
                { icon: '✉️', title: 'Email', content: 'info.techteamstore@gmail.com', href: 'mailto:info.techteamstore@gmail.com' },
                { icon: '🕐', title: 'Hours', content: 'Monday – Saturday: 10:00 AM – 8:00 PM\nSunday: Closed' },
              ].map(({ icon, title, content, href }) => (
                <div key={title} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '18px', background: '#f0f6fa', borderRadius: '12px', border: '1px solid #c8dde8' }}>
                  <div style={{ width: 42, height: 42, background: 'linear-gradient(135deg, #249fda, #1a7fb5)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '14px', color: '#1a2a35', marginBottom: '4px' }}>{title}</div>
                    {href ? <a href={href} style={{ fontSize: '14px', color: '#249fda', fontWeight: 500 }}>{content}</a>
                      : <p style={{ fontSize: '14px', color: '#5a7080', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{content}</p>}
                  </div>
                </div>
              ))}
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I want to book a laptop repair service.`} target="_blank" rel="noopener noreferrer"
                style={{ padding: '16px', background: 'linear-gradient(135deg, #249fda, #1a7fb5)', color: 'white', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textAlign: 'center', boxShadow: '0 6px 20px rgba(36,159,218,0.3)', transition: 'transform 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >📅 Book Repair via WhatsApp</a>
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #c8dde8', boxShadow: '0 8px 30px rgba(36,159,218,0.1)' }}>
              <iframe title="Tech Team Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.3640082!2d78.5011586!3d17.3740769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99684b349aad%3A0x63b575092b638a37!2sTech%20team%20store%20-%20laptop%20service%20center!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" height="420" style={{ border: 0, display: 'block' }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #1e2f3a, #304755)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(36,159,218,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(26px, 4vw, 40px)', color: 'white', marginBottom: '16px' }}>Laptop Acting Up? We Can Fix It.</h2>
          <p style={{ color: '#7ab3cc', fontSize: '16px', marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>Free diagnosis. No fix, no fee. Walk in or book via WhatsApp for quick, professional repair.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
              style={{ padding: '16px 34px', background: '#25D366', color: 'white', borderRadius: '10px', fontWeight: 700, fontSize: '16px', boxShadow: '0 6px 20px rgba(37,211,102,0.35)', transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >💬 WhatsApp Now</a>
            <a href="tel:+919618986429"
              style={{ padding: '16px 34px', background: 'linear-gradient(135deg, #249fda, #1a7fb5)', color: 'white', borderRadius: '10px', fontWeight: 700, fontSize: '16px', boxShadow: '0 6px 20px rgba(36,159,218,0.35)', transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >📞 Call: +91 96189 86429</a>
          </div>  
        </div>
      </section>

   

<style>{`
  @media (max-width: 768px) {
    .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
    .hero-visual { display: none; }
    .map-grid { grid-template-columns: 1fr !important; }
    .hero-section { padding-top: 20px !important; min-height: auto !important; }
    .banner-image { margin-top: 75px !important; }
  }
`}</style>

    </div>
  )
}
