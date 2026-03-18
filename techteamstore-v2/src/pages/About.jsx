import React from 'react'
import { Link } from 'react-router-dom'

const TEAM = [
  { name: 'Lead Engineer', role: 'Chip-Level Specialist', exp: '10+ yrs', emoji: '👨‍💻' },
  { name: 'Hardware Expert', role: 'Screen & Battery Repair', exp: '7+ yrs', emoji: '🔧' },
  { name: 'Data Recovery Pro', role: 'Data & Software', exp: '8+ yrs', emoji: '💾' },
]

export default function About() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a00 100%)',
        padding: '80px 0 60px',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '-150px', right: '-150px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,0,0.12) 0%, transparent 70%)',
        }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <img src="/logo.jpeg" alt="Tech Team Store" style={{ width: 70, height: 70, borderRadius: '50%', objectFit: 'cover', border: '3px solid #249fda', boxShadow: '0 0 24px rgba(36,159,218,0.4)', background: 'white' }} />
          </div>
          <div style={{ color: '#249fda', fontWeight: 700, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>About Us</div>
          <h1 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 56px)', color: 'white', marginBottom: '16px' }}>
            Who We Are
          </h1>
          <p style={{ color: '#7ab3cc', fontSize: '17px', maxWidth: '560px', margin: '0 auto' }}>
            Hyderabad's trusted laptop repair specialists — combining expertise, honesty, and fast service since day one.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '80px 0', background: '#f0f6fa' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="about-grid">
            <div>
              <div style={{ color: '#249fda', fontWeight: 700, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Our Story</div>
              <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 38px)', color: '#1a2a35', marginBottom: '20px' }}>
                Built on Trust &amp; Technical Excellence
              </h2>
              <p style={{ fontSize: '15px', color: '#5a7080', lineHeight: 1.85, marginBottom: '16px' }}>
                Tech Team Store was founded with one mission: to provide Hyderabad's laptop users with honest, expert repair service they can rely on. We established our service center in Malakpet with a commitment to transparency — free diagnosis, upfront pricing, and no work done without your approval.
              </p>
              <p style={{ fontSize: '15px', color: '#5a7080', lineHeight: 1.85, marginBottom: '16px' }}>
                Our certified engineers specialize in chip-level repairs that most service centers can't handle. We invest in the latest BGA and SMD rework equipment so we can fix the root cause of problems — not just mask symptoms.
              </p>
              <p style={{ fontSize: '15px', color: '#5a7080', lineHeight: 1.85 }}>
                From a single malfunctioning laptop to fleet maintenance for businesses, we bring the same level of care and precision to every job. We service all major brands including Dell, HP, Lenovo, Apple, Asus, Acer, Samsung, and more.
              </p>
            </div>
            <div style={{
              background: 'white', borderRadius: '20px', padding: '40px',
              border: '1px solid #c8dde8',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
            }}>
              <div style={{ fontSize: '60px', textAlign: 'center', marginBottom: '24px' }}>🏆</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {[
                  ['500+', 'Repairs Done'],
                  ['4.9★', 'Google Rating'],
                  ['8+', 'Years Experience'],
                  ['6 Mo', 'Warranty'],
                  ['All Brands', 'Supported'],
                  ['Free', 'Diagnosis'],
                ].map(([n, l]) => (
                  <div key={l} style={{
                    textAlign: 'center', padding: '16px',
                    background: '#f0f6fa', borderRadius: '12px'
                  }}>
                    <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '22px', color: '#249fda' }}>{n}</div>
                    <div style={{ fontSize: '12px', color: '#7ab3cc', marginTop: '4px' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section style={{ padding: '80px 0', background: '#1e2f3a' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 38px)', color: 'white' }}>Our Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {[
              { icon: '🔍', title: 'Honesty First', desc: 'Free diagnosis and transparent pricing. We quote before we touch anything.' },
              { icon: '⚡', title: 'Speed & Efficiency', desc: 'Most repairs completed same day. We know your laptop is your lifeline.' },
              { icon: '🛡️', title: 'Quality Assurance', desc: 'Only genuine parts. Every repair backed by a 6-month warranty.' },
              { icon: '🤝', title: 'Customer Care', desc: 'We explain every issue clearly and keep you informed throughout the process.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '14px', padding: '28px',
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,107,0,0.08)'
                e.currentTarget.style.borderColor = 'rgba(255,107,0,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              }}
              >
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{icon}</div>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '16px', color: 'white', marginBottom: '8px' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: '#7ab3cc', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '80px 0', background: '#f0f6fa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ color: '#249fda', fontWeight: 700, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Our Team</div>
            <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 38px)', color: '#1a2a35' }}>
              Certified Professionals
            </h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            {TEAM.map(({ name, role, exp, emoji }) => (
              <div key={name} style={{
                background: 'white', borderRadius: '16px', padding: '32px 28px',
                border: '1px solid #c8dde8', textAlign: 'center', minWidth: '200px',
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              >
                <div style={{ fontSize: '52px', marginBottom: '16px' }}>{emoji}</div>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '16px', color: '#1a2a35', marginBottom: '6px' }}>{name}</h3>
                <p style={{ fontSize: '13px', color: '#249fda', fontWeight: 600, marginBottom: '4px' }}>{role}</p>
                <p style={{ fontSize: '12px', color: '#7ab3cc' }}>{exp} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '70px 0', background: 'linear-gradient(135deg, #249fda, #5ec0ea)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 36px)', color: 'white', marginBottom: '12px' }}>
            Ready to Get Your Laptop Fixed?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', marginBottom: '32px' }}>
            Walk in or reach out — we're here Monday to Saturday, 10 AM – 8 PM.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919618986429" target="_blank" rel="noopener noreferrer"
              style={{ padding: '14px 28px', background: 'white', color: '#249fda', borderRadius: '10px', fontWeight: 700, fontSize: '15px' }}>
              💬 WhatsApp Us
            </a>
            <Link to="/" style={{ padding: '14px 28px', background: 'rgba(255,255,255,0.2)', color: 'white', border: '1.5px solid rgba(255,255,255,0.4)', borderRadius: '10px', fontWeight: 600, fontSize: '15px' }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
