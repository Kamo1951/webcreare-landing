# WebCreare — Web Design & Development Agency Website

Marketing website for WebCreare (web design & development agency). The codebase emphasizes performance, accessibility, SEO, and maintainability.

# 🔗 Quick links

Live: https://webcreare.de

Contact: info@webcreare.de
 • +49 151 56065802

# ✨ Features

Services showcase (Web Design, Logo & Brand, Custom Development, SEO)

References / Projects

Pricing packages incl. maintenance/hosting

Team section

Contact form & company details

Legal pages (Impressum, Datenschutzerklärung, AGB)

SEO-ready metadata (OG/Twitter), semantic HTML

Performance via next/image, static pre-render where possible

# 🛠 Tech stack

Framework: Next.js (App Router) + TypeScript

Styling: Tailwind CSS (+ PostCSS)

Tooling: ESLint

Deployment: Vercel

Domain/DNS/Email: webcreare.de (Registrar: DeinServerHost), DNS & mail on Hostinger

Transactional email (optional): Resend

# 📁 Project structure
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

⚙️ Getting started
# Clone
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# Install
npm install

# Env
cp .env.example .env.local

# Dev
npm run dev   # http://localhost:3000

Scripts
npm run dev
npm run build
npm start
npm run lint

# 🔐 Environment variables
NEXT_PUBLIC_SITE_URL=https://webcreare.de

# 🚀 Deployment

Push to GitHub

Import to Vercel

Add env vars in Vercel

Connect webcreare.de in Vercel (DNS on Hostinger; registrar DeinServerHost)

# ♿ Accessibility & 📈 Performance

Semantic HTML, keyboard focus, alt text

Optimized images via next/image

Pre-rendered pages where possible

Add Lighthouse/Core Web Vitals screenshots if you want to show numbers.

# 🧭 Roadmap (nice-to-have)

Adjust images for faster loading on phone

Automated sitemap.xml & robots.txt (e.g., next-sitemap or route handlers)

Per-page metadata incl. canonical/OG

MDX/Markdown for long legal copy

/en Route for Recruiters

# 👔 License

Proprietary — All rights reserved.
