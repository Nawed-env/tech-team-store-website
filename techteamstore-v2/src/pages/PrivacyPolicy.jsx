import React from 'react'
import { Link } from 'react-router-dom'

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '36px' }}>
    <h2 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '20px', color: '#1a2a35', marginBottom: '12px', paddingBottom: '10px', borderBottom: '2px solid #249fda', display: 'inline-block' }}>{title}</h2>
    <div style={{ fontSize: '15px', color: '#5a7080', lineHeight: 1.85 }}>{children}</div>
  </div>
)

export default function PrivacyPolicy() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #0a0a0a, #1a0a00)', padding: '70px 0 50px', textAlign: 'center' }}>
        <div className="container">
          <div style={{ color: '#249fda', fontWeight: 700, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Legal</div>
          <h1 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(30px, 4vw, 50px)', color: 'white', marginBottom: '12px' }}>Privacy Policy</h1>
          <p style={{ color: '#7ab3cc', fontSize: '15px' }}>Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '70px 0', background: '#f0f6fa' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '20px', padding: '50px', border: '1px solid #c8dde8', boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>
            <p style={{ fontSize: '15px', color: '#5a7080', lineHeight: 1.85, marginBottom: '36px', padding: '20px', background: '#f0f9ff', borderRadius: '10px', border: '1px solid rgba(36,159,218,0.2)' }}>
              Tech Team Store ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.
            </p>

            <Section title="1. Information We Collect">
              <p style={{ marginBottom: '12px' }}>We may collect the following types of information:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'disc' }}>
                <li><strong>Personal Information:</strong> Name, phone number, email address, and physical address when you contact us or book a service.</li>
                <li><strong>Device Information:</strong> Details about your laptop or device brought in for repair (brand, model, serial number, issue description).</li>
                <li><strong>Communication Data:</strong> Messages sent via WhatsApp, email, or phone calls for service inquiries.</li>
                <li><strong>Usage Data:</strong> Basic website analytics such as page visits and browser type (no personally identifiable information).</li>
              </ul>
            </Section>

            <Section title="2. How We Use Your Information">
              <p style={{ marginBottom: '12px' }}>We use your information solely for the following purposes:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'disc' }}>
                <li>To provide and manage our repair services</li>
                <li>To communicate service updates, repair status, and billing</li>
                <li>To respond to inquiries and customer support requests</li>
                <li>To improve our services and website experience</li>
                <li>To send service reminders (only with your consent)</li>
              </ul>
            </Section>

            <Section title="3. Data Security">
              <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Your device data and personal details are stored securely and accessed only by authorized staff directly involved in your repair.</p>
            </Section>

            <Section title="4. Data Sharing">
              <p>We do <strong>not</strong> sell, trade, or rent your personal information to third parties. We may share data only in the following limited cases:</p>
              <ul style={{ paddingLeft: '20px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'disc' }}>
                <li>With service partners strictly necessary to complete your repair</li>
                <li>When required by law or legal proceedings</li>
                <li>To protect the rights and safety of our business and customers</li>
              </ul>
            </Section>

            <Section title="5. Cookies">
              <p>Our website may use basic cookies to improve your browsing experience. These cookies do not collect personally identifiable information. You can disable cookies in your browser settings if you prefer.</p>
            </Section>

            <Section title="6. Your Device Data">
              <p>Any data on your device remains yours. We access only what is necessary to diagnose and repair the issue. We will always seek your permission before accessing files. We strongly recommend backing up your data before submitting your device for repair.</p>
            </Section>

            <Section title="7. Third-Party Links">
              <p>Our website may contain links to third-party platforms (Google Maps, WhatsApp, social media). We are not responsible for the privacy practices of those platforms. Please review their privacy policies separately.</p>
            </Section>

            <Section title="8. Children's Privacy">
              <p>Our services are not directed at children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such data, please contact us immediately.</p>
            </Section>

            <Section title="9. Changes to This Policy">
              <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date. We encourage you to review this policy periodically.</p>
            </Section>

            <Section title="10. Contact Us">
              <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
              <div style={{ marginTop: '16px', padding: '20px', background: '#f0f6fa', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p><strong>Tech Team Store</strong></p>
                <p>📍 19/2 RT, Municipal Colony, near Yashoda Hospital, Malakpet, Hyderabad – 500036</p>
                <p>📞 <a href="tel:+919618986429" style={{ color: '#249fda' }}>+91 96189 86429</a></p>
                <p>✉️ <a href="mailto:info.techteamstore@gmail.com" style={{ color: '#249fda' }}>info.techteamstore@gmail.com</a></p>
              </div>
            </Section>

            <div style={{ paddingTop: '20px', borderTop: '1px solid #e8e4de', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/" style={{ padding: '10px 22px', background: 'linear-gradient(135deg, #249fda, #5ec0ea)', color: 'white', borderRadius: '8px', fontWeight: 600, fontSize: '14px' }}>← Back to Home</Link>
              <Link to="/terms-conditions" style={{ padding: '10px 22px', border: '1.5px solid #e0ddd8', color: '#5a7080', borderRadius: '8px', fontWeight: 600, fontSize: '14px' }}>Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
