# Hiba Shahid — Portfolio (React + Vite + AI)

A modern, production-grade personal portfolio built with React 18, Vite, and an AI-powered RAG (Retrieval-Augmented Generation) assistant.

## ✨ Features

- 🚀 **Modern Tech Stack**: React 18 + Vite for lightning-fast development
- 🤖 **AI Assistant**: Interactive RAG agent powered by Mistral AI for instant portfolio queries
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Performance**: Optimized with lazy loading and smooth animations
- 📄 **Resume Integration**: One-click resume viewing in new tabs
- 🎨 **Modern Design**: Clean, professional UI with smooth animations

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Hiba-Shahid/My-Portfolio.git
cd My-Portfolio

# Install dependencies
npm install

# Create .env file with your Mistral API key
echo "VITE_MISTRAL_API_KEY=your_api_key_here" > .env

# Start development server
npm run dev       # Start dev server at http://localhost:3000

# Build for production
npm run build     # Build for production → dist/
npm run preview   # Preview production build
```

## 📁 Project Structure

```
src/
  components/
    Navbar.jsx          # Sticky navigation with scroll effect + resume download
    Hero.jsx            # Landing section with animated stats
    AboutSkills.jsx     # Tech stack, About, and Skills sections
    Projects.jsx        # Filterable project cards with live demos
    Sections.jsx        # Experience timeline, GitHub stats, Contact, Footer
    RAGAgent.jsx        # AI-powered chat assistant (Mistral AI integration)
  App.jsx               # Root component
  index.jsx             # Application entry point
  index.css             # Global styles & CSS variables
public/
  Hiba_Shahid_Resume.pdf  # Resume file for download
.env                    # Environment variables (API keys)
```

## 🤖 AI Assistant (RAG Agent)

The portfolio includes an intelligent AI assistant that can answer questions about:
- Work experience and skills
- Project details and live demos
- Education background
- Availability and contact information
- Technical expertise

**Technology**: Mistral AI (mistral-large-latest model) with comprehensive knowledge base

## 🌐 Deploy to Vercel (Recommended)

1. **Push to GitHub**: Already done at https://github.com/Hiba-Shahid/My-Portfolio
2. **Deploy to Vercel**: 
   - Go to https://vercel.com → "New Project" → Import repo
   - Framework: **Vite** (auto-detected)
   - Add Environment Variable: `VITE_MISTRAL_API_KEY` = your Mistral API key
   - Click **Deploy** — done!

## � Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_MISTRAL_API_KEY=your_mistral_api_key_here
```

### Resume Setup
The resume file is located at `public/Hiba_Shahid_Resume.pdf`. To update:
1. Replace the file in the `public/` folder
2. The download links will automatically work

### AI Customization
To modify the AI assistant's knowledge base, edit the `KNOWLEDGE_BASE` constant in `src/components/RAGAgent.jsx`.

## 🎨 Customization

### Colors
All colors are CSS variables in `src/index.css` under `:root {}`:
- `--accent`: Primary accent color
- `--accent2`: Secondary accent color  
- `--accent3`: Tertiary accent color

### Content
- **Projects**: Update in `src/components/Projects.jsx`
- **Experience**: Update in `src/components/Sections.jsx`
- **Skills**: Update in `src/components/AboutSkills.jsx`
- **Hero Section**: Update in `src/components/Hero.jsx`

## 📱 Sections

- **Hero**: Introduction with animated stats and CTA buttons
- **About & Skills**: Personal background and technical expertise
- **Projects**: Showcase of work with live demos and GitHub links
- **Experience**: Professional timeline with detailed achievements
- **GitHub**: Repository statistics and quick access
- **Contact**: Multiple contact methods and resume download
- **AI Assistant**: Floating chat button for instant portfolio queries

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, CSS3
- **AI**: Mistral AI (RAG implementation)
- **Build Tool**: Vite
- **Deployment**: Vercel (recommended)
- **Version Control**: Git & GitHub

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Hiba Shahid**
