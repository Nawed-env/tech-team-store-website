import React from 'react'
import { Link } from 'react-router-dom'

const SOCIAL_LINKS = {
  facebook:  'https://www.facebook.com/techteamstore/',
  instagram: 'https://www.instagram.com/techteamstore/?hl=en',
  linkedin:  'https://www.linkedin.com/company/techteamstore',
  twitter:   'https://twitter.com/techteamstore',
  youtube:   'https://www.youtube.com/@techteamstore',
  gmail:     'mailto:info.techteamstore@gmail.com',
}
const WHATSAPP_NUMBER = '919618986429'

const SocialIcon = ({ href, label, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
    style={{
      width: 40, height: 40, borderRadius: '10px',
      background: 'rgba(36,159,218,0.1)',
      border: '1px solid rgba(36,159,218,0.2)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#7ab3cc', transition: 'all 0.25s', cursor: 'pointer'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = 'rgba(36,159,218,0.25)'
      e.currentTarget.style.borderColor = '#249fda'
      e.currentTarget.style.color = '#249fda'
      e.currentTarget.style.transform = 'translateY(-3px)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = 'rgba(36,159,218,0.1)'
      e.currentTarget.style.borderColor = 'rgba(36,159,218,0.2)'
      e.currentTarget.style.color = '#7ab3cc'
      e.currentTarget.style.transform = 'translateY(0)'
    }}
  >{children}</a>
)

export default function Footer() {
  return (
    <footer style={{ background: '#1a2a35', color: '#c8dde8', paddingTop: '60px' }}>
      {/* Top accent line */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #249fda, #304755, #f0a500)', marginBottom: '0' }} />

      <div className="container" style={{ paddingTop: '50px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px', paddingBottom: '48px',
          borderBottom: '1px solid rgba(36,159,218,0.15)'
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img src="/logo.jpeg" alt="Tech Team Store Logo"
                style={{ width: 50, height: 50, borderRadius: '50%', objectFit: 'cover', border: '2px solid #249fda', background: 'white' }} />
              <div>
                <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '17px', color: 'white' }}>
                  Tech Team<span style={{ color: '#249fda' }}> Store</span>
                </div>
                <div style={{ fontSize: '11px', color: '#7ab3cc' }}>Laptop Service Center</div>
              </div>
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#7ab3cc', marginBottom: '20px' }}>
              Expert laptop repairs for all brands in Hyderabad. Certified technicians, genuine parts, fast turnaround.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <SocialIcon href={SOCIAL_LINKS.facebook} label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.instagram} label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.linkedin} label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.twitter} label="X (Twitter)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.youtube} label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1a2a35"/></svg>
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.gmail} label="Gmail">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '15px', color: 'white', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #249fda', display: 'inline-block' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[{ to: '/', label: 'Home' }, { to: '/about', label: 'About Us' }, { to: '/privacy-policy', label: 'Privacy Policy' }, { to: '/terms-conditions', label: 'Terms & Conditions' }].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} style={{ color: '#7ab3cc', fontSize: '14px', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
                    onMouseEnter={e => e.target.style.color = '#249fda'}
                    onMouseLeave={e => e.target.style.color = '#7ab3cc'}
                  ><span style={{ color: '#249fda' }}>›</span> {label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '15px', color: 'white', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #249fda', display: 'inline-block' }}>Our Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Chip-Level Repair','Screen Replacement','Battery Replacement','Data Recovery','OS Installation','Keyboard Repair','Motherboard Repair','Hardware Upgrade'].map(s => (
                <li key={s} style={{ color: '#7ab3cc', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: '#249fda' }}>›</span> {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '15px', color: 'white', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #249fda', display: 'inline-block' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: '📍', text: '19/2 RT, 16-10-27/117, Municipal Colony, near Yashoda Hospital, Malakpet, Hyderabad, Telangana 500036' },
                { icon: '📞', text: '+91 96189 86429', href: 'tel:+919618986429' },
                { icon: '💬', text: 'WhatsApp Us', href: `https://wa.me/${WHATSAPP_NUMBER}` },
                { icon: '✉️', text: 'info.techteamstore@gmail.com', href: 'mailto:info.techteamstore@gmail.com' },
                { icon: '🕐', text: 'Mon–Sat: 10:00 AM – 8:00 PM' },
              ].map(({ icon, text, href }) => (
                <div key={text} style={{ display: 'flex', gap: '10px', fontSize: '13px', color: '#7ab3cc' }}>
                  <span style={{ flexShrink: 0, fontSize: '15px' }}>{icon}</span>
                  {href ? (
                    <a href={href} style={{ color: '#7ab3cc', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#249fda'}
                      onMouseLeave={e => e.target.style.color = '#7ab3cc'}
                    >{text}</a>
                  ) : <span>{text}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ padding: '20px 0', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '13px', color: '#4a6a7a' }}>© {new Date().getFullYear()} Tech Team Store. All rights reserved.</p>
          <p style={{ fontSize: '13px', color: '#4a6a7a' }}>Designed with ❤️ for Hyderabad's tech community</p>
        </div>
      </div>
    </footer>
  )
}
