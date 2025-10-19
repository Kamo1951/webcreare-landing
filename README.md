
# WebCreare — Web Design & Development Agency

A fast, accessible, and SEO-friendly marketing website for WebCreare — a small web design & development agency. Built with Next.js (App Router) and TypeScript, focused on performance, maintainability and clear content.

Live: https://webcreare.de  
Contact: info@webcreare.de · +49 151 56065802

---

## ✨ Highlights

- Clear services: Web Design, Branding, Custom Development, SEO  
- References / Projects showcase  
- Pricing packages (incl. maintenance & hosting)  
- Team section and contact form  
- Legal pages: Impressum, Datenschutzerklärung, AGB  
- SEO-ready metadata (Open Graph, Twitter) and semantic HTML  
- Performance optimizations (next/image, static pre-rendering)

---

## 🔧 Tech stack

- Framework: Next.js (App Router) + TypeScript  
- Styling: Tailwind CSS (+ PostCSS)  
- Linting: ESLint  
- Deploy: Vercel  
- Domain / Email: webcreare.de (Registrar: DeinServerHost), DNS & mail on Hostinger  
- Optional transactional email: Resend

---

## 📁 Project structure
A short overview of the main files and folders:

├─ public/  
├─ src/  
│  └─ app/  
│     ├─ allgemeinegeschäftsbedingungen/   # AGB (legal)  
│     ├─ components/                       # UI components used by pages  
│     ├─ datenschutzerklaerung/            # Privacy policy (legal)  
│     ├─ impressum/                        # Imprint (legal)  
│     ├─ kontakt/                          # Contact page  
│     ├─ ueberuns/                         # About us  
│     ├─ favicon.ico  
│     ├─ globals.css                       # Tailwind entry (@tailwind base; components; utilities)  
│     ├─ layout.tsx                        # Root layout + metadata  
│     └─ page.tsx                          # Home page  
├─ .env  
├─ .gitignore  
├─ eslint.config.mjs  
├─ middleware.ts  
├─ next-env.d.ts  
├─ next.config.ts  
├─ package.json  
├─ package-lock.json  
├─ postcss.config.mjs  
├─ README.md  
└─ tsconfig.json

---

## ⚙️ Getting started

Clone the repo and run locally.

1. Clone
   git clone https://github.com/Kamo1951/webcreare-landing.git
   cd webcreare-landing

2. Install
   npm install

3. Environment
   Copy .env.example to .env.local and adjust variables.

4. Run (development)
   npm run dev
   Open http://localhost:3000

Available scripts:
- npm run dev        — start dev server
- npm run build      — build for production
- npm start          — run built app
- npm run lint       — run linter

---

## 🔐 Environment variables

At minimum:
- NEXT_PUBLIC_SITE_URL=https://webcreare.de

Add any mail/Resend or analytics secrets to your .env.local as needed (do not commit).

---

## 🚀 Deployment

1. Push to GitHub
2. Import repository to Vercel
3. Add environment variables in Vercel dashboard
4. Configure domain (webcreare.de) in Vercel — DNS hosted on Hostinger, registrar: DeinServerHost

---

## ♿ Accessibility & 📈 Performance

- Semantic HTML elements and good heading structure  
- Images optimized with next/image, all images include alt text  
- Keyboard focus and ARIA where needed  
- Pre-render pages where appropriate (static routes)  
- Use Lighthouse/Core Web Vitals to track improvements

---

## 🧭 Roadmap (nice-to-have)

- Further image size optimization for phones  
- Automated sitemap.xml & robots.txt (next-sitemap / route handlers)  
- Per-page metadata (canonical, OG) improvements  
- MDX/Markdown for long legal copy for easier editing  
- /en route tailored for recruiters or international visitors

---

## Contributing

This repository is proprietary. For changes, contact the site owner (info@webcreare.de) to coordinate.

---

## 👔 License

Proprietary — All rights reserved.
