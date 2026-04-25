# Hiba Shahid — Portfolio (React + Vite)

A production-grade personal portfolio built with React 18 and Vite.

## 🚀 Quick Start

```bash
npm install
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Build for production → dist/
npm run preview   # Preview production build
```

## 📁 Project Structure

```
src/
  components/
    Navbar.jsx        # Sticky nav with scroll effect + CV download
    Hero.jsx          # Landing section with stats
    AboutSkills.jsx   # Tech strip, About, Skills sections
    Projects.jsx      # Filterable project cards with live links
    Sections.jsx      # Experience timeline, GitHub, Contact, Footer
  App.jsx             # Root component
  index.jsx           # Entry point
  index.css           # Global styles & CSS variables
```

## 🌐 Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repo
2. Go to https://vercel.com → "New Project" → Import repo
3. Framework: **Vite** (auto-detected)
4. Click **Deploy** — done!

## 📄 Resume Download

The resume download button links to:
```
https://raw.githubusercontent.com/Hiba-Shahid/Hiba-Shahid/main/Hiba_Shahid_Resume.pdf
```

To make it work:
1. Create a repo named `Hiba-Shahid` on your GitHub
2. Upload `Hiba_Shahid_Resume.pdf` to it
3. The download button will work automatically

OR update the `RESUME_URL` constant in `Navbar.jsx`, `Hero.jsx`, and `Sections.jsx` to any public PDF URL.

## 🎨 Customization

All colors are CSS variables in `src/index.css` under `:root {}`.
To change accent color, update `--accent`, `--accent2`, `--accent3`.
