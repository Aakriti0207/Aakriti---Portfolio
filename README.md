# Aakriti Arya — Personal Portfolio
 
> **Live:** [aakriti-arya-portfolio.vercel.app](https://aakriti-arya-portfolio.vercel.app)
 
A clean, minimal personal portfolio website built with React + Vite. Designed to showcase projects, skills, and achievements for internship applications.
 
---
 
## Preview
 
<img width="1919" height="912" alt="image" src="https://github.com/user-attachments/assets/6e3fa6b1-d0fb-4801-b9a4-2aa712393446" />

 
---
 
## Features
 
- **Animated Typing Effect** — Name types out in a smooth looping sequence
- **Live Project Previews** — Real iframe embeds of deployed projects inside a browser frame
- **Smooth Scroll Animations** — Sections fade/slide in on scroll using IntersectionObserver
- **Dark Minimal Design** — Black background, Indigo accent, Playfair Display + DM Mono typography
- **Fully Responsive** — Mobile-first, collapses gracefully on all screen sizes
- **Fixed Navbar** — Blurs on scroll, highlights active section automatically
---
 
## Tech Stack
 
| Category | Tools |
|---|---|
| Framework | React 18 |
| Build Tool | Vite 5 |
| Styling | Inline styles + CSS Modules |
| Fonts | Playfair Display, DM Mono (Google Fonts) |
| Deployment | Vercel |
 
---
 
## Project Structure
 
```
aakriti-portfolio/
├── public/
│   ├── Aakriti-Avatar.png     # Cartoon avatar (hero section)
│   └── FaviconAA.png          # Browser tab icon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Fixed nav with blur + active link tracking
│   │   ├── Hero.jsx           # Landing section with typing effect + avatar
│   │   ├── Projects.jsx       # Section wrapper
│   │   ├── ProjectCard.jsx    # Alternating left/right project layout
│   │   ├── LivePreview.jsx    # iframe browser frame with fallback
│   │   ├── Skills.jsx         # Categorised skill cards
│   │   ├── About.jsx          # Bio + achievement cards
│   │   ├── Contact.jsx        # Email, LinkedIn, GitHub links
│   │   └── SectionLabel.jsx   # Reusable section heading component
│   ├── data/
│   │   ├── projects.js        # All project info — edit here to add projects
│   │   └── skills.js          # Skills by category
│   ├── hooks/
│   │   └── useInView.js       # Scroll animation hook (IntersectionObserver)
│   ├── styles/
│   │   └── global.css         # Reset, scrollbar, keyframes, responsive
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```
 
---
 
## Getting Started
 
```bash
# 1. Clone the repo
git clone https://github.com/Aakriti0207/Aakriti---Portfolio.git
cd Aakriti---Portfolio
 
# 2. Install dependencies
npm install
 
# 3. Start dev server
npm run dev
# → http://localhost:5173
 
# 4. Build for production
npm run build
```
 
---
 
## Customisation
 
| What to update | File |
|---|---|
| Projects (title, links, stack) | `src/data/projects.js` |
| Skills list | `src/data/skills.js` |
| Bio & achievements | `src/components/About.jsx` |
| Contact links | `src/components/Contact.jsx` |
| Resume link | `src/components/Hero.jsx` |
| Avatar image | `public/Aakriti-Avatar.png` |
 
---
 
## Deployment
 
Deployed on **Vercel** with automatic deployments on every push to `main`.
 
To deploy your own fork:
1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Framework: **Vite** — Vercel auto-detects it
4. Done! 🚀
---
 
## Author
 
**Aakriti Arya**  
B.Tech Computer Science @ BPIT (2024–28)  
[LinkedIn](https://linkedin.com/in/aakriti-arya) · [GitHub](https://github.com/Aakriti0207) · [Portfolio](https://aakriti-arya-portfolio.vercel.app)
