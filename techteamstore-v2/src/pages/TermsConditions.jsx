import React from 'react'
import { Link } from 'react-router-dom'

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '36px' }}>
    <h2 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '20px', color: '#1a2a35', marginBottom: '12px', paddingBottom: '10px', borderBottom: '2px solid #249fda', display: 'inline-block' }}>{title}</h2>
    <div style={{ fontSize: '15px', color: '#5a7080', lineHeight: 1.85 }}>{children}</div>
  </div>
)

export default function TermsConditions() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #0a0a0a, #1a0a00)', padding: '70px 0 50px', textAlign: 'center' }}>
        <div className="container">
          <div style={{ color: '#249fda', fontWeight: 700, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Legal</div>
          <h1 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(30px, 4vw, 50px)', color: 'white', marginBottom: '12px' }}>Terms & Conditions</h1>
          <p style={{ color: '#7ab3cc', fontSize: '15px' }}>Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '70px 0', background: '#f0f6fa' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '20px', padding: '50px', border: '1px solid #c8dde8', boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>
            <p style={{ fontSize: '15px', color: '#5a7080', lineHeight: 1.85, marginBottom: '36px', padding: '20px', background: '#f0f9ff', borderRadius: '10px', border: '1px solid rgba(36,159,218,0.2)' }}>
              By using our services or visiting our website, you agree to the following Terms and Conditions. Please read them carefully. These terms govern the use of services provided by Tech Team Store, Malakpet, Hyderabad.
            </p>

            <Section title="1. Acceptance of Terms">
              <p>By submitting your device for repair or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
            </Section>

            <Section title="2. Services Provided">
              <p style={{ marginBottom: '12px' }}>Tech Team Store provides the following services:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'disc' }}>
                <li>Chip-level and motherboard repairs</li>
                <li>Screen, keyboard, battery, and port replacements</li>
                <li>Data recovery services</li>
                <li>Operating system installation and software support</li>
                <li>Hardware upgrades (RAM, SSD, HDD)</li>
                <li>General laptop servicing and maintenance</li>
              </ul>
              <p style={{ marginTop: '12px' }}>We reserve the right to decline any repair request at our discretion.</p>
            </Section>

            <Section title="3. Device Submission & Liability">
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'disc' }}>
                <li>You must be the rightful owner or authorized representative of the device submitted for repair.</li>
                <li>Tech Team Store is not responsible for any pre-existing damage not mentioned at the time of submission.</li>
                <li>We strongly recommend backing up all data before submitting your device. We are not liable for any data loss during the repair process unless data recovery was the agreed service.</li>
                <li>Devices left uncollected for more than 60 days after notification may be disposed of or auctioned to recover service costs.</li>
              </ul>
            </Section>

            <Section title="4. Pricing & Payment">
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'disc' }}>
                <li>All repairs are quoted upfront after free diagnosis. No work begins without your explicit approval.</li>
                <li>Final charges may vary if additional issues are discovered during repair. You will be informed before proceeding.</li>
                <li>Payment is due upon collection of the repaired device.</li>
                <li>We accept cash, UPI, and bank transfers.</li>
                <li>Diagnostic fees may apply if you choose not to proceed with the repair after diagnosis.</li>
              </ul>
            </Section>

            <Section title="5. Warranty on Repairs">
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'disc' }}>
                <li>We provide a 6-month warranty on major repairs (motherboard, screen replacement, chip-level work).</li>
                <li>Battery replacements carry a 3-month warranty.</li>
                <li>Warranty is void if the device is physically damaged, tampered with, or repaired by a third party after our service.</li>
                <li>Software-related issues are not covered under hardware warranty.</li>
                <li>Warranty covers only the specific component repaired or replaced.</li>
              </ul>
            </Section>

            <Section title="6. No Fix, No Fee Policy">
              <p>If we are unable to repair your device after diagnosis and attempting the repair, you will not be charged for the repair service. However, a nominal diagnostic fee may apply. This policy applies only to hardware repairs and not to data recovery services, which require significant effort regardless of outcome.</p>
            </Section>

            <Section title="7. Data & Privacy">
              <p>We respect your privacy. Our technicians will access your device only as necessary to perform the agreed repair. We do not copy, store, or share your personal data. Please refer to our <Link to="/privacy-policy" style={{ color: '#249fda' }}>Privacy Policy</Link> for full details.</p>
            </Section>

            <Section title="8. Intellectual Property">
              <p>All content on this website — including text, logos, graphics, and design — is the property of Tech Team Store. You may not copy, reproduce, or distribute any content without prior written permission.</p>
            </Section>

            <Section title="9. Limitation of Liability">
              <p>Tech Team Store's liability is limited to the cost of the service provided. We are not liable for indirect, consequential, or incidental damages arising from our services or use of our website, including loss of data, loss of business, or device malfunction beyond the scope of the agreed repair.</p>
            </Section>

            <Section title="10. Changes to Terms">
              <p>We reserve the right to modify these Terms and Conditions at any time. Changes take effect immediately upon posting on this website. Continued use of our services constitutes acceptance of the revised terms.</p>
            </Section>

            <Section title="11. Governing Law">
              <p>These terms are governed by the laws of India and the jurisdiction of Hyderabad, Telangana. Any disputes shall be resolved in the courts of Hyderabad.</p>
            </Section>

            <Section title="12. Contact Us">
              <p>For any questions about these Terms, please reach out:</p>
              <div style={{ marginTop: '16px', padding: '20px', background: '#f0f6fa', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p><strong>Tech Team Store</strong></p>
                <p>📍 19/2 RT, Municipal Colony, near Yashoda Hospital, Malakpet, Hyderabad – 500036</p>
                <p>📞 <a href="tel:+919618986429" style={{ color: '#249fda' }}>+91 96189 86429</a></p>
                <p>✉️ <a href="mailto:info.techteamstore@gmail.com" style={{ color: '#249fda' }}>info.techteamstore@gmail.com</a></p>
              </div>
            </Section>

            <div style={{ paddingTop: '20px', borderTop: '1px solid #e8e4de', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/" style={{ padding: '10px 22px', background: 'linear-gradient(135deg, #249fda, #5ec0ea)', color: 'white', borderRadius: '8px', fontWeight: 600, fontSize: '14px' }}>← Back to Home</Link>
              <Link to="/privacy-policy" style={{ padding: '10px 22px', border: '1.5px solid #e0ddd8', color: '#5a7080', borderRadius: '8px', fontWeight: 600, fontSize: '14px' }}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
