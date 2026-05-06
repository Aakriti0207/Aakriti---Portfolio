# Aakriti Arya — Portfolio

Personal portfolio website built with React + Vite.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build       # outputs to /dist
npm run preview     # preview the production build locally
```

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo on vercel.com — it auto-detects Vite.

---

## 📁 Folder Structure

```
aakriti-portfolio/
├── index.html                  # HTML entry point (fonts loaded here)
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                # React root
    ├── App.jsx                 # Root component, active-section tracker
    ├── styles/
    │   └── global.css          # Reset, scrollbar, keyframes, responsive
    ├── data/
    │   ├── projects.js         # All project data (title, URLs, stack, color…)
    │   └── skills.js           # Skills by category
    ├── hooks/
    │   └── useInView.js        # IntersectionObserver hook for scroll animations
    └── components/
        ├── Navbar.jsx          # Fixed top nav, blur-on-scroll, mobile hamburger
        ├── Hero.jsx            # Landing section with stats + CTAs
        ├── Projects.jsx        # Section wrapper — maps PROJECTS → ProjectCard
        ├── ProjectCard.jsx     # Alternating left/right layout per project
        ├── LivePreview.jsx     # iframe browser frame with loading/blocked states
        ├── Skills.jsx          # Categorised skill cards
        ├── About.jsx           # Bio + achievement cards
        ├── Contact.jsx         # Email / LinkedIn / GitHub link cards
        └── SectionLabel.jsx    # Reusable eyebrow label + heading
```

---

## 🖼 Live Preview (iframe) Notes

The `LivePreview` component tries to embed your deployed project URLs.
Whether it works depends on the headers your Vercel apps send.

**To enable iframe embedding**, add this to each project's `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "ALLOWALL" }
      ]
    }
  ]
}
```

If a site blocks embedding, `LivePreview` shows a clean fallback with an
"Open Live Site ↗" button after 6 seconds.

---

## ✏️ Customisation

| What to change | File |
|---|---|
| Project data, URLs, GitHub links | `src/data/projects.js` |
| Skills list | `src/data/skills.js` |
| Bio text, achievements | `src/components/About.jsx` |
| Contact links | `src/components/Contact.jsx` |
| Accent color (`#6366f1`) | Search & replace across components |
| Fonts | `index.html` Google Fonts link + component `fontFamily` strings |
