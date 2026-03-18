# Tech Team Store — Website

A professional React.js website for **Tech Team Store**, a laptop service center in Malakpet, Hyderabad.

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ installed → https://nodejs.org/

### Steps
```bash
# 1. Unzip the folder and open in VS Code
# 2. Open terminal in VS Code (Ctrl + `)

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open in browser
# http://localhost:5173
```

---

## 📂 Project Structure
```
techteamstore/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← Navigation bar
│   │   ├── Footer.jsx       ← Footer with social links
│   │   └── WhatsAppFloat.jsx ← Floating WhatsApp button
│   ├── pages/
│   │   ├── Home.jsx         ← Main landing page
│   │   ├── About.jsx        ← About Us
│   │   ├── PrivacyPolicy.jsx
│   │   └── TermsConditions.jsx
│   ├── App.jsx              ← Router setup
│   ├── main.jsx
│   └── index.css            ← Global styles
├── index.html
├── package.json
└── vite.config.js
```

---

## ✏️ Customization Checklist

### 1. WhatsApp Number
Edit `src/components/WhatsAppFloat.jsx` and `src/pages/Home.jsx`:
```js
const WHATSAPP_NUMBER = '919999999999'  // Replace with real number (91 + 10 digits)
```

### 2. Phone Number
Search for `+91 99999 99999` and replace with real number in:
- `src/components/Navbar.jsx`
- `src/pages/Home.jsx`

### 3. Email
Replace `youremail@gmail.com` with real email in:
- `src/components/Footer.jsx`
- `src/pages/Home.jsx`
- `src/pages/PrivacyPolicy.jsx`
- `src/pages/TermsConditions.jsx`

### 4. Social Media Links
Edit `src/components/Footer.jsx`:
```js
const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/YOUR_PAGE',
  instagram: 'https://instagram.com/YOUR_HANDLE',
  linkedin: 'https://linkedin.com/company/YOUR_PAGE',
  twitter: 'https://x.com/YOUR_HANDLE',
  youtube: 'https://youtube.com/@YOUR_CHANNEL',
  gmail: 'mailto:youremail@gmail.com',
}
```

---

## 🏗️ Build for Production
```bash
npm run build
# Output: dist/ folder — upload to any web host
```

---

## 🌐 Deployment Options
- **Netlify**: Drag & drop the `dist/` folder at netlify.com
- **Vercel**: `npx vercel` in terminal
- **cPanel Hosting**: Upload `dist/` contents to `public_html/`

---

## Pages
| Page | Route |
|------|-------|
| Home | `/` |
| About Us | `/about` |
| Privacy Policy | `/privacy-policy` |
| Terms & Conditions | `/terms-conditions` |

---

Built with React.js + Vite + React Router DOM
